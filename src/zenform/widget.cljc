(ns zenform.widget
  (:require [re-frame.core :as rf]))

(defn on-change-value
  [form-path field-path e]
  (rf/dispatch [:zenform.events/on-change form-path field-path (-> e .-target .-value)]))

(defn on-change-checked
  [form-path field-path e]
  (rf/dispatch [:zenform.events/on-change form-path field-path (-> e .-target .-checked)]))

(defn checkbox-input
  [form-path field-path]
  (let [field (rf/subscribe [:zenform.subs/field form-path field-path])
        on-change (partial on-change-checked form-path field-path)]
    (fn [form-path field-path]
      (let [{:keys [id label name value errors]} @field]
        [:div
         (when (and id label)
           [:label {:for id} label])
         [:input {:id id
                  :name name
                  :type :checkbox
                  :value value
                  :on-change on-change}]
         (when errors
           [:ul
            (for [err errors]
              ^{:key err} [:p err])])]))))

(defn text-input
  [form-path field-path]
  (let [field (rf/subscribe [:zenform.subs/field form-path field-path])
        on-change (partial on-change-value form-path field-path)]
    (fn [form-path field-path]
      (let [{:keys [id label name value errors]} @field]
        [:div
         (when (and id label)
           [:label {:for id} label])
         [:input {:id id
                  :name name
                  :value (or value "")
                  :on-change on-change}]
         (when errors
           [:ul
            (for [err errors]
              ^{:key err} [:p err])])]))))

(defn textarea-input
  [form-path field-path]
  (let [field (rf/subscribe [:zenform.subs/field form-path field-path])
        on-change (partial on-change-value form-path field-path)]
    (fn [form-path field-path]
      (let [{:keys [id label name value errors]} @field]
        [:div
         (when (and id label)
           [:label {:for id} label])
         [:textarea {:id id
                     :name name
                     :value (or value "")
                     :on-change on-change}]
         (when errors
           [:ul
            (for [err errors]
              ^{:key err} [:p err])])]))))

(defn email-input
  [form-path field-path]
  (let [field (rf/subscribe [:zenform.subs/field form-path field-path])
        on-blur (partial on-change-value form-path field-path)
        on-change #(rf/dispatch [:zenform.events/clear-field-errors form-path field-path])]
    (fn [form-path field-path]
      (let [{:keys [id label name value errors]} @field]
        [:div
         (when (and id label)
           [:label {:for id} label])
         [:input {:id id
                  :name name
                  :type :email
                  :defaultValue (or value "")
                  :on-change on-change
                  :on-blur on-blur}]
         (when errors
           [:ul
            (for [err errors]
              ^{:key err} [:p err])])]))))
