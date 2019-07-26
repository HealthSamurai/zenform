(ns zenform.inputs.zselect
  (:require-macros [garden.def :refer [defkeyframes]])
  (:require [zenform.model :as model]
            [re-frame.core :as rf]
            [garden.core :as garden]
            [clojure.string :as str])
  (:import [goog.async Debouncer]))

(rf/reg-event-db
 :zf/dropdown
 (fn [db [_ form-path path open?]]
   (update-in db form-path
              (fn [form]
                (assoc-in form (conj (model/get-node-path path) :dropdown)
                           open?)))))

(defkeyframes rotation
  [:from {:transform "rotate(0)"}]
  [:to {:transform "rotate(359deg)"}])

(def style
  [rotation
   [:div.zselect
    [:.zselect-icon {:color "#888"
                     :margin-right "8px"}]
    [:div.zselect-value {:display "block"
                         :cursor "pointer"
                         :width "100%"
                         :padding ".375rem .75rem"
                         :font-size "1rem"
                         :line-height "1.5"
                         :color "#495057"
                         :background-color "#f9f9f9!important"
                         :background-clip "padding-box"
                         :border "1px solid #ced4da"
                         :border-radius ".25rem"
                         :transition "border-color .15s ease-in-out,box-shadow .15s ease-in-out"}]
    [:div.zselect-dropdown-wrap
     {:position "relative"}]
    [:div.zdropdown
     {:position "absolute"
      :border "1px solid #ddd"
      :border-radius ".25rem"
      :top "3px"
      :left 0
      :right 0
      :background-color "white"
      :box-shadow "0px 8px 16px 0px rgba(0,0,0,0.2)"
      :padding "3px"
      :z-index 1}]
    [:div.zselect-options
     {:max-height "200px"
      :margin-top "5px"
      :overflow-y "auto"}]
    [:div.zprogress {:position "absolute"
                     :right "10px"
                     :color "#888"
                     :line-height "11px"
                     :padding-top "2px"
                     :text-align "center"
                     :width "20px"
                     :height "20px"
                     :font-size "20px"
                     :transform-origin "50% 50%"
                     :animation [[rotation "0.5s infinite linear"]]
                     :top "13px"}]

    [:div.zselect-option
     {:padding "5px"
      :border-bottom "1px solid #ddd"
      :margin-top "-1px"}
     [:&.active {:background-color "#f1f1f1"}]]]])

(rf/reg-event-db
 :zf/selection-prev
 (fn [db [_ form-path path]]
   (update-in db (into form-path (model/get-node-path path))
           (fn [node]
             (update node :selection (fn [x] (if (and x (> x 0)) (dec x) 0)))))))

(rf/reg-event-db
 :zf/selection-next
 (fn [db [_ form-path path]]
   (update-in db (into form-path (model/get-node-path path))
           (fn [node]
             (let [items-cnt (dec (or (count (:items node)) 1))]
               (update node :selection (fn [x] (if x (if (< x items-cnt) (inc x) x) 1))))))))

(rf/reg-event-db
 :zf/selection-select
 (fn [db [_ form-path path]]
   (update-in db form-path
              (fn [form]
                (update-in form (model/get-node-path path)
                           (fn [node]
                             (if-let [v (nth (or (:items node) []) (or (:selection node) 0))]
                               (assoc node
                                      :value (:value v)
                                      :selection 0
                                      :dropdown false)
                               node)))))))

(rf/reg-event-db
 :zf/selection-reset
 (fn [db [_ form-path path]]
   (update-in db (into form-path (model/get-node-path path))
           (fn [node]
             (assoc node :selection 0)))))

(def timer (atom nil))

(defn clear-debounce []
  (js/clearTimeout @timer)
  (reset! timer nil))

(defn debounce [fnc ms]
  (if @timer (clear-debounce))
  (reset! timer
          (js/setTimeout
           (fn []
             (clear-debounce)
             (fnc))
           ms)))

(defn *zselect [form-path path & [attrs]]
  (let [node (rf/subscribe [:zf/node form-path path])
        state (atom {})
        zselect-cfg (:zselect @node)
        node-path (into form-path (model/get-node-path path))
        items-path (conj node-path :items)
        status-path (conj node-path :status)
        os (assoc (:on-search zselect-cfg) :items-path items-path :status-path status-path)
        event (Debouncer. (fn [q] (rf/dispatch [(:event os) (assoc os :query q)]))
                          (or (:debounce-interval zselect-cfg)
                              400))
        on-key-press (fn [e]
                       (case (.-keyCode e)
                         38 (do (rf/dispatch [:zf/selection-prev form-path path]) (.preventDefault e))
                         40 (rf/dispatch [:zf/selection-next form-path path])
                         13 (rf/dispatch [:zf/selection-select form-path path])
                         (let [q (.. e -target -value)]
                           (.fire event q)
                           [:zf/selection-reset form-path path])))

        open-dropdown  (fn []
                         (rf/dispatch [:zf/dropdown form-path path true])
                         (js/setTimeout
                          #(when-let [focus-node (:focus-node @state)]
                             (.focus focus-node)) 100))

        on-click (fn [i] (fn [_]
                           (rf/dispatch [:zf/set-value form-path path (:value i)])
                           (rf/dispatch [:zf/dropdown form-path path false])))

        close-dropdown (fn [] (rf/dispatch [:zf/dropdown form-path path false]))]
    (fn [& _]
      (let [*node @node
            v (:value *node)
            errs (:errors *node)
            items (:items *node)
            sel (or (:selection *node) 0)
            status (:status *node)]
        [:div.zselect {}
         [:div.zselect-value {:on-click open-dropdown :tab-index 0 :on-key-down open-dropdown}
          [:span.zselect-icon "▾"]
          (if v (or (:display v) v) (or (:placeholder attrs) "Search..."))]
         [:div.zselect-dropdown-wrap
          [:div.zdropdown {:style {:display (when-not (:dropdown *node) "none")}}
           [:input.form-control {:ref #(swap! state assoc :focus-node %)
                                 :on-blur (fn [] (js/setTimeout #(close-dropdown) 200))
                                 :on-key-down on-key-press
                                 :placeholder "Search..."}]
           (when (= :loading status) [:div.zprogress "◷"])
           [:div.zselect-options
            (map-indexed
             (fn [idx i]
               [:div.zselect-option {:key (:id i)
                                     :class (when (= idx sel) "active")
                                     :on-click (on-click i)}
                (:display i)])
             items)]
           [:center [:div.btn.btn-link {:on-click close-dropdown} "Close"]]]]]))))

(defn zselect [form-path path & [attrs]]
  ;; this is hack to wait for node metadata in db
  (let [node (rf/subscribe [:zf/node form-path path])]
    (fn [& _]
      (if @node
        [*zselect form-path path attrs]
        [:div "loading..."]))))
