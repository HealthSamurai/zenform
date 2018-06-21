(ns zenform.model
  (:require [zenform.validators :as validators]
            [clojure.string :as str]
            [re-frame.core :as rf]))

(defn *form [sch path val]
  (cond
    (= :form (:type sch))
    (assoc (dissoc sch :fields) :value
           (reduce (fn [acc [k *sch]]
                     (let [v (get val k)]
                       (assoc acc k (*form *sch (conj path k) v))))
                   {} (:fields sch)))

    (= :collection (:type sch))
    (assoc sch :value
           (->> (map-indexed (fn [i *val]
                               [i (*form
                                   (dissoc (:item sch) :value)
                                   (conj path i)
                                   *val)]) val)
                (into {})))

    (:type sch)
    (assoc sch :value val)

    :else val))

(defn form
  "create form model from schema and defaults"
  [schema & [value]]
  (*form schema [] (or value {})))

(defn get-node-path  [pth]
  (reduce (fn [acc x] (conj acc :value x)) [] pth))

(defn get-value-path  [pth]
  (conj (get-node-path pth) :value))

(defn *get-value [form]
  (cond
    (and (:value form) (= :collection (:type form)))
    (let [res (->> (mapv *get-value (mapv second (sort-by first (:value form))))
                   (filterv #(not (nil? %))))]
      (when-not (empty? res) res))
    

    (and  (map? form) (map? (:value form)) (= :form (:type form)))
    (let [res (reduce (fn [acc [k node]]
                        (let [v (*get-value node)]
                          (if-not (nil? v)
                            (assoc acc k v)
                            acc))) {} (:value form))]
      (when-not (empty? res) res))
    

    :else (:value form)))


(defn get-value
  "Get value for specific path; if path not passed returns form value"
  ([form path]
   (*get-value (get-in form  (get-node-path path))))
  ([form]
   (*get-value form)))


(defn validate-node [node v]
  (reduce (fn [errs [k cfg]]
            (if-let [msg (validators/validate (update cfg :type (fn [x] (or x k))) v)]
              (assoc errs k msg)
              errs)) nil (:validators node)))

(defn *on-value-set [node]
  (let [v (*get-value node)
        errs (validate-node node v)]
    (doall
     (for [[k args] (:on-change node)]
       (rf/dispatch [k v args])))
    (cond-> (dissoc node :errors)
      errs (assoc :errors errs))))


(defn set-value
  "Put value for specific path; run validations"
  [form path value]
  (let [value (if (and (string? value) (str/blank? value)) nil value)
        form (assoc-in form (get-value-path path) value)]
    (loop [form form path path]
      (if (nil? path)
        (*on-value-set form)
        (recur (update-in form (get-node-path path) *on-value-set)
               (butlast path))))))

;; this fn will fuck your brain
;; it evals all validators and collect errors
;; at the same time collect value
;; intended to be used at submit
(defn *eval-form [{tp :type v :value :as node}]
  (if (or (= tp :collection) (= tp :form))
    (let [{v :value :as res}
          (reduce (fn [res [idx n]]
                    (let [{v :value err :errors ch-node :form} (*eval-form n)
                          res (if (empty? err) res
                                  (update res :errors (fn [es]
                                                        (reduce (fn [es [err-k err-v]]
                                                                  (assoc es (into [idx] err-k) err-v))
                                                                es err))))
                          res (-> res (assoc-in [:form :value idx] ch-node))]
                      (cond-> res 
                        (and (not (nil? v)) (= tp :collection)) (update :value conj v)
                        (and (not (nil? v)) (= tp :form))       (assoc-in [:value idx] v)))
                    ) {:value   (if (= tp :form) {} []) :errors  {} :form node} v)
          errs (validate-node node v)]
      (cond-> (update res :value (fn [x] (when-not (empty? x) x)))
        errs (assoc-in [:errors []] errs)
        errs (assoc-in [:form :errors] errs)))

    (let [errs (validate-node node v)
          node (cond-> (assoc node :touched true) errs (assoc :errors errs))]
      (cond-> {:value v :form node}
        errs (assoc :errors {[] errs})))))

(defn eval-form [form]
  (*eval-form form))

(rf/reg-event-db
 :zf/init 
 (fn [db [_ form-path schema value]]
   (assoc-in db form-path (form schema value))))

(rf/reg-event-db
 :zf/set-value
 (fn [db [_ form-path path v]]
   (println "setting form value: " form-path path v)
   (update-in db form-path (fn [form] (set-value form path v)))))

(rf/reg-sub
 :zf/node
 (fn [db [_ form-path path]]
   (-> db
       (get-in form-path)
       (get-in (get-node-path path)))))

(rf/reg-sub
 :zf/get-value
 (fn [db [_ form-path path]]
   (let [form (get-in db form-path)]
     (if path
       (get-value form path)
       (get-value form)))))


