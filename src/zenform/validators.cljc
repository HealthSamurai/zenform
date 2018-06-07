(ns zenform.validators
  (:require [clojure.string :as str]))


(defmulti validate (fn [cfg value] (:type cfg)))

(defmethod validate
  :min-length
  [{limit :value msg :message} v]
  (when (string? v)
    (when (< (count v) limit)
      (or msg (str "Should be longer then " limit)))))

(defmethod validate
  :required
  [{msg :message} v]
  (when (or (nil? v) (and (string? v) (str/blank? v)))
    (or msg "Should not be blank")))

(def email-regex #".+?\@.+?\..+")

(defmethod validate
  :email
  [{msg :message} v]
  (when v
    (when-not (re-matches email-regex v)
      (or msg "Should be valid email"))))
