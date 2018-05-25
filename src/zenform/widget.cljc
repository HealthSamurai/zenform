(ns zenform.widget
  (:require [re-frame.core :as rf]))

;;
;; On-change shortcuts
;;

(defn on-change
  [form-path field-path event]
  (rf/dispatch [:zf/on-change
                form-path field-path
                (.. event -target -value)]))

(defn on-input
  [form-path field-path event]
  (rf/dispatch [:zf/on-input
                form-path field-path
                (.. event -target -value)]))

;; (defn on-input
;;   [form-path field-path event]
;;   (rf/dispatch [:zf/on-input
;;                 form-path field-path
;;                 (-> event .-target .-checked)]))

;;
;; Error widgets
;;

(defn error-list
  [errors & [{:keys [list-attr item-attr key-fn]}]]
  (when errors
    (let [key-fn (or key-fn identity)]
      [:ul list-attr
       (for [err errors]
         ^{:key (key-fn err)} [:li item-attr err])])))

(defn form-errors
  [form-path & [opt]]
  [error-list @(rf/subscribe [:zf/form-errors form-path]) opt])

(defn node-errors
  [form-path node-path & [opt]]
  [error-list @(rf/subscribe [:zf/node-errors form-path node-path]) opt])

;;
;; Inputs
;;

(defn text-input
  [form-path field-path & [{:keys [attr delayed?] :as opt}]]
  (let [field @(rf/subscribe [:zf/field form-path field-path])
        {:keys [value]} field
        on-change (partial on-change form-path field-path)
        on-input (partial on-input form-path field-path)]
    [:input (merge attr
                   {:value (or value "")}
                   (if delayed?
                     {:on-change on-input
                      :on-blur on-change}
                     {:on-change on-change}))]))

(defn password-input
  [form-path field-path & [opt]]
  (text-input
   form-path field-path
   (assoc-in opt [:attr :type] :password)))

(defn email-input
  [form-path field-path & [opt]]
  (text-input
   form-path field-path
   (assoc opt :delayed? true)))

(defn coll-input
  [form-path coll-path field-widget & [opt]]
  (let [field @(rf/subscribe [:zf/field form-path coll-path])
        {:keys [fields]} field
        index-fields (map-indexed vector fields)]
    [:div
     (for [[index field] index-fields
           :let [child-path (conj coll-path index)]]
       ^{:key index}
       [:div
        [field-widget form-path child-path]
        [:br]])
     [:a {:href "#"
          :on-click
          (fn [e]
            (rf/dispatch [:zf/add-field form-path coll-path]))}
      "Add a field"]]))

#_
(defn checkbox-input
  [form-path field-path & [{:keys [attr]}]]
  (let [field @(rf/subscribe [:zf/field form-path field-path])
        {:keys [value]} field
        on-change (partial on-change-checked form-path field-path)]
    [:input (merge attr {:type :checkbox
                         :value (or value "")
                         :on-change on-change})]))

#_
(defn textarea-input
  [form-path field-path & [{:keys [attr]}]]
  (let [field @(rf/subscribe [:zf/field form-path field-path])
        {:keys [value]} field
        on-change (partial on-change-value form-path field-path)]
    [:textarea (merge attr {:value (or value "")
                            :on-change on-change})]))

#_
(defn email-input
  [form-path field-path & [{:keys [attr]}]]
  (let [field @(rf/subscribe [:zf/field form-path field-path])
        {:keys [value]} field
        on-blur (partial on-change-value form-path field-path)
        on-change #(rf/dispatch [:zenform.events/clear-field-errors form-path field-path])]
    [:input (merge attr {:type :email
                         :defaultValue (or value "")
                         :on-change on-change
                         :on-blur on-blur})]))
