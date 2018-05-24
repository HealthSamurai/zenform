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

(def validator-line (val/min-count 10 {:message "Wrong line"}))

(def form-address-val
  (node/make-form
   :address
   [(node/text-field :city)
    (node/make-coll
     :lines
     [(node/text-field
       nil {:validators [validator-line]})])]))

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
                 (node/validate-all)

                 )
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
             {:city nil :lines {:errors nil :fields [["Wrong line"]]}}}]}}}]

    (is (= expected errors))))
