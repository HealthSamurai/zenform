(ns zenform.events
  (:require [re-frame.core :as rf]
            [zenform.form :as form]))

(rf/reg-event-db
 ::init-form
 (fn [db [_ form]]
   (assoc-in db (:path form) form)))

(rf/reg-event-db
 ::on-change
 (fn [db [_ form-path field-path value]]
   (update-in db form-path form/on-change field-path value)))

(rf/reg-event-db
 ::clear-field-errors
 (fn [db [_ form-path field-path]]
   (update-in db form-path form/clear-field-errors field-path)))

(rf/reg-event-db
 ::set-values
 (fn [db [_ form-path values]]
   (update-in db form-path form/set-values values)))

(rf/reg-event-db
 ::validate-form
 (fn [db [_ form-path]]
   (update-in db form-path form/validate)))
