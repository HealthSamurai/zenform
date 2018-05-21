(ns zenform.events
  (:require [re-frame.core :as rf]
            [zenform.form :as form]))

(rf/reg-event-db
 ::on-change
 (fn [db [_ form-path field-path value]]
   (update-in db form-path form/on-change field-path value)))

(rf/reg-event-db
 ::init-form
 (fn [db [_ form]]
   (assoc-in db (:path form) form)))
