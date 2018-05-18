POC
===================

[Live demo](https://storage.googleapis.com/tecv-poc/index.html)



## How to setup dev environment

Install [Leiningen](https://leiningen.org/)

 ``` bash
 lein repl
 > (start-fw)
 ```

Open localhost:3000

## Routing

## Styles

We use bootstrap-4 with [Garden](https://github.com/noprompt/garden) for local styles (just in components).

```cljs

(defn component []
 [:div.component-class
  (styles/style [:.compoent-class {:border-bottom "1px solid #ddd"
                                   :padding-bottom 0}
                [:nested-tags {:border-bottom "3px solid transparent"}
                    [:&.active {:border-color "#555"}]]])
        ....
    ])

```


## Forms

TODO: form builder and validation


## Now to add new page

* create directory with core.cljs - for example ui/patients/core.cljs
* define page components in core.cljs and register under some key with
  (ui.pages/reg-page :page-key component-function)
* require page namespace in ui.core.cljs
* put routing to pages in ui.routes.cljs `"path" {[:param] {:. :page-key}}`
  => this page will be accessible by "/path/[param]"

If you page is huge, you could split it into re-frame modules like
/page/events.cljs, page/view.cljs etc (see https://github.com/Day8/re-frame/wiki/A-Larger-App)


## Project Layout

* frames - re-usable re-frame modules
* re_form - form builder for re-frame
* ui
 * core.cljs - main entry point
 * db.cljs - common database subscriptions (may be schema documentation later using clojure.spec)
 * routes.cljs - routing is defined here
 * pages.cljs - register of pages symbolic map to components
 * layout.cljs - layouts
 * [page-name]/core.cljs - specific page, like patients etc


## Production Build


```sh
lein with-profile prod cljsbuild once ui

cp resources/public/index.html build/

ls -R build
```

## Deploy

Deploy is automatically build and deplpoy app to S3 bucket from [Circle CI](https://circleci.com)
Deploy config file located in .circleci/config.yml.
Also, you can install [CircleCi CLI](https://github.com/circle-cli/circle-cli) for validating  config.yml file and  test deploy locally

```sh
circleci config validate
circleci build
```


