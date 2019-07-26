// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('ui.index_page');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('zenform.core');
goog.require('re_frame.core');
goog.require('ui.routes');
goog.require('zenform.model');
ui.index_page.form_path = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user_DASH_form], null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ui$index_DASH_page_SLASH_search_DASH_country,(function (p__31622,p__31623){
var map__31624 = p__31622;
var map__31624__$1 = ((((!((map__31624 == null)))?(((((map__31624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31624):map__31624);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31624__$1,cljs.core.cst$kw$db);
var vec__31625 = p__31623;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31625,(0),null);
var map__31628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31625,(1),null);
var map__31628__$1 = ((((!((map__31628 == null)))?(((((map__31628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31628):map__31628);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31628__$1,cljs.core.cst$kw$query);
var items_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31628__$1,cljs.core.cst$kw$items_DASH_path);
var status_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31628__$1,cljs.core.cst$kw$status_DASH_path);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$json_SLASH_fetch,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$uri,"https://npi.health-samurai.io/organization",cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$q,q,cljs.core.cst$kw$_count,(5)], null),cljs.core.cst$kw$success,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$event,cljs.core.cst$kw$ui$index_DASH_page_SLASH_countries_DASH_loaded,cljs.core.cst$kw$items_DASH_path,items_path,cljs.core.cst$kw$status_DASH_path,status_path], null)], null),cljs.core.cst$kw$db,cljs.core.assoc_in(db,status_path,cljs.core.cst$kw$loading)], null);
}));
ui.index_page.human_name = (function ui$index_page$human_name(r){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(r);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ui$index_DASH_page_SLASH_countries_DASH_loaded,(function (db,p__31631){
var vec__31632 = p__31631;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31632,(0),null);
var map__31635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31632,(1),null);
var map__31635__$1 = ((((!((map__31635 == null)))?(((((map__31635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31635):map__31635);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31635__$1,cljs.core.cst$kw$data);
var items_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31635__$1,cljs.core.cst$kw$items_DASH_path);
var status_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31635__$1,cljs.core.cst$kw$status_DASH_path);
var items = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__31632,_,map__31635,map__31635__$1,data,items_path,status_path){
return (function (p__31637){
var map__31638 = p__31637;
var map__31638__$1 = ((((!((map__31638 == null)))?(((((map__31638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31638):map__31638);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31638__$1,cljs.core.cst$kw$resource);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(r),cljs.core.cst$kw$value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(r),cljs.core.cst$kw$resourceType,"Practitioner",cljs.core.cst$kw$display,ui.index_page.human_name(r)], null),cljs.core.cst$kw$display,ui.index_page.human_name(r)], null);
});})(vec__31632,_,map__31635,map__31635__$1,data,items_path,status_path))
,cljs.core.cst$kw$entry.cljs$core$IFn$_invoke$arity$1(data));
return cljs.core.assoc_in(cljs.core.assoc_in(db,items_path,items),status_path,cljs.core.cst$kw$done);
}));
ui.index_page.form_schema = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$form,cljs.core.cst$kw$fields,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$name,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$validators,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$required,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$min_DASH_length,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(10)], null),cljs.core.cst$kw$pattern,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$regex,/^[a-z]+$/,cljs.core.cst$kw$message,"Only lowercase letters are allowed"], null)], null)], null),cljs.core.cst$kw$nick,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$validators,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$required,cljs.core.PersistentArrayMap.EMPTY], null)], null),cljs.core.cst$kw$email,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$collection,cljs.core.cst$kw$item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$validators,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$email,cljs.core.PersistentArrayMap.EMPTY], null)], null)], null),cljs.core.cst$kw$links,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$collection,cljs.core.cst$kw$item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$form,cljs.core.cst$kw$fields,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$description,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$string], null),cljs.core.cst$kw$uri,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$string], null)], null)], null)], null),cljs.core.cst$kw$role,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$items,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,"admin",cljs.core.cst$kw$display,"admin"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,"user",cljs.core.cst$kw$display,"user"], null)], null)], null),cljs.core.cst$kw$country,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$object,cljs.core.cst$kw$zselect,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_search,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,cljs.core.cst$kw$ui$index_DASH_page_SLASH_search_DASH_country], null),cljs.core.cst$kw$search_DASH_by,cljs.core.cst$kw$enter,cljs.core.cst$kw$search_DASH_hint,"Press enter to search"], null)], null),cljs.core.cst$kw$active,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$boolean,cljs.core.cst$kw$toggle,new cljs.core.PersistentArrayMap(null, 3, [false,"Inactive",true,"Active",null,"Inactive"], null)], null),cljs.core.cst$kw$groups,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$items,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"One",cljs.core.cst$kw$value,"one"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Two",cljs.core.cst$kw$value,"two"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Three",cljs.core.cst$kw$value,"three"], null)], null)], null)], null)], null);
ui.index_page.init_value = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Nikolai",cljs.core.cst$kw$email,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nik@l.ai"], null)], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ui$index_DASH_page_SLASH_submit,(function (db,_){
var form = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,ui.index_page.form_path);
var map__31640 = zenform.model.eval_form(form);
var map__31640__$1 = ((((!((map__31640 == null)))?(((((map__31640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31640):map__31640);
var res = map__31640__$1;
var _STAR_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31640__$1,cljs.core.cst$kw$form);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31640__$1,cljs.core.cst$kw$value);
var errs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31640__$1,cljs.core.cst$kw$errors);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Submit:",v], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,ui.index_page.form_path,_STAR_form),cljs.core.cst$kw$errors,errs);
}));
var G__31642_31644 = cljs.core.cst$kw$ui$index_DASH_page_SLASH_errors;
var G__31643_31645 = ((function (G__31642_31644){
return (function (db,_){
return cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(db);
});})(G__31642_31644))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__31642_31644,G__31643_31645) : re_frame.core.reg_sub.call(null,G__31642_31644,G__31643_31645));
ui.index_page.index = (function ui$index_page$index(){
var G__31646_31677 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_init,ui.index_page.form_path,ui.index_page.form_schema,ui.index_page.init_value], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31646_31677) : re_frame.core.dispatch.call(null,G__31646_31677));

var errors = (function (){var G__31647 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui$index_DASH_page_SLASH_errors], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__31647) : re_frame.core.subscribe.call(null,G__31647));
})();
var emails = (function (){var G__31648 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_collection,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$email], null)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__31648) : re_frame.core.subscribe.call(null,G__31648));
})();
var links = (function (){var G__31649 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_collection,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$links], null)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__31649) : re_frame.core.subscribe.call(null,G__31649));
})();
return ((function (errors,emails,links){
return (function (_){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(emails)], 0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Zenform"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Name: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$zenform_SLASH_input,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name], null)], null)], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.text_input,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.invalid_feedback,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Nick: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$zenform_SLASH_input,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nick], null)], null)], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.text_input,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nick], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.invalid_feedback,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nick], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Email:"], null),(function (){var iter__4292__auto__ = ((function (errors,emails,links){
return (function ui$index_page$index_$_iter__31650(s__31651){
return (new cljs.core.LazySeq(null,((function (errors,emails,links){
return (function (){
var s__31651__$1 = s__31651;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__31651__$1);
if(temp__5535__auto__){
var s__31651__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31651__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__31651__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__31653 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__31652 = (0);
while(true){
if((i__31652 < size__4291__auto__)){
var vec__31654 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__31652);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31654,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31654,(1),null);
cljs.core.chunk_append(b__31653,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$zenform_SLASH_text_DASH_input,ui.index_page.form_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$email,idx], null)], null)], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.text_input,ui.index_page.form_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$email,idx], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (i__31652,vec__31654,idx,val,c__4290__auto__,size__4291__auto__,b__31653,s__31651__$2,temp__5535__auto__,errors,emails,links){
return (function (){
var G__31657 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_remove_DASH_collection_DASH_item,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$email], null),idx], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31657) : re_frame.core.dispatch.call(null,G__31657));
});})(i__31652,vec__31654,idx,val,c__4290__auto__,size__4291__auto__,b__31653,s__31651__$2,temp__5535__auto__,errors,emails,links))
], null),"Remove"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.invalid_feedback,ui.index_page.form_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$email,idx], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,idx], null)));

var G__31678 = (i__31652 + (1));
i__31652 = G__31678;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31653),ui$index_page$index_$_iter__31650(cljs.core.chunk_rest(s__31651__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31653),null);
}
} else {
var vec__31658 = cljs.core.first(s__31651__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31658,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31658,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$zenform_SLASH_text_DASH_input,ui.index_page.form_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$email,idx], null)], null)], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.text_input,ui.index_page.form_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$email,idx], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (vec__31658,idx,val,s__31651__$2,temp__5535__auto__,errors,emails,links){
return (function (){
var G__31661 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_remove_DASH_collection_DASH_item,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$email], null),idx], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31661) : re_frame.core.dispatch.call(null,G__31661));
});})(vec__31658,idx,val,s__31651__$2,temp__5535__auto__,errors,emails,links))
], null),"Remove"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.invalid_feedback,ui.index_page.form_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$email,idx], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,idx], null)),ui$index_page$index_$_iter__31650(cljs.core.rest(s__31651__$2)));
}
} else {
return null;
}
break;
}
});})(errors,emails,links))
,null,null));
});})(errors,emails,links))
;
return iter__4292__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.deref(emails)));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (errors,emails,links){
return (function (){
var G__31662 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_add_DASH_collection_DASH_item,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$email], null),"test@domen.org"], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31662) : re_frame.core.dispatch.call(null,G__31662));
});})(errors,emails,links))
], null),"Add"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Links:"], null),(function (){var iter__4292__auto__ = ((function (errors,emails,links){
return (function ui$index_page$index_$_iter__31663(s__31664){
return (new cljs.core.LazySeq(null,((function (errors,emails,links){
return (function (){
var s__31664__$1 = s__31664;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__31664__$1);
if(temp__5535__auto__){
var s__31664__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31664__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__31664__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__31666 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__31665 = (0);
while(true){
if((i__31665 < size__4291__auto__)){
var vec__31667 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__31665);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31667,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31667,(1),null);
cljs.core.chunk_append(b__31666,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$zenform_SLASH_text_DASH_input,ui.index_page.form_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$links,idx,cljs.core.cst$kw$description], null)], null)], 0))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$zenform_SLASH_text_DASH_input,ui.index_page.form_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$links,idx,cljs.core.cst$kw$uri], null)], null)], 0))], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.text_input,ui.index_page.form_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$links,idx,cljs.core.cst$kw$description], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.text_input,ui.index_page.form_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$links,idx,cljs.core.cst$kw$uri], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (i__31665,vec__31667,idx,val,c__4290__auto__,size__4291__auto__,b__31666,s__31664__$2,temp__5535__auto__,errors,emails,links){
return (function (){
var G__31670 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_remove_DASH_collection_DASH_item,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$links], null),idx], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31670) : re_frame.core.dispatch.call(null,G__31670));
});})(i__31665,vec__31667,idx,val,c__4290__auto__,size__4291__auto__,b__31666,s__31664__$2,temp__5535__auto__,errors,emails,links))
], null),"Remove"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.invalid_feedback,ui.index_page.form_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$links,idx], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,idx], null)));

var G__31679 = (i__31665 + (1));
i__31665 = G__31679;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31666),ui$index_page$index_$_iter__31663(cljs.core.chunk_rest(s__31664__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31666),null);
}
} else {
var vec__31671 = cljs.core.first(s__31664__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31671,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31671,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$zenform_SLASH_text_DASH_input,ui.index_page.form_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$links,idx,cljs.core.cst$kw$description], null)], null)], 0))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$zenform_SLASH_text_DASH_input,ui.index_page.form_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$links,idx,cljs.core.cst$kw$uri], null)], null)], 0))], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.text_input,ui.index_page.form_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$links,idx,cljs.core.cst$kw$description], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.text_input,ui.index_page.form_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$links,idx,cljs.core.cst$kw$uri], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (vec__31671,idx,val,s__31664__$2,temp__5535__auto__,errors,emails,links){
return (function (){
var G__31674 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_remove_DASH_collection_DASH_item,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$links], null),idx], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31674) : re_frame.core.dispatch.call(null,G__31674));
});})(vec__31671,idx,val,s__31664__$2,temp__5535__auto__,errors,emails,links))
], null),"Remove"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.invalid_feedback,ui.index_page.form_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$links,idx], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,idx], null)),ui$index_page$index_$_iter__31663(cljs.core.rest(s__31664__$2)));
}
} else {
return null;
}
break;
}
});})(errors,emails,links))
,null,null));
});})(errors,emails,links))
;
return iter__4292__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.deref(links)));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (errors,emails,links){
return (function (){
var G__31675 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_add_DASH_collection_DASH_item,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$links], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$description,"Google url",cljs.core.cst$kw$uri,"http://google.com"], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31675) : re_frame.core.dispatch.call(null,G__31675));
});})(errors,emails,links))
], null),"Add"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Role: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$zenform_SLASH_ut,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$role], null)], null)], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.select,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$role], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.invalid_feedback,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$role], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Active: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$zenform_SLASH_toggle,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active], null)], null)], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.toggle,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.invalid_feedback,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Country!: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$zenform_SLASH_toggle,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$country], null)], null)], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.zselect,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$country], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.invalid_feedback,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$country], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,"Groups: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$zenform_SLASH_radio_DASH_group,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$groups], null)], null)], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.radio_group,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$groups], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.invalid_feedback,ui.index_page.form_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$groups], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (errors,emails,links){
return (function (){
var G__31676 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui$index_DASH_page_SLASH_submit], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31676) : re_frame.core.dispatch.call(null,G__31676));
});})(errors,emails,links))
], null),"Submit"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Init value:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.pprint,ui.index_page.init_value], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Eval errors"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.pprint,cljs.core.deref(errors)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Form value:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.form_value,ui.index_page.form_path], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Form model"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.node,ui.index_page.form_path], null)], null)], null)], null);
});
;})(errors,emails,links))
});
ui.routes.reg_page(cljs.core.cst$kw$index,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"Welcome",cljs.core.cst$kw$w,(1),cljs.core.cst$kw$cmp,ui.index_page.index], null));
