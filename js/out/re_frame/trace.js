// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__26846){
var map__26847 = p__26846;
var map__26847__$1 = ((((!((map__26847 == null)))?(((((map__26847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26847):map__26847);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26847__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26847__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26847__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26847__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__3922__auto__ = child_of;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__26849_26863 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__26850_26864 = null;
var count__26851_26865 = (0);
var i__26852_26866 = (0);
while(true){
if((i__26852_26866 < count__26851_26865)){
var vec__26853_26867 = chunk__26850_26864.cljs$core$IIndexed$_nth$arity$2(null,i__26852_26866);
var k_26868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26853_26867,(0),null);
var cb_26869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26853_26867,(1),null);
try{var G__26857_26870 = cljs.core.deref(re_frame.trace.traces);
(cb_26869.cljs$core$IFn$_invoke$arity$1 ? cb_26869.cljs$core$IFn$_invoke$arity$1(G__26857_26870) : cb_26869.call(null,G__26857_26870));
}catch (e26856){var e_26871 = e26856;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_26868,"while storing",cljs.core.deref(re_frame.trace.traces),e_26871], 0));
}

var G__26872 = seq__26849_26863;
var G__26873 = chunk__26850_26864;
var G__26874 = count__26851_26865;
var G__26875 = (i__26852_26866 + (1));
seq__26849_26863 = G__26872;
chunk__26850_26864 = G__26873;
count__26851_26865 = G__26874;
i__26852_26866 = G__26875;
continue;
} else {
var temp__5535__auto___26876 = cljs.core.seq(seq__26849_26863);
if(temp__5535__auto___26876){
var seq__26849_26877__$1 = temp__5535__auto___26876;
if(cljs.core.chunked_seq_QMARK_(seq__26849_26877__$1)){
var c__4319__auto___26878 = cljs.core.chunk_first(seq__26849_26877__$1);
var G__26879 = cljs.core.chunk_rest(seq__26849_26877__$1);
var G__26880 = c__4319__auto___26878;
var G__26881 = cljs.core.count(c__4319__auto___26878);
var G__26882 = (0);
seq__26849_26863 = G__26879;
chunk__26850_26864 = G__26880;
count__26851_26865 = G__26881;
i__26852_26866 = G__26882;
continue;
} else {
var vec__26858_26883 = cljs.core.first(seq__26849_26877__$1);
var k_26884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26858_26883,(0),null);
var cb_26885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26858_26883,(1),null);
try{var G__26862_26886 = cljs.core.deref(re_frame.trace.traces);
(cb_26885.cljs$core$IFn$_invoke$arity$1 ? cb_26885.cljs$core$IFn$_invoke$arity$1(G__26862_26886) : cb_26885.call(null,G__26862_26886));
}catch (e26861){var e_26887 = e26861;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_26884,"while storing",cljs.core.deref(re_frame.trace.traces),e_26887], 0));
}

var G__26888 = cljs.core.next(seq__26849_26877__$1);
var G__26889 = null;
var G__26890 = (0);
var G__26891 = (0);
seq__26849_26863 = G__26888;
chunk__26850_26864 = G__26889;
count__26851_26865 = G__26890;
i__26852_26866 = G__26891;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (10)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
