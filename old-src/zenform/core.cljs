(ns zenform.core
  (:require
   [clojure.string :as str]
   [re-frame.core :as rf]
   [cljs.pprint :as pprint]))

(defn form-value [form-path]
  (let [v (rf/subscribe [:zenform/form-value form-path])]
    (fn []
      [:pre (with-out-str (pprint/pprint @v))])))

(defn form-model [form-path]
  (let [v (rf/subscribe [:zenform/form-model form-path])]
    (fn []
      [:pre (with-out-str (pprint/pprint @v))])))

(defn pprint [v]
  [:pre (with-out-str (pprint/pprint v))])
