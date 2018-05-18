(ns ui.repl
  (:require [figwheel-sidecar.repl-api :as repl]))

(defn start-fw []
  (repl/start-figwheel!)
  (repl/cljs-repl "app"))

(comment
  (start-fw)
  )
