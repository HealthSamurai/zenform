(ns zenform.demo
  (:require [zenform.node :as node]
            [zenform.validators :as val]
            [zenform.widget :as widget]
            [zenform.events]
            [zenform.subs]
            [reagent.core :as r]
            [re-frame.core :as rf]))

(def form-path [:some :form])

(def val-password
  (val/min-count
   6 {:message "Password should have at least 6 symbols"}))

(def val-passwords
  (val/fields-equal
   [:password1] [:password2]
   {:message "Passwords are not equal"}))

(def val-age
  (val/range
   18 100 {:message "Please input the right age."}))

(def val-email
  (val/email {:message "We cannot recognize your email"}))

(def line-field
  (node/text-field :line))

(def form-address
  (node/make-form
   :address
   [(node/text-field :state)
    (node/text-field :city)
    (node/make-coll
     :lines [line-field line-field])]))

(def coll-addresses
  (node/make-coll
   :addresses [form-address]))

(def _form
  (node/make-form
   :user
   [(node/text-field :name)

    (node/integer-field
     :age {:required? true
           :message-required "Please input your age"
           :validators [val-age]})

    (node/email-field
     :email {:required? true
             :message-required "Email is required"
             :validators [val-email]})

    (node/text-field
     :password1 {:required? true
                 :message-required "Password is required"
                 :validators [val-password]})

    (node/text-field
     :password2 {:required? true
                 :message-required "Password confirmation is required"})

    ;; (node/make-coll
    ;;  :addresses [form-address])]

    (node/make-coll
     :words [(node/text-field :word)
             (node/text-field :word)
             (node/text-field :word)

             ])]

   {:validators [val-passwords]}))

#_
(defn sum-widget
  [form-path field-path]
  (let [field @(rf/subscribe [:zenform.subs/field form-path field-path])
        values @(rf/subscribe [:zenform.subs/values form-path])
        {:keys [value]} field
        sum (when-let [a (-> values :calc :a)]
              (when-let [b (-> values :calc :b)]
                (+ a b)))]
    (rf/dispatch [:zf/trigger form-path field-path sum])
    [:input {:value (or value "")
             :readOnly true}]))

(defn form-view []
  (let [form _form
        ;; values (rf/subscribe [:zenform.subs/values form-path])
        ;; form-errors (rf/subscribe [:zenform.subs/form-errors form-path])
        ]

    (rf/dispatch [:zf/init-form form form-path])

    (fn []

      [:div

       [:p "Form errors"]
       [widget/node-errors form-path]

       [:span "Name"]
       [widget/text-input form-path [:name]]
       [widget/node-errors form-path [:name]]

       [:br]

       [:span "City*"]
       [widget/text-input form-path [:city]]
       [widget/node-errors form-path [:city]]

       [:br]

       [:span "Email"]
       [widget/email-input form-path [:email]]
       [widget/node-errors form-path [:email]]

       [:br]

       [:span "Password"]
       [widget/password-input form-path [:password1]]
       [widget/node-errors form-path [:password1]]

       [:br]

       [:span "Confirm password"]
       [widget/password-input form-path [:password2]]
       [widget/node-errors form-path [:password2]]

       [:br]

       [:span "Words"]
       [widget/coll-input form-path [:words]]
       [widget/node-errors form-path [:words]]

       ;; [:span "Addresses"]
       ;; [widget/coll-input form-path [:addresses]]
       ;; [widget/node-errors form-path [:addresses]]

       [:hr]

       ;; [:p "Form state"]
       ;; [:p "values" @values]

       ])))

#?(:cljs
   (do

     (defn get-by-id [id]
       (.getElementById js/document id))

     (defn mount-form []
       )

     (defn init []
       (r/render [form-view] (get-by-id "app")))

     (init)))
