(ns zenform.inputs.radio
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]))

(defn widget [{fp :form-path p :path :as opts}]
  (let [data (rf/subscribe [:zenform/form-path fp p])
        items (rf/subscribe (:items opts))]
    (fn []
      (let [{v :value :as data} @data]
        ;; should be called on form init somehow ? form lifecycle ?
        (when (and (not-empty data) (nil? v))
          (rf/dispatch [:zenform/on-change fp p (first @items)]))
        [:div.zen-radio
         (for [i @items]
           [:div.option
            {:class (when (= i v) "active")
             :key (pr-str i)
             :on-click #(rf/dispatch [:zenform/on-change fp p i])}
            [:span.radio (when (= i v) [:div.inner-radio])]
            [:span.value (or (:display i) (pr-str i))]])]))))
