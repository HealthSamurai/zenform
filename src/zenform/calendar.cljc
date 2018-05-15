(ns zenform.calendar)

(def months
  {0  {:name "January" :days 31}
   1  {:name "February" :days 28 :leap 29}
   2  {:name "March" :days 31}
   3  {:name "April" :days 30}
   4  {:name "May" :days 31}
   5  {:name "June" :days 30}
   6  {:name "July" :days 31}
   7  {:name "August" :days 31}
   8  {:name "September" :days 30}
   9  {:name "October" :days 31}
   10 {:name "November" :days 30}
   11 {:name "December" :days 31}})

(def weeks
  {0 {:name "Sunday"}
   1 {:name "Monday"}
   2 {:name "Tuesday"}
   3 {:name "Wednesday"}
   4 {:name "Thursday"}
   5 {:name "Friday"}
   6 {:name "Saturday"}})

(defn is-leap? [y]
  (if (= 0 (rem y 100))
    (= 0 (rem y 400))
    (= 0 (rem y 4))))

(defn number-of-days [y m]
  (cond
    (contains? #{4 6 9 11} m) 30
    (and (= 2 m) (is-leap? y)) 29
    (= 2 m) 28
    :else 31))

(defn shift-month [y m dir]
  (let [m (+ m (if (= :next dir) 1 -1))]
    (cond
      (< m  1) [(dec y) 12]
      (> m 12) [(inc y) 1]
      :else [y m])))

(defn day-of-week
  "m 1-12; y > 1752"
  [y m d]
  (let [t [nil 0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4]
        y (- y (if (< m 3) 1 0))]
    (rem (+ y
            (int (/ y 4))
            (- (int (/ y 100)))
            (int (/ y 400))
            (nth t m)
            d) 7)))

;; TODO: use memoize
(defn for-month [y m & [{today :today active :active}]]
  (let [start-day (day-of-week y m 1)
        pm-num-days (number-of-days y (dec m))
        pm-last-day {:m (dec m) :d pm-num-days}
        start-cal (if (= 0 start-day)
                    {:m m :d 1}
                    {:m (dec m) :d (inc (- pm-num-days start-day))})
        num-d     (number-of-days y m)]
    {:y y :m m
     :cal (for [r (range 6)]
            (for [wd (range 7)]
              (let [idx (+ (* r 7) wd)
                    d (inc (- idx start-day))
                    cell (cond
                           (< idx start-day)
                           {:y y :m (dec m) :d (+ (:d start-cal) idx)}

                           (> d num-d)
                           {:y y :m (inc m) :d (inc (- idx start-day num-d))}

                           :else
                           {:y y :m m :d d :current true})]
                (if (and (= (:y cell) (:y active))
                         (= (:m cell) (:m active))
                         (= (:d cell) (:d active)))
                  (assoc cell :active true)
                  cell))))}))

(def month-names
  {1  {:name "January" :short "Jan"}
   2  {:name "February" :short "Feb"}
   3  {:name "March" :short "Mar"}
   4  {:name "April" :short "Apr"}
   5  {:name "May" :short "May"}
   6  {:name "June" :short "June"}
   7  {:name "July" :short "July"}
   8  {:name "August" :short "Aug"}
   9  {:name "September" :short "Sep"}
   10 {:name  "October" :short "Oct"}
   11 {:name  "November" :short "Nov"}
   12 {:name  "December" :short "Dec"}})

(defn today []
  #?(:clj (let [d (java.util.Date.)]
            {:y (-> d .getYear (+ 1900))
             :m (-> d .getMonth inc)
             :d (-> d .getDate)}))
  #?(:cljs (let [d (js/Date.)]
             {:y (.getFullYear d)
              :m (inc (.getMonth d))
              :d (.getDate d)})))
