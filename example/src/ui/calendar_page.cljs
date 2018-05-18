(ns ui.calendar-page
  (:require
   [zenform.core :as zenform]
   [re-frame.core :as rf]
   [ui.routes :as ui-routes]))

(def form-path [:user-form])

(def form-schema
  {:type "form"
   :fields {:start {:type :date}
            :end   {:type :date}}})

(def init-value {})

(defn index []
  (rf/dispatch [:zenform/init form-path form-schema init-value])
  (fn [_]
    [:div.row
     
     [:div.col
      [:div.form
       [:div.zen-row
        [:span.zen-label "Calendar"]
        [:div.zen-notes [:code (pr-str ['zenform/calendar {:form-path form-path :path [:start]}])]]
        [:div.zen-input
         [zenform/calendar {:form-path form-path :path [:start]}]]]

       [:br]
       [:div.zen-row
        [:span.zen-label "Date"]
        [:div.zen-input [zenform/date-input {:form-path form-path :path [:end]}]]
        [:div.zen-notes [:code (pr-str ['zenform/input {:form-path form-path :path [:end]}])] ]]]]

     [:div.col

      [:h3 "Init value:"]
      [zenform/pprint init-value]

      [:h3 "Form value:"]
      [zenform/form-value form-path]
      [:hr]
      [:h3 "Form model"]
      [zenform/form-model form-path]]]))


(ui-routes/reg-page
 :calendar {:title "Calendar" :w 2 :cmp index})
