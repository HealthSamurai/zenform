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

(def validator-range
  (val/range 1 10 {:message "The value doesn't fit (1, 10) range"}))

(def form
  (form/make-form
   [:some :form]
   [(field/integer-field
     [:foo :bar :baz]
     {:required? true
      :message-parse "This value is not an integer."
      :validators [validator-range]})]))

(defn form-view []
  [:div
   [:p "Input a number b/w 1 and 10"]
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
