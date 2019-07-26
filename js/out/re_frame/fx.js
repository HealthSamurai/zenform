// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_27013 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__27014 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__27015 = null;
var count__27016 = (0);
var i__27017 = (0);
while(true){
if((i__27017 < count__27016)){
var vec__27018 = chunk__27015.cljs$core$IIndexed$_nth$arity$2(null,i__27017);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27018,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27018,(1),null);
var temp__5533__auto___27034 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5533__auto___27034)){
var effect_fn_27035 = temp__5533__auto___27034;
(effect_fn_27035.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27035.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27035.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27036 = seq__27014;
var G__27037 = chunk__27015;
var G__27038 = count__27016;
var G__27039 = (i__27017 + (1));
seq__27014 = G__27036;
chunk__27015 = G__27037;
count__27016 = G__27038;
i__27017 = G__27039;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__27014);
if(temp__5535__auto__){
var seq__27014__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27014__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__27014__$1);
var G__27040 = cljs.core.chunk_rest(seq__27014__$1);
var G__27041 = c__4319__auto__;
var G__27042 = cljs.core.count(c__4319__auto__);
var G__27043 = (0);
seq__27014 = G__27040;
chunk__27015 = G__27041;
count__27016 = G__27042;
i__27017 = G__27043;
continue;
} else {
var vec__27021 = cljs.core.first(seq__27014__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27021,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27021,(1),null);
var temp__5533__auto___27044 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5533__auto___27044)){
var effect_fn_27045 = temp__5533__auto___27044;
(effect_fn_27045.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27045.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27045.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27046 = cljs.core.next(seq__27014__$1);
var G__27047 = null;
var G__27048 = (0);
var G__27049 = (0);
seq__27014 = G__27046;
chunk__27015 = G__27047;
count__27016 = G__27048;
i__27017 = G__27049;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26824__auto___27050 = re_frame.interop.now();
var duration__26825__auto___27051 = (end__26824__auto___27050 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__26825__auto___27051,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26824__auto___27050);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_27013;
}} else {
var seq__27024 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__27025 = null;
var count__27026 = (0);
var i__27027 = (0);
while(true){
if((i__27027 < count__27026)){
var vec__27028 = chunk__27025.cljs$core$IIndexed$_nth$arity$2(null,i__27027);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27028,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27028,(1),null);
var temp__5533__auto___27052 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5533__auto___27052)){
var effect_fn_27053 = temp__5533__auto___27052;
(effect_fn_27053.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27053.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27053.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27054 = seq__27024;
var G__27055 = chunk__27025;
var G__27056 = count__27026;
var G__27057 = (i__27027 + (1));
seq__27024 = G__27054;
chunk__27025 = G__27055;
count__27026 = G__27056;
i__27027 = G__27057;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__27024);
if(temp__5535__auto__){
var seq__27024__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27024__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__27024__$1);
var G__27058 = cljs.core.chunk_rest(seq__27024__$1);
var G__27059 = c__4319__auto__;
var G__27060 = cljs.core.count(c__4319__auto__);
var G__27061 = (0);
seq__27024 = G__27058;
chunk__27025 = G__27059;
count__27026 = G__27060;
i__27027 = G__27061;
continue;
} else {
var vec__27031 = cljs.core.first(seq__27024__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27031,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27031,(1),null);
var temp__5533__auto___27062 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5533__auto___27062)){
var effect_fn_27063 = temp__5533__auto___27062;
(effect_fn_27063.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27063.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27063.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27064 = cljs.core.next(seq__27024__$1);
var G__27065 = null;
var G__27066 = (0);
var G__27067 = (0);
seq__27024 = G__27064;
chunk__27025 = G__27065;
count__27026 = G__27066;
i__27027 = G__27067;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__27068 = cljs.core.seq(value);
var chunk__27069 = null;
var count__27070 = (0);
var i__27071 = (0);
while(true){
if((i__27071 < count__27070)){
var map__27072 = chunk__27069.cljs$core$IIndexed$_nth$arity$2(null,i__27071);
var map__27072__$1 = ((((!((map__27072 == null)))?(((((map__27072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27072):map__27072);
var effect = map__27072__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27072__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27072__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__27068,chunk__27069,count__27070,i__27071,map__27072,map__27072__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__27068,chunk__27069,count__27070,i__27071,map__27072,map__27072__$1,effect,ms,dispatch))
,ms);
}


var G__27076 = seq__27068;
var G__27077 = chunk__27069;
var G__27078 = count__27070;
var G__27079 = (i__27071 + (1));
seq__27068 = G__27076;
chunk__27069 = G__27077;
count__27070 = G__27078;
i__27071 = G__27079;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__27068);
if(temp__5535__auto__){
var seq__27068__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27068__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__27068__$1);
var G__27080 = cljs.core.chunk_rest(seq__27068__$1);
var G__27081 = c__4319__auto__;
var G__27082 = cljs.core.count(c__4319__auto__);
var G__27083 = (0);
seq__27068 = G__27080;
chunk__27069 = G__27081;
count__27070 = G__27082;
i__27071 = G__27083;
continue;
} else {
var map__27074 = cljs.core.first(seq__27068__$1);
var map__27074__$1 = ((((!((map__27074 == null)))?(((((map__27074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27074):map__27074);
var effect = map__27074__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27074__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27074__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__27068,chunk__27069,count__27070,i__27071,map__27074,map__27074__$1,effect,ms,dispatch,seq__27068__$1,temp__5535__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__27068,chunk__27069,count__27070,i__27071,map__27074,map__27074__$1,effect,ms,dispatch,seq__27068__$1,temp__5535__auto__))
,ms);
}


var G__27084 = cljs.core.next(seq__27068__$1);
var G__27085 = null;
var G__27086 = (0);
var G__27087 = (0);
seq__27068 = G__27084;
chunk__27069 = G__27085;
count__27070 = G__27086;
i__27071 = G__27087;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__27088 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__27089 = null;
var count__27090 = (0);
var i__27091 = (0);
while(true){
if((i__27091 < count__27090)){
var event = chunk__27089.cljs$core$IIndexed$_nth$arity$2(null,i__27091);
re_frame.router.dispatch(event);


var G__27092 = seq__27088;
var G__27093 = chunk__27089;
var G__27094 = count__27090;
var G__27095 = (i__27091 + (1));
seq__27088 = G__27092;
chunk__27089 = G__27093;
count__27090 = G__27094;
i__27091 = G__27095;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__27088);
if(temp__5535__auto__){
var seq__27088__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27088__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__27088__$1);
var G__27096 = cljs.core.chunk_rest(seq__27088__$1);
var G__27097 = c__4319__auto__;
var G__27098 = cljs.core.count(c__4319__auto__);
var G__27099 = (0);
seq__27088 = G__27096;
chunk__27089 = G__27097;
count__27090 = G__27098;
i__27091 = G__27099;
continue;
} else {
var event = cljs.core.first(seq__27088__$1);
re_frame.router.dispatch(event);


var G__27100 = cljs.core.next(seq__27088__$1);
var G__27101 = null;
var G__27102 = (0);
var G__27103 = (0);
seq__27088 = G__27100;
chunk__27089 = G__27101;
count__27090 = G__27102;
i__27091 = G__27103;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__27104 = cljs.core.seq(value);
var chunk__27105 = null;
var count__27106 = (0);
var i__27107 = (0);
while(true){
if((i__27107 < count__27106)){
var event = chunk__27105.cljs$core$IIndexed$_nth$arity$2(null,i__27107);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__27108 = seq__27104;
var G__27109 = chunk__27105;
var G__27110 = count__27106;
var G__27111 = (i__27107 + (1));
seq__27104 = G__27108;
chunk__27105 = G__27109;
count__27106 = G__27110;
i__27107 = G__27111;
continue;
} else {
var temp__5535__auto__ = cljs.core.seq(seq__27104);
if(temp__5535__auto__){
var seq__27104__$1 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27104__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__27104__$1);
var G__27112 = cljs.core.chunk_rest(seq__27104__$1);
var G__27113 = c__4319__auto__;
var G__27114 = cljs.core.count(c__4319__auto__);
var G__27115 = (0);
seq__27104 = G__27112;
chunk__27105 = G__27113;
count__27106 = G__27114;
i__27107 = G__27115;
continue;
} else {
var event = cljs.core.first(seq__27104__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__27116 = cljs.core.next(seq__27104__$1);
var G__27117 = null;
var G__27118 = (0);
var G__27119 = (0);
seq__27104 = G__27116;
chunk__27105 = G__27117;
count__27106 = G__27118;
i__27107 = G__27119;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if(!((cljs.core.deref(re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
