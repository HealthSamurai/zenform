# Zenform


## Basics

```

(def form-schema
  {:type "form"
   :fields {:name {:type :string}
            :age {:type :integer}
            :date {:type :date}}})


(rf/dispatch [:zenform/init form-path schema value])

;; This init in database form-model 

{:form
    {:type "form"
     :fields {:name {:type :string},
              :age  {:type :integer}}
     :value  {:name {:type :string,
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




```


## Form life cycle

data => init 
  => form-model (edit form model using widgets & events) 
     => get-value =>  data

A library used at Health Samurai to handle forms pipeline.

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
