// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('garden.color');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('garden.util');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
garden.color.CSSColor = (function (red,green,blue,hue,saturation,lightness,alpha,__meta,__extmap,__hash){
this.red = red;
this.green = green;
this.blue = blue;
this.hue = hue;
this.saturation = saturation;
this.lightness = lightness;
this.alpha = alpha;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
garden.color.CSSColor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

garden.color.CSSColor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k29009,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__29014 = k29009;
var G__29014__$1 = (((G__29014 instanceof cljs.core.Keyword))?G__29014.fqn:null);
switch (G__29014__$1) {
case "red":
return self__.red;

break;
case "green":
return self__.green;

break;
case "blue":
return self__.blue;

break;
case "hue":
return self__.hue;

break;
case "saturation":
return self__.saturation;

break;
case "lightness":
return self__.lightness;

break;
case "alpha":
return self__.alpha;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29009,else__4175__auto__);

}
});

garden.color.CSSColor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer(writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4187__auto__,pr_pair__4189__auto__,"#garden.color.CSSColor{",", ","}",opts__4188__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$red,self__.red],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$green,self__.green],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$blue,self__.blue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hue,self__.hue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$saturation,self__.saturation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$lightness,self__.lightness],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$alpha,self__.alpha],null))], null),self__.__extmap));
});

garden.color.CSSColor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29008){
var self__ = this;
var G__29008__$1 = this;
return (new cljs.core.RecordIter((0),G__29008__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$red,cljs.core.cst$kw$green,cljs.core.cst$kw$blue,cljs.core.cst$kw$hue,cljs.core.cst$kw$saturation,cljs.core.cst$kw$lightness,cljs.core.cst$kw$alpha], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

garden.color.CSSColor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

garden.color.CSSColor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,self__.__hash));
});

garden.color.CSSColor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
});

garden.color.CSSColor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__29015 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (1154778435 ^ cljs.core.hash_unordered_coll(coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
;
return fexpr__29015(this__4168__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

garden.color.CSSColor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29010,other29011){
var self__ = this;
var this29010__$1 = this;
return ((!((other29011 == null))) && ((this29010__$1.constructor === other29011.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29010__$1.red,other29011.red)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29010__$1.green,other29011.green)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29010__$1.blue,other29011.blue)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29010__$1.hue,other29011.hue)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29010__$1.saturation,other29011.saturation)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29010__$1.lightness,other29011.lightness)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29010__$1.alpha,other29011.alpha)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29010__$1.__extmap,other29011.__extmap)));
});

garden.color.CSSColor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$hue,null,cljs.core.cst$kw$saturation,null,cljs.core.cst$kw$green,null,cljs.core.cst$kw$red,null,cljs.core.cst$kw$blue,null,cljs.core.cst$kw$lightness,null,cljs.core.cst$kw$alpha,null], null), null),k__4182__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4182__auto__)),null));
}
});

garden.color.CSSColor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__29008){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__29016 = cljs.core.keyword_identical_QMARK_;
var expr__29017 = k__4180__auto__;
if(cljs.core.truth_((function (){var G__29019 = cljs.core.cst$kw$red;
var G__29020 = expr__29017;
return (pred__29016.cljs$core$IFn$_invoke$arity$2 ? pred__29016.cljs$core$IFn$_invoke$arity$2(G__29019,G__29020) : pred__29016.call(null,G__29019,G__29020));
})())){
return (new garden.color.CSSColor(G__29008,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29021 = cljs.core.cst$kw$green;
var G__29022 = expr__29017;
return (pred__29016.cljs$core$IFn$_invoke$arity$2 ? pred__29016.cljs$core$IFn$_invoke$arity$2(G__29021,G__29022) : pred__29016.call(null,G__29021,G__29022));
})())){
return (new garden.color.CSSColor(self__.red,G__29008,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29023 = cljs.core.cst$kw$blue;
var G__29024 = expr__29017;
return (pred__29016.cljs$core$IFn$_invoke$arity$2 ? pred__29016.cljs$core$IFn$_invoke$arity$2(G__29023,G__29024) : pred__29016.call(null,G__29023,G__29024));
})())){
return (new garden.color.CSSColor(self__.red,self__.green,G__29008,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29025 = cljs.core.cst$kw$hue;
var G__29026 = expr__29017;
return (pred__29016.cljs$core$IFn$_invoke$arity$2 ? pred__29016.cljs$core$IFn$_invoke$arity$2(G__29025,G__29026) : pred__29016.call(null,G__29025,G__29026));
})())){
return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,G__29008,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29027 = cljs.core.cst$kw$saturation;
var G__29028 = expr__29017;
return (pred__29016.cljs$core$IFn$_invoke$arity$2 ? pred__29016.cljs$core$IFn$_invoke$arity$2(G__29027,G__29028) : pred__29016.call(null,G__29027,G__29028));
})())){
return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,G__29008,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29029 = cljs.core.cst$kw$lightness;
var G__29030 = expr__29017;
return (pred__29016.cljs$core$IFn$_invoke$arity$2 ? pred__29016.cljs$core$IFn$_invoke$arity$2(G__29029,G__29030) : pred__29016.call(null,G__29029,G__29030));
})())){
return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,G__29008,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29031 = cljs.core.cst$kw$alpha;
var G__29032 = expr__29017;
return (pred__29016.cljs$core$IFn$_invoke$arity$2 ? pred__29016.cljs$core$IFn$_invoke$arity$2(G__29031,G__29032) : pred__29016.call(null,G__29031,G__29032));
})())){
return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,G__29008,self__.__meta,self__.__extmap,null));
} else {
return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4180__auto__,G__29008),null));
}
}
}
}
}
}
}
});

garden.color.CSSColor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$red,self__.red,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$green,self__.green,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$blue,self__.blue,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$hue,self__.hue,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$saturation,self__.saturation,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$lightness,self__.lightness,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$alpha,self__.alpha,null))], null),self__.__extmap));
});

garden.color.CSSColor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__29008){
var self__ = this;
var this__4171__auto____$1 = this;
return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,G__29008,self__.__extmap,self__.__hash));
});

garden.color.CSSColor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

garden.color.CSSColor.prototype.call = (function() {
var G__29034 = null;
var G__29034__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$;
});
var G__29034__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$,k);
});
var G__29034__3 = (function (self__,k,missing){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(this$,k,missing);
});
G__29034 = function(self__,k,missing){
switch(arguments.length){
case 1:
return G__29034__1.call(this,self__);
case 2:
return G__29034__2.call(this,self__,k);
case 3:
return G__29034__3.call(this,self__,k,missing);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__29034.cljs$core$IFn$_invoke$arity$1 = G__29034__1;
G__29034.cljs$core$IFn$_invoke$arity$2 = G__29034__2;
G__29034.cljs$core$IFn$_invoke$arity$3 = G__29034__3;
return G__29034;
})()
;

garden.color.CSSColor.prototype.apply = (function (self__,args29013){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args29013)));
});

garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return this$;
});

garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$,k);
});

garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,missing){
var self__ = this;
var this$ = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(this$,k,missing);
});

garden.color.CSSColor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$red,cljs.core.cst$sym$green,cljs.core.cst$sym$blue,cljs.core.cst$sym$hue,cljs.core.cst$sym$saturation,cljs.core.cst$sym$lightness,cljs.core.cst$sym$alpha], null);
});

garden.color.CSSColor.cljs$lang$type = true;

garden.color.CSSColor.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"garden.color/CSSColor",null,(1),null));
});

garden.color.CSSColor.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"garden.color/CSSColor");
});

/**
 * Positional factory function for garden.color/CSSColor.
 */
garden.color.__GT_CSSColor = (function garden$color$__GT_CSSColor(red,green,blue,hue,saturation,lightness,alpha){
return (new garden.color.CSSColor(red,green,blue,hue,saturation,lightness,alpha,null,null,null));
});

/**
 * Factory function for garden.color/CSSColor, taking a map of keywords to field values.
 */
garden.color.map__GT_CSSColor = (function garden$color$map__GT_CSSColor(G__29012){
return (new garden.color.CSSColor(cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(G__29012),cljs.core.cst$kw$green.cljs$core$IFn$_invoke$arity$1(G__29012),cljs.core.cst$kw$blue.cljs$core$IFn$_invoke$arity$1(G__29012),cljs.core.cst$kw$hue.cljs$core$IFn$_invoke$arity$1(G__29012),cljs.core.cst$kw$saturation.cljs$core$IFn$_invoke$arity$1(G__29012),cljs.core.cst$kw$lightness.cljs$core$IFn$_invoke$arity$1(G__29012),cljs.core.cst$kw$alpha.cljs$core$IFn$_invoke$arity$1(G__29012),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29012,cljs.core.cst$kw$red,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$green,cljs.core.cst$kw$blue,cljs.core.cst$kw$hue,cljs.core.cst$kw$saturation,cljs.core.cst$kw$lightness,cljs.core.cst$kw$alpha], 0))),null));
});

garden.color.as_color = garden.color.map__GT_CSSColor;
/**
 * Create an RGB color.
 */
garden.color.rgb = (function garden$color$rgb(var_args){
var G__29037 = arguments.length;
switch (G__29037) {
case 1:
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return garden.color.rgb.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

garden.color.rgb.cljs$core$IFn$_invoke$arity$1 = (function (p__29038){
var vec__29039 = p__29038;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29039,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29039,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29039,(2),null);
var vs = vec__29039;
if(cljs.core.every_QMARK_(((function (vec__29039,r,g,b,vs){
return (function (p1__29035_SHARP_){
return garden.util.between_QMARK_(p1__29035_SHARP_,(0),(255));
});})(vec__29039,r,g,b,vs))
,vs)){
var G__29042 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$red,r,cljs.core.cst$kw$green,g,cljs.core.cst$kw$blue,b], null);
return (garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__29042) : garden.color.as_color.call(null,G__29042));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("RGB values must be between 0 and 255",cljs.core.PersistentArrayMap.EMPTY);
}
});

garden.color.rgb.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});

garden.color.rgb.cljs$lang$maxFixedArity = 3;

/**
 * Create an RGBA color.
 */
garden.color.rgba = (function garden$color$rgba(var_args){
var G__29045 = arguments.length;
switch (G__29045) {
case 1:
return garden.color.rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return garden.color.rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

garden.color.rgba.cljs$core$IFn$_invoke$arity$1 = (function (p__29046){
var vec__29047 = p__29046;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29047,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29047,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29047,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29047,(3),null);
if(cljs.core.truth_(garden.util.between_QMARK_(a,(0),(1)))){
var G__29050 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null)),cljs.core.cst$kw$alpha,a);
return (garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__29050) : garden.color.as_color.call(null,G__29050));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Alpha value must be between 0 and 1",cljs.core.PersistentArrayMap.EMPTY);
}
});

garden.color.rgba.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return garden.color.rgba.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,a], null));
});

garden.color.rgba.cljs$lang$maxFixedArity = 4;

/**
 * Create an HSL color.
 */
garden.color.hsl = (function garden$color$hsl(var_args){
var G__29054 = arguments.length;
switch (G__29054) {
case 1:
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return garden.color.hsl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

garden.color.hsl.cljs$core$IFn$_invoke$arity$1 = (function (p__29055){
var vec__29056 = p__29055;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29056,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29056,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29056,(2),null);
var vec__29059 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__29056,h,s,l){
return (function (p1__29052_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(p1__29052_SHARP_,cljs.core.cst$kw$magnitude,p1__29052_SHARP_);
});})(vec__29056,h,s,l))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29059,(0),null);
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29059,(1),null);
var l__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29059,(2),null);
if(cljs.core.truth_((function (){var and__3911__auto__ = garden.util.between_QMARK_(s__$1,(0),(100));
if(cljs.core.truth_(and__3911__auto__)){
return garden.util.between_QMARK_(l__$1,(0),(100));
} else {
return and__3911__auto__;
}
})())){
var G__29062 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hue,cljs.core.mod(h__$1,(360)),cljs.core.cst$kw$saturation,s__$1,cljs.core.cst$kw$lightness,l__$1], null);
return (garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__29062) : garden.color.as_color.call(null,G__29062));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Saturation and lightness must be between 0(%) and 100(%)",cljs.core.PersistentArrayMap.EMPTY);
}
});

garden.color.hsl.cljs$core$IFn$_invoke$arity$3 = (function (h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

garden.color.hsl.cljs$lang$maxFixedArity = 3;

/**
 * Create an HSLA color.
 */
garden.color.hsla = (function garden$color$hsla(var_args){
var G__29065 = arguments.length;
switch (G__29065) {
case 1:
return garden.color.hsla.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return garden.color.hsla.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

garden.color.hsla.cljs$core$IFn$_invoke$arity$1 = (function (p__29066){
var vec__29067 = p__29066;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29067,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29067,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29067,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29067,(3),null);
if(cljs.core.truth_(garden.util.between_QMARK_(a,(0),(1)))){
var G__29070 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null)),cljs.core.cst$kw$alpha,a);
return (garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__29070) : garden.color.as_color.call(null,G__29070));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Alpha value must be between 0 and 1",cljs.core.PersistentArrayMap.EMPTY);
}
});

garden.color.hsla.cljs$core$IFn$_invoke$arity$4 = (function (h,s,l,a){
return garden.color.hsla.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l,a], null));
});

garden.color.hsla.cljs$lang$maxFixedArity = 4;

/**
 * Return true if color is an RGB color.
 */
garden.color.rgb_QMARK_ = (function garden$color$rgb_QMARK_(color){
return ((cljs.core.map_QMARK_(color)) && (cljs.core.every_QMARK_(color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$green,null,cljs.core.cst$kw$red,null,cljs.core.cst$kw$blue,null], null), null))));
});
/**
 * Return true if color is an HSL color.
 */
garden.color.hsl_QMARK_ = (function garden$color$hsl_QMARK_(color){
return ((cljs.core.map_QMARK_(color)) && (cljs.core.every_QMARK_(color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hue,null,cljs.core.cst$kw$saturation,null,cljs.core.cst$kw$lightness,null], null), null))));
});
/**
 * Return true if color is an HSLA color.
 */
garden.color.hsla_QMARK_ = (function garden$color$hsla_QMARK_(color){
return ((cljs.core.map_QMARK_(color)) && (cljs.core.every_QMARK_(color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$hue,null,cljs.core.cst$kw$saturation,null,cljs.core.cst$kw$lightness,null,cljs.core.cst$kw$alpha,null], null), null))));
});
/**
 * Return true if x is a color.
 */
garden.color.color_QMARK_ = (function garden$color$color_QMARK_(x){
var or__3922__auto__ = garden.color.rgb_QMARK_(x);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return garden.color.hsl_QMARK_(x);
}
});
/**
 * Regular expression for matching a hexadecimal color.
 *           Matches hexadecimal colors of length three or six possibly
 *           lead by a "#". The color portion is captured.
 */
garden.color.hex_re = /#?([\da-fA-F]{6}|[\da-fA-F]{3})/;
/**
 * Returns true if x is a hexadecimal color.
 */
garden.color.hex_QMARK_ = (function garden$color$hex_QMARK_(x){
return cljs.core.boolean$((function (){var and__3911__auto__ = typeof x === 'string';
if(and__3911__auto__){
return cljs.core.re_matches(garden.color.hex_re,x);
} else {
return and__3911__auto__;
}
})());
});
/**
 * Convert a hexadecimal color to an RGB color map.
 */
garden.color.hex__GT_rgb = (function garden$color$hex__GT_rgb(s){
var temp__5535__auto__ = cljs.core.re_matches(garden.color.hex_re,s);
if(cljs.core.truth_(temp__5535__auto__)){
var vec__29074 = temp__5535__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29074,(0),null);
var hex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29074,(1),null);
var hex__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(hex)))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (vec__29074,_,hex,temp__5535__auto__){
return (function (p1__29072_SHARP_){
return (new cljs.core.List(null,p1__29072_SHARP_,(new cljs.core.List(null,p1__29072_SHARP_,null,(1),null)),(2),null));
});})(vec__29074,_,hex,temp__5535__auto__))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hex], 0))):hex);
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hex__$1,vec__29074,_,hex,temp__5535__auto__){
return (function (p1__29073_SHARP_){
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(p1__29073_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(16)], 0));
});})(hex__$1,vec__29074,_,hex,temp__5535__auto__))
,cljs.core.re_seq(/[\da-fA-F]{2}/,hex__$1)));
} else {
return null;
}
});
/**
 * Convert an RGB color map to a hexadecimal color.
 */
garden.color.rgb__GT_hex = (function garden$color$rgb__GT_hex(p__29077){
var map__29078 = p__29077;
var map__29078__$1 = ((((!((map__29078 == null)))?(((((map__29078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29078):map__29078);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29078__$1,cljs.core.cst$kw$red);
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29078__$1,cljs.core.cst$kw$green);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29078__$1,cljs.core.cst$kw$blue);
var hex_part = ((function (map__29078,map__29078__$1,r,g,b){
return (function garden$color$rgb__GT_hex_$_hex_part(v){
return clojure.string.replace(garden.util.format.cljs$core$IFn$_invoke$arity$variadic("%2s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(16)], 0))], 0))," ","0");
});})(map__29078,map__29078__$1,r,g,b))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"#",cljs.core.map.cljs$core$IFn$_invoke$arity$2(hex_part,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null)));
});
garden.color.trim_one = (function garden$color$trim_one(x){
if(((1) < x)){
return (1);
} else {
return x;
}
});
/**
 * Convert an RGB color map to an HSL color map.
 */
garden.color.rgb__GT_hsl = (function garden$color$rgb__GT_hsl(p__29081){
var map__29082 = p__29081;
var map__29082__$1 = ((((!((map__29082 == null)))?(((((map__29082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29082):map__29082);
var color = map__29082__$1;
var red = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29082__$1,cljs.core.cst$kw$red);
var green = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29082__$1,cljs.core.cst$kw$green);
var blue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29082__$1,cljs.core.cst$kw$blue);
if(cljs.core.truth_(garden.color.hsl_QMARK_(color))){
return color;
} else {
var vec__29084 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__29082,map__29082__$1,color,red,green,blue){
return (function (p1__29080_SHARP_){
return (p1__29080_SHARP_ / (255));
});})(map__29082,map__29082__$1,color,red,green,blue))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [red,green,blue], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29084,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29084,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29084,(2),null);
var mx = (function (){var x__4006__auto__ = (function (){var x__4006__auto__ = r;
var y__4007__auto__ = g;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var y__4007__auto__ = b;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
var mn = (function (){var x__4009__auto__ = (function (){var x__4009__auto__ = r;
var y__4010__auto__ = g;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
var y__4010__auto__ = b;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
var d = (mx - mn);
var h = (function (){var pred__29087 = cljs.core._EQ_;
var expr__29088 = mx;
if(cljs.core.truth_((pred__29087.cljs$core$IFn$_invoke$arity$2 ? pred__29087.cljs$core$IFn$_invoke$arity$2(mn,expr__29088) : pred__29087.call(null,mn,expr__29088)))){
return (0);
} else {
if(cljs.core.truth_((pred__29087.cljs$core$IFn$_invoke$arity$2 ? pred__29087.cljs$core$IFn$_invoke$arity$2(r,expr__29088) : pred__29087.call(null,r,expr__29088)))){
return ((60) * ((g - b) / d));
} else {
if(cljs.core.truth_((pred__29087.cljs$core$IFn$_invoke$arity$2 ? pred__29087.cljs$core$IFn$_invoke$arity$2(g,expr__29088) : pred__29087.call(null,g,expr__29088)))){
return (((60) * ((b - r) / d)) + (120));
} else {
if(cljs.core.truth_((pred__29087.cljs$core$IFn$_invoke$arity$2 ? pred__29087.cljs$core$IFn$_invoke$arity$2(b,expr__29088) : pred__29087.call(null,b,expr__29088)))){
return (((60) * ((r - g) / d)) + (240));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29088)].join('')));
}
}
}
}
})();
var l = garden.color.trim_one(((mx + mn) / (2)));
var s = garden.color.trim_one(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,mn))?(0):(((l < 0.5))?(d / ((2) * l)):(d / ((2) - ((2) * l)))
)));
return garden.color.hsl.cljs$core$IFn$_invoke$arity$3(cljs.core.mod(h,(360)),((100) * s),((100) * l));
}
});
/**
 * Convert an HSL color map to an RGB color map.
 */
garden.color.hsl__GT_rgb = (function garden$color$hsl__GT_rgb(p__29091){
var map__29092 = p__29091;
var map__29092__$1 = ((((!((map__29092 == null)))?(((((map__29092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29092):map__29092);
var color = map__29092__$1;
var hue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29092__$1,cljs.core.cst$kw$hue);
var saturation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29092__$1,cljs.core.cst$kw$saturation);
var lightness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29092__$1,cljs.core.cst$kw$lightness);
if(cljs.core.truth_(garden.color.rgb_QMARK_(color))){
return color;
} else {
var h = (hue / 360.0);
var s = (saturation / 100.0);
var l = (lightness / 100.0);
var m2 = (((l <= 0.5))?(l * (s + (1))):((l + s) - (l * s)));
var m1 = (((2) * l) - m2);
var vec__29094 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (h,s,l,m2,m1,map__29092,map__29092__$1,color,hue,saturation,lightness){
return (function (p1__29090_SHARP_){
var G__29097 = (p1__29090_SHARP_ * (255));
return Math.round(G__29097);
});})(h,s,l,m2,m1,map__29092,map__29092__$1,color,hue,saturation,lightness))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29098 = m1;
var G__29099 = m2;
var G__29100 = (h + (1.0 / (3)));
return (garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3 ? garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3(G__29098,G__29099,G__29100) : garden.color.hue__GT_rgb.call(null,G__29098,G__29099,G__29100));
})(),(garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3 ? garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3(m1,m2,h) : garden.color.hue__GT_rgb.call(null,m1,m2,h)),(function (){var G__29101 = m1;
var G__29102 = m2;
var G__29103 = (h - (1.0 / (3)));
return (garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3 ? garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3(G__29101,G__29102,G__29103) : garden.color.hue__GT_rgb.call(null,G__29101,G__29102,G__29103));
})()], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29094,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29094,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29094,(2),null);
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
}
});
garden.color.hue__GT_rgb = (function garden$color$hue__GT_rgb(m1,m2,h){
var h__$1 = (((h < (0)))?(h + (1)):(((h > (1)))?(h - (1)):h
));
if((((6) * h__$1) < (1))){
return (m1 + (((m2 - m1) * h__$1) * (6)));
} else {
if((((2) * h__$1) < (1))){
return m2;
} else {
if((((3) * h__$1) < (2))){
return (m1 + (((m2 - m1) * ((2.0 / (3)) - h__$1)) * (6)));
} else {
return m1;

}
}
}
});
/**
 * Convert an HSL color map to a hexadecimal string.
 */
garden.color.hsl__GT_hex = (function garden$color$hsl__GT_hex(color){
return garden.color.rgb__GT_hex(garden.color.hsl__GT_rgb(color));
});
/**
 * Convert a hexadecimal color to an HSL color.
 */
garden.color.hex__GT_hsl = (function garden$color$hex__GT_hsl(color){
return garden.color.rgb__GT_hsl(garden.color.hex__GT_rgb(color));
});
garden.color.percent_clip = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(garden.util.clip,(0),(100));
garden.color.zero_to_one_clip = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(garden.util.clip,0.0,1.0);
garden.color.rgb_clip = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(garden.util.clip,(0),(255));
/**
 * Convert a color to a hexadecimal string.
 */
garden.color.as_hex = (function garden$color$as_hex(x){
if(cljs.core.truth_(garden.color.hex_QMARK_(x))){
return x;
} else {
if(cljs.core.truth_(garden.color.rgb_QMARK_(x))){
return garden.color.rgb__GT_hex(x);
} else {
if(cljs.core.truth_(garden.color.hsl_QMARK_(x))){
return garden.color.hsl__GT_hex(x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," to a color."].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
});
/**
 * Convert a color to a RGB.
 */
garden.color.as_rgb = (function garden$color$as_rgb(x){
if(cljs.core.truth_(garden.color.rgb_QMARK_(x))){
return x;
} else {
if(cljs.core.truth_(garden.color.hsl_QMARK_(x))){
return garden.color.hsl__GT_rgb(x);
} else {
if(cljs.core.truth_(garden.color.hex_QMARK_(x))){
return garden.color.hex__GT_rgb(x);
} else {
if(typeof x === 'number'){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.color.rgb_clip,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x,x], null)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," to a color."].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
});
/**
 * Convert a color to a HSL.
 */
garden.color.as_hsl = (function garden$color$as_hsl(x){
if(cljs.core.truth_(garden.color.hsl_QMARK_(x))){
return x;
} else {
if(cljs.core.truth_(garden.color.rgb_QMARK_(x))){
return garden.color.rgb__GT_hsl(x);
} else {
if(cljs.core.truth_(garden.color.hex_QMARK_(x))){
return garden.color.hex__GT_hsl(x);
} else {
if(typeof x === 'number'){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(garden.color.percent_clip.cljs$core$IFn$_invoke$arity$1 ? garden.color.percent_clip.cljs$core$IFn$_invoke$arity$1(x) : garden.color.percent_clip.call(null,x)),(garden.color.percent_clip.cljs$core$IFn$_invoke$arity$1 ? garden.color.percent_clip.cljs$core$IFn$_invoke$arity$1(x) : garden.color.percent_clip.call(null,x))], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," to a color."].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
});
/**
 * Converts a color to HSLA. Assumes an alpha value of 1.00 unless one is
 *   currently set on color.
 */
garden.color.as_hsla = (function garden$color$as_hsla(color){
var current_alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$3(color,cljs.core.cst$kw$alpha,1.0);
if(cljs.core.truth_(garden.color.hsla_QMARK_(color))){
return color;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(garden.color.as_hsl(color),cljs.core.cst$kw$alpha,current_alpha);
}
});
garden.color.restrict_rgb = (function garden$color$restrict_rgb(m){
return cljs.core.select_keys(m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$red,cljs.core.cst$kw$green,cljs.core.cst$kw$blue], null));
});
garden.color.make_color_operation = (function garden$color$make_color_operation(op){
return (function() {
var garden$color$make_color_operation_$_color_op = null;
var garden$color$make_color_operation_$_color_op__1 = (function (a){
return a;
});
var garden$color$make_color_operation_$_color_op__2 = (function (a,b){
var o = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(garden.color.rgb_clip,op);
var a__$1 = garden.color.restrict_rgb(garden.color.as_rgb(a));
var b__$1 = garden.color.restrict_rgb(garden.color.as_rgb(b));
var G__29104 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(o,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,b__$1], 0));
return (garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__29104) : garden.color.as_color.call(null,G__29104));
});
var garden$color$make_color_operation_$_color_op__3 = (function() { 
var G__29105__delegate = function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(garden$color$make_color_operation_$_color_op,garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$2(a,b),more);
};
var G__29105 = function (a,b,var_args){
var more = null;
if (arguments.length > 2) {
var G__29106__i = 0, G__29106__a = new Array(arguments.length -  2);
while (G__29106__i < G__29106__a.length) {G__29106__a[G__29106__i] = arguments[G__29106__i + 2]; ++G__29106__i;}
  more = new cljs.core.IndexedSeq(G__29106__a,0,null);
} 
return G__29105__delegate.call(this,a,b,more);};
G__29105.cljs$lang$maxFixedArity = 2;
G__29105.cljs$lang$applyTo = (function (arglist__29107){
var a = cljs.core.first(arglist__29107);
arglist__29107 = cljs.core.next(arglist__29107);
var b = cljs.core.first(arglist__29107);
var more = cljs.core.rest(arglist__29107);
return G__29105__delegate(a,b,more);
});
G__29105.cljs$core$IFn$_invoke$arity$variadic = G__29105__delegate;
return G__29105;
})()
;
garden$color$make_color_operation_$_color_op = function(a,b,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return garden$color$make_color_operation_$_color_op__1.call(this,a);
case 2:
return garden$color$make_color_operation_$_color_op__2.call(this,a,b);
default:
var G__29108 = null;
if (arguments.length > 2) {
var G__29109__i = 0, G__29109__a = new Array(arguments.length -  2);
while (G__29109__i < G__29109__a.length) {G__29109__a[G__29109__i] = arguments[G__29109__i + 2]; ++G__29109__i;}
G__29108 = new cljs.core.IndexedSeq(G__29109__a,0,null);
}
return garden$color$make_color_operation_$_color_op__3.cljs$core$IFn$_invoke$arity$variadic(a,b, G__29108);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
garden$color$make_color_operation_$_color_op.cljs$lang$maxFixedArity = 2;
garden$color$make_color_operation_$_color_op.cljs$lang$applyTo = garden$color$make_color_operation_$_color_op__3.cljs$lang$applyTo;
garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$1 = garden$color$make_color_operation_$_color_op__1;
garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$2 = garden$color$make_color_operation_$_color_op__2;
garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$variadic = garden$color$make_color_operation_$_color_op__3.cljs$core$IFn$_invoke$arity$variadic;
return garden$color$make_color_operation_$_color_op;
})()
});
/**
 * Add the RGB components of two or more colors.
 */
garden.color.color_PLUS_ = garden.color.make_color_operation(cljs.core._PLUS_);
/**
 * Subtract the RGB components of two or more colors.
 */
garden.color.color_ = garden.color.make_color_operation(cljs.core._);
/**
 * Multiply the RGB components of two or more colors.
 */
garden.color.color_STAR_ = garden.color.make_color_operation(cljs.core._STAR_);
/**
 * Multiply the RGB components of two or more colors.
 */
garden.color.color_div = garden.color.make_color_operation(cljs.core._SLASH_);
garden.color.update_hsla_field = (function garden$color$update_hsla_field(color,field,f,v){
var v__$1 = cljs.core.cst$kw$magnitude.cljs$core$IFn$_invoke$arity$2(v,v);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(garden.color.as_hsla(color),field,f,v__$1);
});
/**
 * Rotates the hue value of a given color by amount.
 */
garden.color.rotate_hue = (function garden$color$rotate_hue(color,amount){
return garden.color.update_hsla_field(color,cljs.core.cst$kw$hue,cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__29110_SHARP_){
return cljs.core.mod(p1__29110_SHARP_,(360));
}),cljs.core._PLUS_),amount);
});
/**
 * Increase the saturation value of a given color by amount.
 */
garden.color.saturate = (function garden$color$saturate(color,amount){
return garden.color.update_hsla_field(color,cljs.core.cst$kw$saturation,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(garden.color.percent_clip,cljs.core._PLUS_),amount);
});
/**
 * Decrease the saturation value of a given color by amount.
 */
garden.color.desaturate = (function garden$color$desaturate(color,amount){
return garden.color.update_hsla_field(color,cljs.core.cst$kw$saturation,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(garden.color.percent_clip,cljs.core._),amount);
});
/**
 * Increase the lightness value a given color by amount.
 */
garden.color.lighten = (function garden$color$lighten(color,amount){
return garden.color.update_hsla_field(color,cljs.core.cst$kw$lightness,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(garden.color.percent_clip,cljs.core._PLUS_),amount);
});
/**
 * Decrease the lightness value a given color by amount.
 */
garden.color.darken = (function garden$color$darken(color,amount){
return garden.color.update_hsla_field(color,cljs.core.cst$kw$lightness,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(garden.color.percent_clip,cljs.core._),amount);
});
/**
 * Decreases the alpha value of a given color by amount.
 */
garden.color.transparentize = (function garden$color$transparentize(color,amount){
return garden.color.update_hsla_field(color,cljs.core.cst$kw$alpha,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(garden.color.zero_to_one_clip,cljs.core._),amount);
});
/**
 * Increases the alpha value of a given color by amount.
 */
garden.color.opacify = (function garden$color$opacify(color,amount){
return garden.color.update_hsla_field(color,cljs.core.cst$kw$alpha,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(garden.color.zero_to_one_clip,cljs.core._PLUS_),amount);
});
/**
 * Return the inversion of a color.
 */
garden.color.invert = (function garden$color$invert(color){
var G__29111 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$red,(255),cljs.core.cst$kw$green,(255),cljs.core.cst$kw$blue,(255)], null),garden.color.as_rgb(color)], 0));
return (garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__29111) : garden.color.as_color.call(null,G__29111));
});
/**
 * Mix two or more colors by averaging their RGB channels.
 */
garden.color.mix = (function garden$color$mix(var_args){
var G__29116 = arguments.length;
switch (G__29116) {
case 2:
return garden.color.mix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___29119 = arguments.length;
var i__4500__auto___29120 = (0);
while(true){
if((i__4500__auto___29120 < len__4499__auto___29119)){
args_arr__4514__auto__.push((arguments[i__4500__auto___29120]));

var G__29121 = (i__4500__auto___29120 + (1));
i__4500__auto___29120 = G__29121;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return garden.color.mix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

garden.color.mix.cljs$core$IFn$_invoke$arity$2 = (function (color_1,color_2){
var c1 = garden.color.restrict_rgb(garden.color.as_rgb(color_1));
var c2 = garden.color.restrict_rgb(garden.color.as_rgb(color_2));
var G__29117 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(garden.util.average,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c1,c2], 0));
return (garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__29117) : garden.color.as_color.call(null,G__29117));
});

garden.color.mix.cljs$core$IFn$_invoke$arity$variadic = (function (color_1,color_2,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(garden.color.mix,garden.color.mix.cljs$core$IFn$_invoke$arity$2(color_1,color_2),more);
});

/** @this {Function} */
garden.color.mix.cljs$lang$applyTo = (function (seq29113){
var G__29114 = cljs.core.first(seq29113);
var seq29113__$1 = cljs.core.next(seq29113);
var G__29115 = cljs.core.first(seq29113__$1);
var seq29113__$2 = cljs.core.next(seq29113__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29114,G__29115,seq29113__$2);
});

garden.color.mix.cljs$lang$maxFixedArity = (2);

/**
 * Return the complement of a color.
 */
garden.color.complement = (function garden$color$complement(color){
return garden.color.rotate_hue(color,(180));
});
garden.color.hue_rotations = (function garden$color$hue_rotations(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29124 = arguments.length;
var i__4500__auto___29125 = (0);
while(true){
if((i__4500__auto___29125 < len__4499__auto___29124)){
args__4502__auto__.push((arguments[i__4500__auto___29125]));

var G__29126 = (i__4500__auto___29125 + (1));
i__4500__auto___29125 = G__29126;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic = (function (color,amounts){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(garden.color.rotate_hue,color),amounts);
});

garden.color.hue_rotations.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.color.hue_rotations.cljs$lang$applyTo = (function (seq29122){
var G__29123 = cljs.core.first(seq29122);
var seq29122__$1 = cljs.core.next(seq29122);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29123,seq29122__$1);
});

/**
 * Given a color return a triple of colors which are 0, 30, and 60
 *   degrees clockwise from it. If a second falsy argument is passed the
 *   returned values will be in a counter-clockwise direction.
 */
garden.color.analogous = (function garden$color$analogous(var_args){
var G__29128 = arguments.length;
switch (G__29128) {
case 1:
return garden.color.analogous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.color.analogous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

garden.color.analogous.cljs$core$IFn$_invoke$arity$1 = (function (color){
return garden.color.analogous.cljs$core$IFn$_invoke$arity$2(color,true);
});

garden.color.analogous.cljs$core$IFn$_invoke$arity$2 = (function (color,clockwise_QMARK_){
var sign = (cljs.core.truth_(clockwise_QMARK_)?cljs.core._PLUS_:cljs.core._);
return garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic(color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),(sign.cljs$core$IFn$_invoke$arity$1 ? sign.cljs$core$IFn$_invoke$arity$1((30)) : sign.call(null,(30))),(sign.cljs$core$IFn$_invoke$arity$1 ? sign.cljs$core$IFn$_invoke$arity$1((60)) : sign.call(null,(60)))], 0));
});

garden.color.analogous.cljs$lang$maxFixedArity = 2;

/**
 * Given a color return a triple of colors which are equidistance apart
 *   on the color wheel.
 */
garden.color.triad = (function garden$color$triad(color){
return garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic(color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),(120),(240)], 0));
});
/**
 * Given a color return a triple of the color and the two colors on
 *   either side of it's complement.
 */
garden.color.split_complement = (function garden$color$split_complement(var_args){
var G__29131 = arguments.length;
switch (G__29131) {
case 1:
return garden.color.split_complement.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.color.split_complement.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

garden.color.split_complement.cljs$core$IFn$_invoke$arity$1 = (function (color){
return garden.color.split_complement.cljs$core$IFn$_invoke$arity$2(color,(130));
});

garden.color.split_complement.cljs$core$IFn$_invoke$arity$2 = (function (color,distance_from_complement){
var d = garden.util.clip((1),(179),distance_from_complement);
return garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic(color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),d,(- d)], 0));
});

garden.color.split_complement.cljs$lang$maxFixedArity = 2;

/**
 * Given a color return a quadruple of four colors which are
 *   equidistance on the color wheel (ie. a pair of complements). An
 *   optional angle may be given for color of the second complement in the
 *   pair (this defaults to 90 when only color is passed).
 */
garden.color.tetrad = (function garden$color$tetrad(var_args){
var G__29134 = arguments.length;
switch (G__29134) {
case 1:
return garden.color.tetrad.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.color.tetrad.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

garden.color.tetrad.cljs$core$IFn$_invoke$arity$1 = (function (color){
return garden.color.tetrad.cljs$core$IFn$_invoke$arity$2(color,(90));
});

garden.color.tetrad.cljs$core$IFn$_invoke$arity$2 = (function (color,angle){
var a = garden.util.clip((1),(90),(function (){var G__29135 = cljs.core.cst$kw$magnitude.cljs$core$IFn$_invoke$arity$2(angle,angle);
return Math.abs(G__29135);
})());
var color_2 = garden.color.rotate_hue(color,a);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.color.rotate_hue(color,(0)),garden.color.complement(color),color_2,garden.color.complement(color_2)], null);
});

garden.color.tetrad.cljs$lang$maxFixedArity = 2;

/**
 * Given a color return a list of shades from lightest to darkest by
 *   a step. By default the step is 10. White and black are excluded from
 *   the returned list.
 */
garden.color.shades = (function garden$color$shades(var_args){
var G__29138 = arguments.length;
switch (G__29138) {
case 1:
return garden.color.shades.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.color.shades.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

garden.color.shades.cljs$core$IFn$_invoke$arity$1 = (function (color){
return garden.color.shades.cljs$core$IFn$_invoke$arity$2(color,(10));
});

garden.color.shades.cljs$core$IFn$_invoke$arity$2 = (function (color,step){
var c = garden.color.as_hsl(color);
var iter__4292__auto__ = ((function (c){
return (function garden$color$iter__29139(s__29140){
return (new cljs.core.LazySeq(null,((function (c){
return (function (){
var s__29140__$1 = s__29140;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__29140__$1);
if(temp__5535__auto__){
var s__29140__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29140__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__29140__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__29142 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__29141 = (0);
while(true){
if((i__29141 < size__4291__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__29141);
cljs.core.chunk_append(b__29142,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,cljs.core.cst$kw$lightness,(i * step)));

var G__29145 = (i__29141 + (1));
i__29141 = G__29145;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29142),garden$color$iter__29139(cljs.core.chunk_rest(s__29140__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29142),null);
}
} else {
var i = cljs.core.first(s__29140__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,cljs.core.cst$kw$lightness,(i * step)),garden$color$iter__29139(cljs.core.rest(s__29140__$2)));
}
} else {
return null;
}
break;
}
});})(c))
,null,null));
});})(c))
;
return iter__4292__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(function (){var G__29143 = (100.0 / step);
return Math.floor(G__29143);
})()));
});

garden.color.shades.cljs$lang$maxFixedArity = 2;

garden.color.color_name__GT_hex = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$aquamarine,cljs.core.cst$kw$lime,cljs.core.cst$kw$deepskyblue,cljs.core.cst$kw$darksalmon,cljs.core.cst$kw$antiquewhite,cljs.core.cst$kw$mediumturquoise,cljs.core.cst$kw$slategrey,cljs.core.cst$kw$slategray,cljs.core.cst$kw$sienna,cljs.core.cst$kw$orange,cljs.core.cst$kw$navajowhite,cljs.core.cst$kw$lavenderblush,cljs.core.cst$kw$firebrick,cljs.core.cst$kw$orangered,cljs.core.cst$kw$palevioletred,cljs.core.cst$kw$lawngreen,cljs.core.cst$kw$seashell,cljs.core.cst$kw$lightpink,cljs.core.cst$kw$darkolivegreen,cljs.core.cst$kw$aliceblue,cljs.core.cst$kw$gray,cljs.core.cst$kw$lightsteelblue,cljs.core.cst$kw$whitesmoke,cljs.core.cst$kw$darkgoldenrod,cljs.core.cst$kw$tan,cljs.core.cst$kw$bisque,cljs.core.cst$kw$white,cljs.core.cst$kw$lightgreen,cljs.core.cst$kw$darkseagreen,cljs.core.cst$kw$crimson,cljs.core.cst$kw$darkslategray,cljs.core.cst$kw$mistyrose,cljs.core.cst$kw$chocolate,cljs.core.cst$kw$yellow,cljs.core.cst$kw$cadetblue,cljs.core.cst$kw$navy,cljs.core.cst$kw$ghostwhite,cljs.core.cst$kw$dimgrey,cljs.core.cst$kw$seagreen,cljs.core.cst$kw$green,cljs.core.cst$kw$mediumseagreen,cljs.core.cst$kw$indigo,cljs.core.cst$kw$olivedrab,cljs.core.cst$kw$cyan,cljs.core.cst$kw$peachpuff,cljs.core.cst$kw$limegreen,cljs.core.cst$kw$mediumslateblue,cljs.core.cst$kw$violet,cljs.core.cst$kw$sandybrown,cljs.core.cst$kw$yellowgreen,cljs.core.cst$kw$mediumspringgreen,cljs.core.cst$kw$steelblue,cljs.core.cst$kw$rosybrown,cljs.core.cst$kw$cornflowerblue,cljs.core.cst$kw$ivory,cljs.core.cst$kw$lightgoldenrodyellow,cljs.core.cst$kw$salmon,cljs.core.cst$kw$darkcyan,cljs.core.cst$kw$peru,cljs.core.cst$kw$cornsilk,cljs.core.cst$kw$lightslategray,cljs.core.cst$kw$blueviolet,cljs.core.cst$kw$forestgreen,cljs.core.cst$kw$lightseagreen,cljs.core.cst$kw$gold,cljs.core.cst$kw$gainsboro,cljs.core.cst$kw$darkorchid,cljs.core.cst$kw$burlywood,cljs.core.cst$kw$lightskyblue,cljs.core.cst$kw$chartreuse,cljs.core.cst$kw$snow,cljs.core.cst$kw$moccasin,cljs.core.cst$kw$honeydew,cljs.core.cst$kw$aqua,cljs.core.cst$kw$darkred,cljs.core.cst$kw$mediumorchid,cljs.core.cst$kw$lightsalmon,cljs.core.cst$kw$saddlebrown,cljs.core.cst$kw$wheat,cljs.core.cst$kw$springgreen,cljs.core.cst$kw$lightslategrey,cljs.core.cst$kw$darkblue,cljs.core.cst$kw$powderblue,cljs.core.cst$kw$turquoise,cljs.core.cst$kw$blanchedalmond,cljs.core.cst$kw$papayawhip,cljs.core.cst$kw$slateblue,cljs.core.cst$kw$lightblue,cljs.core.cst$kw$skyblue,cljs.core.cst$kw$red,cljs.core.cst$kw$lightyellow,cljs.core.cst$kw$blue,cljs.core.cst$kw$palegreen,cljs.core.cst$kw$greenyellow,cljs.core.cst$kw$khaki,cljs.core.cst$kw$maroon,cljs.core.cst$kw$darkgrey,cljs.core.cst$kw$midnightblue,cljs.core.cst$kw$floralwhite,cljs.core.cst$kw$deeppink,cljs.core.cst$kw$paleturquoise,cljs.core.cst$kw$darkkhaki,cljs.core.cst$kw$azure,cljs.core.cst$kw$indianred,cljs.core.cst$kw$darkviolet,cljs.core.cst$kw$mediumpurple,cljs.core.cst$kw$fuchsia,cljs.core.cst$kw$coral,cljs.core.cst$kw$mediumvioletred,cljs.core.cst$kw$lemonchiffon,cljs.core.cst$kw$mediumblue,cljs.core.cst$kw$darkmagenta,cljs.core.cst$kw$goldenrod,cljs.core.cst$kw$darkorange,cljs.core.cst$kw$orchid,cljs.core.cst$kw$plum,cljs.core.cst$kw$pink,cljs.core.cst$kw$teal,cljs.core.cst$kw$magenta,cljs.core.cst$kw$lightgrey,cljs.core.cst$kw$purple,cljs.core.cst$kw$dodgerblue,cljs.core.cst$kw$darkturquoise,cljs.core.cst$kw$mintcream,cljs.core.cst$kw$hotpink,cljs.core.cst$kw$thistle,cljs.core.cst$kw$royalblue,cljs.core.cst$kw$darkgreen,cljs.core.cst$kw$darkslateblue,cljs.core.cst$kw$silver,cljs.core.cst$kw$darkgray,cljs.core.cst$kw$oldlace,cljs.core.cst$kw$mediumaquamarine,cljs.core.cst$kw$brown,cljs.core.cst$kw$lightgray,cljs.core.cst$kw$olive,cljs.core.cst$kw$lightcoral,cljs.core.cst$kw$tomato,cljs.core.cst$kw$lightcyan,cljs.core.cst$kw$linen,cljs.core.cst$kw$darkslategrey,cljs.core.cst$kw$lavender,cljs.core.cst$kw$dimgray,cljs.core.cst$kw$palegoldenrod,cljs.core.cst$kw$beige,cljs.core.cst$kw$black],["#7fffd4","#00ff00","#00bfff","#e9967a","#faebd7","#48d1cc","#708090","#708090","#a0522d","#ffa500","#ffdead","#fff0f5","#b22222","#ff4500","#db7093","#7cfc00","#fff5ee","#ffb6c1","#556b2f","#f0f8ff","#808080","#b0c4de","#f5f5f5","#b8860b","#d2b48c","#ffe4c4","#ffffff","#90ee90","#8fbc8f","#dc143c","#2f4f4f","#ffe4e1","#d2691e","#ffff00","#5f9ea0","#000080","#f8f8ff","#696969","#2e8b57","#008000","#3cb371","#4b0082","#6b8e23","#00ffff","#ffdab9","#32cd32","#7b68ee","#ee82ee","#f4a460","#9acd32","#00fa9a","#4682b4","#bc8f8f","#6495ed","#fffff0","#fafad2","#fa8072","#008b8b","#cd853f","#fff8dc","#778899","#8a2be2","#228b22","#20b2aa","#ffd700","#dcdcdc","#9932cc","#deb887","#87cefa","#7fff00","#fffafa","#ffe4b5","#f0fff0","#00ffff","#8b0000","#ba55d3","#ffa07a","#8b4513","#f5deb3","#00ff7f","#778899","#00008b","#b0e0e6","#40e0d0","#ffebcd","#ffefd5","#6a5acd","#add8e6","#87ceeb","#ff0000","#ffffe0","#0000ff","#98fb98","#adff2f","#f0e68c","#800000","#a9a9a9","#191970","#fffaf0","#ff1493","#afeeee","#bdb76b","#f0ffff","#cd5c5c","#9400d3","#9370db","#ff00ff","#ff7f50","#c71585","#fffacd","#0000cd","#8b008b","#daa520","#ff8c00","#da70d6","#dda0dd","#ffc0cb","#008080","#ff00ff","#d3d3d3","#800080","#1e90ff","#00ced1","#f5fffa","#ff69b4","#d8bfd8","#4169e1","#006400","#483d8b","#c0c0c0","#a9a9a9","#fdf5e6","#66cdaa","#a52a2a","#d3d3d3","#808000","#f08080","#ff6347","#e0ffff","#faf0e6","#2f4f4f","#e6e6fa","#696969","#eee8aa","#f5f5dc","#000000"]);
/**
 * Helper function for from-name. Returns an instance of ExceptionInfo
 *   for unknown colors.
 */
garden.color.ex_info_color_name = (function garden$color$ex_info_color_name(n){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown color ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n], 0)))," see (:expected (ex-data e)) for a list of color names"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,n,cljs.core.cst$kw$expected,cljs.core.set(cljs.core.keys(garden.color.color_name__GT_hex))], null));
});
/**
 * Helper function for from-name.
 */
garden.color.color_name__GT_color = cljs.core.memoize((function (k){
return (garden.color.color_name__GT_hex.cljs$core$IFn$_invoke$arity$1 ? garden.color.color_name__GT_hex.cljs$core$IFn$_invoke$arity$1(k) : garden.color.color_name__GT_hex.call(null,k));
}));
/**
 * Given a CSS color name n return an instance of CSSColor.
 */
garden.color.from_name = (function garden$color$from_name(n){
var temp__5533__auto__ = (function (){var G__29146 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(n);
return (garden.color.color_name__GT_color.cljs$core$IFn$_invoke$arity$1 ? garden.color.color_name__GT_color.cljs$core$IFn$_invoke$arity$1(G__29146) : garden.color.color_name__GT_color.call(null,G__29146));
})();
if(cljs.core.truth_(temp__5533__auto__)){
var h = temp__5533__auto__;
return h;
} else {
throw garden.color.ex_info_color_name(n);
}
});
garden.color.scale_color_value = (function garden$color$scale_color_value(var_args){
var G__29148 = arguments.length;
switch (G__29148) {
case 2:
return garden.color.scale_color_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return garden.color.scale_color_value.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

garden.color.scale_color_value.cljs$core$IFn$_invoke$arity$2 = (function (value,amount){
return garden.color.scale_color_value.cljs$core$IFn$_invoke$arity$4(value,amount,(0),(100));
});

garden.color.scale_color_value.cljs$core$IFn$_invoke$arity$4 = (function (value,amount,min_val,max_val){
return garden.util.clip(min_val,max_val,(value * ((1) + (amount / (100)))));
});

garden.color.scale_color_value.cljs$lang$maxFixedArity = 4;

/**
 * Scales the lightness of a color by amount, which is treated as a percentage.
 *   Supply positive values to scale upwards and negative values to scale downwards.
 */
garden.color.scale_lightness = (function garden$color$scale_lightness(color,amount){
return garden.color.update_hsla_field(color,cljs.core.cst$kw$lightness,garden.color.scale_color_value,amount);
});
/**
 * Scales the saturation of a color by amount, which is treated as a percentage.
 *   Supply positive values to scale upwards and negative values to scale downwards.
 */
garden.color.scale_saturation = (function garden$color$scale_saturation(color,amount){
return garden.color.update_hsla_field(color,cljs.core.cst$kw$saturation,garden.color.scale_color_value,amount);
});
/**
 * Scales the alpha of a color by amount, which is treated as a percentage.
 *   Supply positive values to scale upwards and negative values to scale downwards.
 */
garden.color.scale_alpha = (function garden$color$scale_alpha(color,amount){
return garden.color.update_hsla_field(color,cljs.core.cst$kw$alpha,(function (p1__29150_SHARP_,p2__29151_SHARP_){
var G__29152 = (p1__29150_SHARP_ * ((1) + (p2__29151_SHARP_ / (100))));
return (garden.color.zero_to_one_clip.cljs$core$IFn$_invoke$arity$1 ? garden.color.zero_to_one_clip.cljs$core$IFn$_invoke$arity$1(G__29152) : garden.color.zero_to_one_clip.call(null,G__29152));
}),amount);
});
garden.color.decrown_hex = (function garden$color$decrown_hex(hex){
return clojure.string.replace(hex,/^#/,"");
});
garden.color.crown_hex = (function garden$color$crown_hex(hex){
if(cljs.core.truth_(cljs.core.re_find(/^#/,hex))){
return hex;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex)].join('');
}
});
/**
 * (expand-hex "#abc") -> "aabbcc"
 * (expand-hex "333333") -> "333333"
 */
garden.color.expand_hex = (function garden$color$expand_hex(hex){
var _ = garden.color.decrown_hex(hex);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(_))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_,_], 0)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(_))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((6),_));
} else {
return _;

}
}
});
/**
 * (hex->long "#abc") -> 11189196
 */
garden.color.hex__GT_long = (function garden$color$hex__GT_long(hex){
return parseInt(garden.color.expand_hex(clojure.string.replace(hex,/^#/,"")),(16));
});
/**
 * (long->hex 11189196) -> "aabbcc"
 */
garden.color.long__GT_hex = (function garden$color$long__GT_hex(long$){
return long$.toString((16));
});
/**
 * `weight` is number 0 to 100 (%).
 * At 0, it weighs color-1 at 100%.
 * At 100, it weighs color-2 at 100%.
 * Returns hex string.
 */
garden.color.weighted_mix = (function garden$color$weighted_mix(color_1,color_2,weight){
var vec__29154 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29153_SHARP_){
return (p1__29153_SHARP_ / (100));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((100) - weight),weight], null));
var weight_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29154,(0),null);
var weight_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29154,(1),null);
var vec__29157 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(garden.color.hex__GT_long,garden.color.as_hex),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color_1,color_2], null));
var long_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29157,(0),null);
var long_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29157,(1),null);
return garden.color.crown_hex(garden.color.expand_hex(garden.color.long__GT_hex(((long_1 * weight_1) + (long_2 * weight_2)))));
});
