// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__30782__auto__ = (((value == null))?null:value);
var m__30783__auto__ = (devtools.format._header[goog.typeOf(x__30782__auto__)]);
if(!((m__30783__auto__ == null))){
return m__30783__auto__.call(null,value);
} else {
var m__30783__auto____$1 = (devtools.format._header["_"]);
if(!((m__30783__auto____$1 == null))){
return m__30783__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__30782__auto__ = (((value == null))?null:value);
var m__30783__auto__ = (devtools.format._has_body[goog.typeOf(x__30782__auto__)]);
if(!((m__30783__auto__ == null))){
return m__30783__auto__.call(null,value);
} else {
var m__30783__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__30783__auto____$1 == null))){
return m__30783__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__30782__auto__ = (((value == null))?null:value);
var m__30783__auto__ = (devtools.format._body[goog.typeOf(x__30782__auto__)]);
if(!((m__30783__auto__ == null))){
return m__30783__auto__.call(null,value);
} else {
var m__30783__auto____$1 = (devtools.format._body["_"]);
if(!((m__30783__auto____$1 == null))){
return m__30783__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o39680 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39680["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39681 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39681["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39682 = temp__5276__auto____$2;
return (o39682["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o39683 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39683["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39684 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39684["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39685 = temp__5276__auto____$2;
return (o39685["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o39686 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39686["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39687 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39687["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39688 = temp__5276__auto____$2;
return (o39688["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o39689 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39689["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39690 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39690["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39691 = temp__5276__auto____$2;
return (o39691["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o39692 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39692["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39693 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39693["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39694 = temp__5276__auto____$2;
return (o39694["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o39695 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39695["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39696 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39696["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39697 = temp__5276__auto____$2;
return (o39697["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o39698 = temp__5276__auto__;
var temp__5276__auto____$1 = (o39698["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o39699 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o39699["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o39700 = temp__5276__auto____$2;
return (o39700["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__31333__auto__ = [];
var len__31326__auto___39702 = arguments.length;
var i__31327__auto___39703 = (0);
while(true){
if((i__31327__auto___39703 < len__31326__auto___39702)){
args__31333__auto__.push((arguments[i__31327__auto___39703]));

var G__39704 = (i__31327__auto___39703 + (1));
i__31327__auto___39703 = G__39704;
continue;
} else {
}
break;
}

var argseq__31334__auto__ = ((((0) < args__31333__auto__.length))?(new cljs.core.IndexedSeq(args__31333__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__31334__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq39701){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39701));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31333__auto__ = [];
var len__31326__auto___39706 = arguments.length;
var i__31327__auto___39707 = (0);
while(true){
if((i__31327__auto___39707 < len__31326__auto___39706)){
args__31333__auto__.push((arguments[i__31327__auto___39707]));

var G__39708 = (i__31327__auto___39707 + (1));
i__31327__auto___39707 = G__39708;
continue;
} else {
}
break;
}

var argseq__31334__auto__ = ((((0) < args__31333__auto__.length))?(new cljs.core.IndexedSeq(args__31333__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__31334__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq39705){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39705));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31333__auto__ = [];
var len__31326__auto___39710 = arguments.length;
var i__31327__auto___39711 = (0);
while(true){
if((i__31327__auto___39711 < len__31326__auto___39710)){
args__31333__auto__.push((arguments[i__31327__auto___39711]));

var G__39712 = (i__31327__auto___39711 + (1));
i__31327__auto___39711 = G__39712;
continue;
} else {
}
break;
}

var argseq__31334__auto__ = ((((0) < args__31333__auto__.length))?(new cljs.core.IndexedSeq(args__31333__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31334__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq39709){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39709));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31333__auto__ = [];
var len__31326__auto___39714 = arguments.length;
var i__31327__auto___39715 = (0);
while(true){
if((i__31327__auto___39715 < len__31326__auto___39714)){
args__31333__auto__.push((arguments[i__31327__auto___39715]));

var G__39716 = (i__31327__auto___39715 + (1));
i__31327__auto___39715 = G__39716;
continue;
} else {
}
break;
}

var argseq__31334__auto__ = ((((0) < args__31333__auto__.length))?(new cljs.core.IndexedSeq(args__31333__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31334__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq39713){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39713));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31333__auto__ = [];
var len__31326__auto___39718 = arguments.length;
var i__31327__auto___39719 = (0);
while(true){
if((i__31327__auto___39719 < len__31326__auto___39718)){
args__31333__auto__.push((arguments[i__31327__auto___39719]));

var G__39720 = (i__31327__auto___39719 + (1));
i__31327__auto___39719 = G__39720;
continue;
} else {
}
break;
}

var argseq__31334__auto__ = ((((0) < args__31333__auto__.length))?(new cljs.core.IndexedSeq(args__31333__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__31334__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq39717){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39717));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31333__auto__ = [];
var len__31326__auto___39722 = arguments.length;
var i__31327__auto___39723 = (0);
while(true){
if((i__31327__auto___39723 < len__31326__auto___39722)){
args__31333__auto__.push((arguments[i__31327__auto___39723]));

var G__39724 = (i__31327__auto___39723 + (1));
i__31327__auto___39723 = G__39724;
continue;
} else {
}
break;
}

var argseq__31334__auto__ = ((((0) < args__31333__auto__.length))?(new cljs.core.IndexedSeq(args__31333__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__31334__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq39721){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39721));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31333__auto__ = [];
var len__31326__auto___39726 = arguments.length;
var i__31327__auto___39727 = (0);
while(true){
if((i__31327__auto___39727 < len__31326__auto___39726)){
args__31333__auto__.push((arguments[i__31327__auto___39727]));

var G__39728 = (i__31327__auto___39727 + (1));
i__31327__auto___39727 = G__39728;
continue;
} else {
}
break;
}

var argseq__31334__auto__ = ((((0) < args__31333__auto__.length))?(new cljs.core.IndexedSeq(args__31333__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31334__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq39725){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39725));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31333__auto__ = [];
var len__31326__auto___39736 = arguments.length;
var i__31327__auto___39737 = (0);
while(true){
if((i__31327__auto___39737 < len__31326__auto___39736)){
args__31333__auto__.push((arguments[i__31327__auto___39737]));

var G__39738 = (i__31327__auto___39737 + (1));
i__31327__auto___39737 = G__39738;
continue;
} else {
}
break;
}

var argseq__31334__auto__ = ((((1) < args__31333__auto__.length))?(new cljs.core.IndexedSeq(args__31333__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31334__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__39732){
var vec__39733 = p__39732;
var state_override = cljs.core.nth.call(null,vec__39733,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__39733,state_override){
return (function (p1__39729_SHARP_){
return cljs.core.merge.call(null,p1__39729_SHARP_,state_override);
});})(vec__39733,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq39730){
var G__39731 = cljs.core.first.call(null,seq39730);
var seq39730__$1 = cljs.core.next.call(null,seq39730);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__39731,seq39730__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31333__auto__ = [];
var len__31326__auto___39740 = arguments.length;
var i__31327__auto___39741 = (0);
while(true){
if((i__31327__auto___39741 < len__31326__auto___39740)){
args__31333__auto__.push((arguments[i__31327__auto___39741]));

var G__39742 = (i__31327__auto___39741 + (1));
i__31327__auto___39741 = G__39742;
continue;
} else {
}
break;
}

var argseq__31334__auto__ = ((((0) < args__31333__auto__.length))?(new cljs.core.IndexedSeq(args__31333__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__31334__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq39739){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39739));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31333__auto__ = [];
var len__31326__auto___39745 = arguments.length;
var i__31327__auto___39746 = (0);
while(true){
if((i__31327__auto___39746 < len__31326__auto___39745)){
args__31333__auto__.push((arguments[i__31327__auto___39746]));

var G__39747 = (i__31327__auto___39746 + (1));
i__31327__auto___39746 = G__39747;
continue;
} else {
}
break;
}

var argseq__31334__auto__ = ((((1) < args__31333__auto__.length))?(new cljs.core.IndexedSeq(args__31333__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31334__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq39743){
var G__39744 = cljs.core.first.call(null,seq39743);
var seq39743__$1 = cljs.core.next.call(null,seq39743);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__39744,seq39743__$1);
});


//# sourceMappingURL=format.js.map?rel=1507075205828
