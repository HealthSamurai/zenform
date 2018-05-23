(defproject zenform "0.1.0-SNAPSHOT"
  :description "A library used in Health Samurai to handle form pipeline"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[re-frame "0.10.5"]
                 [garden "1.3.5"]]

  :min-lein-version "2.5.0"

  :target-path "target/%s"

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.15"]]

  :profiles {:dev {:dependencies [[org.clojure/clojure "1.9.0"]
                                  [org.clojure/clojurescript "1.10.238"]
                                  [re-frisk "0.5.3"]
                                  [matcho "0.1.0-RC6"]
                                  [figwheel-sidecar "0.5.15"]
                                  [com.cemerick/piggieback "0.2.1"]
                                  [org.clojure/tools.nrepl "0.2.13"]]}}

  :cljsbuild
  {:builds [{:id "demo"
             :source-paths ["src"]
             :figwheel true
             :compiler {:main zenform.demo
                        :preloads [re-frisk.preload]
                        :optimizations :none
                        :asset-path "/js/out"
                        :output-to "resources/public/js/demo.js"
                        :output-dir "resources/public/js/out"
                        :source-map true
                        :pretty-print true}}]})
