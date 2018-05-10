(ns demo.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [zenform.core :as zenform]))

(defn get-by-id [id]
  (.getElementById js/document id))

(def form-path [::form-path])

(defn view-form []

  [:div.form

   [:div.inp-block.inp-2.spacer
    [:span.lbl "Name"]
    [:div.inp
     [zenform/input
      {:form-path form-path :path [:name]}]]]

   #_
   [:div.form-row
    [:div.inp-block.inp-2
     [:span.lbl "CPT"]
     [:span.inp
      [zenform/select
       {:form-path form-path
        :path [:cpt]
        :search [:search/search :CPT [:cpt]]
        :items [:search/result [:cpt]]
        :loading [:search/loading [:cpt]]}]]]]

   ])

(defn init []
  (r/render [view-form] (get-by-id "app")))

(init)
