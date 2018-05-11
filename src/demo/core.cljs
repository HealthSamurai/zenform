(ns demo.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [zenform.core :as zenform]))

(defn get-by-id [id]
  (.getElementById js/document id))

(def form-path [::form-path])

(def form-schema
  {:type "form"
   :actions {::create {:validate true} ::edit {:validate true}}
   :fields {:co-pay {:type :float
                     :on-change {:event ::on-change-co-pay}}
            :pre-pay {:type :float
                      :on-change {:event ::on-change-pre-pay}}
            :method {:path [:method]
                     :on-change {:event ::on-change-method}}
            :amount {:path [:amount]
                     :type :float}
            :notes {:path [:notes]
                    :type :string}}})

(def form-vals {:co-pay 10})

(rf/reg-event-db
 ::on-change-co-pay
 (fn [db [_ {:keys [value]}]]
   (js/console.log value)
   db))

(defn view-form []

  (rf/dispatch [:zenform/init form-path form-schema form-vals])

  [:div.form

   [:div.inp-block.inp-2.spacer
    [:span.lbl "Co-pay"]
    [:div.inp
     [zenform/input
      {:form-path form-path :path [:co-pay]}]]]

   [:div.inp-block.inp-2.spacer
    [:span.lbl "Notes"]
    [:div.inp
     [zenform/input
      {:form-path form-path :path [:notes]}]]]
#_
   [:div.form-row
    [:div.inp-block.inp-2
     [:span.lbl "CPT"]
     [:span.inp
      [zenform/select
       {:form-path form-path
        :path [:cpt]
        :search [:search/search :CPT [:cpt]]
        :items [:search/result [:cpt]]
        :loading [:search/loading [:cpt]]}]]]]

   [:div.inp-block.inp-2.spacer
    [:span.lbl "Button Select"]
    [:div.inp
     [zenform/button-select
      {:form-path form-path
       :path [:gender]
       :items ["Male" "Female" "Other"]}]]]
#_
   [:div.inp-block.inp-2.spacer
    [:span.lbl "Radio"]
    [:div.inp
     [zenform/radio
      {:form-path form-path :path [:radio]}]]]
#_
   [:div.inp-block.inp-2.spacer
    [:span.lbl "Date Input"]
    [:div.inp
     [zenform/date-input
      {:form-path form-path :path [:date-input]}]]]
#_
   [:div.inp-block.inp-2.spacer
    [:span.lbl "Calendar"]
    [:div.inp
     [zenform/calendar
      {:form-path form-path :path [:calendar]}]]]

   ])

(defn init []
  (r/render [view-form] (get-by-id "app")))

(init)
