(ns zenform.form
  (:require [zenform.field :as field]))

(def form-defaults
  {:path nil
   :fields nil
   :validators nil
   :errors nil})

(defn get-full-path
  [field-path]
  (into [:fields] field-path))

(defn make-form
  [path fields & [opt]]
  (let [form (merge form-defaults opt)]
    (reduce
     (fn [form field]
       (let [path (get-full-path (:path field))]
         (assoc-in form path field)))
     form fields)))

(defn on-change
  [form field-path value]
  (update-in form (get-full-path field-path) field/on-change value))
