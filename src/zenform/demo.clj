(ns zenform.demo
  (:require [zenform.form :as form]
            [zenform.field :as field]
            [zenform.validators :as val]))

(def f (form/make-form
        [:some :form]
        [(field/integer-field
          [:foo :bar :baz]
          {:validators [(val/range 1 10)]})]))
