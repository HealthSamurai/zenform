// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('zenform.validators');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
if(typeof zenform.validators.validate !== 'undefined'){
} else {
zenform.validators.validate = (function (){var method_table__4382__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("zenform.validators","validate"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (cfg,value){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cfg);
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,cljs.core.cst$kw$default,hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
zenform.validators.validate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$min_DASH_length,(function (p__26941,v){
var map__26942 = p__26941;
var map__26942__$1 = ((((!((map__26942 == null)))?(((((map__26942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26942):map__26942);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26942__$1,cljs.core.cst$kw$value);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26942__$1,cljs.core.cst$kw$message);
if(typeof v === 'string'){
if((cljs.core.count(v) < limit)){
var or__3922__auto__ = msg;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ["Shouldn't be shorter then ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(limit)].join('');
}
} else {
return null;
}
} else {
return null;
}
}));
zenform.validators.validate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$number,(function (p__26944,v){
var map__26945 = p__26944;
var map__26945__$1 = ((((!((map__26945 == null)))?(((((map__26945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26945):map__26945);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26945__$1,cljs.core.cst$kw$message);
if(((!(((typeof v === 'string')?clojure.string.blank_QMARK_(v):cljs.core.empty_QMARK_(v)))) && ((((v >= (0))) || ((v <= (0))))))){
return null;
} else {
var or__3922__auto__ = msg;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "Should be a number";
}
}
}));
zenform.validators.validate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$required,(function (p__26947,v){
var map__26948 = p__26947;
var map__26948__$1 = ((((!((map__26948 == null)))?(((((map__26948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26948):map__26948);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26948__$1,cljs.core.cst$kw$message);
if((((v == null)) || (((typeof v === 'string') && (clojure.string.blank_QMARK_(v)))) || (((cljs.core.map_QMARK_(v)) && (cljs.core.empty_QMARK_(v)))) || (((cljs.core.sequential_QMARK_(v)) && (cljs.core.empty_QMARK_(v)))))){
var or__3922__auto__ = msg;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "Should not be blank";
}
} else {
return null;
}
}));
zenform.validators.email_regex = /.+?\@.+?\..+/;
zenform.validators.validate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$email,(function (p__26950,v){
var map__26951 = p__26950;
var map__26951__$1 = ((((!((map__26951 == null)))?(((((map__26951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26951):map__26951);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26951__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(v)){
if(cljs.core.truth_(cljs.core.re_matches(zenform.validators.email_regex,v))){
return null;
} else {
var or__3922__auto__ = msg;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "Should be valid email";
}
}
} else {
return null;
}
}));
zenform.validators.validate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$pattern,(function (p__26953,v){
var map__26954 = p__26953;
var map__26954__$1 = ((((!((map__26954 == null)))?(((((map__26954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26954):map__26954);
var rx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26954__$1,cljs.core.cst$kw$regex);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26954__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(v)){
if(cljs.core.truth_(cljs.core.re_matches(rx,v))){
return null;
} else {
var or__3922__auto__ = msg;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ["Should match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rx)].join('');
}
}
} else {
return null;
}
}));
