(ns user (:require [figwheel-sidecar.repl-api :as repl]))

(def nrepl-options
  {:nrepl-port       7891
   :nrepl-middleware ["cider.nrepl/cider-middleware"
                      "cemerick.piggieback/wrap-cljs-repl"]})

(def figwheel-options
  {:figwheel-options (merge nrepl-options {:css-dirs ["resources/public/css"]
                                           :server-port 3777
                                           :server-ip   "0.0.0.0"})
   :all-builds       [{:id "ui" 
                       :source-paths ["src" "../src"]
                       :compiler
                       {:main "ui.dev"
                        :asset-path "/js/out"
                        :output-to "resources/public/js/ui.js"
                        :output-dir "resources/public/js/out"
                        :source-map true
                        :optimizations :none
                        :pretty-print  true}}]})

(def ensure-nrepl-port! #(spit ".nrepl-port" (:nrepl-port nrepl-options)))

(defn start []
  (ensure-nrepl-port!)
  (repl/start-figwheel! figwheel-options)
  (repl/cljs-repl))

(comment
  (start)
  
  )

