(ns zenform.events
  (:require [re-frame.core :as rf]
            [zenform.node :as node]))

(rf/reg-event-db
 :zf/init-form
 ;; Puts a form into the database.
 (fn [db [_ form form-path]]
   (assoc-in db form-path form)))

(rf/reg-event-db
 :zf/on-input
 (fn [db [_ form-path field-path value]]
   (update-in db form-path node/trigger-input field-path value)))

(rf/reg-event-db
 :zf/on-change
 (fn [db [_ form-path field-path value]]
   (update-in db form-path node/trigger-value field-path value)))

(rf/reg-event-db
 :zf/add-field
 (fn [db [_ form-path coll-path]]
   (update-in db form-path node/form-add-field coll-path)))

(rf/reg-event-db
 :zf/del-field
 (fn [db [_ form-path coll-path index]]
   (update-in db form-path node/form-del-field coll-path index)))

(rf/reg-event-db
 :zf/set-value
 (fn [db [_ form-path value]]
   (update-in db form-path node/set-value value)))

(rf/reg-event-fx
 :zf/submit
 ;; Takes a form path and two event names, success and fail respectively.
 ;; The success one is called when a form is completely valid, otherwise
 ;; the failure event is called (if passed).
 (fn [{db :db} [_ form-path event-ok event-err]]
   (let [form (get-in db form-path)
         form (node/validate-all form)
         ok? (node/node-ok? form)
         event (if ok? event-ok event-err)]
     (-> {:db (assoc-in db form-path form)}
         (merge (when event {:dispatch [event form-path]}))))))
