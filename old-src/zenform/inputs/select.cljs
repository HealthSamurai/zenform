(ns zenform.inputs.select
  (:require
   [clojure.string :as str]
   [goog.functions :refer [debounce]]
   [re-frame.core :as rf]
   [reagent.core :as r]))

;; in our case inner search would be faster than outer
(defn is-child? [par child]
  (if (.isEqualNode par child)
    true
    (some identity
          (map #(is-child? % child)
               (array-seq (.-childNodes par))))))

(defn child [parent-node classname]
  (aget (.getElementsByClassName parent-node classname) 0))

(defn children [parent-node & classnames]
  (flatten (map #(array-seq (.getElementsByClassName parent-node %)) classnames)))

(defn widget [{:keys [form-path path search search-by-enter debounce-interval add-items?]
               :as opts}]
  (let [data (rf/subscribe [:zenform/form-path form-path path])
        items (rf/subscribe (:items opts))
        loading (rf/subscribe (:loading opts))
        state (r/atom {:active false})
        doc-click-listener (fn [e]
                             (let [outer-click? (not (is-child? (:root-node @state) (.-target e)))]
                               (when (and outer-click? (:active @state))
                                 (when-let [f (:on-blur opts)] (f e))
                                 (swap! state assoc :active false))))
        on-search (cond
                    search-by-enter identity
                    debounce-interval (debounce #(rf/dispatch (conj search %)) debounce-interval)
                    :else #(rf/dispatch (conj search %)))
        key-handler (fn [e]
                      (when (and search-by-enter (= 13 (.-keyCode e)))
                        (rf/dispatch (conj search (.. e -target -value)))))]

    (r/create-class
     {:component-did-mount
      (fn [this]
        (let [root (r/dom-node this)]
          (swap! state assoc :root-node root)
          (when-let [input (child root "zen-search-input")]
            (swap! state assoc :input-node input)
            (.addEventListener input "keydown" key-handler)))
        (.addEventListener js/document "click" doc-click-listener))

      :component-will-unmount
      (fn [this]
        (when-let [input (:input-node @state)]
          (.removeEventListener input "keydown" key-handler))
        (.removeEventListener js/document "click" doc-click-listener))

      :reagent-render
      (fn [props]
        (let [{:keys [value]} @data]
          [:div.zen-select
           [:div.select
            {:class (when (:errors @data) "invalid")
             :on-click
             (fn [_]
               (if (:active @state)
                 (do
                   (swap! state assoc :active false)
                   #_(set! (.-value (:input-node @state)) ""))
                 (do
                   (js/setTimeout #(.focus (:input-node @state)) 10)
                   (on-search (.-value (:input-node @state)))
                   (swap! state assoc :active true))))}
            [:span.triangle "▾"]
            (if value
              [:span.value (or (:display value) value)]
              [:span.choose-value
               (or (:placeholder props) "Select...")])
            (when value
              [:i.material-icons.cross
               {:on-click
                (fn [e]
                  (rf/dispatch [:zenform/on-change form-path path nil])
                  (set! (.-value (:input-node @state)) "")
                  (.stopPropagation e))}
               "close"])]
           (when-let [err (:errors @data)]
             [:div.err-msg (first (vals err))])
           [:input.zen-search-input
            {:tab-index 0
             :class (when-not (:active @state) :inactive)
             :on-change #(on-search (.. % -target -value))}]
           (when (and (:active @state) @loading)
             [:div.loader "Loading"])
           (when (:active @state)
             [:div.options
              (when search-by-enter
                [:div.info "Press enter for lookup"])
              (cond
                (and (empty? @items) add-items? (not-empty (.-value (:input-node @state))))
                (let [v (.-value (:input-node @state))]
                  [:div.add {:on-click
                             (fn [e]
                               (swap! state assoc :active false)
                               (rf/dispatch [:zenform/on-change form-path path v]))}
                   (str "Add " v)])
                (empty? @items)
                [:div.info "No results"]
                :else
                (for [opt @items]
                  [:div.option
                   {:key (pr-str opt)
                    :on-click (fn [_]
                                (swap! state assoc :active false)
                                (rf/dispatch [:zenform/on-change form-path path opt]))}
                   (or (:display opt) opt)]))])]))})))
