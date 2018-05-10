(ns demo.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]

            ))

(defn get-by-id [id]
  (.getElementById js/document id))

(defn view-form []
  [:p nil "hello app"])

(defn init []
  (r/render [view-form] (get-by-id "app")))

(init)
