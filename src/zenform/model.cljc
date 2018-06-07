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
    (->> (mapv *get-value (mapv second (sort-by first (:value form))))
         (filterv #(not (nil? %))))

    (and  (map? form) (map? (:value form)) (= :form (:type form)))
    (reduce (fn [acc [k node]]
              (let [v (*get-value node)]
                (if-not (nil? v)
                  (assoc acc k v)
                  acc))) {} (:value form))

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


(rf/reg-event-db
 :zf/init 
 (fn [db [_ form-path schema value]]
   (assoc-in db form-path (form schema value))))

(rf/reg-event-db
 :zf/set-value
 (fn [db [_ form-path path v]]
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


