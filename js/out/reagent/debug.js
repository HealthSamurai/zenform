// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__26156__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26156 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26157__i = 0, G__26157__a = new Array(arguments.length -  0);
while (G__26157__i < G__26157__a.length) {G__26157__a[G__26157__i] = arguments[G__26157__i + 0]; ++G__26157__i;}
  args = new cljs.core.IndexedSeq(G__26157__a,0,null);
} 
return G__26156__delegate.call(this,args);};
G__26156.cljs$lang$maxFixedArity = 0;
G__26156.cljs$lang$applyTo = (function (arglist__26158){
var args = cljs.core.seq(arglist__26158);
return G__26156__delegate(args);
});
G__26156.cljs$core$IFn$_invoke$arity$variadic = G__26156__delegate;
return G__26156;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26159__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26159 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26160__i = 0, G__26160__a = new Array(arguments.length -  0);
while (G__26160__i < G__26160__a.length) {G__26160__a[G__26160__i] = arguments[G__26160__i + 0]; ++G__26160__i;}
  args = new cljs.core.IndexedSeq(G__26160__a,0,null);
} 
return G__26159__delegate.call(this,args);};
G__26159.cljs$lang$maxFixedArity = 0;
G__26159.cljs$lang$applyTo = (function (arglist__26161){
var args = cljs.core.seq(arglist__26161);
return G__26159__delegate(args);
});
G__26159.cljs$core$IFn$_invoke$arity$variadic = G__26159__delegate;
return G__26159;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
