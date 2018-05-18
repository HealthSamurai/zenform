(ns zenform.widget)

(defn text-input
  [{:keys [id name label value errors]}]

  [:div
   (when (and id label)
     [:label {:for id} label])
   [:input {:id id
            :name name
            :value value}]])
