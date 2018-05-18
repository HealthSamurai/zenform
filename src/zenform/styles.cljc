(ns zenform.styles)


(def all
  [[:.zen-row {:display "flex"}]
   [:.zen-label {:display "block"
                 :padding ".375rem .75rem"}]
   [:.zen-calendar
    {:border "1px solid #ddd"
     :display "inline-block"
     :padding "5px"
     :width "auto"}
    [:th.zen-month {:text-align "left"
                    :padding-left "5px"}]
    [:th {:text-align "center"
          :font-weight "500"
          :padding 0
          :height "30px"
          :font-size "12px"
          :cursor "pointer"}
     [:a {:display "inline-block" :padding "5px"}]
     [:&:hover {:background-color "#f1f1f1"}]]
    [:td {:padding 0}]
    [:.zen-cal-cell
     {:width "30px"
      :display "block"
      :text-decoration "none"
      :border-radius "100%"
      :height "30px"
      :padding-top "8px"
      :text-align "center"
      :font-size "11px"
      :cursor "pointer"
      :color "#999"}
     [:&.current {:cursor "pointer" :color "#666"}]
     [:&.active  {:color "white" :background-color "#555"}
      [:&:hover {:background-color "#444"}]]
     [:&:hover {:background-color "#f1f1f1"}]]]
   [:.zen-box {:border "1px solid #ddd"
               :display "block"
               :width "100%"
               :background-color "#f9f9f9"
               :transition "border-color .15s ease-in-out,box-shadow .15s ease-in-out"
               :padding ".375rem .75rem"}]

   ]

  )
