// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('frames.xhr');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('re_frame.core');
frames.xhr.to_query = (function frames$xhr$to_query(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__31560){
var vec__31561 = p__31560;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31561,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31561,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}),params));
});
var G__31564_31570 = cljs.core.cst$kw$xhr_SLASH_url;
var G__31565_31571 = ((function (G__31564_31570){
return (function (db,p__31566){
var vec__31567 = p__31566;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31567,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31567,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$base_DASH_url], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
});})(G__31564_31570))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__31564_31570,G__31565_31571) : re_frame.core.reg_sub.call(null,G__31564_31570,G__31565_31571));
frames.xhr.json_fetch = (function frames$xhr$json_fetch(p__31572){
var map__31573 = p__31572;
var map__31573__$1 = ((((!((map__31573 == null)))?(((((map__31573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31573):map__31573);
var opts = map__31573__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31573__$1,cljs.core.cst$kw$uri);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31573__$1,cljs.core.cst$kw$token);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31573__$1,cljs.core.cst$kw$headers);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31573__$1,cljs.core.cst$kw$params);
var success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31573__$1,cljs.core.cst$kw$success);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31573__$1,cljs.core.cst$kw$error);
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__3922__auto__ = headers;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.PersistentArrayMap(null, 3, ["Accept","application/json","content-type","application/json","Authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null)], 0));
var fetch_opts = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"get",cljs.core.cst$kw$mode,"cors"], null),opts], 0)),cljs.core.cst$kw$uri,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$headers,cljs.core.cst$kw$success,cljs.core.cst$kw$error,cljs.core.cst$kw$params], 0)),cljs.core.cst$kw$headers,headers__$1);
var fetch_opts__$1 = (cljs.core.truth_(cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fetch_opts,cljs.core.cst$kw$body,JSON.stringify(cljs.core.clj__GT_js(cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(opts)))):fetch_opts);
var url = (function (){var G__31575 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$xhr_SLASH_url,uri], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__31575) : re_frame.core.subscribe.call(null,G__31575));
})();
return fetch([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(url)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(params)?["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frames.xhr.to_query(params))].join(''):null))].join(''),cljs.core.clj__GT_js(fetch_opts__$1)).then(((function (headers__$1,fetch_opts,fetch_opts__$1,url,map__31573,map__31573__$1,opts,uri,token,headers,params,success,error){
return (function (resp){
return resp.json().then(((function (headers__$1,fetch_opts,fetch_opts__$1,url,map__31573,map__31573__$1,opts,uri,token,headers,params,success,error){
return (function (doc){
if((resp.status < (299))){
var G__31576 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(success),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([success,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$request,opts,cljs.core.cst$kw$response,resp,cljs.core.cst$kw$data,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(doc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0))], null)], 0))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31576) : re_frame.core.dispatch.call(null,G__31576));
} else {
var G__31577 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(error),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$request,opts,cljs.core.cst$kw$response,resp,cljs.core.cst$kw$data,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(doc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0))], null)], 0))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31577) : re_frame.core.dispatch.call(null,G__31577));
}
});})(headers__$1,fetch_opts,fetch_opts__$1,url,map__31573,map__31573__$1,opts,uri,token,headers,params,success,error))
);
});})(headers__$1,fetch_opts,fetch_opts__$1,url,map__31573,map__31573__$1,opts,uri,token,headers,params,success,error))
);
});
var G__31578_31580 = cljs.core.cst$kw$json_SLASH_fetch;
var G__31579_31581 = frames.xhr.json_fetch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__31578_31580,G__31579_31581) : re_frame.core.reg_fx.call(null,G__31578_31580,G__31579_31581));
var G__31582_31584 = cljs.core.cst$kw$frames$xhr_SLASH_json_DASH_fetch;
var G__31583_31585 = frames.xhr.json_fetch;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__31582_31584,G__31583_31585) : re_frame.core.reg_fx.call(null,G__31582_31584,G__31583_31585));
var G__31586_31592 = cljs.core.cst$kw$frames$xhr_SLASH_fetch;
var G__31587_31593 = ((function (G__31586_31592){
return (function (p__31588){
var map__31589 = p__31588;
var map__31589__$1 = ((((!((map__31589 == null)))?(((((map__31589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31589):map__31589);
var args = map__31589__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31589__$1,cljs.core.cst$kw$uri);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31589__$1,cljs.core.cst$kw$content);
var suc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31589__$1,cljs.core.cst$kw$success);
return fetch(uri).then(((function (map__31589,map__31589__$1,args,uri,content,suc,G__31586_31592){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,content)){
return x.text();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,content)){
return x.json();
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected content text or json, but ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join('')),"\n","false"].join('')));


}
}
});})(map__31589,map__31589__$1,args,uri,content,suc,G__31586_31592))
).then(((function (map__31589,map__31589__$1,args,uri,content,suc,G__31586_31592){
return (function (txt){
var G__31591 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [suc,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$content,txt,cljs.core.cst$kw$args,args], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__31591) : re_frame.core.dispatch.call(null,G__31591));
});})(map__31589,map__31589__$1,args,uri,content,suc,G__31586_31592))
);
});})(G__31586_31592))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__31586_31592,G__31587_31593) : re_frame.core.reg_fx.call(null,G__31586_31592,G__31587_31593));
