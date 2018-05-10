(ns zenform.core
  (:require-macros [reagent.ratom :refer [reaction run!]])
  (:require
   [clojure.string :as str]
   [clojure.set :as set]
   [reagent.core :as r]
   [re-frame.core :as rf]
   [garden.units :as u]
   [zenform.validators :as v]
   [zenform.model :as model]
   [zenform.inputs.input :as input]
   [zenform.inputs.button-select :as button-select]
   [zenform.inputs.select :as select]
   [zenform.inputs.calendar :as calendar]
   [zenform.inputs.date-input :as date-input]
   [zenform.inputs.radio :as radio]))

(def ->form-model model/->form-model)
(def input input/widget)
(def select select/widget)
(def button-select button-select/widget)
(def radio radio/widget)

(def date-input date-input/widget)
(def calendar calendar/widget)

;; [zenform.inputs :as inputs]
;; TODO to be merged into zenform
;; (def date inputs/date)
;; (def *time inputs/*time)
;; (def webcam inputs/webcam)
;; (def date-time inputs/date-time)
;; (def switchbox inputs/switchbox)
;; (def dropdown inputs/dropdown)
