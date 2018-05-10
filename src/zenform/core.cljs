(ns zenform.core
  (:require-macros [reagent.ratom :refer [reaction run!]])
  (:require
   [clojure.string :as str]
   [clojure.set :as set]
   ;; [reagent.core :as r]
   ;; [re-frame.core :as rf]
   ;; [garden.units :as u]
   ;; [zenform.validators :as v]
   ;; [zenform.model :as model]
   ;; #_[zenform.inputs :as inputs]
   ;; [zenform.inputs.input :as input]
   ;; [zenform.inputs.button-select :as button-select]
   ;; [zenform.inputs.select :as select]
   ;; [zenform.inputs.calendar :as calendar]
   ;; [zenform.inputs.date-input :as date-input]
   ;; [zenform.inputs.radio :as radio]

   ))

;; (def ->form-model model/->form-model)
;; (def input input/widget)
;; (def select select/widget)
;; (def button-select button-select/widget)
;; (def radio radio/widget)

;; ;; TODO to be merged into zenform
;; #_(def date inputs/date)
;; (def date-input date-input/widget)
;; #_(def *time inputs/*time)
;; #_(def webcam inputs/webcam)
;; #_(def date-time inputs/date-time)
;; #_(def switchbox inputs/switchbox)
;; #_(def dropdown inputs/dropdown)
;; (def calendar calendar/widget)
