(ns zenform.model
  #?(:cljs (:require-macros [reagent.ratom :refer [reaction run!]]))
  (:require
   [clojure.string :as str]
   [clojure.set :as set]
   [zenform.validators :as v]
   #?(:cljs  [reagent.core :as r])
   [re-frame.core :as rf]
   [zenform.zmethods :as zm]))

(defn errors [vals v]
  #_(not-empty
   (reduce-kv
    (fn [errs nm cfg]
      (if-let [{:keys [f message]} (get v/validators nm)]
        (if-not (f v)
          (assoc errs nm (or message "Error"))
          errs)))
    {} vals)))

(defn mk-form-data [sch path val]
  (cond
    (= "form" (:type sch))
    (assoc sch :value
           (reduce (fn [acc [k *sch]]
                     (let [v (get val k)
                           init (:init *sch)]
                       (assoc acc k
                              (cond->
                                (assoc *sch
                                       :value (mk-form-data *sch (conj path k) v)
                                       :path (conj path k))
                                init  (assoc :state (zm/init-input init *sch v))))))
                   {} (:fields sch)))

    (= "coll" (:type sch))
    (->> (map-indexed (fn [i *val]
                        [i (mk-form-data
                            (dissoc (:item sch) :value)
                            (conj path i)
                            *val)]) val)
         (into {}))

    :else val))

(defmulti coerce (fn [tp _] tp))

(defmethod coerce :number [_ v]
  ;; it is unclear what number means so lets use float here
  #?(:clj (if (string? v)
            (Float/parseFloat v)
            v))
  #?(:cljs
     (when (and v (not (str/blank? v)))
       (js/parseFloat v))))

(defmethod coerce :integer [_ v]
  #?(:clj (Integer/parseInt (str v)))
  #?(:cljs (when (and v (not (str/blank? v)))
             (js/parseInt v))))

(defmethod coerce :float [_ v]
  #?(:clj (if (string? v)
            (Float/parseFloat v)
            v))
  #?(:cljs
     (when (and v (not (str/blank? v)))
       (js/parseFloat v))))

(defmethod coerce :text [_ v] (str v))
(defmethod coerce :string [_ v] (str v))
(defmethod coerce :object [_ v] v)

(defn get-value
  "get value from form-model"
  [form-data]
  (cond
    (= (:type form-data) "form")
    (reduce-kv (fn [m k v]
                 ;; FIXME remove hack here
                 (if (and (contains? v :value) (or (nil? (:value v)) (:remove v)))
                   m (assoc m k (get-value v))))
               {} (:value form-data))

    (= (:type form-data) "coll")
    (->> (:value form-data)
         (mapv (fn [[i v]] [i (get-value v)]))
         (sort-by first)
         (mapv second))

    :else
    (if-let [tp (:type form-data)]
      (coerce tp (:value form-data))
      (:value form-data))))

(defmulti transform (fn [name dir _] [name dir]))

;; FIXME it seems that from cljs environment you can not defmethod multis that are defined in other namespace
(defmethod transform [:transform/snapshot :to]
  [_ _ resource]
  (let [res {:resourceType (:resourceType resource)
             :resource (dissoc resource :display)
             :display (:display resource)}]
    (merge res (select-keys resource [:id :uri]))))

(defmethod transform [:transform/snapshot :from]
  [_ _ resource]
  (assoc (:resource resource) :display (:display resource)))

(defmethod transform :default
  [name dir]
  (println "Error: No transform found for " name dir))

(defn transform? [el]
  (and (keyword? el) (= (namespace el) "transform")))

(defn fold-path [path value]
  (reduce
   (fn [value el]
     (cond
       (transform? el)
       (transform el :to value)

       (keyword? el)
       {el value}

       (vector? el)
       [value]

       (map? el)
       (merge el value)

       (fn? el)
       (el :to value)))
   value (reverse path)))

(comment
  (*transform [:a 0 {:a 1} :b (fn [_ v] v)] 2)

  )

(defn existing-path [path value]
  (loop [[el & rest] path
         v value
         p []]
    (cond
      (nil? el) [p nil]

      (or (transform? el) (fn? el))
      [p (conj rest el)]

      (vector? el)
      (let [next (first rest)]
        (cond
          (or (transform? next) (fn? next))
          [p (conj rest el)]

          (map? next)
          (let [r (filter
                   (fn [[n v]]
                     (set/subset? (set next) (set v)))
                   (map-indexed vector v))]
            (if-let [[n v] (first r)]
              (recur rest v (conj p n))
              [p (conj rest el)]))

          (keyword? next)
          (throw "Not implemented: zenform/existing-path for [[] :a]")))


      (map? el)
      (recur rest v p)

      (get v el)
      (recur rest (get v el) (conj p el))

      :else
      [(conj p el) rest])))

;; TODO move to tests once zenform is extracted
(comment
  (existing-path [:a [] :b] {:a [{:b 1}]})
  (existing-path [:a [] {:a 1} :c] {:a []})
  (existing-path [:a [] {:a 1} :c] {:a [{:a 1}]})
  (existing-path [identity :a :b] {:a 1})
  (existing-path [:a [] identity] {:a [{:b 2}]})
  )

(defn form-value [form-data]
  (let [paths (map (fn [[k v]]
                     {:id k :path (get-in form-data [:fields k :path]) :value v})
               (get-value form-data))]
    (reduce
     (fn [acc {:keys [id path value]}]
       (if path
         (let [[ex-p tr-p] (existing-path path acc)
               new-v (fold-path tr-p value)]
           (if (empty? ex-p)
             (merge acc new-v)
             (update-in acc ex-p (fn [v]
                                   (if (and (coll? new-v) (coll? v))
                                     (into v new-v)
                                     new-v)))))
         (assoc acc id value)))
     {} paths)))

(defn get-path  [pth]
  (reduce (fn [acc x]
            (conj acc :value x))
          [] pth))

(defn set-value [db fp p v]
  (let [pth (into fp (get-path p))
        d (get-in db pth)
        vals {} #_(into {} (filter (fn [[_ c]] (= (:event c) :change)) (:validators d)))
        d* (merge d {:value v
                     :errors (errors vals v)
                     :touched true})
        db (assoc-in db pth d*)]
    (loop [lp p]
      (let [ipth (into fp (get-path lp))
            node (get-in db ipth)]
        (when-let [on-change (:on-change node)]
          (rf/dispatch [(:event on-change)
                        (assoc on-change
                               :value (get-value node)
                               :form-path fp
                               :path lp)]))
        (when-not (empty? lp)
          (recur (butlast lp)))))
    db))

(rf/reg-event-db
 :zenform/on-change
 (fn [db [_ fp p v]]
   (set-value db fp p v)))

#?(:cljs
   (rf/reg-sub-raw
    :zenform/form-path
    (fn [db [_ fp p]]
      (let [cur (r/cursor db (into fp (get-path p)))]
        (reaction @cur)))))
#?(:clj
   (rf/reg-sub
    :zenform/form-path
    (fn [db [_ fp p]]
      (get-in db (into fp (get-path p))))))

;; TODO add recursive forms case
(defn form-errors [form]
  (reduce-kv (fn [errs nm field]
            (if (contains? field :validators)
              (if (not (:touched field))
                (assoc errs nm (errors (:validators field) (:value field)))
                (if-let [er (:errors field)]
                  (assoc errs nm er)
                  errs))
              errs))
          {} (:value form)))

(rf/reg-event-fx
 :zenform/action
 (fn [{db :db} [_ form-path action & params]]
   (let [form (get-in db form-path)
         {:keys [validate? event clear?]} (get-in form [:actions action])
         end (cond-> {}
               event (assoc :dispatch (conj (into [event] params) (form-value form)))
               clear? (assoc :db (assoc-in db form-path nil)))]
     (if validate?
       (let [to-validate (filter (fn [[k v]] (contains? v :validators)) (:value form))
             ;; alongside with updating db we can dispatch some kind of error action with all the errors
             errors (reduce
                     (fn [acc [nm inp]]
                       (let [vals (->> (:validators inp)
                                       (filter (fn [[n c]]
                                                 (= (:event c) :submit)))
                                       (into {}))
                             errs (errors vals (:value inp))]
                         (if (not-empty errs)
                           (assoc acc nm errs)
                           acc)))
                     {} to-validate)]
         (if (empty? errors)
           end
           {:db (update-in db (into form-path [:value])
                           (fn [inps]
                             (reduce-kv
                              (fn [inps nm errs]
                                (assoc-in inps [nm :errors] errs))
                              inps errors)))}))
       end))))

(defn unfold-path [path value]
  (reduce
   (fn [value el]
     (cond
       (and (transform? el) (not (nil? value)))
       (transform el :from value)

       (keyword? el)
       (get value el)

       (and (vector? el) (vector? value) (= (count value) 1))
       (first value)

       (vector? el) value

       (and (map? el) (vector? value))
       (first
        (filter
         #(set/subset? (set el) (set %)) value))

       (number? el)
       (get value el)

       (map? el)
       value

       (fn? el)
       (el :from value)))
   value path))

(comment
  (unfold-path [:a]))

(defn ->form-model [value schema]
  (reduce (fn [acc [k {:keys [datasource path type] :as field}]]
            (let [ds (some #(when (contains? value %) %)
                           (keys datasource))
                  [pth v]
                  (cond
                    ds [(get datasource ds) (get value ds)]
                    (contains? value :Self) [path (:Self value)])]
              (if-let [new-v (unfold-path pth v)]
                (assoc acc k (if (= type :number)
                               (str new-v)
                               new-v))
                acc)))
          {} (:fields schema)))

(rf/reg-event-db
 :zenform/set-value
 (fn [db [_ form-path value]]
   ;; TODO add on-change event here
   (let [form (get-in db form-path)
         new-value (->form-model value form)]
     (assoc-in db form-path
               (reduce (fn [form [k v]]
                         (assoc-in form [:value k :value] v))
                form new-value)))))

(defn init-form
  "get schema and initial value and create form-model in re-frame db"
  [db form-path schema init-value]
  (assoc-in db form-path (mk-form-data schema (conj form-path :value) (or init-value {}))))

(defn init [db [_ form-path schema init-value]]
  (init-form db form-path schema init-value))

(rf/reg-event-db :zenform/init init)
