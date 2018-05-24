(ns zenform.node
  (:require [zenform.validators :as val]))

;;
;; Defaults
;;

(def node-defaults
  {:type nil
   :id nil
   :validators nil
   :errors nil
   :on-change nil})

(def form-defaults
  (merge
   node-defaults
   {:fields nil
    :defaults nil}))

(def field-defaults
  (merge
   node-defaults
   {:input nil
    :value nil
    :required? false
    :message-required "This value is required"
    :message-parse "Wrong field value"}))

(def coll-defaults
  (merge
   node-defaults
   {:fields nil}))

;;
;; Setting fields
;;

(defmulti set-fields :type)

(defmethod set-fields :form
  [form fields]
  (assoc form :fields
         (into {} (for [{id :id :as field} fields]
                    [id field]))))

(defmethod set-fields :coll
  [coll fields]
  (assoc coll :fields fields))

;;
;; Constructors
;;

(defn make-coll
  [id fields & [opt]]
  (-> coll-defaults
      (merge opt)
      (assoc :type :coll)
      (assoc :id id)
      (set-fields fields)))

(defn make-form
  [id fields & [opt]]
  (-> form-defaults
      (merge opt)
      (assoc :type :form)
      (assoc :id id)
      (set-fields fields)))

(defn make-field
  [type id & [opt]]
  (-> field-defaults
      (merge opt)
      (assoc :id id)
      (assoc :type type)))

(def text-field (partial make-field :text))

(def integer-field (partial make-field :integer))

;;
;; Values
;;

(defmulti get-value :type)

(defmethod get-value :form
  [{:keys [fields]}]
  (into {} (for [[id node] fields]
             [id (get-value node)])))

(defmethod get-value :coll
  [coll]
  (mapv get-value (:fields coll)))

(defmethod get-value :default
  [field]
  (:value field))

(defn clear-value
  [node]
  (assoc node :value nil))

(defmulti set-value :type)

(defmethod set-value :form
  [{:keys [fields] :as form} values]
  (reduce-kv
   (fn [form id field]
     (let [value (get values id)]
       (if (some? value)
         (update-in form [:fields id] set-value value)
         form)))
   form
   fields))

(defn head-tail [coll]
  [(first coll) (rest coll)])

(defmethod set-value :coll
  [{:keys [fields] :as coll} values]
  (let [values (take (count fields) values)
        pairs (map-indexed vector values)]
    (loop [coll coll
           pairs pairs]
      (if (empty? pairs)
        coll
        (let [[pair pairs] (head-tail pairs)
              [index value] pair
              coll (update-in coll [:fields index] set-value value)]
          (recur coll pairs))))))

(defmethod set-value :default
  [field value]
  (assoc field :value value))

;;
;; Errors
;;

(defn set-errors
  [node errors]
  (assoc node :errors errors))

(defn set-error
  [node error]
  (set-errors node [error]))

(defn clear-errors
  [node]
  (set-errors node nil))

(defn get-errors
  [node]
  (:errors node))

;;
;; Validation
;;

#_
(defn validate-required
  [{:keys [required? message-required] :as node}]
  (if (and required? (nil? value))
    (set-error node message-required)
    node))

(defn apply-validator
  [{:keys [errors] :as node}
   {:keys [message] :as validator}]
  (if errors
    node
    (let [value (get-value node)]
      (if (val/validate-safe validator value)
        node
        (set-error node message)))))

(defn validate
  [{:keys [validators] :as node}]
  (loop [node node
         validators validators]
    (if (empty? validators)
      node
      (let [validator (first validators)
            validators (rest validators)
            node (apply-validator node validator)]
        (recur node validators)))))

;;
;; Paths
;;

(defn get-field-path [path]
  (interleave (repeat :fields) path))

;;
;; Input
;;

(defn set-input
  [field input]
  (assoc field :input input))

;;
;; Triggers
;;

#_
(defn trigger-on-change
  [{:keys [on-change] :as node}]
  (when on-change
    (:trigger-todo {}))
  node)

(defn trigger-input
  [field input]
  (-> field
      (clear-errors)
      (clear-value)
      (set-input input)))

(defn trigger-value
  [field input]
  (-> field
      (trigger-input input)
      #_
      (coerce)
      #_
      (validate-required)
      (validate)))

#_
(defn trigger-input
  [form path input]
  (let [field-path (get-field-path path)
        field (get-in form field-path)]
    (if field
      (assoc-in form field-path
                (-> field
                    (clear-errors)
                    (clear-value)
                    (set-input input))))
    form))

#_
(defn trigger-value
  [form path input]
  (let [field-path (get-field-path path)
        field (get-in form field-path)]
    (if field
      (assoc-in form field-path
                (-> field
                    (clear-errors)
                    (clear-value)
                    (set-input input))))
    form))
