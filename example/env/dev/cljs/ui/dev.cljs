(ns ^:figwheel-no-load ui.dev
  (:require [ui.core :as core]
            [figwheel.client :as figwheel :include-macros true]
            [re-frisk.core :refer [enable-re-frisk!]]
            [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(figwheel/watch-and-reload
  :websocket-url "ws://localhost:3002/figwheel-ws"
  :jsload-callback core/mount-root)

(enable-re-frisk!)
(core/init!)
