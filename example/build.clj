(require '[cljs.build.api :as api]
         '[clojure.string :as string])

(def source-dir "src")

(def compiler-config
  {:main          'ui.prod
   :output-to     "build/js/ui.js"
   :source-map    "build/js/ui.js.map"
   :output-dir    "build/js/out"
   :optimizations :advanced})

(def dev-config
  (merge compiler-config
         {:optimizations :none
          :source-map    true}))

(defmulti task first)

(defmethod task :default [_]
  (task ["build"]))

(defmethod task "build" [_]
  (api/build source-dir compiler-config))

(task *command-line-args*)
