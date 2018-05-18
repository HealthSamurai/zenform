(ns zenform.util
  (:require [clojure.string :as s]
            #?(:cljs [goog.string :as gstring])
            #?(:cljs [goog.string.format])))

#?(:cljs (def format gstring/format))

(defn error!
  ([msg]
   (throw #?(:clj (Exception. msg)
             :cljs (js/Error. msg))))
  ([tpl & args]
   (error! (apply format tpl args))))

(defmacro with-catch
  [& body]
  `(try
     ~@body
     (catch #?(:clj Exception
               :cljs js/Error) e#)))
