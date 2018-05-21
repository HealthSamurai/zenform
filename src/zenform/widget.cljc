(ns zenform.widget
  (:require [re-frame.core :as rf]))

(defn on-change
  [form-path field-path e]
  (let [val (-> e .-target .-value)]
    (rf/dispatch [:zenform.events/on-change form-path field-path val])))

(defn text-input
  [form-path field-path]
  (let [field (rf/subscribe [:zenform.subs/get-field form-path field-path])
        on-change (partial on-change form-path field-path)]
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

(defn email-input
  [form-path field-path]
  (let [field (rf/subscribe [:zenform.subs/get-field form-path field-path])
        on-change (partial on-change form-path field-path)]
    (fn [form-path field-path]
      (let [{:keys [id label name value errors]} @field]
        [:div
         (when (and id label)
           [:label {:for id} label])
         [:input {:id id
                  :name name
                  :type :email
                  :defaultValue (or value "")
                  :on-blur on-change}]
         (when errors
           [:ul
            (for [err errors]
              ^{:key err} [:p err])])]))))
