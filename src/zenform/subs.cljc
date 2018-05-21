(ns zenform.subs
  (:require [re-frame.core :as rf]
            [zenform.form :as form]))

(rf/reg-sub
 ::get-field
 (fn [db [_ form-path field-path]]
   (when-let [form (get-in db form-path)]
     (form/get-field form field-path))))

(rf/reg-sub
 ::get-form-errors
 (fn [db [_ form-path]]
   (when-let [form (get-in db form-path)]
     (form/get-errors form))))

(rf/reg-sub
 ::get-form-values
 (fn [db [_ form-path]]
   (when-let [form (get-in db form-path)]
     (form/get-values form))))
