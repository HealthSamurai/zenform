(ns zenform.validators
  (:refer-clojure :exclude [range])
  (:require #?(:clj [zenform.util :refer [with-catch]]
               :cljs [zenform.util :refer-macros [with-catch]])))

(def validator-defaults
  {:type :nil
   :message "Validation error"})

(defmulti validate
  (fn [validator value]
    (:type validator)))

(defmethod validate :min-value
  [{:keys [min-val]} value]
  (>= value min-val))

(defmethod validate :max-value
  [{:keys [max-val]} value]
  (<= value max-val))

(defmethod validate :min-count
  [{:keys [min-count]} value]
  (>= (count value) min-count))

(defmethod validate :max-count
  [{:keys [max-count]} value]
  (<= (count value) max-count))

(defmethod validate :range
  [{:keys [min-val max-val]} value]
  (and (>= value min-val)
       (<= value max-val)))

(defmethod validate :regex
  [{:keys [regex]} value]
  (re-matches regex value))

#_
(defmethod validate :fields-equal
  [{:keys [field-path1 field-path2]} form-values]
  (= (get-in form-values field-path1)
     (get-in form-values field-path2)))

;;
;; Validators
;;

(defn min-value [min-val & [opt]]
  (merge validator-defaults opt
         {:type :min-value
          :min-val min-val}))

(defn max-value [max-val & [opt]]
  (merge validator-defaults opt
         {:type :max-value
          :max-val max-val}))

(defn min-count [min-count & [opt]]
  (merge validator-defaults opt
         {:type :min-count
          :min-count min-count}))

(defn max-count [max-count & [opt]]
  (merge validator-defaults opt
         {:type :max-count
          :max-count max-count}))

(defn range [min-val max-val & [opt]]
  (merge validator-defaults opt
         {:type :range
          :min-val min-val
          :max-val max-val}))

(defn regex [re & [opt]]
  (merge validator-defaults opt
         {:type :regex
          :regex re}))

;;
;; Form validators
;;

#_
(defn fields-equal [field-path1 field-path2 & [opt]]
  (merge validator-defaults opt
         {:type :fields-equal
          :field-path1 field-path1
          :field-path2 field-path2}))

;;
;; Helpers
;;

(defn validate-safe
  [validator value]
  (with-catch (validate validator value)))
