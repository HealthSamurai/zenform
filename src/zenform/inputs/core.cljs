(ns zenform.inputs.core
  (:require [zenform.model :as model]
            [re-frame.core :as rf]
            [clojure.string :as str]
            [zenform.inputs.zselect :as zselect]
            [zenform.inputs.calendar :as calendar]))

(def styles
  [zselect/style])

(def zselect zselect/zselect)
(def calendar calendar/calendar)

(defn text-input [form-path path & [attrs]]
  (let [node (rf/subscribe [:zf/node form-path path])
        attrs (assoc attrs :on-change #(rf/dispatch [:zf/set-value form-path path (.. % -target -value)]))]
    (fn [& _]
      (let [*node @node
            v (:value *node)
            errs (:errors *node)]
        [:input (-> attrs
                    (assoc :value v)
                    (update :class (fn [class] (str class (when errs " is-invalid") ))))]))))

(defn date-input [form-path path & [attrs]]
  (let [node (rf/subscribe [:zf/node form-path path])
        attrs (assoc attrs :on-change (fn [e]
                                        (rf/dispatch [:zf/set-value form-path path (.. e -target -value)])))]
    (fn [& _]
      (let [*node @node
            v (:value *node)
            errs (:errors *node)]
        [:input (-> attrs
                    (assoc :default-value v)
                    (assoc :type "date")
                    (update :class (fn [class] (str class (when errs " is-invalid") ))))]))))

(defn time-input [form-path path & [attrs]]
  (let [node (rf/subscribe [:zf/node form-path path])
        attrs (assoc attrs :on-change (fn [e]
                                        (rf/dispatch [:zf/set-value form-path path (.. e -target -value)])))]
    (fn [& _]
      (let [*node @node
            v (:value *node)
            errs (:errors *node)]
        [:input (-> attrs
                    (assoc :default-value v)
                    (assoc :type "time")
                    (update :class (fn [class] (str class (when errs " is-invalid") ))))]))))

(defn invalid-feedback [form-path path]
  (let [node (rf/subscribe [:zf/node form-path path])]
    (fn [& _]
      (let [errs (:errors @node)]
        [:div.invalid-feedback {:style {:display "block" :visibility "visible"}} (str/join ", " (vals errs))]))))


(defn select [form-path path & [attrs]]
  (let [node @(rf/subscribe [:zf/node form-path path])
        on-change (fn [x]
                    (rf/dispatch
                     [:zf/set-value form-path path
                      (.. x -target -value)]))]

    (let [{value-current :value
           :keys [errors]} node

          value-current (or value-current "")]

      [:select
       (merge attrs
              {:on-change on-change
               :value value-current})

       (for [item (:items node)
             :let [{:keys [id value display]} item
                   key (or id value)]]
         [:option
          {:key key :value value}
          (or display value)])])))


(defn toggle [form-path path & [attrs]]
  (let [node (rf/subscribe [:zf/node form-path path])
        on-change (fn [] (rf/dispatch [:zf/set-value form-path path (not (:value @node))]))]
    (fn [& _]
      (let [*node @node v (:value *node)]
        [:div.toggle.btn {:on-click on-change :class (if v "btn-primary" "btn-light")}
         (or (get (:toggle *node) v) (str v))]))))

(defn radio-group [form-path path & [attrs]]
  (let [node (rf/subscribe [:zf/node form-path path])
        on-change (fn [v] (rf/dispatch [:zf/set-value form-path path v]))]
    (fn [& _]
      (let [{:keys [items] current-value :value} @node]
        (into [:div.btn-group {:tab-index 0
                               :on-key-down
                               (fn [e]
                                 (let [[before [_ & after]] (split-with (fn [{:keys [value]}]
                                                                          (not= value current-value))
                                                                        items)
                                       left-option (last before)
                                       right-option (first after)
                                       pressed-key (.-key e)]
                                   (when (#{"ArrowLeft" "ArrowUp" "ArrowRight" "ArrowDown"} pressed-key)
                                     (.preventDefault e))
                                   (cond (and (#{"ArrowLeft" "ArrowUp"} pressed-key) left-option)
                                         (on-change (:value left-option))
                                         (and (#{"ArrowRight" "ArrowDown"} pressed-key) right-option)
                                         (on-change (:value right-option)))))}]
              (for [{:keys [label value]} items]
                [:div.btn.btn-secondary {:class (when (= value current-value) "active")
                                         :on-click #(on-change value)}
                 label]))))))

(defn radio [form-path path value]
  (let [node (rf/subscribe [:zf/node form-path path])
        on-change (fn [] (rf/dispatch [:zf/set-value form-path path value]))]
    (fn [& _]
      (let [*node @node v (:value *node)]
        [:div.zf-radio {:on-click on-change :class (when (= v value) "active")}
         (when v [:div.zf-radio-circle])]))))
