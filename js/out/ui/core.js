// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('ui.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('garden.core');
goog.require('garden.color');
goog.require('garden.units');
goog.require('frames.xhr');
goog.require('re_frame.core');
goog.require('route_map.core');
goog.require('clojure.string');
goog.require('ui.routing');
goog.require('ui.routes');
goog.require('ui.index_page');
goog.require('ui.calendar_page');
goog.require('zenform.core');
ui.core.h3 = (38);
ui.core.h2 = (24);
ui.core.h = (16);
ui.core.style = (function ui$core$style(gcss){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$style,garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gcss], 0))], null);
});
ui.core.current_page = (function ui$core$current_page(){
var current_route = (function (){var G__31682 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__31682) : re_frame.core.subscribe.call(null,G__31682));
})();
return ((function (current_route){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(function (){var map__31683 = cljs.core.deref(current_route);
var map__31683__$1 = ((((!((map__31683 == null)))?(((((map__31683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31683):map__31683);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31683__$1,cljs.core.cst$kw$match);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31683__$1,cljs.core.cst$kw$params);
if(cljs.core.truth_(page)){
var temp__5533__auto__ = cljs.core.cst$kw$cmp.cljs$core$IFn$_invoke$arity$1(ui.routes.resolve_page(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(page)));
if(cljs.core.truth_(temp__5533__auto__)){
var cmp = temp__5533__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmp,params], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$not_DASH_found,["Page not found [",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)].join('')),"]"].join('')], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$not_DASH_found,["Route not found "].join('')], null);
}
})()], null);
});
;})(current_route))
});
ui.core.navigation = (function ui$core$navigation(){
var current_route = (function (){var G__31685 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_map_SLASH_current_DASH_route], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__31685) : re_frame.core.subscribe.call(null,G__31685));
})();
return ((function (current_route){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$navigation,ui.core.style(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$navigation,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$top,(garden.units.px.cljs$core$IFn$_invoke$arity$1 ? garden.units.px.cljs$core$IFn$_invoke$arity$1((20)) : garden.units.px.call(null,(20))),cljs.core.cst$kw$right,(garden.units.px.cljs$core$IFn$_invoke$arity$1 ? garden.units.px.cljs$core$IFn$_invoke$arity$1((20)) : garden.units.px.call(null,(20)))], null),cljs.core.cst$kw$background_DASH_color,"white"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$navitem,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,"block",cljs.core.cst$kw$color,"#888",cljs.core.cst$kw$border_DASH_left,"6px solid #ddd",cljs.core.cst$kw$font_DASH_family,"lato",cljs.core.cst$kw$padding,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$top,(garden.units.px.cljs$core$IFn$_invoke$arity$1 ? garden.units.px.cljs$core$IFn$_invoke$arity$1((10)) : garden.units.px.call(null,(10))),cljs.core.cst$kw$bottom,(garden.units.px.cljs$core$IFn$_invoke$arity$1 ? garden.units.px.cljs$core$IFn$_invoke$arity$1((10)) : garden.units.px.call(null,(10))),cljs.core.cst$kw$left,(garden.units.px.cljs$core$IFn$_invoke$arity$1 ? garden.units.px.cljs$core$IFn$_invoke$arity$1((20)) : garden.units.px.call(null,(20)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND_$active,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"#007bff",cljs.core.cst$kw$border_DASH_color,"#007bff"], null)], null)], null)], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = ((function (current_route){
return (function ui$core$navigation_$_iter__31686(s__31687){
return (new cljs.core.LazySeq(null,((function (current_route){
return (function (){
var s__31687__$1 = s__31687;
while(true){
var temp__5535__auto__ = cljs.core.seq(s__31687__$1);
if(temp__5535__auto__){
var s__31687__$2 = temp__5535__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31687__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__31687__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__31689 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__31688 = (0);
while(true){
if((i__31688 < size__4291__auto__)){
var vec__31690 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__31688);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31690,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31690,(1),null);
cljs.core.chunk_append(b__31689,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$navitem,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current_route),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$match,cljs.core.cst$kw$id], null))))?"active":null),cljs.core.cst$kw$href,ui.routes.href.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(i)], 0))], null),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(p)], null));

var G__31700 = (i__31688 + (1));
i__31688 = G__31700;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31689),ui$core$navigation_$_iter__31686(cljs.core.chunk_rest(s__31687__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31689),null);
}
} else {
var vec__31693 = cljs.core.first(s__31687__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31693,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31693,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$navitem,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,i,cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current_route),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$match,cljs.core.cst$kw$id], null))))?"active":null),cljs.core.cst$kw$href,ui.routes.href.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(i)], 0))], null),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(p)], null),ui$core$navigation_$_iter__31686(cljs.core.rest(s__31687__$2)));
}
} else {
return null;
}
break;
}
});})(current_route))
,null,null));
});})(current_route))
;
return iter__4292__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (iter__4292__auto__,current_route){
return (function (p__31696){
var vec__31697 = p__31696;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31697,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31697,(1),null);
return cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(x);
});})(iter__4292__auto__,current_route))
,cljs.core.deref(ui.routes.pages)));
})())], null);
});
;})(current_route))
});
ui.core.styles = ui.core.style((function (){var nav_width = (100);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.core.styles,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,"Roboto, sans-serif"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$form_DASH_control,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#f9f9f9!important"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$topnav,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$border_DASH_bottom,"1px solid #f1f1f1",cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$margin_DASH_bottom,"20px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$brand,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$font_DASH_size,(garden.units.px.cljs$core$IFn$_invoke$arity$1 ? garden.units.px.cljs$core$IFn$_invoke$arity$1((30)) : garden.units.px.call(null,(30))),cljs.core.cst$kw$font_DASH_weight,"bold",cljs.core.cst$kw$margin,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$left,(garden.units.px.cljs$core$IFn$_invoke$arity$1 ? garden.units.px.cljs$core$IFn$_invoke$arity$1((20)) : garden.units.px.call(null,(20)))], null),cljs.core.cst$kw$font_DASH_family,"lato",cljs.core.cst$kw$padding,(garden.units.px.cljs$core$IFn$_invoke$arity$1 ? garden.units.px.cljs$core$IFn$_invoke$arity$1((10)) : garden.units.px.call(null,(10)))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$navigation,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$width,(garden.units.px.cljs$core$IFn$_invoke$arity$1 ? garden.units.px.cljs$core$IFn$_invoke$arity$1(nav_width) : garden.units.px.call(null,nav_width)),cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,(garden.units.px.cljs$core$IFn$_invoke$arity$1 ? garden.units.px.cljs$core$IFn$_invoke$arity$1((67)) : garden.units.px.call(null,(67))),cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$left,(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$pane,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,""], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$margin_DASH_bottom,(garden.units.px.cljs$core$IFn$_invoke$arity$1 ? garden.units.px.cljs$core$IFn$_invoke$arity$1((30)) : garden.units.px.call(null,(30))),cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$normal,cljs.core.cst$kw$font_DASH_size,(garden.units.px.cljs$core$IFn$_invoke$arity$1 ? garden.units.px.cljs$core$IFn$_invoke$arity$1(ui.core.h3) : garden.units.px.call(null,ui.core.h3)),cljs.core.cst$kw$line_DASH_height,(garden.units.px_STAR_.cljs$core$IFn$_invoke$arity$2 ? garden.units.px_STAR_.cljs$core$IFn$_invoke$arity$2(ui.core.h3,1.5) : garden.units.px_STAR_.call(null,ui.core.h3,1.5))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$re_DASH_form_DASH_row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_top,(garden.units.px.cljs$core$IFn$_invoke$arity$1 ? garden.units.px.cljs$core$IFn$_invoke$arity$1(ui.core.h2) : garden.units.px.call(null,ui.core.h2))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$background_DASH_color,"#f1f1f1",cljs.core.cst$kw$padding,"20px",cljs.core.cst$kw$border,"1px solid #ddd"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$display,"block",cljs.core.cst$kw$margin_DASH_bottom,(garden.units.px.cljs$core$IFn$_invoke$arity$1 ? garden.units.px.cljs$core$IFn$_invoke$arity$1((2)) : garden.units.px.call(null,(2))),cljs.core.cst$kw$font_DASH_size,(garden.units.px.cljs$core$IFn$_invoke$arity$1 ? garden.units.px.cljs$core$IFn$_invoke$arity$1(ui.core.h) : garden.units.px.call(null,ui.core.h)),cljs.core.cst$kw$line_DASH_height,(function (){var G__31701 = ((ui.core.h * (3)) / (2));
return (garden.units.px.cljs$core$IFn$_invoke$arity$1 ? garden.units.px.cljs$core$IFn$_invoke$arity$1(G__31701) : garden.units.px.call(null,G__31701));
})(),cljs.core.cst$kw$padding_DASH_right,"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$errors,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"red"], null)], null)], null)], null);
})());
ui.core.root_component = (function ui$core$root_component(){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Hello"], null)], null);

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,ui.core.styles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$topnav,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$brand,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"icon.png",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"30px"], null)], null)], null)," ","zenform"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.core.navigation], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.core.current_page], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ui$core_SLASH_initialize,(function (cofx){
console.log(ui.routes.routes());

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dispatch_DASH_n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$route_DASH_map_SLASH_init,ui.routes.routes()], null)], null)], null);
}));
ui.core.dispatch_routes = (function ui$core$dispatch_routes(_){
var fragment = window.location.hash;
var G__31702 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fragment_DASH_changed,fragment], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31702) : re_frame.core.dispatch.call(null,G__31702));
});
ui.core.mount_root = (function ui$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.core.root_component], null),document.getElementById("app"));
});
ui.core.init_BANG_ = (function ui$core$init_BANG_(){
var G__31703_31704 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui$core_SLASH_initialize], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31703_31704) : re_frame.core.dispatch.call(null,G__31703_31704));

return ui.core.mount_root();
});
