(ns ui.styles-page
  (:require
   [zenform.core :as zenform]
   [garden.core :as garden]
   [re-frame.core :as rf]
   [ui.routes :as ui-routes]))




(defn index []
  (fn [_]
    [:div
     [:h1 "Styles"]
     [:div.zen-row
      [:input.zen-box {:placeholder ".zen-box"}]
      [:input.zen-box {:placeholder ".zen-box"}]
      ]

     ]))


(ui-routes/reg-page
 :styles {:title "Styles" :w 3 :cmp index})
