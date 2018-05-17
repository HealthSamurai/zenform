(ns zenform.model-test
  (:require [zenform.model :as model]
            [re-frame.core :as rf]
            [re-test :as re-test]
            [clojure.test :refer :all]
            [matcho.core :as matcho]
            [zenform.zmethods :as zm]))

;; validators never passed nil

(def schema
  {:type "form"
   :event ::on-form-change
   :fields {:name {:type :string
                   :required {:message "This field is required"}
                   :validators [{:type :zenform/not-blank
                                 :message "Should not be blank"}
                                {:type :zenform/regex
                                 :regex #"[A-Z].*"
                                 :message "Should start from capital letter"}]
                   :on-change {:event ::on-change-name}}

            :age {:type :integer
                  :on-change {:event ::on-change-age}}

            :date {:type :date}}})

(rf/reg-event-fx
 ::on-form-change
 (fn [& x]
   (assert false (pr-str x))))

(rf/reg-event-fx
 ::on-change-name
 (fn [& x]))

(rf/reg-event-fx
 ::on-change-age
 (fn [& x]))


(deftest zenform-test

  (reset! re-test/app-db {})

  (rf/subscribe [:zenform/form-path [:form] [:name]])
  

  (def name-sub (rf/subscribe [:zenform/form-path [:form] [:name]]))

  (rf/dispatch [:zenform/init [:form] schema {:name "Default-name"}])

  (matcho/match @re-test/app-db
   {:form
    {:type "form"
     :fields {:name {:type :string},
              :age  {:type :integer}}
     :value  {:name {:type :string,
                     :path [:form :value :name]
                     :value "Default-name"}
              :age {:type :integer,
                    :path [:form :value :age]
                    :value nil}
              :date {:type :date
                     :path [:form :value :date]
                     :value nil}}}})

  (matcho/match @name-sub {:value "Default-name"})

  (rf/dispatch [:zenform/on-change [:form] [:name] "Nikolai"])

  (matcho/match @name-sub {:value "Nikolai"})


  (matcho/match @re-test/app-db
                {:form
                 {:type "form"
                  :value  {:name {:type :string,
                                  :value "Nikolai"}}}})

  (matcho/match
   (model/get-value (:form @re-test/app-db))
   {:name "Nikolai"
    :age nil?})

  (rf/dispatch [:zenform/on-change [:form] [:age] "100"])

  (matcho/match @re-test/app-db
                {:form
                 {:type "form"
                  :value  {:age {:value "100"}}}})

  (matcho/match
   (model/get-value (:form @re-test/app-db))
   {:name "Nikolai"
    :age 100})

  (rf/dispatch [:zenform/on-change [:form] [:name] "Ivan"])

  )
