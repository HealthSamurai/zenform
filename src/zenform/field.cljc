(ns zenform.field
  (:require [clojure.string :as s]
            [zenform.validators :as val]
            #?(:clj [zenform.util :refer [with-catch]]
               :cljs [zenform.util :refer-macros [with-catch]])))

(def field-defaults
  {:type nil
   :path nil
   :id nil
   :name nil
   :label nil
   :description nil
   :value nil
   :required? false
   :value-clean nil
   :validators nil
   :message-required "This value is required"
   :message-parse "Wrong field value"
   :errors nil})

(defmulti parse :type)

#?(:cljs
   (defn parseInt [x]
     (let [val (js/parseInt x)]
       (when-not (js/isNaN val)
         val))))

(defmethod parse :text
  [{:keys [value] :as field}]
  (cond
    (string? value)
    value))

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

      (contains? #{"true" "TRUE" "True" "yes" "YES" "Yes" "1"} (s/trim value))
      true

      (contains? #{"false" "FALSE" "False" "no" "NO" "No" "0"} (s/trim value))
      false))

(defn on-change
  [{:keys [validators required? message-parse message-required] :as field} value]

  (let [*field (transient field)
        *errors (transient [])]

    (assoc! *field :value value)
    (assoc! *field :value-clean nil)

    (when (and required? (empty? value))
      (conj! *errors message-required))

    (when-not (empty? value)

      (let [value-clean (with-catch (parse *field))]
        (assoc! *field :value-clean value-clean)

        (when-not (some? value-clean)
          (conj! *errors message-parse))

        (when (some? value-clean)
          (doseq [val validators]
            (when-not (with-catch (val/validate val value-clean))
              (conj! *errors (:message val)))))))

    (assoc! *field :errors (-> *errors persistent! not-empty))
    (persistent! *field)))

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
