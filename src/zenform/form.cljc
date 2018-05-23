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
   :errors nil
   :defaults nil})

;;
;; Helpers
;;

(defn get-field-path
  "For a field path, returns a full its path relatively to the form."
  [field-path]
  (into [:fields] [field-path]))

(defn list-fields
  "Returns a list of form fields."
  [form]
  (-> form :fields vals))

(defn set-values
  [form values]
  (reduce
   (fn [form field]
     (let [not-found ::not-found
           {field-path :path} field
           value (get-in values field-path not-found)]
       (if (not= value not-found)
         (update-in form (get-field-path field-path) field/trigger value)
         form)))
   form
   (list-fields form)))

(defn set-fields
  "Adds a set of fields into a form's internal storage."
  [form fields]
  (reduce
   (fn [form field]
     (let [path (get-field-path (:path field))]
       (assoc-in form path field)))
   form fields))

;;
;; Constructor
;;

(defn make-form
  "Returns a new form object.

  Params:

  `path`      : vector, a form path where to store it in the database;
  `fields`    : vector, a list of fields;
  `opt`       : map, any other options to override defaults, see `form-defaults`."

  [path fields & [opt]]
  (let [params {:path path}
        {:keys [defaults]} opt
        form (merge form-defaults opt params)]
    (-> form
        (set-fields fields)
        (set-values defaults))))

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

(defn get-fields-errors
  "Returns a map of fields' errors."
  [form]
  (reduce
   (fn [result field]
     (let [{:keys [path errors]} field]
       (if errors
         (assoc-in result path errors)
         result)))
   nil (list-fields form)))

(defn get-field-errors
  "Returns a list of errors for a single field."
  [form field-path]
  (when-let [field (get-field form field-path)]
    (field/get-errors field)))

(defn fields-ok?
  [form]
  (every? field/ok? (list-fields form)))

(defn form-ok?
  [form]
  (and (fields-ok? form)
       (-> form :errors nil?)))

(defn validate
  "Validates the form. Runs validators upon form's cleaned values
  if there weren't errors when coercing and validating them.
  Fills `:errors` field with a list of errors."
  [{:keys [validators] :as form}]
  (if (fields-ok? form)
    (let [values (get-clean-values form)
          *errors (transient [])]
      (doseq [val validators]
        (when-not (val/validate-safe val values)
          (conj! *errors (:message val))))
      (assoc form :errors (-> *errors persistent! not-empty)))
    form))

;;
;; Main update event
;;

(defn trigger
  "Triggers the main update pipeline when any field changes."
  [form field-path value]
  (-> form
      (update-in (get-field-path field-path) field/trigger value)
      validate))
