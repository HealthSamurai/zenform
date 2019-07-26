(ns ui.core
  (:require
   [cljsjs.react]
   [reagent.core :as reagent]
   [garden.core :as garden]
   [garden.color :as c]
   [garden.units :as u]

   [frames.xhr]

   [re-frame.core :as rf]
   [route-map.core :as route-map]
   [clojure.string :as str]
   [ui.routing]
   [ui.routes :refer [routes href pages] :as ui-routes]

   ;; [zenform.styles :as zstyles]
   [ui.index-page]
   [ui.calendar-page]
   [zenform.core :as zenform]
   ;; [ui.styles-page]
   ))


(def h3 38)
(def h2 24)
(def h 16)

(defn style [gcss]
  [:style (garden/css gcss)])

(defn current-page []
  (let [current-route (rf/subscribe [:route-map/current-route])]
    (fn []
      [:div
       (let [{page :match params :params} @current-route]
         (if page
           (if-let [cmp (:cmp (ui-routes/resolve-page (:id page)))]
             [:div [cmp params]]
             [:div.not-found (str "Page not found [" (str page) "]" )])
           [:div.not-found (str "Route not found ")]))])))

(defn navigation []
  (let [current-route (rf/subscribe [:route-map/current-route])]
    (fn []
      [:div.navigation
       (style [:.navigation {:padding {:top (u/px 20)
                                       :right (u/px 20)}
                             :background-color "white"}
               [:a.navitem {:display "block"
                            :color "#888"
                            :border-left "6px solid #ddd"
                            :font-family "lato"
                            :padding {:top (u/px 10)
                                      :bottom (u/px 10)
                                      :left (u/px 20)}}
                [:&.active {:color "#007bff"
                            ;; :background-color "#eee"
                            :border-color "#007bff"}]]])
       (doall
        (for [[i p] (sort-by (fn [[_ x]] (:w x)) @ui-routes/pages)]
          [:a.navitem {:key i
                       :class (when (= i (get-in @current-route [:match :id]))
                                "active")
                       :href (href (name i))} (:title p)]))])))

(def styles
  (style
   (let [nav-width 100]
     [zenform/styles
      [:body
       {:font-family "Roboto, sans-serif"}
       [:.form-control {:background-color "#f9f9f9!important"}]
       [:.topnav {:border-bottom "1px solid #f1f1f1" :text-align "center"
                  :margin-bottom "20px"}
        [:.brand {:display "inline-block"
                  :font-size (u/px 30)
                  :font-weight "bold"
                  :margin {:left (u/px 20)}
                  :font-family "lato"
                  :padding (u/px 10)}]]
       [:.navigation {:width (u/px nav-width)
                      :position "absolute"
                      :top (u/px 67)
                      :bottom 0
                      :left 0}]
       [:.pane {:margin ""}]
       [:h1 {:margin-bottom (u/px 30)
             :font-weight :normal
             :font-size (u/px h3)
             :line-height (u/px* h3 1.5)}]
       [:.re-form-row {:margin-top (u/px h2)}]
       [:pre {:background-color "#f1f1f1" :padding "20px" :border "1px solid #ddd"} ]
       [:label {:display "block"
                :margin-bottom (u/px 2)
                :font-size (u/px h)
                :line-height (u/px (/ (* h 3) 2))
                :padding-right "10px"}]
       [:.errors {:color "red"}]]])))

(defn root-component []
  [:div [:h1 "Hello"]]
  [:div
   styles
   [:div.topnav
    [:a.brand
     [:img {:src "icon.png" :style {:width "30px"}}]
     " "
     "zenform"]]
   [navigation]
   [current-page]])

(rf/reg-event-fx
 ::initialize
 (fn [cofx]
   (.log js/console (routes))
   {:dispatch-n [[:route-map/init (routes)]]}))

(defn dispatch-routes [_]
  (let [fragment (.. js/window -location -hash)]
    (rf/dispatch [:fragment-changed fragment])))

(defn mount-root []
  (reagent/render [root-component] (.getElementById js/document "app")))

(defn init! []
  (rf/dispatch [::initialize])
  (mount-root))
