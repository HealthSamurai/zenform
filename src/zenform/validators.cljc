(ns zenform.validators
  (:require
   [clojure.string :as str]))

#_(defn num-validator [x]
    (when-not (empty? x) ((v/regex #"\d+.\d+|\d+" :message "Must be a number") x)))

;; TODO add default messages and their override
(def validators
  {:v/required {:f #(not (str/blank? %))
                :message "Should not be blank"}})
