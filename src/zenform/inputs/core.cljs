(ns zenform.inputs.core
  (:require [zenform.model :as model]
            [re-frame.core :as rf]
            [clojure.string :as str]
            [zenform.inputs.zselect :as zselect]))

(def styles
  [zselect/style])

(def zselect zselect/zselect)

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
        [:div.invalid-feedback {:style {:display "block"}} (str/join ", " (vals errs))]))))

(defn select [form-path path & [attrs]]
  (let [node (rf/subscribe [:zf/node form-path path])
        on-change (fn [x] (rf/dispatch [:zf/set-value form-path path (.. x -target -value)]))]
    (fn [& _]
      (let [*node @node
            v (:value *node)
            errs (:errors *node)]
        [:select.form-control (assoc attrs :on-change on-change)
         (for [i (:items *node)]
           [:option {:key (or (:id i) (:value i)) :value (:value i)}
            (:display i)])]))))

(defn toggle [form-path path & [attrs]]
  (let [node (rf/subscribe [:zf/node form-path path])
        on-change (fn [] (rf/dispatch [:zf/set-value form-path path (not (:value @node))]))]
    (fn [& _]
      (let [*node @node v (:value *node)]
        [:div.toggle.btn {:on-click on-change :class (if v "btn-primary" "btn-light")}
         (or (get (:toggle *node) v) (str v))]))))

(defn radio [form-path path value]
  (let [node (rf/subscribe [:zf/node form-path path])
        on-change (fn [] (rf/dispatch [:zf/set-value form-path path value]))]
    (fn [& _]
      (let [*node @node v (:value *node)]
        [:div.zf-radio {:on-click on-change :class (when (= v value) "active")}
         (when v [:div.zf-radio-circle])]))))
