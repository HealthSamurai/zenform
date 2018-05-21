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

(defn make-form
  [form-path]
  (form/make-form
   form-path
   [
    (field/integer-field
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

    ]



   [(val/fields-equal [:foo :bar :email] [:foo :bar :email2] {:message "Emails are not equal"})


    #_
    (val/fields-equal [:foo :bar :baz] [:foo :bar :test] {:message "Fields are not equal"})]

   ))

(defn form-view []
  (let [form-path [:some :form]
        form (make-form form-path)
        values (rf/subscribe [:zenform.subs/values form-path])
        errors (rf/subscribe [:zenform.subs/errors form-path])
        form-errors (rf/subscribe [:zenform.subs/form-errors form-path])]

    (rf/dispatch [:zenform.events/init-form form])

    (fn []

      [:div

       (for [err @form-errors]
         ^{:key err} [:p err])

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

       [:p "Form state"]
       [:p "values" @values]
       [:p "errors" @errors]

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
