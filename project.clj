(defproject zenform "0.1.0-SNAPSHOT"
  :description "A library used in Health Samurai to handle form pipeline"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[re-frame "0.10.5"]
                 [day8.re-frame/http-fx "0.1.6"]
                 [cljs-ajax "0.7.3"]
                 [com.andrewmcveigh/cljs-time "0.5.2"]
                 [garden "1.3.5"]
                 [cljsjs/moment-timezone "0.5.11-1"]]

  :main ^:skip-aot zenform.core

  :min-lein-version "2.5.0"

  :target-path "target/%s"

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.15"]
            [cider/cider-nrepl "0.17.0-SNAPSHOT"]]

  :profiles {:dev {:dependencies [[org.clojure/clojure "1.9.0"]
                                  [re-frisk "0.5.3"]
                                  [figwheel-sidecar "0.5.15"]
                                  [com.cemerick/piggieback "0.2.1"]
                                  [org.clojure/clojurescript "1.9.946"]
                                  [org.clojure/tools.nrepl "0.2.13"]]}}

  :cljsbuild
  {:builds [{:id "dev"
             :source-paths ["src/cljs"]
             :figwheel true
             :compiler {:main zenform.core
                        :preloads [re-frisk.preload]
                        :optimizations :none
                        :asset-path "/js/out"
                        :output-to "resources/public/js/zenform.js"
                        :output-dir "resources/public/js/out"
                        :source-map true
                        :pretty-print true}}]})
