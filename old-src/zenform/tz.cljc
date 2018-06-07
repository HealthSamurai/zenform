(ns zenform.tz
  #?(:clj (:refer-clojure :exclude [format]))
  (:require [zenform.calendar :as cal]
            [clojure.string :as str]))

;; Rule  US   1967 2006  -   Oct lastSun  2:00  0    S
;; Rule  US   1967 1973  -   Apr lastSun  2:00  1:00 D
;; Rule  US   1974 only  -   Jan 6        2:00  1:00 D
;; Rule  US   1975 only  -   Feb 23       2:00  1:00 D
;; Rule  US   1976 1986  -   Apr lastSun  2:00  1:00 D
;; Rule  US   1987 2006  -   Apr Sun>=1   2:00  1:00 D
;; Rule  US   2007 max   -   Mar Sun>=8   2:00  1:00 D
;; Rule  US   2007 max   -   Nov Sun>=1   2:00  0    S

;; Zone America/New_York
;; -5:00	US	E%sT	1920
;; -5:00	NYC	E%sT	1942
;; -5:00	US	E%sT	1946
;; -5:00	NYC	E%sT	1967
;; -5:00	US	E%sT


;; rules from tzdb like sun >= 8
(defn *more-or-eq [y m dw d]
  (let [dw' (cal/day-of-week y m d)]
    (cond (= dw' dw) d
          ;; if wed vs sun
          (> dw' dw) (+ d (- 7 dw') dw)
          (< dw' dw) (+ d (- dw dw')))))

(def more-or-eq (memoize *more-or-eq))

(def iso-fmt [:y "-" :m "-" :d "T" :hh ":" :mi ":" :s "." :ms])
(defn from-utc [t tz])


(defn parse-int [x]
  (when (string? x)
    #?(:clj (Integer/parseInt x)
       :cljs (js/parseInt  x))))


;; iso is default
(defn parse [s & [fmt]]
  (let [[y m d h mi s ms] (str/split s #"[- T:.]")]
    (reduce (fn [acc [k v]]
              (if v (assoc acc k (parse-int v)) acc))
            {}
            {:y y :m m :d d :h h :mi mi :s s :ms ms})))

(defn gen-norm [k k-next del m]
  (fn [x]
    (if-let [z (get x k)]
      (let [ds (int (/ z del))
            s  (or (get x k-next) m)
            r  (rem z del)]
        (if (>= z m)
          (assoc x k r k-next (+ s ds))
          (assoc x k (+ del r) k-next (+ s ds -1))))
      x)))

(def normalize-ms (gen-norm :ms :s 1000 0))
(def normalize-s  (gen-norm :s :mi 60 0))
(def normalize-mi (gen-norm :mi :h 60 0))
(def normalize-h  (gen-norm :h :d 24 0))
(def normalize-m  (gen-norm :m :y 12 1))

(defn days-and-months [y m d]
  (if (<= 1 d 27)
    [y m d]
    (cond
      (> d 0)
      (let [num-days (cal/number-of-days y m)
            dd (- d num-days)]
        (if (<= d num-days)
          [y m d]
          (if (= m 12)
            (days-and-months (inc y) 1 dd)
            (days-and-months y (inc m) dd))))

      (<= d 0)
      (let [[num-days ny nm] (if (= m 1)
                               [(cal/number-of-days (dec y) 12) (dec y) 12]
                               [(cal/number-of-days y (dec m)) y (dec m)])
            dd (+ num-days d)]
        (if (< 0 dd)
          [ny nm dd]
          (days-and-months ny nm dd))))))

(defn normalize-d  [x]
  (if (and (:y x) (:m x) (:d x))
    (let [[y m d] (days-and-months (:y x) (:m x) (:d x))]
      (assoc x :y y :m m :d d))
    x))

(defn init-plus [r i]
  (->>
   (concat (keys (dissoc r :tz)) (keys i))
   (into #{})
   (reduce (fn [acc k] (assoc acc k (+ (get r k 0) (get i k 0)))) {})))

(defn plus
  "time & interval"
  [t i]
  (-> (init-plus t i)
      (normalize-ms)
      (normalize-s)
      (normalize-mi)
      (normalize-h)
      (normalize-m)
      (normalize-d)))

(defmulti day-saving "[tz y]" (fn [tz _] tz))

(defmethod day-saving
  :ny
  [_ y]
  (assert (> y 2006) "Not impl.")
  {:offset 5
   :ds -1
   :in {:y y :m 3 :d (more-or-eq y 3 0 8) :h 2 :mi 0}
   :out {:y y :m 11 :d (more-or-eq y 11 0 1) :h 2 :mi 0}})

(defn *day-saving-with-utc [tz y]
  (let [ds (day-saving tz y)]
    (assoc ds
           :in-utc (plus (:in ds) {:h (:offset ds)})
           :out-utc (plus (:out ds) {:h (+ (:offset ds) (:ds ds))}))))

(def day-saving-with-utc (memoize *day-saving-with-utc))

(def default-time {:y 0 :m 1 :d 1 :h 0 :mi 0 :s 0})

(def defaults-units  [[:y 0] [:m 1] [:d 1] [:h 0] [:mi 0] [:s 0]])

(defn after? [t t']
  (loop [[[p s] & ps] defaults-units]
    (let [tp (get t p s) tp' (get t' p s)]
      (cond
        (> tp tp') true
        (= tp tp') (and (not (empty? ps)) (recur ps))
        :else false))))


(defn eq? [t t']
  (let [t (merge default-time t)
        t' (merge default-time t')]
    (and
     (= (:y t) (:y t'))
     (= (:m t) (:m t'))
     (= (:d t) (:d t'))
     (= (:h t) (:h t'))
     (= (:mi t) (:mi t'))
     (= (:s t) (:s t')))))

(defn before=? [t t']
  (not (after? t t')))

(defn to-utc [t]
  (let [ds (day-saving-with-utc (:tz t) (:y t))
        off (if (or (before=? t (:in ds)) (after? t (:out ds)))
              (:offset ds)
              (+ (:offset ds) (:ds ds)))]
    (plus (dissoc t :tz) {:h off})))

(defn to-tz [t tz]
  (let [ds (day-saving-with-utc tz (:y t))
        off (if (or (before=? t (:in-utc ds)) (after? t (:out-utc ds)))
              (:offset ds)
              (+ (:offset ds) (:ds ds)))]
    (assoc (plus t {:h (- off)}) :tz tz)))

;; iso is default
(defn format [t & [fmt-vec]]
  (str/join "" (mapv (fn [x] (if (keyword? x) (get t x) x)) fmt-vec)))
