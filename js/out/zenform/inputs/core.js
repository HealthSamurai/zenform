// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('zenform.inputs.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('zenform.model');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('zenform.inputs.zselect');
goog.require('zenform.inputs.calendar');
zenform.inputs.core.styles = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.inputs.zselect.style], null);
zenform.inputs.core.zselect = zenform.inputs.zselect.zselect;
zenform.inputs.core.calendar = zenform.inputs.calendar.calendar;
zenform.inputs.core.text_input = (function zenform$inputs$core$text_input(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29964 = arguments.length;
var i__4500__auto___29965 = (0);
while(true){
if((i__4500__auto___29965 < len__4499__auto___29964)){
args__4502__auto__.push((arguments[i__4500__auto___29965]));

var G__29966 = (i__4500__auto___29965 + (1));
i__4500__auto___29965 = G__29966;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return zenform.inputs.core.text_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

zenform.inputs.core.text_input.cljs$core$IFn$_invoke$arity$variadic = (function (form_path,path,p__29958){
var vec__29959 = p__29958;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29959,(0),null);
var node = (function (){var G__29962 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_node,form_path,path], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29962) : re_frame.core.subscribe.call(null,G__29962));
})();
var attrs__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$on_DASH_change,((function (node,vec__29959,attrs){
return (function (p1__29954_SHARP_){
var G__29963 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_set_DASH_value,form_path,path,p1__29954_SHARP_.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29963) : re_frame.core.dispatch.call(null,G__29963));
});})(node,vec__29959,attrs))
);
return ((function (node,attrs__$1,vec__29959,attrs){
return (function() { 
var G__29967__delegate = function (_){
var _STAR_node = cljs.core.deref(node);
var v = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(_STAR_node);
var errs = cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(_STAR_node);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs__$1,cljs.core.cst$kw$value,v),cljs.core.cst$kw$class,((function (_STAR_node,v,errs,node,attrs__$1,vec__29959,attrs){
return (function (class$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(errs)?" is-invalid":null))].join('');
});})(_STAR_node,v,errs,node,attrs__$1,vec__29959,attrs))
)], null);
};
var G__29967 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__29968__i = 0, G__29968__a = new Array(arguments.length -  0);
while (G__29968__i < G__29968__a.length) {G__29968__a[G__29968__i] = arguments[G__29968__i + 0]; ++G__29968__i;}
  _ = new cljs.core.IndexedSeq(G__29968__a,0,null);
} 
return G__29967__delegate.call(this,_);};
G__29967.cljs$lang$maxFixedArity = 0;
G__29967.cljs$lang$applyTo = (function (arglist__29969){
var _ = cljs.core.seq(arglist__29969);
return G__29967__delegate(_);
});
G__29967.cljs$core$IFn$_invoke$arity$variadic = G__29967__delegate;
return G__29967;
})()
;
;})(node,attrs__$1,vec__29959,attrs))
});

zenform.inputs.core.text_input.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
zenform.inputs.core.text_input.cljs$lang$applyTo = (function (seq29955){
var G__29956 = cljs.core.first(seq29955);
var seq29955__$1 = cljs.core.next(seq29955);
var G__29957 = cljs.core.first(seq29955__$1);
var seq29955__$2 = cljs.core.next(seq29955__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29956,G__29957,seq29955__$2);
});

zenform.inputs.core.date_input = (function zenform$inputs$core$date_input(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29979 = arguments.length;
var i__4500__auto___29980 = (0);
while(true){
if((i__4500__auto___29980 < len__4499__auto___29979)){
args__4502__auto__.push((arguments[i__4500__auto___29980]));

var G__29981 = (i__4500__auto___29980 + (1));
i__4500__auto___29980 = G__29981;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return zenform.inputs.core.date_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

zenform.inputs.core.date_input.cljs$core$IFn$_invoke$arity$variadic = (function (form_path,path,p__29973){
var vec__29974 = p__29973;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29974,(0),null);
var node = (function (){var G__29977 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_node,form_path,path], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29977) : re_frame.core.subscribe.call(null,G__29977));
})();
var attrs__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$on_DASH_change,((function (node,vec__29974,attrs){
return (function (e){
var G__29978 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_set_DASH_value,form_path,path,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29978) : re_frame.core.dispatch.call(null,G__29978));
});})(node,vec__29974,attrs))
);
return ((function (node,attrs__$1,vec__29974,attrs){
return (function() { 
var G__29982__delegate = function (_){
var _STAR_node = cljs.core.deref(node);
var v = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(_STAR_node);
var errs = cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(_STAR_node);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs__$1,cljs.core.cst$kw$default_DASH_value,v),cljs.core.cst$kw$type,"date"),cljs.core.cst$kw$class,((function (_STAR_node,v,errs,node,attrs__$1,vec__29974,attrs){
return (function (class$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(errs)?" is-invalid":null))].join('');
});})(_STAR_node,v,errs,node,attrs__$1,vec__29974,attrs))
)], null);
};
var G__29982 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__29983__i = 0, G__29983__a = new Array(arguments.length -  0);
while (G__29983__i < G__29983__a.length) {G__29983__a[G__29983__i] = arguments[G__29983__i + 0]; ++G__29983__i;}
  _ = new cljs.core.IndexedSeq(G__29983__a,0,null);
} 
return G__29982__delegate.call(this,_);};
G__29982.cljs$lang$maxFixedArity = 0;
G__29982.cljs$lang$applyTo = (function (arglist__29984){
var _ = cljs.core.seq(arglist__29984);
return G__29982__delegate(_);
});
G__29982.cljs$core$IFn$_invoke$arity$variadic = G__29982__delegate;
return G__29982;
})()
;
;})(node,attrs__$1,vec__29974,attrs))
});

zenform.inputs.core.date_input.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
zenform.inputs.core.date_input.cljs$lang$applyTo = (function (seq29970){
var G__29971 = cljs.core.first(seq29970);
var seq29970__$1 = cljs.core.next(seq29970);
var G__29972 = cljs.core.first(seq29970__$1);
var seq29970__$2 = cljs.core.next(seq29970__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29971,G__29972,seq29970__$2);
});

zenform.inputs.core.time_input = (function zenform$inputs$core$time_input(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29994 = arguments.length;
var i__4500__auto___29995 = (0);
while(true){
if((i__4500__auto___29995 < len__4499__auto___29994)){
args__4502__auto__.push((arguments[i__4500__auto___29995]));

var G__29996 = (i__4500__auto___29995 + (1));
i__4500__auto___29995 = G__29996;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return zenform.inputs.core.time_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

zenform.inputs.core.time_input.cljs$core$IFn$_invoke$arity$variadic = (function (form_path,path,p__29988){
var vec__29989 = p__29988;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29989,(0),null);
var node = (function (){var G__29992 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_node,form_path,path], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29992) : re_frame.core.subscribe.call(null,G__29992));
})();
var attrs__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$on_DASH_change,((function (node,vec__29989,attrs){
return (function (e){
var G__29993 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_set_DASH_value,form_path,path,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29993) : re_frame.core.dispatch.call(null,G__29993));
});})(node,vec__29989,attrs))
);
return ((function (node,attrs__$1,vec__29989,attrs){
return (function() { 
var G__29997__delegate = function (_){
var _STAR_node = cljs.core.deref(node);
var v = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(_STAR_node);
var errs = cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(_STAR_node);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs__$1,cljs.core.cst$kw$default_DASH_value,v),cljs.core.cst$kw$type,"time"),cljs.core.cst$kw$class,((function (_STAR_node,v,errs,node,attrs__$1,vec__29989,attrs){
return (function (class$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(errs)?" is-invalid":null))].join('');
});})(_STAR_node,v,errs,node,attrs__$1,vec__29989,attrs))
)], null);
};
var G__29997 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__29998__i = 0, G__29998__a = new Array(arguments.length -  0);
while (G__29998__i < G__29998__a.length) {G__29998__a[G__29998__i] = arguments[G__29998__i + 0]; ++G__29998__i;}
  _ = new cljs.core.IndexedSeq(G__29998__a,0,null);
} 
return G__29997__delegate.call(this,_);};
G__29997.cljs$lang$maxFixedArity = 0;
G__29997.cljs$lang$applyTo = (function (arglist__29999){
var _ = cljs.core.seq(arglist__29999);
return G__29997__delegate(_);
});
G__29997.cljs$core$IFn$_invoke$arity$variadic = G__29997__delegate;
return G__29997;
})()
;
;})(node,attrs__$1,vec__29989,attrs))
});

zenform.inputs.core.time_input.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
zenform.inputs.core.time_input.cljs$lang$applyTo = (function (seq29985){
var G__29986 = cljs.core.first(seq29985);
var seq29985__$1 = cljs.core.next(seq29985);
var G__29987 = cljs.core.first(seq29985__$1);
var seq29985__$2 = cljs.core.next(seq29985__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29986,G__29987,seq29985__$2);
});

zenform.inputs.core.invalid_feedback = (function zenform$inputs$core$invalid_feedback(form_path,path){
var node = (function (){var G__30000 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_node,form_path,path], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30000) : re_frame.core.subscribe.call(null,G__30000));
})();
return ((function (node){
return (function() { 
var G__30001__delegate = function (_){
var errs = cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$invalid_DASH_feedback,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"block"], null)], null),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.vals(errs))], null);
};
var G__30001 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__30002__i = 0, G__30002__a = new Array(arguments.length -  0);
while (G__30002__i < G__30002__a.length) {G__30002__a[G__30002__i] = arguments[G__30002__i + 0]; ++G__30002__i;}
  _ = new cljs.core.IndexedSeq(G__30002__a,0,null);
} 
return G__30001__delegate.call(this,_);};
G__30001.cljs$lang$maxFixedArity = 0;
G__30001.cljs$lang$applyTo = (function (arglist__30003){
var _ = cljs.core.seq(arglist__30003);
return G__30001__delegate(_);
});
G__30001.cljs$core$IFn$_invoke$arity$variadic = G__30001__delegate;
return G__30001;
})()
;
;})(node))
});
zenform.inputs.core.select = (function zenform$inputs$core$select(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30023 = arguments.length;
var i__4500__auto___30024 = (0);
while(true){
if((i__4500__auto___30024 < len__4499__auto___30023)){
args__4502__auto__.push((arguments[i__4500__auto___30024]));

var G__30025 = (i__4500__auto___30024 + (1));
i__4500__auto___30024 = G__30025;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return zenform.inputs.core.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

zenform.inputs.core.select.cljs$core$IFn$_invoke$arity$variadic = (function (form_path,path,p__30007){
var vec__30008 = p__30007;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30008,(0),null);
var node = cljs.core.deref((function (){var G__30011 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_node,form_path,path], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30011) : re_frame.core.subscribe.call(null,G__30011));
})());
var on_change = ((function (node,vec__30008,attrs){
return (function (x){
var G__30012 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_set_DASH_value,form_path,path,x.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30012) : re_frame.core.dispatch.call(null,G__30012));
});})(node,vec__30008,attrs))
;
var map__30013 = node;
var map__30013__$1 = ((((!((map__30013 == null)))?(((((map__30013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30013):map__30013);
var value_current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30013__$1,cljs.core.cst$kw$value);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30013__$1,cljs.core.cst$kw$errors);
var value_current__$1 = (function (){var or__3922__auto__ = value_current;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$value,value_current__$1], null)], 0)),(function (){var iter__4292__auto__ = ((function (map__30013,map__30013__$1,value_current,errors,value_current__$1,node,on_change,vec__30008,attrs){
return (function zenform$inputs$core$iter__30015(s__30016){
return (new cljs.core.LazySeq(null,((function (map__30013,map__30013__$1,value_current,errors,value_current__$1,node,on_change,vec__30008,attrs){
return (function (){
var s__30016__$1 = s__30016;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__30016__$1);
if(temp__5535__auto__){
var s__30016__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30016__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__30016__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__30018 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__30017 = (0);
while(true){
if((i__30017 < size__4291__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__30017);
var map__30019 = item;
var map__30019__$1 = ((((!((map__30019 == null)))?(((((map__30019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30019):map__30019);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30019__$1,cljs.core.cst$kw$id);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30019__$1,cljs.core.cst$kw$value);
var display = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30019__$1,cljs.core.cst$kw$display);
var key = (function (){var or__3922__auto__ = id;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return value;
}
})();
cljs.core.chunk_append(b__30018,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,key,cljs.core.cst$kw$value,value], null),(function (){var or__3922__auto__ = display;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return value;
}
})()], null));

var G__30026 = (i__30017 + (1));
i__30017 = G__30026;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30018),zenform$inputs$core$iter__30015(cljs.core.chunk_rest(s__30016__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30018),null);
}
} else {
var item = cljs.core.first(s__30016__$2);
var map__30021 = item;
var map__30021__$1 = ((((!((map__30021 == null)))?(((((map__30021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30021):map__30021);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30021__$1,cljs.core.cst$kw$id);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30021__$1,cljs.core.cst$kw$value);
var display = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30021__$1,cljs.core.cst$kw$display);
var key = (function (){var or__3922__auto__ = id;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return value;
}
})();
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,key,cljs.core.cst$kw$value,value], null),(function (){var or__3922__auto__ = display;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return value;
}
})()], null),zenform$inputs$core$iter__30015(cljs.core.rest(s__30016__$2)));
}
} else {
return null;
}
break;
}
});})(map__30013,map__30013__$1,value_current,errors,value_current__$1,node,on_change,vec__30008,attrs))
,null,null));
});})(map__30013,map__30013__$1,value_current,errors,value_current__$1,node,on_change,vec__30008,attrs))
;
return iter__4292__auto__(cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(node));
})()], null);
});

zenform.inputs.core.select.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
zenform.inputs.core.select.cljs$lang$applyTo = (function (seq30004){
var G__30005 = cljs.core.first(seq30004);
var seq30004__$1 = cljs.core.next(seq30004);
var G__30006 = cljs.core.first(seq30004__$1);
var seq30004__$2 = cljs.core.next(seq30004__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30005,G__30006,seq30004__$2);
});

zenform.inputs.core.toggle = (function zenform$inputs$core$toggle(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30036 = arguments.length;
var i__4500__auto___30037 = (0);
while(true){
if((i__4500__auto___30037 < len__4499__auto___30036)){
args__4502__auto__.push((arguments[i__4500__auto___30037]));

var G__30038 = (i__4500__auto___30037 + (1));
i__4500__auto___30037 = G__30038;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return zenform.inputs.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

zenform.inputs.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function (form_path,path,p__30030){
var vec__30031 = p__30030;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30031,(0),null);
var node = (function (){var G__30034 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_node,form_path,path], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30034) : re_frame.core.subscribe.call(null,G__30034));
})();
var on_change = ((function (node,vec__30031,attrs){
return (function (){
var G__30035 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_set_DASH_value,form_path,path,cljs.core.not(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node)))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30035) : re_frame.core.dispatch.call(null,G__30035));
});})(node,vec__30031,attrs))
;
return ((function (node,on_change,vec__30031,attrs){
return (function() { 
var G__30039__delegate = function (_){
var _STAR_node = cljs.core.deref(node);
var v = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(_STAR_node);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$toggle$btn,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,on_change,cljs.core.cst$kw$class,(cljs.core.truth_(v)?"btn-primary":"btn-light")], null),(function (){var or__3922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$toggle.cljs$core$IFn$_invoke$arity$1(_STAR_node),v);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}
})()], null);
};
var G__30039 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__30040__i = 0, G__30040__a = new Array(arguments.length -  0);
while (G__30040__i < G__30040__a.length) {G__30040__a[G__30040__i] = arguments[G__30040__i + 0]; ++G__30040__i;}
  _ = new cljs.core.IndexedSeq(G__30040__a,0,null);
} 
return G__30039__delegate.call(this,_);};
G__30039.cljs$lang$maxFixedArity = 0;
G__30039.cljs$lang$applyTo = (function (arglist__30041){
var _ = cljs.core.seq(arglist__30041);
return G__30039__delegate(_);
});
G__30039.cljs$core$IFn$_invoke$arity$variadic = G__30039__delegate;
return G__30039;
})()
;
;})(node,on_change,vec__30031,attrs))
});

zenform.inputs.core.toggle.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
zenform.inputs.core.toggle.cljs$lang$applyTo = (function (seq30027){
var G__30028 = cljs.core.first(seq30027);
var seq30027__$1 = cljs.core.next(seq30027);
var G__30029 = cljs.core.first(seq30027__$1);
var seq30027__$2 = cljs.core.next(seq30027__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30028,G__30029,seq30027__$2);
});

zenform.inputs.core.radio_group = (function zenform$inputs$core$radio_group(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30075 = arguments.length;
var i__4500__auto___30076 = (0);
while(true){
if((i__4500__auto___30076 < len__4499__auto___30075)){
args__4502__auto__.push((arguments[i__4500__auto___30076]));

var G__30077 = (i__4500__auto___30076 + (1));
i__4500__auto___30076 = G__30077;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return zenform.inputs.core.radio_group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

zenform.inputs.core.radio_group.cljs$core$IFn$_invoke$arity$variadic = (function (form_path,path,p__30045){
var vec__30046 = p__30045;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30046,(0),null);
var node = (function (){var G__30049 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_node,form_path,path], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30049) : re_frame.core.subscribe.call(null,G__30049));
})();
var on_change = ((function (node,vec__30046,attrs){
return (function (v){
var G__30050 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_set_DASH_value,form_path,path,v], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30050) : re_frame.core.dispatch.call(null,G__30050));
});})(node,vec__30046,attrs))
;
return ((function (node,on_change,vec__30046,attrs){
return (function() { 
var G__30078__delegate = function (_){
var map__30051 = cljs.core.deref(node);
var map__30051__$1 = ((((!((map__30051 == null)))?(((((map__30051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30051):map__30051);
var current_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30051__$1,cljs.core.cst$kw$value);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30051__$1,cljs.core.cst$kw$items);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_group,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tab_DASH_index,(0),cljs.core.cst$kw$on_DASH_key_DASH_down,((function (map__30051,map__30051__$1,current_value,items,node,on_change,vec__30046,attrs){
return (function (e){
var vec__30053 = cljs.core.split_with(((function (map__30051,map__30051__$1,current_value,items,node,on_change,vec__30046,attrs){
return (function (p__30059){
var map__30060 = p__30059;
var map__30060__$1 = ((((!((map__30060 == null)))?(((((map__30060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30060):map__30060);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30060__$1,cljs.core.cst$kw$value);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,current_value);
});})(map__30051,map__30051__$1,current_value,items,node,on_change,vec__30046,attrs))
,items);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30053,(0),null);
var vec__30056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30053,(1),null);
var seq__30057 = cljs.core.seq(vec__30056);
var first__30058 = cljs.core.first(seq__30057);
var seq__30057__$1 = cljs.core.next(seq__30057);
var ___$1 = first__30058;
var after = seq__30057__$1;
var left_option = cljs.core.last(before);
var right_option = cljs.core.first(after);
var pressed_key = e.key;
if(cljs.core.truth_((function (){var fexpr__30062 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["ArrowUp",null,"ArrowDown",null,"ArrowRight",null,"ArrowLeft",null], null), null);
return (fexpr__30062.cljs$core$IFn$_invoke$arity$1 ? fexpr__30062.cljs$core$IFn$_invoke$arity$1(pressed_key) : fexpr__30062.call(null,pressed_key));
})())){
e.preventDefault();
} else {
}

if(cljs.core.truth_((function (){var and__3911__auto__ = (function (){var fexpr__30064 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowUp",null,"ArrowLeft",null], null), null);
return (fexpr__30064.cljs$core$IFn$_invoke$arity$1 ? fexpr__30064.cljs$core$IFn$_invoke$arity$1(pressed_key) : fexpr__30064.call(null,pressed_key));
})();
if(cljs.core.truth_(and__3911__auto__)){
return left_option;
} else {
return and__3911__auto__;
}
})())){
return on_change(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(left_option));
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = (function (){var fexpr__30066 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["ArrowDown",null,"ArrowRight",null], null), null);
return (fexpr__30066.cljs$core$IFn$_invoke$arity$1 ? fexpr__30066.cljs$core$IFn$_invoke$arity$1(pressed_key) : fexpr__30066.call(null,pressed_key));
})();
if(cljs.core.truth_(and__3911__auto__)){
return right_option;
} else {
return and__3911__auto__;
}
})())){
return on_change(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(right_option));
} else {
return null;
}
}
});})(map__30051,map__30051__$1,current_value,items,node,on_change,vec__30046,attrs))
], null)], null),(function (){var iter__4292__auto__ = ((function (map__30051,map__30051__$1,current_value,items,node,on_change,vec__30046,attrs){
return (function zenform$inputs$core$iter__30067(s__30068){
return (new cljs.core.LazySeq(null,((function (map__30051,map__30051__$1,current_value,items,node,on_change,vec__30046,attrs){
return (function (){
var s__30068__$1 = s__30068;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__30068__$1);
if(temp__5535__auto__){
var s__30068__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30068__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__30068__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__30070 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__30069 = (0);
while(true){
if((i__30069 < size__4291__auto__)){
var map__30071 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__30069);
var map__30071__$1 = ((((!((map__30071 == null)))?(((((map__30071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30071):map__30071);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30071__$1,cljs.core.cst$kw$label);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30071__$1,cljs.core.cst$kw$value);
cljs.core.chunk_append(b__30070,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,current_value))?"active":null),cljs.core.cst$kw$on_DASH_click,((function (i__30069,map__30071,map__30071__$1,label,value,c__4290__auto__,size__4291__auto__,b__30070,s__30068__$2,temp__5535__auto__,map__30051,map__30051__$1,current_value,items,node,on_change,vec__30046,attrs){
return (function (){
return on_change(value);
});})(i__30069,map__30071,map__30071__$1,label,value,c__4290__auto__,size__4291__auto__,b__30070,s__30068__$2,temp__5535__auto__,map__30051,map__30051__$1,current_value,items,node,on_change,vec__30046,attrs))
], null),label], null));

var G__30079 = (i__30069 + (1));
i__30069 = G__30079;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30070),zenform$inputs$core$iter__30067(cljs.core.chunk_rest(s__30068__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30070),null);
}
} else {
var map__30073 = cljs.core.first(s__30068__$2);
var map__30073__$1 = ((((!((map__30073 == null)))?(((((map__30073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30073):map__30073);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30073__$1,cljs.core.cst$kw$label);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30073__$1,cljs.core.cst$kw$value);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,current_value))?"active":null),cljs.core.cst$kw$on_DASH_click,((function (map__30073,map__30073__$1,label,value,s__30068__$2,temp__5535__auto__,map__30051,map__30051__$1,current_value,items,node,on_change,vec__30046,attrs){
return (function (){
return on_change(value);
});})(map__30073,map__30073__$1,label,value,s__30068__$2,temp__5535__auto__,map__30051,map__30051__$1,current_value,items,node,on_change,vec__30046,attrs))
], null),label], null),zenform$inputs$core$iter__30067(cljs.core.rest(s__30068__$2)));
}
} else {
return null;
}
break;
}
});})(map__30051,map__30051__$1,current_value,items,node,on_change,vec__30046,attrs))
,null,null));
});})(map__30051,map__30051__$1,current_value,items,node,on_change,vec__30046,attrs))
;
return iter__4292__auto__(items);
})());
};
var G__30078 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__30080__i = 0, G__30080__a = new Array(arguments.length -  0);
while (G__30080__i < G__30080__a.length) {G__30080__a[G__30080__i] = arguments[G__30080__i + 0]; ++G__30080__i;}
  _ = new cljs.core.IndexedSeq(G__30080__a,0,null);
} 
return G__30078__delegate.call(this,_);};
G__30078.cljs$lang$maxFixedArity = 0;
G__30078.cljs$lang$applyTo = (function (arglist__30081){
var _ = cljs.core.seq(arglist__30081);
return G__30078__delegate(_);
});
G__30078.cljs$core$IFn$_invoke$arity$variadic = G__30078__delegate;
return G__30078;
})()
;
;})(node,on_change,vec__30046,attrs))
});

zenform.inputs.core.radio_group.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
zenform.inputs.core.radio_group.cljs$lang$applyTo = (function (seq30042){
var G__30043 = cljs.core.first(seq30042);
var seq30042__$1 = cljs.core.next(seq30042);
var G__30044 = cljs.core.first(seq30042__$1);
var seq30042__$2 = cljs.core.next(seq30042__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30043,G__30044,seq30042__$2);
});

zenform.inputs.core.radio = (function zenform$inputs$core$radio(form_path,path,value){
var node = (function (){var G__30082 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_node,form_path,path], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30082) : re_frame.core.subscribe.call(null,G__30082));
})();
var on_change = ((function (node){
return (function (){
var G__30083 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_set_DASH_value,form_path,path,value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30083) : re_frame.core.dispatch.call(null,G__30083));
});})(node))
;
return ((function (node,on_change){
return (function() { 
var G__30084__delegate = function (_){
var _STAR_node = cljs.core.deref(node);
var v = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(_STAR_node);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zf_DASH_radio,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,on_change,cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,value))?"active":null)], null),(cljs.core.truth_(v)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zf_DASH_radio_DASH_circle], null):null)], null);
};
var G__30084 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__30085__i = 0, G__30085__a = new Array(arguments.length -  0);
while (G__30085__i < G__30085__a.length) {G__30085__a[G__30085__i] = arguments[G__30085__i + 0]; ++G__30085__i;}
  _ = new cljs.core.IndexedSeq(G__30085__a,0,null);
} 
return G__30084__delegate.call(this,_);};
G__30084.cljs$lang$maxFixedArity = 0;
G__30084.cljs$lang$applyTo = (function (arglist__30086){
var _ = cljs.core.seq(arglist__30086);
return G__30084__delegate(_);
});
G__30084.cljs$core$IFn$_invoke$arity$variadic = G__30084__delegate;
return G__30084;
})()
;
;})(node,on_change))
});
