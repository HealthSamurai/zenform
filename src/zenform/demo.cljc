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
      :validators [(val/regex #"^\S+@\S+\.\S+$")]})]))

(defn form-view []
  (let [form-path [:some :form]
        form (make-form form-path)
        values (rf/subscribe [:zenform.subs/get-form-values form-path])
        errors (rf/subscribe [:zenform.subs/get-form-errors form-path])]

    (rf/dispatch [:zenform.events/init-form form])

    (fn []

      [:div
       [:p "REQUIRED: Input a number b/w 1 and 10"]
       [widget/text-input form-path [:foo :bar :baz]]

       [:hr]

       [:p "NOT REQUIRED: Input a number b/w 1 and 10"]
       [widget/text-input form-path [:foo :bar :test]]

       [:p "Enter email"]
       [widget/email-input form-path [:foo :bar :email]]

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
