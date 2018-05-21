(ns zenform.validators
  (:refer-clojure :exclude [range])
  (:require [clojure.string :as s]
            #?(:clj [zenform.util :refer [with-catch]]
               :cljs [zenform.util :refer-macros [with-catch]])))

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

(defmethod validate :fields-equal
  [{[field-path1 field-path2] :args} form-values]
  (= (get-in form-values field-path1)
     (get-in form-values field-path2)))

;;
;; Helpers
;;

(defn validate-safe
  [validator value]
  (with-catch (validate validator value)))

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

;;
;; Form validators
;;

(defn fields-equal [field-path1 field-path2 & [opt]]
  (merge validator-defaults opt
         {:type :fields-equal
          :args [field-path1 field-path2]}))
