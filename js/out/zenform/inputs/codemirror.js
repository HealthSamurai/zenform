// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('zenform.inputs.codemirror');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('reagent.core');
zenform.inputs.codemirror.Doc = ((typeof CodeMirror !== 'undefined')?CodeMirror.Doc:null);
zenform.inputs.codemirror.codemirror = (function zenform$inputs$codemirror$codemirror(var_args){
var G__30185 = arguments.length;
switch (G__30185) {
case 1:
return zenform.inputs.codemirror.codemirror.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return zenform.inputs.codemirror.codemirror.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zenform.inputs.codemirror.codemirror.cljs$core$IFn$_invoke$arity$1 = (function (node){
return (new CodeMirror(node));
});

zenform.inputs.codemirror.codemirror.cljs$core$IFn$_invoke$arity$2 = (function (node,config){
return (new CodeMirror(node,cljs.core.clj__GT_js(config)));
});

zenform.inputs.codemirror.codemirror.cljs$lang$maxFixedArity = 2;

zenform.inputs.codemirror.fromTextArea = (function zenform$inputs$codemirror$fromTextArea(var_args){
var G__30188 = arguments.length;
switch (G__30188) {
case 1:
return zenform.inputs.codemirror.fromTextArea.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return zenform.inputs.codemirror.fromTextArea.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zenform.inputs.codemirror.fromTextArea.cljs$core$IFn$_invoke$arity$1 = (function (textarea){
return CodeMirror.fromTextArea(textarea);
});

zenform.inputs.codemirror.fromTextArea.cljs$core$IFn$_invoke$arity$2 = (function (textarea,config){
return CodeMirror.fromTextArea(textarea,cljs.core.clj__GT_js(config));
});

zenform.inputs.codemirror.fromTextArea.cljs$lang$maxFixedArity = 2;

zenform.inputs.codemirror.get_value = (function zenform$inputs$codemirror$get_value(var_args){
var G__30191 = arguments.length;
switch (G__30191) {
case 1:
return zenform.inputs.codemirror.get_value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return zenform.inputs.codemirror.get_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zenform.inputs.codemirror.get_value.cljs$core$IFn$_invoke$arity$1 = (function (editor){
return editor.getValue();
});

zenform.inputs.codemirror.get_value.cljs$core$IFn$_invoke$arity$2 = (function (editor,sep){
return editor.getValue(sep);
});

zenform.inputs.codemirror.get_value.cljs$lang$maxFixedArity = 2;

zenform.inputs.codemirror.set_value = (function zenform$inputs$codemirror$set_value(editor,value){
return editor.setValue(value);
});
zenform.inputs.codemirror.get_range = (function zenform$inputs$codemirror$get_range(var_args){
var G__30194 = arguments.length;
switch (G__30194) {
case 3:
return zenform.inputs.codemirror.get_range.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return zenform.inputs.codemirror.get_range.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zenform.inputs.codemirror.get_range.cljs$core$IFn$_invoke$arity$3 = (function (editor,from,to){
return editor.getRange(cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to));
});

zenform.inputs.codemirror.get_range.cljs$core$IFn$_invoke$arity$4 = (function (editor,from,to,sep){
return editor.getRange(cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),sep);
});

zenform.inputs.codemirror.get_range.cljs$lang$maxFixedArity = 4;

zenform.inputs.codemirror.replace_range = (function zenform$inputs$codemirror$replace_range(var_args){
var G__30197 = arguments.length;
switch (G__30197) {
case 3:
return zenform.inputs.codemirror.replace_range.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return zenform.inputs.codemirror.replace_range.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zenform.inputs.codemirror.replace_range.cljs$core$IFn$_invoke$arity$3 = (function (editor,string,from){
return editor.replaceRange(string,cljs.core.clj__GT_js(from));
});

zenform.inputs.codemirror.replace_range.cljs$core$IFn$_invoke$arity$4 = (function (editor,string,from,to){
return editor.replaceRange(string,cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to));
});

zenform.inputs.codemirror.replace_range.cljs$lang$maxFixedArity = 4;

zenform.inputs.codemirror.get_line = (function zenform$inputs$codemirror$get_line(editor,n){
return editor.getLine(n);
});
zenform.inputs.codemirror.set_line = (function zenform$inputs$codemirror$set_line(editor,n,text){
return editor.setLine(n,text);
});
zenform.inputs.codemirror.remove_line = (function zenform$inputs$codemirror$remove_line(editor,n){
return editor.removeLine(n);
});
zenform.inputs.codemirror.line_count = (function zenform$inputs$codemirror$line_count(editor){
return editor.lineCount();
});
zenform.inputs.codemirror.first_line = (function zenform$inputs$codemirror$first_line(editor){
return editor.firstLine();
});
zenform.inputs.codemirror.last_line = (function zenform$inputs$codemirror$last_line(editor){
return editor.lastLine();
});
zenform.inputs.codemirror.get_line_handle = (function zenform$inputs$codemirror$get_line_handle(editor,n){
return editor.getLineHandle(n);
});
zenform.inputs.codemirror.get_line_number = (function zenform$inputs$codemirror$get_line_number(editor,handle){
return editor.getLineNumber(handle);
});
zenform.inputs.codemirror.each_line = (function zenform$inputs$codemirror$each_line(var_args){
var G__30200 = arguments.length;
switch (G__30200) {
case 2:
return zenform.inputs.codemirror.each_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return zenform.inputs.codemirror.each_line.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zenform.inputs.codemirror.each_line.cljs$core$IFn$_invoke$arity$2 = (function (editor,function$){
return editor.eachLine(function$);
});

zenform.inputs.codemirror.each_line.cljs$core$IFn$_invoke$arity$4 = (function (editor,start,end,function$){
return editor.eachLine(start,end,function$);
});

zenform.inputs.codemirror.each_line.cljs$lang$maxFixedArity = 4;

zenform.inputs.codemirror.mark_clean = (function zenform$inputs$codemirror$mark_clean(editor){
return editor.markClean();
});
zenform.inputs.codemirror.change_generation = (function zenform$inputs$codemirror$change_generation(editor){
return editor.changeGeneration();
});
zenform.inputs.codemirror.is_clean = (function zenform$inputs$codemirror$is_clean(editor){
return editor.isClean();
});
zenform.inputs.codemirror.get_selection = (function zenform$inputs$codemirror$get_selection(editor){
return editor.getSelection();
});
zenform.inputs.codemirror.replace_selection = (function zenform$inputs$codemirror$replace_selection(editor,replacement){
return editor.replaceSelection(replacement);
});
zenform.inputs.codemirror.get_cursor = (function zenform$inputs$codemirror$get_cursor(editor){
return editor.getCursor();
});
zenform.inputs.codemirror.something_selected = (function zenform$inputs$codemirror$something_selected(editor){
return editor.somethingSelected();
});
zenform.inputs.codemirror.set_cursor = (function zenform$inputs$codemirror$set_cursor(editor,pos){
return editor.setCursor(cljs.core.clj__GT_js(pos));
});
zenform.inputs.codemirror.set_selection = (function zenform$inputs$codemirror$set_selection(editor,anchor){
return editor.setSelection(cljs.core.clj__GT_js(anchor));
});
zenform.inputs.codemirror.extend_selection = (function zenform$inputs$codemirror$extend_selection(editor,from){
return editor.extendSelection(cljs.core.clj__GT_js(from));
});
zenform.inputs.codemirror.set_extending = (function zenform$inputs$codemirror$set_extending(editor,value){
return editor.setExtending(value);
});
zenform.inputs.codemirror.has_focus = (function zenform$inputs$codemirror$has_focus(editor){
return editor.hasFocus();
});
zenform.inputs.codemirror.find_pos_h = (function zenform$inputs$codemirror$find_pos_h(){
return null;
});
zenform.inputs.codemirror.find_pos_v = (function zenform$inputs$codemirror$find_pos_v(){
return null;
});
zenform.inputs.codemirror.set_option = (function zenform$inputs$codemirror$set_option(editor,option,value){
return editor.setOption(option,value);
});
zenform.inputs.codemirror.get_option = (function zenform$inputs$codemirror$get_option(editor,option){
return editor.getOption(option);
});
zenform.inputs.codemirror.add_key_map = (function zenform$inputs$codemirror$add_key_map(){
return null;
});
zenform.inputs.codemirror.remove_key_map = (function zenform$inputs$codemirror$remove_key_map(){
return null;
});
zenform.inputs.codemirror.add_overlay = (function zenform$inputs$codemirror$add_overlay(){
return null;
});
zenform.inputs.codemirror.remove_overlay = (function zenform$inputs$codemirror$remove_overlay(){
return null;
});
zenform.inputs.codemirror.on = (function zenform$inputs$codemirror$on(){
return null;
});
zenform.inputs.codemirror.off = (function zenform$inputs$codemirror$off(){
return null;
});
zenform.inputs.codemirror.get_doc = (function zenform$inputs$codemirror$get_doc(editor){
return editor.getDoc();
});
zenform.inputs.codemirror.get_editor = (function zenform$inputs$codemirror$get_editor(doc){
return doc.getEditor();
});
zenform.inputs.codemirror.swap_doc = (function zenform$inputs$codemirror$swap_doc(editor,doc){
return editor.swapDoc(doc);
});
zenform.inputs.codemirror.copy = (function zenform$inputs$codemirror$copy(doc){
return doc.copy();
});
zenform.inputs.codemirror.linked_doc = (function zenform$inputs$codemirror$linked_doc(){
return null;
});
zenform.inputs.codemirror.unlink_doc = (function zenform$inputs$codemirror$unlink_doc(){
return null;
});
zenform.inputs.codemirror.iter_linked_docs = (function zenform$inputs$codemirror$iter_linked_docs(){
return null;
});
zenform.inputs.codemirror.undo = (function zenform$inputs$codemirror$undo(editor){
return editor.undo();
});
zenform.inputs.codemirror.redo = (function zenform$inputs$codemirror$redo(editor){
return editor.redo();
});
zenform.inputs.codemirror.history_size = (function zenform$inputs$codemirror$history_size(editor){
return editor.historySize();
});
zenform.inputs.codemirror.clear_history = (function zenform$inputs$codemirror$clear_history(editor){
return editor.clearHistory();
});
zenform.inputs.codemirror.get_history = (function zenform$inputs$codemirror$get_history(editor){
return editor.getHistory();
});
zenform.inputs.codemirror.set_history = (function zenform$inputs$codemirror$set_history(){
return null;
});
zenform.inputs.codemirror.mark_text = (function zenform$inputs$codemirror$mark_text(editor,from,to,options){
return editor.markText(cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(options));
});
zenform.inputs.codemirror.set_bookmard = (function zenform$inputs$codemirror$set_bookmard(){
return null;
});
zenform.inputs.codemirror.find_marks_at = (function zenform$inputs$codemirror$find_marks_at(){
return null;
});
zenform.inputs.codemirror.get_all_marks = (function zenform$inputs$codemirror$get_all_marks(){
return null;
});
zenform.inputs.codemirror.cm_modes = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sql,"text/x-sql",cljs.core.cst$kw$json,"application/json"], null);
zenform.inputs.codemirror.default_cm_options = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$lineNumbers,true,cljs.core.cst$kw$height,"auto",cljs.core.cst$kw$mode,"application/json",cljs.core.cst$kw$lint,true,cljs.core.cst$kw$matchBrackets,true,cljs.core.cst$kw$viewportMargin,Infinity], null);
zenform.inputs.codemirror.input = (function zenform$inputs$codemirror$input(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30230 = arguments.length;
var i__4500__auto___30231 = (0);
while(true){
if((i__4500__auto___30231 < len__4499__auto___30230)){
args__4502__auto__.push((arguments[i__4500__auto___30231]));

var G__30232 = (i__4500__auto___30231 + (1));
i__4500__auto___30231 = G__30232;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return zenform.inputs.codemirror.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

zenform.inputs.codemirror.input.cljs$core$IFn$_invoke$arity$variadic = (function (form_path,path,p__30205){
var vec__30206 = p__30205;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30206,(0),null);
var node = (function (){var G__30209 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_node,form_path,path], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30209) : re_frame.core.subscribe.call(null,G__30209));
})();
var value = (function (){var G__30210 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_get_DASH_value,form_path,path], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30210) : re_frame.core.subscribe.call(null,G__30210));
})();
var cm = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var st = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(attrs);
var cm_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zenform.inputs.codemirror.default_cm_options,attrs], 0));
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$reagent_DASH_render,((function (node,value,cm,st,cm_opts,vec__30206,attrs){
return (function() { 
var G__30233__delegate = function (form_path__$1,path__$1,p__30211){
var vec__30212 = p__30211;
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30212,(0),null);
cljs.core.reset_BANG_(st,attrs__$1);

cljs.core.deref(value);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zen_DASH_codemirror], null);
};
var G__30233 = function (form_path__$1,path__$1,var_args){
var p__30211 = null;
if (arguments.length > 2) {
var G__30234__i = 0, G__30234__a = new Array(arguments.length -  2);
while (G__30234__i < G__30234__a.length) {G__30234__a[G__30234__i] = arguments[G__30234__i + 2]; ++G__30234__i;}
  p__30211 = new cljs.core.IndexedSeq(G__30234__a,0,null);
} 
return G__30233__delegate.call(this,form_path__$1,path__$1,p__30211);};
G__30233.cljs$lang$maxFixedArity = 2;
G__30233.cljs$lang$applyTo = (function (arglist__30235){
var form_path__$1 = cljs.core.first(arglist__30235);
arglist__30235 = cljs.core.next(arglist__30235);
var path__$1 = cljs.core.first(arglist__30235);
var p__30211 = cljs.core.rest(arglist__30235);
return G__30233__delegate(form_path__$1,path__$1,p__30211);
});
G__30233.cljs$core$IFn$_invoke$arity$variadic = G__30233__delegate;
return G__30233;
})()
;})(node,value,cm,st,cm_opts,vec__30206,attrs))
,cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (node,value,cm,st,cm_opts,vec__30206,attrs){
return (function (this$){
var _STAR_cm = zenform.inputs.codemirror.codemirror.cljs$core$IFn$_invoke$arity$2(reagent.core.dom_node(this$),cm_opts);
var sv = (_STAR_cm["setValue"]);
var gv = (_STAR_cm["getValue"]);
var on = (_STAR_cm["on"]);
cljs.core.reset_BANG_(cm,_STAR_cm);

sv.call(_STAR_cm,(function (){var or__3922__auto__ = cljs.core.deref(value);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cm_opts,"value");
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return "";
}
}
})().toString());

return on.call(_STAR_cm,"change",((function (_STAR_cm,sv,gv,on,node,value,cm,st,cm_opts,vec__30206,attrs){
return (function() { 
var G__30236__delegate = function (_){
var G__30215 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_set_DASH_value,form_path,path,gv.call(_STAR_cm)], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__30215) : re_frame.core.dispatch_sync.call(null,G__30215));
};
var G__30236 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__30237__i = 0, G__30237__a = new Array(arguments.length -  0);
while (G__30237__i < G__30237__a.length) {G__30237__a[G__30237__i] = arguments[G__30237__i + 0]; ++G__30237__i;}
  _ = new cljs.core.IndexedSeq(G__30237__a,0,null);
} 
return G__30236__delegate.call(this,_);};
G__30236.cljs$lang$maxFixedArity = 0;
G__30236.cljs$lang$applyTo = (function (arglist__30238){
var _ = cljs.core.seq(arglist__30238);
return G__30236__delegate(_);
});
G__30236.cljs$core$IFn$_invoke$arity$variadic = G__30236__delegate;
return G__30236;
})()
;})(_STAR_cm,sv,gv,on,node,value,cm,st,cm_opts,vec__30206,attrs))
);
});})(node,value,cm,st,cm_opts,vec__30206,attrs))
,cljs.core.cst$kw$component_DASH_did_DASH_update,((function (node,value,cm,st,cm_opts,vec__30206,attrs){
return (function (this$,p__30216){
var vec__30217 = p__30216;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30217,(0),null);
var old_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30217,(1),null);
var _STAR_cm = cljs.core.deref(cm);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(value),(_STAR_cm["getValue"]).call(_STAR_cm))){
} else {
cljs.core.deref(cm).setOption("value",cljs.core.deref(value));
}

var seq__30220 = cljs.core.seq(cljs.core.deref(st));
var chunk__30221 = null;
var count__30222 = (0);
var i__30223 = (0);
while(true){
if((i__30223 < count__30222)){
var vec__30224 = chunk__30221.cljs$core$IIndexed$_nth$arity$2(null,i__30223);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30224,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30224,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,"extraKeys")){
cljs.core.deref(cm).setOption(k,v);
} else {
}


var G__30239 = seq__30220;
var G__30240 = chunk__30221;
var G__30241 = count__30222;
var G__30242 = (i__30223 + (1));
seq__30220 = G__30239;
chunk__30221 = G__30240;
count__30222 = G__30241;
i__30223 = G__30242;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__30220);
if(temp__5535__auto__){
var seq__30220__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30220__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__30220__$1);
var G__30243 = cljs.core.chunk_rest(seq__30220__$1);
var G__30244 = c__4319__auto__;
var G__30245 = cljs.core.count(c__4319__auto__);
var G__30246 = (0);
seq__30220 = G__30243;
chunk__30221 = G__30244;
count__30222 = G__30245;
i__30223 = G__30246;
continue;
} else {
var vec__30227 = cljs.core.first(seq__30220__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30227,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30227,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,"extraKeys")){
cljs.core.deref(cm).setOption(k,v);
} else {
}


var G__30247 = cljs.core.next(seq__30220__$1);
var G__30248 = null;
var G__30249 = (0);
var G__30250 = (0);
seq__30220 = G__30247;
chunk__30221 = G__30248;
count__30222 = G__30249;
i__30223 = G__30250;
continue;
}
} else {
return null;
}
}
break;
}
});})(node,value,cm,st,cm_opts,vec__30206,attrs))
], null));
});

zenform.inputs.codemirror.input.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
zenform.inputs.codemirror.input.cljs$lang$applyTo = (function (seq30202){
var G__30203 = cljs.core.first(seq30202);
var seq30202__$1 = cljs.core.next(seq30202);
var G__30204 = cljs.core.first(seq30202__$1);
var seq30202__$2 = cljs.core.next(seq30202__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30203,G__30204,seq30202__$2);
});

