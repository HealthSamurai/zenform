(ns zenform.widget
  (:require [re-frame.core :as rf]))

;;
;; On-change shortcuts
;;

(defn on-change-value
  [form-path field-path e]
  (rf/dispatch [:zenform.events/on-change form-path field-path (-> e .-target .-value)]))

(defn on-change-checked
  [form-path field-path e]
  (rf/dispatch [:zenform.events/on-change form-path field-path (-> e .-target .-checked)]))

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
  [error-list @(rf/subscribe [:zenform.subs/form-errors form-path]) opt])

(defn field-errors
  [form-path field-path & [opt]]
  [error-list @(rf/subscribe [:zenform.subs/field-errors form-path field-path]) opt])

;;
;; Inputs
;;

(defn checkbox-input
  [form-path field-path & [{:keys [attr]}]]
  (let [field @(rf/subscribe [:zenform.subs/field form-path field-path])
        {:keys [value]} field
        on-change (partial on-change-checked form-path field-path)]
    [:input (merge attr {:type :checkbox
                         :value (or value "")
                         :on-change on-change})]))

(defn text-input
  [form-path field-path & [{:keys [attr]}]]
  (let [field @(rf/subscribe [:zenform.subs/field form-path field-path])
        {:keys [value]} field
        on-change (partial on-change-value form-path field-path)]
    [:input (merge attr {:value (or value "")
                         :on-change on-change})]))

(defn textarea-input
  [form-path field-path & [{:keys [attr]}]]
  (let [field @(rf/subscribe [:zenform.subs/field form-path field-path])
        {:keys [value]} field
        on-change (partial on-change-value form-path field-path)]
    [:textarea (merge attr {:value (or value "")
                            :on-change on-change})]))

(defn email-input
  [form-path field-path & [{:keys [attr]}]]
  (let [field @(rf/subscribe [:zenform.subs/field form-path field-path])
        {:keys [value]} field
        on-blur (partial on-change-value form-path field-path)
        on-change #(rf/dispatch [:zenform.events/clear-field-errors form-path field-path])]
    [:input (merge attr {:type :email
                         :defaultValue (or value "")
                         :on-change on-change
                         :on-blur on-blur})]))
