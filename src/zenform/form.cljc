(ns zenform.form
  (:require [zenform.field :as field]
            [zenform.validators :as val]))

;;
;; Constructor
;;

(def form-defaults
  {:path nil
   :fields nil
   :validators nil
   :errors nil})

(defn get-field-path
  [field-path]
  (into [:fields] [field-path]))

(defn make-form
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
  [form field-path]
  (get-in form (get-field-path field-path)))

(defn clear-field-errors
  [form field-path]
  (update-in form (get-field-path field-path) field/clear-errors))

(defn list-fields [form]
  (-> form :fields vals))

(defn set-value
  [form field-path value]
  (update-in (get-field-path field-path) field/set-value value))

(defn get-values
  [form]
  (reduce
   (fn [result field]
     (let [{:keys [path value-clean required?]} field]
       (if (or (some? value-clean) required?)
         (assoc-in result path value-clean)
         result)))
   nil (list-fields form)))

(defn get-form-errors
  [form]
  (:errors form))

(defn get-errors
  [form]
  (reduce
   (fn [result field]
     (let [{:keys [path errors]} field]
       (if errors
         (assoc-in result path errors)
         result)))
   nil (list-fields form)))

(defn validate
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
  [form field-path value]
  (-> form
      (update-in (get-field-path field-path) field/on-change value)
      validate))
