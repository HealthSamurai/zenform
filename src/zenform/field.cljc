(ns zenform.field
  (:refer-clojure :exclude [coerce])
  (:require [clojure.string :as s]
            [zenform.validators :as val]
            #?(:clj [zenform.util :refer [with-catch]]
               :cljs [zenform.util :refer-macros [with-catch]])))

(def ^{:doc "A map of default values each field should have."}
  field-defaults
  {:type nil
   :path nil
   :value nil
   :required? false
   :value-clean nil
   :validators nil
   :message-required "This value is required"
   :message-parse "Wrong field value"
   :errors nil})

;;
;; Base actions
;;

(defn concatv [coll & colls]
  (vec (apply concat coll colls)))

(defn set-errors
  [field errors]
  (update field :errors concatv errors))

(defn set-error
  [field error]
  (set-errors field [error]))

(defn clear-errors
  [field]
  (assoc field :errors nil))

(defn get-errors
  [field]
  (:errors field))

(defn set-value
  [field value]
  (assoc field :value value))

(defn set-value-clean
  [field value-clean]
  (assoc field :value-clean value-clean))

(defn ok?
  [{:keys [errors required?]}]
  (not errors))

;;
;; Parsers
;;

(defmulti parse :type)

#?(:cljs
   (defn parseInt [x]
     (let [val (js/parseInt x)]
       (when-not (js/isNaN val)
         val))))

(defmethod parse :text
  [{:keys [value] :as field}]
  (cond
    (string? value) value
    :else (str value)))

(defmethod parse :integer
  [{:keys [value] :as field}]
  (cond
    (integer? value)
    value
    (string? value)
    (-> value s/trim #?(:cls Integer/parseInt :cljs parseInt))))

(defmethod parse :boolean
  [{:keys [value] :as field}]
  (cond
      (boolean? value)
      value
      (contains? #{"true" "TRUE" "True" "yes" "YES" "Yes" "1" 1} (s/trim value))
      true
      (contains? #{"false" "FALSE" "False" "no" "NO" "No" "0" 0} (s/trim value))
      false))

;;
;; Coercion
;;

(defn parse-safe [field]
  (with-catch (parse field)))

(defn empty-value?
  [x]
  (cond
    (nil? x) true
    (and (string? x) (-> x count (= 0))) true
    :else false))

(defn coerce
  [{:keys [value message-parse] :as field}]
  (if (empty-value? value)
    (set-value-clean field nil)
    (let [value-clean (parse-safe field)]
      (if (some? value-clean)
        (set-value-clean field value-clean)
        (set-error field message-parse)))))

;;
;; Validation
;;

(defn validate-required
  [{:keys [value-clean required? message-required] :as field}]
  (if (and required? (nil? value-clean))
    (set-error field message-required)
    field))

(defn _validate
  [{:keys [errors value] :as field}
   {:keys [message] :as validator}]
  (if errors
    field
    (if (val/validate-safe validator value)
      field
      (set-error field message))))

(defn validate
  [{:keys [value validators] :as field}]
  (if (nil? value)
    field
    (loop [field field
           validators validators]
      (if (empty? validators)
        field
        (recur (_validate field (first validators))
               (rest validators))))))

;;
;; Main update event
;;

(defn trigger
  [field value]
  (-> field
      clear-errors
      (set-value value)
      coerce
      validate-required
      validate))

;;
;; Fields
;;

(defn integer-field [path & [opt]]
  (merge field-defaults opt
         {:path path
          :type :integer}))

(defn text-field [path & [opt]]
  (merge field-defaults opt
         {:path path
          :type :text}))

(defn boolean-field [path & [opt]]
  (merge field-defaults opt
         {:path path
          :type :boolean}))

(defn datetime-field [path & [opt]]
  (merge field-defaults opt
         {:path path
          :type :datetime}))
