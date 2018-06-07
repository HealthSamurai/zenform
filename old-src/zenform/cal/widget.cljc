(ns zenform.cal.widget
  (:require [re-frame.core :as rf]
            [zenform.cal.calendar :as cal]))

#_
(defn widget
  [form-path field-path]
  (let [field @(rf/subscribe [:zenform.subs/field form-path field-path])
        {:keys [value]} field
        on-change (partial on-change-checked form-path field-path)]
    [:input (merge attr {:type :checkbox
                         :value (or value "")
                         :on-change on-change})])
  )

(defn grid [form-path field-path & [date]]
  (let [grid (cal/get-grid date)]
    [:div
     [:a {:href "#"
          :on-click (fn [])}
      "<"]
     [:a {:href "#"
          :on-click (fn [])}
      ">"]
     [:table
      [:thead]
      [:tbody
       (for [week grid]
         ^{:key (cal/key-date (first week))}
         [:tr
          (for [date week]
            ^{:key (cal/key-date date)}
            [:td {:on-click
                  (fn [e]
                    (rf/dispatch [:zenform.events/trigger form-path field-path date]))}
             (cal/day date)])])]]]))
