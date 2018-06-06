(ns zenform.widget
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [zenform.node :as node]))

;;
;; Helpers
;;

(defn add-class
  "Appends a new class to existing ones."
  [classes class]
  (cond
    (nil? class)
    classes

    (string? classes)
    (str classes " " class)

    (keyword? classes)
    (str (name classes) " " class)

    (nil? classes)
    class

    :else classes))

(defn entity [code]
  {:dangerouslySetInnerHTML {:__html code}})

(defn item-index
  "Turns a seq of items into a map where a value is a key
   and its name (description) is a value."
  [items]
  (into {} (map (juxt :value :name) items)))

;;
;; On-change shortcuts
;;

(defn on-change
  [form-path field-path event]
  (rf/dispatch [:zf/on-change
                form-path field-path
                (.. event -target -value)]))

(defn on-input
  [form-path field-path event]
  (rf/dispatch [:zf/on-input
                form-path field-path
                (.. event -target -value)]))

;; (defn on-input
;;   [form-path field-path event]
;;   (rf/dispatch [:zf/on-input
;;                 form-path field-path
;;                 (-> event .-target .-checked)]))

;;
;; Error widgets
;;

(defn error-list
  [errors & [{:keys [list-attr item-attr key-fn]}]]
  (when errors
    (let [key-fn (or key-fn identity)]
      [:ul list-attr
       (for [err errors]
         ^{:key (key-fn err)}
         [:li item-attr err])])))

(defn form-errors
  [form-path & [opt]]
  [error-list @(rf/subscribe [:zf/form-errors form-path]) opt])

(defn node-errors
  [form-path node-path & [opt]]
  [error-list @(rf/subscribe [:zf/node-errors form-path node-path]) opt])

;;
;; Text inputs
;;

(defn text-input
  [form-path field-path & [{:keys [attr delayed?] :as opt}]]
  (let [field @(rf/subscribe [:zf/field form-path field-path])
        value (node/unparse-safe field)
        ok? (node/node-ok? field)
        error-class (when-not ok? "invalid")
        on-change (partial on-change form-path field-path)
        on-input (partial on-input form-path field-path)]
    [:input
     (-> attr
         (assoc :value value)
         (update :class add-class error-class)
         (merge (if delayed?
                  {:on-change on-input
                   :on-blur on-change}
                  {:on-change on-change})))]))

(defn password-input
  [form-path field-path & [opt]]
  (text-input
   form-path field-path
   (assoc-in opt [:attr :type] :password)))

(defn email-input
  [form-path field-path & [opt]]
  (text-input
   form-path field-path
   (assoc opt :delayed? true)))

;;
;; Select and dropdown
;;

(defn select-input
  [form-path field-path items & [opt]]
  (let [field (rf/subscribe [:zf/field form-path field-path])
        index (item-index items)
        ;; a state that tracks wether a dropdown is shown or not
        state (r/atom nil)]
    (letfn [;; local helpers that closure upon the state
            (toggle [] (swap! state update :open? not))
            (open? [] (:open? @state))]
      (fn [form-path field-path items & [opt]]
        (let [{:keys [value]} @field
              {:keys [placeholder]} opt
              value (or (get index value)
                        placeholder
                        "Select...")]
          [:div.re-select-container
           [:div.re-re-select
            {:tabIndex 0
             :on-click toggle}
            [:div.flex
             [:span.triangle "▾"]
             [:span.choose-value value]
             [:span.clear
              {:dangerouslySetInnerHTML {:__html "&times;"}
               :on-click
               (fn [e]
                 (.stopPropagation e)
                 (rf/dispatch [:zf/on-change form-path field-path nil]))}]]]
           (when (:open? @state)
             [:div.options.no-input
              [:div
               (for [{:keys [value name]} items]
                 ^{:key value}
                 [:div.option
                  {:on-click
                   (fn []
                     (rf/dispatch [:zf/on-change form-path field-path value])
                     (toggle))}
                  name])]])])))))

;;
;; Collections
;;

(defn coll-input
  [form-path coll-path field-widget & [opt]]
  (let [field @(rf/subscribe [:zf/field form-path coll-path])
        {:keys [fields]} field
        index-fields (map-indexed vector fields)]
    [:div
     (for [[index field] index-fields
           :let [child-path (conj coll-path index)]]
       ^{:key index}
       [:div
        [field-widget form-path child-path]
        [:a {:href "#"
             :on-click
             (fn [e]
               (rf/dispatch [:zf/del-field form-path coll-path index]))}
         "Remove"]
        [:br]])
     [:a {:href "#"
          :on-click
          (fn [e]
            (rf/dispatch [:zf/add-field form-path coll-path]))}
      "Add a field"]]))

#_
(defn checkbox-input
  [form-path field-path & [{:keys [attr]}]]
  (let [field @(rf/subscribe [:zf/field form-path field-path])
        {:keys [value]} field
        on-change (partial on-change-checked form-path field-path)]
    [:input (merge attr {:type :checkbox
                         :value (or value "")
                         :on-change on-change})]))

#_
(defn textarea-input
  [form-path field-path & [{:keys [attr]}]]
  (let [field @(rf/subscribe [:zf/field form-path field-path])
        {:keys [value]} field
        on-change (partial on-change-value form-path field-path)]
    [:textarea (merge attr {:value (or value "")
                            :on-change on-change})]))

#_
(defn email-input
  [form-path field-path & [{:keys [attr]}]]
  (let [field @(rf/subscribe [:zf/field form-path field-path])
        {:keys [value]} field
        on-blur (partial on-change-value form-path field-path)
        on-change #(rf/dispatch [:zenform.events/clear-field-errors form-path field-path])]
    [:input (merge attr {:type :email
                         :defaultValue (or value "")
                         :on-change on-change
                         :on-blur on-blur})]))
