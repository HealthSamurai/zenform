(ns zenform.inputs.button-select
  (:require
   [re-frame.core :as rf]))

(defn widget [{:keys [form-path path]}]
  (let [data (rf/subscribe [:zenform/form-path form-path path])]
    ;; TODO should get items from form data
    (fn [{:keys [items]}]
      [:div.zen-button-select {:tab-index 0}
       (doall
        (for [i items]
          [:div.option
           {:key (pr-str i)
            :class (when (= i (:value @data)) "active")
            :on-click #(rf/dispatch [:zenform/on-change form-path path i])}
           [:span.value i]]))])))
