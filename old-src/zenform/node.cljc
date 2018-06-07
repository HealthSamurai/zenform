(ns zenform.node
  (:require [zenform.validators :as val]
            [clojure.walk :as walk]
            [clojure.string :as s]
            #?(:clj [zenform.util :refer [with-catch]]
               :cljs [zenform.util :refer-macros [with-catch]])))

;;
;; Clojure 1.9 features
;;

#?(:clj
   (when-not (resolve 'clojure.core/int?)
     (defn int?
       "Return true if x is a fixed precision integer"
       {:added "1.9"}
       [x] (or (instance? Long x)
               (instance? Integer x)
               (instance? Short x)
               (instance? Byte x)))))

#?(:clj
   (when-not (resolve 'clojure.core/boolean?)
     (defn boolean?
       "Return true if x is a Boolean"
       {:added "1.9"}
       [x] (instance? Boolean x))))

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
   {:type :form
    :fields nil
    :defaults nil}))

(def coll-defaults
  (merge
   node-defaults
   {:type :coll
    :fields nil}))

(def field-defaults
  (merge
   node-defaults
   {:type :field
    :field-type nil
    :value nil
    :required? false
    :message-required "This value is required"
    :message-parse "Wrong field value"}))

;;
;; Helpers
;;

(defn head-tail
  [coll]
  [(first coll) (rest coll)])

(defn node?
  "Checks wether it's a form's node."
  [node]
  (and
   (map? node)
   (get #{:form :coll :field} (:type node))))

(defmulti node-children
  "For a given node, returns its child nodes. "
  :type)

(defmethod node-children :default
  [node])

(defmethod node-children :form
  [form]
  (-> form :fields vals))

(defmethod node-children :coll
  [coll]
  (-> coll :fields))

(defn iter-node
  "Returns a flat list of all the nodes from the top to the bottom."
  [node]
  (tree-seq node? node-children node))

;;
;; Setting fields
;;

(defmulti set-fields
  "Assigns a set of fields to a form or a collection."
  :type)

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

(defn make-form
  [id fields & [opt]]
  (-> form-defaults
      (merge opt)
      (assoc :type :form)
      (assoc :id id)
      (set-fields fields)))

(defn make-coll
  [id fields & [opt]]
  (-> coll-defaults
      (merge opt)
      (assoc :type :coll)
      (assoc :id id)
      (set-fields fields)))

(defn make-field
  [field-type id & [opt]]
  (-> field-defaults
      (merge opt)
      (assoc :id id :field-type field-type)))

(def text-field (partial make-field :text))

(def email-field (partial make-field :email))

(def integer-field (partial make-field :integer))

(def boolean-field (partial make-field :boolean))

;;
;; Values
;;

(defmulti get-value
  "For a give node, recursively returns its value.
  For a form, returns a map of values. For a collection,
  returns a vector of values."
  :type)

(defmethod get-value :form
  [{:keys [fields]}]
  (into {} (for [[id node] fields]
             [id (get-value node)])))

(defmethod get-value :coll
  [coll]
  (mapv get-value (:fields coll)))

(defmethod get-value :field
  [field]
  (:value field))

(defn clear-value
  [node]
  (assoc node :value nil))

(defmulti set-value
  "For a given node, recursively sets values. For a form,
  takes a map of values. For a collection, takes a vector
  of values. For a field, takes a scalar value (string, int, etc)."
  :type)

(defmethod set-value :form
  [{:keys [fields] :as form} values]
  (reduce-kv
   (fn [form id field]
     (if (contains? values id)
       (let [value (get values id)]
         (update-in form [:fields id] set-value value))
       form))
   form
   fields))

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

(defmethod set-value :field
  [field value]
  (assoc field :value value))

;;
;; Paths and fields
;;

(defn get-field-path
  "Returns form's internal path to a field.
  (get-field-path [:foo :bar])
  (:fields :foo :fields :bar)"

  [path]
  (interleave (repeat :fields) path))

(defn get-field
  "For a form or a node, returns a child node by it's path."
  [node path]
  (get-in node (get-field-path path)))

(defn update-form
  "High-level function to update a child node in a form by it's path
  and some function that takes a node and returns an updated node.
  The rest args for that function are also supported."
  [form path field-func & args]
  (let [field-path (get-field-path path)
        field (get-in form field-path)]
    (if field
      (apply update-in form field-path field-func args)
      form)))

(defmulti add-field
  "Adds a new field to a collection (when a user presses a plus button)."
  :type)

(defmethod add-field :coll
  [coll]
  (if-let [field (-> coll :fields last)]
    (update coll :fields conj field)
    coll))

(defn vec-remove
  "Custom wrapper that removes an item from a vector by its index. Returns a new vector."
  [coll i]
  (let [limit (count coll)]
    (if (and (>= i 0) (< i limit))
      (let [left (subvec coll 0 i)
            right (subvec coll (inc i) (count coll))]
        (into left right))
      coll)))

(defmulti del-field
  "Removes a field from a collection (when a user presses a minus button)."
  :type)

(defmethod del-field :coll
  [coll index]
  (if-let [field (-> coll :fields last)]
    (update coll :fields vec-remove index)
    coll))

(defn form-add-field
  [form coll-path]
  (update-form form coll-path add-field))

(defn form-del-field
  [form coll-path index]
  (update-form form coll-path del-field index))

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

(defn get-node-errors
  [{:keys [errors]}]
  errors)

(defn get-path-errors
  [form path]
  (when-let [node (get-field form path)]
    (get-node-errors node)))

(defn node-ok?
  "Recursively checks if a node valid or not. For the positive result,
  all the child nodes should also be valid."
  [node]
  (not (some get-node-errors (iter-node node))))

(defmulti get-errors :type)

(defmethod get-errors :field
  [{:keys [errors]}]
  errors)

(defmethod get-errors :coll
  [{:keys [errors fields]}]
  {:errors errors
   :fields (mapv get-errors fields)})

(defmethod get-errors :form
  [{:keys [errors fields]}]
  {:errors errors
   :fields (into {} (for [[id field] fields]
                      [id (get-errors field)]))})

;;
;; Coercion
;;

(defmulti unparse :field-type)

(defn unparse-safe [field]
  (with-catch (unparse field)))

(defmethod unparse :default
  [{:keys [value]}]
  (cond
    (string? value) value
    :else (str value)))

(defmulti parse :field-type)

(defn parse-safe [field]
  (with-catch (parse field)))

(defmethod parse :text
  [{:keys [value]}]
  (cond
    (string? value) value
    :else (str value)))

(defmethod parse :email
  [{:keys [value]}]
  (cond
    (string? value)
    (-> value s/trim s/lower-case)))

#?(:clj
   (defn parse-int [x]
     (Integer/parseInt x)))

#?(:cljs
   (defn parse-int [x]
     (let [val (js/parseInt x)]
       (when-not (js/isNaN val)
         val))))

(defmethod parse :integer
  [{:keys [value]}]
  (cond
    (int? value) value
    (string? value)
    (-> value s/trim parse-int)))

(defmethod parse :boolean
  [{:keys [value]}]
  (cond
    (boolean? value) value

    (string? value)
    (let [value (-> value s/trim s/lower-case)]
      (cond
        (contains? #{"true" "yes" "on" "1"} value) true
        (contains? #{"false" "no" "off" "0"} value) false))

    (int? value)
    (cond
      (= value 0) false
      (= value 1) true)))

(defmulti coerce-field :type)

(defmethod coerce-field :default
  [node] node)

(defmethod coerce-field :field
  [{:keys [message-parse] :as field}]
  (let [value (parse-safe field)]
    (cond

      ;; special case: we do not want to have empty strings
      (= value "")
      (set-value field nil)

      ;; any non-nil value is considered as success
      (some? value)
      (set-value field value)

      :else
      (set-error field message-parse))))

;;
;; Validation
;;

(defmulti validate-required :type)

(defmethod validate-required :default
  [node] node)

(defmethod validate-required :field
  [{:keys [value required? message-required] :as node}]
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

(defn validate-validators
  [{:keys [validators] :as node}]
  (loop [node node
         validators validators]
    (if (empty? validators)
      node
      (let [[val vals] (head-tail validators)
            node (apply-validator node val)]
        (recur node vals)))))

(defn validate-node [node]
  (-> node
      clear-errors
      coerce-field
      validate-required
      validate-validators))

(defn walker-validate [node]
  (if (node? node)
    (validate-node node)
    node))

(defn validate-all
  [node]
  (walk/postwalk walker-validate node))

;;
;; Events
;;

(defn dispatch-change
  [{:keys [on-change] :as node} & [params]]
  (when on-change
    (println ::on-change params)) ;; TODO dispatch
  node)

;;
;; Trigger input
;;

(defmulti trigger-field-input :type)

(defmethod trigger-field-input :default
  [node] node)

(defmethod trigger-field-input :field
  [field input]
  (-> field
      (clear-errors)
      (set-value input)))

(defn trigger-input
  [form path input]
  (update-form form path trigger-field-input input))

;;
;; Trigger bubbling
;;

(defmulti trigger-field-value :type)

(defmethod trigger-field-value :default
  [node] node)

(defmethod trigger-field-value :field
  [field value]
  (-> field
      (trigger-field-input value)
      (validate-node)))

(defn upward-paths
  [path]
  (loop [path (butlast path)
         result []]
    (if (empty? path)
      result
      (let [result (conj result path)
            path (butlast path)]
        (recur path result)))))

(defn trigger-value
  [form path value]
  (let [form (update-form form path trigger-field-value value)
        paths (upward-paths path)]
    (loop [form form
           paths paths]
      (if (empty? paths)
        (validate-node form) ;; validate the top-level node too
        (let [[path paths] (head-tail paths)
              form (update-form form path validate-node)]
          (recur form paths))))))
