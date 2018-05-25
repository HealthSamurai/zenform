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

;;
;; Fields
;;

(defmethod validate :min-value
  [{:keys [min-value]} value]
  (>= value min-value))

(defmethod validate :max-value
  [{:keys [max-value]} value]
  (<= value max-value))

(defmethod validate :min-count
  [{:keys [min-count]} value]
  (>= (count value) min-count))

(defmethod validate :max-count
  [{:keys [max-count]} value]
  (<= (count value) max-count))

(defmethod validate :range
  [{:keys [min-value max-value]} value]
  (and (>= value min-value)
       (<= value max-value)))

(defmethod validate :regex
  [{:keys [regex]} value]
  (re-matches regex value))

;;
;; Forms
;;

;; TODO: duplicate of zenform.node/get-field-path
;; had to copy it to prevent circular deps
(defn get-field-path [path]
  (interleave (repeat :fields) path))

(defmethod validate :fields-equal
  [{:keys [path1 path2]} form-values]
  (= (get-in form-values (get-field-path path1))
     (get-in form-values (get-field-path path2))))

;;
;; Constructors
;;

(defn min-value [min-value & [opt]]
  (merge validator-defaults opt
         {:type :min-value
          :min-value min-value}))

(defn max-value [max-value & [opt]]
  (merge validator-defaults opt
         {:type :max-value
          :max-value max-value}))

(defn min-count [min-count & [opt]]
  (merge validator-defaults opt
         {:type :min-count
          :min-count min-count}))

(defn max-count [max-count & [opt]]
  (merge validator-defaults opt
         {:type :max-count
          :max-count max-count}))

(defn range [min-value max-value & [opt]]
  (merge validator-defaults opt
         {:type :range
          :min-value min-value
          :max-value max-value}))

(defn regex [re & [opt]]
  (merge validator-defaults opt
         {:type :regex
          :regex re}))

(defn fields-equal [path1 path2 & [opt]]
  (merge validator-defaults opt
         {:type :fields-equal
          :path1 path1
          :path2 path2}))

;;
;; Helpers
;;

(defn validate-safe
  [validator value]
  (with-catch (validate validator value)))
