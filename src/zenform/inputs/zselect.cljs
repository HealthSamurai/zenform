(ns zenform.inputs.zselect
  (:require [zenform.model :as model]
            [re-frame.core :as rf]
            [clojure.string :as str]))

(rf/reg-event-db
 :zf/dropdown
 (fn [db [_ form-path path open?]]
   (update-in db form-path
              (fn [form]
                (assoc-in form (conj (model/get-node-path path) :dropdown)
                           open?)))))
(def style
  [:div.zselect
   [:div.zselect-value {:border "1px solid #ddd"
                        :padding "5px"}]
   [:div.zselect-dropdown-wrap
    {:position "relative"}]
   [:div.zdropdown
    {:position "absolute"
     :border "1px solid #ddd"
     :top "3px"
     :left 0
     :right 0
     :background-color "white"
     :box-shadow "0px 8px 16px 0px rgba(0,0,0,0.2)"
     :padding "3px"
     :z-index 1}]
   [:div.zselect-option
    {:padding "5px"
     :border-bottom "1px solid #ddd"
     :margin-top "-1px"}]])

(defn *zselect [form-path path & [attrs]]
  (let [node (rf/subscribe [:zf/node form-path path])
        zselect-cfg (:zselect @node)
        items-sub (when-let [its (:items zselect-cfg)] (rf/subscribe [(:sub its) its]))
        on-search-event (let [os (:on-search zselect-cfg)]
                          (fn [ev]
                            (let [q (.. ev -target -value)]
                              (rf/dispatch [(:event os) (assoc os :query q)]))))
        open-dropdown  (fn [] (rf/dispatch [:zf/dropdown form-path path true]))
        close-dropdown (fn [] (rf/dispatch [:zf/dropdown form-path path false]))]
    (fn [& _]
      (let [*node @node
            v (:value *node)
            errs (:errors *node)
            items (and items-sub @items-sub)]
        [:div.zselect
         [:div.zselect-value {:on-click open-dropdown} "Search..."]
         [:div.zselect-dropdown-wrap
          (when (:dropdown *node)
            [:div.zdropdown
             [:input.form-control {:on-change on-search-event :placeholder "Search..."}]
             [:div.zselect-options
              (for [i items]
                [:div.zselect-option {:key (:id i)}
                 (:display i)])]
             [:div.btn.btn-link {:on-click close-dropdown} "Close"]])]]))))

(defn zselect [form-path path & [attrs]]
  (let [node (rf/subscribe [:zf/node form-path path])]
    (fn [& _]
      (if @node
        [*zselect form-path path attrs]
        [:div "loading..."]))))
