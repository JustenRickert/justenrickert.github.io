// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e39141){if((e39141 instanceof Error)){
var e = e39141;
return "Error: Unable to stringify";
} else {
throw e39141;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__39144 = arguments.length;
switch (G__39144) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39142_SHARP_){
if(typeof p1__39142_SHARP_ === 'string'){
return p1__39142_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__39142_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31333__auto__ = [];
var len__31326__auto___39147 = arguments.length;
var i__31327__auto___39148 = (0);
while(true){
if((i__31327__auto___39148 < len__31326__auto___39147)){
args__31333__auto__.push((arguments[i__31327__auto___39148]));

var G__39149 = (i__31327__auto___39148 + (1));
i__31327__auto___39148 = G__39149;
continue;
} else {
}
break;
}

var argseq__31334__auto__ = ((((0) < args__31333__auto__.length))?(new cljs.core.IndexedSeq(args__31333__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31334__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39146){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39146));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31333__auto__ = [];
var len__31326__auto___39151 = arguments.length;
var i__31327__auto___39152 = (0);
while(true){
if((i__31327__auto___39152 < len__31326__auto___39151)){
args__31333__auto__.push((arguments[i__31327__auto___39152]));

var G__39153 = (i__31327__auto___39152 + (1));
i__31327__auto___39152 = G__39153;
continue;
} else {
}
break;
}

var argseq__31334__auto__ = ((((0) < args__31333__auto__.length))?(new cljs.core.IndexedSeq(args__31333__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31334__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39150){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39150));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39154){
var map__39155 = p__39154;
var map__39155__$1 = ((((!((map__39155 == null)))?((((map__39155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39155.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39155):map__39155);
var message = cljs.core.get.call(null,map__39155__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39155__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30048__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33132__auto___39234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto___39234,ch){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto___39234,ch){
return (function (state_39206){
var state_val_39207 = (state_39206[(1)]);
if((state_val_39207 === (7))){
var inst_39202 = (state_39206[(2)]);
var state_39206__$1 = state_39206;
var statearr_39208_39235 = state_39206__$1;
(statearr_39208_39235[(2)] = inst_39202);

(statearr_39208_39235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (1))){
var state_39206__$1 = state_39206;
var statearr_39209_39236 = state_39206__$1;
(statearr_39209_39236[(2)] = null);

(statearr_39209_39236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (4))){
var inst_39159 = (state_39206[(7)]);
var inst_39159__$1 = (state_39206[(2)]);
var state_39206__$1 = (function (){var statearr_39210 = state_39206;
(statearr_39210[(7)] = inst_39159__$1);

return statearr_39210;
})();
if(cljs.core.truth_(inst_39159__$1)){
var statearr_39211_39237 = state_39206__$1;
(statearr_39211_39237[(1)] = (5));

} else {
var statearr_39212_39238 = state_39206__$1;
(statearr_39212_39238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (15))){
var inst_39166 = (state_39206[(8)]);
var inst_39181 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39166);
var inst_39182 = cljs.core.first.call(null,inst_39181);
var inst_39183 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39182);
var inst_39184 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39183)].join('');
var inst_39185 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39184);
var state_39206__$1 = state_39206;
var statearr_39213_39239 = state_39206__$1;
(statearr_39213_39239[(2)] = inst_39185);

(statearr_39213_39239[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (13))){
var inst_39190 = (state_39206[(2)]);
var state_39206__$1 = state_39206;
var statearr_39214_39240 = state_39206__$1;
(statearr_39214_39240[(2)] = inst_39190);

(statearr_39214_39240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (6))){
var state_39206__$1 = state_39206;
var statearr_39215_39241 = state_39206__$1;
(statearr_39215_39241[(2)] = null);

(statearr_39215_39241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (17))){
var inst_39188 = (state_39206[(2)]);
var state_39206__$1 = state_39206;
var statearr_39216_39242 = state_39206__$1;
(statearr_39216_39242[(2)] = inst_39188);

(statearr_39216_39242[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (3))){
var inst_39204 = (state_39206[(2)]);
var state_39206__$1 = state_39206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39206__$1,inst_39204);
} else {
if((state_val_39207 === (12))){
var inst_39165 = (state_39206[(9)]);
var inst_39179 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39165,opts);
var state_39206__$1 = state_39206;
if(cljs.core.truth_(inst_39179)){
var statearr_39217_39243 = state_39206__$1;
(statearr_39217_39243[(1)] = (15));

} else {
var statearr_39218_39244 = state_39206__$1;
(statearr_39218_39244[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (2))){
var state_39206__$1 = state_39206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39206__$1,(4),ch);
} else {
if((state_val_39207 === (11))){
var inst_39166 = (state_39206[(8)]);
var inst_39171 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39172 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39166);
var inst_39173 = cljs.core.async.timeout.call(null,(1000));
var inst_39174 = [inst_39172,inst_39173];
var inst_39175 = (new cljs.core.PersistentVector(null,2,(5),inst_39171,inst_39174,null));
var state_39206__$1 = state_39206;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39206__$1,(14),inst_39175);
} else {
if((state_val_39207 === (9))){
var inst_39166 = (state_39206[(8)]);
var inst_39192 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39193 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39166);
var inst_39194 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39193);
var inst_39195 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39194)].join('');
var inst_39196 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39195);
var state_39206__$1 = (function (){var statearr_39219 = state_39206;
(statearr_39219[(10)] = inst_39192);

return statearr_39219;
})();
var statearr_39220_39245 = state_39206__$1;
(statearr_39220_39245[(2)] = inst_39196);

(statearr_39220_39245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (5))){
var inst_39159 = (state_39206[(7)]);
var inst_39161 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39162 = (new cljs.core.PersistentArrayMap(null,2,inst_39161,null));
var inst_39163 = (new cljs.core.PersistentHashSet(null,inst_39162,null));
var inst_39164 = figwheel.client.focus_msgs.call(null,inst_39163,inst_39159);
var inst_39165 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39164);
var inst_39166 = cljs.core.first.call(null,inst_39164);
var inst_39167 = figwheel.client.autoload_QMARK_.call(null);
var state_39206__$1 = (function (){var statearr_39221 = state_39206;
(statearr_39221[(9)] = inst_39165);

(statearr_39221[(8)] = inst_39166);

return statearr_39221;
})();
if(cljs.core.truth_(inst_39167)){
var statearr_39222_39246 = state_39206__$1;
(statearr_39222_39246[(1)] = (8));

} else {
var statearr_39223_39247 = state_39206__$1;
(statearr_39223_39247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (14))){
var inst_39177 = (state_39206[(2)]);
var state_39206__$1 = state_39206;
var statearr_39224_39248 = state_39206__$1;
(statearr_39224_39248[(2)] = inst_39177);

(statearr_39224_39248[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (16))){
var state_39206__$1 = state_39206;
var statearr_39225_39249 = state_39206__$1;
(statearr_39225_39249[(2)] = null);

(statearr_39225_39249[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (10))){
var inst_39198 = (state_39206[(2)]);
var state_39206__$1 = (function (){var statearr_39226 = state_39206;
(statearr_39226[(11)] = inst_39198);

return statearr_39226;
})();
var statearr_39227_39250 = state_39206__$1;
(statearr_39227_39250[(2)] = null);

(statearr_39227_39250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (8))){
var inst_39165 = (state_39206[(9)]);
var inst_39169 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39165,opts);
var state_39206__$1 = state_39206;
if(cljs.core.truth_(inst_39169)){
var statearr_39228_39251 = state_39206__$1;
(statearr_39228_39251[(1)] = (11));

} else {
var statearr_39229_39252 = state_39206__$1;
(statearr_39229_39252[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33132__auto___39234,ch))
;
return ((function (switch__33042__auto__,c__33132__auto___39234,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33043__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33043__auto____0 = (function (){
var statearr_39230 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39230[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33043__auto__);

(statearr_39230[(1)] = (1));

return statearr_39230;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33043__auto____1 = (function (state_39206){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_39206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e39231){if((e39231 instanceof Object)){
var ex__33046__auto__ = e39231;
var statearr_39232_39253 = state_39206;
(statearr_39232_39253[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39254 = state_39206;
state_39206 = G__39254;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33043__auto__ = function(state_39206){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33043__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33043__auto____1.call(this,state_39206);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33043__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33043__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto___39234,ch))
})();
var state__33134__auto__ = (function (){var statearr_39233 = f__33133__auto__.call(null);
(statearr_39233[(6)] = c__33132__auto___39234);

return statearr_39233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto___39234,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39255_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39255_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_39257 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39257){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39256){if((e39256 instanceof Error)){
var e = e39256;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39257], null));
} else {
var e = e39256;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39257))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39258){
var map__39259 = p__39258;
var map__39259__$1 = ((((!((map__39259 == null)))?((((map__39259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39259):map__39259);
var opts = map__39259__$1;
var build_id = cljs.core.get.call(null,map__39259__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39259,map__39259__$1,opts,build_id){
return (function (p__39261){
var vec__39262 = p__39261;
var seq__39263 = cljs.core.seq.call(null,vec__39262);
var first__39264 = cljs.core.first.call(null,seq__39263);
var seq__39263__$1 = cljs.core.next.call(null,seq__39263);
var map__39265 = first__39264;
var map__39265__$1 = ((((!((map__39265 == null)))?((((map__39265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39265):map__39265);
var msg = map__39265__$1;
var msg_name = cljs.core.get.call(null,map__39265__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39263__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39262,seq__39263,first__39264,seq__39263__$1,map__39265,map__39265__$1,msg,msg_name,_,map__39259,map__39259__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39262,seq__39263,first__39264,seq__39263__$1,map__39265,map__39265__$1,msg,msg_name,_,map__39259,map__39259__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39259,map__39259__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39267){
var vec__39268 = p__39267;
var seq__39269 = cljs.core.seq.call(null,vec__39268);
var first__39270 = cljs.core.first.call(null,seq__39269);
var seq__39269__$1 = cljs.core.next.call(null,seq__39269);
var map__39271 = first__39270;
var map__39271__$1 = ((((!((map__39271 == null)))?((((map__39271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39271.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39271):map__39271);
var msg = map__39271__$1;
var msg_name = cljs.core.get.call(null,map__39271__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39269__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39273){
var map__39274 = p__39273;
var map__39274__$1 = ((((!((map__39274 == null)))?((((map__39274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39274.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39274):map__39274);
var on_compile_warning = cljs.core.get.call(null,map__39274__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39274__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39274,map__39274__$1,on_compile_warning,on_compile_fail){
return (function (p__39276){
var vec__39277 = p__39276;
var seq__39278 = cljs.core.seq.call(null,vec__39277);
var first__39279 = cljs.core.first.call(null,seq__39278);
var seq__39278__$1 = cljs.core.next.call(null,seq__39278);
var map__39280 = first__39279;
var map__39280__$1 = ((((!((map__39280 == null)))?((((map__39280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39280.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39280):map__39280);
var msg = map__39280__$1;
var msg_name = cljs.core.get.call(null,map__39280__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39278__$1;
var pred__39282 = cljs.core._EQ_;
var expr__39283 = msg_name;
if(cljs.core.truth_(pred__39282.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39283))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39282.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39283))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39274,map__39274__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33132__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto__,msg_hist,msg_names,msg){
return (function (state_39372){
var state_val_39373 = (state_39372[(1)]);
if((state_val_39373 === (7))){
var inst_39292 = (state_39372[(2)]);
var state_39372__$1 = state_39372;
if(cljs.core.truth_(inst_39292)){
var statearr_39374_39421 = state_39372__$1;
(statearr_39374_39421[(1)] = (8));

} else {
var statearr_39375_39422 = state_39372__$1;
(statearr_39375_39422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (20))){
var inst_39366 = (state_39372[(2)]);
var state_39372__$1 = state_39372;
var statearr_39376_39423 = state_39372__$1;
(statearr_39376_39423[(2)] = inst_39366);

(statearr_39376_39423[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (27))){
var inst_39362 = (state_39372[(2)]);
var state_39372__$1 = state_39372;
var statearr_39377_39424 = state_39372__$1;
(statearr_39377_39424[(2)] = inst_39362);

(statearr_39377_39424[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (1))){
var inst_39285 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39372__$1 = state_39372;
if(cljs.core.truth_(inst_39285)){
var statearr_39378_39425 = state_39372__$1;
(statearr_39378_39425[(1)] = (2));

} else {
var statearr_39379_39426 = state_39372__$1;
(statearr_39379_39426[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (24))){
var inst_39364 = (state_39372[(2)]);
var state_39372__$1 = state_39372;
var statearr_39380_39427 = state_39372__$1;
(statearr_39380_39427[(2)] = inst_39364);

(statearr_39380_39427[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (4))){
var inst_39370 = (state_39372[(2)]);
var state_39372__$1 = state_39372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39372__$1,inst_39370);
} else {
if((state_val_39373 === (15))){
var inst_39368 = (state_39372[(2)]);
var state_39372__$1 = state_39372;
var statearr_39381_39428 = state_39372__$1;
(statearr_39381_39428[(2)] = inst_39368);

(statearr_39381_39428[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (21))){
var inst_39321 = (state_39372[(2)]);
var inst_39322 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39323 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39322);
var state_39372__$1 = (function (){var statearr_39382 = state_39372;
(statearr_39382[(7)] = inst_39321);

return statearr_39382;
})();
var statearr_39383_39429 = state_39372__$1;
(statearr_39383_39429[(2)] = inst_39323);

(statearr_39383_39429[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (31))){
var inst_39351 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39372__$1 = state_39372;
if(cljs.core.truth_(inst_39351)){
var statearr_39384_39430 = state_39372__$1;
(statearr_39384_39430[(1)] = (34));

} else {
var statearr_39385_39431 = state_39372__$1;
(statearr_39385_39431[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (32))){
var inst_39360 = (state_39372[(2)]);
var state_39372__$1 = state_39372;
var statearr_39386_39432 = state_39372__$1;
(statearr_39386_39432[(2)] = inst_39360);

(statearr_39386_39432[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (33))){
var inst_39347 = (state_39372[(2)]);
var inst_39348 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39349 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39348);
var state_39372__$1 = (function (){var statearr_39387 = state_39372;
(statearr_39387[(8)] = inst_39347);

return statearr_39387;
})();
var statearr_39388_39433 = state_39372__$1;
(statearr_39388_39433[(2)] = inst_39349);

(statearr_39388_39433[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (13))){
var inst_39306 = figwheel.client.heads_up.clear.call(null);
var state_39372__$1 = state_39372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39372__$1,(16),inst_39306);
} else {
if((state_val_39373 === (22))){
var inst_39327 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39328 = figwheel.client.heads_up.append_warning_message.call(null,inst_39327);
var state_39372__$1 = state_39372;
var statearr_39389_39434 = state_39372__$1;
(statearr_39389_39434[(2)] = inst_39328);

(statearr_39389_39434[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (36))){
var inst_39358 = (state_39372[(2)]);
var state_39372__$1 = state_39372;
var statearr_39390_39435 = state_39372__$1;
(statearr_39390_39435[(2)] = inst_39358);

(statearr_39390_39435[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (29))){
var inst_39338 = (state_39372[(2)]);
var inst_39339 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39340 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39339);
var state_39372__$1 = (function (){var statearr_39391 = state_39372;
(statearr_39391[(9)] = inst_39338);

return statearr_39391;
})();
var statearr_39392_39436 = state_39372__$1;
(statearr_39392_39436[(2)] = inst_39340);

(statearr_39392_39436[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (6))){
var inst_39287 = (state_39372[(10)]);
var state_39372__$1 = state_39372;
var statearr_39393_39437 = state_39372__$1;
(statearr_39393_39437[(2)] = inst_39287);

(statearr_39393_39437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (28))){
var inst_39334 = (state_39372[(2)]);
var inst_39335 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39336 = figwheel.client.heads_up.display_warning.call(null,inst_39335);
var state_39372__$1 = (function (){var statearr_39394 = state_39372;
(statearr_39394[(11)] = inst_39334);

return statearr_39394;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39372__$1,(29),inst_39336);
} else {
if((state_val_39373 === (25))){
var inst_39332 = figwheel.client.heads_up.clear.call(null);
var state_39372__$1 = state_39372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39372__$1,(28),inst_39332);
} else {
if((state_val_39373 === (34))){
var inst_39353 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39372__$1 = state_39372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39372__$1,(37),inst_39353);
} else {
if((state_val_39373 === (17))){
var inst_39312 = (state_39372[(2)]);
var inst_39313 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39314 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39313);
var state_39372__$1 = (function (){var statearr_39395 = state_39372;
(statearr_39395[(12)] = inst_39312);

return statearr_39395;
})();
var statearr_39396_39438 = state_39372__$1;
(statearr_39396_39438[(2)] = inst_39314);

(statearr_39396_39438[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (3))){
var inst_39304 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39372__$1 = state_39372;
if(cljs.core.truth_(inst_39304)){
var statearr_39397_39439 = state_39372__$1;
(statearr_39397_39439[(1)] = (13));

} else {
var statearr_39398_39440 = state_39372__$1;
(statearr_39398_39440[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (12))){
var inst_39300 = (state_39372[(2)]);
var state_39372__$1 = state_39372;
var statearr_39399_39441 = state_39372__$1;
(statearr_39399_39441[(2)] = inst_39300);

(statearr_39399_39441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (2))){
var inst_39287 = (state_39372[(10)]);
var inst_39287__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39372__$1 = (function (){var statearr_39400 = state_39372;
(statearr_39400[(10)] = inst_39287__$1);

return statearr_39400;
})();
if(cljs.core.truth_(inst_39287__$1)){
var statearr_39401_39442 = state_39372__$1;
(statearr_39401_39442[(1)] = (5));

} else {
var statearr_39402_39443 = state_39372__$1;
(statearr_39402_39443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (23))){
var inst_39330 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39372__$1 = state_39372;
if(cljs.core.truth_(inst_39330)){
var statearr_39403_39444 = state_39372__$1;
(statearr_39403_39444[(1)] = (25));

} else {
var statearr_39404_39445 = state_39372__$1;
(statearr_39404_39445[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (35))){
var state_39372__$1 = state_39372;
var statearr_39405_39446 = state_39372__$1;
(statearr_39405_39446[(2)] = null);

(statearr_39405_39446[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (19))){
var inst_39325 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39372__$1 = state_39372;
if(cljs.core.truth_(inst_39325)){
var statearr_39406_39447 = state_39372__$1;
(statearr_39406_39447[(1)] = (22));

} else {
var statearr_39407_39448 = state_39372__$1;
(statearr_39407_39448[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (11))){
var inst_39296 = (state_39372[(2)]);
var state_39372__$1 = state_39372;
var statearr_39408_39449 = state_39372__$1;
(statearr_39408_39449[(2)] = inst_39296);

(statearr_39408_39449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (9))){
var inst_39298 = figwheel.client.heads_up.clear.call(null);
var state_39372__$1 = state_39372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39372__$1,(12),inst_39298);
} else {
if((state_val_39373 === (5))){
var inst_39289 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39372__$1 = state_39372;
var statearr_39409_39450 = state_39372__$1;
(statearr_39409_39450[(2)] = inst_39289);

(statearr_39409_39450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (14))){
var inst_39316 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39372__$1 = state_39372;
if(cljs.core.truth_(inst_39316)){
var statearr_39410_39451 = state_39372__$1;
(statearr_39410_39451[(1)] = (18));

} else {
var statearr_39411_39452 = state_39372__$1;
(statearr_39411_39452[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (26))){
var inst_39342 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39372__$1 = state_39372;
if(cljs.core.truth_(inst_39342)){
var statearr_39412_39453 = state_39372__$1;
(statearr_39412_39453[(1)] = (30));

} else {
var statearr_39413_39454 = state_39372__$1;
(statearr_39413_39454[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (16))){
var inst_39308 = (state_39372[(2)]);
var inst_39309 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39310 = figwheel.client.heads_up.display_exception.call(null,inst_39309);
var state_39372__$1 = (function (){var statearr_39414 = state_39372;
(statearr_39414[(13)] = inst_39308);

return statearr_39414;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39372__$1,(17),inst_39310);
} else {
if((state_val_39373 === (30))){
var inst_39344 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39345 = figwheel.client.heads_up.display_warning.call(null,inst_39344);
var state_39372__$1 = state_39372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39372__$1,(33),inst_39345);
} else {
if((state_val_39373 === (10))){
var inst_39302 = (state_39372[(2)]);
var state_39372__$1 = state_39372;
var statearr_39415_39455 = state_39372__$1;
(statearr_39415_39455[(2)] = inst_39302);

(statearr_39415_39455[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (18))){
var inst_39318 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39319 = figwheel.client.heads_up.display_exception.call(null,inst_39318);
var state_39372__$1 = state_39372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39372__$1,(21),inst_39319);
} else {
if((state_val_39373 === (37))){
var inst_39355 = (state_39372[(2)]);
var state_39372__$1 = state_39372;
var statearr_39416_39456 = state_39372__$1;
(statearr_39416_39456[(2)] = inst_39355);

(statearr_39416_39456[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (8))){
var inst_39294 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39372__$1 = state_39372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39372__$1,(11),inst_39294);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33132__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33042__auto__,c__33132__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33043__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33043__auto____0 = (function (){
var statearr_39417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39417[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33043__auto__);

(statearr_39417[(1)] = (1));

return statearr_39417;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33043__auto____1 = (function (state_39372){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_39372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e39418){if((e39418 instanceof Object)){
var ex__33046__auto__ = e39418;
var statearr_39419_39457 = state_39372;
(statearr_39419_39457[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39458 = state_39372;
state_39372 = G__39458;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33043__auto__ = function(state_39372){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33043__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33043__auto____1.call(this,state_39372);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33043__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33043__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto__,msg_hist,msg_names,msg))
})();
var state__33134__auto__ = (function (){var statearr_39420 = f__33133__auto__.call(null);
(statearr_39420[(6)] = c__33132__auto__);

return statearr_39420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto__,msg_hist,msg_names,msg))
);

return c__33132__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33132__auto___39487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto___39487,ch){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto___39487,ch){
return (function (state_39473){
var state_val_39474 = (state_39473[(1)]);
if((state_val_39474 === (1))){
var state_39473__$1 = state_39473;
var statearr_39475_39488 = state_39473__$1;
(statearr_39475_39488[(2)] = null);

(statearr_39475_39488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39474 === (2))){
var state_39473__$1 = state_39473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39473__$1,(4),ch);
} else {
if((state_val_39474 === (3))){
var inst_39471 = (state_39473[(2)]);
var state_39473__$1 = state_39473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39473__$1,inst_39471);
} else {
if((state_val_39474 === (4))){
var inst_39461 = (state_39473[(7)]);
var inst_39461__$1 = (state_39473[(2)]);
var state_39473__$1 = (function (){var statearr_39476 = state_39473;
(statearr_39476[(7)] = inst_39461__$1);

return statearr_39476;
})();
if(cljs.core.truth_(inst_39461__$1)){
var statearr_39477_39489 = state_39473__$1;
(statearr_39477_39489[(1)] = (5));

} else {
var statearr_39478_39490 = state_39473__$1;
(statearr_39478_39490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39474 === (5))){
var inst_39461 = (state_39473[(7)]);
var inst_39463 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39461);
var state_39473__$1 = state_39473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39473__$1,(8),inst_39463);
} else {
if((state_val_39474 === (6))){
var state_39473__$1 = state_39473;
var statearr_39479_39491 = state_39473__$1;
(statearr_39479_39491[(2)] = null);

(statearr_39479_39491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39474 === (7))){
var inst_39469 = (state_39473[(2)]);
var state_39473__$1 = state_39473;
var statearr_39480_39492 = state_39473__$1;
(statearr_39480_39492[(2)] = inst_39469);

(statearr_39480_39492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39474 === (8))){
var inst_39465 = (state_39473[(2)]);
var state_39473__$1 = (function (){var statearr_39481 = state_39473;
(statearr_39481[(8)] = inst_39465);

return statearr_39481;
})();
var statearr_39482_39493 = state_39473__$1;
(statearr_39482_39493[(2)] = null);

(statearr_39482_39493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__33132__auto___39487,ch))
;
return ((function (switch__33042__auto__,c__33132__auto___39487,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33043__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33043__auto____0 = (function (){
var statearr_39483 = [null,null,null,null,null,null,null,null,null];
(statearr_39483[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33043__auto__);

(statearr_39483[(1)] = (1));

return statearr_39483;
});
var figwheel$client$heads_up_plugin_$_state_machine__33043__auto____1 = (function (state_39473){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_39473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e39484){if((e39484 instanceof Object)){
var ex__33046__auto__ = e39484;
var statearr_39485_39494 = state_39473;
(statearr_39485_39494[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39495 = state_39473;
state_39473 = G__39495;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33043__auto__ = function(state_39473){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33043__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33043__auto____1.call(this,state_39473);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33043__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33043__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto___39487,ch))
})();
var state__33134__auto__ = (function (){var statearr_39486 = f__33133__auto__.call(null);
(statearr_39486[(6)] = c__33132__auto___39487);

return statearr_39486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto___39487,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33132__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto__){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto__){
return (function (state_39501){
var state_val_39502 = (state_39501[(1)]);
if((state_val_39502 === (1))){
var inst_39496 = cljs.core.async.timeout.call(null,(3000));
var state_39501__$1 = state_39501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39501__$1,(2),inst_39496);
} else {
if((state_val_39502 === (2))){
var inst_39498 = (state_39501[(2)]);
var inst_39499 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39501__$1 = (function (){var statearr_39503 = state_39501;
(statearr_39503[(7)] = inst_39498);

return statearr_39503;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39501__$1,inst_39499);
} else {
return null;
}
}
});})(c__33132__auto__))
;
return ((function (switch__33042__auto__,c__33132__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33043__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33043__auto____0 = (function (){
var statearr_39504 = [null,null,null,null,null,null,null,null];
(statearr_39504[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33043__auto__);

(statearr_39504[(1)] = (1));

return statearr_39504;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33043__auto____1 = (function (state_39501){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_39501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e39505){if((e39505 instanceof Object)){
var ex__33046__auto__ = e39505;
var statearr_39506_39508 = state_39501;
(statearr_39506_39508[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39509 = state_39501;
state_39501 = G__39509;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33043__auto__ = function(state_39501){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33043__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33043__auto____1.call(this,state_39501);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33043__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33043__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto__))
})();
var state__33134__auto__ = (function (){var statearr_39507 = f__33133__auto__.call(null);
(statearr_39507[(6)] = c__33132__auto__);

return statearr_39507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto__))
);

return c__33132__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5278__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5278__auto__)){
var figwheel_version = temp__5278__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33132__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto__,figwheel_version,temp__5278__auto__){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto__,figwheel_version,temp__5278__auto__){
return (function (state_39516){
var state_val_39517 = (state_39516[(1)]);
if((state_val_39517 === (1))){
var inst_39510 = cljs.core.async.timeout.call(null,(2000));
var state_39516__$1 = state_39516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39516__$1,(2),inst_39510);
} else {
if((state_val_39517 === (2))){
var inst_39512 = (state_39516[(2)]);
var inst_39513 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39514 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39513);
var state_39516__$1 = (function (){var statearr_39518 = state_39516;
(statearr_39518[(7)] = inst_39512);

return statearr_39518;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39516__$1,inst_39514);
} else {
return null;
}
}
});})(c__33132__auto__,figwheel_version,temp__5278__auto__))
;
return ((function (switch__33042__auto__,c__33132__auto__,figwheel_version,temp__5278__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33043__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33043__auto____0 = (function (){
var statearr_39519 = [null,null,null,null,null,null,null,null];
(statearr_39519[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33043__auto__);

(statearr_39519[(1)] = (1));

return statearr_39519;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33043__auto____1 = (function (state_39516){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_39516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e39520){if((e39520 instanceof Object)){
var ex__33046__auto__ = e39520;
var statearr_39521_39523 = state_39516;
(statearr_39521_39523[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39524 = state_39516;
state_39516 = G__39524;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33043__auto__ = function(state_39516){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33043__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33043__auto____1.call(this,state_39516);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33043__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33043__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto__,figwheel_version,temp__5278__auto__))
})();
var state__33134__auto__ = (function (){var statearr_39522 = f__33133__auto__.call(null);
(statearr_39522[(6)] = c__33132__auto__);

return statearr_39522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto__,figwheel_version,temp__5278__auto__))
);

return c__33132__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39525){
var map__39526 = p__39525;
var map__39526__$1 = ((((!((map__39526 == null)))?((((map__39526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39526):map__39526);
var file = cljs.core.get.call(null,map__39526__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39526__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39526__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39528 = "";
var G__39528__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39528),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39528);
var G__39528__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39528__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39528__$1);
if(cljs.core.truth_((function (){var and__30036__auto__ = line;
if(cljs.core.truth_(and__30036__auto__)){
return column;
} else {
return and__30036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39528__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39528__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39529){
var map__39530 = p__39529;
var map__39530__$1 = ((((!((map__39530 == null)))?((((map__39530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39530):map__39530);
var ed = map__39530__$1;
var formatted_exception = cljs.core.get.call(null,map__39530__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39530__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39530__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39532_39536 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39533_39537 = null;
var count__39534_39538 = (0);
var i__39535_39539 = (0);
while(true){
if((i__39535_39539 < count__39534_39538)){
var msg_39540 = cljs.core._nth.call(null,chunk__39533_39537,i__39535_39539);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39540);

var G__39541 = seq__39532_39536;
var G__39542 = chunk__39533_39537;
var G__39543 = count__39534_39538;
var G__39544 = (i__39535_39539 + (1));
seq__39532_39536 = G__39541;
chunk__39533_39537 = G__39542;
count__39534_39538 = G__39543;
i__39535_39539 = G__39544;
continue;
} else {
var temp__5278__auto___39545 = cljs.core.seq.call(null,seq__39532_39536);
if(temp__5278__auto___39545){
var seq__39532_39546__$1 = temp__5278__auto___39545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39532_39546__$1)){
var c__30980__auto___39547 = cljs.core.chunk_first.call(null,seq__39532_39546__$1);
var G__39548 = cljs.core.chunk_rest.call(null,seq__39532_39546__$1);
var G__39549 = c__30980__auto___39547;
var G__39550 = cljs.core.count.call(null,c__30980__auto___39547);
var G__39551 = (0);
seq__39532_39536 = G__39548;
chunk__39533_39537 = G__39549;
count__39534_39538 = G__39550;
i__39535_39539 = G__39551;
continue;
} else {
var msg_39552 = cljs.core.first.call(null,seq__39532_39546__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39552);

var G__39553 = cljs.core.next.call(null,seq__39532_39546__$1);
var G__39554 = null;
var G__39555 = (0);
var G__39556 = (0);
seq__39532_39536 = G__39553;
chunk__39533_39537 = G__39554;
count__39534_39538 = G__39555;
i__39535_39539 = G__39556;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39557){
var map__39558 = p__39557;
var map__39558__$1 = ((((!((map__39558 == null)))?((((map__39558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39558):map__39558);
var w = map__39558__$1;
var message = cljs.core.get.call(null,map__39558__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39560 = cljs.core.seq.call(null,plugins);
var chunk__39561 = null;
var count__39562 = (0);
var i__39563 = (0);
while(true){
if((i__39563 < count__39562)){
var vec__39564 = cljs.core._nth.call(null,chunk__39561,i__39563);
var k = cljs.core.nth.call(null,vec__39564,(0),null);
var plugin = cljs.core.nth.call(null,vec__39564,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39570 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39560,chunk__39561,count__39562,i__39563,pl_39570,vec__39564,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39570.call(null,msg_hist);
});})(seq__39560,chunk__39561,count__39562,i__39563,pl_39570,vec__39564,k,plugin))
);
} else {
}

var G__39571 = seq__39560;
var G__39572 = chunk__39561;
var G__39573 = count__39562;
var G__39574 = (i__39563 + (1));
seq__39560 = G__39571;
chunk__39561 = G__39572;
count__39562 = G__39573;
i__39563 = G__39574;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__39560);
if(temp__5278__auto__){
var seq__39560__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39560__$1)){
var c__30980__auto__ = cljs.core.chunk_first.call(null,seq__39560__$1);
var G__39575 = cljs.core.chunk_rest.call(null,seq__39560__$1);
var G__39576 = c__30980__auto__;
var G__39577 = cljs.core.count.call(null,c__30980__auto__);
var G__39578 = (0);
seq__39560 = G__39575;
chunk__39561 = G__39576;
count__39562 = G__39577;
i__39563 = G__39578;
continue;
} else {
var vec__39567 = cljs.core.first.call(null,seq__39560__$1);
var k = cljs.core.nth.call(null,vec__39567,(0),null);
var plugin = cljs.core.nth.call(null,vec__39567,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39579 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39560,chunk__39561,count__39562,i__39563,pl_39579,vec__39567,k,plugin,seq__39560__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39579.call(null,msg_hist);
});})(seq__39560,chunk__39561,count__39562,i__39563,pl_39579,vec__39567,k,plugin,seq__39560__$1,temp__5278__auto__))
);
} else {
}

var G__39580 = cljs.core.next.call(null,seq__39560__$1);
var G__39581 = null;
var G__39582 = (0);
var G__39583 = (0);
seq__39560 = G__39580;
chunk__39561 = G__39581;
count__39562 = G__39582;
i__39563 = G__39583;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__39585 = arguments.length;
switch (G__39585) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__39586_39591 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39587_39592 = null;
var count__39588_39593 = (0);
var i__39589_39594 = (0);
while(true){
if((i__39589_39594 < count__39588_39593)){
var msg_39595 = cljs.core._nth.call(null,chunk__39587_39592,i__39589_39594);
figwheel.client.socket.handle_incoming_message.call(null,msg_39595);

var G__39596 = seq__39586_39591;
var G__39597 = chunk__39587_39592;
var G__39598 = count__39588_39593;
var G__39599 = (i__39589_39594 + (1));
seq__39586_39591 = G__39596;
chunk__39587_39592 = G__39597;
count__39588_39593 = G__39598;
i__39589_39594 = G__39599;
continue;
} else {
var temp__5278__auto___39600 = cljs.core.seq.call(null,seq__39586_39591);
if(temp__5278__auto___39600){
var seq__39586_39601__$1 = temp__5278__auto___39600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39586_39601__$1)){
var c__30980__auto___39602 = cljs.core.chunk_first.call(null,seq__39586_39601__$1);
var G__39603 = cljs.core.chunk_rest.call(null,seq__39586_39601__$1);
var G__39604 = c__30980__auto___39602;
var G__39605 = cljs.core.count.call(null,c__30980__auto___39602);
var G__39606 = (0);
seq__39586_39591 = G__39603;
chunk__39587_39592 = G__39604;
count__39588_39593 = G__39605;
i__39589_39594 = G__39606;
continue;
} else {
var msg_39607 = cljs.core.first.call(null,seq__39586_39601__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39607);

var G__39608 = cljs.core.next.call(null,seq__39586_39601__$1);
var G__39609 = null;
var G__39610 = (0);
var G__39611 = (0);
seq__39586_39591 = G__39608;
chunk__39587_39592 = G__39609;
count__39588_39593 = G__39610;
i__39589_39594 = G__39611;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31333__auto__ = [];
var len__31326__auto___39616 = arguments.length;
var i__31327__auto___39617 = (0);
while(true){
if((i__31327__auto___39617 < len__31326__auto___39616)){
args__31333__auto__.push((arguments[i__31327__auto___39617]));

var G__39618 = (i__31327__auto___39617 + (1));
i__31327__auto___39617 = G__39618;
continue;
} else {
}
break;
}

var argseq__31334__auto__ = ((((0) < args__31333__auto__.length))?(new cljs.core.IndexedSeq(args__31333__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31334__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39613){
var map__39614 = p__39613;
var map__39614__$1 = ((((!((map__39614 == null)))?((((map__39614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39614):map__39614);
var opts = map__39614__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39612){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39612));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39619){if((e39619 instanceof Error)){
var e = e39619;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39619;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__39620){
var map__39621 = p__39620;
var map__39621__$1 = ((((!((map__39621 == null)))?((((map__39621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39621.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39621):map__39621);
var msg_name = cljs.core.get.call(null,map__39621__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1507075205506
