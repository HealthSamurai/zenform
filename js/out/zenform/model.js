// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('zenform.model');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('zenform.validators');
goog.require('clojure.string');
goog.require('re_frame.core');
zenform.model._STAR_form = (function zenform$model$_STAR_form(sch,path,val){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$form,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(sch))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(sch,cljs.core.cst$kw$fields),cljs.core.cst$kw$value,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__27440){
var vec__27441 = p__27440;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27441,(0),null);
var _STAR_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27441,(1),null);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(val,k);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(function (){var G__27444 = _STAR_sch;
var G__27445 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
var G__27446 = v;
return (zenform.model._STAR_form.cljs$core$IFn$_invoke$arity$3 ? zenform.model._STAR_form.cljs$core$IFn$_invoke$arity$3(G__27444,G__27445,G__27446) : zenform.model._STAR_form.call(null,G__27444,G__27445,G__27446));
})());
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$fields.cljs$core$IFn$_invoke$arity$1(sch)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(sch))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(sch,cljs.core.cst$kw$item),cljs.core.cst$kw$value,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__27447){
var vec__27448 = p__27447;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27448,(0),null);
var _STAR_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27448,(1),null);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(val,k);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(function (){var G__27451 = _STAR_sch;
var G__27452 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
var G__27453 = v;
return (zenform.model._STAR_form.cljs$core$IFn$_invoke$arity$3 ? zenform.model._STAR_form.cljs$core$IFn$_invoke$arity$3(G__27451,G__27452,G__27453) : zenform.model._STAR_form.call(null,G__27451,G__27452,G__27453));
})());
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(sch)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$collection,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(sch))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sch,cljs.core.cst$kw$value,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,_STAR_val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(function (){var G__27454 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(sch),cljs.core.cst$kw$value);
var G__27455 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
var G__27456 = _STAR_val;
return (zenform.model._STAR_form.cljs$core$IFn$_invoke$arity$3 ? zenform.model._STAR_form.cljs$core$IFn$_invoke$arity$3(G__27454,G__27455,G__27456) : zenform.model._STAR_form.call(null,G__27454,G__27455,G__27456));
})()], null);
}),val)));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(sch))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sch,cljs.core.cst$kw$value,val);
} else {
return val;

}
}
}
}
});
/**
 * create form model from schema and defaults
 */
zenform.model.form = (function zenform$model$form(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27463 = arguments.length;
var i__4500__auto___27464 = (0);
while(true){
if((i__4500__auto___27464 < len__4499__auto___27463)){
args__4502__auto__.push((arguments[i__4500__auto___27464]));

var G__27465 = (i__4500__auto___27464 + (1));
i__4500__auto___27464 = G__27465;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return zenform.model.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

zenform.model.form.cljs$core$IFn$_invoke$arity$variadic = (function (schema,p__27459){
var vec__27460 = p__27459;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27460,(0),null);
return zenform.model._STAR_form(schema,cljs.core.PersistentVector.EMPTY,(function (){var or__3922__auto__ = value;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});

zenform.model.form.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
zenform.model.form.cljs$lang$applyTo = (function (seq27457){
var G__27458 = cljs.core.first(seq27457);
var seq27457__$1 = cljs.core.next(seq27457);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27458,seq27457__$1);
});

zenform.model.get_node_path = (function zenform$model$get_node_path(pth){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(acc,cljs.core.cst$kw$value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}),cljs.core.PersistentVector.EMPTY,pth);
});
zenform.model.get_value_path = (function zenform$model$get_value_path(pth){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(zenform.model.get_node_path(pth),cljs.core.cst$kw$value);
});
zenform.model._STAR_get_value = (function zenform$model$_STAR_get_value(form){
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(form);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$collection,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(form));
} else {
return and__3911__auto__;
}
})())){
var res = cljs.core.filterv((function (p1__27466_SHARP_){
return !((p1__27466_SHARP_ == null));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zenform.model._STAR_get_value,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(form)))));
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
} else {
if(((cljs.core.map_QMARK_(form)) && (cljs.core.map_QMARK_(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(form))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$form,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(form))))){
var res = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__27467){
var vec__27468 = p__27467;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27468,(0),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27468,(1),null);
var v = (zenform.model._STAR_get_value.cljs$core$IFn$_invoke$arity$1 ? zenform.model._STAR_get_value.cljs$core$IFn$_invoke$arity$1(node) : zenform.model._STAR_get_value.call(null,node));
if(!((v == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(form));
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
} else {
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(form);

}
}
});
/**
 * Get value for specific path; if path not passed returns form value
 */
zenform.model.get_value = (function zenform$model$get_value(var_args){
var G__27472 = arguments.length;
switch (G__27472) {
case 2:
return zenform.model.get_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zenform.model.get_value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zenform.model.get_value.cljs$core$IFn$_invoke$arity$2 = (function (form,path){
return zenform.model._STAR_get_value(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,zenform.model.get_node_path(path)));
});

zenform.model.get_value.cljs$core$IFn$_invoke$arity$1 = (function (form){
return zenform.model._STAR_get_value(form);
});

zenform.model.get_value.cljs$lang$maxFixedArity = 2;

zenform.model.validate_node = (function zenform$model$validate_node(node,v){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (errs,p__27474){
var vec__27475 = p__27474;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27475,(0),null);
var cfg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27475,(1),null);
var temp__5533__auto__ = (function (){var G__27478 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cfg,cljs.core.cst$kw$type,((function (vec__27475,k,cfg){
return (function (x){
var or__3922__auto__ = x;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return k;
}
});})(vec__27475,k,cfg))
);
var G__27479 = v;
return (zenform.validators.validate.cljs$core$IFn$_invoke$arity$2 ? zenform.validators.validate.cljs$core$IFn$_invoke$arity$2(G__27478,G__27479) : zenform.validators.validate.call(null,G__27478,G__27479));
})();
if(cljs.core.truth_(temp__5533__auto__)){
var msg = temp__5533__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(errs,k,msg);
} else {
return errs;
}
}),null,cljs.core.cst$kw$validators.cljs$core$IFn$_invoke$arity$1(node));
});
zenform.model._STAR_on_value_set = (function zenform$model$_STAR_on_value_set(node){
var v = zenform.model._STAR_get_value(node);
var errs = zenform.model.validate_node(node,v);
cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = ((function (v,errs){
return (function zenform$model$_STAR_on_value_set_$_iter__27480(s__27481){
return (new cljs.core.LazySeq(null,((function (v,errs){
return (function (){
var s__27481__$1 = s__27481;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__27481__$1);
if(temp__5535__auto__){
var s__27481__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27481__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__27481__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__27483 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__27482 = (0);
while(true){
if((i__27482 < size__4291__auto__)){
var vec__27484 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__27482);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27484,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27484,(1),null);
cljs.core.chunk_append(b__27483,(function (){var G__27487 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v,args], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27487) : re_frame.core.dispatch.call(null,G__27487));
})());

var G__27493 = (i__27482 + (1));
i__27482 = G__27493;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27483),zenform$model$_STAR_on_value_set_$_iter__27480(cljs.core.chunk_rest(s__27481__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27483),null);
}
} else {
var vec__27488 = cljs.core.first(s__27481__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27488,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27488,(1),null);
return cljs.core.cons((function (){var G__27491 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v,args], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27491) : re_frame.core.dispatch.call(null,G__27491));
})(),zenform$model$_STAR_on_value_set_$_iter__27480(cljs.core.rest(s__27481__$2)));
}
} else {
return null;
}
break;
}
});})(v,errs))
,null,null));
});})(v,errs))
;
return iter__4292__auto__(cljs.core.cst$kw$on_DASH_change.cljs$core$IFn$_invoke$arity$1(node));
})());

var G__27492 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(node,cljs.core.cst$kw$errors);
if(cljs.core.truth_(errs)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27492,cljs.core.cst$kw$errors,errs);
} else {
return G__27492;
}
});
zenform.model._STAR_on_value_set_loop = (function zenform$model$_STAR_on_value_set_loop(form,path){
var form__$1 = form;
var path__$1 = path;
while(true){
if((path__$1 == null)){
return zenform.model._STAR_on_value_set(form__$1);
} else {
var G__27494 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(form__$1,zenform.model.get_node_path(path__$1),zenform.model._STAR_on_value_set);
var G__27495 = cljs.core.butlast(path__$1);
form__$1 = G__27494;
path__$1 = G__27495;
continue;
}
break;
}
});
zenform.model._STAR_set_value = (function zenform$model$_STAR_set_value(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27504 = arguments.length;
var i__4500__auto___27505 = (0);
while(true){
if((i__4500__auto___27505 < len__4499__auto___27504)){
args__4502__auto__.push((arguments[i__4500__auto___27505]));

var G__27506 = (i__4500__auto___27505 + (1));
i__4500__auto___27505 = G__27506;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return zenform.model._STAR_set_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

zenform.model._STAR_set_value.cljs$core$IFn$_invoke$arity$variadic = (function (form,path,value,p__27500){
var vec__27501 = p__27500;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27501,(0),null);
var value__$1 = ((((typeof value === 'string') && (clojure.string.blank_QMARK_(value))))?null:value);
var form__$1 = cljs.core.assoc_in(form,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$collection))?zenform.model.get_node_path(path):zenform.model.get_value_path(path)),value__$1);
return form__$1;
});

zenform.model._STAR_set_value.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
zenform.model._STAR_set_value.cljs$lang$applyTo = (function (seq27496){
var G__27497 = cljs.core.first(seq27496);
var seq27496__$1 = cljs.core.next(seq27496);
var G__27498 = cljs.core.first(seq27496__$1);
var seq27496__$2 = cljs.core.next(seq27496__$1);
var G__27499 = cljs.core.first(seq27496__$2);
var seq27496__$3 = cljs.core.next(seq27496__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27497,G__27498,G__27499,seq27496__$3);
});

/**
 * Put value for specific path; run validations
 */
zenform.model.set_value = (function zenform$model$set_value(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27515 = arguments.length;
var i__4500__auto___27516 = (0);
while(true){
if((i__4500__auto___27516 < len__4499__auto___27515)){
args__4502__auto__.push((arguments[i__4500__auto___27516]));

var G__27517 = (i__4500__auto___27516 + (1));
i__4500__auto___27516 = G__27517;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return zenform.model.set_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

zenform.model.set_value.cljs$core$IFn$_invoke$arity$variadic = (function (form,path,value,p__27511){
var vec__27512 = p__27511;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27512,(0),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["type on set:",type], 0));

var value__$1 = ((((typeof value === 'string') && (clojure.string.blank_QMARK_(value))))?null:value);
var form__$1 = cljs.core.assoc_in(form,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$collection))?zenform.model.get_node_path(path):zenform.model.get_value_path(path)),value__$1);
return zenform.model._STAR_on_value_set_loop(zenform.model._STAR_set_value.cljs$core$IFn$_invoke$arity$variadic(form__$1,path,value__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0)),path);
});

zenform.model.set_value.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
zenform.model.set_value.cljs$lang$applyTo = (function (seq27507){
var G__27508 = cljs.core.first(seq27507);
var seq27507__$1 = cljs.core.next(seq27507);
var G__27509 = cljs.core.first(seq27507__$1);
var seq27507__$2 = cljs.core.next(seq27507__$1);
var G__27510 = cljs.core.first(seq27507__$2);
var seq27507__$3 = cljs.core.next(seq27507__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27508,G__27509,G__27510,seq27507__$3);
});

/**
 * Return raw form value
 */
zenform.model.raw_value = (function zenform$model$raw_value(v){
return clojure.walk.prewalk((function (x){
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.map_QMARK_(x);
if(and__3911__auto__){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(x);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
}),v);
});
zenform.model._STAR_eval_form = (function zenform$model$_STAR_eval_form(p__27518){
var map__27519 = p__27518;
var map__27519__$1 = ((((!((map__27519 == null)))?(((((map__27519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27519):map__27519);
var node = map__27519__$1;
var tp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27519__$1,cljs.core.cst$kw$type);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27519__$1,cljs.core.cst$kw$value);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tp]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$collection,cljs.core.cst$kw$form,cljs.core.cst$kw$object], null)))){
var map__27521 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__27519,map__27519__$1,node,tp,v){
return (function (res,p__27522){
var vec__27523 = p__27522;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27523,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27523,(1),null);
var map__27526 = (zenform.model._STAR_eval_form.cljs$core$IFn$_invoke$arity$1 ? zenform.model._STAR_eval_form.cljs$core$IFn$_invoke$arity$1(n) : zenform.model._STAR_eval_form.call(null,n));
var map__27526__$1 = ((((!((map__27526 == null)))?(((((map__27526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27526):map__27526);
var v__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27526__$1,cljs.core.cst$kw$value);
var err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27526__$1,cljs.core.cst$kw$errors);
var ch_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27526__$1,cljs.core.cst$kw$form);
var res__$1 = ((cljs.core.empty_QMARK_(err))?res:cljs.core.update.cljs$core$IFn$_invoke$arity$3(res,cljs.core.cst$kw$errors,((function (map__27526,map__27526__$1,v__$1,err,ch_node,vec__27523,idx,n,map__27519,map__27519__$1,node,tp,v){
return (function (es){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__27526,map__27526__$1,v__$1,err,ch_node,vec__27523,idx,n,map__27519,map__27519__$1,node,tp,v){
return (function (es__$1,p__27528){
var vec__27529 = p__27528;
var err_k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27529,(0),null);
var err_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27529,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(es__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx], null),err_k),err_v);
});})(map__27526,map__27526__$1,v__$1,err,ch_node,vec__27523,idx,n,map__27519,map__27519__$1,node,tp,v))
,es,err);
});})(map__27526,map__27526__$1,v__$1,err,ch_node,vec__27523,idx,n,map__27519,map__27519__$1,node,tp,v))
));
var res__$2 = cljs.core.assoc_in(res__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,cljs.core.cst$kw$value,idx], null),ch_node);
var G__27532 = res__$2;
var G__27532__$1 = ((((!((v__$1 == null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tp,cljs.core.cst$kw$collection))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__27532,cljs.core.cst$kw$value,cljs.core.conj,v__$1):G__27532);
if(cljs.core.truth_((function (){var and__3911__auto__ = !((v__$1 == null));
if(and__3911__auto__){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tp]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,cljs.core.cst$kw$object], null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc_in(G__27532__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,idx], null),v__$1);
} else {
return G__27532__$1;
}
});})(map__27519,map__27519__$1,node,tp,v))
,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tp]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,cljs.core.cst$kw$object], null)))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$errors,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$form,node], null),v);
var map__27521__$1 = ((((!((map__27521 == null)))?(((((map__27521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27521):map__27521);
var res = map__27521__$1;
var v__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27521__$1,cljs.core.cst$kw$value);
var errs = zenform.model.validate_node(node,v__$1);
var G__27534 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(res,cljs.core.cst$kw$value,((function (map__27521,map__27521__$1,res,v__$1,errs,map__27519,map__27519__$1,node,tp,v){
return (function (x){
if(cljs.core.empty_QMARK_(x)){
return null;
} else {
return x;
}
});})(map__27521,map__27521__$1,res,v__$1,errs,map__27519,map__27519__$1,node,tp,v))
);
var G__27534__$1 = (cljs.core.truth_(errs)?cljs.core.assoc_in(G__27534,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors,cljs.core.PersistentVector.EMPTY], null),errs):G__27534);
if(cljs.core.truth_(errs)){
return cljs.core.assoc_in(G__27534__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,cljs.core.cst$kw$errors], null),errs);
} else {
return G__27534__$1;
}
} else {
var errs = zenform.model.validate_node(node,v);
var node__$1 = (function (){var G__27535 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$touched,true);
if(cljs.core.truth_(errs)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27535,cljs.core.cst$kw$errors,errs);
} else {
return G__27535;
}
})();
var G__27536 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,v,cljs.core.cst$kw$form,node__$1], null);
if(cljs.core.truth_(errs)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27536,cljs.core.cst$kw$errors,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,errs]));
} else {
return G__27536;
}
}
});
zenform.model.eval_form = (function zenform$model$eval_form(form){
return zenform.model._STAR_eval_form(form);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_init,(function (db,p__27537){
var vec__27538 = p__27537;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27538,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27538,(1),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27538,(2),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27538,(3),null);
return cljs.core.assoc_in(db,form_path,zenform.model.form.cljs$core$IFn$_invoke$arity$variadic(schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_set_DASH_value,(function (db,p__27541){
var vec__27542 = p__27541;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27542,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27542,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27542,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27542,(3),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,form_path,((function (vec__27542,_,form_path,path,v){
return (function (form){
return zenform.model.set_value(form,path,v);
});})(vec__27542,_,form_path,path,v))
);
}));
var G__27545_27551 = cljs.core.cst$kw$zf_SLASH_node;
var G__27546_27552 = ((function (G__27545_27551){
return (function (db,p__27547){
var vec__27548 = p__27547;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27548,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27548,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27548,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,form_path),zenform.model.get_node_path(path));
});})(G__27545_27551))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27545_27551,G__27546_27552) : re_frame.core.reg_sub.call(null,G__27545_27551,G__27546_27552));
var G__27553_27559 = cljs.core.cst$kw$zf_SLASH_get_DASH_value;
var G__27554_27560 = ((function (G__27553_27559){
return (function (db,p__27555){
var vec__27556 = p__27555;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27556,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27556,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27556,(2),null);
var form = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,form_path);
if(cljs.core.truth_(path)){
return zenform.model.get_value.cljs$core$IFn$_invoke$arity$2(form,path);
} else {
return zenform.model.get_value.cljs$core$IFn$_invoke$arity$1(form);
}
});})(G__27553_27559))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27553_27559,G__27554_27560) : re_frame.core.reg_sub.call(null,G__27553_27559,G__27554_27560));
zenform.model.add_collection_item = (function zenform$model$add_collection_item(form,path,v){
var node = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,zenform.model.get_node_path(path));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$collection,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(node))){
var coll = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(node);
var idx = ((cljs.core.empty_QMARK_(coll))?(0):(cljs.core.first(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.key,coll)) + (1)));
var sch = cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(node);
var v__$1 = zenform.model._STAR_form(sch,cljs.core.PersistentVector.EMPTY,(function (){var or__3922__auto__ = v;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
return zenform.model._STAR_on_value_set_loop(zenform.model._STAR_set_value.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,idx),v__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(node)], 0)),path);
} else {
return form;
}
});
zenform.model.remove_collection_item = (function zenform$model$remove_collection_item(form,path,idx){
var node_path = zenform.model.get_node_path(path);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$collection,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node_path,cljs.core.cst$kw$type)))){
return zenform.model._STAR_on_value_set_loop(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(form,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node_path,cljs.core.cst$kw$value),cljs.core.dissoc,idx),path);
} else {
return form;
}
});
zenform.model.set_collection = (function zenform$model$set_collection(form,path,v){
var node = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(form,zenform.model.get_node_path(path));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$collection,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(node))){
return zenform.model.set_value.cljs$core$IFn$_invoke$arity$variadic(form,path,zenform.model._STAR_form(node,cljs.core.PersistentVector.EMPTY,(function (){var or__3922__auto__ = v;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(node)], 0));
} else {
return form;
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_add_DASH_collection_DASH_item,(function (db,p__27561){
var vec__27562 = p__27561;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27562,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27562,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27562,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27562,(3),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,form_path,((function (vec__27562,_,form_path,path,v){
return (function (form){
return zenform.model.add_collection_item(form,path,v);
});})(vec__27562,_,form_path,path,v))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_remove_DASH_collection_DASH_item,(function (db,p__27565){
var vec__27566 = p__27565;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27566,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27566,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27566,(2),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27566,(3),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,form_path,((function (vec__27566,_,form_path,path,idx){
return (function (form){
return zenform.model.remove_collection_item(form,path,idx);
});})(vec__27566,_,form_path,path,idx))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_set_DASH_collection,(function (db,p__27569){
var vec__27570 = p__27569;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27570,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27570,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27570,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27570,(3),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,form_path,((function (vec__27570,_,form_path,path,v){
return (function (form){
return zenform.model.set_collection(form,path,v);
});})(vec__27570,_,form_path,path,v))
);
}));
var G__27573_27581 = cljs.core.cst$kw$zf_SLASH_collection;
var G__27574_27582 = ((function (G__27573_27581){
return (function (p__27576,_){
var vec__27577 = p__27576;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27577,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27577,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27577,(2),null);
var G__27580 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_node,form_path,path], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27580) : re_frame.core.subscribe.call(null,G__27580));
});})(G__27573_27581))
;
var G__27575_27583 = ((function (G__27573_27581,G__27574_27582){
return (function (node,_){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(node);
});})(G__27573_27581,G__27574_27582))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__27573_27581,G__27574_27582,G__27575_27583) : re_frame.core.reg_sub.call(null,G__27573_27581,G__27574_27582,G__27575_27583));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_update_DASH_node_DASH_schema,(function (p__27585,p__27586){
var map__27587 = p__27585;
var map__27587__$1 = ((((!((map__27587 == null)))?(((((map__27587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27587):map__27587);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27587__$1,cljs.core.cst$kw$db);
var vec__27588 = p__27586;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27588,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27588,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27588,(2),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27588,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(form_path,zenform.model.get_node_path(path)),((function (map__27587,map__27587__$1,db,vec__27588,_,form_path,path,value){
return (function (p1__27584_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__27584_SHARP_,value], 0));
});})(map__27587,map__27587__$1,db,vec__27588,_,form_path,path,value))
)], null);
}));
