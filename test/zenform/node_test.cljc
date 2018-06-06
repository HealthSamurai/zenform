(ns zenform.node-test
  (:require [zenform.node :as node]
            [zenform.validators :as val]
            [clojure.test :refer :all]))

(def form-address
  (node/make-form
   :address
   [(node/text-field :city)
    (node/make-coll
     :lines
     [(node/text-field nil)
      (node/text-field nil)])]))

(def form-user
  (node/make-form
   :user
   [(node/text-field :name)
    (node/make-coll
     :addresses
     [form-address
      form-address])]))

(def values-empty
  {:name nil
   :addresses
   [{:city nil :lines [nil nil]}
    {:city nil :lines [nil nil]}]})

(def values-sample
  {:name "John"
   :addresses
   [{:city "New York" :lines ["street 1" "street 2"]}
    {:city "Texas" :lines ["street 3" "street 4"]}]})

(deftest test-get-set-value

  (testing "Empty values"
    (let [values (node/get-value form-user)]
      (is (= values values-empty))))

  (testing "Getting the same values we set before"
    (let [values values-sample]
      (is (= (-> form-user (node/set-value values) node/get-value)
             values))))

  (testing "Setting values, more complex"
    (let [values1 {:name "John"
                   :addresses
                   [{:city "New York" :lines ["street 1" "street 2"]}
                    {:city "Texas" :lines ["street 3" "street 4"]}]}

          values2 {:name nil
                   :addresses
                   [{:city nil :lines ["street 1"]}
                    {:lines [nil]}]}

          result {:name nil
                  :addresses
                  [{:city nil :lines ["street 1" "street 2"]}
                   {:city "Texas" :lines [nil "street 4"]}]}]

      (is (= (-> form-user
                 (node/set-value values1)
                 (node/set-value values2)
                 node/get-value)
             result)))))

(def validator-age (val/range 18 99 {:message "Wrong age"}))

(def validator-line (val/max-count 10 {:message "Too long line"}))

(def field-line-val
  (node/text-field
   nil {:validators [validator-line]}))

(def form-address-val
  (node/make-form
   :address
   [(node/text-field :city)
    (node/make-coll
     :lines
     [field-line-val
      field-line-val])]))

(def form-user-val
  (node/make-form
   :user
   [(node/integer-field
     :age
     {:validators [validator-age]})
    (node/make-coll
     :addresses
     [form-address-val])]))

(def values-val
  {:age 17
   :addresses
   [{:city "New York" :lines ["street 1" "street 2 and more"]}]})

(deftest test-errors-and-validation
  (let [form (-> form-user-val
                 (node/set-value values-val)
                 (node/validate-all))
        errors (node/get-errors form)
        expected
        {:errors nil
         :fields
         {:age ["Wrong age"]
          :addresses
          {:errors nil
           :fields
           [{:errors nil
             :fields
             {:city nil
              :lines {:errors nil
                      :fields [nil ["Too long line"]]}}}]}}}]
    (is (= errors expected))))


(def validator-line (val/min-count 3 {:message "Too short line"}))

(def field-line-req
  (node/text-field
   nil {:required? true
        :validators [validator-line]}))

(def form-address-req
  (node/make-form
   :address
   [(node/text-field :city)
    (node/make-coll
     :lines
     [field-line-req
      field-line-req])]))

(def form-user-req
  (node/make-form
   :user
   [(node/integer-field
     :age {:required? true
           :validators [validator-age]})
    (node/make-coll
     :addresses
     [form-address-req])]))

(deftest test-form-ok

  (testing "Check if the whole form is OK"
    (let [values {:age 19
                  :addresses [{:city "NY" :lines ["aaa" "bbb"]}]}

          form (-> form-user-req
                   (node/set-value values)
                   (node/validate-all))]

      (is (node/node-ok? form)))

    (let [values {:age -1
                  :addresses [{:city "NY" :lines ["aaa" "bbb"]}]}

          form (-> form-user-req
                   (node/set-value values)
                   (node/validate-all))]

      (is (not (node/node-ok? form))))

    (let [values {:age 88
                  :addresses [{:city "NY" :lines ["aaa" "bb"]}]}

          form (-> form-user-req
                   (node/set-value values)
                   (node/validate-all))]

      (is (not (node/node-ok? form))))))

(deftest test-required

  (testing "Validate blank form"
    (let [form (-> form-user-req
                   (node/validate-all))
          errors (node/get-errors form)
          expected
          {:errors nil
           :fields
           {:age ["This value is required"]
            :addresses
            {:errors nil
             :fields
             [{:errors nil
               :fields
               {:city nil
                :lines
                {:errors nil
                 :fields
                 [["This value is required"]
                  ["This value is required"]]}}}]}}}]

      (is (= errors expected))))

  (testing "Validate improperly filled form"
    (let [values {:age -2
                  :addresses [{:city "NY" :lines ["a" "b"]}]}

          form (-> form-user-req
                   (node/set-value values)
                   (node/validate-all))

          errors (node/get-errors form)
          expected
          {:errors nil
           :fields
           {:age ["Wrong age"]
            :addresses
            {:errors nil
             :fields
             [{:errors nil
               :fields
               {:city nil
                :lines
                {:errors nil
                 :fields
                 [["Too short line"]
                  ["Too short line"]]}}}]}}}]

      (is (= errors expected))))

  (testing "Validate properly filled form"
    (let [values {:age 18
                  :addresses [{:city "NY" :lines ["aaaaa" "bbbbbb"]}]}

          form (-> form-user-req
                   (node/set-value values)
                   (node/validate-all))

          errors (node/get-errors form)
          expected
          {:errors nil
           :fields
           {:age nil
            :addresses
            {:errors nil
             :fields
             [{:errors nil
               :fields
               {:city nil
                :lines
                {:errors nil
                 :fields [nil nil]}}}]}}}]

      (is (= errors expected)))))

(def form-agreements-coer
  (node/make-form
   :agreement
   [(node/boolean-field :agree)
    (node/make-coll
     :values
     [(node/integer-field nil)
      (node/integer-field nil)])]))

(def form-test-coer
  (node/make-form
   :test
   [(node/integer-field :age)
    (node/make-coll
     :agreements
     [form-agreements-coer
      form-agreements-coer])]))

(def values-coer
  {:age "  19  "
   :agreements
   [{:agree "  True  " :values [" \t\t 99" "39\n\n"]}
    {:agree "FALSE  " :values [" \t\t 34" "f9999"]}]})

(deftest test-coercion

  (testing "Input a form with text values"
    (let [form (-> form-test-coer
                   (node/set-value values-coer)
                   (node/validate-all))
          errors (node/get-errors form)
          values (node/get-value form)]

      (is (= values
             {:age 19
              :agreements
              [{:agree true :values [99 39]}
               {:agree false :values [34 "f9999"]}]}))

      (is (= errors
             {:errors nil
              :fields
              {:age nil
               :agreements
               {:errors nil
                :fields
                [{:errors nil
                  :fields
                  {:agree nil
                   :values {:errors nil :fields [nil nil]}}}
                 {:errors nil
                  :fields
                  {:agree nil
                   :values
                   {:errors nil
                    :fields [nil ["Wrong field value"]]}}}]}}})))))


(def form-bubble
  (node/make-form
   :bubble
   [(node/integer-field
     :age {:validators [(val/min-value 18)]})
    (node/email-field
     :email1 {:validators [(val/email {:message "Wrong email1"})]})
    (node/email-field
     :email2 {:validators [(val/email {:message "Wrong email2"})]})]
   {:validators [(val/fields-equal
                  [:email1] [:email2]
                  {:message "Emails are not equal"})]}))

(def values-bubble
  {:age " lalilulelo  "
   :email1 "test@test.com"})

(deftest test-bubbling

  (testing "Trigger bubbling on a field"
    (let [form (-> form-bubble
                   (node/set-value values-bubble)
                   (node/trigger-value [:email2] "test@test.com2"))

          errors (node/get-errors form)
          values (node/get-value form)]


      (is (= values
             {:age " lalilulelo  "
              :email1 "test@test.com"
              :email2 "test@test.com2"}))


      (testing "There is no an error on the `age` field"
        (is (= errors
               {:errors ["Emails are not equal"]
                :fields {:age nil
                         :email1 nil
                         :email2 nil}}))))))
