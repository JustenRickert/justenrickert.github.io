// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38853){
var map__38854 = p__38853;
var map__38854__$1 = ((((!((map__38854 == null)))?((((map__38854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38854):map__38854);
var m = map__38854__$1;
var n = cljs.core.get.call(null,map__38854__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38854__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5278__auto__)){
var ns = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38856_38878 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38857_38879 = null;
var count__38858_38880 = (0);
var i__38859_38881 = (0);
while(true){
if((i__38859_38881 < count__38858_38880)){
var f_38882 = cljs.core._nth.call(null,chunk__38857_38879,i__38859_38881);
cljs.core.println.call(null,"  ",f_38882);

var G__38883 = seq__38856_38878;
var G__38884 = chunk__38857_38879;
var G__38885 = count__38858_38880;
var G__38886 = (i__38859_38881 + (1));
seq__38856_38878 = G__38883;
chunk__38857_38879 = G__38884;
count__38858_38880 = G__38885;
i__38859_38881 = G__38886;
continue;
} else {
var temp__5278__auto___38887 = cljs.core.seq.call(null,seq__38856_38878);
if(temp__5278__auto___38887){
var seq__38856_38888__$1 = temp__5278__auto___38887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38856_38888__$1)){
var c__30980__auto___38889 = cljs.core.chunk_first.call(null,seq__38856_38888__$1);
var G__38890 = cljs.core.chunk_rest.call(null,seq__38856_38888__$1);
var G__38891 = c__30980__auto___38889;
var G__38892 = cljs.core.count.call(null,c__30980__auto___38889);
var G__38893 = (0);
seq__38856_38878 = G__38890;
chunk__38857_38879 = G__38891;
count__38858_38880 = G__38892;
i__38859_38881 = G__38893;
continue;
} else {
var f_38894 = cljs.core.first.call(null,seq__38856_38888__$1);
cljs.core.println.call(null,"  ",f_38894);

var G__38895 = cljs.core.next.call(null,seq__38856_38888__$1);
var G__38896 = null;
var G__38897 = (0);
var G__38898 = (0);
seq__38856_38878 = G__38895;
chunk__38857_38879 = G__38896;
count__38858_38880 = G__38897;
i__38859_38881 = G__38898;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38899 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30048__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38899);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38899)))?cljs.core.second.call(null,arglists_38899):arglists_38899));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38860_38900 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38861_38901 = null;
var count__38862_38902 = (0);
var i__38863_38903 = (0);
while(true){
if((i__38863_38903 < count__38862_38902)){
var vec__38864_38904 = cljs.core._nth.call(null,chunk__38861_38901,i__38863_38903);
var name_38905 = cljs.core.nth.call(null,vec__38864_38904,(0),null);
var map__38867_38906 = cljs.core.nth.call(null,vec__38864_38904,(1),null);
var map__38867_38907__$1 = ((((!((map__38867_38906 == null)))?((((map__38867_38906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38867_38906.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38867_38906):map__38867_38906);
var doc_38908 = cljs.core.get.call(null,map__38867_38907__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38909 = cljs.core.get.call(null,map__38867_38907__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38905);

cljs.core.println.call(null," ",arglists_38909);

if(cljs.core.truth_(doc_38908)){
cljs.core.println.call(null," ",doc_38908);
} else {
}

var G__38910 = seq__38860_38900;
var G__38911 = chunk__38861_38901;
var G__38912 = count__38862_38902;
var G__38913 = (i__38863_38903 + (1));
seq__38860_38900 = G__38910;
chunk__38861_38901 = G__38911;
count__38862_38902 = G__38912;
i__38863_38903 = G__38913;
continue;
} else {
var temp__5278__auto___38914 = cljs.core.seq.call(null,seq__38860_38900);
if(temp__5278__auto___38914){
var seq__38860_38915__$1 = temp__5278__auto___38914;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38860_38915__$1)){
var c__30980__auto___38916 = cljs.core.chunk_first.call(null,seq__38860_38915__$1);
var G__38917 = cljs.core.chunk_rest.call(null,seq__38860_38915__$1);
var G__38918 = c__30980__auto___38916;
var G__38919 = cljs.core.count.call(null,c__30980__auto___38916);
var G__38920 = (0);
seq__38860_38900 = G__38917;
chunk__38861_38901 = G__38918;
count__38862_38902 = G__38919;
i__38863_38903 = G__38920;
continue;
} else {
var vec__38869_38921 = cljs.core.first.call(null,seq__38860_38915__$1);
var name_38922 = cljs.core.nth.call(null,vec__38869_38921,(0),null);
var map__38872_38923 = cljs.core.nth.call(null,vec__38869_38921,(1),null);
var map__38872_38924__$1 = ((((!((map__38872_38923 == null)))?((((map__38872_38923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38872_38923.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38872_38923):map__38872_38923);
var doc_38925 = cljs.core.get.call(null,map__38872_38924__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38926 = cljs.core.get.call(null,map__38872_38924__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38922);

cljs.core.println.call(null," ",arglists_38926);

if(cljs.core.truth_(doc_38925)){
cljs.core.println.call(null," ",doc_38925);
} else {
}

var G__38927 = cljs.core.next.call(null,seq__38860_38915__$1);
var G__38928 = null;
var G__38929 = (0);
var G__38930 = (0);
seq__38860_38900 = G__38927;
chunk__38861_38901 = G__38928;
count__38862_38902 = G__38929;
i__38863_38903 = G__38930;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5278__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5278__auto__)){
var fnspec = temp__5278__auto__;
cljs.core.print.call(null,"Spec");

var seq__38874 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38875 = null;
var count__38876 = (0);
var i__38877 = (0);
while(true){
if((i__38877 < count__38876)){
var role = cljs.core._nth.call(null,chunk__38875,i__38877);
var temp__5278__auto___38931__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___38931__$1)){
var spec_38932 = temp__5278__auto___38931__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38932));
} else {
}

var G__38933 = seq__38874;
var G__38934 = chunk__38875;
var G__38935 = count__38876;
var G__38936 = (i__38877 + (1));
seq__38874 = G__38933;
chunk__38875 = G__38934;
count__38876 = G__38935;
i__38877 = G__38936;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__38874);
if(temp__5278__auto____$1){
var seq__38874__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38874__$1)){
var c__30980__auto__ = cljs.core.chunk_first.call(null,seq__38874__$1);
var G__38937 = cljs.core.chunk_rest.call(null,seq__38874__$1);
var G__38938 = c__30980__auto__;
var G__38939 = cljs.core.count.call(null,c__30980__auto__);
var G__38940 = (0);
seq__38874 = G__38937;
chunk__38875 = G__38938;
count__38876 = G__38939;
i__38877 = G__38940;
continue;
} else {
var role = cljs.core.first.call(null,seq__38874__$1);
var temp__5278__auto___38941__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___38941__$2)){
var spec_38942 = temp__5278__auto___38941__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38942));
} else {
}

var G__38943 = cljs.core.next.call(null,seq__38874__$1);
var G__38944 = null;
var G__38945 = (0);
var G__38946 = (0);
seq__38874 = G__38943;
chunk__38875 = G__38944;
count__38876 = G__38945;
i__38877 = G__38946;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1507075204766
