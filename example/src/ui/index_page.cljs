(ns ui.index-page
  (:require
   [zenform.core :as zenform]
   [re-frame.core :as rf]
   [ui.routes :as ui-routes]
   [zenform.model :as model]))

(def form-path [:user-form])

(def form-schema
  {:type :form
   :fields {:name {:type :string
                   :validators {:required {}
                                :min-length {:value 10}
                                :pattern {:regex #"^[a-z]+$"
                                          :message "Only lowercase letters are allowed"}}}
            :nick  {:type :string
                   :validators {:required {}}}
            :email {:type :string
                    :validators {:email {}}}
            :role {:type :string
                   :items [{:value "admin" :display "admin"}
                           {:value "user" :display "user"}]}

            :active {:type :boolean
                     :toggle {false "Inactive" true "Active" nil "Inactive"}}}})

(def init-value {:name "Nikolai" :email "nik@l.ai"})

(rf/reg-event-db
 ::submit
 (fn [db _]
   (let [form (get-in db form-path)
         {*form :form v :value errs  :errors :as res} (model/eval-form form)]
     (println "Submit:" v)
     (-> db
         (assoc-in form-path *form)
         (assoc :errors errs)))))

(rf/reg-sub ::errors (fn [db _] (:errors db)))

(defn index []
  (rf/dispatch [:zf/init form-path form-schema init-value])
  (let [errors (rf/subscribe [::errors])]
    (fn [_]
      [:div.container
       [:div.row
        [:div.col
         [:h3 "Zenform"]
         [:div.form
          [:div.form-group
           [:label "Name: "
            [:code (pr-str ['zenform/input form-path [:name]])]]
           [zenform/text-input form-path [:name]]
           [zenform/invalid-feedback form-path [:name]]]

          [:div.form-group
           [:label "Nick: "
            [:code (pr-str ['zenform/input form-path [:nick]])]]
           [zenform/text-input form-path [:nick]]
           [zenform/invalid-feedback form-path [:nick]]]

          [:br]
          [:div.form-group
           [:label "Email: " [:code (pr-str ['zenform/text-input form-path [:email]])]]
           [zenform/text-input form-path [:email]]
           [zenform/invalid-feedback form-path [:email]]]]

         [:div.form-group
          [:label "Role: " [:code (pr-str ['zenform/ut form-path [:email]])]]
          [zenform/select form-path [:role]]
          [zenform/invalid-feedback form-path [:role]]]

         [:div.form-group
          [:label "Active: " [:code (pr-str ['zenform/toggle form-path [:active]])]]
          [zenform/toggle form-path [:active]]
          [zenform/invalid-feedback form-path [:active]]]

         [:hr]
         [:button.btn.btn-success {:on-click #(rf/dispatch [::submit])} "Submit"]
         ]

        [:div.col

         [:h3 "Init value:"]
         [zenform/pprint init-value]

         [:hr]
         [:h3 "Eval errors"]
         [zenform/pprint @errors]

         [:h3 "Form value:"]
         [zenform/form-value form-path]
         [:hr]
         [:h3 "Form model"]
         [zenform/node form-path]

         ]]])))

(ui-routes/reg-page
 :index {:title "Welcome" :w 1 :cmp index})

