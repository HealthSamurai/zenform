// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('ui.calendar_page');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('zenform.core');
goog.require('zenform.model');
goog.require('re_frame.core');
goog.require('ui.routes');
ui.calendar_page.form_path = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user_DASH_form], null);
ui.calendar_page.form_schema = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$form,cljs.core.cst$kw$fields,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$date], null),cljs.core.cst$kw$end,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$date], null)], null)], null);
ui.calendar_page.init_value = cljs.core.PersistentArrayMap.EMPTY;
ui.calendar_page.index = (function ui$calendar_page$index(){
var G__31556_31557 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_init,ui.calendar_page.form_path,ui.calendar_page.form_schema,cljs.core.PersistentArrayMap.EMPTY], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31556_31557) : re_frame.core.dispatch.call(null,G__31556_31557));

return (function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Calendar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.calendar,ui.calendar_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start], null)], null)], null);
});
});
ui.routes.reg_page(cljs.core.cst$kw$calendar,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Calendar",cljs.core.cst$kw$w,(2),cljs.core.cst$kw$cmp,ui.calendar_page.index], null));
