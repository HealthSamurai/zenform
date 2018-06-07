(ns zenform.subs
  (:require [re-frame.core :as rf]
            [zenform.node :as node]))

(rf/reg-sub
 :zf/field
 (fn [db [_ form-path field-path]]
   (when-let [form (get-in db form-path)]
     (node/get-field form field-path))))

(rf/reg-sub
 :zf/form-errors
 (fn [db [_ form-path]]
   (when-let [form (get-in db form-path)]
     (node/get-node-errors form))))

(rf/reg-sub
 :zf/node-errors
 (fn [db [_ form-path node-path]]
   (when-let [form (get-in db form-path)]
     (node/get-path-errors form node-path))))

(rf/reg-sub
 :zf/values
 (fn [db [_ form-path]]
   (when-let [form (get-in db form-path)]
     (node/get-value form))))

(rf/reg-sub
 :zf/form-ok?
 (fn [db [_ form-path]]
   (when-let [form (get-in db form-path)]
     (node/node-ok? form))))
