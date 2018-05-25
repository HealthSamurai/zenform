(ns zenform.inputs.date-input
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]
   [zenform.inputs.calendar :as calendar]))

(rf/reg-event-db
 :zenform/dropdown
 (fn [db [_ path pop]]
   (assoc-in db (conj path :dropdown) (not pop))))

(rf/reg-event-db
 :zenform/date-input-change
 (fn [db [_ path val]]
   (assoc-in db (conj path :internal-value) val)))

(defn widget [{fp :form-path p :path :as args}]
  (let [{v :internal-value path :path pop? :dropdown :as data} @(rf/subscribe [:zenform/form-path fp p])]
    [:div.zen-date.dropdown-input
     [:input.zen-box {:on-focus #(rf/dispatch [:zenform/dropdown path pop?])
                      :on-change #(rf/dispatch [:zenform/date-input-change path (.. % -target -value)])
              :value v #_(when v (str (:d v) "/" (:m v) "/" (:y v)))}]
     (when pop?
       [:div.calendar-dropdown {:style {:flex-direction "column"
                                        :padding "5px"
                                        :width "auto"}}

        [calendar/widget args]
        [:a.close-popup  {:on-click #(rf/dispatch [:zenform/dropdown path true])
                          :style {:display "block"
                                  :border "1px solid #ddd"
                                  :text-align "center"
                                  :padding "5px"}}
         "Close"]])]))
