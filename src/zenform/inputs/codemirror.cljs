(ns zenform.inputs.codemirror
  (:require [re-frame.core :as rf]
            [reagent.core :as r]))

(def Doc (when (exists? js/CodeMirror)
           (.-Doc js/CodeMirror)))

(defn codemirror
  ([node]
   (js/CodeMirror. node))
  ([node config]
   (js/CodeMirror. node (clj->js config))))


(defn fromTextArea
  ([textarea]
   (.fromTextArea js/CodeMirror textarea))
  ([textarea config]
   (.fromTextArea js/CodeMirror textarea (clj->js config))))

                                        ; Functions on top of editor instance

                                        ; Content manipulation methods
(defn get-value
  ([editor] (.getValue editor))
  ([editor sep] (.getValue editor sep)))

(defn set-value
  [editor value] (.setValue editor value))


(defn get-range
  ([editor from to]
   (.getRange editor (clj->js from) (clj->js to)))
  ([editor from to sep]
   (.getRange editor (clj->js from) (clj->js to) sep)))


(defn replace-range
  ([editor string from]
   (.replaceRange editor string (clj->js from)))
  ([editor string from to]
   (.replaceRange editor string (clj->js from) (clj->js to))))

(defn get-line
  [editor n]
  (.getLine editor n))

(defn set-line
  [editor n text]
  (.setLine editor n text))

(defn remove-line
  [editor n]
  (.removeLine editor n))

(defn line-count
  [editor]
  (.lineCount editor))

(defn first-line
  [editor]
  (.firstLine editor))

(defn last-line
  [editor]
  (.lastLine editor))

(defn get-line-handle
  [editor n]
  (.getLineHandle editor n))

(defn get-line-number
  [editor handle]
  (.getLineNumber editor handle))

(defn each-line
  ([editor function]
   (.eachLine editor function))
  ([editor start end function]
   (.eachLine editor start end function)))

(defn mark-clean
  [editor]
  (.markClean editor))

(defn change-generation
  [editor]
  (.changeGeneration editor))

(defn is-clean
  [editor]
  (.isClean editor))


                                        ; Cursor and selection methods
(defn get-selection
  [editor]
  (.getSelection editor))

                                        ; -
(defn replace-selection
  [editor replacement]
  (.replaceSelection editor replacement))

                                        ; - make it return a cljs obj
(defn get-cursor
  [editor]
  (.getCursor editor))

(defn something-selected
  [editor]
  (.somethingSelected editor))

(defn set-cursor
  [editor pos]
  (.setCursor editor (clj->js pos)))

                                        ; -
(defn set-selection
  [editor anchor]
  (.setSelection editor (clj->js anchor)))

                                        ; -
(defn extend-selection
  [editor from]
  (.extendSelection editor (clj->js from)))

(defn set-extending
  [editor value]
  (.setExtending editor value))

(defn has-focus
  [editor]
  (.hasFocus editor))

(defn find-pos-h
  [])

(defn find-pos-v
  [])


                                        ; Configuration methods

(defn set-option
  [editor option value]
  (.setOption editor option value))

(defn get-option
  [editor option]
  (.getOption editor option))

(defn add-key-map
  [])

(defn remove-key-map
  [])

(defn add-overlay
  [])

(defn remove-overlay
  [])

(defn on
  [])

(defn off
  [])



                                        ; Document management methods

(defn get-doc
  [editor]
  (.getDoc editor))

(defn get-editor
  [doc]
  (.getEditor doc))

(defn swap-doc
  [editor doc]
  (.swapDoc editor doc))

(defn copy
  [doc]
  (.copy doc))

(defn linked-doc
  [])

(defn unlink-doc
  [])

(defn iter-linked-docs
  [])


                                        ; History related methods
(defn undo
  [editor]
  (.undo editor))

(defn redo
  [editor]
  (.redo editor))

(defn history-size
  [editor]
  (.historySize editor))

(defn clear-history
  [editor]
  (.clearHistory editor))

(defn get-history
  [editor]
  (.getHistory editor))

(defn set-history
  [])

                                        ; Text marking methods

(defn mark-text [editor from to options]
  (.markText editor
             (clj->js from)
             (clj->js to)
             (clj->js options)))

(defn set-bookmard [])

(defn find-marks-at [])

(defn get-all-marks [])

(def cm-modes
  {:sql "text/x-sql"
   :json "application/json" })

(def default-cm-options
  {:lineNumbers true
   :height "auto"
   :mode "application/json"
   :lint true
   :matchBrackets true
   :viewportMargin js/Infinity})


(defn input [form-path path & [attrs]]
  (let [node (rf/subscribe [:zf/node form-path path])
        value (rf/subscribe [:zf/get-value form-path path])
        cm (atom nil)
        st (atom attrs)
        cm-opts (merge default-cm-options attrs)
        ;; attrs (assoc attrs :on-change #(rf/dispatch [:zf/set-value form-path path (.. % -target -value)]))
        ]
    (r/create-class
     {:reagent-render (fn [form-path path & [attrs]]
                        (reset! st attrs)
                        @value ;; This code is needed to update textarea value on db update
                        [:div.zen-codemirror])

      :component-did-mount
      (fn [this]
        (let [*cm (codemirror (r/dom-node this) cm-opts)
              sv (aget *cm "setValue")
              gv (aget *cm "getValue")
              on (aget *cm "on")]
          (reset! cm *cm)
          (.call sv *cm (.toString (or @value (get cm-opts "value") "")))
          ;; (.setValue *cm (.toString (or @value "")))
          (.call on *cm "change"
                 (fn [& _] (rf/dispatch-sync [:zf/set-value form-path path (.call gv *cm)])))))

      :component-did-update
      (fn [this [_ old-props]]
        (let [*cm @cm]
          ;;(println @st)
          (when-not (= (or @value "") (.call (aget *cm "getValue") *cm))
            (.setOption @cm "value" (or @value "")))
          (doseq [[k v] @st]
            (if (not= k "extraKeys")
              (.setOption @cm k v)))
          ))})))
