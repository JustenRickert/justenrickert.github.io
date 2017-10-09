// Compiled by ClojureScript 1.9.908 {}
goog.provide('commgame.render');
goog.require('cljs.core');
goog.require('commgame.core');
goog.require('commgame.commodities');
goog.require('goog.string');
commgame.render.comm_li = (function commgame$render$comm_li(comm){
console.log("comm-li rerender");

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.comm","div.comm",431477608),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(comm),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.Keyword(null,"quan","quan",-1772353373).cljs$core$IFn$_invoke$arity$1(comm)], null)], null);
});
commgame.render.buy_comm_button = (function commgame$render$buy_comm_button(comm){
console.log("buy-comm-button rerender");

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.comm","div.comm",431477608),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(comm),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"$",goog.string.format("%.2f",new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(comm))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return commgame.core.user_buy_one_comm.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(comm));
})], null),"\uD83D\uDCB2"], null)], null);
});
commgame.render.combine_comm_button = (function commgame$render$combine_comm_button(comm){
console.log("buy-comm-comb-button rerender");

var inputs = commgame.commodities.get_comb_inputs_by_title.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(comm));
var output = commgame.commodities.get_comb_output_by_title.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(comm));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.comm","div.comm",431477608),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"quan","quan",-1772353373).cljs$core$IFn$_invoke$arity$1(output)," ",new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(output),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"@",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(function (){var iter__30930__auto__ = ((function (inputs,output){
return (function commgame$render$combine_comm_button_$_iter__47660(s__47661){
return (new cljs.core.LazySeq(null,((function (inputs,output){
return (function (){
var s__47661__$1 = s__47661;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__47661__$1);
if(temp__5278__auto__){
var s__47661__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47661__$2)){
var c__30928__auto__ = cljs.core.chunk_first.call(null,s__47661__$2);
var size__30929__auto__ = cljs.core.count.call(null,c__30928__auto__);
var b__47663 = cljs.core.chunk_buffer.call(null,size__30929__auto__);
if((function (){var i__47662 = (0);
while(true){
if((i__47662 < size__30929__auto__)){
var input = cljs.core._nth.call(null,c__30928__auto__,i__47662);
cljs.core.chunk_append.call(null,b__47663,[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"quan","quan",-1772353373).cljs$core$IFn$_invoke$arity$1(input))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(input))].join(''));

var G__47664 = (i__47662 + (1));
i__47662 = G__47664;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47663),commgame$render$combine_comm_button_$_iter__47660.call(null,cljs.core.chunk_rest.call(null,s__47661__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47663),null);
}
} else {
var input = cljs.core.first.call(null,s__47661__$2);
return cljs.core.cons.call(null,[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"quan","quan",-1772353373).cljs$core$IFn$_invoke$arity$1(input))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(input))].join(''),commgame$render$combine_comm_button_$_iter__47660.call(null,cljs.core.rest.call(null,s__47661__$2)));
}
} else {
return null;
}
break;
}
});})(inputs,output))
,null,null));
});})(inputs,output))
;
return iter__30930__auto__.call(null,inputs);
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (inputs,output){
return (function (){
return commgame.core.user_combine_for_comm.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(comm));
});})(inputs,output))
], null),"\uD83D\uDD27"], null)], null);
});
commgame.render.comm_comb_market = (function commgame$render$comm_comb_market(){
var titles_with_combs = commgame.commodities.comm_titles_with_combs.call(null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Combination"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.user-comm","div.user-comm",-128027009),(function (){var comp = cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__30930__auto__ = ((function (titles_with_combs){
return (function commgame$render$comm_comb_market_$_iter__47665(s__47666){
return (new cljs.core.LazySeq(null,((function (titles_with_combs){
return (function (){
var s__47666__$1 = s__47666;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__47666__$1);
if(temp__5278__auto__){
var s__47666__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47666__$2)){
var c__30928__auto__ = cljs.core.chunk_first.call(null,s__47666__$2);
var size__30929__auto__ = cljs.core.count.call(null,c__30928__auto__);
var b__47668 = cljs.core.chunk_buffer.call(null,size__30929__auto__);
if((function (){var i__47667 = (0);
while(true){
if((i__47667 < size__30929__auto__)){
var comm = cljs.core._nth.call(null,c__30928__auto__,i__47667);
cljs.core.chunk_append.call(null,b__47668,(cljs.core.truth_((function (){var and__30036__auto__ = cljs.core.contains_QMARK_.call(null,titles_with_combs,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(comm));
if(and__30036__auto__){
return commgame.core.user_can_combine_for_comm.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(comm));
} else {
return and__30036__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [commgame.render.combine_comm_button,comm], null):null));

var G__47669 = (i__47667 + (1));
i__47667 = G__47669;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47668),commgame$render$comm_comb_market_$_iter__47665.call(null,cljs.core.chunk_rest.call(null,s__47666__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47668),null);
}
} else {
var comm = cljs.core.first.call(null,s__47666__$2);
return cljs.core.cons.call(null,(cljs.core.truth_((function (){var and__30036__auto__ = cljs.core.contains_QMARK_.call(null,titles_with_combs,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(comm));
if(and__30036__auto__){
return commgame.core.user_can_combine_for_comm.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(comm));
} else {
return and__30036__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [commgame.render.combine_comm_button,comm], null):null),commgame$render$comm_comb_market_$_iter__47665.call(null,cljs.core.rest.call(null,s__47666__$2)));
}
} else {
return null;
}
break;
}
});})(titles_with_combs))
,null,null));
});})(titles_with_combs))
;
return iter__30930__auto__.call(null,commgame.core.user_commodities.call(null));
})()));
if(cljs.core.empty_QMARK_.call(null,comp)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"No possible combinations yet!"], null);
} else {
return comp;
}
})()], null)], null);
});
commgame.render.basic_comm_market = (function commgame$render$basic_comm_market(){
var titles_with_combs = commgame.commodities.comm_titles_with_combs.call(null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Market"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.user-comm","div.user-comm",-128027009),(function (){var iter__30930__auto__ = ((function (titles_with_combs){
return (function commgame$render$basic_comm_market_$_iter__47670(s__47671){
return (new cljs.core.LazySeq(null,((function (titles_with_combs){
return (function (){
var s__47671__$1 = s__47671;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__47671__$1);
if(temp__5278__auto__){
var s__47671__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47671__$2)){
var c__30928__auto__ = cljs.core.chunk_first.call(null,s__47671__$2);
var size__30929__auto__ = cljs.core.count.call(null,c__30928__auto__);
var b__47673 = cljs.core.chunk_buffer.call(null,size__30929__auto__);
if((function (){var i__47672 = (0);
while(true){
if((i__47672 < size__30929__auto__)){
var comm = cljs.core._nth.call(null,c__30928__auto__,i__47672);
cljs.core.chunk_append.call(null,b__47673,((!(cljs.core.contains_QMARK_.call(null,titles_with_combs,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(comm))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [commgame.render.buy_comm_button,comm], null):null));

var G__47674 = (i__47672 + (1));
i__47672 = G__47674;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47673),commgame$render$basic_comm_market_$_iter__47670.call(null,cljs.core.chunk_rest.call(null,s__47671__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47673),null);
}
} else {
var comm = cljs.core.first.call(null,s__47671__$2);
return cljs.core.cons.call(null,((!(cljs.core.contains_QMARK_.call(null,titles_with_combs,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(comm))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [commgame.render.buy_comm_button,comm], null):null),commgame$render$basic_comm_market_$_iter__47670.call(null,cljs.core.rest.call(null,s__47671__$2)));
}
} else {
return null;
}
break;
}
});})(titles_with_combs))
,null,null));
});})(titles_with_combs))
;
return iter__30930__auto__.call(null,commgame.core.user_commodities.call(null));
})()], null)], null);
});
commgame.render.page = (function commgame$render$page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.money","div.money",-1536326743),"$",goog.string.format("%.2f",cljs.core.get_in.call(null,cljs.core.deref.call(null,commgame.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"money","money",250333921)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [commgame.render.basic_comm_market], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [commgame.render.comm_comb_market], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"User commodities"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.user-comm","div.user-comm",-128027009),(function (){var comp = cljs.core.doall.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__30930__auto__ = (function commgame$render$page_$_iter__47675(s__47676){
return (new cljs.core.LazySeq(null,(function (){
var s__47676__$1 = s__47676;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__47676__$1);
if(temp__5278__auto__){
var s__47676__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47676__$2)){
var c__30928__auto__ = cljs.core.chunk_first.call(null,s__47676__$2);
var size__30929__auto__ = cljs.core.count.call(null,c__30928__auto__);
var b__47678 = cljs.core.chunk_buffer.call(null,size__30929__auto__);
if((function (){var i__47677 = (0);
while(true){
if((i__47677 < size__30929__auto__)){
var c = cljs.core._nth.call(null,c__30928__auto__,i__47677);
cljs.core.chunk_append.call(null,b__47678,((cljs.core.not_EQ_.call(null,(0),new cljs.core.Keyword(null,"quan","quan",-1772353373).cljs$core$IFn$_invoke$arity$1(c)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [commgame.render.comm_li,c], null):null));

var G__47679 = (i__47677 + (1));
i__47677 = G__47679;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47678),commgame$render$page_$_iter__47675.call(null,cljs.core.chunk_rest.call(null,s__47676__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47678),null);
}
} else {
var c = cljs.core.first.call(null,s__47676__$2);
return cljs.core.cons.call(null,((cljs.core.not_EQ_.call(null,(0),new cljs.core.Keyword(null,"quan","quan",-1772353373).cljs$core$IFn$_invoke$arity$1(c)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [commgame.render.comm_li,c], null):null),commgame$render$page_$_iter__47675.call(null,cljs.core.rest.call(null,s__47676__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30930__auto__.call(null,commgame.core.user_commodities.call(null));
})()));
if(cljs.core.empty_QMARK_.call(null,comp)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"No commodities yet!"], null);
} else {
return comp;
}
})()], null)], null)], null);
});

//# sourceMappingURL=render.js.map?rel=1507442366255
