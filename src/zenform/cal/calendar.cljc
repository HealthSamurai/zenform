(ns zenform.cal.calendar
  (:require #?(:clj [clj-time.core :as time]
               :cljs [cljs-time.core :as time])
            #?(:clj [clj-time.periodic :as period]
               :cljs [cljs-time.periodic :as period])
            #?(:clj [clj-time.format :as f]
               :cljs [cljs-time.format :as f])))

(def MON 1)
(def SUN 7)

(defn by-chunks [n seq]
  (partition n n [] seq))

(defn get-grid-start
  [date]
  (let [date-start (time/first-day-of-the-month date)
        week-day (time/day-of-week date-start)]
    (if (= week-day MON)
      date-start
      (time/minus date-start (time/days (dec week-day))))))

(defn get-grid-end
  [date]
  (let [date-end (time/last-day-of-the-month date)
        week-day (time/day-of-week date-end)]
    (if (= week-day SUN)
      date-end
      (time/plus date-end (time/days (- SUN week-day))))))

(defn get-grid [& [date]]
  (let [date (or date (time/now))
        date-start (get-grid-start date)
        date-end (-> date get-grid-end (time/plus (time/seconds 1)))
        step (time/days 1)
        date-seq (period/periodic-seq date-start date-end step)]
    (by-chunks SUN date-seq)))

(defn key-date
  [date]
  (f/unparse (f/formatters :basic-date) date))

(def day time/day)
