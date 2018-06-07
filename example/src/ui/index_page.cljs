(ns ui.index-page
  (:require
   [zenform.core :as zenform]
   [re-frame.core :as rf]
   [ui.routes :as ui-routes]))

(def form-path [:user-form])

(def form-schema
  {:type :form
   :fields {:name {:type :string
                   :validators {:required {}}}
            :email {:type :string
                    :validators {:email {}}}}})

(def init-value {:name "Nikolai" :email "nik@l.ai"})

(defn index []
  (rf/dispatch [:zf/init form-path form-schema init-value])
  (fn [_]
    [:div.container
     [:h1 "Welcome to zenform!"]
     [:div.row
      
      [:div.col
       [:div.form
        [:div.zen-row
         [:div.form-group
          
          [:label "Name: "
           [:code (pr-str ['zenform/input form-path [:name]])]]
          [zenform/text-input form-path [:name]]
          [zenform/invalid-feedback form-path [:name]]]]

        [:br]
        [:div.form-group
         [:label "Email: " [:code (pr-str ['zenform/text-input form-path [:email]])]]
         [zenform/text-input form-path [:email]]
         [zenform/invalid-feedback form-path [:email]]]]]

      [:div.col

       [:h3 "Init value:"]
       [zenform/pprint init-value]

       [:h3 "Form value:"]
       [zenform/form-value form-path]
       [:hr]
       [:h3 "Form model"]
       [zenform/node form-path]]]]))

(ui-routes/reg-page
 :index {:title "Welcome" :w 1 :cmp index})

