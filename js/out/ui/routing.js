// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('ui.routing');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('route_map.core');
ui.routing.dispatch_routes = (function ui$routing$dispatch_routes(_){
var fragment = window.location.hash;
var G__31596 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fragment_DASH_changed,fragment], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31596) : re_frame.core.dispatch.call(null,G__31596));
});
var G__31597_31599 = cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route;
var G__31598_31600 = ((function (G__31597_31599){
return (function (db,_){
return cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route.cljs$core$IFn$_invoke$arity$1(db);
});})(G__31597_31599))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__31597_31599,G__31598_31600) : re_frame.core.reg_sub.call(null,G__31597_31599,G__31598_31600));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fragment_DASH_changed,(function (p__31601,p__31602){
var map__31603 = p__31601;
var map__31603__$1 = ((((!((map__31603 == null)))?(((((map__31603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31603):map__31603);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31603__$1,cljs.core.cst$kw$db);
var vec__31604 = p__31602;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31604,(0),null);
var fragment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31604,(1),null);
var temp__5533__auto__ = route_map.core.match(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_DOT_,clojure.string.replace(fragment,/^#/,"")], null),cljs.core.cst$kw$route_DASH_map_SLASH_routes.cljs$core$IFn$_invoke$arity$1(db));
if(cljs.core.truth_(temp__5533__auto__)){
var route = temp__5533__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$fragment,fragment,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,route], 0))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$fragment,fragment,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route,null], 0))], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$route_DASH_map_SLASH_init,(function (cofx,p__31608){
var vec__31609 = p__31608;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31609,(0),null);
var routes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31609,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$route_DASH_map_SLASH_routes,routes),cljs.core.cst$kw$ui$routing_SLASH_history,cljs.core.PersistentArrayMap.EMPTY], null);
}));
var G__31612_31614 = cljs.core.cst$kw$ui$routing_SLASH_history;
var G__31613_31615 = ((function (G__31612_31614){
return (function (_){
(window["onhashchange"] = ui.routing.dispatch_routes);

return ui.routing.dispatch_routes(null);
});})(G__31612_31614))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__31612_31614,G__31613_31615) : re_frame.core.reg_fx.call(null,G__31612_31614,G__31613_31615));
var G__31616_31618 = cljs.core.cst$kw$route_DASH_map_SLASH_redirect;
var G__31617_31619 = ((function (G__31616_31618){
return (function (href){
return (window.location["hash"] = href);
});})(G__31616_31618))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__31616_31618,G__31617_31619) : re_frame.core.reg_fx.call(null,G__31616_31618,G__31617_31619));
