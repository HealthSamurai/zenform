(ns zenform.model-test
  (:require [zenform.model :as model]
            [re-frame.core :as rf]
            [re-test :as re-test]
            [clojure.test :refer :all]
            [matcho.core :as matcho]
            [zenform.validators :as validators]))

(defmethod  validators/validate
  ::name-or-nick [cfg v]
  (when-not (or (:name v) (:nick v))
    (:message cfg)))

(def test-state (atom []))

(rf/reg-event-fx
 ::password-changed
 (fn [_ [_ {v :value}]]
   (swap! test-state conj :password-changed)
   nil))

(rf/reg-event-fx
 ::name-changed
 (fn [_ [_ {v :value}]]
   (swap! test-state conj :name-changed)
   nil))

(rf/reg-event-fx
 ::form-changed
 (fn [_ [_ {v :value}]]
   (swap! test-state conj :form-changed)
   nil))

(def schema
  {:type :form
   :validators {::name-or-nick {:message "Name or Nick is required"}}
   :on-change {::form-changed {}}
   :fields {:name     {:type :string
                       :on-change {::name-changed {}}
                       :validators {:min-length {:value 5 :message "Should be longer then 5"}
                                    :required {}}}
            :nick     {:type :string}
            :object   {:type :map}
            :password {:type :string
                       :on-change {::password-changed {}}}
            :email    {:type :collection
                       :item {:type :string}}}})

(deftest form-functions-test

  (reset! test-state [])

  (def form (model/form schema {:name "Ivan"
                                :email ["ivan@ya.ru" "ivan@gmail.com"]}))

  (:value form)

  (matcho/match 
   form
   {:type :form
    :value {:name {:value "Ivan"}
            :password {}
            :email {:value {0 {:value "ivan@ya.ru"}
                            1 {:value "ivan@gmail.com"}}}}})

  (def form (model/set-value form [:name] "Nicola"))

  (get-in form [:value :name :value])

  (is (= [:name-changed :form-changed] @test-state))

  (def form (model/set-value form [:password] "secret"))

  (is (= [:name-changed :form-changed :password-changed :form-changed] @test-state))


  (matcho/match 
   form
   {:type :form
    :value {:name {:value "Nicola"}}})

  (is (= "Nicola" (model/get-value form [:name])))


  (model/get-value form)

  (is (= {:name "Nicola"
          :password "secret"
          :email ["ivan@ya.ru" "ivan@gmail.com"]}
         (model/get-value form)))

  (def form (model/set-value form [:name] "Nic"))

  (matcho/match
   form
   {:value {:name {:value "Nic"
                   :errors {:min-length "Should be longer then 5"}}}})

  (def form (model/set-value form [:name] "Nicola"))

  (matcho/match
   form
   {:value {:name {:value "Nicola" :errors nil?}}})

  (def form (model/set-value form [:name] nil))

  (matcho/match
   form
   {:value {:name {:errors {:required "Should not be blank"}}}
    :errors {::name-or-nick "Name or Nick is required"}})

  ;; (def form (model/validate form))

  )

(deftest zenform-test

  (reset! re-test/app-db {})
  (re-test/clear-subscription-cache!)
  @re-test/app-db

  (def form-path [:form])

  (def name-sub (rf/subscribe [:zf/node form-path [:name]]))

  (rf/dispatch [:zf/init form-path schema {:name "Grisha"}])

  (matcho/match @re-test/app-db
   {:form
    {:type :form
     :value  {:name {:value "Grisha"}}}})

  (matcho/match @name-sub {:value "Grisha"})

  (rf/dispatch [:zf/set-value form-path [:name] "Nicola"])

  @re-test/app-db

  (matcho/match @name-sub {:value "Nicola"})


  ;; (matcho/match @name-sub {:value "Default-name"})

  ;; (rf/dispatch [:zenform/on-change [:form] [:name] "Nikolai"])

  ;; (matcho/match @name-sub {:value "Nikolai"
  ;;                          :errors ["Is not AAA"]})

  ;; (rf/dispatch [:zenform/on-change [:form] [:name] "AAA"])

  ;; (matcho/match @name-sub {:value "AAA"
  ;;                          :errors nil})

  ;; (rf/dispatch [:zenform/on-change [:form] [:name] "Nikolai"])

  ;; (matcho/match @re-test/app-db
  ;;               {:form
  ;;                {:type "form"
  ;;                 :value  {:name {:type :string,
  ;;                                 :value "Nikolai"}}}})

  ;; (matcho/match
  ;;  (model/get-value (:form @re-test/app-db))
  ;;  {:name "Nikolai"
  ;;   :age nil?})

  ;; (rf/dispatch [:zenform/on-change [:form] [:age] "100"])

  ;; (matcho/match @re-test/app-db
  ;;               {:form
  ;;                {:type "form"
  ;;                 :value  {:age {:value "100"}}}})

  ;; (matcho/match
  ;;  (model/get-value (:form @re-test/app-db))
  ;;  {:name "Nikolai"
  ;;   :age 100})

  ;; (rf/dispatch [:zenform/on-change [:form] [:name] "Ivan"])

  )

;; validators never passed nil

#_(def schema
  {:type "form"
   :event ::on-form-change
   :fields {:name {:type :string
                   :required {:message "This field is required"}
                   :validators [{:type :regex
                                 :args [#"AAA"]
                                 :message "Is not AAA"}]
                   :on-change {:event ::on-change-name}}

            :age {:type :integer
                  :on-change {:event ::on-change-age}}

            :date {:type :date}}})

;; (rf/reg-event-fx
;;  ::on-form-change
;;  (fn [& x]
;;    (assert false (pr-str x))))

;; (rf/reg-event-fx
;;  ::on-change-name
;;  (fn [& x]))

;; (rf/reg-event-fx
;;  ::on-change-age
;;  (fn [& x]))



