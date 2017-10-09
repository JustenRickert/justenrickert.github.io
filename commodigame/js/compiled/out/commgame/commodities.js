// Compiled by ClojureScript 1.9.908 {}
goog.provide('commgame.commodities');
goog.require('cljs.core');
goog.require('commgame.core');
if(typeof commgame.commodities.comm_data !== 'undefined'){
} else {
commgame.commodities.comm_data = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"sand",new cljs.core.Keyword(null,"price","price",22129180),0.25], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"hops",new cljs.core.Keyword(null,"price","price",22129180),0.5], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"water",new cljs.core.Keyword(null,"price","price",22129180),0.1], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"fruit",new cljs.core.Keyword(null,"price","price",22129180),1.0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"glass",new cljs.core.Keyword(null,"price","price",22129180),2.15], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"ice",new cljs.core.Keyword(null,"price","price",22129180),0.75], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"ice water",new cljs.core.Keyword(null,"price","price",22129180),0.9], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"fruit drink",new cljs.core.Keyword(null,"price","price",22129180),2.15], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"cold fruit drink",new cljs.core.Keyword(null,"price","price",22129180),3.1], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"beer",new cljs.core.Keyword(null,"price","price",22129180),4.0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"lager",new cljs.core.Keyword(null,"price","price",22129180),3.95], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"radler",new cljs.core.Keyword(null,"price","price",22129180),5.35], null)], null));
}
if(typeof commgame.commodities.comm_combs !== 'undefined'){
} else {
commgame.commodities.comm_combs = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"sand",new cljs.core.Keyword(null,"quan","quan",-1772353373),(5)], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"glass",new cljs.core.Keyword(null,"quan","quan",-1772353373),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"water",new cljs.core.Keyword(null,"quan","quan",-1772353373),(5)], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"ice",new cljs.core.Keyword(null,"quan","quan",-1772353373),(6)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"water",new cljs.core.Keyword(null,"quan","quan",-1772353373),(5)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"ice",new cljs.core.Keyword(null,"quan","quan",-1772353373),(2)], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"ice water",new cljs.core.Keyword(null,"quan","quan",-1772353373),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"hops",new cljs.core.Keyword(null,"quan","quan",-1772353373),(10)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"water",new cljs.core.Keyword(null,"quan","quan",-1772353373),(15)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"glass",new cljs.core.Keyword(null,"quan","quan",-1772353373),(15)], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"beer",new cljs.core.Keyword(null,"quan","quan",-1772353373),(10)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"hops",new cljs.core.Keyword(null,"quan","quan",-1772353373),(10)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"water",new cljs.core.Keyword(null,"quan","quan",-1772353373),(15)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"ice",new cljs.core.Keyword(null,"quan","quan",-1772353373),(15)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"glass",new cljs.core.Keyword(null,"quan","quan",-1772353373),(15)], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"lager",new cljs.core.Keyword(null,"quan","quan",-1772353373),(10)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"beer",new cljs.core.Keyword(null,"quan","quan",-1772353373),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"cold fruit drink",new cljs.core.Keyword(null,"quan","quan",-1772353373),(1)], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"radler",new cljs.core.Keyword(null,"quan","quan",-1772353373),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"water",new cljs.core.Keyword(null,"quan","quan",-1772353373),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"fruit",new cljs.core.Keyword(null,"quan","quan",-1772353373),(1)], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"fruit drink",new cljs.core.Keyword(null,"quan","quan",-1772353373),(1)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"fruit drink",new cljs.core.Keyword(null,"quan","quan",-1772353373),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"ice",new cljs.core.Keyword(null,"quan","quan",-1772353373),(1)], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"cold fruit drink",new cljs.core.Keyword(null,"quan","quan",-1772353373),(1)], null)], null)], null));
}
commgame.commodities.comm_titles_with_combs = (function commgame$commodities$comm_titles_with_combs(){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__40264_SHARP_){
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(p1__40264_SHARP_));
}),cljs.core.deref.call(null,commgame.commodities.comm_combs)));
});
commgame.commodities.get_comb_inputs_by_title = (function commgame$commodities$get_comb_inputs_by_title(title){
var comb = cljs.core.deref.call(null,commgame.commodities.comm_combs);
while(true){
var input = new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,comb));
var output = new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,comb));
if(cljs.core._EQ_.call(null,title,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(output))){
return input;
} else {
if(cljs.core.empty_QMARK_.call(null,comb)){
return null;
} else {
var G__40265 = cljs.core.rest.call(null,comb);
comb = G__40265;
continue;

}
}
break;
}
});
commgame.commodities.get_comb_output_by_title = (function commgame$commodities$get_comb_output_by_title(title){
var comb = cljs.core.deref.call(null,commgame.commodities.comm_combs);
while(true){
var input = new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,comb));
var output = new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,comb));
if(cljs.core._EQ_.call(null,title,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(output))){
return output;
} else {
if(cljs.core.empty_QMARK_.call(null,comb)){
return null;
} else {
var G__40266 = cljs.core.rest.call(null,comb);
comb = G__40266;
continue;

}
}
break;
}
});

//# sourceMappingURL=commodities.js.map?rel=1507432775214
