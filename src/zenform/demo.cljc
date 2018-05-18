(ns zenform.demo
  (:require [zenform.form :as form]
            [zenform.field :as field]
            [zenform.validators :as val]
            [zenform.widget :as widget]
            [zenform.events]
            [zenform.subs]
            #?(:cljs [reagent.core :as r])
            #?(:cljs [re-frame.core :as rf])
            ))

(def form
  (form/make-form
   [:some :form]
   [(field/integer-field
     [:foo :bar :baz]
     {:validators [(val/range 1 10)]})]))

(defn form-view []
  [:div
   [widget/text-input [:some :form] [:foo :bar :baz]]])

#?(:cljs
   (do

     (defn get-by-id [id]
       (.getElementById js/document id))

     (defn mount-form []
       )

     (defn init []
       (rf/dispatch [:zenform.events/put-form form])
       (r/render [form-view] (get-by-id "app")))

     (init)))
