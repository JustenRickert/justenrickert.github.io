// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30048__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30048__auto__){
return or__30048__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30048__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
var or__30048__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30048__auto____$1)){
return or__30048__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36718_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36718_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__36719 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36720 = null;
var count__36721 = (0);
var i__36722 = (0);
while(true){
if((i__36722 < count__36721)){
var n = cljs.core._nth.call(null,chunk__36720,i__36722);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36723 = seq__36719;
var G__36724 = chunk__36720;
var G__36725 = count__36721;
var G__36726 = (i__36722 + (1));
seq__36719 = G__36723;
chunk__36720 = G__36724;
count__36721 = G__36725;
i__36722 = G__36726;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__36719);
if(temp__5278__auto__){
var seq__36719__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36719__$1)){
var c__30980__auto__ = cljs.core.chunk_first.call(null,seq__36719__$1);
var G__36727 = cljs.core.chunk_rest.call(null,seq__36719__$1);
var G__36728 = c__30980__auto__;
var G__36729 = cljs.core.count.call(null,c__30980__auto__);
var G__36730 = (0);
seq__36719 = G__36727;
chunk__36720 = G__36728;
count__36721 = G__36729;
i__36722 = G__36730;
continue;
} else {
var n = cljs.core.first.call(null,seq__36719__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36731 = cljs.core.next.call(null,seq__36719__$1);
var G__36732 = null;
var G__36733 = (0);
var G__36734 = (0);
seq__36719 = G__36731;
chunk__36720 = G__36732;
count__36721 = G__36733;
i__36722 = G__36734;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__36744_36752 = cljs.core.seq.call(null,deps);
var chunk__36745_36753 = null;
var count__36746_36754 = (0);
var i__36747_36755 = (0);
while(true){
if((i__36747_36755 < count__36746_36754)){
var dep_36756 = cljs.core._nth.call(null,chunk__36745_36753,i__36747_36755);
topo_sort_helper_STAR_.call(null,dep_36756,(depth + (1)),state);

var G__36757 = seq__36744_36752;
var G__36758 = chunk__36745_36753;
var G__36759 = count__36746_36754;
var G__36760 = (i__36747_36755 + (1));
seq__36744_36752 = G__36757;
chunk__36745_36753 = G__36758;
count__36746_36754 = G__36759;
i__36747_36755 = G__36760;
continue;
} else {
var temp__5278__auto___36761 = cljs.core.seq.call(null,seq__36744_36752);
if(temp__5278__auto___36761){
var seq__36744_36762__$1 = temp__5278__auto___36761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36744_36762__$1)){
var c__30980__auto___36763 = cljs.core.chunk_first.call(null,seq__36744_36762__$1);
var G__36764 = cljs.core.chunk_rest.call(null,seq__36744_36762__$1);
var G__36765 = c__30980__auto___36763;
var G__36766 = cljs.core.count.call(null,c__30980__auto___36763);
var G__36767 = (0);
seq__36744_36752 = G__36764;
chunk__36745_36753 = G__36765;
count__36746_36754 = G__36766;
i__36747_36755 = G__36767;
continue;
} else {
var dep_36768 = cljs.core.first.call(null,seq__36744_36762__$1);
topo_sort_helper_STAR_.call(null,dep_36768,(depth + (1)),state);

var G__36769 = cljs.core.next.call(null,seq__36744_36762__$1);
var G__36770 = null;
var G__36771 = (0);
var G__36772 = (0);
seq__36744_36752 = G__36769;
chunk__36745_36753 = G__36770;
count__36746_36754 = G__36771;
i__36747_36755 = G__36772;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36748){
var vec__36749 = p__36748;
var seq__36750 = cljs.core.seq.call(null,vec__36749);
var first__36751 = cljs.core.first.call(null,seq__36750);
var seq__36750__$1 = cljs.core.next.call(null,seq__36750);
var x = first__36751;
var xs = seq__36750__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36749,seq__36750,first__36751,seq__36750__$1,x,xs,get_deps__$1){
return (function (p1__36735_SHARP_){
return clojure.set.difference.call(null,p1__36735_SHARP_,x);
});})(vec__36749,seq__36750,first__36751,seq__36750__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__36773 = cljs.core.seq.call(null,provides);
var chunk__36774 = null;
var count__36775 = (0);
var i__36776 = (0);
while(true){
if((i__36776 < count__36775)){
var prov = cljs.core._nth.call(null,chunk__36774,i__36776);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36777_36785 = cljs.core.seq.call(null,requires);
var chunk__36778_36786 = null;
var count__36779_36787 = (0);
var i__36780_36788 = (0);
while(true){
if((i__36780_36788 < count__36779_36787)){
var req_36789 = cljs.core._nth.call(null,chunk__36778_36786,i__36780_36788);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36789,prov);

var G__36790 = seq__36777_36785;
var G__36791 = chunk__36778_36786;
var G__36792 = count__36779_36787;
var G__36793 = (i__36780_36788 + (1));
seq__36777_36785 = G__36790;
chunk__36778_36786 = G__36791;
count__36779_36787 = G__36792;
i__36780_36788 = G__36793;
continue;
} else {
var temp__5278__auto___36794 = cljs.core.seq.call(null,seq__36777_36785);
if(temp__5278__auto___36794){
var seq__36777_36795__$1 = temp__5278__auto___36794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36777_36795__$1)){
var c__30980__auto___36796 = cljs.core.chunk_first.call(null,seq__36777_36795__$1);
var G__36797 = cljs.core.chunk_rest.call(null,seq__36777_36795__$1);
var G__36798 = c__30980__auto___36796;
var G__36799 = cljs.core.count.call(null,c__30980__auto___36796);
var G__36800 = (0);
seq__36777_36785 = G__36797;
chunk__36778_36786 = G__36798;
count__36779_36787 = G__36799;
i__36780_36788 = G__36800;
continue;
} else {
var req_36801 = cljs.core.first.call(null,seq__36777_36795__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36801,prov);

var G__36802 = cljs.core.next.call(null,seq__36777_36795__$1);
var G__36803 = null;
var G__36804 = (0);
var G__36805 = (0);
seq__36777_36785 = G__36802;
chunk__36778_36786 = G__36803;
count__36779_36787 = G__36804;
i__36780_36788 = G__36805;
continue;
}
} else {
}
}
break;
}

var G__36806 = seq__36773;
var G__36807 = chunk__36774;
var G__36808 = count__36775;
var G__36809 = (i__36776 + (1));
seq__36773 = G__36806;
chunk__36774 = G__36807;
count__36775 = G__36808;
i__36776 = G__36809;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__36773);
if(temp__5278__auto__){
var seq__36773__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36773__$1)){
var c__30980__auto__ = cljs.core.chunk_first.call(null,seq__36773__$1);
var G__36810 = cljs.core.chunk_rest.call(null,seq__36773__$1);
var G__36811 = c__30980__auto__;
var G__36812 = cljs.core.count.call(null,c__30980__auto__);
var G__36813 = (0);
seq__36773 = G__36810;
chunk__36774 = G__36811;
count__36775 = G__36812;
i__36776 = G__36813;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36773__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36781_36814 = cljs.core.seq.call(null,requires);
var chunk__36782_36815 = null;
var count__36783_36816 = (0);
var i__36784_36817 = (0);
while(true){
if((i__36784_36817 < count__36783_36816)){
var req_36818 = cljs.core._nth.call(null,chunk__36782_36815,i__36784_36817);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36818,prov);

var G__36819 = seq__36781_36814;
var G__36820 = chunk__36782_36815;
var G__36821 = count__36783_36816;
var G__36822 = (i__36784_36817 + (1));
seq__36781_36814 = G__36819;
chunk__36782_36815 = G__36820;
count__36783_36816 = G__36821;
i__36784_36817 = G__36822;
continue;
} else {
var temp__5278__auto___36823__$1 = cljs.core.seq.call(null,seq__36781_36814);
if(temp__5278__auto___36823__$1){
var seq__36781_36824__$1 = temp__5278__auto___36823__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36781_36824__$1)){
var c__30980__auto___36825 = cljs.core.chunk_first.call(null,seq__36781_36824__$1);
var G__36826 = cljs.core.chunk_rest.call(null,seq__36781_36824__$1);
var G__36827 = c__30980__auto___36825;
var G__36828 = cljs.core.count.call(null,c__30980__auto___36825);
var G__36829 = (0);
seq__36781_36814 = G__36826;
chunk__36782_36815 = G__36827;
count__36783_36816 = G__36828;
i__36784_36817 = G__36829;
continue;
} else {
var req_36830 = cljs.core.first.call(null,seq__36781_36824__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36830,prov);

var G__36831 = cljs.core.next.call(null,seq__36781_36824__$1);
var G__36832 = null;
var G__36833 = (0);
var G__36834 = (0);
seq__36781_36814 = G__36831;
chunk__36782_36815 = G__36832;
count__36783_36816 = G__36833;
i__36784_36817 = G__36834;
continue;
}
} else {
}
}
break;
}

var G__36835 = cljs.core.next.call(null,seq__36773__$1);
var G__36836 = null;
var G__36837 = (0);
var G__36838 = (0);
seq__36773 = G__36835;
chunk__36774 = G__36836;
count__36775 = G__36837;
i__36776 = G__36838;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__36839_36843 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36840_36844 = null;
var count__36841_36845 = (0);
var i__36842_36846 = (0);
while(true){
if((i__36842_36846 < count__36841_36845)){
var ns_36847 = cljs.core._nth.call(null,chunk__36840_36844,i__36842_36846);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36847);

var G__36848 = seq__36839_36843;
var G__36849 = chunk__36840_36844;
var G__36850 = count__36841_36845;
var G__36851 = (i__36842_36846 + (1));
seq__36839_36843 = G__36848;
chunk__36840_36844 = G__36849;
count__36841_36845 = G__36850;
i__36842_36846 = G__36851;
continue;
} else {
var temp__5278__auto___36852 = cljs.core.seq.call(null,seq__36839_36843);
if(temp__5278__auto___36852){
var seq__36839_36853__$1 = temp__5278__auto___36852;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36839_36853__$1)){
var c__30980__auto___36854 = cljs.core.chunk_first.call(null,seq__36839_36853__$1);
var G__36855 = cljs.core.chunk_rest.call(null,seq__36839_36853__$1);
var G__36856 = c__30980__auto___36854;
var G__36857 = cljs.core.count.call(null,c__30980__auto___36854);
var G__36858 = (0);
seq__36839_36843 = G__36855;
chunk__36840_36844 = G__36856;
count__36841_36845 = G__36857;
i__36842_36846 = G__36858;
continue;
} else {
var ns_36859 = cljs.core.first.call(null,seq__36839_36853__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36859);

var G__36860 = cljs.core.next.call(null,seq__36839_36853__$1);
var G__36861 = null;
var G__36862 = (0);
var G__36863 = (0);
seq__36839_36843 = G__36860;
chunk__36840_36844 = G__36861;
count__36841_36845 = G__36862;
i__36842_36846 = G__36863;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30048__auto__ = goog.require__;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__36864__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36864 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36865__i = 0, G__36865__a = new Array(arguments.length -  0);
while (G__36865__i < G__36865__a.length) {G__36865__a[G__36865__i] = arguments[G__36865__i + 0]; ++G__36865__i;}
  args = new cljs.core.IndexedSeq(G__36865__a,0,null);
} 
return G__36864__delegate.call(this,args);};
G__36864.cljs$lang$maxFixedArity = 0;
G__36864.cljs$lang$applyTo = (function (arglist__36866){
var args = cljs.core.seq(arglist__36866);
return G__36864__delegate(args);
});
G__36864.cljs$core$IFn$_invoke$arity$variadic = G__36864__delegate;
return G__36864;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__36867_SHARP_,p2__36868_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36867_SHARP_)].join('')),p2__36868_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__36869_SHARP_,p2__36870_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36869_SHARP_)].join(''),p2__36870_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36871 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36871.addCallback(((function (G__36871){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36871))
);

G__36871.addErrback(((function (G__36871){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36871))
);

return G__36871;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36872 = cljs.core._EQ_;
var expr__36873 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36872.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36873))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__36872,expr__36873){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__36872,expr__36873))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__36872,expr__36873){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36875){if((e36875 instanceof Error)){
var e = e36875;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36875;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__36872,expr__36873))
} else {
if(cljs.core.truth_(pred__36872.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36873))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36872.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__36873))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36872.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36873))){
return ((function (pred__36872,expr__36873){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36876){if((e36876 instanceof Error)){
var e = e36876;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36876;

}
}})());
});
;})(pred__36872,expr__36873))
} else {
return ((function (pred__36872,expr__36873){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36872,expr__36873))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36877,callback){
var map__36878 = p__36877;
var map__36878__$1 = ((((!((map__36878 == null)))?((((map__36878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36878):map__36878);
var file_msg = map__36878__$1;
var request_url = cljs.core.get.call(null,map__36878__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36878,map__36878__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36878,map__36878__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33132__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto__){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto__){
return (function (state_36902){
var state_val_36903 = (state_36902[(1)]);
if((state_val_36903 === (7))){
var inst_36898 = (state_36902[(2)]);
var state_36902__$1 = state_36902;
var statearr_36904_36921 = state_36902__$1;
(statearr_36904_36921[(2)] = inst_36898);

(statearr_36904_36921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36903 === (1))){
var state_36902__$1 = state_36902;
var statearr_36905_36922 = state_36902__$1;
(statearr_36905_36922[(2)] = null);

(statearr_36905_36922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36903 === (4))){
var inst_36882 = (state_36902[(7)]);
var inst_36882__$1 = (state_36902[(2)]);
var state_36902__$1 = (function (){var statearr_36906 = state_36902;
(statearr_36906[(7)] = inst_36882__$1);

return statearr_36906;
})();
if(cljs.core.truth_(inst_36882__$1)){
var statearr_36907_36923 = state_36902__$1;
(statearr_36907_36923[(1)] = (5));

} else {
var statearr_36908_36924 = state_36902__$1;
(statearr_36908_36924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36903 === (6))){
var state_36902__$1 = state_36902;
var statearr_36909_36925 = state_36902__$1;
(statearr_36909_36925[(2)] = null);

(statearr_36909_36925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36903 === (3))){
var inst_36900 = (state_36902[(2)]);
var state_36902__$1 = state_36902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36902__$1,inst_36900);
} else {
if((state_val_36903 === (2))){
var state_36902__$1 = state_36902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36902__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36903 === (11))){
var inst_36894 = (state_36902[(2)]);
var state_36902__$1 = (function (){var statearr_36910 = state_36902;
(statearr_36910[(8)] = inst_36894);

return statearr_36910;
})();
var statearr_36911_36926 = state_36902__$1;
(statearr_36911_36926[(2)] = null);

(statearr_36911_36926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36903 === (9))){
var inst_36886 = (state_36902[(9)]);
var inst_36888 = (state_36902[(10)]);
var inst_36890 = inst_36888.call(null,inst_36886);
var state_36902__$1 = state_36902;
var statearr_36912_36927 = state_36902__$1;
(statearr_36912_36927[(2)] = inst_36890);

(statearr_36912_36927[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36903 === (5))){
var inst_36882 = (state_36902[(7)]);
var inst_36884 = figwheel.client.file_reloading.blocking_load.call(null,inst_36882);
var state_36902__$1 = state_36902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36902__$1,(8),inst_36884);
} else {
if((state_val_36903 === (10))){
var inst_36886 = (state_36902[(9)]);
var inst_36892 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36886);
var state_36902__$1 = state_36902;
var statearr_36913_36928 = state_36902__$1;
(statearr_36913_36928[(2)] = inst_36892);

(statearr_36913_36928[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36903 === (8))){
var inst_36888 = (state_36902[(10)]);
var inst_36882 = (state_36902[(7)]);
var inst_36886 = (state_36902[(2)]);
var inst_36887 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36888__$1 = cljs.core.get.call(null,inst_36887,inst_36882);
var state_36902__$1 = (function (){var statearr_36914 = state_36902;
(statearr_36914[(9)] = inst_36886);

(statearr_36914[(10)] = inst_36888__$1);

return statearr_36914;
})();
if(cljs.core.truth_(inst_36888__$1)){
var statearr_36915_36929 = state_36902__$1;
(statearr_36915_36929[(1)] = (9));

} else {
var statearr_36916_36930 = state_36902__$1;
(statearr_36916_36930[(1)] = (10));

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
});})(c__33132__auto__))
;
return ((function (switch__33042__auto__,c__33132__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33043__auto__ = null;
var figwheel$client$file_reloading$state_machine__33043__auto____0 = (function (){
var statearr_36917 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36917[(0)] = figwheel$client$file_reloading$state_machine__33043__auto__);

(statearr_36917[(1)] = (1));

return statearr_36917;
});
var figwheel$client$file_reloading$state_machine__33043__auto____1 = (function (state_36902){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_36902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e36918){if((e36918 instanceof Object)){
var ex__33046__auto__ = e36918;
var statearr_36919_36931 = state_36902;
(statearr_36919_36931[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36932 = state_36902;
state_36902 = G__36932;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33043__auto__ = function(state_36902){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33043__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33043__auto____1.call(this,state_36902);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33043__auto____0;
figwheel$client$file_reloading$state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33043__auto____1;
return figwheel$client$file_reloading$state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto__))
})();
var state__33134__auto__ = (function (){var statearr_36920 = f__33133__auto__.call(null);
(statearr_36920[(6)] = c__33132__auto__);

return statearr_36920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto__))
);

return c__33132__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36933,callback){
var map__36934 = p__36933;
var map__36934__$1 = ((((!((map__36934 == null)))?((((map__36934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36934.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36934):map__36934);
var file_msg = map__36934__$1;
var namespace = cljs.core.get.call(null,map__36934__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36934,map__36934__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36934,map__36934__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36936){
var map__36937 = p__36936;
var map__36937__$1 = ((((!((map__36937 == null)))?((((map__36937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36937.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36937):map__36937);
var file_msg = map__36937__$1;
var namespace = cljs.core.get.call(null,map__36937__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36939){
var map__36940 = p__36939;
var map__36940__$1 = ((((!((map__36940 == null)))?((((map__36940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36940):map__36940);
var file_msg = map__36940__$1;
var namespace = cljs.core.get.call(null,map__36940__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30036__auto__){
var or__30048__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
var or__30048__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30048__auto____$1)){
return or__30048__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36942,callback){
var map__36943 = p__36942;
var map__36943__$1 = ((((!((map__36943 == null)))?((((map__36943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36943.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36943):map__36943);
var file_msg = map__36943__$1;
var request_url = cljs.core.get.call(null,map__36943__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36943__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33132__auto___36993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto___36993,out){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto___36993,out){
return (function (state_36978){
var state_val_36979 = (state_36978[(1)]);
if((state_val_36979 === (1))){
var inst_36952 = cljs.core.seq.call(null,files);
var inst_36953 = cljs.core.first.call(null,inst_36952);
var inst_36954 = cljs.core.next.call(null,inst_36952);
var inst_36955 = files;
var state_36978__$1 = (function (){var statearr_36980 = state_36978;
(statearr_36980[(7)] = inst_36954);

(statearr_36980[(8)] = inst_36953);

(statearr_36980[(9)] = inst_36955);

return statearr_36980;
})();
var statearr_36981_36994 = state_36978__$1;
(statearr_36981_36994[(2)] = null);

(statearr_36981_36994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (2))){
var inst_36961 = (state_36978[(10)]);
var inst_36955 = (state_36978[(9)]);
var inst_36960 = cljs.core.seq.call(null,inst_36955);
var inst_36961__$1 = cljs.core.first.call(null,inst_36960);
var inst_36962 = cljs.core.next.call(null,inst_36960);
var inst_36963 = (inst_36961__$1 == null);
var inst_36964 = cljs.core.not.call(null,inst_36963);
var state_36978__$1 = (function (){var statearr_36982 = state_36978;
(statearr_36982[(11)] = inst_36962);

(statearr_36982[(10)] = inst_36961__$1);

return statearr_36982;
})();
if(inst_36964){
var statearr_36983_36995 = state_36978__$1;
(statearr_36983_36995[(1)] = (4));

} else {
var statearr_36984_36996 = state_36978__$1;
(statearr_36984_36996[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (3))){
var inst_36976 = (state_36978[(2)]);
var state_36978__$1 = state_36978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36978__$1,inst_36976);
} else {
if((state_val_36979 === (4))){
var inst_36961 = (state_36978[(10)]);
var inst_36966 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36961);
var state_36978__$1 = state_36978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36978__$1,(7),inst_36966);
} else {
if((state_val_36979 === (5))){
var inst_36972 = cljs.core.async.close_BANG_.call(null,out);
var state_36978__$1 = state_36978;
var statearr_36985_36997 = state_36978__$1;
(statearr_36985_36997[(2)] = inst_36972);

(statearr_36985_36997[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (6))){
var inst_36974 = (state_36978[(2)]);
var state_36978__$1 = state_36978;
var statearr_36986_36998 = state_36978__$1;
(statearr_36986_36998[(2)] = inst_36974);

(statearr_36986_36998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36979 === (7))){
var inst_36962 = (state_36978[(11)]);
var inst_36968 = (state_36978[(2)]);
var inst_36969 = cljs.core.async.put_BANG_.call(null,out,inst_36968);
var inst_36955 = inst_36962;
var state_36978__$1 = (function (){var statearr_36987 = state_36978;
(statearr_36987[(12)] = inst_36969);

(statearr_36987[(9)] = inst_36955);

return statearr_36987;
})();
var statearr_36988_36999 = state_36978__$1;
(statearr_36988_36999[(2)] = null);

(statearr_36988_36999[(1)] = (2));


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
});})(c__33132__auto___36993,out))
;
return ((function (switch__33042__auto__,c__33132__auto___36993,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33043__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33043__auto____0 = (function (){
var statearr_36989 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36989[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33043__auto__);

(statearr_36989[(1)] = (1));

return statearr_36989;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33043__auto____1 = (function (state_36978){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_36978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e36990){if((e36990 instanceof Object)){
var ex__33046__auto__ = e36990;
var statearr_36991_37000 = state_36978;
(statearr_36991_37000[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37001 = state_36978;
state_36978 = G__37001;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33043__auto__ = function(state_36978){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33043__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33043__auto____1.call(this,state_36978);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33043__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33043__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto___36993,out))
})();
var state__33134__auto__ = (function (){var statearr_36992 = f__33133__auto__.call(null);
(statearr_36992[(6)] = c__33132__auto___36993);

return statearr_36992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto___36993,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37002,opts){
var map__37003 = p__37002;
var map__37003__$1 = ((((!((map__37003 == null)))?((((map__37003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37003):map__37003);
var eval_body = cljs.core.get.call(null,map__37003__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37003__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30036__auto__ = eval_body;
if(cljs.core.truth_(and__30036__auto__)){
return typeof eval_body === 'string';
} else {
return and__30036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37005){var e = e37005;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5276__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37006_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37006_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5276__auto__)){
var file_msg = temp__5276__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37007){
var vec__37008 = p__37007;
var k = cljs.core.nth.call(null,vec__37008,(0),null);
var v = cljs.core.nth.call(null,vec__37008,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37011){
var vec__37012 = p__37011;
var k = cljs.core.nth.call(null,vec__37012,(0),null);
var v = cljs.core.nth.call(null,vec__37012,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37018,p__37019){
var map__37020 = p__37018;
var map__37020__$1 = ((((!((map__37020 == null)))?((((map__37020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37020):map__37020);
var opts = map__37020__$1;
var before_jsload = cljs.core.get.call(null,map__37020__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37020__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37020__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37021 = p__37019;
var map__37021__$1 = ((((!((map__37021 == null)))?((((map__37021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37021.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37021):map__37021);
var msg = map__37021__$1;
var files = cljs.core.get.call(null,map__37021__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37021__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37021__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33132__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto__,map__37020,map__37020__$1,opts,before_jsload,on_jsload,reload_dependents,map__37021,map__37021__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto__,map__37020,map__37020__$1,opts,before_jsload,on_jsload,reload_dependents,map__37021,map__37021__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37175){
var state_val_37176 = (state_37175[(1)]);
if((state_val_37176 === (7))){
var inst_37038 = (state_37175[(7)]);
var inst_37036 = (state_37175[(8)]);
var inst_37037 = (state_37175[(9)]);
var inst_37035 = (state_37175[(10)]);
var inst_37043 = cljs.core._nth.call(null,inst_37036,inst_37038);
var inst_37044 = figwheel.client.file_reloading.eval_body.call(null,inst_37043,opts);
var inst_37045 = (inst_37038 + (1));
var tmp37177 = inst_37036;
var tmp37178 = inst_37037;
var tmp37179 = inst_37035;
var inst_37035__$1 = tmp37179;
var inst_37036__$1 = tmp37177;
var inst_37037__$1 = tmp37178;
var inst_37038__$1 = inst_37045;
var state_37175__$1 = (function (){var statearr_37180 = state_37175;
(statearr_37180[(7)] = inst_37038__$1);

(statearr_37180[(8)] = inst_37036__$1);

(statearr_37180[(11)] = inst_37044);

(statearr_37180[(9)] = inst_37037__$1);

(statearr_37180[(10)] = inst_37035__$1);

return statearr_37180;
})();
var statearr_37181_37264 = state_37175__$1;
(statearr_37181_37264[(2)] = null);

(statearr_37181_37264[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (20))){
var inst_37078 = (state_37175[(12)]);
var inst_37086 = figwheel.client.file_reloading.sort_files.call(null,inst_37078);
var state_37175__$1 = state_37175;
var statearr_37182_37265 = state_37175__$1;
(statearr_37182_37265[(2)] = inst_37086);

(statearr_37182_37265[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (27))){
var state_37175__$1 = state_37175;
var statearr_37183_37266 = state_37175__$1;
(statearr_37183_37266[(2)] = null);

(statearr_37183_37266[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (1))){
var inst_37027 = (state_37175[(13)]);
var inst_37024 = before_jsload.call(null,files);
var inst_37025 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37026 = (function (){return ((function (inst_37027,inst_37024,inst_37025,state_val_37176,c__33132__auto__,map__37020,map__37020__$1,opts,before_jsload,on_jsload,reload_dependents,map__37021,map__37021__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37015_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37015_SHARP_);
});
;})(inst_37027,inst_37024,inst_37025,state_val_37176,c__33132__auto__,map__37020,map__37020__$1,opts,before_jsload,on_jsload,reload_dependents,map__37021,map__37021__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37027__$1 = cljs.core.filter.call(null,inst_37026,files);
var inst_37028 = cljs.core.not_empty.call(null,inst_37027__$1);
var state_37175__$1 = (function (){var statearr_37184 = state_37175;
(statearr_37184[(13)] = inst_37027__$1);

(statearr_37184[(14)] = inst_37025);

(statearr_37184[(15)] = inst_37024);

return statearr_37184;
})();
if(cljs.core.truth_(inst_37028)){
var statearr_37185_37267 = state_37175__$1;
(statearr_37185_37267[(1)] = (2));

} else {
var statearr_37186_37268 = state_37175__$1;
(statearr_37186_37268[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (24))){
var state_37175__$1 = state_37175;
var statearr_37187_37269 = state_37175__$1;
(statearr_37187_37269[(2)] = null);

(statearr_37187_37269[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (39))){
var inst_37128 = (state_37175[(16)]);
var state_37175__$1 = state_37175;
var statearr_37188_37270 = state_37175__$1;
(statearr_37188_37270[(2)] = inst_37128);

(statearr_37188_37270[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (46))){
var inst_37170 = (state_37175[(2)]);
var state_37175__$1 = state_37175;
var statearr_37189_37271 = state_37175__$1;
(statearr_37189_37271[(2)] = inst_37170);

(statearr_37189_37271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (4))){
var inst_37072 = (state_37175[(2)]);
var inst_37073 = cljs.core.List.EMPTY;
var inst_37074 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37073);
var inst_37075 = (function (){return ((function (inst_37072,inst_37073,inst_37074,state_val_37176,c__33132__auto__,map__37020,map__37020__$1,opts,before_jsload,on_jsload,reload_dependents,map__37021,map__37021__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37016_SHARP_){
var and__30036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37016_SHARP_);
if(cljs.core.truth_(and__30036__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37016_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37016_SHARP_)));
} else {
return and__30036__auto__;
}
});
;})(inst_37072,inst_37073,inst_37074,state_val_37176,c__33132__auto__,map__37020,map__37020__$1,opts,before_jsload,on_jsload,reload_dependents,map__37021,map__37021__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37076 = cljs.core.filter.call(null,inst_37075,files);
var inst_37077 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37078 = cljs.core.concat.call(null,inst_37076,inst_37077);
var state_37175__$1 = (function (){var statearr_37190 = state_37175;
(statearr_37190[(12)] = inst_37078);

(statearr_37190[(17)] = inst_37074);

(statearr_37190[(18)] = inst_37072);

return statearr_37190;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37191_37272 = state_37175__$1;
(statearr_37191_37272[(1)] = (16));

} else {
var statearr_37192_37273 = state_37175__$1;
(statearr_37192_37273[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (15))){
var inst_37062 = (state_37175[(2)]);
var state_37175__$1 = state_37175;
var statearr_37193_37274 = state_37175__$1;
(statearr_37193_37274[(2)] = inst_37062);

(statearr_37193_37274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (21))){
var inst_37088 = (state_37175[(19)]);
var inst_37088__$1 = (state_37175[(2)]);
var inst_37089 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37088__$1);
var state_37175__$1 = (function (){var statearr_37194 = state_37175;
(statearr_37194[(19)] = inst_37088__$1);

return statearr_37194;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37175__$1,(22),inst_37089);
} else {
if((state_val_37176 === (31))){
var inst_37173 = (state_37175[(2)]);
var state_37175__$1 = state_37175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37175__$1,inst_37173);
} else {
if((state_val_37176 === (32))){
var inst_37128 = (state_37175[(16)]);
var inst_37133 = inst_37128.cljs$lang$protocol_mask$partition0$;
var inst_37134 = (inst_37133 & (64));
var inst_37135 = inst_37128.cljs$core$ISeq$;
var inst_37136 = (cljs.core.PROTOCOL_SENTINEL === inst_37135);
var inst_37137 = (inst_37134) || (inst_37136);
var state_37175__$1 = state_37175;
if(cljs.core.truth_(inst_37137)){
var statearr_37195_37275 = state_37175__$1;
(statearr_37195_37275[(1)] = (35));

} else {
var statearr_37196_37276 = state_37175__$1;
(statearr_37196_37276[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (40))){
var inst_37150 = (state_37175[(20)]);
var inst_37149 = (state_37175[(2)]);
var inst_37150__$1 = cljs.core.get.call(null,inst_37149,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37151 = cljs.core.get.call(null,inst_37149,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37152 = cljs.core.not_empty.call(null,inst_37150__$1);
var state_37175__$1 = (function (){var statearr_37197 = state_37175;
(statearr_37197[(21)] = inst_37151);

(statearr_37197[(20)] = inst_37150__$1);

return statearr_37197;
})();
if(cljs.core.truth_(inst_37152)){
var statearr_37198_37277 = state_37175__$1;
(statearr_37198_37277[(1)] = (41));

} else {
var statearr_37199_37278 = state_37175__$1;
(statearr_37199_37278[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (33))){
var state_37175__$1 = state_37175;
var statearr_37200_37279 = state_37175__$1;
(statearr_37200_37279[(2)] = false);

(statearr_37200_37279[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (13))){
var inst_37048 = (state_37175[(22)]);
var inst_37052 = cljs.core.chunk_first.call(null,inst_37048);
var inst_37053 = cljs.core.chunk_rest.call(null,inst_37048);
var inst_37054 = cljs.core.count.call(null,inst_37052);
var inst_37035 = inst_37053;
var inst_37036 = inst_37052;
var inst_37037 = inst_37054;
var inst_37038 = (0);
var state_37175__$1 = (function (){var statearr_37201 = state_37175;
(statearr_37201[(7)] = inst_37038);

(statearr_37201[(8)] = inst_37036);

(statearr_37201[(9)] = inst_37037);

(statearr_37201[(10)] = inst_37035);

return statearr_37201;
})();
var statearr_37202_37280 = state_37175__$1;
(statearr_37202_37280[(2)] = null);

(statearr_37202_37280[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (22))){
var inst_37096 = (state_37175[(23)]);
var inst_37091 = (state_37175[(24)]);
var inst_37088 = (state_37175[(19)]);
var inst_37092 = (state_37175[(25)]);
var inst_37091__$1 = (state_37175[(2)]);
var inst_37092__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37091__$1);
var inst_37093 = (function (){var all_files = inst_37088;
var res_SINGLEQUOTE_ = inst_37091__$1;
var res = inst_37092__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37096,inst_37091,inst_37088,inst_37092,inst_37091__$1,inst_37092__$1,state_val_37176,c__33132__auto__,map__37020,map__37020__$1,opts,before_jsload,on_jsload,reload_dependents,map__37021,map__37021__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37017_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37017_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37096,inst_37091,inst_37088,inst_37092,inst_37091__$1,inst_37092__$1,state_val_37176,c__33132__auto__,map__37020,map__37020__$1,opts,before_jsload,on_jsload,reload_dependents,map__37021,map__37021__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37094 = cljs.core.filter.call(null,inst_37093,inst_37091__$1);
var inst_37095 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37096__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37095);
var inst_37097 = cljs.core.not_empty.call(null,inst_37096__$1);
var state_37175__$1 = (function (){var statearr_37203 = state_37175;
(statearr_37203[(23)] = inst_37096__$1);

(statearr_37203[(26)] = inst_37094);

(statearr_37203[(24)] = inst_37091__$1);

(statearr_37203[(25)] = inst_37092__$1);

return statearr_37203;
})();
if(cljs.core.truth_(inst_37097)){
var statearr_37204_37281 = state_37175__$1;
(statearr_37204_37281[(1)] = (23));

} else {
var statearr_37205_37282 = state_37175__$1;
(statearr_37205_37282[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (36))){
var state_37175__$1 = state_37175;
var statearr_37206_37283 = state_37175__$1;
(statearr_37206_37283[(2)] = false);

(statearr_37206_37283[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (41))){
var inst_37150 = (state_37175[(20)]);
var inst_37154 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37155 = cljs.core.map.call(null,inst_37154,inst_37150);
var inst_37156 = cljs.core.pr_str.call(null,inst_37155);
var inst_37157 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37156)].join('');
var inst_37158 = figwheel.client.utils.log.call(null,inst_37157);
var state_37175__$1 = state_37175;
var statearr_37207_37284 = state_37175__$1;
(statearr_37207_37284[(2)] = inst_37158);

(statearr_37207_37284[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (43))){
var inst_37151 = (state_37175[(21)]);
var inst_37161 = (state_37175[(2)]);
var inst_37162 = cljs.core.not_empty.call(null,inst_37151);
var state_37175__$1 = (function (){var statearr_37208 = state_37175;
(statearr_37208[(27)] = inst_37161);

return statearr_37208;
})();
if(cljs.core.truth_(inst_37162)){
var statearr_37209_37285 = state_37175__$1;
(statearr_37209_37285[(1)] = (44));

} else {
var statearr_37210_37286 = state_37175__$1;
(statearr_37210_37286[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (29))){
var inst_37096 = (state_37175[(23)]);
var inst_37094 = (state_37175[(26)]);
var inst_37128 = (state_37175[(16)]);
var inst_37091 = (state_37175[(24)]);
var inst_37088 = (state_37175[(19)]);
var inst_37092 = (state_37175[(25)]);
var inst_37124 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37127 = (function (){var all_files = inst_37088;
var res_SINGLEQUOTE_ = inst_37091;
var res = inst_37092;
var files_not_loaded = inst_37094;
var dependencies_that_loaded = inst_37096;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37096,inst_37094,inst_37128,inst_37091,inst_37088,inst_37092,inst_37124,state_val_37176,c__33132__auto__,map__37020,map__37020__$1,opts,before_jsload,on_jsload,reload_dependents,map__37021,map__37021__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37126){
var map__37211 = p__37126;
var map__37211__$1 = ((((!((map__37211 == null)))?((((map__37211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37211.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37211):map__37211);
var namespace = cljs.core.get.call(null,map__37211__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37096,inst_37094,inst_37128,inst_37091,inst_37088,inst_37092,inst_37124,state_val_37176,c__33132__auto__,map__37020,map__37020__$1,opts,before_jsload,on_jsload,reload_dependents,map__37021,map__37021__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37128__$1 = cljs.core.group_by.call(null,inst_37127,inst_37094);
var inst_37130 = (inst_37128__$1 == null);
var inst_37131 = cljs.core.not.call(null,inst_37130);
var state_37175__$1 = (function (){var statearr_37213 = state_37175;
(statearr_37213[(28)] = inst_37124);

(statearr_37213[(16)] = inst_37128__$1);

return statearr_37213;
})();
if(inst_37131){
var statearr_37214_37287 = state_37175__$1;
(statearr_37214_37287[(1)] = (32));

} else {
var statearr_37215_37288 = state_37175__$1;
(statearr_37215_37288[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (44))){
var inst_37151 = (state_37175[(21)]);
var inst_37164 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37151);
var inst_37165 = cljs.core.pr_str.call(null,inst_37164);
var inst_37166 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37165)].join('');
var inst_37167 = figwheel.client.utils.log.call(null,inst_37166);
var state_37175__$1 = state_37175;
var statearr_37216_37289 = state_37175__$1;
(statearr_37216_37289[(2)] = inst_37167);

(statearr_37216_37289[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (6))){
var inst_37069 = (state_37175[(2)]);
var state_37175__$1 = state_37175;
var statearr_37217_37290 = state_37175__$1;
(statearr_37217_37290[(2)] = inst_37069);

(statearr_37217_37290[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (28))){
var inst_37094 = (state_37175[(26)]);
var inst_37121 = (state_37175[(2)]);
var inst_37122 = cljs.core.not_empty.call(null,inst_37094);
var state_37175__$1 = (function (){var statearr_37218 = state_37175;
(statearr_37218[(29)] = inst_37121);

return statearr_37218;
})();
if(cljs.core.truth_(inst_37122)){
var statearr_37219_37291 = state_37175__$1;
(statearr_37219_37291[(1)] = (29));

} else {
var statearr_37220_37292 = state_37175__$1;
(statearr_37220_37292[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (25))){
var inst_37092 = (state_37175[(25)]);
var inst_37108 = (state_37175[(2)]);
var inst_37109 = cljs.core.not_empty.call(null,inst_37092);
var state_37175__$1 = (function (){var statearr_37221 = state_37175;
(statearr_37221[(30)] = inst_37108);

return statearr_37221;
})();
if(cljs.core.truth_(inst_37109)){
var statearr_37222_37293 = state_37175__$1;
(statearr_37222_37293[(1)] = (26));

} else {
var statearr_37223_37294 = state_37175__$1;
(statearr_37223_37294[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (34))){
var inst_37144 = (state_37175[(2)]);
var state_37175__$1 = state_37175;
if(cljs.core.truth_(inst_37144)){
var statearr_37224_37295 = state_37175__$1;
(statearr_37224_37295[(1)] = (38));

} else {
var statearr_37225_37296 = state_37175__$1;
(statearr_37225_37296[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (17))){
var state_37175__$1 = state_37175;
var statearr_37226_37297 = state_37175__$1;
(statearr_37226_37297[(2)] = recompile_dependents);

(statearr_37226_37297[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (3))){
var state_37175__$1 = state_37175;
var statearr_37227_37298 = state_37175__$1;
(statearr_37227_37298[(2)] = null);

(statearr_37227_37298[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (12))){
var inst_37065 = (state_37175[(2)]);
var state_37175__$1 = state_37175;
var statearr_37228_37299 = state_37175__$1;
(statearr_37228_37299[(2)] = inst_37065);

(statearr_37228_37299[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (2))){
var inst_37027 = (state_37175[(13)]);
var inst_37034 = cljs.core.seq.call(null,inst_37027);
var inst_37035 = inst_37034;
var inst_37036 = null;
var inst_37037 = (0);
var inst_37038 = (0);
var state_37175__$1 = (function (){var statearr_37229 = state_37175;
(statearr_37229[(7)] = inst_37038);

(statearr_37229[(8)] = inst_37036);

(statearr_37229[(9)] = inst_37037);

(statearr_37229[(10)] = inst_37035);

return statearr_37229;
})();
var statearr_37230_37300 = state_37175__$1;
(statearr_37230_37300[(2)] = null);

(statearr_37230_37300[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (23))){
var inst_37096 = (state_37175[(23)]);
var inst_37094 = (state_37175[(26)]);
var inst_37091 = (state_37175[(24)]);
var inst_37088 = (state_37175[(19)]);
var inst_37092 = (state_37175[(25)]);
var inst_37099 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37101 = (function (){var all_files = inst_37088;
var res_SINGLEQUOTE_ = inst_37091;
var res = inst_37092;
var files_not_loaded = inst_37094;
var dependencies_that_loaded = inst_37096;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37096,inst_37094,inst_37091,inst_37088,inst_37092,inst_37099,state_val_37176,c__33132__auto__,map__37020,map__37020__$1,opts,before_jsload,on_jsload,reload_dependents,map__37021,map__37021__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37100){
var map__37231 = p__37100;
var map__37231__$1 = ((((!((map__37231 == null)))?((((map__37231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37231):map__37231);
var request_url = cljs.core.get.call(null,map__37231__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37096,inst_37094,inst_37091,inst_37088,inst_37092,inst_37099,state_val_37176,c__33132__auto__,map__37020,map__37020__$1,opts,before_jsload,on_jsload,reload_dependents,map__37021,map__37021__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37102 = cljs.core.reverse.call(null,inst_37096);
var inst_37103 = cljs.core.map.call(null,inst_37101,inst_37102);
var inst_37104 = cljs.core.pr_str.call(null,inst_37103);
var inst_37105 = figwheel.client.utils.log.call(null,inst_37104);
var state_37175__$1 = (function (){var statearr_37233 = state_37175;
(statearr_37233[(31)] = inst_37099);

return statearr_37233;
})();
var statearr_37234_37301 = state_37175__$1;
(statearr_37234_37301[(2)] = inst_37105);

(statearr_37234_37301[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (35))){
var state_37175__$1 = state_37175;
var statearr_37235_37302 = state_37175__$1;
(statearr_37235_37302[(2)] = true);

(statearr_37235_37302[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (19))){
var inst_37078 = (state_37175[(12)]);
var inst_37084 = figwheel.client.file_reloading.expand_files.call(null,inst_37078);
var state_37175__$1 = state_37175;
var statearr_37236_37303 = state_37175__$1;
(statearr_37236_37303[(2)] = inst_37084);

(statearr_37236_37303[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (11))){
var state_37175__$1 = state_37175;
var statearr_37237_37304 = state_37175__$1;
(statearr_37237_37304[(2)] = null);

(statearr_37237_37304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (9))){
var inst_37067 = (state_37175[(2)]);
var state_37175__$1 = state_37175;
var statearr_37238_37305 = state_37175__$1;
(statearr_37238_37305[(2)] = inst_37067);

(statearr_37238_37305[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (5))){
var inst_37038 = (state_37175[(7)]);
var inst_37037 = (state_37175[(9)]);
var inst_37040 = (inst_37038 < inst_37037);
var inst_37041 = inst_37040;
var state_37175__$1 = state_37175;
if(cljs.core.truth_(inst_37041)){
var statearr_37239_37306 = state_37175__$1;
(statearr_37239_37306[(1)] = (7));

} else {
var statearr_37240_37307 = state_37175__$1;
(statearr_37240_37307[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (14))){
var inst_37048 = (state_37175[(22)]);
var inst_37057 = cljs.core.first.call(null,inst_37048);
var inst_37058 = figwheel.client.file_reloading.eval_body.call(null,inst_37057,opts);
var inst_37059 = cljs.core.next.call(null,inst_37048);
var inst_37035 = inst_37059;
var inst_37036 = null;
var inst_37037 = (0);
var inst_37038 = (0);
var state_37175__$1 = (function (){var statearr_37241 = state_37175;
(statearr_37241[(7)] = inst_37038);

(statearr_37241[(8)] = inst_37036);

(statearr_37241[(9)] = inst_37037);

(statearr_37241[(32)] = inst_37058);

(statearr_37241[(10)] = inst_37035);

return statearr_37241;
})();
var statearr_37242_37308 = state_37175__$1;
(statearr_37242_37308[(2)] = null);

(statearr_37242_37308[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (45))){
var state_37175__$1 = state_37175;
var statearr_37243_37309 = state_37175__$1;
(statearr_37243_37309[(2)] = null);

(statearr_37243_37309[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (26))){
var inst_37096 = (state_37175[(23)]);
var inst_37094 = (state_37175[(26)]);
var inst_37091 = (state_37175[(24)]);
var inst_37088 = (state_37175[(19)]);
var inst_37092 = (state_37175[(25)]);
var inst_37111 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37113 = (function (){var all_files = inst_37088;
var res_SINGLEQUOTE_ = inst_37091;
var res = inst_37092;
var files_not_loaded = inst_37094;
var dependencies_that_loaded = inst_37096;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37096,inst_37094,inst_37091,inst_37088,inst_37092,inst_37111,state_val_37176,c__33132__auto__,map__37020,map__37020__$1,opts,before_jsload,on_jsload,reload_dependents,map__37021,map__37021__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37112){
var map__37244 = p__37112;
var map__37244__$1 = ((((!((map__37244 == null)))?((((map__37244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37244):map__37244);
var namespace = cljs.core.get.call(null,map__37244__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37244__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37096,inst_37094,inst_37091,inst_37088,inst_37092,inst_37111,state_val_37176,c__33132__auto__,map__37020,map__37020__$1,opts,before_jsload,on_jsload,reload_dependents,map__37021,map__37021__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37114 = cljs.core.map.call(null,inst_37113,inst_37092);
var inst_37115 = cljs.core.pr_str.call(null,inst_37114);
var inst_37116 = figwheel.client.utils.log.call(null,inst_37115);
var inst_37117 = (function (){var all_files = inst_37088;
var res_SINGLEQUOTE_ = inst_37091;
var res = inst_37092;
var files_not_loaded = inst_37094;
var dependencies_that_loaded = inst_37096;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37096,inst_37094,inst_37091,inst_37088,inst_37092,inst_37111,inst_37113,inst_37114,inst_37115,inst_37116,state_val_37176,c__33132__auto__,map__37020,map__37020__$1,opts,before_jsload,on_jsload,reload_dependents,map__37021,map__37021__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37096,inst_37094,inst_37091,inst_37088,inst_37092,inst_37111,inst_37113,inst_37114,inst_37115,inst_37116,state_val_37176,c__33132__auto__,map__37020,map__37020__$1,opts,before_jsload,on_jsload,reload_dependents,map__37021,map__37021__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37118 = setTimeout(inst_37117,(10));
var state_37175__$1 = (function (){var statearr_37246 = state_37175;
(statearr_37246[(33)] = inst_37116);

(statearr_37246[(34)] = inst_37111);

return statearr_37246;
})();
var statearr_37247_37310 = state_37175__$1;
(statearr_37247_37310[(2)] = inst_37118);

(statearr_37247_37310[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (16))){
var state_37175__$1 = state_37175;
var statearr_37248_37311 = state_37175__$1;
(statearr_37248_37311[(2)] = reload_dependents);

(statearr_37248_37311[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (38))){
var inst_37128 = (state_37175[(16)]);
var inst_37146 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37128);
var state_37175__$1 = state_37175;
var statearr_37249_37312 = state_37175__$1;
(statearr_37249_37312[(2)] = inst_37146);

(statearr_37249_37312[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (30))){
var state_37175__$1 = state_37175;
var statearr_37250_37313 = state_37175__$1;
(statearr_37250_37313[(2)] = null);

(statearr_37250_37313[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (10))){
var inst_37048 = (state_37175[(22)]);
var inst_37050 = cljs.core.chunked_seq_QMARK_.call(null,inst_37048);
var state_37175__$1 = state_37175;
if(inst_37050){
var statearr_37251_37314 = state_37175__$1;
(statearr_37251_37314[(1)] = (13));

} else {
var statearr_37252_37315 = state_37175__$1;
(statearr_37252_37315[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (18))){
var inst_37082 = (state_37175[(2)]);
var state_37175__$1 = state_37175;
if(cljs.core.truth_(inst_37082)){
var statearr_37253_37316 = state_37175__$1;
(statearr_37253_37316[(1)] = (19));

} else {
var statearr_37254_37317 = state_37175__$1;
(statearr_37254_37317[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (42))){
var state_37175__$1 = state_37175;
var statearr_37255_37318 = state_37175__$1;
(statearr_37255_37318[(2)] = null);

(statearr_37255_37318[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (37))){
var inst_37141 = (state_37175[(2)]);
var state_37175__$1 = state_37175;
var statearr_37256_37319 = state_37175__$1;
(statearr_37256_37319[(2)] = inst_37141);

(statearr_37256_37319[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37176 === (8))){
var inst_37048 = (state_37175[(22)]);
var inst_37035 = (state_37175[(10)]);
var inst_37048__$1 = cljs.core.seq.call(null,inst_37035);
var state_37175__$1 = (function (){var statearr_37257 = state_37175;
(statearr_37257[(22)] = inst_37048__$1);

return statearr_37257;
})();
if(inst_37048__$1){
var statearr_37258_37320 = state_37175__$1;
(statearr_37258_37320[(1)] = (10));

} else {
var statearr_37259_37321 = state_37175__$1;
(statearr_37259_37321[(1)] = (11));

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
});})(c__33132__auto__,map__37020,map__37020__$1,opts,before_jsload,on_jsload,reload_dependents,map__37021,map__37021__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33042__auto__,c__33132__auto__,map__37020,map__37020__$1,opts,before_jsload,on_jsload,reload_dependents,map__37021,map__37021__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33043__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33043__auto____0 = (function (){
var statearr_37260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37260[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33043__auto__);

(statearr_37260[(1)] = (1));

return statearr_37260;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33043__auto____1 = (function (state_37175){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_37175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e37261){if((e37261 instanceof Object)){
var ex__33046__auto__ = e37261;
var statearr_37262_37322 = state_37175;
(statearr_37262_37322[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37323 = state_37175;
state_37175 = G__37323;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33043__auto__ = function(state_37175){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33043__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33043__auto____1.call(this,state_37175);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33043__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33043__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto__,map__37020,map__37020__$1,opts,before_jsload,on_jsload,reload_dependents,map__37021,map__37021__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33134__auto__ = (function (){var statearr_37263 = f__33133__auto__.call(null);
(statearr_37263[(6)] = c__33132__auto__);

return statearr_37263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto__,map__37020,map__37020__$1,opts,before_jsload,on_jsload,reload_dependents,map__37021,map__37021__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33132__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37326,link){
var map__37327 = p__37326;
var map__37327__$1 = ((((!((map__37327 == null)))?((((map__37327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37327.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37327):map__37327);
var file = cljs.core.get.call(null,map__37327__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__37327,map__37327__$1,file){
return (function (p1__37324_SHARP_,p2__37325_SHARP_){
if(cljs.core._EQ_.call(null,p1__37324_SHARP_,p2__37325_SHARP_)){
return p1__37324_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__37327,map__37327__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37330){
var map__37331 = p__37330;
var map__37331__$1 = ((((!((map__37331 == null)))?((((map__37331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37331):map__37331);
var match_length = cljs.core.get.call(null,map__37331__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37331__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37329_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37329_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5278__auto__)){
var res = temp__5278__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37333_SHARP_,p2__37334_SHARP_){
return cljs.core.assoc.call(null,p1__37333_SHARP_,cljs.core.get.call(null,p2__37334_SHARP_,key),p2__37334_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5276__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5276__auto__)){
var link = temp__5276__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5276__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5276__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_37335 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37335);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37335);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37336,p__37337){
var map__37338 = p__37336;
var map__37338__$1 = ((((!((map__37338 == null)))?((((map__37338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37338):map__37338);
var on_cssload = cljs.core.get.call(null,map__37338__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37339 = p__37337;
var map__37339__$1 = ((((!((map__37339 == null)))?((((map__37339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37339):map__37339);
var files_msg = map__37339__$1;
var files = cljs.core.get.call(null,map__37339__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5278__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5278__auto__)){
var f_datas = temp__5278__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1507075200570
