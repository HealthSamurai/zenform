(ns zenform.widget
  (:require [re-frame.core :as rf]))

(defn text-input
  [form-path field-path]
  (let [field (rf/subscribe [:zenform.subs/get-field form-path field-path])]
    (fn [form-path field-path]
      (let [{:keys [id label name value errors]} @field]
        [:div
         (when (and id label)
           [:label {:for id} label])
         [:input {:id id
                  :name name
                  :value value
                  :on-change
                  (fn [e]
                    (let [val (-> e .-target .-value)]
                      (rf/dispatch [:zenform.events/on-change form-path field-path val])))}]
         (when errors
           [:ul
            (for [err errors]
              ^{:key err} [:p err])])]))))
