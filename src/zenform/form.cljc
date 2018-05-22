(ns zenform.form
  (:require [zenform.field :as field]
            [zenform.validators :as val]))

;;
;; Constructor
;;

(def ^{:doc "A set of fields each form should have."}
  form-defaults
  {:path nil
   :fields nil
   :validators nil
   :errors nil})

(defn get-field-path
  "For a field path, returns a full its path relatively to the form."
  [field-path]
  (into [:fields] [field-path]))

(defn make-form
  "Returns a new form object.

  Params:

  `path`      : vector, a form path where to store it in the database;
  `fields`    : vector, a list of fields;
  `validators`: vector, a list of validators;
  `opt`       : map, any other options to override defaults, see `form-defaults`."

  [path fields & [validators opt]]
  (let [params {:path path :validators validators}
        form (merge form-defaults opt params)]
    (reduce
     (fn [form field]
       (let [path (get-field-path (:path field))]
         (assoc-in form path field)))
     form fields)))

;;
;; Base actions
;;

(defn get-field
  "Returns a field object by its path."
  [form field-path]
  (get-in form (get-field-path field-path)))

(defn clear-field-errors
  [form field-path]
  (update-in form (get-field-path field-path) field/clear-errors))

(defn list-fields
  "Returns a list of form fields."
  [form]
  (-> form :fields vals))

(defn set-value
  [form field-path value]
  (update-in (get-field-path field-path) field/set-value value))

(defn get-clean-values
  "Returns a merged map of form's clean values for those fields
  that have passed coercion and validation."
  [form]
  (reduce
   (fn [result field]
     (let [{:keys [path value-clean required?]} field]
       (if (or (some? value-clean) required?)
         (assoc-in result path value-clean)
         result)))
   nil (list-fields form)))

(defn get-form-errors
  "Returns a list of form's own errors, not fields' ones."
  [form]
  (:errors form))

(defn get-errors
  "Returns a map of fields' errors."
  [form]
  (reduce
   (fn [result field]
     (let [{:keys [path errors]} field]
       (if errors
         (assoc-in result path errors)
         result)))
   nil (list-fields form)))

(defn validate
  "Validates the form. Runs validators upon form's cleaned values
  if there weren't errors when coercing and validating them.
  Fills `:errors` field with a list of errors."
  [form]
  (let [{:keys [validators errors]} form
        values  (get-values form)
        errors  (get-errors form)
        *form   (transient form)
        *errors (transient [])]
    (when (and values (not errors))
      (doseq [val validators]
        (when-not (val/validate-safe val values)
          (conj! *errors (:message val)))))
    (assoc! *form :errors (-> *errors persistent! not-empty))
    (persistent! *form)))

;;
;; Main update event
;;

(defn on-change
  "Triggers the main update pipeline when any field changes."
  [form field-path value]
  (-> form
      (update-in (get-field-path field-path) field/on-change value)
      validate))
