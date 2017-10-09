// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__37460__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__37460 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37461__i = 0, G__37461__a = new Array(arguments.length -  0);
while (G__37461__i < G__37461__a.length) {G__37461__a[G__37461__i] = arguments[G__37461__i + 0]; ++G__37461__i;}
  args = new cljs.core.IndexedSeq(G__37461__a,0,null);
} 
return G__37460__delegate.call(this,args);};
G__37460.cljs$lang$maxFixedArity = 0;
G__37460.cljs$lang$applyTo = (function (arglist__37462){
var args = cljs.core.seq(arglist__37462);
return G__37460__delegate(args);
});
G__37460.cljs$core$IFn$_invoke$arity$variadic = G__37460__delegate;
return G__37460;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__37463__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__37463 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37464__i = 0, G__37464__a = new Array(arguments.length -  0);
while (G__37464__i < G__37464__a.length) {G__37464__a[G__37464__i] = arguments[G__37464__i + 0]; ++G__37464__i;}
  args = new cljs.core.IndexedSeq(G__37464__a,0,null);
} 
return G__37463__delegate.call(this,args);};
G__37463.cljs$lang$maxFixedArity = 0;
G__37463.cljs$lang$applyTo = (function (arglist__37465){
var args = cljs.core.seq(arglist__37465);
return G__37463__delegate(args);
});
G__37463.cljs$core$IFn$_invoke$arity$variadic = G__37463__delegate;
return G__37463;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1507075200739
