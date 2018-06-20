(ns zenform.inputs.calendar
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]
   [zenform.model :as model]
   [zenform.inputs.calendar-model :as cal]))

(defn calendar-month
  [db [_ path {y :y m :m} dir]]
  (assoc-in db (conj path :state :value)
            (let [[y m] (cal/shift-month y m dir)]
              {:y y :m m})))

(rf/reg-event-db :zenform/calendar-month calendar-month)

(defn calendar-set-value
  [db [_ path v]]
  (update-in db path
             (fn [x] (assoc x
                            :value v
                            :dropdown false
                            :state (assoc (:state x) :value v)))))

(rf/reg-event-db :zenform/calendar-set-value calendar-set-value)

(defn calendar-sub [{path :path :as form-node}]
  (let [{y :y m :m} (or (get-in form-node [:state :value])
                        (:value form-node)
                        (cal/today))]
    (assoc form-node
           :next-ev [:zenform/calendar-month path {:y y :m m} :next]
           :prev-ev [:zenform/calendar-month path {:y y :m m} :prev]
           :cal (cal/for-month y m {:active (:value form-node)}))))

(rf/reg-sub
 :zf/calendar
 (fn [db [_ form-path path]]
   (let [node-path (into form-path (model/get-node-path path))
         node (get-in db  node-path)]
     (calendar-sub (assoc node :path node-path)))))

(defn calendar [fp p & [opts]]
  (let [m (rf/subscribe [:zf/calendar fp p])]
    (fn [& _]
      (let [{{y :y m :m cal :cal} :cal path :path :as data} @m]
        [:div.zen-calendar
         [:table
          [:thead
           [:tr
            [:th.zen-month {:col-span 5}
             [:a {:on-click #(rf/dispatch [:zenform/calendar-mode path :month])}
              (get-in cal/month-names [m :short])]
             " "
             [:a {:on-click #(rf/dispatch [:zenform/calendar-mode path :year])} y]]
            [:th.clickable
             [:a {:on-click #(rf/dispatch (:prev-ev data))} "❮"]]
            [:th.clickable
             [:a {:on-click #(rf/dispatch (:next-ev data))} "❯"]]]
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
                [:td.clicable {:key (:d cell)}
                 [:a.zen-cal-cell
                  {:href "javascript:void(0)"
                   :class (str (when (:current cell) "current")
                               " "
                               (when (:active cell) "active"))
                   :on-click #(rf/dispatch [:zenform/calendar-set-value path cell])}
                  (:d cell)]])])]]]))))
