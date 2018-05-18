(ns ui.index-page
  (:require
   [zenform.core :as zenform]
   [re-frame.core :as rf]
   [ui.routes :as ui-routes]))

(def form-path [:user-form])

(def form-schema
  {:type "form"
   :fields {:name {:type :string}
            :email {:type :string}}})

(def init-value {:name "Nikolai" :email "nik@l.ai"})

(defn index []
  (rf/dispatch [:zenform/init form-path form-schema init-value])
  (fn [_]
    [:div.row
     
     [:div.col
      [:div.form
       [:div.zen-row
        [:span.zen-label "Name"]
        [:div.zen-col
         [:div.zen-input [zenform/input {:form-path form-path :path [:name]}]]
         [:div.zen-notes [:code (pr-str ['zenform/input {:form-path form-path :path [:name]}])]]]]

       [:br]
       [:div.zen-row
        [:span.zen-label "Email"]
        [:div.zen-col
         [:div.zen-input [zenform/input {:form-path form-path :path [:email]}]]
         [:div.zen-notes [:code (pr-str ['zenform/input {:form-path form-path :path [:email]}])] ]]]]]

     [:div.col

      [:h3 "Init value:"]
      [zenform/pprint init-value]

      [:h3 "Form value:"]
      [zenform/form-value form-path]
      [:hr]
      [:h3 "Form model"]
      [zenform/form-model form-path]]]))

(ui-routes/reg-page
 :index {:title "Welcome" :w 1 :cmp index})

