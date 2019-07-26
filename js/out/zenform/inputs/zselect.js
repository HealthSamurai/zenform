// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('zenform.inputs.zselect');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('zenform.model');
goog.require('re_frame.core');
goog.require('garden.core');
goog.require('clojure.string');
goog.require('goog.async.Debouncer');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_dropdown,(function (db,p__29792){
var vec__29793 = p__29792;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29793,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29793,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29793,(2),null);
var open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29793,(3),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,form_path,((function (vec__29793,_,form_path,path,open_QMARK_){
return (function (form){
return cljs.core.assoc_in(form,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(zenform.model.get_node_path(path),cljs.core.cst$kw$dropdown),open_QMARK_);
});})(vec__29793,_,form_path,path,open_QMARK_))
);
}));
zenform.inputs.zselect.rotation = (new garden.types.CSSAtRule(cljs.core.cst$kw$keyframes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$identifier,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$rotation)].join(''),cljs.core.cst$kw$frames,(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$from,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(0)"], null)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$to,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,"rotate(359deg)"], null)], null),null,(1),null)),(2),null))], null)));
zenform.inputs.zselect.style = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.inputs.zselect.rotation,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zselect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$zselect_DASH_icon,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"#888",cljs.core.cst$kw$margin_DASH_right,"8px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zselect_DASH_value,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$line_DASH_height,cljs.core.cst$kw$color,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$transition,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$cursor,cljs.core.cst$kw$background_DASH_clip,cljs.core.cst$kw$padding,cljs.core.cst$kw$display,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius],["1.5","#495057","1rem","border-color .15s ease-in-out,box-shadow .15s ease-in-out","#f9f9f9!important","100%","pointer","padding-box",".375rem .75rem","block","1px solid #ced4da",".25rem"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zselect_DASH_dropdown_DASH_wrap,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zdropdown,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$box_DASH_shadow,cljs.core.cst$kw$top,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$padding,cljs.core.cst$kw$right,cljs.core.cst$kw$position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$left],["0px 8px 16px 0px rgba(0,0,0,0.2)","3px","white",(1),"3px",(0),"absolute","1px solid #ddd",".25rem",(0)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zselect_DASH_options,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$max_DASH_height,"200px",cljs.core.cst$kw$margin_DASH_top,"5px",cljs.core.cst$kw$overflow_DASH_y,"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zprogress,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$line_DASH_height,cljs.core.cst$kw$animation,cljs.core.cst$kw$color,cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$top,cljs.core.cst$kw$width,cljs.core.cst$kw$padding_DASH_top,cljs.core.cst$kw$transform_DASH_origin,cljs.core.cst$kw$right,cljs.core.cst$kw$position,cljs.core.cst$kw$height],["11px",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.inputs.zselect.rotation,"0.5s infinite linear"], null)], null),"#888","center","20px","13px","20px","2px","50% 50%","10px","absolute","20px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zselect_DASH_option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding,"5px",cljs.core.cst$kw$border_DASH_bottom,"1px solid #ddd",cljs.core.cst$kw$margin_DASH_top,"-1px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_AMPERSAND_$active,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#f1f1f1"], null)], null)], null)], null)], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_selection_DASH_prev,(function (db,p__29796){
var vec__29797 = p__29796;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29797,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29797,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29797,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(form_path,zenform.model.get_node_path(path)),((function (vec__29797,_,form_path,path){
return (function (node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$selection,((function (vec__29797,_,form_path,path){
return (function (x){
if(cljs.core.truth_((function (){var and__3911__auto__ = x;
if(cljs.core.truth_(and__3911__auto__)){
return (x > (0));
} else {
return and__3911__auto__;
}
})())){
return (x - (1));
} else {
return (0);
}
});})(vec__29797,_,form_path,path))
);
});})(vec__29797,_,form_path,path))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_selection_DASH_next,(function (db,p__29800){
var vec__29801 = p__29800;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29801,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29801,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29801,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(form_path,zenform.model.get_node_path(path)),((function (vec__29801,_,form_path,path){
return (function (node){
var items_cnt = ((function (){var or__3922__auto__ = cljs.core.count(cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (1);
}
})() - (1));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$selection,((function (items_cnt,vec__29801,_,form_path,path){
return (function (x){
if(cljs.core.truth_(x)){
if((x < items_cnt)){
return (x + (1));
} else {
return x;
}
} else {
return (1);
}
});})(items_cnt,vec__29801,_,form_path,path))
);
});})(vec__29801,_,form_path,path))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_selection_DASH_select,(function (db,p__29804){
var vec__29805 = p__29804;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29805,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29805,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29805,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,form_path,((function (vec__29805,_,form_path,path){
return (function (form){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(form,zenform.model.get_node_path(path),((function (vec__29805,_,form_path,path){
return (function (node){
var temp__5533__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var or__3922__auto__ = cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),(function (){var or__3922__auto__ = cljs.core.cst$kw$selection.cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})());
if(cljs.core.truth_(temp__5533__auto__)){
var v = temp__5533__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node,cljs.core.cst$kw$value,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(v),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$selection,(0),cljs.core.cst$kw$dropdown,false], 0));
} else {
return node;
}
});})(vec__29805,_,form_path,path))
);
});})(vec__29805,_,form_path,path))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$zf_SLASH_selection_DASH_reset,(function (db,p__29808){
var vec__29809 = p__29808;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29809,(0),null);
var form_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29809,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29809,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(form_path,zenform.model.get_node_path(path)),((function (vec__29809,_,form_path,path){
return (function (node){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$selection,(0));
});})(vec__29809,_,form_path,path))
);
}));
zenform.inputs.zselect.timer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
zenform.inputs.zselect.clear_debounce = (function zenform$inputs$zselect$clear_debounce(){
clearTimeout(cljs.core.deref(zenform.inputs.zselect.timer));

return cljs.core.reset_BANG_(zenform.inputs.zselect.timer,null);
});
zenform.inputs.zselect.debounce = (function zenform$inputs$zselect$debounce(fnc,ms){
if(cljs.core.truth_(cljs.core.deref(zenform.inputs.zselect.timer))){
zenform.inputs.zselect.clear_debounce();
} else {
}

return cljs.core.reset_BANG_(zenform.inputs.zselect.timer,setTimeout((function (){
zenform.inputs.zselect.clear_debounce();

return (fnc.cljs$core$IFn$_invoke$arity$0 ? fnc.cljs$core$IFn$_invoke$arity$0() : fnc.call(null));
}),ms));
});
zenform.inputs.zselect._STAR_zselect = (function zenform$inputs$zselect$_STAR_zselect(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29830 = arguments.length;
var i__4500__auto___29831 = (0);
while(true){
if((i__4500__auto___29831 < len__4499__auto___29830)){
args__4502__auto__.push((arguments[i__4500__auto___29831]));

var G__29832 = (i__4500__auto___29831 + (1));
i__4500__auto___29831 = G__29832;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return zenform.inputs.zselect._STAR_zselect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

zenform.inputs.zselect._STAR_zselect.cljs$core$IFn$_invoke$arity$variadic = (function (form_path,path,p__29816){
var vec__29817 = p__29816;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29817,(0),null);
var node = (function (){var G__29820 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_node,form_path,path], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29820) : re_frame.core.subscribe.call(null,G__29820));
})();
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var zselect_cfg = cljs.core.cst$kw$zselect.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node));
var node_path = cljs.core.into.cljs$core$IFn$_invoke$arity$2(form_path,zenform.model.get_node_path(path));
var items_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node_path,cljs.core.cst$kw$items);
var status_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(node_path,cljs.core.cst$kw$status);
var os = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$on_DASH_search.cljs$core$IFn$_invoke$arity$1(zselect_cfg),cljs.core.cst$kw$items_DASH_path,items_path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$status_DASH_path,status_path], 0));
var event = (new goog.async.Debouncer(((function (node,state,zselect_cfg,node_path,items_path,status_path,os,vec__29817,attrs){
return (function (q){
var G__29821 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(os),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(os,cljs.core.cst$kw$query,q)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29821) : re_frame.core.dispatch.call(null,G__29821));
});})(node,state,zselect_cfg,node_path,items_path,status_path,os,vec__29817,attrs))
,(function (){var or__3922__auto__ = cljs.core.cst$kw$debounce_DASH_interval.cljs$core$IFn$_invoke$arity$1(zselect_cfg);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (400);
}
})()));
var on_key_press = ((function (node,state,zselect_cfg,node_path,items_path,status_path,os,event,vec__29817,attrs){
return (function (e){
var G__29822 = e.keyCode;
switch (G__29822) {
case (38):
var G__29823_29834 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_selection_DASH_prev,form_path,path], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29823_29834) : re_frame.core.dispatch.call(null,G__29823_29834));

return e.preventDefault();

break;
case (40):
var G__29824 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_selection_DASH_next,form_path,path], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29824) : re_frame.core.dispatch.call(null,G__29824));

break;
case (13):
var G__29825 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_selection_DASH_select,form_path,path], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29825) : re_frame.core.dispatch.call(null,G__29825));

break;
default:
var q = e.target.value;
event.fire(q);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_selection_DASH_reset,form_path,path], null);

}
});})(node,state,zselect_cfg,node_path,items_path,status_path,os,event,vec__29817,attrs))
;
var open_dropdown = ((function (node,state,zselect_cfg,node_path,items_path,status_path,os,event,on_key_press,vec__29817,attrs){
return (function (){
var G__29826_29835 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_dropdown,form_path,path,true], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29826_29835) : re_frame.core.dispatch.call(null,G__29826_29835));

return setTimeout(((function (node,state,zselect_cfg,node_path,items_path,status_path,os,event,on_key_press,vec__29817,attrs){
return (function (){
var temp__5535__auto__ = cljs.core.cst$kw$focus_DASH_node.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(temp__5535__auto__)){
var focus_node = temp__5535__auto__;
return focus_node.focus();
} else {
return null;
}
});})(node,state,zselect_cfg,node_path,items_path,status_path,os,event,on_key_press,vec__29817,attrs))
,(100));
});})(node,state,zselect_cfg,node_path,items_path,status_path,os,event,on_key_press,vec__29817,attrs))
;
var on_click = ((function (node,state,zselect_cfg,node_path,items_path,status_path,os,event,on_key_press,open_dropdown,vec__29817,attrs){
return (function (i){
return ((function (node,state,zselect_cfg,node_path,items_path,status_path,os,event,on_key_press,open_dropdown,vec__29817,attrs){
return (function (_){
var G__29827_29836 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_set_DASH_value,form_path,path,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(i)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29827_29836) : re_frame.core.dispatch.call(null,G__29827_29836));

var G__29828 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_dropdown,form_path,path,false], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29828) : re_frame.core.dispatch.call(null,G__29828));
});
;})(node,state,zselect_cfg,node_path,items_path,status_path,os,event,on_key_press,open_dropdown,vec__29817,attrs))
});})(node,state,zselect_cfg,node_path,items_path,status_path,os,event,on_key_press,open_dropdown,vec__29817,attrs))
;
var close_dropdown = ((function (node,state,zselect_cfg,node_path,items_path,status_path,os,event,on_key_press,open_dropdown,on_click,vec__29817,attrs){
return (function (){
var G__29829 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_dropdown,form_path,path,false], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29829) : re_frame.core.dispatch.call(null,G__29829));
});})(node,state,zselect_cfg,node_path,items_path,status_path,os,event,on_key_press,open_dropdown,on_click,vec__29817,attrs))
;
return ((function (node,state,zselect_cfg,node_path,items_path,status_path,os,event,on_key_press,open_dropdown,on_click,close_dropdown,vec__29817,attrs){
return (function() { 
var G__29837__delegate = function (_){
var _STAR_node = cljs.core.deref(node);
var v = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(_STAR_node);
var errs = cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(_STAR_node);
var items = cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(_STAR_node);
var sel = (function (){var or__3922__auto__ = cljs.core.cst$kw$selection.cljs$core$IFn$_invoke$arity$1(_STAR_node);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})();
var status = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(_STAR_node);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zselect,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zselect_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_click,open_dropdown,cljs.core.cst$kw$tab_DASH_index,(0),cljs.core.cst$kw$on_DASH_key_DASH_down,open_dropdown], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$zselect_DASH_icon,"\u25BE"], null),(cljs.core.truth_(v)?(function (){var or__3922__auto__ = cljs.core.cst$kw$display.cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return v;
}
})():(function (){var or__3922__auto__ = cljs.core.cst$kw$placeholder.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "Search...";
}
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zselect_DASH_dropdown_DASH_wrap,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zdropdown,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,(cljs.core.truth_(cljs.core.cst$kw$dropdown.cljs$core$IFn$_invoke$arity$1(_STAR_node))?null:"none")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ref,((function (_STAR_node,v,errs,items,sel,status,node,state,zselect_cfg,node_path,items_path,status_path,os,event,on_key_press,open_dropdown,on_click,close_dropdown,vec__29817,attrs){
return (function (p1__29812_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$focus_DASH_node,p1__29812_SHARP_);
});})(_STAR_node,v,errs,items,sel,status,node,state,zselect_cfg,node_path,items_path,status_path,os,event,on_key_press,open_dropdown,on_click,close_dropdown,vec__29817,attrs))
,cljs.core.cst$kw$on_DASH_blur,((function (_STAR_node,v,errs,items,sel,status,node,state,zselect_cfg,node_path,items_path,status_path,os,event,on_key_press,open_dropdown,on_click,close_dropdown,vec__29817,attrs){
return (function (){
return setTimeout(((function (_STAR_node,v,errs,items,sel,status,node,state,zselect_cfg,node_path,items_path,status_path,os,event,on_key_press,open_dropdown,on_click,close_dropdown,vec__29817,attrs){
return (function (){
return close_dropdown();
});})(_STAR_node,v,errs,items,sel,status,node,state,zselect_cfg,node_path,items_path,status_path,os,event,on_key_press,open_dropdown,on_click,close_dropdown,vec__29817,attrs))
,(200));
});})(_STAR_node,v,errs,items,sel,status,node,state,zselect_cfg,node_path,items_path,status_path,os,event,on_key_press,open_dropdown,on_click,close_dropdown,vec__29817,attrs))
,cljs.core.cst$kw$on_DASH_key_DASH_down,on_key_press,cljs.core.cst$kw$placeholder,"Search..."], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$loading,status))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zprogress,"\u25F7"], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zselect_DASH_options,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (_STAR_node,v,errs,items,sel,status,node,state,zselect_cfg,node_path,items_path,status_path,os,event,on_key_press,open_dropdown,on_click,close_dropdown,vec__29817,attrs){
return (function (idx,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$zselect_DASH_option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(i),cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,sel))?"active":null),cljs.core.cst$kw$on_DASH_click,on_click(i)], null),cljs.core.cst$kw$display.cljs$core$IFn$_invoke$arity$1(i)], null);
});})(_STAR_node,v,errs,items,sel,status,node,state,zselect_cfg,node_path,items_path,status_path,os,event,on_key_press,open_dropdown,on_click,close_dropdown,vec__29817,attrs))
,items)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$center,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn$btn_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,close_dropdown], null),"Close"], null)], null)], null)], null)], null);
};
var G__29837 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__29838__i = 0, G__29838__a = new Array(arguments.length -  0);
while (G__29838__i < G__29838__a.length) {G__29838__a[G__29838__i] = arguments[G__29838__i + 0]; ++G__29838__i;}
  _ = new cljs.core.IndexedSeq(G__29838__a,0,null);
} 
return G__29837__delegate.call(this,_);};
G__29837.cljs$lang$maxFixedArity = 0;
G__29837.cljs$lang$applyTo = (function (arglist__29839){
var _ = cljs.core.seq(arglist__29839);
return G__29837__delegate(_);
});
G__29837.cljs$core$IFn$_invoke$arity$variadic = G__29837__delegate;
return G__29837;
})()
;
;})(node,state,zselect_cfg,node_path,items_path,status_path,os,event,on_key_press,open_dropdown,on_click,close_dropdown,vec__29817,attrs))
});

zenform.inputs.zselect._STAR_zselect.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
zenform.inputs.zselect._STAR_zselect.cljs$lang$applyTo = (function (seq29813){
var G__29814 = cljs.core.first(seq29813);
var seq29813__$1 = cljs.core.next(seq29813);
var G__29815 = cljs.core.first(seq29813__$1);
var seq29813__$2 = cljs.core.next(seq29813__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29814,G__29815,seq29813__$2);
});

zenform.inputs.zselect.zselect = (function zenform$inputs$zselect$zselect(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29848 = arguments.length;
var i__4500__auto___29849 = (0);
while(true){
if((i__4500__auto___29849 < len__4499__auto___29848)){
args__4502__auto__.push((arguments[i__4500__auto___29849]));

var G__29850 = (i__4500__auto___29849 + (1));
i__4500__auto___29849 = G__29850;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return zenform.inputs.zselect.zselect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

zenform.inputs.zselect.zselect.cljs$core$IFn$_invoke$arity$variadic = (function (form_path,path,p__29843){
var vec__29844 = p__29843;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29844,(0),null);
var node = (function (){var G__29847 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$zf_SLASH_node,form_path,path], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__29847) : re_frame.core.subscribe.call(null,G__29847));
})();
return ((function (node,vec__29844,attrs){
return (function() { 
var G__29851__delegate = function (_){
if(cljs.core.truth_(cljs.core.deref(node))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zenform.inputs.zselect._STAR_zselect,form_path,path,attrs], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"loading..."], null);
}
};
var G__29851 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__29852__i = 0, G__29852__a = new Array(arguments.length -  0);
while (G__29852__i < G__29852__a.length) {G__29852__a[G__29852__i] = arguments[G__29852__i + 0]; ++G__29852__i;}
  _ = new cljs.core.IndexedSeq(G__29852__a,0,null);
} 
return G__29851__delegate.call(this,_);};
G__29851.cljs$lang$maxFixedArity = 0;
G__29851.cljs$lang$applyTo = (function (arglist__29853){
var _ = cljs.core.seq(arglist__29853);
return G__29851__delegate(_);
});
G__29851.cljs$core$IFn$_invoke$arity$variadic = G__29851__delegate;
return G__29851;
})()
;
;})(node,vec__29844,attrs))
});

zenform.inputs.zselect.zselect.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
zenform.inputs.zselect.zselect.cljs$lang$applyTo = (function (seq29840){
var G__29841 = cljs.core.first(seq29840);
var seq29840__$1 = cljs.core.next(seq29840);
var G__29842 = cljs.core.first(seq29840__$1);
var seq29840__$2 = cljs.core.next(seq29840__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29841,G__29842,seq29840__$2);
});

