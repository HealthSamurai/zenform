// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__27122){
var vec__27123 = p__27122;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27123,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27123,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__27126 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27126,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27126,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27126,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__27130 = arguments.length;
switch (G__27130) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4006__auto__ = cljs.core.count(a);
var y__4007__auto__ = cljs.core.count(b);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4211__auto__ = (((x == null))?null:x);
var m__4212__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4212__auto__.call(null,x));
} else {
var m__4212__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4212__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4212__auto__.call(null,a,b));
} else {
var m__4212__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4212__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__27132_27156 = clojure.data.equality_partition;
var G__27133_27157 = "null";
var G__27134_27158 = ((function (G__27132_27156,G__27133_27157){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__27132_27156,G__27133_27157))
;
goog.object.set(G__27132_27156,G__27133_27157,G__27134_27158);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__27135_27159 = clojure.data.equality_partition;
var G__27136_27160 = "string";
var G__27137_27161 = ((function (G__27135_27159,G__27136_27160){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__27135_27159,G__27136_27160))
;
goog.object.set(G__27135_27159,G__27136_27160,G__27137_27161);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__27138_27162 = clojure.data.equality_partition;
var G__27139_27163 = "number";
var G__27140_27164 = ((function (G__27138_27162,G__27139_27163){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__27138_27162,G__27139_27163))
;
goog.object.set(G__27138_27162,G__27139_27163,G__27140_27164);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__27141_27165 = clojure.data.equality_partition;
var G__27142_27166 = "array";
var G__27143_27167 = ((function (G__27141_27165,G__27142_27166){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__27141_27165,G__27142_27166))
;
goog.object.set(G__27141_27165,G__27142_27166,G__27143_27167);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__27144_27168 = clojure.data.equality_partition;
var G__27145_27169 = "function";
var G__27146_27170 = ((function (G__27144_27168,G__27145_27169){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__27144_27168,G__27145_27169))
;
goog.object.set(G__27144_27168,G__27145_27169,G__27146_27170);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__27147_27171 = clojure.data.equality_partition;
var G__27148_27172 = "boolean";
var G__27149_27173 = ((function (G__27147_27171,G__27148_27172){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__27147_27171,G__27148_27172))
;
goog.object.set(G__27147_27171,G__27148_27172,G__27149_27173);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__27150_27174 = clojure.data.equality_partition;
var G__27151_27175 = "_";
var G__27152_27176 = ((function (G__27150_27174,G__27151_27175){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__27150_27174,G__27151_27175))
;
goog.object.set(G__27150_27174,G__27151_27175,G__27152_27176);
goog.object.set(clojure.data.Diff,"null",true);

var G__27177_27201 = clojure.data.diff_similar;
var G__27178_27202 = "null";
var G__27179_27203 = ((function (G__27177_27201,G__27178_27202){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__27177_27201,G__27178_27202))
;
goog.object.set(G__27177_27201,G__27178_27202,G__27179_27203);

goog.object.set(clojure.data.Diff,"string",true);

var G__27180_27204 = clojure.data.diff_similar;
var G__27181_27205 = "string";
var G__27182_27206 = ((function (G__27180_27204,G__27181_27205){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__27180_27204,G__27181_27205))
;
goog.object.set(G__27180_27204,G__27181_27205,G__27182_27206);

goog.object.set(clojure.data.Diff,"number",true);

var G__27183_27207 = clojure.data.diff_similar;
var G__27184_27208 = "number";
var G__27185_27209 = ((function (G__27183_27207,G__27184_27208){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__27183_27207,G__27184_27208))
;
goog.object.set(G__27183_27207,G__27184_27208,G__27185_27209);

goog.object.set(clojure.data.Diff,"array",true);

var G__27186_27210 = clojure.data.diff_similar;
var G__27187_27211 = "array";
var G__27188_27212 = ((function (G__27186_27210,G__27187_27211){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__27186_27210,G__27187_27211))
;
goog.object.set(G__27186_27210,G__27187_27211,G__27188_27212);

goog.object.set(clojure.data.Diff,"function",true);

var G__27189_27213 = clojure.data.diff_similar;
var G__27190_27214 = "function";
var G__27191_27215 = ((function (G__27189_27213,G__27190_27214){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__27189_27213,G__27190_27214))
;
goog.object.set(G__27189_27213,G__27190_27214,G__27191_27215);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__27192_27216 = clojure.data.diff_similar;
var G__27193_27217 = "boolean";
var G__27194_27218 = ((function (G__27192_27216,G__27193_27217){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__27192_27216,G__27193_27217))
;
goog.object.set(G__27192_27216,G__27193_27217,G__27194_27218);

goog.object.set(clojure.data.Diff,"_",true);

var G__27195_27219 = clojure.data.diff_similar;
var G__27196_27220 = "_";
var G__27197_27221 = ((function (G__27195_27219,G__27196_27220){
return (function (a,b){
var fexpr__27199 = (function (){var G__27200 = clojure.data.equality_partition(a);
var G__27200__$1 = (((G__27200 instanceof cljs.core.Keyword))?G__27200.fqn:null);
switch (G__27200__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27200__$1)].join('')));

}
})();
return (fexpr__27199.cljs$core$IFn$_invoke$arity$2 ? fexpr__27199.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__27199.call(null,a,b));
});})(G__27195_27219,G__27196_27220))
;
goog.object.set(G__27195_27219,G__27196_27220,G__27197_27221);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
