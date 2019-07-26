// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('ui.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('route_map.core');
goog.require('clojure.string');
if(typeof ui.routes.pages !== 'undefined'){
} else {
ui.routes.pages = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
ui.routes.reg_page = (function ui$routes$reg_page(k,cmp){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ui.routes.pages,cljs.core.assoc,k,cmp);
});
ui.routes.resolve_page = (function ui$routes$resolve_page(k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(ui.routes.pages),k);
});
ui.routes.routes = (function ui$routes$routes(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__30174){
var vec__30175 = p__30174;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30175,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30175,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.name(k),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_DOT_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$cmp),cljs.core.cst$kw$id,k)], null));
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_DOT_,cljs.core.cst$kw$index], null),cljs.core.deref(ui.routes.pages));
});
ui.routes.href = (function ui$routes$href(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30179 = arguments.length;
var i__4500__auto___30180 = (0);
while(true){
if((i__4500__auto___30180 < len__4499__auto___30179)){
args__4502__auto__.push((arguments[i__4500__auto___30180]));

var G__30181 = (i__4500__auto___30180 + (1));
i__4500__auto___30180 = G__30181;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return ui.routes.href.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

ui.routes.href.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
var url = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.name(x);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}
}),parts)))].join('');
if(cljs.core.truth_(route_map.core.match(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_DOT_,url], null),ui.routes.routes()))){
} else {
console.error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)," is not matches routes"].join(''));
}

return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
});

ui.routes.href.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
ui.routes.href.cljs$lang$applyTo = (function (seq30178){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30178));
});

