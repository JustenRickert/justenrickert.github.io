// Compiled by ClojureScript 1.9.908 {}
goog.provide('commgame.core');
goog.require('cljs.core');
goog.require('commgame.commodities');
goog.require('commgame.render');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.string');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
commgame.core.time_formatter = cljs_time.format.formatter.call(null,"yyyy/MM/dd hh:mm:ss UTC");
if(typeof commgame.core.app_state !== 'undefined'){
} else {
commgame.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"begin-time","begin-time",-1925573305),cljs_time.core.now.call(null),new cljs.core.Keyword(null,"time-now","time-now",-206239031),cljs_time.core.now.call(null),new cljs.core.Keyword(null,"time-last-tick","time-last-tick",2054858818),cljs_time.core.now.call(null),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"money","money",250333921),(0),new cljs.core.Keyword(null,"money-delta","money-delta",-1177769203),0.1,new cljs.core.Keyword(null,"commodities","commodities",-1716045576),cljs.core.map.call(null,(function (p1__47682_SHARP_){
return cljs.core.assoc.call(null,p1__47682_SHARP_,new cljs.core.Keyword(null,"quan","quan",-1772353373),(0),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid.call(null));
}),cljs.core.deref.call(null,commgame.commodities.comm_data))], null)], null));
}
commgame.core.seconds_since_begin_time = (function commgame$core$seconds_since_begin_time(){
return cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,new cljs.core.Keyword(null,"begin-time","begin-time",-1925573305).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,commgame.core.app_state)),cljs_time.core.now.call(null)));
});
commgame.core.seconds_since_last_tick = (function commgame$core$seconds_since_last_tick(){
return cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,new cljs.core.Keyword(null,"time-last-tick","time-last-tick",2054858818).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,commgame.core.app_state)),cljs_time.core.now.call(null)));
});
commgame.core.user_commodities = (function commgame$core$user_commodities(){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,commgame.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"commodities","commodities",-1716045576)], null));
});
commgame.core.give_user_money_BANG_ = (function commgame$core$give_user_money_BANG_(amt){
return cljs.core.swap_BANG_.call(null,commgame.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"money","money",250333921)], null),(function (){
return (cljs.core.get_in.call(null,cljs.core.deref.call(null,commgame.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"money","money",250333921)], null)) + amt);
}));
});
commgame.core.take_user_money_BANG_ = (function commgame$core$take_user_money_BANG_(amt){
return cljs.core.swap_BANG_.call(null,commgame.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"money","money",250333921)], null),(function (){
return (cljs.core.get_in.call(null,cljs.core.deref.call(null,commgame.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"money","money",250333921)], null)) - amt);
}));
});
commgame.core.get_comm_by_title = (function commgame$core$get_comm_by_title(title){
var comm = cljs.core.get_in.call(null,cljs.core.deref.call(null,commgame.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"commodities","commodities",-1716045576)], null));
while(true){
if(cljs.core._EQ_.call(null,title,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,comm)))){
return cljs.core.first.call(null,comm);
} else {
if(cljs.core.empty_QMARK_.call(null,comm)){
return null;
} else {
var G__47683 = cljs.core.rest.call(null,comm);
comm = G__47683;
continue;

}
}
break;
}
});
commgame.core.get_comm_by_index = (function commgame$core$get_comm_by_index(index){
var comm = cljs.core.get_in.call(null,cljs.core.deref.call(null,commgame.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"commodities","commodities",-1716045576)], null));
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,index)){
return cljs.core.first.call(null,comm);
} else {
if(cljs.core.empty_QMARK_.call(null,comm)){
return null;
} else {
var G__47684 = cljs.core.rest.call(null,comm);
var G__47685 = (i + (1));
comm = G__47684;
i = G__47685;
continue;

}
}
break;
}
});
commgame.core.index_of_user_comm = (function commgame$core$index_of_user_comm(title){
var comm = cljs.core.get_in.call(null,cljs.core.deref.call(null,commgame.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"commodities","commodities",-1716045576)], null));
var index = (0);
while(true){
if(cljs.core._EQ_.call(null,title,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,comm)))){
return index;
} else {
if(cljs.core.empty_QMARK_.call(null,comm)){
return null;
} else {
var G__47686 = cljs.core.rest.call(null,comm);
var G__47687 = (index + (1));
comm = G__47686;
index = G__47687;
continue;

}
}
break;
}
});
commgame.core.give_user_comm_BANG_ = (function commgame$core$give_user_comm_BANG_(title,amt){
var user_comm = commgame.core.get_comm_by_title.call(null,title);
return cljs.core.swap_BANG_.call(null,commgame.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"commodities","commodities",-1716045576)], null),((function (user_comm){
return (function (){
return cljs.core.map.call(null,((function (user_comm){
return (function (p1__47688_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__47688_SHARP_),title)){
return cljs.core.assoc.call(null,p1__47688_SHARP_,new cljs.core.Keyword(null,"quan","quan",-1772353373),(new cljs.core.Keyword(null,"quan","quan",-1772353373).cljs$core$IFn$_invoke$arity$1(user_comm) + amt));
} else {
return cljs.core.identity.call(null,p1__47688_SHARP_);
}
});})(user_comm))
,cljs.core.vec.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,commgame.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"commodities","commodities",-1716045576)], null))));
});})(user_comm))
);
});
commgame.core.take_user_comm_BANG_ = (function commgame$core$take_user_comm_BANG_(title,amt){
var user_comm = commgame.core.get_comm_by_title.call(null,title);
return cljs.core.swap_BANG_.call(null,commgame.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"commodities","commodities",-1716045576)], null),((function (user_comm){
return (function (){
return cljs.core.map.call(null,((function (user_comm){
return (function (p1__47689_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__47689_SHARP_),title)){
return cljs.core.assoc.call(null,p1__47689_SHARP_,new cljs.core.Keyword(null,"quan","quan",-1772353373),(new cljs.core.Keyword(null,"quan","quan",-1772353373).cljs$core$IFn$_invoke$arity$1(user_comm) - amt));
} else {
return cljs.core.identity.call(null,p1__47689_SHARP_);
}
});})(user_comm))
,cljs.core.vec.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,commgame.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"commodities","commodities",-1716045576)], null))));
});})(user_comm))
);
});
commgame.core.user_commodity_of_id = (function commgame$core$user_commodity_of_id(id){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,commgame.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"commodities","commodities",-1716045576),id], null));
});
commgame.core.timer_loop_BANG_ = (function commgame$core$timer_loop_BANG_(){
var user_47690 = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,commgame.core.app_state));
cljs.core.swap_BANG_.call(null,commgame.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"money","money",250333921)], null),((function (user_47690){
return (function (){
return (new cljs.core.Keyword(null,"money","money",250333921).cljs$core$IFn$_invoke$arity$1(user_47690) + new cljs.core.Keyword(null,"money-delta","money-delta",-1177769203).cljs$core$IFn$_invoke$arity$1(user_47690));
});})(user_47690))
);

cljs.core.swap_BANG_.call(null,commgame.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-last-tick","time-last-tick",2054858818)], null),cljs_time.core.now);

cljs.core.swap_BANG_.call(null,commgame.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-now","time-now",-206239031)], null),cljs_time.core.now);

return requestAnimationFrame(commgame.core.timer_loop_BANG_);
});
commgame.core.format_time = (function commgame$core$format_time(time_key){
return cljs_time.format.unparse.call(null,commgame.core.time_formatter,time_key.call(null,cljs.core.deref.call(null,commgame.core.app_state)));
});
commgame.core.user_buy_one_comm = (function commgame$core$user_buy_one_comm(title){
var comm_buying = commgame.core.get_comm_by_title.call(null,title);
if((cljs.core.get_in.call(null,cljs.core.deref.call(null,commgame.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"money","money",250333921)], null)) > new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(comm_buying))){
commgame.core.take_user_money_BANG_.call(null,new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(comm_buying));

return commgame.core.give_user_comm_BANG_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(comm_buying),(1));
} else {
return console.log("Not enough money to buy",title,"!");
}
});
commgame.core.user_can_combine_for_comm = (function commgame$core$user_can_combine_for_comm(title){
var comb_inputs = commgame.commodities.get_comb_inputs_by_title.call(null,title);
var user_comms = commgame.core.user_commodities.call(null);
var input = comb_inputs;
while(true){
if((new cljs.core.Keyword(null,"quan","quan",-1772353373).cljs$core$IFn$_invoke$arity$1(commgame.core.get_comm_by_title.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,input)))) < new cljs.core.Keyword(null,"quan","quan",-1772353373).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,input)))){
return false;
} else {
if(cljs.core.empty_QMARK_.call(null,input)){
return true;
} else {
var G__47691 = cljs.core.rest.call(null,input);
input = G__47691;
continue;

}
}
break;
}
});
commgame.core.user_combine_for_comm = (function commgame$core$user_combine_for_comm(title){
var comb_inputs = commgame.commodities.get_comb_inputs_by_title.call(null,title);
var comb_output = commgame.commodities.get_comb_output_by_title.call(null,title);
console.log(new cljs.core.Keyword(null,"quan","quan",-1772353373).cljs$core$IFn$_invoke$arity$1(comb_inputs),new cljs.core.Keyword(null,"quan","quan",-1772353373).cljs$core$IFn$_invoke$arity$1(comb_output));

var seq__47692_47696 = cljs.core.seq.call(null,comb_inputs);
var chunk__47693_47697 = null;
var count__47694_47698 = (0);
var i__47695_47699 = (0);
while(true){
if((i__47695_47699 < count__47694_47698)){
var input_47700 = cljs.core._nth.call(null,chunk__47693_47697,i__47695_47699);
commgame.core.take_user_comm_BANG_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(input_47700),new cljs.core.Keyword(null,"quan","quan",-1772353373).cljs$core$IFn$_invoke$arity$1(input_47700));

var G__47701 = seq__47692_47696;
var G__47702 = chunk__47693_47697;
var G__47703 = count__47694_47698;
var G__47704 = (i__47695_47699 + (1));
seq__47692_47696 = G__47701;
chunk__47693_47697 = G__47702;
count__47694_47698 = G__47703;
i__47695_47699 = G__47704;
continue;
} else {
var temp__5278__auto___47705 = cljs.core.seq.call(null,seq__47692_47696);
if(temp__5278__auto___47705){
var seq__47692_47706__$1 = temp__5278__auto___47705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47692_47706__$1)){
var c__30979__auto___47707 = cljs.core.chunk_first.call(null,seq__47692_47706__$1);
var G__47708 = cljs.core.chunk_rest.call(null,seq__47692_47706__$1);
var G__47709 = c__30979__auto___47707;
var G__47710 = cljs.core.count.call(null,c__30979__auto___47707);
var G__47711 = (0);
seq__47692_47696 = G__47708;
chunk__47693_47697 = G__47709;
count__47694_47698 = G__47710;
i__47695_47699 = G__47711;
continue;
} else {
var input_47712 = cljs.core.first.call(null,seq__47692_47706__$1);
commgame.core.take_user_comm_BANG_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(input_47712),new cljs.core.Keyword(null,"quan","quan",-1772353373).cljs$core$IFn$_invoke$arity$1(input_47712));

var G__47713 = cljs.core.next.call(null,seq__47692_47706__$1);
var G__47714 = null;
var G__47715 = (0);
var G__47716 = (0);
seq__47692_47696 = G__47713;
chunk__47693_47697 = G__47714;
count__47694_47698 = G__47715;
i__47695_47699 = G__47716;
continue;
}
} else {
}
}
break;
}

return commgame.core.give_user_comm_BANG_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(comb_output),new cljs.core.Keyword(null,"quan","quan",-1772353373).cljs$core$IFn$_invoke$arity$1(comb_output));
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [commgame.render.page], null),document.getElementById("app"));
commgame.core.timer_loop_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1507442366322
