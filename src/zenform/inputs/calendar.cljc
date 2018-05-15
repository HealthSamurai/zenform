(ns zenform.inputs.calendar
  #?(:cljs (:require-macros [reagent.ratom :refer [reaction run!]]))
  (:require
   [re-frame.core :as rf]
   [zenform.zmethods :as zm]
   [reagent.core :as r]
   [zenform.model :as model]
   [zenform.calendar :as cal]))

(defmethod zm/init-input
  :zenform/calendar
  [_ schema date]
  (let [{y :y m :m} (or date (cal/today))]
    {}))

(rf/reg-event-db
 :zenform/calendar-month
 (fn [db [_ path {y :y m :m} dir]]
   (assoc-in db (conj path :state :value)
             (let [[y m] (cal/shift-month y m dir)]
               {:y y :m m}))))

(rf/reg-event-db
 :zenform/calendar-set-value
 (fn [db [_ path v]]
   (update-in db path
              (fn [x] (assoc x
                             :value v
                             :dropdown false
                             :state (assoc (:state x) :value v))))))


(defn calendar-sub [{path :path :as form-node}]
  (let [{y :y m :m} (or (get-in form-node [:state :value])
                        (:value form-node)
                        (cal/today))]
    (assoc form-node
           :next-ev [:zenform/calendar-month path {:y y :m m} :next]
           :prev-ev [:zenform/calendar-month path {:y y :m m} :prev]
           :cal (cal/for-month y m {:active (:value form-node)}))))

#?(:cljs
   (rf/reg-sub-raw
    :zenform/calendar
    (fn [db [_ fp p]]
      (let [cur (r/cursor db (into fp (model/get-path p)))]
        (reaction
         (calendar-sub @cur))))))
#?(:clj
   (rf/reg-sub-raw
    :zenform/calendar
    (fn [db [_ fp p]]
      (calendar-sub (get-in db (into fp (model/get-path p)))))))

(defn widget [{fp :form-path p :path}]
  (let [{{y :y m :m cal :cal} :cal
         path :path
         :as data} @(rf/subscribe [:zenform/calendar fp p])]
    [:div.zen-cal.re-calendar
     [:table
      [:thead
       [:tr
        [:th.clickable
         [:a {:on-click #(rf/dispatch (:prev-ev data))} "<"]]
        [:th {:col-span 5}
         [:a {:on-click #(rf/dispatch [:zenform/calendar-mode path :year])} y]
         " "
         [:a {:on-click #(rf/dispatch [:zenform/calendar-mode path :month])}
          (get-in cal/month-names [m :short])]]
        [:th.clickable
         [:a {:on-click #(rf/dispatch (:next-ev data))} ">"]]]
       [:tr
        [:th "Su"]
        [:th "Mo"]
        [:th "Tu"]
        [:th "We"]
        [:th "Th"]
        [:th "Fr"]
        [:th "Sa"]]]
      [:tbody
       (for [row cal]
         [:tr {:key (let [f (first row)]
                      (str (:m f) "-" (:d f)))}
          (for [cell row]
            [:td.clicable
             {:key (:d cell)
              :class (str (when (:current cell) "current")
                          (when (:active cell) "active"))
              :on-click #(rf/dispatch [:zenform/calendar-set-value path cell])}
             (:d cell)])])]]]))
