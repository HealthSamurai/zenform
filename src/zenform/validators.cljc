(ns zenform.validators
  (:require [clojure.string :as s])
  (:refer-clojure :exclude [range]))

(def validator-defaults
  {:type :nil
   :args nil
   :message "Validation error"})

(defmulti validate
  (fn [validator value]
    (:type validator)))

(defmethod validate :min-value
  [{[min-val] :args} value]
  (>= value min-val))

(defmethod validate :max-value
  [{[max-val] :args} value]
  (<= value max-val))

(defmethod validate :range
  [{[min-val max-val] :args} value]
  (and (>= value min-val)
       (<= value max-val)))

(defmethod validate :regex
  [{[re] :args} value]
  (re-matches re value))

;;
;; Validators
;;

(defn min-value [min-val & [opt]]
  (merge validator-defaults opt
         {:type :min-value
          :args [min-val]}))

(defn max-value [max-val & [opt]]
  (merge validator-defaults opt
         {:type :max-value
          :args [max-val]}))

(defn range [min-val max-val & [opt]]
  (merge validator-defaults opt
         {:type :range
          :args [min-val max-val]}))

(defn regex [re & [opt]]
  (merge validator-defaults opt
         {:type :regex
          :args [re]}))
