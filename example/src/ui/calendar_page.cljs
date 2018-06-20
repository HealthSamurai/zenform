(ns ui.calendar-page
  (:require
   [zenform.core :as zenform]
   [zenform.model :as model]
   [re-frame.core :as rf]
   [ui.routes :as ui-routes]))

(def form-path [:user-form])

(def form-schema
  {:type :form
   :fields {:start {:type :date}
            :end   {:type :date}}})

(def init-value {})

(defn index []
  (rf/dispatch   [:zf/init form-path form-schema {}])
  (fn [_]
    [:div.container
     [:h1 "Calendar"]
     [zenform/calendar form-path [:start]]]))


(ui-routes/reg-page
 :calendar {:title "Calendar" :w 2 :cmp index})
