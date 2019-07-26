// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29721 = arguments.length;
var i__4500__auto___29722 = (0);
while(true){
if((i__4500__auto___29722 < len__4499__auto___29721)){
args__4502__auto__.push((arguments[i__4500__auto___29722]));

var G__29723 = (i__4500__auto___29722 + (1));
i__4500__auto___29722 = G__29723;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.core.css.cljs$lang$applyTo = (function (seq29720){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29720));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29725 = arguments.length;
var i__4500__auto___29726 = (0);
while(true){
if((i__4500__auto___29726 < len__4499__auto___29725)){
args__4502__auto__.push((arguments[i__4500__auto___29726]));

var G__29727 = (i__4500__auto___29726 + (1));
i__4500__auto___29726 = G__29727;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style(maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.core.style.cljs$lang$applyTo = (function (seq29724){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29724));
});

