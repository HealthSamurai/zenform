(ns zenform.demo
  (:require [zenform.form :as form]
            [zenform.field :as field]
            [zenform.validators :as val]
            [zenform.widget :as widget]
            [zenform.events]
            [zenform.subs]
            [reagent.core :as r]
            [re-frame.core :as rf]))

(def validator-range
  (val/range 1 10 {:message "The value doesn't fit (1, 10) range"}))

(def validator-email-equal
  (val/fields-equal [:foo :bar :email] [:foo :bar :email2] {:message "Emails are not equal"}))

(def form-path [:some :form])

(def _form
  (form/make-form form-path

   [(field/integer-field
     [:foo :bar :baz]
     {:required? true
      :message-parse "The FIRST value is not an integer."
      :validators [validator-range]})

    (field/integer-field
     [:foo :bar :test]
     {:message-parse "The SECOND value is not an integer."
      :validators [validator-range]})

    (field/text-field
     [:foo :bar :email]
     {:id :email
      :name :input-email
      :message-parse "Wrong email."
      :validators [(val/regex #"^\S+@\S+\.\S+$")]})

    (field/text-field
     [:foo :bar :email2]
     {:id :email
      :name :input-email
      :message-parse "Wrong email."
      :validators [(val/regex #"^\S+@\S+\.\S+$")]})

    (field/text-field
     [:foo :bar :area])

    (field/boolean-field
     [:foo :bar :bool])

    (field/integer-field
     [:calc :a])

    (field/integer-field
     [:calc :b])

    (field/integer-field
     [:calc :sum]
     {:validators [(val/max-value 100)]})]

   {:defaults {:calc {:a 1 :b "sdfsdfsf"}}
    :validators [validator-email-equal]}))

(defn sum-widget
  [form-path field-path]
  (let [field (rf/subscribe [:zenform.subs/field form-path field-path])
        values (rf/subscribe [:zenform.subs/values form-path])]

    (fn [form-path field-path]
      (let [{:keys [id label value name errors]} @field
            values @values
            sum (when-let [a (-> values :calc :a)]
                  (when-let [b (-> values :calc :b)]
                    (+ a b)))]
        (rf/dispatch [:zenform.events/on-change form-path field-path sum])
        [:div
         (when (and id label)
           [:label {:for id} label])
         [:input {:id id
                  :name name
                  :value (or value "")
                  :readOnly true}]
         (when errors
           [:ul
            (for [err errors]
              ^{:key err} [:p err])])]))))

(defn form-view []
  (let [form _form
        values (rf/subscribe [:zenform.subs/values form-path])
        form-errors (rf/subscribe [:zenform.subs/form-errors form-path])]

    (rf/dispatch [:zenform.events/init-form form])

    (fn []

      [:div

       [widget/form-errors form-path]

       [:p "REQUIRED: Input a number b/w 1 and 10"]
       [widget/text-input form-path [:foo :bar :baz]]

       [:hr]

       [:p "NOT REQUIRED: Input a number b/w 1 and 10"]
       [widget/text-input form-path [:foo :bar :test]]

       [:p "Enter email"]
       [widget/email-input form-path [:foo :bar :email]]

       [:p "Enter email2"]
       [widget/email-input form-path [:foo :bar :email2]]

       [:p "Text Area"]
       [widget/textarea-input form-path [:foo :bar :area]]

       [:p "Boolean"]
       [widget/checkbox-input form-path [:foo :bar :bool]]

       [:p "A"]
       (let [path [:calc :a]]
         [:div
          [widget/text-input form-path path]
          [widget/field-errors form-path path]])

       [:p "B"]
       [widget/text-input form-path [:calc :b]]

       [:p "Sum"]
       [sum-widget form-path [:calc :sum]]

       [:p "Form state"]
       [:p "values" @values]


       ]




      )
    )




  )

#?(:cljs
   (do

     (defn get-by-id [id]
       (.getElementById js/document id))

     (defn mount-form []
       )

     (defn init []
       (r/render [form-view] (get-by-id "app")))

     (init)))
