(ns zenform.subs
  (:require [re-frame.core :as rf]
            [zenform.form :as form]))

(rf/reg-sub
 ::get-field
 (fn [db [_ form-path field-path]]
   (let [form (get-in db form-path)]
     (form/get-field form field-path))))
