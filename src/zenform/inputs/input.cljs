(ns zenform.inputs.input
  (:require
   [re-frame.core :as rf]))

(defn widget [{fp :form-path p :path}]
  (let [data (rf/subscribe [:zenform/form-path fp p])]
    (fn [opts]
      (let [err (:errors @data)]
        [:div.zen-input
         [:input.zen-box
          {:value (:value @data)
           :class (when (:errors @data) "invalid")
           :on-change #(rf/dispatch [:zenform/on-change fp p (.. % -target -value)])}]
         (when-let [err (:errors @data)]
           [:div.err-msg (first (vals err))])]))))
