(ns frames.xhr
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [clojure.string :as str]
            [re-frame.core :as rf]))

(defn to-query [params]
  (->> params
       (mapv (fn [[k v]] (str (name k) "=" v)))
       (str/join "&")))

(rf/reg-sub
 :xhr/url
 (fn [db [_ url]]
   (str (get-in db [:config :base-url]) url)))

(defn json-fetch [{uri :uri
                   token :token
                   headers :headers
                   params :params
                   success :success
                   error :error :as opts}]

  (let [headers (merge (or headers {})
                       {"Accept" "application/json"
                        "content-type" "application/json"
                        "Authorization" (str "Bearer " token)})
        fetch-opts (-> (merge {:method "get" :mode "cors"} opts)
                       (dissoc :uri :headers :success :error :params)
                       (assoc :headers headers))
        fetch-opts (if (:body opts)
                     (assoc fetch-opts :body (.stringify js/JSON (clj->js (:body opts))))
                     fetch-opts)
        url (rf/subscribe [:xhr/url uri])]

    (->
     (js/fetch (str @url (when params (str "?" (to-query params))))
               (clj->js fetch-opts))
     (.then
      (fn [resp]
        (.then (.json resp)
               (fn [doc]
                 (if (< (.-status resp) 299)
                   (rf/dispatch [(:event success)
                                 (merge success
                                        {:request opts
                                         :response resp
                                         :data (js->clj doc :keywordize-keys true)})])
                   (rf/dispatch [(:event error)
                                 (merge error
                                        {:request opts
                                         :response resp
                                         :data (js->clj doc :keywordize-keys true)})]))))))
     )))

(rf/reg-fx :json/fetch json-fetch)
(rf/reg-fx ::json-fetch json-fetch)

(rf/reg-fx
 ::fetch
 (fn [{uri :uri content :content suc :success :as args}]
   (->
    (js/fetch uri)
    (.then (fn [x]
             (cond
               (= :text content) (.text x)
               (= :json content) (.json x)
               :else (assert false (str "Expected content text or json, but " content)))))
    (.then (fn [txt]
             (rf/dispatch [suc {:content txt
                                :args args}]))))))
