# Zenform

[![Build Status](https://travis-ci.org/HealthSamurai/zenform.svg?branch=master)](https://travis-ci.org/HealthSamurai/zenform)


form is a small application and we have re-frame

view ->[ ev -> db -> sub ] -> view

we want pure part of reframe was tastable 
=> all form logic should belong to ev/db/sub 
  * validation
  * errors
  * etc

## Motivation

re-frame aware form framework with respect to test
and logic/presentation separation

all state in db


## Basics

```

(def form-schema
  {:type "form"
   :fields {:name {:type :string}
            :age  {:type :integer}
            :date {:type :date
                   :validators []}}})


(rf/dispatch [:zenform/init form-path schema value])

;; This init in database form-model 

{:form
    {:type "form"
     :fields {:name {:type :string},
              :age  {:type :integer}}
     :value  {:name {:type :string,
                     :on-change {:event :on-name-change}
                     :path [:form :value :name]
                     :value "Default-name"}
              :age {:type :integer,
                    :path [:form :value :age]
                    :value nil}
              :date {:type :date
                     :path [:form :value :date]
                     :value nil}}}}

[:form
  [zf/input {:form-path [:form] :path [:name]}]
  [zf/input {:form-path [:form] :path [:age]}]]


form-data =f=> form-model =f'=> form-data


```


## Form life cycle

data => init 
  => form-model (edit form model using widgets & events) 
     => get-value =>  data

A library used at Health Samurai to handle forms pipeline.

## Subfoforms

(def address-schema
  {:form
    {:type "form"
     :validators []
     :fields {:name {:type :string},
              :age  {:type :integer}}
     :value  {:city {:type :string,
                     :on-change {:event :on-name-change}
                     :path [:form :value :name]
                     :value "Default-name"}
              :line {:type :collection
                     :validators []
                     :value [
                       {:id 0 :type "string" :value "Line 1"}
                       {:id 1 :type "string" :value "Line 2"}]}
              :address address-schema}}})
              
              (for [it (:value model)]
                [:div
                  [zf/input {:form-path form-path :path [:name]}]])
                  
                  


{:form
    {:type "form"
     :fields {:name {:type :string},
              :age  {:type :integer}}
     :validators []
     :value  {:name {:type :string,
                     :on-change {:event :on-name-change}
                     :path [:form :value :name]
                     :value "Default-name"}
              :age {:type :integer,
                    :path [:form :value :age]
                    :value nil}
              :address address-schema}}}

## Development

```
make repl
```

```
make figwheel
```

```
make server
```

## License

Copyright © 2018 Health Samurai

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
