// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x41900_41901 = value;
x41900_41901.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x41903_41904 = value;
x41903_41904.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x41906_41907 = value;
x41906_41907.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__30036__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__30036__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__30036__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__31333__auto__ = [];
var len__31326__auto___41914 = arguments.length;
var i__31327__auto___41915 = (0);
while(true){
if((i__31327__auto___41915 < len__31326__auto___41914)){
args__31333__auto__.push((arguments[i__31327__auto___41915]));

var G__41916 = (i__31327__auto___41915 + (1));
i__31327__auto___41915 = G__41916;
continue;
} else {
}
break;
}

var argseq__31334__auto__ = ((((0) < args__31333__auto__.length))?(new cljs.core.IndexedSeq(args__31333__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31334__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__41910_41917 = cljs.core.seq.call(null,items);
var chunk__41911_41918 = null;
var count__41912_41919 = (0);
var i__41913_41920 = (0);
while(true){
if((i__41913_41920 < count__41912_41919)){
var item_41921 = cljs.core._nth.call(null,chunk__41911_41918,i__41913_41920);
if(!((item_41921 == null))){
if(cljs.core.coll_QMARK_.call(null,item_41921)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_41921)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_41921));
}
} else {
}

var G__41922 = seq__41910_41917;
var G__41923 = chunk__41911_41918;
var G__41924 = count__41912_41919;
var G__41925 = (i__41913_41920 + (1));
seq__41910_41917 = G__41922;
chunk__41911_41918 = G__41923;
count__41912_41919 = G__41924;
i__41913_41920 = G__41925;
continue;
} else {
var temp__5278__auto___41926 = cljs.core.seq.call(null,seq__41910_41917);
if(temp__5278__auto___41926){
var seq__41910_41927__$1 = temp__5278__auto___41926;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41910_41927__$1)){
var c__30980__auto___41928 = cljs.core.chunk_first.call(null,seq__41910_41927__$1);
var G__41929 = cljs.core.chunk_rest.call(null,seq__41910_41927__$1);
var G__41930 = c__30980__auto___41928;
var G__41931 = cljs.core.count.call(null,c__30980__auto___41928);
var G__41932 = (0);
seq__41910_41917 = G__41929;
chunk__41911_41918 = G__41930;
count__41912_41919 = G__41931;
i__41913_41920 = G__41932;
continue;
} else {
var item_41933 = cljs.core.first.call(null,seq__41910_41927__$1);
if(!((item_41933 == null))){
if(cljs.core.coll_QMARK_.call(null,item_41933)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_41933)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_41933));
}
} else {
}

var G__41934 = cljs.core.next.call(null,seq__41910_41927__$1);
var G__41935 = null;
var G__41936 = (0);
var G__41937 = (0);
seq__41910_41917 = G__41934;
chunk__41911_41918 = G__41935;
count__41912_41919 = G__41936;
i__41913_41920 = G__41937;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq41909){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41909));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__31333__auto__ = [];
var len__31326__auto___41945 = arguments.length;
var i__31327__auto___41946 = (0);
while(true){
if((i__31327__auto___41946 < len__31326__auto___41945)){
args__31333__auto__.push((arguments[i__31327__auto___41946]));

var G__41947 = (i__31327__auto___41946 + (1));
i__31327__auto___41946 = G__41947;
continue;
} else {
}
break;
}

var argseq__31334__auto__ = ((((2) < args__31333__auto__.length))?(new cljs.core.IndexedSeq(args__31333__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31334__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__41941_41948 = cljs.core.seq.call(null,children);
var chunk__41942_41949 = null;
var count__41943_41950 = (0);
var i__41944_41951 = (0);
while(true){
if((i__41944_41951 < count__41943_41950)){
var child_41952 = cljs.core._nth.call(null,chunk__41942_41949,i__41944_41951);
if(!((child_41952 == null))){
if(cljs.core.coll_QMARK_.call(null,child_41952)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_41952))));
} else {
var temp__5276__auto___41953 = devtools.formatters.helpers.pref.call(null,child_41952);
if(cljs.core.truth_(temp__5276__auto___41953)){
var child_value_41954 = temp__5276__auto___41953;
template.push(child_value_41954);
} else {
}
}
} else {
}

var G__41955 = seq__41941_41948;
var G__41956 = chunk__41942_41949;
var G__41957 = count__41943_41950;
var G__41958 = (i__41944_41951 + (1));
seq__41941_41948 = G__41955;
chunk__41942_41949 = G__41956;
count__41943_41950 = G__41957;
i__41944_41951 = G__41958;
continue;
} else {
var temp__5278__auto___41959 = cljs.core.seq.call(null,seq__41941_41948);
if(temp__5278__auto___41959){
var seq__41941_41960__$1 = temp__5278__auto___41959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41941_41960__$1)){
var c__30980__auto___41961 = cljs.core.chunk_first.call(null,seq__41941_41960__$1);
var G__41962 = cljs.core.chunk_rest.call(null,seq__41941_41960__$1);
var G__41963 = c__30980__auto___41961;
var G__41964 = cljs.core.count.call(null,c__30980__auto___41961);
var G__41965 = (0);
seq__41941_41948 = G__41962;
chunk__41942_41949 = G__41963;
count__41943_41950 = G__41964;
i__41944_41951 = G__41965;
continue;
} else {
var child_41966 = cljs.core.first.call(null,seq__41941_41960__$1);
if(!((child_41966 == null))){
if(cljs.core.coll_QMARK_.call(null,child_41966)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_41966))));
} else {
var temp__5276__auto___41967 = devtools.formatters.helpers.pref.call(null,child_41966);
if(cljs.core.truth_(temp__5276__auto___41967)){
var child_value_41968 = temp__5276__auto___41967;
template.push(child_value_41968);
} else {
}
}
} else {
}

var G__41969 = cljs.core.next.call(null,seq__41941_41960__$1);
var G__41970 = null;
var G__41971 = (0);
var G__41972 = (0);
seq__41941_41948 = G__41969;
chunk__41942_41949 = G__41970;
count__41943_41950 = G__41971;
i__41944_41951 = G__41972;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq41938){
var G__41939 = cljs.core.first.call(null,seq41938);
var seq41938__$1 = cljs.core.next.call(null,seq41938);
var G__41940 = cljs.core.first.call(null,seq41938__$1);
var seq41938__$2 = cljs.core.next.call(null,seq41938__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__41939,G__41940,seq41938__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__31333__auto__ = [];
var len__31326__auto___41975 = arguments.length;
var i__31327__auto___41976 = (0);
while(true){
if((i__31327__auto___41976 < len__31326__auto___41975)){
args__31333__auto__.push((arguments[i__31327__auto___41976]));

var G__41977 = (i__31327__auto___41976 + (1));
i__31327__auto___41976 = G__41977;
continue;
} else {
}
break;
}

var argseq__31334__auto__ = ((((1) < args__31333__auto__.length))?(new cljs.core.IndexedSeq(args__31333__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31334__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq41973){
var G__41974 = cljs.core.first.call(null,seq41973);
var seq41973__$1 = cljs.core.next.call(null,seq41973);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41974,seq41973__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__31333__auto__ = [];
var len__31326__auto___41980 = arguments.length;
var i__31327__auto___41981 = (0);
while(true){
if((i__31327__auto___41981 < len__31326__auto___41980)){
args__31333__auto__.push((arguments[i__31327__auto___41981]));

var G__41982 = (i__31327__auto___41981 + (1));
i__31327__auto___41981 = G__41982;
continue;
} else {
}
break;
}

var argseq__31334__auto__ = ((((1) < args__31333__auto__.length))?(new cljs.core.IndexedSeq(args__31333__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31334__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq41978){
var G__41979 = cljs.core.first.call(null,seq41978);
var seq41978__$1 = cljs.core.next.call(null,seq41978);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41979,seq41978__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__41984 = arguments.length;
switch (G__41984) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj41986 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__30048__auto__ = start_index;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return (0);
}
})()};
return obj41986;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__31333__auto__ = [];
var len__31326__auto___41994 = arguments.length;
var i__31327__auto___41995 = (0);
while(true){
if((i__31327__auto___41995 < len__31326__auto___41994)){
args__31333__auto__.push((arguments[i__31327__auto___41995]));

var G__41996 = (i__31327__auto___41995 + (1));
i__31327__auto___41995 = G__41996;
continue;
} else {
}
break;
}

var argseq__31334__auto__ = ((((1) < args__31333__auto__.length))?(new cljs.core.IndexedSeq(args__31333__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31334__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__41990){
var vec__41991 = p__41990;
var state_override_fn = cljs.core.nth.call(null,vec__41991,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq41988){
var G__41989 = cljs.core.first.call(null,seq41988);
var seq41988__$1 = cljs.core.next.call(null,seq41988);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__41989,seq41988__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_41997 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_41997;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__41998 = name;
switch (G__41998) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__42000 = tag;
var html_tag = cljs.core.nth.call(null,vec__42000,(0),null);
var style = cljs.core.nth.call(null,vec__42000,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_42003 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_42003;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_42004 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_42005 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_42005;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_42004;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__42006 = initial_value;
var G__42007 = value.call(null);
initial_value = G__42006;
value = G__42007;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__42008 = initial_value;
var G__42009 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__42008;
value = G__42009;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__42010 = initial_value;
var G__42011 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__42010;
value = G__42011;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1507075210315
