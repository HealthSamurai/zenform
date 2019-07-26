// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('garden.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
garden.util.format = (function garden$util$format(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27643 = arguments.length;
var i__4500__auto___27644 = (0);
while(true){
if((i__4500__auto___27644 < len__4499__auto___27643)){
args__4502__auto__.push((arguments[i__4500__auto___27644]));

var G__27645 = (i__4500__auto___27644 + (1));
i__4500__auto___27644 = G__27645;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

garden.util.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.util.format.cljs$lang$applyTo = (function (seq27641){
var G__27642 = cljs.core.first(seq27641);
var seq27641__$1 = cljs.core.next(seq27641);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27642,seq27641__$1);
});


/**
 * @interface
 */
garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
garden.util.to_str = (function garden$util$to_str(this$){
if(((!((this$ == null))) && (!((this$.garden$util$ToString$to_str$arity$1 == null))))){
return this$.garden$util$ToString$to_str$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (garden.util.to_str[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (garden.util.to_str["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
});

goog.object.set(garden.util.ToString,"_",true);

var G__27646_27652 = garden.util.to_str;
var G__27647_27653 = "_";
var G__27648_27654 = ((function (G__27646_27652,G__27647_27653){
return (function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
});})(G__27646_27652,G__27647_27653))
;
goog.object.set(G__27646_27652,G__27647_27653,G__27648_27654);

goog.object.set(garden.util.ToString,"null",true);

var G__27649_27655 = garden.util.to_str;
var G__27650_27656 = "null";
var G__27651_27657 = ((function (G__27649_27655,G__27650_27656){
return (function (this$){
return "";
});})(G__27649_27655,G__27650_27656))
;
goog.object.set(G__27649_27655,G__27650_27656,G__27651_27657);
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27659 = arguments.length;
var i__4500__auto___27660 = (0);
while(true){
if((i__4500__auto___27660 < len__4499__auto___27659)){
args__4502__auto__.push((arguments[i__4500__auto___27660]));

var G__27661 = (i__4500__auto___27660 + (1));
i__4500__auto___27660 = G__27661;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.util.to_str,args));
});

garden.util.as_str.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.util.as_str.cljs$lang$applyTo = (function (seq27658){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27658));
});

/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27668 = arguments.length;
var i__4500__auto___27669 = (0);
while(true){
if((i__4500__auto___27669 < len__4499__auto___27668)){
args__4502__auto__.push((arguments[i__4500__auto___27669]));

var G__27670 = (i__4500__auto___27669 + (1));
i__4500__auto___27669 = G__27670;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__27664){
var vec__27665 = p__27664;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27665,(0),null);
var radix__$1 = (function (){var or__3922__auto__ = radix;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.util.string__GT_int.cljs$lang$applyTo = (function (seq27662){
var G__27663 = cljs.core.first(seq27662);
var seq27662__$1 = cljs.core.next(seq27662);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27663,seq27662__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27677 = arguments.length;
var i__4500__auto___27678 = (0);
while(true){
if((i__4500__auto___27678 < len__4499__auto___27677)){
args__4502__auto__.push((arguments[i__4500__auto___27678]));

var G__27679 = (i__4500__auto___27678 + (1));
i__4500__auto___27678 = G__27679;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__27673){
var vec__27674 = p__27673;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27674,(0),null);
var radix__$1 = (function (){var or__3922__auto__ = radix;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.util.int__GT_string.cljs$lang$applyTo = (function (seq27671){
var G__27672 = cljs.core.first(seq27671);
var seq27671__$1 = cljs.core.next(seq27671);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27672,seq27671__$1);
});

/**
 * Return a space separated list of values.
 */
garden.util.space_join = (function garden$util$space_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.util.comma_join = (function garden$util$comma_join(xs){
var ys = (function (){var iter__4292__auto__ = (function garden$util$comma_join_$_iter__27680(s__27681){
return (new cljs.core.LazySeq(null,(function (){
var s__27681__$1 = s__27681;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__27681__$1);
if(temp__5535__auto__){
var s__27681__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27681__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__27681__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__27683 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__27682 = (0);
while(true){
if((i__27682 < size__4291__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__27682);
cljs.core.chunk_append(b__27683,((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)));

var G__27684 = (i__27682 + (1));
i__27682 = G__27684;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27683),garden$util$comma_join_$_iter__27680(cljs.core.chunk_rest(s__27681__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27683),null);
}
} else {
var x = cljs.core.first(s__27681__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)),garden$util$comma_join_$_iter__27680(cljs.core.rest(s__27681__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
garden.util.wrap_quotes = (function garden$util$wrap_quotes(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
garden.util.hash_map_QMARK_ = (function garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) && (!(cljs.core.record_QMARK_(x))));
});
/**
 * Alias to `vector?`.
 */
garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
garden.util.declaration_QMARK_ = garden.util.hash_map_QMARK_;
garden.util.at_rule_QMARK_ = (function garden$util$at_rule_QMARK_(x){
return (x instanceof garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
garden.util.at_media_QMARK_ = (function garden$util$at_media_QMARK_(x){
var and__3911__auto__ = garden.util.at_rule_QMARK_(x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$media);
} else {
return and__3911__auto__;
}
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
garden.util.at_keyframes_QMARK_ = (function garden$util$at_keyframes_QMARK_(x){
var and__3911__auto__ = garden.util.at_rule_QMARK_(x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$keyframes);
} else {
return and__3911__auto__;
}
});
/**
 * True if `x` is a CSS `@import` rule.
 */
garden.util.at_import_QMARK_ = (function garden$util$at_import_QMARK_(x){
var and__3911__auto__ = garden.util.at_rule_QMARK_(x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$import);
} else {
return and__3911__auto__;
}
});
/**
 * Attach a CSS style prefix to s.
 */
garden.util.prefix = (function garden$util$prefix(p,s){
var p__$1 = garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.last(p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
garden.util.vendor_prefix = (function garden$util$vendor_prefix(p,s){
var p__$1 = garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.first(p__$1))){
return garden.util.prefix(p__$1,s);
} else {
return garden.util.prefix([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
garden.util.natural_QMARK_ = (function garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_(n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
garden.util.between_QMARK_ = (function garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__4009__auto__ = a;
var y__4010__auto__ = b;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
var top = (function (){var x__4006__auto__ = a;
var y__4007__auto__ = b;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
garden.util.clip = (function garden$util$clip(a,b,n){
var vec__27685 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27685,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27685,(1),null);
var x__4006__auto__ = a__$1;
var y__4007__auto__ = (function (){var x__4009__auto__ = b__$1;
var y__4010__auto__ = n;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
});
/**
 * Return the average of two or more numbers.
 */
garden.util.average = (function garden$util$average(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27691 = arguments.length;
var i__4500__auto___27692 = (0);
while(true){
if((i__4500__auto___27692 < len__4499__auto___27691)){
args__4502__auto__.push((arguments[i__4500__auto___27692]));

var G__27693 = (i__4500__auto___27692 + (1));
i__4500__auto___27692 = G__27693;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count(more)));
});

garden.util.average.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
garden.util.average.cljs$lang$applyTo = (function (seq27688){
var G__27689 = cljs.core.first(seq27688);
var seq27688__$1 = cljs.core.next(seq27688);
var G__27690 = cljs.core.first(seq27688__$1);
var seq27688__$2 = cljs.core.next(seq27688__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27689,G__27690,seq27688__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27695 = arguments.length;
var i__4500__auto___27696 = (0);
while(true){
if((i__4500__auto___27696 < len__4499__auto___27695)){
args__4502__auto__.push((arguments[i__4500__auto___27696]));

var G__27697 = (i__4500__auto___27696 + (1));
i__4500__auto___27696 = G__27697;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = ((function (v_original_seqs){
return (function garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5533__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5533__auto__){
var rst = temp__5533__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__27698 = (i - (1));
var G__27699 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__27698;
v_seqs__$2 = G__27699;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return garden$util$step(increment(v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step(v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.util.cartesian_product.cljs$lang$applyTo = (function (seq27694){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27694));
});

