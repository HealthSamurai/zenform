(ns zenform.inputs
  (:require
   [clojure.string :as str]
   [re-frame.core :as rf]
   #_[re-form.inputs :as inputs]
   #_[mapper :as mapper]))

;; TODO find time to include into zenform
#_
(defn date [{fp :form-path p :path}]
  (let [data (rf/subscribe [:zenform/form-path fp p])]
    (fn [opts]
      [inputs/date-input
       (merge (dissoc opts :form-path :path)
              {:on-change #(rf/dispatch [:zenform/on-change fp p %]) :value (:value @data)})])))
#_
(defn *time [{fp :form-path p :path}]
  (let [data (rf/subscribe [:zenform/form-path fp p])]
    (fn [opts]
      [inputs/time-input
       (merge (dissoc opts :form-path :path)
              {:on-change #(rf/dispatch [:zenform/on-change fp p %]) :value (:value @data)})])))
#_
(defn webcam [{fp :form-path p :path}]
  (fn [opts]
    [inputs/webcam (assoc opts :photo-name p :on-change #(rf/dispatch [:zenform/on-change fp p %]))]))
#_
(defn date-time [{fp :form-path p :path items :items}]
  (let [data (rf/subscribe [:zenform/form-path fp p])]
    (fn [opts]
      [inputs/date-time-input
       (merge (dissoc opts :form-path :path)
              {:on-change #(rf/dispatch [:zenform/on-change fp p %])
               :value (:value @data)
               :format-date "us"
               :timezone "America/New_York"
               :format-time "12h"
               :on-blur identity})])))
#_
(defn switchbox [{fp :form-path p :path}]
  (let [data (rf/subscribe [:zenform/form-path fp p])]
    (fn [opts]
      [inputs/switchbox-input
       (merge (dissoc opts :form-path :path)
              {:on-change #(rf/dispatch [:zenform/on-change fp p %]) :value (:value @data)})])))

#_
(defn dropdown [{fp :form-path p :path}]
  (let [data (rf/subscribe [:zenform/form-path fp p])]
    (fn [opts]
      [inputs/select
       (merge (dissoc opts :form-path :path)
              {:on-change #(rf/dispatch [:zenform/on-change fp p %])
               :on-blur identity
               :value (:value @data)})])))
