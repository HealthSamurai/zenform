(defproject ui "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.238"]
                 [re-frame "0.10.5"]
                 [garden "1.3.5"]
                 [route-map "0.0.4"]]

  :plugins [[cider/cider-nrepl "0.17.0"]
            [lein-environ "1.1.0"]
            [lein-cljsbuild "1.1.7"]
            [lein-ancient "0.6.10"]]


  :min-lein-version "2.5.0"

  :clean-targets ^{:protect false}
  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :resource-paths ["resources"]

  :figwheel
  {:http-server-root "public"
   :server-port 3002
   :nrepl-port 7005
   :nrepl-middleware ["cemerick.piggieback/wrap-cljs-repl"
                      "cider.nrepl/cider-middleware"]
   :css-dirs ["resources/public/css"]}


  :profiles {:dev {:repl-options {:init-ns ui.repl
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

                   :dependencies [[ring/ring-mock "0.3.0"]
                                  [ring/ring-devel "1.5.1"]

                                  [re-frisk "0.5.3"]
                                  [binaryage/devtools "0.9.2"]
                                  [figwheel-sidecar "0.5.15"]
                                  [org.clojure/tools.nrepl "0.2.13"]
                                  [com.cemerick/piggieback "0.2.2-SNAPSHOT"]
                                  [cider/cider-nrepl "0.15.0"]]

                   :source-paths ["src" "../src" "../test" "env/dev/clj"]
                   :plugins [[lein-figwheel "0.5.15"]]

                   :env {:dev true}

                   :cljsbuild
                   {:builds
                    {:ui {:source-paths ["src"  "env/dev/cljs" "../src"]
                          :compiler
                          {:main "ui.dev"
                           :asset-path "/js/out"
                           :output-to "resources/public/js/ui.js"
                           :output-dir "resources/public/js/out"
                           :source-map true
                           :optimizations :none
                           :pretty-print  true

                           ;; :foreign-libs []

                           ;; :externs []
                           ;; :externs []

                           }}}}}

             :prod {:cljsbuild
                    {:builds
                     {:ui {:source-paths ["src"  "env/prod/cljs" "../src"]
                           :verbose true
                           :compiler
                           {:main "ui.prod"
                            :verbose true
                            :externs ["resources/assets/codemirror-externs.js"]
                            :libs ["https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.30.0/addon/hint/show-hint.js"]
                            :foreign-libs [{:file "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.30.0/codemirror.js"
                                    :provides ["CodeMirror"]}]
                            :output-to "build/js/ui.js"
                            ;; :output-dir "build/js/out"
                            :optimizations :advanced
                            :pretty-print false}}}}}})
