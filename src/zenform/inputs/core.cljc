(ns zenform.inputs.core
  (:require [zenform.model :as model]
            [re-frame.core :as rf]
            [clojure.string :as str]))

(defn text-input [form-path path & [attrs]]
  (let [node (rf/subscribe [:zf/node form-path path])
        attrs (assoc attrs :on-change #(rf/dispatch [:zf/set-value form-path path (.. % -target -value)]))]
    (fn [& _]
      (let [*node @node
            v (:value *node)
            errs (:errors *node)]
        [:input.form-control (assoc attrs :value v :class (when errs "is-invalid"))]))))

(defn invalid-feedback [form-path path]
  (let [node (rf/subscribe [:zf/node form-path path])]
    (fn [& _]
      (let [errs (:errors @node)]
        [:div.invalid-feedback
         (str/join ", " (vals errs))]))))
