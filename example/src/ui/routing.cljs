(ns ui.routing
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [clojure.string :as str]
            [clojure.set :as set]
            [route-map.core :as route-map]))

(defn dispatch-routes [_]
  (let [fragment (.. js/window -location -hash)]
    (rf/dispatch [:fragment-changed fragment])))


(rf/reg-sub
 :route-map/current-route
 (fn [db _] (:route-map/current-route db)))


(rf/reg-event-fx
 :fragment-changed
 (fn [{db :db} [k fragment]]
   (if-let [route (route-map/match [:. (str/replace fragment #"^#" "")] (:route-map/routes db))]
     {:db (assoc db :fragment fragment :route-map/current-route route)}
     {:db (assoc db :fragment fragment :route-map/current-route nil)})))

(rf/reg-event-fx
 :route-map/init
 (fn [cofx [_ routes]]
   {:db (assoc (:db cofx) :route-map/routes routes)
    ::history {}}))

(rf/reg-fx
 ::history
 (fn [_]
   (aset js/window "onhashchange" dispatch-routes)
   (dispatch-routes nil)))

(rf/reg-fx
 :route-map/redirect
 (fn [href]
   (aset (.-location js/window) "hash" href)))
