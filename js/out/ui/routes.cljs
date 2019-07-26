(ns ui.routes
  (:require [route-map.core :as route-map]
            [clojure.string :as str]))

(defonce pages (atom {}))

(defn reg-page [k cmp]
  (swap! pages assoc k cmp))

(defn resolve-page [k]
  (get @pages k))

(defn routes []
  (->> @pages
       (reduce (fn [acc [k v]]
                 (assoc acc (name k) {:. (assoc (dissoc v :cmp) :id k)})) {:. :index})))


(defn href
  [& parts]
  (let [url (str "/" (str/join "/" (map (fn [x] (if (keyword? x) (name x) (str x))) parts)))]
    (when-not  (route-map/match [:. url] (routes))
      (.error js/console (str url " is not matches routes")))
    (str "#" url)))

