(ns zenform.form
  (:require [zenform.field :as field]))

(def form-defaults
  {:path nil
   :fields nil
   :validators nil
   :errors nil})

(defn get-field-path
  [field-path]
  (into [:fields] [field-path]))

(defn make-form
  [path fields & [opt]]
  (let [form (merge form-defaults opt {:path path})]
    (reduce
     (fn [form field]
       (let [path (get-field-path (:path field))]
         (assoc-in form path field)))
     form fields)))

(defn on-change
  [form field-path value]
  (update-in form (get-field-path field-path) field/on-change value))

(defn get-field
  [form field-path]
  (get-in form (get-field-path field-path)))

(defn list-fields [form]
  (-> form :fields vals))

(defn get-values
  [form]
  (reduce
   (fn [result field]
     (let [{:keys [path value-clean required?]} field]
       (if (or value-clean required?)
         (assoc-in result path value-clean)
         result)))
   nil (list-fields form)))

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
  (let [{:keys [validators]} form
        values (get-values form)]


    )





  )
