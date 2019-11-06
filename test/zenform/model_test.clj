(remove-ns 'zenform.model-test)

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

(rf/reg-event-fx
 ::email-changed
 (fn [_ [_ {v :value}]]
   (swap! test-state conj :email-changed)
   nil))

(def schema
  {:type :form
   :validators {::name-or-nick {:message "Name or Nick is required"}}
   :on-change {::form-changed {}}
   :fields {:name     {:type :string
                       :on-change {::name-changed {}}
                       :validators {:min-length {:value 5 :message "Should be longer then 5"}
                                    :required {}}}
            :links    {:type :collection
                       :item {:type :form
                              :fields {:description {:type :string}
                                       :uri         {:type :string}}}}
            :nick     {:type :string}
            :object   {:type :map}
            :password {:type :string
                       :validatros {:required {}}
                       :on-change {::password-changed {}}}
            :email    {:type :collection
                       :on-change {::email-changed {}}
                       :item {:type :string
                              :validators {:email {}}}}                    
            :address {:type :form
                      :validators {:required {}}
                      :fields {:city {:type :string
                                      :validators {:required {}}}}}}})

(deftest form-functions-test

  (reset! test-state [])  
  (def form (model/form schema {:name "Ivan"
                                :email ["ivan@ya.ru" "ivan@gmail.com"]}))


  (matcho/match 
   form
   {:type :form
    :value {:name {:value "Ivan"}
            :password {}
            :email {:value {0 {:value "ivan@ya.ru"}
                            1 {:value "ivan@gmail.com"}}}}})

  (def form (model/set-value form [:form] [:name] "Nicola"))

  (get-in form [:value :name :value])

  (is (= [:name-changed :form-changed] @test-state))

  (def form (model/set-value form [:form] [:password] "secret"))

  (is (= [:name-changed :form-changed :password-changed :form-changed] @test-state))

  (def form (model/set-value form [:form] [:address :city] "NY"))

  (matcho/match 
   form
   {:type :form
    :value {:name {:value "Nicola"}}})

  (is (= "Nicola" (model/get-value form [:name])))


  (model/get-value form)

  (is (= {:name "Nicola"
          :password "secret"
          :address {:city "NY"}
          :email ["ivan@ya.ru" "ivan@gmail.com"]}
         (model/get-value form)))

  (def form (model/set-value form [:form] [:name] "Nic"))

  (matcho/match
   form
   {:value {:name {:value "Nic"
                   :errors {:min-length "Should be longer then 5"}}}})

  (def form (model/set-value form [:form] [:name] "Nicola"))

  (matcho/match
   form
   {:value {:name {:value "Nicola" :errors nil?}}})

  (def form (model/set-value form [:form] [:name] nil))
  (def form (model/set-value form [:form] [:address :city] nil))
  (def form (model/set-value form [:form] [:email 0] "ups"))

  (matcho/match
   form
   {:value {:name {:errors {:required "Should not be blank"}}}
    :errors {::name-or-nick "Name or Nick is required"}})

  (def form (model/form schema {:email []
                                :name "Hedin"}))

  (def form (model/add-collection-item form [:form] [:name] "c@mail.com"))

  (matcho/match
   form
   {:type :form
    :value {:name {:value "Hedin"}
            :password {}
            :email {:value {}}}})

  (def form (model/add-collection-item form [:form] [:email] "a@mail.com"))

  (matcho/match
   form
   {:value {:email {:value {0 {:value "a@mail.com"}}}}})

  (def form (model/add-collection-item form [:form] [:email] "b@mail.com"))

  (matcho/match
   form
   {:value {:email {:value {0 {:value "a@mail.com"}
                            1 {:value "b@mail.com"}}}}})

  (def form (model/add-collection-item form [:form] [:email] "c@mail.com"))

  (matcho/match
   form
   {:value {:email {:value {0 {:value "a@mail.com"}
                            1 {:value "b@mail.com"}
                            2 {:value "c@mail.com"}}}}})

  (def form (model/remove-collection-item form [:name] 1))

  (matcho/match
   form
   {:value {:name {:value "Hedin"}
            :email {:value {0 {:value "a@mail.com"}
                            1 {:value "b@mail.com"}
                            2 {:value "c@mail.com"}}}}})

  (def form (model/remove-collection-item form [:email] 7))

  (matcho/match
   form
   {:value {:name {:value "Hedin"}
            :email {:value {0 {:value "a@mail.com"}
                            1 {:value "b@mail.com"}
                            2 {:value "c@mail.com"}}}}})

  (def form (model/remove-collection-item form [:email] 1))

  (matcho/match
   form
   {:value {:email {:value {0 {:value "a@mail.com"}
                            2 {:value "c@mail.com"}}}}})

  (def form (model/add-collection-item form [:form] [:email] "d@mail.com"))

  (matcho/match
   form
   {:value {:email {:value {0 {:value "a@mail.com"}
                            2 {:value "c@mail.com"}
                            3 {:value "d@mail.com"}}}}})

  (def form (model/form schema {:links [{:description "My first link"
                                         :uri "http://example.com"}]}))
  

  (matcho/match
   form
   {:value {:links {:value {0 {:type :form
                               :value {:description {:type :string
                                                     :value "My first link"}
                                       :uri {:type :string
                                             :value "http://example.com"}}}}}}})

  (def form (model/add-collection-item form [:form] [:links] {:description "Another link"
                                                              :uri "http://google.com"}))

  (matcho/match
   form
   {:value {:links {:value {0 {:type :form
                               :value {:description {:type :string
                                                     :value "My first link"}
                                       :uri {:type :string
                                             :value "http://example.com"}}}
                            1 {:type :form
                               :value {:description {:type :string
                                                     :value "Another link"}
                                       :uri {:type :string
                                             :value "http://google.com"}}}}}}})

  (def form (model/add-collection-item form [:form] [:links] nil))

  (matcho/match
   form
   {:value {:links {:value {0 {:value {:description {:value "My first link"}
                                       :uri {:value "http://example.com"}}}
                            1 {:value {:description {:value "Another link"}
                                       :uri {:value "http://google.com"}}}
                            2 {:value {:description {:value nil}
                                       :uri {:value nil}}}}}}})

  (def form (model/set-collection form [:links] [{:description "First" :uri "http://first.com"}
                                                 {:description "Second" :uri "http://second.com"}]))

  (matcho/match
   form
   {:value {:links {:type :collection
                    :item {:type :form
                           :fields {:description {:type :string}
                                    :uri         {:type :string}}}
                    :value {0 {:type :form
                               :value {:description {:type :string
                                                     :value "My first link"}
                                       :uri {:type :string
                                             :value "http://example.com"}}}
                            1 {:type :form
                               :value {:description {:type :string
                                                     :value "Another link"}
                                       :uri {:type :string
                                             :value "http://google.com"}}}}}}})
  )

(deftest collection-item-on-change

  (def form (model/form schema {:email ["ups" "ivan@gmail.com"]}))

  (reset! test-state [])

  (model/add-collection-item form [:form :test] [:email] "f@m.org")

  (is (= [:email-changed :form-changed] @test-state))

  (reset! test-state [])

  (model/remove-collection-item form [:email] 0)

  (is (= [:email-changed :form-changed] @test-state))
  )

(deftest eval-form-test

  (def form (model/form schema {:email ["ups" "ivan@gmail.com"]}))

  (def form-value (model/eval-form form))

  (:errors form-value)

  (:value form-value)
  (get-in form-value [:form :value :name])

  (matcho/match
   form-value
   {:form {:value {:name    {:errors {:required "Should not be blank"}}
                   :address {:errors {:required "Should not be blank"}}}}
    :value {:email ["ups" "ivan@gmail.com"]}
    :errors {[]               {::name-or-nick "Name or Nick is required"}
             [:email 0]       {:email "Should be valid email"}
             [:address :city] {:required "Should not be blank"}
             [:address]       {:required "Should not be blank"}
             [:name]          {:required "Should not be blank"}}}))


(deftest init-default
  (def form-path [:form])
  (def form-schema
    {:type :form
     :fields {:id {:type "string" :default "def"}}})

  (rf/dispatch [:zf/init form-path form-schema {}])
  (matcho/match @re-test/app-db
                {:form
                 {:type :form
                  :value  {:id {:value "def"}}}})
  
  (rf/dispatch [:zf/init form-path form-schema {:id "HS"}])
  (matcho/match @re-test/app-db
                {:form
                 {:type :form
                  :value  {:id {:value "HS"}}}})

  (def form-schema
    {:type :form
     :fields {:id {:type "string" :default #(str "foo" "-" "bar")}}})

  (rf/dispatch [:zf/init form-path form-schema {}])
  (matcho/match @re-test/app-db
                {:form
                 {:type :form
                  :value  {:id {:value "foo-bar"}}}}))

(deftest eval-form-test
  (matcho/match
   (model/eval-form
    {:type :form
     :value {:foo {:type :form
                   :value {:mar {:value "mar"}}}
             :bar {:value "bar"}}})

   {:value {:foo {:mar "mar"}
            :bar "bar"}})


  (matcho/match
   (model/eval-form
    {:type :form
     :value {:foo {:type :collection
                   :value {"1" {:value "mar"}
                           "8" {:value "zar"}}}
             :bar {:value "bar"}}})

   {:value {:foo ["mar" "zar"]
            :bar "bar"}})

  (matcho/match
   (model/eval-form
    {:type :form
     :value {:foo {:type :collection
                   :value {"1" {:type :form
                                :value {:idx {:value  "idx"}}}
                           "8" {:value "zar"}}}
             :bar {:value "bar"}}})

   {:value {:foo [{:idx "idx"} "zar"]
            :bar "bar"}})


  (matcho/match
   (model/eval-form
    {:type :form
     :value {:bar {:type :form
                   :value {:mar {:type "string"
                                 :validators {:required {}}}}}
             :arr {:type :collection
                   :validators {:min-items {:value 2}}
                   :value {"2" {:type "string"
                                :validators {:required {}}}}}
             :foo {:type "string"
                   :validators {:required {}}
                   :value nil}}})

   {:errors {[:bar :mar]  {:required  string?},
             [:arr "2"]   {:required  string?},
             [:arr]       {:min-items string?},
             [:foo]       {:required  string?}}
    :form {:type :form,
           :value {:bar {:value {:mar {:errors {:required "Should not be blank"}}}},
                   :arr {:value {"2" {:errors {:required "Should not be blank"}}},
                         :errors {:min-items "Shouldn't be shorter then 2"}},
                   :foo {:errors {:required "Should not be blank"}}}}})


  (matcho/match
   (model/eval-form
    {:type :form
     :value {
             :bar {:type :form
                   :value {:mar {:type "string"
                                 :value nil
                                 :validators {:required {}}}}}
             :foo {:type "string"
                   :validators {:required {}}
                   :value nil}}})

   {:errors {[:bar :mar] {:required string?}
             [:foo] {:required string?}}})

  #_(matcho/match
   (model/eval-form
    {:type :form
     :value {:foo {:type :form 
                   :value {:bar {:type :string
                                 :validators {:required {}}}}}}})

   {:value {:bar "bar"}})



  )

#_(deftest eval-value
  (reset! test-state [])  
  (def form-path [:form])
  (def form-schema
    {:type :form
     :fields {:foo {:type "string" :default #(str "foo" "-" "bar")}
              :bar {:type "string" :eval-value (fn [node-path form-value]
                                                 (assoc-in form-value node-path (get-in form-value [:foo])))}
              :mar {:type "string" :eval-value (fn [node-path form-value]
                                                 (assoc-in form-value node-path (get-in form-value [:foo])))}
              }})

  (rf/dispatch [:zf/init form-path form-schema {}])
  (matcho/match @re-test/app-db
                {:form
                 {:type :form
                  :value  {:foo {:value "foo-bar"}
                           :mar {:value nil :eval-value fn?}
                           :bar {:value nil :eval-value fn?}}}})

  (matcho/match
   (-> @re-test/app-db :form model/eval-form :value)
   {:foo "foo-bar"
    :bar "foo-bar"
    :mar "foo-bar"})
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




  )

