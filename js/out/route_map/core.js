// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('route_map.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
route_map.core.pathify = (function route_map$core$pathify(path){
return cljs.core.filterv((function (p1__30089_SHARP_){
return !(clojure.string.blank_QMARK_(p1__30089_SHARP_));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
});
route_map.core.is_glob_QMARK_ = (function route_map$core$is_glob_QMARK_(k){
return clojure.string.ends_with_QMARK_(cljs.core.name(k),"*");
});
route_map.core.get_param = (function route_map$core$get_param(node){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__30090){
var vec__30091 = p__30090;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30091,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30091,(1),null);
return cljs.core.vector_QMARK_(k);
}),node));
});
route_map.core.fn_param_QMARK_ = (function route_map$core$fn_param_QMARK_(k){
var and__3911__auto__ = cljs.core.vector_QMARK_(k);
if(and__3911__auto__){
var f = cljs.core.first(k);
return ((!((f instanceof cljs.core.Keyword))) && (cljs.core.fn_QMARK_(f)));
} else {
return and__3911__auto__;
}
});
route_map.core.match_fn_params = (function route_map$core$match_fn_params(node,x){
if(cljs.core.map_QMARK_(node)){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__30094){
var vec__30095 = p__30094;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30095,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30095,(1),null);
var temp__5533__auto__ = (function (){var fexpr__30098 = cljs.core.first(k);
return (fexpr__30098.cljs$core$IFn$_invoke$arity$1 ? fexpr__30098.cljs$core$IFn$_invoke$arity$1(x) : fexpr__30098.call(null,x));
})();
if(cljs.core.truth_(temp__5533__auto__)){
var params = temp__5533__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [params,v], null));
} else {
return acc;
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__30099){
var vec__30100 = p__30099;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30100,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30100,(1),null);
return route_map.core.fn_param_QMARK_(k);
}),node)));
} else {
return null;
}
});
route_map.core._match = (function route_map$core$_match(acc,node,p__30103,params,parents,wgt){
var vec__30104 = p__30103;
var seq__30105 = cljs.core.seq(vec__30104);
var first__30106 = cljs.core.first(seq__30105);
var seq__30105__$1 = cljs.core.next(seq__30105);
var x = first__30106;
var rpth = seq__30105__$1;
var pth = vec__30104;
if(cljs.core.empty_QMARK_(pth)){
if(cljs.core.truth_(node)){
if(((cljs.core.map_QMARK_(node)) && (cljs.core.contains_QMARK_(node,cljs.core.cst$kw$_DOT_)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$parents,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$params,params)),cljs.core.cst$kw$match,cljs.core.cst$kw$_DOT_.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$w,wgt,cljs.core.cst$kw$params,params], null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$parents,parents,cljs.core.cst$kw$match,node,cljs.core.cst$kw$w,wgt,cljs.core.cst$kw$params,params], null));
}
} else {
return acc;
}
} else {
var node__$1 = ((cljs.core.var_QMARK_(node))?cljs.core.deref(node):node);
var pnode = (function (){var and__3911__auto__ = cljs.core.map_QMARK_(node__$1);
if(and__3911__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node__$1,cljs.core.cst$kw$params,params);
} else {
return and__3911__auto__;
}
})();
var acc__$1 = (function (){var temp__5533__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node__$1,x);
if(cljs.core.truth_(temp__5533__auto__)){
var branch = temp__5533__auto__;
var G__30107 = acc;
var G__30108 = branch;
var G__30109 = rpth;
var G__30110 = params;
var G__30111 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__30112 = (wgt + (10));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__30107,G__30108,G__30109,G__30110,G__30111,G__30112) : route_map.core._match.call(null,G__30107,G__30108,G__30109,G__30110,G__30111,G__30112));
} else {
return acc;
}
})();
var acc__$2 = (function (){var temp__5533__auto__ = route_map.core.match_fn_params(node__$1,x);
if(cljs.core.truth_(temp__5533__auto__)){
var vec__30113 = temp__5533__auto__;
var fparams = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30113,(0),null);
var branch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30113,(1),null);
var G__30116 = acc__$1;
var G__30117 = branch;
var G__30118 = rpth;
var G__30119 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params,fparams], 0));
var G__30120 = parents;
var G__30121 = (wgt + (10));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__30116,G__30117,G__30118,G__30119,G__30120,G__30121) : route_map.core._match.call(null,G__30116,G__30117,G__30118,G__30119,G__30120,G__30121));
} else {
return acc__$1;
}
})();
var acc__$3 = (function (){var temp__5533__auto__ = (function (){var and__3911__auto__ = !((x instanceof cljs.core.Keyword));
if(and__3911__auto__){
var and__3911__auto____$1 = cljs.core.map_QMARK_(node__$1);
if(and__3911__auto____$1){
return route_map.core.get_param(node__$1);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5533__auto__)){
var vec__30122 = temp__5533__auto__;
var vec__30125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30122,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30125,(0),null);
var branch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30122,(1),null);
if(cljs.core.truth_(route_map.core.is_glob_QMARK_(k))){
if((cljs.core.last(pth) instanceof cljs.core.Keyword)){
var G__30128 = acc__$2;
var G__30129 = branch;
var G__30130 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(pth)], null);
var G__30131 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.butlast(pth)));
var G__30132 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__30133 = (wgt + (1));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__30128,G__30129,G__30130,G__30131,G__30132,G__30133) : route_map.core._match.call(null,G__30128,G__30129,G__30130,G__30131,G__30132,G__30133));
} else {
var G__30134 = acc__$2;
var G__30135 = branch;
var G__30136 = cljs.core.PersistentVector.EMPTY;
var G__30137 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,pth));
var G__30138 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__30139 = (wgt + (1));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__30134,G__30135,G__30136,G__30137,G__30138,G__30139) : route_map.core._match.call(null,G__30134,G__30135,G__30136,G__30137,G__30138,G__30139));
}
} else {
var G__30140 = acc__$2;
var G__30141 = branch;
var G__30142 = rpth;
var G__30143 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,x);
var G__30144 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,pnode);
var G__30145 = (wgt + (2));
return (route_map.core._match.cljs$core$IFn$_invoke$arity$6 ? route_map.core._match.cljs$core$IFn$_invoke$arity$6(G__30140,G__30141,G__30142,G__30143,G__30144,G__30145) : route_map.core._match.call(null,G__30140,G__30141,G__30142,G__30143,G__30144,G__30145));
}
} else {
return acc__$2;
}
})();
return acc__$3;
}
});
/**
 * path [:get "/your/path"] or just "/your/path"
 * return multiple matches
 */
route_map.core.match = (function route_map$core$match(path,routes){
var path__$1 = ((cljs.core.vector_QMARK_(path))?(function (){var vec__30146 = path;
var meth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30146,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30146,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(route_map.core.pathify(url),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.name(meth))));
})():route_map.core.pathify(path));
var result = route_map.core._match(cljs.core.PersistentVector.EMPTY,routes,path__$1,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,(0));
return cljs.core.first(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$w,result)));
});
route_map.core.wrap_route_map = (function route_map$core$wrap_route_map(h,routes){

return (function (p__30149){
var map__30150 = p__30149;
var map__30150__$1 = ((((!((map__30150 == null)))?(((((map__30150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30150):map__30150);
var req = map__30150__$1;
var meth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30150__$1,cljs.core.cst$kw$request_DASH_method);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30150__$1,cljs.core.cst$kw$uri);
var temp__5533__auto__ = route_map.core.match(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meth,uri], null),routes);
if(cljs.core.truth_(temp__5533__auto__)){
var match = temp__5533__auto__;
var G__30152 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(req,cljs.core.cst$kw$route_DASH_match,match);
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(G__30152) : h.call(null,G__30152));
} else {
return (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(req) : h.call(null,req));
}
});
});
route_map.core.first_not_nil = (function route_map$core$first_not_nil(coll){
var not_nils = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30153_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,p1__30153_SHARP_);
}),coll);
var all_nils = (not_nils == null);
if(all_nils){
return null;
} else {
return cljs.core.first(not_nils);
}
});
route_map.core.get_static_paths = (function route_map$core$get_static_paths(routes){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30154_SHARP_){
return cljs.core.first(p1__30154_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30155_SHARP_){
var vec__30156 = p1__30155_SHARP_;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30156,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30156,(1),null);
return typeof k === 'string';
}),routes));
});
route_map.core.get_ways = (function route_map$core$get_ways(routes){
var params = cljs.core.first(route_map.core.get_param(routes));
var static_paths = route_map.core.get_static_paths(routes);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (params,static_paths){
return (function (p1__30159_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,p1__30159_SHARP_);
});})(params,static_paths))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(params,static_paths));
});
route_map.core.find_url = (function route_map$core$find_url(routes,name,auto_name,params,path){
var path_found = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$kw$$name.cljs$core$IFn$_invoke$arity$1(routes))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(auto_name))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(params))))));
if(path_found){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",path)){
return "/";
} else {
return path;
}
} else {
return route_map.core.first_not_nil(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (path_found){
return (function (p1__30160_SHARP_){
var vec__30161 = ((typeof p1__30160_SHARP_ === 'string')?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30160_SHARP_,params,cljs.core.get.cljs$core$IFn$_invoke$arity$2(routes,p1__30160_SHARP_),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",auto_name))?p1__30160_SHARP_:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(auto_name),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30160_SHARP_)].join(''))], null):(((p1__30160_SHARP_ instanceof cljs.core.Keyword))?((cljs.core.map_QMARK_(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,p1__30160_SHARP_),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(params,p1__30160_SHARP_),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,p1__30160_SHARP_))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(routes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30160_SHARP_], null)):null),auto_name], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(params),cljs.core.rest(params),cljs.core.get.cljs$core$IFn$_invoke$arity$2(routes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30160_SHARP_], null)),auto_name], null)):null));
var next_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30161,(0),null);
var next_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30161,(1),null);
var next_routes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30161,(2),null);
var next_auto_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30161,(3),null);
var G__30164 = ((cljs.core.var_QMARK_(next_routes))?cljs.core.deref(next_routes):next_routes);
var G__30165 = name;
var G__30166 = next_auto_name;
var G__30167 = next_params;
var G__30168 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_path)].join('');
return (route_map.core.find_url.cljs$core$IFn$_invoke$arity$5 ? route_map.core.find_url.cljs$core$IFn$_invoke$arity$5(G__30164,G__30165,G__30166,G__30167,G__30168) : route_map.core.find_url.call(null,G__30164,G__30165,G__30166,G__30167,G__30168));
});})(path_found))
,route_map.core.get_ways(routes)));
}
});
route_map.core.url = (function route_map$core$url(var_args){
var G__30170 = arguments.length;
switch (G__30170) {
case 2:
return route_map.core.url.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return route_map.core.url.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

route_map.core.url.cljs$core$IFn$_invoke$arity$2 = (function (routes,name){
return route_map.core.url.cljs$core$IFn$_invoke$arity$3(routes,name,cljs.core.PersistentVector.EMPTY);
});

route_map.core.url.cljs$core$IFn$_invoke$arity$3 = (function (routes,name,params){
return route_map.core.find_url(routes,name,"",params,"");
});

route_map.core.url.cljs$lang$maxFixedArity = 3;

