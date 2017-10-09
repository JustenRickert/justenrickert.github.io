// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33192 = arguments.length;
switch (G__33192) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async33193 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33193 = (function (f,blockable,meta33194){
this.f = f;
this.blockable = blockable;
this.meta33194 = meta33194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33195,meta33194__$1){
var self__ = this;
var _33195__$1 = this;
return (new cljs.core.async.t_cljs$core$async33193(self__.f,self__.blockable,meta33194__$1));
});

cljs.core.async.t_cljs$core$async33193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33195){
var self__ = this;
var _33195__$1 = this;
return self__.meta33194;
});

cljs.core.async.t_cljs$core$async33193.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33193.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33193.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33193.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33194","meta33194",1543210262,null)], null);
});

cljs.core.async.t_cljs$core$async33193.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33193";

cljs.core.async.t_cljs$core$async33193.cljs$lang$ctorPrWriter = (function (this__30720__auto__,writer__30721__auto__,opt__30722__auto__){
return cljs.core._write.call(null,writer__30721__auto__,"cljs.core.async/t_cljs$core$async33193");
});

cljs.core.async.__GT_t_cljs$core$async33193 = (function cljs$core$async$__GT_t_cljs$core$async33193(f__$1,blockable__$1,meta33194){
return (new cljs.core.async.t_cljs$core$async33193(f__$1,blockable__$1,meta33194));
});

}

return (new cljs.core.async.t_cljs$core$async33193(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33199 = arguments.length;
switch (G__33199) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33202 = arguments.length;
switch (G__33202) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33205 = arguments.length;
switch (G__33205) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33207 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33207);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33207,ret){
return (function (){
return fn1.call(null,val_33207);
});})(val_33207,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33209 = arguments.length;
switch (G__33209) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5276__auto__)){
var ret = temp__5276__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5276__auto__)){
var retb = temp__5276__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5276__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5276__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__31092__auto___33211 = n;
var x_33212 = (0);
while(true){
if((x_33212 < n__31092__auto___33211)){
(a[x_33212] = (0));

var G__33213 = (x_33212 + (1));
x_33212 = G__33213;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__33214 = (i + (1));
i = G__33214;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33215 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33215 = (function (flag,meta33216){
this.flag = flag;
this.meta33216 = meta33216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33217,meta33216__$1){
var self__ = this;
var _33217__$1 = this;
return (new cljs.core.async.t_cljs$core$async33215(self__.flag,meta33216__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33215.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33217){
var self__ = this;
var _33217__$1 = this;
return self__.meta33216;
});})(flag))
;

cljs.core.async.t_cljs$core$async33215.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33215.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33215.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33215.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33215.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33216","meta33216",1195399493,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33215.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33215";

cljs.core.async.t_cljs$core$async33215.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30720__auto__,writer__30721__auto__,opt__30722__auto__){
return cljs.core._write.call(null,writer__30721__auto__,"cljs.core.async/t_cljs$core$async33215");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33215 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33215(flag__$1,meta33216){
return (new cljs.core.async.t_cljs$core$async33215(flag__$1,meta33216));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33215(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33218 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33218 = (function (flag,cb,meta33219){
this.flag = flag;
this.cb = cb;
this.meta33219 = meta33219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33220,meta33219__$1){
var self__ = this;
var _33220__$1 = this;
return (new cljs.core.async.t_cljs$core$async33218(self__.flag,self__.cb,meta33219__$1));
});

cljs.core.async.t_cljs$core$async33218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33220){
var self__ = this;
var _33220__$1 = this;
return self__.meta33219;
});

cljs.core.async.t_cljs$core$async33218.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33218.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33218.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33218.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33219","meta33219",-1981444986,null)], null);
});

cljs.core.async.t_cljs$core$async33218.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33218";

cljs.core.async.t_cljs$core$async33218.cljs$lang$ctorPrWriter = (function (this__30720__auto__,writer__30721__auto__,opt__30722__auto__){
return cljs.core._write.call(null,writer__30721__auto__,"cljs.core.async/t_cljs$core$async33218");
});

cljs.core.async.__GT_t_cljs$core$async33218 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33218(flag__$1,cb__$1,meta33219){
return (new cljs.core.async.t_cljs$core$async33218(flag__$1,cb__$1,meta33219));
});

}

return (new cljs.core.async.t_cljs$core$async33218(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33221_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33221_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33222_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33222_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30048__auto__ = wport;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33223 = (i + (1));
i = G__33223;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30048__auto__ = ret;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5278__auto__ = (function (){var and__30036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30036__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var got = temp__5278__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__31333__auto__ = [];
var len__31326__auto___33229 = arguments.length;
var i__31327__auto___33230 = (0);
while(true){
if((i__31327__auto___33230 < len__31326__auto___33229)){
args__31333__auto__.push((arguments[i__31327__auto___33230]));

var G__33231 = (i__31327__auto___33230 + (1));
i__31327__auto___33230 = G__33231;
continue;
} else {
}
break;
}

var argseq__31334__auto__ = ((((1) < args__31333__auto__.length))?(new cljs.core.IndexedSeq(args__31333__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31334__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33226){
var map__33227 = p__33226;
var map__33227__$1 = ((((!((map__33227 == null)))?((((map__33227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33227):map__33227);
var opts = map__33227__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33224){
var G__33225 = cljs.core.first.call(null,seq33224);
var seq33224__$1 = cljs.core.next.call(null,seq33224);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33225,seq33224__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33233 = arguments.length;
switch (G__33233) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33132__auto___33279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto___33279){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto___33279){
return (function (state_33257){
var state_val_33258 = (state_33257[(1)]);
if((state_val_33258 === (7))){
var inst_33253 = (state_33257[(2)]);
var state_33257__$1 = state_33257;
var statearr_33259_33280 = state_33257__$1;
(statearr_33259_33280[(2)] = inst_33253);

(statearr_33259_33280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33258 === (1))){
var state_33257__$1 = state_33257;
var statearr_33260_33281 = state_33257__$1;
(statearr_33260_33281[(2)] = null);

(statearr_33260_33281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33258 === (4))){
var inst_33236 = (state_33257[(7)]);
var inst_33236__$1 = (state_33257[(2)]);
var inst_33237 = (inst_33236__$1 == null);
var state_33257__$1 = (function (){var statearr_33261 = state_33257;
(statearr_33261[(7)] = inst_33236__$1);

return statearr_33261;
})();
if(cljs.core.truth_(inst_33237)){
var statearr_33262_33282 = state_33257__$1;
(statearr_33262_33282[(1)] = (5));

} else {
var statearr_33263_33283 = state_33257__$1;
(statearr_33263_33283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33258 === (13))){
var state_33257__$1 = state_33257;
var statearr_33264_33284 = state_33257__$1;
(statearr_33264_33284[(2)] = null);

(statearr_33264_33284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33258 === (6))){
var inst_33236 = (state_33257[(7)]);
var state_33257__$1 = state_33257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33257__$1,(11),to,inst_33236);
} else {
if((state_val_33258 === (3))){
var inst_33255 = (state_33257[(2)]);
var state_33257__$1 = state_33257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33257__$1,inst_33255);
} else {
if((state_val_33258 === (12))){
var state_33257__$1 = state_33257;
var statearr_33265_33285 = state_33257__$1;
(statearr_33265_33285[(2)] = null);

(statearr_33265_33285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33258 === (2))){
var state_33257__$1 = state_33257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33257__$1,(4),from);
} else {
if((state_val_33258 === (11))){
var inst_33246 = (state_33257[(2)]);
var state_33257__$1 = state_33257;
if(cljs.core.truth_(inst_33246)){
var statearr_33266_33286 = state_33257__$1;
(statearr_33266_33286[(1)] = (12));

} else {
var statearr_33267_33287 = state_33257__$1;
(statearr_33267_33287[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33258 === (9))){
var state_33257__$1 = state_33257;
var statearr_33268_33288 = state_33257__$1;
(statearr_33268_33288[(2)] = null);

(statearr_33268_33288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33258 === (5))){
var state_33257__$1 = state_33257;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33269_33289 = state_33257__$1;
(statearr_33269_33289[(1)] = (8));

} else {
var statearr_33270_33290 = state_33257__$1;
(statearr_33270_33290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33258 === (14))){
var inst_33251 = (state_33257[(2)]);
var state_33257__$1 = state_33257;
var statearr_33271_33291 = state_33257__$1;
(statearr_33271_33291[(2)] = inst_33251);

(statearr_33271_33291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33258 === (10))){
var inst_33243 = (state_33257[(2)]);
var state_33257__$1 = state_33257;
var statearr_33272_33292 = state_33257__$1;
(statearr_33272_33292[(2)] = inst_33243);

(statearr_33272_33292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33258 === (8))){
var inst_33240 = cljs.core.async.close_BANG_.call(null,to);
var state_33257__$1 = state_33257;
var statearr_33273_33293 = state_33257__$1;
(statearr_33273_33293[(2)] = inst_33240);

(statearr_33273_33293[(1)] = (10));


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
});})(c__33132__auto___33279))
;
return ((function (switch__33042__auto__,c__33132__auto___33279){
return (function() {
var cljs$core$async$state_machine__33043__auto__ = null;
var cljs$core$async$state_machine__33043__auto____0 = (function (){
var statearr_33274 = [null,null,null,null,null,null,null,null];
(statearr_33274[(0)] = cljs$core$async$state_machine__33043__auto__);

(statearr_33274[(1)] = (1));

return statearr_33274;
});
var cljs$core$async$state_machine__33043__auto____1 = (function (state_33257){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_33257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e33275){if((e33275 instanceof Object)){
var ex__33046__auto__ = e33275;
var statearr_33276_33294 = state_33257;
(statearr_33276_33294[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33295 = state_33257;
state_33257 = G__33295;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
cljs$core$async$state_machine__33043__auto__ = function(state_33257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33043__auto____1.call(this,state_33257);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33043__auto____0;
cljs$core$async$state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33043__auto____1;
return cljs$core$async$state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto___33279))
})();
var state__33134__auto__ = (function (){var statearr_33277 = f__33133__auto__.call(null);
(statearr_33277[(6)] = c__33132__auto___33279);

return statearr_33277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto___33279))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__33296){
var vec__33297 = p__33296;
var v = cljs.core.nth.call(null,vec__33297,(0),null);
var p = cljs.core.nth.call(null,vec__33297,(1),null);
var job = vec__33297;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33132__auto___33468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto___33468,res,vec__33297,v,p,job,jobs,results){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto___33468,res,vec__33297,v,p,job,jobs,results){
return (function (state_33304){
var state_val_33305 = (state_33304[(1)]);
if((state_val_33305 === (1))){
var state_33304__$1 = state_33304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33304__$1,(2),res,v);
} else {
if((state_val_33305 === (2))){
var inst_33301 = (state_33304[(2)]);
var inst_33302 = cljs.core.async.close_BANG_.call(null,res);
var state_33304__$1 = (function (){var statearr_33306 = state_33304;
(statearr_33306[(7)] = inst_33301);

return statearr_33306;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33304__$1,inst_33302);
} else {
return null;
}
}
});})(c__33132__auto___33468,res,vec__33297,v,p,job,jobs,results))
;
return ((function (switch__33042__auto__,c__33132__auto___33468,res,vec__33297,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____0 = (function (){
var statearr_33307 = [null,null,null,null,null,null,null,null];
(statearr_33307[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__);

(statearr_33307[(1)] = (1));

return statearr_33307;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____1 = (function (state_33304){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_33304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e33308){if((e33308 instanceof Object)){
var ex__33046__auto__ = e33308;
var statearr_33309_33469 = state_33304;
(statearr_33309_33469[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33470 = state_33304;
state_33304 = G__33470;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__ = function(state_33304){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____1.call(this,state_33304);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto___33468,res,vec__33297,v,p,job,jobs,results))
})();
var state__33134__auto__ = (function (){var statearr_33310 = f__33133__auto__.call(null);
(statearr_33310[(6)] = c__33132__auto___33468);

return statearr_33310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto___33468,res,vec__33297,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33311){
var vec__33312 = p__33311;
var v = cljs.core.nth.call(null,vec__33312,(0),null);
var p = cljs.core.nth.call(null,vec__33312,(1),null);
var job = vec__33312;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__31092__auto___33471 = n;
var __33472 = (0);
while(true){
if((__33472 < n__31092__auto___33471)){
var G__33315_33473 = type;
var G__33315_33474__$1 = (((G__33315_33473 instanceof cljs.core.Keyword))?G__33315_33473.fqn:null);
switch (G__33315_33474__$1) {
case "compute":
var c__33132__auto___33476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33472,c__33132__auto___33476,G__33315_33473,G__33315_33474__$1,n__31092__auto___33471,jobs,results,process,async){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (__33472,c__33132__auto___33476,G__33315_33473,G__33315_33474__$1,n__31092__auto___33471,jobs,results,process,async){
return (function (state_33328){
var state_val_33329 = (state_33328[(1)]);
if((state_val_33329 === (1))){
var state_33328__$1 = state_33328;
var statearr_33330_33477 = state_33328__$1;
(statearr_33330_33477[(2)] = null);

(statearr_33330_33477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (2))){
var state_33328__$1 = state_33328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33328__$1,(4),jobs);
} else {
if((state_val_33329 === (3))){
var inst_33326 = (state_33328[(2)]);
var state_33328__$1 = state_33328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33328__$1,inst_33326);
} else {
if((state_val_33329 === (4))){
var inst_33318 = (state_33328[(2)]);
var inst_33319 = process.call(null,inst_33318);
var state_33328__$1 = state_33328;
if(cljs.core.truth_(inst_33319)){
var statearr_33331_33478 = state_33328__$1;
(statearr_33331_33478[(1)] = (5));

} else {
var statearr_33332_33479 = state_33328__$1;
(statearr_33332_33479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (5))){
var state_33328__$1 = state_33328;
var statearr_33333_33480 = state_33328__$1;
(statearr_33333_33480[(2)] = null);

(statearr_33333_33480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (6))){
var state_33328__$1 = state_33328;
var statearr_33334_33481 = state_33328__$1;
(statearr_33334_33481[(2)] = null);

(statearr_33334_33481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (7))){
var inst_33324 = (state_33328[(2)]);
var state_33328__$1 = state_33328;
var statearr_33335_33482 = state_33328__$1;
(statearr_33335_33482[(2)] = inst_33324);

(statearr_33335_33482[(1)] = (3));


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
});})(__33472,c__33132__auto___33476,G__33315_33473,G__33315_33474__$1,n__31092__auto___33471,jobs,results,process,async))
;
return ((function (__33472,switch__33042__auto__,c__33132__auto___33476,G__33315_33473,G__33315_33474__$1,n__31092__auto___33471,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____0 = (function (){
var statearr_33336 = [null,null,null,null,null,null,null];
(statearr_33336[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__);

(statearr_33336[(1)] = (1));

return statearr_33336;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____1 = (function (state_33328){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_33328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e33337){if((e33337 instanceof Object)){
var ex__33046__auto__ = e33337;
var statearr_33338_33483 = state_33328;
(statearr_33338_33483[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33484 = state_33328;
state_33328 = G__33484;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__ = function(state_33328){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____1.call(this,state_33328);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__;
})()
;})(__33472,switch__33042__auto__,c__33132__auto___33476,G__33315_33473,G__33315_33474__$1,n__31092__auto___33471,jobs,results,process,async))
})();
var state__33134__auto__ = (function (){var statearr_33339 = f__33133__auto__.call(null);
(statearr_33339[(6)] = c__33132__auto___33476);

return statearr_33339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(__33472,c__33132__auto___33476,G__33315_33473,G__33315_33474__$1,n__31092__auto___33471,jobs,results,process,async))
);


break;
case "async":
var c__33132__auto___33485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33472,c__33132__auto___33485,G__33315_33473,G__33315_33474__$1,n__31092__auto___33471,jobs,results,process,async){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (__33472,c__33132__auto___33485,G__33315_33473,G__33315_33474__$1,n__31092__auto___33471,jobs,results,process,async){
return (function (state_33352){
var state_val_33353 = (state_33352[(1)]);
if((state_val_33353 === (1))){
var state_33352__$1 = state_33352;
var statearr_33354_33486 = state_33352__$1;
(statearr_33354_33486[(2)] = null);

(statearr_33354_33486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (2))){
var state_33352__$1 = state_33352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33352__$1,(4),jobs);
} else {
if((state_val_33353 === (3))){
var inst_33350 = (state_33352[(2)]);
var state_33352__$1 = state_33352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33352__$1,inst_33350);
} else {
if((state_val_33353 === (4))){
var inst_33342 = (state_33352[(2)]);
var inst_33343 = async.call(null,inst_33342);
var state_33352__$1 = state_33352;
if(cljs.core.truth_(inst_33343)){
var statearr_33355_33487 = state_33352__$1;
(statearr_33355_33487[(1)] = (5));

} else {
var statearr_33356_33488 = state_33352__$1;
(statearr_33356_33488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (5))){
var state_33352__$1 = state_33352;
var statearr_33357_33489 = state_33352__$1;
(statearr_33357_33489[(2)] = null);

(statearr_33357_33489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (6))){
var state_33352__$1 = state_33352;
var statearr_33358_33490 = state_33352__$1;
(statearr_33358_33490[(2)] = null);

(statearr_33358_33490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (7))){
var inst_33348 = (state_33352[(2)]);
var state_33352__$1 = state_33352;
var statearr_33359_33491 = state_33352__$1;
(statearr_33359_33491[(2)] = inst_33348);

(statearr_33359_33491[(1)] = (3));


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
});})(__33472,c__33132__auto___33485,G__33315_33473,G__33315_33474__$1,n__31092__auto___33471,jobs,results,process,async))
;
return ((function (__33472,switch__33042__auto__,c__33132__auto___33485,G__33315_33473,G__33315_33474__$1,n__31092__auto___33471,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____0 = (function (){
var statearr_33360 = [null,null,null,null,null,null,null];
(statearr_33360[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__);

(statearr_33360[(1)] = (1));

return statearr_33360;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____1 = (function (state_33352){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_33352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e33361){if((e33361 instanceof Object)){
var ex__33046__auto__ = e33361;
var statearr_33362_33492 = state_33352;
(statearr_33362_33492[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33493 = state_33352;
state_33352 = G__33493;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__ = function(state_33352){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____1.call(this,state_33352);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__;
})()
;})(__33472,switch__33042__auto__,c__33132__auto___33485,G__33315_33473,G__33315_33474__$1,n__31092__auto___33471,jobs,results,process,async))
})();
var state__33134__auto__ = (function (){var statearr_33363 = f__33133__auto__.call(null);
(statearr_33363[(6)] = c__33132__auto___33485);

return statearr_33363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(__33472,c__33132__auto___33485,G__33315_33473,G__33315_33474__$1,n__31092__auto___33471,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33315_33474__$1)].join('')));

}

var G__33494 = (__33472 + (1));
__33472 = G__33494;
continue;
} else {
}
break;
}

var c__33132__auto___33495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto___33495,jobs,results,process,async){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto___33495,jobs,results,process,async){
return (function (state_33385){
var state_val_33386 = (state_33385[(1)]);
if((state_val_33386 === (1))){
var state_33385__$1 = state_33385;
var statearr_33387_33496 = state_33385__$1;
(statearr_33387_33496[(2)] = null);

(statearr_33387_33496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (2))){
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33385__$1,(4),from);
} else {
if((state_val_33386 === (3))){
var inst_33383 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33385__$1,inst_33383);
} else {
if((state_val_33386 === (4))){
var inst_33366 = (state_33385[(7)]);
var inst_33366__$1 = (state_33385[(2)]);
var inst_33367 = (inst_33366__$1 == null);
var state_33385__$1 = (function (){var statearr_33388 = state_33385;
(statearr_33388[(7)] = inst_33366__$1);

return statearr_33388;
})();
if(cljs.core.truth_(inst_33367)){
var statearr_33389_33497 = state_33385__$1;
(statearr_33389_33497[(1)] = (5));

} else {
var statearr_33390_33498 = state_33385__$1;
(statearr_33390_33498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (5))){
var inst_33369 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33385__$1 = state_33385;
var statearr_33391_33499 = state_33385__$1;
(statearr_33391_33499[(2)] = inst_33369);

(statearr_33391_33499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (6))){
var inst_33366 = (state_33385[(7)]);
var inst_33371 = (state_33385[(8)]);
var inst_33371__$1 = cljs.core.async.chan.call(null,(1));
var inst_33372 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33373 = [inst_33366,inst_33371__$1];
var inst_33374 = (new cljs.core.PersistentVector(null,2,(5),inst_33372,inst_33373,null));
var state_33385__$1 = (function (){var statearr_33392 = state_33385;
(statearr_33392[(8)] = inst_33371__$1);

return statearr_33392;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33385__$1,(8),jobs,inst_33374);
} else {
if((state_val_33386 === (7))){
var inst_33381 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
var statearr_33393_33500 = state_33385__$1;
(statearr_33393_33500[(2)] = inst_33381);

(statearr_33393_33500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (8))){
var inst_33371 = (state_33385[(8)]);
var inst_33376 = (state_33385[(2)]);
var state_33385__$1 = (function (){var statearr_33394 = state_33385;
(statearr_33394[(9)] = inst_33376);

return statearr_33394;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33385__$1,(9),results,inst_33371);
} else {
if((state_val_33386 === (9))){
var inst_33378 = (state_33385[(2)]);
var state_33385__$1 = (function (){var statearr_33395 = state_33385;
(statearr_33395[(10)] = inst_33378);

return statearr_33395;
})();
var statearr_33396_33501 = state_33385__$1;
(statearr_33396_33501[(2)] = null);

(statearr_33396_33501[(1)] = (2));


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
});})(c__33132__auto___33495,jobs,results,process,async))
;
return ((function (switch__33042__auto__,c__33132__auto___33495,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____0 = (function (){
var statearr_33397 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33397[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__);

(statearr_33397[(1)] = (1));

return statearr_33397;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____1 = (function (state_33385){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_33385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e33398){if((e33398 instanceof Object)){
var ex__33046__auto__ = e33398;
var statearr_33399_33502 = state_33385;
(statearr_33399_33502[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33503 = state_33385;
state_33385 = G__33503;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__ = function(state_33385){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____1.call(this,state_33385);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto___33495,jobs,results,process,async))
})();
var state__33134__auto__ = (function (){var statearr_33400 = f__33133__auto__.call(null);
(statearr_33400[(6)] = c__33132__auto___33495);

return statearr_33400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto___33495,jobs,results,process,async))
);


var c__33132__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto__,jobs,results,process,async){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto__,jobs,results,process,async){
return (function (state_33438){
var state_val_33439 = (state_33438[(1)]);
if((state_val_33439 === (7))){
var inst_33434 = (state_33438[(2)]);
var state_33438__$1 = state_33438;
var statearr_33440_33504 = state_33438__$1;
(statearr_33440_33504[(2)] = inst_33434);

(statearr_33440_33504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (20))){
var state_33438__$1 = state_33438;
var statearr_33441_33505 = state_33438__$1;
(statearr_33441_33505[(2)] = null);

(statearr_33441_33505[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (1))){
var state_33438__$1 = state_33438;
var statearr_33442_33506 = state_33438__$1;
(statearr_33442_33506[(2)] = null);

(statearr_33442_33506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (4))){
var inst_33403 = (state_33438[(7)]);
var inst_33403__$1 = (state_33438[(2)]);
var inst_33404 = (inst_33403__$1 == null);
var state_33438__$1 = (function (){var statearr_33443 = state_33438;
(statearr_33443[(7)] = inst_33403__$1);

return statearr_33443;
})();
if(cljs.core.truth_(inst_33404)){
var statearr_33444_33507 = state_33438__$1;
(statearr_33444_33507[(1)] = (5));

} else {
var statearr_33445_33508 = state_33438__$1;
(statearr_33445_33508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (15))){
var inst_33416 = (state_33438[(8)]);
var state_33438__$1 = state_33438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33438__$1,(18),to,inst_33416);
} else {
if((state_val_33439 === (21))){
var inst_33429 = (state_33438[(2)]);
var state_33438__$1 = state_33438;
var statearr_33446_33509 = state_33438__$1;
(statearr_33446_33509[(2)] = inst_33429);

(statearr_33446_33509[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (13))){
var inst_33431 = (state_33438[(2)]);
var state_33438__$1 = (function (){var statearr_33447 = state_33438;
(statearr_33447[(9)] = inst_33431);

return statearr_33447;
})();
var statearr_33448_33510 = state_33438__$1;
(statearr_33448_33510[(2)] = null);

(statearr_33448_33510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (6))){
var inst_33403 = (state_33438[(7)]);
var state_33438__$1 = state_33438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33438__$1,(11),inst_33403);
} else {
if((state_val_33439 === (17))){
var inst_33424 = (state_33438[(2)]);
var state_33438__$1 = state_33438;
if(cljs.core.truth_(inst_33424)){
var statearr_33449_33511 = state_33438__$1;
(statearr_33449_33511[(1)] = (19));

} else {
var statearr_33450_33512 = state_33438__$1;
(statearr_33450_33512[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (3))){
var inst_33436 = (state_33438[(2)]);
var state_33438__$1 = state_33438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33438__$1,inst_33436);
} else {
if((state_val_33439 === (12))){
var inst_33413 = (state_33438[(10)]);
var state_33438__$1 = state_33438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33438__$1,(14),inst_33413);
} else {
if((state_val_33439 === (2))){
var state_33438__$1 = state_33438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33438__$1,(4),results);
} else {
if((state_val_33439 === (19))){
var state_33438__$1 = state_33438;
var statearr_33451_33513 = state_33438__$1;
(statearr_33451_33513[(2)] = null);

(statearr_33451_33513[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (11))){
var inst_33413 = (state_33438[(2)]);
var state_33438__$1 = (function (){var statearr_33452 = state_33438;
(statearr_33452[(10)] = inst_33413);

return statearr_33452;
})();
var statearr_33453_33514 = state_33438__$1;
(statearr_33453_33514[(2)] = null);

(statearr_33453_33514[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (9))){
var state_33438__$1 = state_33438;
var statearr_33454_33515 = state_33438__$1;
(statearr_33454_33515[(2)] = null);

(statearr_33454_33515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (5))){
var state_33438__$1 = state_33438;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33455_33516 = state_33438__$1;
(statearr_33455_33516[(1)] = (8));

} else {
var statearr_33456_33517 = state_33438__$1;
(statearr_33456_33517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (14))){
var inst_33418 = (state_33438[(11)]);
var inst_33416 = (state_33438[(8)]);
var inst_33416__$1 = (state_33438[(2)]);
var inst_33417 = (inst_33416__$1 == null);
var inst_33418__$1 = cljs.core.not.call(null,inst_33417);
var state_33438__$1 = (function (){var statearr_33457 = state_33438;
(statearr_33457[(11)] = inst_33418__$1);

(statearr_33457[(8)] = inst_33416__$1);

return statearr_33457;
})();
if(inst_33418__$1){
var statearr_33458_33518 = state_33438__$1;
(statearr_33458_33518[(1)] = (15));

} else {
var statearr_33459_33519 = state_33438__$1;
(statearr_33459_33519[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (16))){
var inst_33418 = (state_33438[(11)]);
var state_33438__$1 = state_33438;
var statearr_33460_33520 = state_33438__$1;
(statearr_33460_33520[(2)] = inst_33418);

(statearr_33460_33520[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (10))){
var inst_33410 = (state_33438[(2)]);
var state_33438__$1 = state_33438;
var statearr_33461_33521 = state_33438__$1;
(statearr_33461_33521[(2)] = inst_33410);

(statearr_33461_33521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (18))){
var inst_33421 = (state_33438[(2)]);
var state_33438__$1 = state_33438;
var statearr_33462_33522 = state_33438__$1;
(statearr_33462_33522[(2)] = inst_33421);

(statearr_33462_33522[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33439 === (8))){
var inst_33407 = cljs.core.async.close_BANG_.call(null,to);
var state_33438__$1 = state_33438;
var statearr_33463_33523 = state_33438__$1;
(statearr_33463_33523[(2)] = inst_33407);

(statearr_33463_33523[(1)] = (10));


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
});})(c__33132__auto__,jobs,results,process,async))
;
return ((function (switch__33042__auto__,c__33132__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____0 = (function (){
var statearr_33464 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33464[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__);

(statearr_33464[(1)] = (1));

return statearr_33464;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____1 = (function (state_33438){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_33438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e33465){if((e33465 instanceof Object)){
var ex__33046__auto__ = e33465;
var statearr_33466_33524 = state_33438;
(statearr_33466_33524[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33525 = state_33438;
state_33438 = G__33525;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__ = function(state_33438){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____1.call(this,state_33438);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33043__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto__,jobs,results,process,async))
})();
var state__33134__auto__ = (function (){var statearr_33467 = f__33133__auto__.call(null);
(statearr_33467[(6)] = c__33132__auto__);

return statearr_33467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto__,jobs,results,process,async))
);

return c__33132__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33527 = arguments.length;
switch (G__33527) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33530 = arguments.length;
switch (G__33530) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33533 = arguments.length;
switch (G__33533) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33132__auto___33582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto___33582,tc,fc){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto___33582,tc,fc){
return (function (state_33559){
var state_val_33560 = (state_33559[(1)]);
if((state_val_33560 === (7))){
var inst_33555 = (state_33559[(2)]);
var state_33559__$1 = state_33559;
var statearr_33561_33583 = state_33559__$1;
(statearr_33561_33583[(2)] = inst_33555);

(statearr_33561_33583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (1))){
var state_33559__$1 = state_33559;
var statearr_33562_33584 = state_33559__$1;
(statearr_33562_33584[(2)] = null);

(statearr_33562_33584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (4))){
var inst_33536 = (state_33559[(7)]);
var inst_33536__$1 = (state_33559[(2)]);
var inst_33537 = (inst_33536__$1 == null);
var state_33559__$1 = (function (){var statearr_33563 = state_33559;
(statearr_33563[(7)] = inst_33536__$1);

return statearr_33563;
})();
if(cljs.core.truth_(inst_33537)){
var statearr_33564_33585 = state_33559__$1;
(statearr_33564_33585[(1)] = (5));

} else {
var statearr_33565_33586 = state_33559__$1;
(statearr_33565_33586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (13))){
var state_33559__$1 = state_33559;
var statearr_33566_33587 = state_33559__$1;
(statearr_33566_33587[(2)] = null);

(statearr_33566_33587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (6))){
var inst_33536 = (state_33559[(7)]);
var inst_33542 = p.call(null,inst_33536);
var state_33559__$1 = state_33559;
if(cljs.core.truth_(inst_33542)){
var statearr_33567_33588 = state_33559__$1;
(statearr_33567_33588[(1)] = (9));

} else {
var statearr_33568_33589 = state_33559__$1;
(statearr_33568_33589[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (3))){
var inst_33557 = (state_33559[(2)]);
var state_33559__$1 = state_33559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33559__$1,inst_33557);
} else {
if((state_val_33560 === (12))){
var state_33559__$1 = state_33559;
var statearr_33569_33590 = state_33559__$1;
(statearr_33569_33590[(2)] = null);

(statearr_33569_33590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (2))){
var state_33559__$1 = state_33559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33559__$1,(4),ch);
} else {
if((state_val_33560 === (11))){
var inst_33536 = (state_33559[(7)]);
var inst_33546 = (state_33559[(2)]);
var state_33559__$1 = state_33559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33559__$1,(8),inst_33546,inst_33536);
} else {
if((state_val_33560 === (9))){
var state_33559__$1 = state_33559;
var statearr_33570_33591 = state_33559__$1;
(statearr_33570_33591[(2)] = tc);

(statearr_33570_33591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (5))){
var inst_33539 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33540 = cljs.core.async.close_BANG_.call(null,fc);
var state_33559__$1 = (function (){var statearr_33571 = state_33559;
(statearr_33571[(8)] = inst_33539);

return statearr_33571;
})();
var statearr_33572_33592 = state_33559__$1;
(statearr_33572_33592[(2)] = inst_33540);

(statearr_33572_33592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (14))){
var inst_33553 = (state_33559[(2)]);
var state_33559__$1 = state_33559;
var statearr_33573_33593 = state_33559__$1;
(statearr_33573_33593[(2)] = inst_33553);

(statearr_33573_33593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (10))){
var state_33559__$1 = state_33559;
var statearr_33574_33594 = state_33559__$1;
(statearr_33574_33594[(2)] = fc);

(statearr_33574_33594[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (8))){
var inst_33548 = (state_33559[(2)]);
var state_33559__$1 = state_33559;
if(cljs.core.truth_(inst_33548)){
var statearr_33575_33595 = state_33559__$1;
(statearr_33575_33595[(1)] = (12));

} else {
var statearr_33576_33596 = state_33559__$1;
(statearr_33576_33596[(1)] = (13));

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
});})(c__33132__auto___33582,tc,fc))
;
return ((function (switch__33042__auto__,c__33132__auto___33582,tc,fc){
return (function() {
var cljs$core$async$state_machine__33043__auto__ = null;
var cljs$core$async$state_machine__33043__auto____0 = (function (){
var statearr_33577 = [null,null,null,null,null,null,null,null,null];
(statearr_33577[(0)] = cljs$core$async$state_machine__33043__auto__);

(statearr_33577[(1)] = (1));

return statearr_33577;
});
var cljs$core$async$state_machine__33043__auto____1 = (function (state_33559){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_33559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e33578){if((e33578 instanceof Object)){
var ex__33046__auto__ = e33578;
var statearr_33579_33597 = state_33559;
(statearr_33579_33597[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33598 = state_33559;
state_33559 = G__33598;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
cljs$core$async$state_machine__33043__auto__ = function(state_33559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33043__auto____1.call(this,state_33559);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33043__auto____0;
cljs$core$async$state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33043__auto____1;
return cljs$core$async$state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto___33582,tc,fc))
})();
var state__33134__auto__ = (function (){var statearr_33580 = f__33133__auto__.call(null);
(statearr_33580[(6)] = c__33132__auto___33582);

return statearr_33580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto___33582,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33132__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto__){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto__){
return (function (state_33619){
var state_val_33620 = (state_33619[(1)]);
if((state_val_33620 === (7))){
var inst_33615 = (state_33619[(2)]);
var state_33619__$1 = state_33619;
var statearr_33621_33639 = state_33619__$1;
(statearr_33621_33639[(2)] = inst_33615);

(statearr_33621_33639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33620 === (1))){
var inst_33599 = init;
var state_33619__$1 = (function (){var statearr_33622 = state_33619;
(statearr_33622[(7)] = inst_33599);

return statearr_33622;
})();
var statearr_33623_33640 = state_33619__$1;
(statearr_33623_33640[(2)] = null);

(statearr_33623_33640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33620 === (4))){
var inst_33602 = (state_33619[(8)]);
var inst_33602__$1 = (state_33619[(2)]);
var inst_33603 = (inst_33602__$1 == null);
var state_33619__$1 = (function (){var statearr_33624 = state_33619;
(statearr_33624[(8)] = inst_33602__$1);

return statearr_33624;
})();
if(cljs.core.truth_(inst_33603)){
var statearr_33625_33641 = state_33619__$1;
(statearr_33625_33641[(1)] = (5));

} else {
var statearr_33626_33642 = state_33619__$1;
(statearr_33626_33642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33620 === (6))){
var inst_33606 = (state_33619[(9)]);
var inst_33599 = (state_33619[(7)]);
var inst_33602 = (state_33619[(8)]);
var inst_33606__$1 = f.call(null,inst_33599,inst_33602);
var inst_33607 = cljs.core.reduced_QMARK_.call(null,inst_33606__$1);
var state_33619__$1 = (function (){var statearr_33627 = state_33619;
(statearr_33627[(9)] = inst_33606__$1);

return statearr_33627;
})();
if(inst_33607){
var statearr_33628_33643 = state_33619__$1;
(statearr_33628_33643[(1)] = (8));

} else {
var statearr_33629_33644 = state_33619__$1;
(statearr_33629_33644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33620 === (3))){
var inst_33617 = (state_33619[(2)]);
var state_33619__$1 = state_33619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33619__$1,inst_33617);
} else {
if((state_val_33620 === (2))){
var state_33619__$1 = state_33619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33619__$1,(4),ch);
} else {
if((state_val_33620 === (9))){
var inst_33606 = (state_33619[(9)]);
var inst_33599 = inst_33606;
var state_33619__$1 = (function (){var statearr_33630 = state_33619;
(statearr_33630[(7)] = inst_33599);

return statearr_33630;
})();
var statearr_33631_33645 = state_33619__$1;
(statearr_33631_33645[(2)] = null);

(statearr_33631_33645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33620 === (5))){
var inst_33599 = (state_33619[(7)]);
var state_33619__$1 = state_33619;
var statearr_33632_33646 = state_33619__$1;
(statearr_33632_33646[(2)] = inst_33599);

(statearr_33632_33646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33620 === (10))){
var inst_33613 = (state_33619[(2)]);
var state_33619__$1 = state_33619;
var statearr_33633_33647 = state_33619__$1;
(statearr_33633_33647[(2)] = inst_33613);

(statearr_33633_33647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33620 === (8))){
var inst_33606 = (state_33619[(9)]);
var inst_33609 = cljs.core.deref.call(null,inst_33606);
var state_33619__$1 = state_33619;
var statearr_33634_33648 = state_33619__$1;
(statearr_33634_33648[(2)] = inst_33609);

(statearr_33634_33648[(1)] = (10));


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
});})(c__33132__auto__))
;
return ((function (switch__33042__auto__,c__33132__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33043__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33043__auto____0 = (function (){
var statearr_33635 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33635[(0)] = cljs$core$async$reduce_$_state_machine__33043__auto__);

(statearr_33635[(1)] = (1));

return statearr_33635;
});
var cljs$core$async$reduce_$_state_machine__33043__auto____1 = (function (state_33619){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_33619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e33636){if((e33636 instanceof Object)){
var ex__33046__auto__ = e33636;
var statearr_33637_33649 = state_33619;
(statearr_33637_33649[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33650 = state_33619;
state_33619 = G__33650;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33043__auto__ = function(state_33619){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33043__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33043__auto____1.call(this,state_33619);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33043__auto____0;
cljs$core$async$reduce_$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33043__auto____1;
return cljs$core$async$reduce_$_state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto__))
})();
var state__33134__auto__ = (function (){var statearr_33638 = f__33133__auto__.call(null);
(statearr_33638[(6)] = c__33132__auto__);

return statearr_33638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto__))
);

return c__33132__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33132__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto__,f__$1){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto__,f__$1){
return (function (state_33656){
var state_val_33657 = (state_33656[(1)]);
if((state_val_33657 === (1))){
var inst_33651 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33656__$1 = state_33656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33656__$1,(2),inst_33651);
} else {
if((state_val_33657 === (2))){
var inst_33653 = (state_33656[(2)]);
var inst_33654 = f__$1.call(null,inst_33653);
var state_33656__$1 = state_33656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33656__$1,inst_33654);
} else {
return null;
}
}
});})(c__33132__auto__,f__$1))
;
return ((function (switch__33042__auto__,c__33132__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33043__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33043__auto____0 = (function (){
var statearr_33658 = [null,null,null,null,null,null,null];
(statearr_33658[(0)] = cljs$core$async$transduce_$_state_machine__33043__auto__);

(statearr_33658[(1)] = (1));

return statearr_33658;
});
var cljs$core$async$transduce_$_state_machine__33043__auto____1 = (function (state_33656){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_33656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e33659){if((e33659 instanceof Object)){
var ex__33046__auto__ = e33659;
var statearr_33660_33662 = state_33656;
(statearr_33660_33662[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33663 = state_33656;
state_33656 = G__33663;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33043__auto__ = function(state_33656){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33043__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33043__auto____1.call(this,state_33656);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33043__auto____0;
cljs$core$async$transduce_$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33043__auto____1;
return cljs$core$async$transduce_$_state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto__,f__$1))
})();
var state__33134__auto__ = (function (){var statearr_33661 = f__33133__auto__.call(null);
(statearr_33661[(6)] = c__33132__auto__);

return statearr_33661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto__,f__$1))
);

return c__33132__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33665 = arguments.length;
switch (G__33665) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33132__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto__){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto__){
return (function (state_33690){
var state_val_33691 = (state_33690[(1)]);
if((state_val_33691 === (7))){
var inst_33672 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
var statearr_33692_33713 = state_33690__$1;
(statearr_33692_33713[(2)] = inst_33672);

(statearr_33692_33713[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (1))){
var inst_33666 = cljs.core.seq.call(null,coll);
var inst_33667 = inst_33666;
var state_33690__$1 = (function (){var statearr_33693 = state_33690;
(statearr_33693[(7)] = inst_33667);

return statearr_33693;
})();
var statearr_33694_33714 = state_33690__$1;
(statearr_33694_33714[(2)] = null);

(statearr_33694_33714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (4))){
var inst_33667 = (state_33690[(7)]);
var inst_33670 = cljs.core.first.call(null,inst_33667);
var state_33690__$1 = state_33690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33690__$1,(7),ch,inst_33670);
} else {
if((state_val_33691 === (13))){
var inst_33684 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
var statearr_33695_33715 = state_33690__$1;
(statearr_33695_33715[(2)] = inst_33684);

(statearr_33695_33715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (6))){
var inst_33675 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
if(cljs.core.truth_(inst_33675)){
var statearr_33696_33716 = state_33690__$1;
(statearr_33696_33716[(1)] = (8));

} else {
var statearr_33697_33717 = state_33690__$1;
(statearr_33697_33717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (3))){
var inst_33688 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33690__$1,inst_33688);
} else {
if((state_val_33691 === (12))){
var state_33690__$1 = state_33690;
var statearr_33698_33718 = state_33690__$1;
(statearr_33698_33718[(2)] = null);

(statearr_33698_33718[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (2))){
var inst_33667 = (state_33690[(7)]);
var state_33690__$1 = state_33690;
if(cljs.core.truth_(inst_33667)){
var statearr_33699_33719 = state_33690__$1;
(statearr_33699_33719[(1)] = (4));

} else {
var statearr_33700_33720 = state_33690__$1;
(statearr_33700_33720[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (11))){
var inst_33681 = cljs.core.async.close_BANG_.call(null,ch);
var state_33690__$1 = state_33690;
var statearr_33701_33721 = state_33690__$1;
(statearr_33701_33721[(2)] = inst_33681);

(statearr_33701_33721[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (9))){
var state_33690__$1 = state_33690;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33702_33722 = state_33690__$1;
(statearr_33702_33722[(1)] = (11));

} else {
var statearr_33703_33723 = state_33690__$1;
(statearr_33703_33723[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (5))){
var inst_33667 = (state_33690[(7)]);
var state_33690__$1 = state_33690;
var statearr_33704_33724 = state_33690__$1;
(statearr_33704_33724[(2)] = inst_33667);

(statearr_33704_33724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (10))){
var inst_33686 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
var statearr_33705_33725 = state_33690__$1;
(statearr_33705_33725[(2)] = inst_33686);

(statearr_33705_33725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (8))){
var inst_33667 = (state_33690[(7)]);
var inst_33677 = cljs.core.next.call(null,inst_33667);
var inst_33667__$1 = inst_33677;
var state_33690__$1 = (function (){var statearr_33706 = state_33690;
(statearr_33706[(7)] = inst_33667__$1);

return statearr_33706;
})();
var statearr_33707_33726 = state_33690__$1;
(statearr_33707_33726[(2)] = null);

(statearr_33707_33726[(1)] = (2));


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
});})(c__33132__auto__))
;
return ((function (switch__33042__auto__,c__33132__auto__){
return (function() {
var cljs$core$async$state_machine__33043__auto__ = null;
var cljs$core$async$state_machine__33043__auto____0 = (function (){
var statearr_33708 = [null,null,null,null,null,null,null,null];
(statearr_33708[(0)] = cljs$core$async$state_machine__33043__auto__);

(statearr_33708[(1)] = (1));

return statearr_33708;
});
var cljs$core$async$state_machine__33043__auto____1 = (function (state_33690){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_33690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e33709){if((e33709 instanceof Object)){
var ex__33046__auto__ = e33709;
var statearr_33710_33727 = state_33690;
(statearr_33710_33727[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33728 = state_33690;
state_33690 = G__33728;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
cljs$core$async$state_machine__33043__auto__ = function(state_33690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33043__auto____1.call(this,state_33690);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33043__auto____0;
cljs$core$async$state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33043__auto____1;
return cljs$core$async$state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto__))
})();
var state__33134__auto__ = (function (){var statearr_33711 = f__33133__auto__.call(null);
(statearr_33711[(6)] = c__33132__auto__);

return statearr_33711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto__))
);

return c__33132__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__30782__auto__ = (((_ == null))?null:_);
var m__30783__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30782__auto__)]);
if(!((m__30783__auto__ == null))){
return m__30783__auto__.call(null,_);
} else {
var m__30783__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30783__auto____$1 == null))){
return m__30783__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__30782__auto__ = (((m == null))?null:m);
var m__30783__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30782__auto__)]);
if(!((m__30783__auto__ == null))){
return m__30783__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30783__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30783__auto____$1 == null))){
return m__30783__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30782__auto__ = (((m == null))?null:m);
var m__30783__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30782__auto__)]);
if(!((m__30783__auto__ == null))){
return m__30783__auto__.call(null,m,ch);
} else {
var m__30783__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30783__auto____$1 == null))){
return m__30783__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30782__auto__ = (((m == null))?null:m);
var m__30783__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30782__auto__)]);
if(!((m__30783__auto__ == null))){
return m__30783__auto__.call(null,m);
} else {
var m__30783__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30783__auto____$1 == null))){
return m__30783__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33729 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33729 = (function (ch,cs,meta33730){
this.ch = ch;
this.cs = cs;
this.meta33730 = meta33730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33731,meta33730__$1){
var self__ = this;
var _33731__$1 = this;
return (new cljs.core.async.t_cljs$core$async33729(self__.ch,self__.cs,meta33730__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33729.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33731){
var self__ = this;
var _33731__$1 = this;
return self__.meta33730;
});})(cs))
;

cljs.core.async.t_cljs$core$async33729.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33729.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33729.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33729.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33729.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33729.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33729.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33730","meta33730",1361193627,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33729.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33729";

cljs.core.async.t_cljs$core$async33729.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30720__auto__,writer__30721__auto__,opt__30722__auto__){
return cljs.core._write.call(null,writer__30721__auto__,"cljs.core.async/t_cljs$core$async33729");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33729 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33729(ch__$1,cs__$1,meta33730){
return (new cljs.core.async.t_cljs$core$async33729(ch__$1,cs__$1,meta33730));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33729(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33132__auto___33951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto___33951,cs,m,dchan,dctr,done){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto___33951,cs,m,dchan,dctr,done){
return (function (state_33866){
var state_val_33867 = (state_33866[(1)]);
if((state_val_33867 === (7))){
var inst_33862 = (state_33866[(2)]);
var state_33866__$1 = state_33866;
var statearr_33868_33952 = state_33866__$1;
(statearr_33868_33952[(2)] = inst_33862);

(statearr_33868_33952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (20))){
var inst_33765 = (state_33866[(7)]);
var inst_33777 = cljs.core.first.call(null,inst_33765);
var inst_33778 = cljs.core.nth.call(null,inst_33777,(0),null);
var inst_33779 = cljs.core.nth.call(null,inst_33777,(1),null);
var state_33866__$1 = (function (){var statearr_33869 = state_33866;
(statearr_33869[(8)] = inst_33778);

return statearr_33869;
})();
if(cljs.core.truth_(inst_33779)){
var statearr_33870_33953 = state_33866__$1;
(statearr_33870_33953[(1)] = (22));

} else {
var statearr_33871_33954 = state_33866__$1;
(statearr_33871_33954[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (27))){
var inst_33734 = (state_33866[(9)]);
var inst_33807 = (state_33866[(10)]);
var inst_33809 = (state_33866[(11)]);
var inst_33814 = (state_33866[(12)]);
var inst_33814__$1 = cljs.core._nth.call(null,inst_33807,inst_33809);
var inst_33815 = cljs.core.async.put_BANG_.call(null,inst_33814__$1,inst_33734,done);
var state_33866__$1 = (function (){var statearr_33872 = state_33866;
(statearr_33872[(12)] = inst_33814__$1);

return statearr_33872;
})();
if(cljs.core.truth_(inst_33815)){
var statearr_33873_33955 = state_33866__$1;
(statearr_33873_33955[(1)] = (30));

} else {
var statearr_33874_33956 = state_33866__$1;
(statearr_33874_33956[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (1))){
var state_33866__$1 = state_33866;
var statearr_33875_33957 = state_33866__$1;
(statearr_33875_33957[(2)] = null);

(statearr_33875_33957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (24))){
var inst_33765 = (state_33866[(7)]);
var inst_33784 = (state_33866[(2)]);
var inst_33785 = cljs.core.next.call(null,inst_33765);
var inst_33743 = inst_33785;
var inst_33744 = null;
var inst_33745 = (0);
var inst_33746 = (0);
var state_33866__$1 = (function (){var statearr_33876 = state_33866;
(statearr_33876[(13)] = inst_33745);

(statearr_33876[(14)] = inst_33784);

(statearr_33876[(15)] = inst_33743);

(statearr_33876[(16)] = inst_33746);

(statearr_33876[(17)] = inst_33744);

return statearr_33876;
})();
var statearr_33877_33958 = state_33866__$1;
(statearr_33877_33958[(2)] = null);

(statearr_33877_33958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (39))){
var state_33866__$1 = state_33866;
var statearr_33881_33959 = state_33866__$1;
(statearr_33881_33959[(2)] = null);

(statearr_33881_33959[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (4))){
var inst_33734 = (state_33866[(9)]);
var inst_33734__$1 = (state_33866[(2)]);
var inst_33735 = (inst_33734__$1 == null);
var state_33866__$1 = (function (){var statearr_33882 = state_33866;
(statearr_33882[(9)] = inst_33734__$1);

return statearr_33882;
})();
if(cljs.core.truth_(inst_33735)){
var statearr_33883_33960 = state_33866__$1;
(statearr_33883_33960[(1)] = (5));

} else {
var statearr_33884_33961 = state_33866__$1;
(statearr_33884_33961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (15))){
var inst_33745 = (state_33866[(13)]);
var inst_33743 = (state_33866[(15)]);
var inst_33746 = (state_33866[(16)]);
var inst_33744 = (state_33866[(17)]);
var inst_33761 = (state_33866[(2)]);
var inst_33762 = (inst_33746 + (1));
var tmp33878 = inst_33745;
var tmp33879 = inst_33743;
var tmp33880 = inst_33744;
var inst_33743__$1 = tmp33879;
var inst_33744__$1 = tmp33880;
var inst_33745__$1 = tmp33878;
var inst_33746__$1 = inst_33762;
var state_33866__$1 = (function (){var statearr_33885 = state_33866;
(statearr_33885[(13)] = inst_33745__$1);

(statearr_33885[(15)] = inst_33743__$1);

(statearr_33885[(16)] = inst_33746__$1);

(statearr_33885[(18)] = inst_33761);

(statearr_33885[(17)] = inst_33744__$1);

return statearr_33885;
})();
var statearr_33886_33962 = state_33866__$1;
(statearr_33886_33962[(2)] = null);

(statearr_33886_33962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (21))){
var inst_33788 = (state_33866[(2)]);
var state_33866__$1 = state_33866;
var statearr_33890_33963 = state_33866__$1;
(statearr_33890_33963[(2)] = inst_33788);

(statearr_33890_33963[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (31))){
var inst_33814 = (state_33866[(12)]);
var inst_33818 = done.call(null,null);
var inst_33819 = cljs.core.async.untap_STAR_.call(null,m,inst_33814);
var state_33866__$1 = (function (){var statearr_33891 = state_33866;
(statearr_33891[(19)] = inst_33818);

return statearr_33891;
})();
var statearr_33892_33964 = state_33866__$1;
(statearr_33892_33964[(2)] = inst_33819);

(statearr_33892_33964[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (32))){
var inst_33806 = (state_33866[(20)]);
var inst_33807 = (state_33866[(10)]);
var inst_33809 = (state_33866[(11)]);
var inst_33808 = (state_33866[(21)]);
var inst_33821 = (state_33866[(2)]);
var inst_33822 = (inst_33809 + (1));
var tmp33887 = inst_33806;
var tmp33888 = inst_33807;
var tmp33889 = inst_33808;
var inst_33806__$1 = tmp33887;
var inst_33807__$1 = tmp33888;
var inst_33808__$1 = tmp33889;
var inst_33809__$1 = inst_33822;
var state_33866__$1 = (function (){var statearr_33893 = state_33866;
(statearr_33893[(20)] = inst_33806__$1);

(statearr_33893[(22)] = inst_33821);

(statearr_33893[(10)] = inst_33807__$1);

(statearr_33893[(11)] = inst_33809__$1);

(statearr_33893[(21)] = inst_33808__$1);

return statearr_33893;
})();
var statearr_33894_33965 = state_33866__$1;
(statearr_33894_33965[(2)] = null);

(statearr_33894_33965[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (40))){
var inst_33834 = (state_33866[(23)]);
var inst_33838 = done.call(null,null);
var inst_33839 = cljs.core.async.untap_STAR_.call(null,m,inst_33834);
var state_33866__$1 = (function (){var statearr_33895 = state_33866;
(statearr_33895[(24)] = inst_33838);

return statearr_33895;
})();
var statearr_33896_33966 = state_33866__$1;
(statearr_33896_33966[(2)] = inst_33839);

(statearr_33896_33966[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (33))){
var inst_33825 = (state_33866[(25)]);
var inst_33827 = cljs.core.chunked_seq_QMARK_.call(null,inst_33825);
var state_33866__$1 = state_33866;
if(inst_33827){
var statearr_33897_33967 = state_33866__$1;
(statearr_33897_33967[(1)] = (36));

} else {
var statearr_33898_33968 = state_33866__$1;
(statearr_33898_33968[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (13))){
var inst_33755 = (state_33866[(26)]);
var inst_33758 = cljs.core.async.close_BANG_.call(null,inst_33755);
var state_33866__$1 = state_33866;
var statearr_33899_33969 = state_33866__$1;
(statearr_33899_33969[(2)] = inst_33758);

(statearr_33899_33969[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (22))){
var inst_33778 = (state_33866[(8)]);
var inst_33781 = cljs.core.async.close_BANG_.call(null,inst_33778);
var state_33866__$1 = state_33866;
var statearr_33900_33970 = state_33866__$1;
(statearr_33900_33970[(2)] = inst_33781);

(statearr_33900_33970[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (36))){
var inst_33825 = (state_33866[(25)]);
var inst_33829 = cljs.core.chunk_first.call(null,inst_33825);
var inst_33830 = cljs.core.chunk_rest.call(null,inst_33825);
var inst_33831 = cljs.core.count.call(null,inst_33829);
var inst_33806 = inst_33830;
var inst_33807 = inst_33829;
var inst_33808 = inst_33831;
var inst_33809 = (0);
var state_33866__$1 = (function (){var statearr_33901 = state_33866;
(statearr_33901[(20)] = inst_33806);

(statearr_33901[(10)] = inst_33807);

(statearr_33901[(11)] = inst_33809);

(statearr_33901[(21)] = inst_33808);

return statearr_33901;
})();
var statearr_33902_33971 = state_33866__$1;
(statearr_33902_33971[(2)] = null);

(statearr_33902_33971[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (41))){
var inst_33825 = (state_33866[(25)]);
var inst_33841 = (state_33866[(2)]);
var inst_33842 = cljs.core.next.call(null,inst_33825);
var inst_33806 = inst_33842;
var inst_33807 = null;
var inst_33808 = (0);
var inst_33809 = (0);
var state_33866__$1 = (function (){var statearr_33903 = state_33866;
(statearr_33903[(20)] = inst_33806);

(statearr_33903[(27)] = inst_33841);

(statearr_33903[(10)] = inst_33807);

(statearr_33903[(11)] = inst_33809);

(statearr_33903[(21)] = inst_33808);

return statearr_33903;
})();
var statearr_33904_33972 = state_33866__$1;
(statearr_33904_33972[(2)] = null);

(statearr_33904_33972[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (43))){
var state_33866__$1 = state_33866;
var statearr_33905_33973 = state_33866__$1;
(statearr_33905_33973[(2)] = null);

(statearr_33905_33973[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (29))){
var inst_33850 = (state_33866[(2)]);
var state_33866__$1 = state_33866;
var statearr_33906_33974 = state_33866__$1;
(statearr_33906_33974[(2)] = inst_33850);

(statearr_33906_33974[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (44))){
var inst_33859 = (state_33866[(2)]);
var state_33866__$1 = (function (){var statearr_33907 = state_33866;
(statearr_33907[(28)] = inst_33859);

return statearr_33907;
})();
var statearr_33908_33975 = state_33866__$1;
(statearr_33908_33975[(2)] = null);

(statearr_33908_33975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (6))){
var inst_33798 = (state_33866[(29)]);
var inst_33797 = cljs.core.deref.call(null,cs);
var inst_33798__$1 = cljs.core.keys.call(null,inst_33797);
var inst_33799 = cljs.core.count.call(null,inst_33798__$1);
var inst_33800 = cljs.core.reset_BANG_.call(null,dctr,inst_33799);
var inst_33805 = cljs.core.seq.call(null,inst_33798__$1);
var inst_33806 = inst_33805;
var inst_33807 = null;
var inst_33808 = (0);
var inst_33809 = (0);
var state_33866__$1 = (function (){var statearr_33909 = state_33866;
(statearr_33909[(20)] = inst_33806);

(statearr_33909[(10)] = inst_33807);

(statearr_33909[(11)] = inst_33809);

(statearr_33909[(29)] = inst_33798__$1);

(statearr_33909[(21)] = inst_33808);

(statearr_33909[(30)] = inst_33800);

return statearr_33909;
})();
var statearr_33910_33976 = state_33866__$1;
(statearr_33910_33976[(2)] = null);

(statearr_33910_33976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (28))){
var inst_33806 = (state_33866[(20)]);
var inst_33825 = (state_33866[(25)]);
var inst_33825__$1 = cljs.core.seq.call(null,inst_33806);
var state_33866__$1 = (function (){var statearr_33911 = state_33866;
(statearr_33911[(25)] = inst_33825__$1);

return statearr_33911;
})();
if(inst_33825__$1){
var statearr_33912_33977 = state_33866__$1;
(statearr_33912_33977[(1)] = (33));

} else {
var statearr_33913_33978 = state_33866__$1;
(statearr_33913_33978[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (25))){
var inst_33809 = (state_33866[(11)]);
var inst_33808 = (state_33866[(21)]);
var inst_33811 = (inst_33809 < inst_33808);
var inst_33812 = inst_33811;
var state_33866__$1 = state_33866;
if(cljs.core.truth_(inst_33812)){
var statearr_33914_33979 = state_33866__$1;
(statearr_33914_33979[(1)] = (27));

} else {
var statearr_33915_33980 = state_33866__$1;
(statearr_33915_33980[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (34))){
var state_33866__$1 = state_33866;
var statearr_33916_33981 = state_33866__$1;
(statearr_33916_33981[(2)] = null);

(statearr_33916_33981[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (17))){
var state_33866__$1 = state_33866;
var statearr_33917_33982 = state_33866__$1;
(statearr_33917_33982[(2)] = null);

(statearr_33917_33982[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (3))){
var inst_33864 = (state_33866[(2)]);
var state_33866__$1 = state_33866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33866__$1,inst_33864);
} else {
if((state_val_33867 === (12))){
var inst_33793 = (state_33866[(2)]);
var state_33866__$1 = state_33866;
var statearr_33918_33983 = state_33866__$1;
(statearr_33918_33983[(2)] = inst_33793);

(statearr_33918_33983[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (2))){
var state_33866__$1 = state_33866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33866__$1,(4),ch);
} else {
if((state_val_33867 === (23))){
var state_33866__$1 = state_33866;
var statearr_33919_33984 = state_33866__$1;
(statearr_33919_33984[(2)] = null);

(statearr_33919_33984[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (35))){
var inst_33848 = (state_33866[(2)]);
var state_33866__$1 = state_33866;
var statearr_33920_33985 = state_33866__$1;
(statearr_33920_33985[(2)] = inst_33848);

(statearr_33920_33985[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (19))){
var inst_33765 = (state_33866[(7)]);
var inst_33769 = cljs.core.chunk_first.call(null,inst_33765);
var inst_33770 = cljs.core.chunk_rest.call(null,inst_33765);
var inst_33771 = cljs.core.count.call(null,inst_33769);
var inst_33743 = inst_33770;
var inst_33744 = inst_33769;
var inst_33745 = inst_33771;
var inst_33746 = (0);
var state_33866__$1 = (function (){var statearr_33921 = state_33866;
(statearr_33921[(13)] = inst_33745);

(statearr_33921[(15)] = inst_33743);

(statearr_33921[(16)] = inst_33746);

(statearr_33921[(17)] = inst_33744);

return statearr_33921;
})();
var statearr_33922_33986 = state_33866__$1;
(statearr_33922_33986[(2)] = null);

(statearr_33922_33986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (11))){
var inst_33743 = (state_33866[(15)]);
var inst_33765 = (state_33866[(7)]);
var inst_33765__$1 = cljs.core.seq.call(null,inst_33743);
var state_33866__$1 = (function (){var statearr_33923 = state_33866;
(statearr_33923[(7)] = inst_33765__$1);

return statearr_33923;
})();
if(inst_33765__$1){
var statearr_33924_33987 = state_33866__$1;
(statearr_33924_33987[(1)] = (16));

} else {
var statearr_33925_33988 = state_33866__$1;
(statearr_33925_33988[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (9))){
var inst_33795 = (state_33866[(2)]);
var state_33866__$1 = state_33866;
var statearr_33926_33989 = state_33866__$1;
(statearr_33926_33989[(2)] = inst_33795);

(statearr_33926_33989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (5))){
var inst_33741 = cljs.core.deref.call(null,cs);
var inst_33742 = cljs.core.seq.call(null,inst_33741);
var inst_33743 = inst_33742;
var inst_33744 = null;
var inst_33745 = (0);
var inst_33746 = (0);
var state_33866__$1 = (function (){var statearr_33927 = state_33866;
(statearr_33927[(13)] = inst_33745);

(statearr_33927[(15)] = inst_33743);

(statearr_33927[(16)] = inst_33746);

(statearr_33927[(17)] = inst_33744);

return statearr_33927;
})();
var statearr_33928_33990 = state_33866__$1;
(statearr_33928_33990[(2)] = null);

(statearr_33928_33990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (14))){
var state_33866__$1 = state_33866;
var statearr_33929_33991 = state_33866__$1;
(statearr_33929_33991[(2)] = null);

(statearr_33929_33991[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (45))){
var inst_33856 = (state_33866[(2)]);
var state_33866__$1 = state_33866;
var statearr_33930_33992 = state_33866__$1;
(statearr_33930_33992[(2)] = inst_33856);

(statearr_33930_33992[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (26))){
var inst_33798 = (state_33866[(29)]);
var inst_33852 = (state_33866[(2)]);
var inst_33853 = cljs.core.seq.call(null,inst_33798);
var state_33866__$1 = (function (){var statearr_33931 = state_33866;
(statearr_33931[(31)] = inst_33852);

return statearr_33931;
})();
if(inst_33853){
var statearr_33932_33993 = state_33866__$1;
(statearr_33932_33993[(1)] = (42));

} else {
var statearr_33933_33994 = state_33866__$1;
(statearr_33933_33994[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (16))){
var inst_33765 = (state_33866[(7)]);
var inst_33767 = cljs.core.chunked_seq_QMARK_.call(null,inst_33765);
var state_33866__$1 = state_33866;
if(inst_33767){
var statearr_33934_33995 = state_33866__$1;
(statearr_33934_33995[(1)] = (19));

} else {
var statearr_33935_33996 = state_33866__$1;
(statearr_33935_33996[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (38))){
var inst_33845 = (state_33866[(2)]);
var state_33866__$1 = state_33866;
var statearr_33936_33997 = state_33866__$1;
(statearr_33936_33997[(2)] = inst_33845);

(statearr_33936_33997[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (30))){
var state_33866__$1 = state_33866;
var statearr_33937_33998 = state_33866__$1;
(statearr_33937_33998[(2)] = null);

(statearr_33937_33998[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (10))){
var inst_33746 = (state_33866[(16)]);
var inst_33744 = (state_33866[(17)]);
var inst_33754 = cljs.core._nth.call(null,inst_33744,inst_33746);
var inst_33755 = cljs.core.nth.call(null,inst_33754,(0),null);
var inst_33756 = cljs.core.nth.call(null,inst_33754,(1),null);
var state_33866__$1 = (function (){var statearr_33938 = state_33866;
(statearr_33938[(26)] = inst_33755);

return statearr_33938;
})();
if(cljs.core.truth_(inst_33756)){
var statearr_33939_33999 = state_33866__$1;
(statearr_33939_33999[(1)] = (13));

} else {
var statearr_33940_34000 = state_33866__$1;
(statearr_33940_34000[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (18))){
var inst_33791 = (state_33866[(2)]);
var state_33866__$1 = state_33866;
var statearr_33941_34001 = state_33866__$1;
(statearr_33941_34001[(2)] = inst_33791);

(statearr_33941_34001[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (42))){
var state_33866__$1 = state_33866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33866__$1,(45),dchan);
} else {
if((state_val_33867 === (37))){
var inst_33734 = (state_33866[(9)]);
var inst_33834 = (state_33866[(23)]);
var inst_33825 = (state_33866[(25)]);
var inst_33834__$1 = cljs.core.first.call(null,inst_33825);
var inst_33835 = cljs.core.async.put_BANG_.call(null,inst_33834__$1,inst_33734,done);
var state_33866__$1 = (function (){var statearr_33942 = state_33866;
(statearr_33942[(23)] = inst_33834__$1);

return statearr_33942;
})();
if(cljs.core.truth_(inst_33835)){
var statearr_33943_34002 = state_33866__$1;
(statearr_33943_34002[(1)] = (39));

} else {
var statearr_33944_34003 = state_33866__$1;
(statearr_33944_34003[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (8))){
var inst_33745 = (state_33866[(13)]);
var inst_33746 = (state_33866[(16)]);
var inst_33748 = (inst_33746 < inst_33745);
var inst_33749 = inst_33748;
var state_33866__$1 = state_33866;
if(cljs.core.truth_(inst_33749)){
var statearr_33945_34004 = state_33866__$1;
(statearr_33945_34004[(1)] = (10));

} else {
var statearr_33946_34005 = state_33866__$1;
(statearr_33946_34005[(1)] = (11));

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
});})(c__33132__auto___33951,cs,m,dchan,dctr,done))
;
return ((function (switch__33042__auto__,c__33132__auto___33951,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33043__auto__ = null;
var cljs$core$async$mult_$_state_machine__33043__auto____0 = (function (){
var statearr_33947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33947[(0)] = cljs$core$async$mult_$_state_machine__33043__auto__);

(statearr_33947[(1)] = (1));

return statearr_33947;
});
var cljs$core$async$mult_$_state_machine__33043__auto____1 = (function (state_33866){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_33866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e33948){if((e33948 instanceof Object)){
var ex__33046__auto__ = e33948;
var statearr_33949_34006 = state_33866;
(statearr_33949_34006[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34007 = state_33866;
state_33866 = G__34007;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33043__auto__ = function(state_33866){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33043__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33043__auto____1.call(this,state_33866);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33043__auto____0;
cljs$core$async$mult_$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33043__auto____1;
return cljs$core$async$mult_$_state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto___33951,cs,m,dchan,dctr,done))
})();
var state__33134__auto__ = (function (){var statearr_33950 = f__33133__auto__.call(null);
(statearr_33950[(6)] = c__33132__auto___33951);

return statearr_33950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto___33951,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34009 = arguments.length;
switch (G__34009) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30782__auto__ = (((m == null))?null:m);
var m__30783__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30782__auto__)]);
if(!((m__30783__auto__ == null))){
return m__30783__auto__.call(null,m,ch);
} else {
var m__30783__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30783__auto____$1 == null))){
return m__30783__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30782__auto__ = (((m == null))?null:m);
var m__30783__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30782__auto__)]);
if(!((m__30783__auto__ == null))){
return m__30783__auto__.call(null,m,ch);
} else {
var m__30783__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30783__auto____$1 == null))){
return m__30783__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30782__auto__ = (((m == null))?null:m);
var m__30783__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30782__auto__)]);
if(!((m__30783__auto__ == null))){
return m__30783__auto__.call(null,m);
} else {
var m__30783__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30783__auto____$1 == null))){
return m__30783__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30782__auto__ = (((m == null))?null:m);
var m__30783__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30782__auto__)]);
if(!((m__30783__auto__ == null))){
return m__30783__auto__.call(null,m,state_map);
} else {
var m__30783__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30783__auto____$1 == null))){
return m__30783__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30782__auto__ = (((m == null))?null:m);
var m__30783__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30782__auto__)]);
if(!((m__30783__auto__ == null))){
return m__30783__auto__.call(null,m,mode);
} else {
var m__30783__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30783__auto____$1 == null))){
return m__30783__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31333__auto__ = [];
var len__31326__auto___34021 = arguments.length;
var i__31327__auto___34022 = (0);
while(true){
if((i__31327__auto___34022 < len__31326__auto___34021)){
args__31333__auto__.push((arguments[i__31327__auto___34022]));

var G__34023 = (i__31327__auto___34022 + (1));
i__31327__auto___34022 = G__34023;
continue;
} else {
}
break;
}

var argseq__31334__auto__ = ((((3) < args__31333__auto__.length))?(new cljs.core.IndexedSeq(args__31333__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31334__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34015){
var map__34016 = p__34015;
var map__34016__$1 = ((((!((map__34016 == null)))?((((map__34016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34016.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34016):map__34016);
var opts = map__34016__$1;
var statearr_34018_34024 = state;
(statearr_34018_34024[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__34016,map__34016__$1,opts){
return (function (val){
var statearr_34019_34025 = state;
(statearr_34019_34025[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34016,map__34016__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_34020_34026 = state;
(statearr_34020_34026[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34011){
var G__34012 = cljs.core.first.call(null,seq34011);
var seq34011__$1 = cljs.core.next.call(null,seq34011);
var G__34013 = cljs.core.first.call(null,seq34011__$1);
var seq34011__$2 = cljs.core.next.call(null,seq34011__$1);
var G__34014 = cljs.core.first.call(null,seq34011__$2);
var seq34011__$3 = cljs.core.next.call(null,seq34011__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34012,G__34013,G__34014,seq34011__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34027 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34027 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34028){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34028 = meta34028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34029,meta34028__$1){
var self__ = this;
var _34029__$1 = this;
return (new cljs.core.async.t_cljs$core$async34027(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34028__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34027.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34029){
var self__ = this;
var _34029__$1 = this;
return self__.meta34028;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34027.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34027.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34027.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34027.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34027.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34027.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34027.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34027.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34027.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34028","meta34028",-1349430395,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34027.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34027";

cljs.core.async.t_cljs$core$async34027.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30720__auto__,writer__30721__auto__,opt__30722__auto__){
return cljs.core._write.call(null,writer__30721__auto__,"cljs.core.async/t_cljs$core$async34027");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34027 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34027(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34028){
return (new cljs.core.async.t_cljs$core$async34027(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34028));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34027(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33132__auto___34191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto___34191,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto___34191,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34131){
var state_val_34132 = (state_34131[(1)]);
if((state_val_34132 === (7))){
var inst_34046 = (state_34131[(2)]);
var state_34131__$1 = state_34131;
var statearr_34133_34192 = state_34131__$1;
(statearr_34133_34192[(2)] = inst_34046);

(statearr_34133_34192[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (20))){
var inst_34058 = (state_34131[(7)]);
var state_34131__$1 = state_34131;
var statearr_34134_34193 = state_34131__$1;
(statearr_34134_34193[(2)] = inst_34058);

(statearr_34134_34193[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (27))){
var state_34131__$1 = state_34131;
var statearr_34135_34194 = state_34131__$1;
(statearr_34135_34194[(2)] = null);

(statearr_34135_34194[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (1))){
var inst_34033 = (state_34131[(8)]);
var inst_34033__$1 = calc_state.call(null);
var inst_34035 = (inst_34033__$1 == null);
var inst_34036 = cljs.core.not.call(null,inst_34035);
var state_34131__$1 = (function (){var statearr_34136 = state_34131;
(statearr_34136[(8)] = inst_34033__$1);

return statearr_34136;
})();
if(inst_34036){
var statearr_34137_34195 = state_34131__$1;
(statearr_34137_34195[(1)] = (2));

} else {
var statearr_34138_34196 = state_34131__$1;
(statearr_34138_34196[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (24))){
var inst_34091 = (state_34131[(9)]);
var inst_34082 = (state_34131[(10)]);
var inst_34105 = (state_34131[(11)]);
var inst_34105__$1 = inst_34082.call(null,inst_34091);
var state_34131__$1 = (function (){var statearr_34139 = state_34131;
(statearr_34139[(11)] = inst_34105__$1);

return statearr_34139;
})();
if(cljs.core.truth_(inst_34105__$1)){
var statearr_34140_34197 = state_34131__$1;
(statearr_34140_34197[(1)] = (29));

} else {
var statearr_34141_34198 = state_34131__$1;
(statearr_34141_34198[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (4))){
var inst_34049 = (state_34131[(2)]);
var state_34131__$1 = state_34131;
if(cljs.core.truth_(inst_34049)){
var statearr_34142_34199 = state_34131__$1;
(statearr_34142_34199[(1)] = (8));

} else {
var statearr_34143_34200 = state_34131__$1;
(statearr_34143_34200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (15))){
var inst_34076 = (state_34131[(2)]);
var state_34131__$1 = state_34131;
if(cljs.core.truth_(inst_34076)){
var statearr_34144_34201 = state_34131__$1;
(statearr_34144_34201[(1)] = (19));

} else {
var statearr_34145_34202 = state_34131__$1;
(statearr_34145_34202[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (21))){
var inst_34081 = (state_34131[(12)]);
var inst_34081__$1 = (state_34131[(2)]);
var inst_34082 = cljs.core.get.call(null,inst_34081__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34083 = cljs.core.get.call(null,inst_34081__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34084 = cljs.core.get.call(null,inst_34081__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34131__$1 = (function (){var statearr_34146 = state_34131;
(statearr_34146[(13)] = inst_34083);

(statearr_34146[(12)] = inst_34081__$1);

(statearr_34146[(10)] = inst_34082);

return statearr_34146;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34131__$1,(22),inst_34084);
} else {
if((state_val_34132 === (31))){
var inst_34113 = (state_34131[(2)]);
var state_34131__$1 = state_34131;
if(cljs.core.truth_(inst_34113)){
var statearr_34147_34203 = state_34131__$1;
(statearr_34147_34203[(1)] = (32));

} else {
var statearr_34148_34204 = state_34131__$1;
(statearr_34148_34204[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (32))){
var inst_34090 = (state_34131[(14)]);
var state_34131__$1 = state_34131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34131__$1,(35),out,inst_34090);
} else {
if((state_val_34132 === (33))){
var inst_34081 = (state_34131[(12)]);
var inst_34058 = inst_34081;
var state_34131__$1 = (function (){var statearr_34149 = state_34131;
(statearr_34149[(7)] = inst_34058);

return statearr_34149;
})();
var statearr_34150_34205 = state_34131__$1;
(statearr_34150_34205[(2)] = null);

(statearr_34150_34205[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (13))){
var inst_34058 = (state_34131[(7)]);
var inst_34065 = inst_34058.cljs$lang$protocol_mask$partition0$;
var inst_34066 = (inst_34065 & (64));
var inst_34067 = inst_34058.cljs$core$ISeq$;
var inst_34068 = (cljs.core.PROTOCOL_SENTINEL === inst_34067);
var inst_34069 = (inst_34066) || (inst_34068);
var state_34131__$1 = state_34131;
if(cljs.core.truth_(inst_34069)){
var statearr_34151_34206 = state_34131__$1;
(statearr_34151_34206[(1)] = (16));

} else {
var statearr_34152_34207 = state_34131__$1;
(statearr_34152_34207[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (22))){
var inst_34091 = (state_34131[(9)]);
var inst_34090 = (state_34131[(14)]);
var inst_34089 = (state_34131[(2)]);
var inst_34090__$1 = cljs.core.nth.call(null,inst_34089,(0),null);
var inst_34091__$1 = cljs.core.nth.call(null,inst_34089,(1),null);
var inst_34092 = (inst_34090__$1 == null);
var inst_34093 = cljs.core._EQ_.call(null,inst_34091__$1,change);
var inst_34094 = (inst_34092) || (inst_34093);
var state_34131__$1 = (function (){var statearr_34153 = state_34131;
(statearr_34153[(9)] = inst_34091__$1);

(statearr_34153[(14)] = inst_34090__$1);

return statearr_34153;
})();
if(cljs.core.truth_(inst_34094)){
var statearr_34154_34208 = state_34131__$1;
(statearr_34154_34208[(1)] = (23));

} else {
var statearr_34155_34209 = state_34131__$1;
(statearr_34155_34209[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (36))){
var inst_34081 = (state_34131[(12)]);
var inst_34058 = inst_34081;
var state_34131__$1 = (function (){var statearr_34156 = state_34131;
(statearr_34156[(7)] = inst_34058);

return statearr_34156;
})();
var statearr_34157_34210 = state_34131__$1;
(statearr_34157_34210[(2)] = null);

(statearr_34157_34210[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (29))){
var inst_34105 = (state_34131[(11)]);
var state_34131__$1 = state_34131;
var statearr_34158_34211 = state_34131__$1;
(statearr_34158_34211[(2)] = inst_34105);

(statearr_34158_34211[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (6))){
var state_34131__$1 = state_34131;
var statearr_34159_34212 = state_34131__$1;
(statearr_34159_34212[(2)] = false);

(statearr_34159_34212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (28))){
var inst_34101 = (state_34131[(2)]);
var inst_34102 = calc_state.call(null);
var inst_34058 = inst_34102;
var state_34131__$1 = (function (){var statearr_34160 = state_34131;
(statearr_34160[(15)] = inst_34101);

(statearr_34160[(7)] = inst_34058);

return statearr_34160;
})();
var statearr_34161_34213 = state_34131__$1;
(statearr_34161_34213[(2)] = null);

(statearr_34161_34213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (25))){
var inst_34127 = (state_34131[(2)]);
var state_34131__$1 = state_34131;
var statearr_34162_34214 = state_34131__$1;
(statearr_34162_34214[(2)] = inst_34127);

(statearr_34162_34214[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (34))){
var inst_34125 = (state_34131[(2)]);
var state_34131__$1 = state_34131;
var statearr_34163_34215 = state_34131__$1;
(statearr_34163_34215[(2)] = inst_34125);

(statearr_34163_34215[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (17))){
var state_34131__$1 = state_34131;
var statearr_34164_34216 = state_34131__$1;
(statearr_34164_34216[(2)] = false);

(statearr_34164_34216[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (3))){
var state_34131__$1 = state_34131;
var statearr_34165_34217 = state_34131__$1;
(statearr_34165_34217[(2)] = false);

(statearr_34165_34217[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (12))){
var inst_34129 = (state_34131[(2)]);
var state_34131__$1 = state_34131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34131__$1,inst_34129);
} else {
if((state_val_34132 === (2))){
var inst_34033 = (state_34131[(8)]);
var inst_34038 = inst_34033.cljs$lang$protocol_mask$partition0$;
var inst_34039 = (inst_34038 & (64));
var inst_34040 = inst_34033.cljs$core$ISeq$;
var inst_34041 = (cljs.core.PROTOCOL_SENTINEL === inst_34040);
var inst_34042 = (inst_34039) || (inst_34041);
var state_34131__$1 = state_34131;
if(cljs.core.truth_(inst_34042)){
var statearr_34166_34218 = state_34131__$1;
(statearr_34166_34218[(1)] = (5));

} else {
var statearr_34167_34219 = state_34131__$1;
(statearr_34167_34219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (23))){
var inst_34090 = (state_34131[(14)]);
var inst_34096 = (inst_34090 == null);
var state_34131__$1 = state_34131;
if(cljs.core.truth_(inst_34096)){
var statearr_34168_34220 = state_34131__$1;
(statearr_34168_34220[(1)] = (26));

} else {
var statearr_34169_34221 = state_34131__$1;
(statearr_34169_34221[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (35))){
var inst_34116 = (state_34131[(2)]);
var state_34131__$1 = state_34131;
if(cljs.core.truth_(inst_34116)){
var statearr_34170_34222 = state_34131__$1;
(statearr_34170_34222[(1)] = (36));

} else {
var statearr_34171_34223 = state_34131__$1;
(statearr_34171_34223[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (19))){
var inst_34058 = (state_34131[(7)]);
var inst_34078 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34058);
var state_34131__$1 = state_34131;
var statearr_34172_34224 = state_34131__$1;
(statearr_34172_34224[(2)] = inst_34078);

(statearr_34172_34224[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (11))){
var inst_34058 = (state_34131[(7)]);
var inst_34062 = (inst_34058 == null);
var inst_34063 = cljs.core.not.call(null,inst_34062);
var state_34131__$1 = state_34131;
if(inst_34063){
var statearr_34173_34225 = state_34131__$1;
(statearr_34173_34225[(1)] = (13));

} else {
var statearr_34174_34226 = state_34131__$1;
(statearr_34174_34226[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (9))){
var inst_34033 = (state_34131[(8)]);
var state_34131__$1 = state_34131;
var statearr_34175_34227 = state_34131__$1;
(statearr_34175_34227[(2)] = inst_34033);

(statearr_34175_34227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (5))){
var state_34131__$1 = state_34131;
var statearr_34176_34228 = state_34131__$1;
(statearr_34176_34228[(2)] = true);

(statearr_34176_34228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (14))){
var state_34131__$1 = state_34131;
var statearr_34177_34229 = state_34131__$1;
(statearr_34177_34229[(2)] = false);

(statearr_34177_34229[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (26))){
var inst_34091 = (state_34131[(9)]);
var inst_34098 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34091);
var state_34131__$1 = state_34131;
var statearr_34178_34230 = state_34131__$1;
(statearr_34178_34230[(2)] = inst_34098);

(statearr_34178_34230[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (16))){
var state_34131__$1 = state_34131;
var statearr_34179_34231 = state_34131__$1;
(statearr_34179_34231[(2)] = true);

(statearr_34179_34231[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (38))){
var inst_34121 = (state_34131[(2)]);
var state_34131__$1 = state_34131;
var statearr_34180_34232 = state_34131__$1;
(statearr_34180_34232[(2)] = inst_34121);

(statearr_34180_34232[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (30))){
var inst_34091 = (state_34131[(9)]);
var inst_34083 = (state_34131[(13)]);
var inst_34082 = (state_34131[(10)]);
var inst_34108 = cljs.core.empty_QMARK_.call(null,inst_34082);
var inst_34109 = inst_34083.call(null,inst_34091);
var inst_34110 = cljs.core.not.call(null,inst_34109);
var inst_34111 = (inst_34108) && (inst_34110);
var state_34131__$1 = state_34131;
var statearr_34181_34233 = state_34131__$1;
(statearr_34181_34233[(2)] = inst_34111);

(statearr_34181_34233[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (10))){
var inst_34033 = (state_34131[(8)]);
var inst_34054 = (state_34131[(2)]);
var inst_34055 = cljs.core.get.call(null,inst_34054,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34056 = cljs.core.get.call(null,inst_34054,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34057 = cljs.core.get.call(null,inst_34054,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34058 = inst_34033;
var state_34131__$1 = (function (){var statearr_34182 = state_34131;
(statearr_34182[(16)] = inst_34055);

(statearr_34182[(17)] = inst_34057);

(statearr_34182[(18)] = inst_34056);

(statearr_34182[(7)] = inst_34058);

return statearr_34182;
})();
var statearr_34183_34234 = state_34131__$1;
(statearr_34183_34234[(2)] = null);

(statearr_34183_34234[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (18))){
var inst_34073 = (state_34131[(2)]);
var state_34131__$1 = state_34131;
var statearr_34184_34235 = state_34131__$1;
(statearr_34184_34235[(2)] = inst_34073);

(statearr_34184_34235[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (37))){
var state_34131__$1 = state_34131;
var statearr_34185_34236 = state_34131__$1;
(statearr_34185_34236[(2)] = null);

(statearr_34185_34236[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34132 === (8))){
var inst_34033 = (state_34131[(8)]);
var inst_34051 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34033);
var state_34131__$1 = state_34131;
var statearr_34186_34237 = state_34131__$1;
(statearr_34186_34237[(2)] = inst_34051);

(statearr_34186_34237[(1)] = (10));


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
});})(c__33132__auto___34191,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33042__auto__,c__33132__auto___34191,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33043__auto__ = null;
var cljs$core$async$mix_$_state_machine__33043__auto____0 = (function (){
var statearr_34187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34187[(0)] = cljs$core$async$mix_$_state_machine__33043__auto__);

(statearr_34187[(1)] = (1));

return statearr_34187;
});
var cljs$core$async$mix_$_state_machine__33043__auto____1 = (function (state_34131){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_34131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e34188){if((e34188 instanceof Object)){
var ex__33046__auto__ = e34188;
var statearr_34189_34238 = state_34131;
(statearr_34189_34238[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34239 = state_34131;
state_34131 = G__34239;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33043__auto__ = function(state_34131){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33043__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33043__auto____1.call(this,state_34131);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33043__auto____0;
cljs$core$async$mix_$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33043__auto____1;
return cljs$core$async$mix_$_state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto___34191,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33134__auto__ = (function (){var statearr_34190 = f__33133__auto__.call(null);
(statearr_34190[(6)] = c__33132__auto___34191);

return statearr_34190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto___34191,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30782__auto__ = (((p == null))?null:p);
var m__30783__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30782__auto__)]);
if(!((m__30783__auto__ == null))){
return m__30783__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30783__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30783__auto____$1 == null))){
return m__30783__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30782__auto__ = (((p == null))?null:p);
var m__30783__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30782__auto__)]);
if(!((m__30783__auto__ == null))){
return m__30783__auto__.call(null,p,v,ch);
} else {
var m__30783__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30783__auto____$1 == null))){
return m__30783__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34241 = arguments.length;
switch (G__34241) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30782__auto__ = (((p == null))?null:p);
var m__30783__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30782__auto__)]);
if(!((m__30783__auto__ == null))){
return m__30783__auto__.call(null,p);
} else {
var m__30783__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30783__auto____$1 == null))){
return m__30783__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30782__auto__ = (((p == null))?null:p);
var m__30783__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30782__auto__)]);
if(!((m__30783__auto__ == null))){
return m__30783__auto__.call(null,p,v);
} else {
var m__30783__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30783__auto____$1 == null))){
return m__30783__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34245 = arguments.length;
switch (G__34245) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30048__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30048__auto__,mults){
return (function (p1__34243_SHARP_){
if(cljs.core.truth_(p1__34243_SHARP_.call(null,topic))){
return p1__34243_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34243_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30048__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34246 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34246 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34247){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34247 = meta34247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34248,meta34247__$1){
var self__ = this;
var _34248__$1 = this;
return (new cljs.core.async.t_cljs$core$async34246(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34247__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34246.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34248){
var self__ = this;
var _34248__$1 = this;
return self__.meta34247;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34246.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34246.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34246.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34246.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34246.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5278__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5278__auto__)){
var m = temp__5278__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34246.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34246.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34246.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34247","meta34247",2104940807,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34246.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34246";

cljs.core.async.t_cljs$core$async34246.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30720__auto__,writer__30721__auto__,opt__30722__auto__){
return cljs.core._write.call(null,writer__30721__auto__,"cljs.core.async/t_cljs$core$async34246");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34246 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34246(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34247){
return (new cljs.core.async.t_cljs$core$async34246(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34247));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34246(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33132__auto___34366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto___34366,mults,ensure_mult,p){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto___34366,mults,ensure_mult,p){
return (function (state_34320){
var state_val_34321 = (state_34320[(1)]);
if((state_val_34321 === (7))){
var inst_34316 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
var statearr_34322_34367 = state_34320__$1;
(statearr_34322_34367[(2)] = inst_34316);

(statearr_34322_34367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (20))){
var state_34320__$1 = state_34320;
var statearr_34323_34368 = state_34320__$1;
(statearr_34323_34368[(2)] = null);

(statearr_34323_34368[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (1))){
var state_34320__$1 = state_34320;
var statearr_34324_34369 = state_34320__$1;
(statearr_34324_34369[(2)] = null);

(statearr_34324_34369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (24))){
var inst_34299 = (state_34320[(7)]);
var inst_34308 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34299);
var state_34320__$1 = state_34320;
var statearr_34325_34370 = state_34320__$1;
(statearr_34325_34370[(2)] = inst_34308);

(statearr_34325_34370[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (4))){
var inst_34251 = (state_34320[(8)]);
var inst_34251__$1 = (state_34320[(2)]);
var inst_34252 = (inst_34251__$1 == null);
var state_34320__$1 = (function (){var statearr_34326 = state_34320;
(statearr_34326[(8)] = inst_34251__$1);

return statearr_34326;
})();
if(cljs.core.truth_(inst_34252)){
var statearr_34327_34371 = state_34320__$1;
(statearr_34327_34371[(1)] = (5));

} else {
var statearr_34328_34372 = state_34320__$1;
(statearr_34328_34372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (15))){
var inst_34293 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
var statearr_34329_34373 = state_34320__$1;
(statearr_34329_34373[(2)] = inst_34293);

(statearr_34329_34373[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (21))){
var inst_34313 = (state_34320[(2)]);
var state_34320__$1 = (function (){var statearr_34330 = state_34320;
(statearr_34330[(9)] = inst_34313);

return statearr_34330;
})();
var statearr_34331_34374 = state_34320__$1;
(statearr_34331_34374[(2)] = null);

(statearr_34331_34374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (13))){
var inst_34275 = (state_34320[(10)]);
var inst_34277 = cljs.core.chunked_seq_QMARK_.call(null,inst_34275);
var state_34320__$1 = state_34320;
if(inst_34277){
var statearr_34332_34375 = state_34320__$1;
(statearr_34332_34375[(1)] = (16));

} else {
var statearr_34333_34376 = state_34320__$1;
(statearr_34333_34376[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (22))){
var inst_34305 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
if(cljs.core.truth_(inst_34305)){
var statearr_34334_34377 = state_34320__$1;
(statearr_34334_34377[(1)] = (23));

} else {
var statearr_34335_34378 = state_34320__$1;
(statearr_34335_34378[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (6))){
var inst_34301 = (state_34320[(11)]);
var inst_34251 = (state_34320[(8)]);
var inst_34299 = (state_34320[(7)]);
var inst_34299__$1 = topic_fn.call(null,inst_34251);
var inst_34300 = cljs.core.deref.call(null,mults);
var inst_34301__$1 = cljs.core.get.call(null,inst_34300,inst_34299__$1);
var state_34320__$1 = (function (){var statearr_34336 = state_34320;
(statearr_34336[(11)] = inst_34301__$1);

(statearr_34336[(7)] = inst_34299__$1);

return statearr_34336;
})();
if(cljs.core.truth_(inst_34301__$1)){
var statearr_34337_34379 = state_34320__$1;
(statearr_34337_34379[(1)] = (19));

} else {
var statearr_34338_34380 = state_34320__$1;
(statearr_34338_34380[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (25))){
var inst_34310 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
var statearr_34339_34381 = state_34320__$1;
(statearr_34339_34381[(2)] = inst_34310);

(statearr_34339_34381[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (17))){
var inst_34275 = (state_34320[(10)]);
var inst_34284 = cljs.core.first.call(null,inst_34275);
var inst_34285 = cljs.core.async.muxch_STAR_.call(null,inst_34284);
var inst_34286 = cljs.core.async.close_BANG_.call(null,inst_34285);
var inst_34287 = cljs.core.next.call(null,inst_34275);
var inst_34261 = inst_34287;
var inst_34262 = null;
var inst_34263 = (0);
var inst_34264 = (0);
var state_34320__$1 = (function (){var statearr_34340 = state_34320;
(statearr_34340[(12)] = inst_34261);

(statearr_34340[(13)] = inst_34286);

(statearr_34340[(14)] = inst_34264);

(statearr_34340[(15)] = inst_34262);

(statearr_34340[(16)] = inst_34263);

return statearr_34340;
})();
var statearr_34341_34382 = state_34320__$1;
(statearr_34341_34382[(2)] = null);

(statearr_34341_34382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (3))){
var inst_34318 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34320__$1,inst_34318);
} else {
if((state_val_34321 === (12))){
var inst_34295 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
var statearr_34342_34383 = state_34320__$1;
(statearr_34342_34383[(2)] = inst_34295);

(statearr_34342_34383[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (2))){
var state_34320__$1 = state_34320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34320__$1,(4),ch);
} else {
if((state_val_34321 === (23))){
var state_34320__$1 = state_34320;
var statearr_34343_34384 = state_34320__$1;
(statearr_34343_34384[(2)] = null);

(statearr_34343_34384[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (19))){
var inst_34301 = (state_34320[(11)]);
var inst_34251 = (state_34320[(8)]);
var inst_34303 = cljs.core.async.muxch_STAR_.call(null,inst_34301);
var state_34320__$1 = state_34320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34320__$1,(22),inst_34303,inst_34251);
} else {
if((state_val_34321 === (11))){
var inst_34275 = (state_34320[(10)]);
var inst_34261 = (state_34320[(12)]);
var inst_34275__$1 = cljs.core.seq.call(null,inst_34261);
var state_34320__$1 = (function (){var statearr_34344 = state_34320;
(statearr_34344[(10)] = inst_34275__$1);

return statearr_34344;
})();
if(inst_34275__$1){
var statearr_34345_34385 = state_34320__$1;
(statearr_34345_34385[(1)] = (13));

} else {
var statearr_34346_34386 = state_34320__$1;
(statearr_34346_34386[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (9))){
var inst_34297 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
var statearr_34347_34387 = state_34320__$1;
(statearr_34347_34387[(2)] = inst_34297);

(statearr_34347_34387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (5))){
var inst_34258 = cljs.core.deref.call(null,mults);
var inst_34259 = cljs.core.vals.call(null,inst_34258);
var inst_34260 = cljs.core.seq.call(null,inst_34259);
var inst_34261 = inst_34260;
var inst_34262 = null;
var inst_34263 = (0);
var inst_34264 = (0);
var state_34320__$1 = (function (){var statearr_34348 = state_34320;
(statearr_34348[(12)] = inst_34261);

(statearr_34348[(14)] = inst_34264);

(statearr_34348[(15)] = inst_34262);

(statearr_34348[(16)] = inst_34263);

return statearr_34348;
})();
var statearr_34349_34388 = state_34320__$1;
(statearr_34349_34388[(2)] = null);

(statearr_34349_34388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (14))){
var state_34320__$1 = state_34320;
var statearr_34353_34389 = state_34320__$1;
(statearr_34353_34389[(2)] = null);

(statearr_34353_34389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (16))){
var inst_34275 = (state_34320[(10)]);
var inst_34279 = cljs.core.chunk_first.call(null,inst_34275);
var inst_34280 = cljs.core.chunk_rest.call(null,inst_34275);
var inst_34281 = cljs.core.count.call(null,inst_34279);
var inst_34261 = inst_34280;
var inst_34262 = inst_34279;
var inst_34263 = inst_34281;
var inst_34264 = (0);
var state_34320__$1 = (function (){var statearr_34354 = state_34320;
(statearr_34354[(12)] = inst_34261);

(statearr_34354[(14)] = inst_34264);

(statearr_34354[(15)] = inst_34262);

(statearr_34354[(16)] = inst_34263);

return statearr_34354;
})();
var statearr_34355_34390 = state_34320__$1;
(statearr_34355_34390[(2)] = null);

(statearr_34355_34390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (10))){
var inst_34261 = (state_34320[(12)]);
var inst_34264 = (state_34320[(14)]);
var inst_34262 = (state_34320[(15)]);
var inst_34263 = (state_34320[(16)]);
var inst_34269 = cljs.core._nth.call(null,inst_34262,inst_34264);
var inst_34270 = cljs.core.async.muxch_STAR_.call(null,inst_34269);
var inst_34271 = cljs.core.async.close_BANG_.call(null,inst_34270);
var inst_34272 = (inst_34264 + (1));
var tmp34350 = inst_34261;
var tmp34351 = inst_34262;
var tmp34352 = inst_34263;
var inst_34261__$1 = tmp34350;
var inst_34262__$1 = tmp34351;
var inst_34263__$1 = tmp34352;
var inst_34264__$1 = inst_34272;
var state_34320__$1 = (function (){var statearr_34356 = state_34320;
(statearr_34356[(17)] = inst_34271);

(statearr_34356[(12)] = inst_34261__$1);

(statearr_34356[(14)] = inst_34264__$1);

(statearr_34356[(15)] = inst_34262__$1);

(statearr_34356[(16)] = inst_34263__$1);

return statearr_34356;
})();
var statearr_34357_34391 = state_34320__$1;
(statearr_34357_34391[(2)] = null);

(statearr_34357_34391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (18))){
var inst_34290 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
var statearr_34358_34392 = state_34320__$1;
(statearr_34358_34392[(2)] = inst_34290);

(statearr_34358_34392[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (8))){
var inst_34264 = (state_34320[(14)]);
var inst_34263 = (state_34320[(16)]);
var inst_34266 = (inst_34264 < inst_34263);
var inst_34267 = inst_34266;
var state_34320__$1 = state_34320;
if(cljs.core.truth_(inst_34267)){
var statearr_34359_34393 = state_34320__$1;
(statearr_34359_34393[(1)] = (10));

} else {
var statearr_34360_34394 = state_34320__$1;
(statearr_34360_34394[(1)] = (11));

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
});})(c__33132__auto___34366,mults,ensure_mult,p))
;
return ((function (switch__33042__auto__,c__33132__auto___34366,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33043__auto__ = null;
var cljs$core$async$state_machine__33043__auto____0 = (function (){
var statearr_34361 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34361[(0)] = cljs$core$async$state_machine__33043__auto__);

(statearr_34361[(1)] = (1));

return statearr_34361;
});
var cljs$core$async$state_machine__33043__auto____1 = (function (state_34320){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_34320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e34362){if((e34362 instanceof Object)){
var ex__33046__auto__ = e34362;
var statearr_34363_34395 = state_34320;
(statearr_34363_34395[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34396 = state_34320;
state_34320 = G__34396;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
cljs$core$async$state_machine__33043__auto__ = function(state_34320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33043__auto____1.call(this,state_34320);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33043__auto____0;
cljs$core$async$state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33043__auto____1;
return cljs$core$async$state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto___34366,mults,ensure_mult,p))
})();
var state__33134__auto__ = (function (){var statearr_34364 = f__33133__auto__.call(null);
(statearr_34364[(6)] = c__33132__auto___34366);

return statearr_34364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto___34366,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34398 = arguments.length;
switch (G__34398) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34401 = arguments.length;
switch (G__34401) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34404 = arguments.length;
switch (G__34404) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__33132__auto___34471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto___34471,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto___34471,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34443){
var state_val_34444 = (state_34443[(1)]);
if((state_val_34444 === (7))){
var state_34443__$1 = state_34443;
var statearr_34445_34472 = state_34443__$1;
(statearr_34445_34472[(2)] = null);

(statearr_34445_34472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (1))){
var state_34443__$1 = state_34443;
var statearr_34446_34473 = state_34443__$1;
(statearr_34446_34473[(2)] = null);

(statearr_34446_34473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (4))){
var inst_34407 = (state_34443[(7)]);
var inst_34409 = (inst_34407 < cnt);
var state_34443__$1 = state_34443;
if(cljs.core.truth_(inst_34409)){
var statearr_34447_34474 = state_34443__$1;
(statearr_34447_34474[(1)] = (6));

} else {
var statearr_34448_34475 = state_34443__$1;
(statearr_34448_34475[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (15))){
var inst_34439 = (state_34443[(2)]);
var state_34443__$1 = state_34443;
var statearr_34449_34476 = state_34443__$1;
(statearr_34449_34476[(2)] = inst_34439);

(statearr_34449_34476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (13))){
var inst_34432 = cljs.core.async.close_BANG_.call(null,out);
var state_34443__$1 = state_34443;
var statearr_34450_34477 = state_34443__$1;
(statearr_34450_34477[(2)] = inst_34432);

(statearr_34450_34477[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (6))){
var state_34443__$1 = state_34443;
var statearr_34451_34478 = state_34443__$1;
(statearr_34451_34478[(2)] = null);

(statearr_34451_34478[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (3))){
var inst_34441 = (state_34443[(2)]);
var state_34443__$1 = state_34443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34443__$1,inst_34441);
} else {
if((state_val_34444 === (12))){
var inst_34429 = (state_34443[(8)]);
var inst_34429__$1 = (state_34443[(2)]);
var inst_34430 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34429__$1);
var state_34443__$1 = (function (){var statearr_34452 = state_34443;
(statearr_34452[(8)] = inst_34429__$1);

return statearr_34452;
})();
if(cljs.core.truth_(inst_34430)){
var statearr_34453_34479 = state_34443__$1;
(statearr_34453_34479[(1)] = (13));

} else {
var statearr_34454_34480 = state_34443__$1;
(statearr_34454_34480[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (2))){
var inst_34406 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34407 = (0);
var state_34443__$1 = (function (){var statearr_34455 = state_34443;
(statearr_34455[(7)] = inst_34407);

(statearr_34455[(9)] = inst_34406);

return statearr_34455;
})();
var statearr_34456_34481 = state_34443__$1;
(statearr_34456_34481[(2)] = null);

(statearr_34456_34481[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (11))){
var inst_34407 = (state_34443[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34443,(10),Object,null,(9));
var inst_34416 = chs__$1.call(null,inst_34407);
var inst_34417 = done.call(null,inst_34407);
var inst_34418 = cljs.core.async.take_BANG_.call(null,inst_34416,inst_34417);
var state_34443__$1 = state_34443;
var statearr_34457_34482 = state_34443__$1;
(statearr_34457_34482[(2)] = inst_34418);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34443__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (9))){
var inst_34407 = (state_34443[(7)]);
var inst_34420 = (state_34443[(2)]);
var inst_34421 = (inst_34407 + (1));
var inst_34407__$1 = inst_34421;
var state_34443__$1 = (function (){var statearr_34458 = state_34443;
(statearr_34458[(7)] = inst_34407__$1);

(statearr_34458[(10)] = inst_34420);

return statearr_34458;
})();
var statearr_34459_34483 = state_34443__$1;
(statearr_34459_34483[(2)] = null);

(statearr_34459_34483[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (5))){
var inst_34427 = (state_34443[(2)]);
var state_34443__$1 = (function (){var statearr_34460 = state_34443;
(statearr_34460[(11)] = inst_34427);

return statearr_34460;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34443__$1,(12),dchan);
} else {
if((state_val_34444 === (14))){
var inst_34429 = (state_34443[(8)]);
var inst_34434 = cljs.core.apply.call(null,f,inst_34429);
var state_34443__$1 = state_34443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34443__$1,(16),out,inst_34434);
} else {
if((state_val_34444 === (16))){
var inst_34436 = (state_34443[(2)]);
var state_34443__$1 = (function (){var statearr_34461 = state_34443;
(statearr_34461[(12)] = inst_34436);

return statearr_34461;
})();
var statearr_34462_34484 = state_34443__$1;
(statearr_34462_34484[(2)] = null);

(statearr_34462_34484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (10))){
var inst_34411 = (state_34443[(2)]);
var inst_34412 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34443__$1 = (function (){var statearr_34463 = state_34443;
(statearr_34463[(13)] = inst_34411);

return statearr_34463;
})();
var statearr_34464_34485 = state_34443__$1;
(statearr_34464_34485[(2)] = inst_34412);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34443__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34444 === (8))){
var inst_34425 = (state_34443[(2)]);
var state_34443__$1 = state_34443;
var statearr_34465_34486 = state_34443__$1;
(statearr_34465_34486[(2)] = inst_34425);

(statearr_34465_34486[(1)] = (5));


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
});})(c__33132__auto___34471,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33042__auto__,c__33132__auto___34471,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33043__auto__ = null;
var cljs$core$async$state_machine__33043__auto____0 = (function (){
var statearr_34466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34466[(0)] = cljs$core$async$state_machine__33043__auto__);

(statearr_34466[(1)] = (1));

return statearr_34466;
});
var cljs$core$async$state_machine__33043__auto____1 = (function (state_34443){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_34443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e34467){if((e34467 instanceof Object)){
var ex__33046__auto__ = e34467;
var statearr_34468_34487 = state_34443;
(statearr_34468_34487[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34488 = state_34443;
state_34443 = G__34488;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
cljs$core$async$state_machine__33043__auto__ = function(state_34443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33043__auto____1.call(this,state_34443);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33043__auto____0;
cljs$core$async$state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33043__auto____1;
return cljs$core$async$state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto___34471,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33134__auto__ = (function (){var statearr_34469 = f__33133__auto__.call(null);
(statearr_34469[(6)] = c__33132__auto___34471);

return statearr_34469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto___34471,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34491 = arguments.length;
switch (G__34491) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33132__auto___34545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto___34545,out){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto___34545,out){
return (function (state_34523){
var state_val_34524 = (state_34523[(1)]);
if((state_val_34524 === (7))){
var inst_34503 = (state_34523[(7)]);
var inst_34502 = (state_34523[(8)]);
var inst_34502__$1 = (state_34523[(2)]);
var inst_34503__$1 = cljs.core.nth.call(null,inst_34502__$1,(0),null);
var inst_34504 = cljs.core.nth.call(null,inst_34502__$1,(1),null);
var inst_34505 = (inst_34503__$1 == null);
var state_34523__$1 = (function (){var statearr_34525 = state_34523;
(statearr_34525[(7)] = inst_34503__$1);

(statearr_34525[(9)] = inst_34504);

(statearr_34525[(8)] = inst_34502__$1);

return statearr_34525;
})();
if(cljs.core.truth_(inst_34505)){
var statearr_34526_34546 = state_34523__$1;
(statearr_34526_34546[(1)] = (8));

} else {
var statearr_34527_34547 = state_34523__$1;
(statearr_34527_34547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (1))){
var inst_34492 = cljs.core.vec.call(null,chs);
var inst_34493 = inst_34492;
var state_34523__$1 = (function (){var statearr_34528 = state_34523;
(statearr_34528[(10)] = inst_34493);

return statearr_34528;
})();
var statearr_34529_34548 = state_34523__$1;
(statearr_34529_34548[(2)] = null);

(statearr_34529_34548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (4))){
var inst_34493 = (state_34523[(10)]);
var state_34523__$1 = state_34523;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34523__$1,(7),inst_34493);
} else {
if((state_val_34524 === (6))){
var inst_34519 = (state_34523[(2)]);
var state_34523__$1 = state_34523;
var statearr_34530_34549 = state_34523__$1;
(statearr_34530_34549[(2)] = inst_34519);

(statearr_34530_34549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (3))){
var inst_34521 = (state_34523[(2)]);
var state_34523__$1 = state_34523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34523__$1,inst_34521);
} else {
if((state_val_34524 === (2))){
var inst_34493 = (state_34523[(10)]);
var inst_34495 = cljs.core.count.call(null,inst_34493);
var inst_34496 = (inst_34495 > (0));
var state_34523__$1 = state_34523;
if(cljs.core.truth_(inst_34496)){
var statearr_34532_34550 = state_34523__$1;
(statearr_34532_34550[(1)] = (4));

} else {
var statearr_34533_34551 = state_34523__$1;
(statearr_34533_34551[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (11))){
var inst_34493 = (state_34523[(10)]);
var inst_34512 = (state_34523[(2)]);
var tmp34531 = inst_34493;
var inst_34493__$1 = tmp34531;
var state_34523__$1 = (function (){var statearr_34534 = state_34523;
(statearr_34534[(10)] = inst_34493__$1);

(statearr_34534[(11)] = inst_34512);

return statearr_34534;
})();
var statearr_34535_34552 = state_34523__$1;
(statearr_34535_34552[(2)] = null);

(statearr_34535_34552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (9))){
var inst_34503 = (state_34523[(7)]);
var state_34523__$1 = state_34523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34523__$1,(11),out,inst_34503);
} else {
if((state_val_34524 === (5))){
var inst_34517 = cljs.core.async.close_BANG_.call(null,out);
var state_34523__$1 = state_34523;
var statearr_34536_34553 = state_34523__$1;
(statearr_34536_34553[(2)] = inst_34517);

(statearr_34536_34553[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (10))){
var inst_34515 = (state_34523[(2)]);
var state_34523__$1 = state_34523;
var statearr_34537_34554 = state_34523__$1;
(statearr_34537_34554[(2)] = inst_34515);

(statearr_34537_34554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (8))){
var inst_34493 = (state_34523[(10)]);
var inst_34503 = (state_34523[(7)]);
var inst_34504 = (state_34523[(9)]);
var inst_34502 = (state_34523[(8)]);
var inst_34507 = (function (){var cs = inst_34493;
var vec__34498 = inst_34502;
var v = inst_34503;
var c = inst_34504;
return ((function (cs,vec__34498,v,c,inst_34493,inst_34503,inst_34504,inst_34502,state_val_34524,c__33132__auto___34545,out){
return (function (p1__34489_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34489_SHARP_);
});
;})(cs,vec__34498,v,c,inst_34493,inst_34503,inst_34504,inst_34502,state_val_34524,c__33132__auto___34545,out))
})();
var inst_34508 = cljs.core.filterv.call(null,inst_34507,inst_34493);
var inst_34493__$1 = inst_34508;
var state_34523__$1 = (function (){var statearr_34538 = state_34523;
(statearr_34538[(10)] = inst_34493__$1);

return statearr_34538;
})();
var statearr_34539_34555 = state_34523__$1;
(statearr_34539_34555[(2)] = null);

(statearr_34539_34555[(1)] = (2));


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
});})(c__33132__auto___34545,out))
;
return ((function (switch__33042__auto__,c__33132__auto___34545,out){
return (function() {
var cljs$core$async$state_machine__33043__auto__ = null;
var cljs$core$async$state_machine__33043__auto____0 = (function (){
var statearr_34540 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34540[(0)] = cljs$core$async$state_machine__33043__auto__);

(statearr_34540[(1)] = (1));

return statearr_34540;
});
var cljs$core$async$state_machine__33043__auto____1 = (function (state_34523){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_34523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e34541){if((e34541 instanceof Object)){
var ex__33046__auto__ = e34541;
var statearr_34542_34556 = state_34523;
(statearr_34542_34556[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34557 = state_34523;
state_34523 = G__34557;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
cljs$core$async$state_machine__33043__auto__ = function(state_34523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33043__auto____1.call(this,state_34523);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33043__auto____0;
cljs$core$async$state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33043__auto____1;
return cljs$core$async$state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto___34545,out))
})();
var state__33134__auto__ = (function (){var statearr_34543 = f__33133__auto__.call(null);
(statearr_34543[(6)] = c__33132__auto___34545);

return statearr_34543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto___34545,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34559 = arguments.length;
switch (G__34559) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33132__auto___34604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto___34604,out){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto___34604,out){
return (function (state_34583){
var state_val_34584 = (state_34583[(1)]);
if((state_val_34584 === (7))){
var inst_34565 = (state_34583[(7)]);
var inst_34565__$1 = (state_34583[(2)]);
var inst_34566 = (inst_34565__$1 == null);
var inst_34567 = cljs.core.not.call(null,inst_34566);
var state_34583__$1 = (function (){var statearr_34585 = state_34583;
(statearr_34585[(7)] = inst_34565__$1);

return statearr_34585;
})();
if(inst_34567){
var statearr_34586_34605 = state_34583__$1;
(statearr_34586_34605[(1)] = (8));

} else {
var statearr_34587_34606 = state_34583__$1;
(statearr_34587_34606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34584 === (1))){
var inst_34560 = (0);
var state_34583__$1 = (function (){var statearr_34588 = state_34583;
(statearr_34588[(8)] = inst_34560);

return statearr_34588;
})();
var statearr_34589_34607 = state_34583__$1;
(statearr_34589_34607[(2)] = null);

(statearr_34589_34607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34584 === (4))){
var state_34583__$1 = state_34583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34583__$1,(7),ch);
} else {
if((state_val_34584 === (6))){
var inst_34578 = (state_34583[(2)]);
var state_34583__$1 = state_34583;
var statearr_34590_34608 = state_34583__$1;
(statearr_34590_34608[(2)] = inst_34578);

(statearr_34590_34608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34584 === (3))){
var inst_34580 = (state_34583[(2)]);
var inst_34581 = cljs.core.async.close_BANG_.call(null,out);
var state_34583__$1 = (function (){var statearr_34591 = state_34583;
(statearr_34591[(9)] = inst_34580);

return statearr_34591;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34583__$1,inst_34581);
} else {
if((state_val_34584 === (2))){
var inst_34560 = (state_34583[(8)]);
var inst_34562 = (inst_34560 < n);
var state_34583__$1 = state_34583;
if(cljs.core.truth_(inst_34562)){
var statearr_34592_34609 = state_34583__$1;
(statearr_34592_34609[(1)] = (4));

} else {
var statearr_34593_34610 = state_34583__$1;
(statearr_34593_34610[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34584 === (11))){
var inst_34560 = (state_34583[(8)]);
var inst_34570 = (state_34583[(2)]);
var inst_34571 = (inst_34560 + (1));
var inst_34560__$1 = inst_34571;
var state_34583__$1 = (function (){var statearr_34594 = state_34583;
(statearr_34594[(8)] = inst_34560__$1);

(statearr_34594[(10)] = inst_34570);

return statearr_34594;
})();
var statearr_34595_34611 = state_34583__$1;
(statearr_34595_34611[(2)] = null);

(statearr_34595_34611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34584 === (9))){
var state_34583__$1 = state_34583;
var statearr_34596_34612 = state_34583__$1;
(statearr_34596_34612[(2)] = null);

(statearr_34596_34612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34584 === (5))){
var state_34583__$1 = state_34583;
var statearr_34597_34613 = state_34583__$1;
(statearr_34597_34613[(2)] = null);

(statearr_34597_34613[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34584 === (10))){
var inst_34575 = (state_34583[(2)]);
var state_34583__$1 = state_34583;
var statearr_34598_34614 = state_34583__$1;
(statearr_34598_34614[(2)] = inst_34575);

(statearr_34598_34614[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34584 === (8))){
var inst_34565 = (state_34583[(7)]);
var state_34583__$1 = state_34583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34583__$1,(11),out,inst_34565);
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
});})(c__33132__auto___34604,out))
;
return ((function (switch__33042__auto__,c__33132__auto___34604,out){
return (function() {
var cljs$core$async$state_machine__33043__auto__ = null;
var cljs$core$async$state_machine__33043__auto____0 = (function (){
var statearr_34599 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34599[(0)] = cljs$core$async$state_machine__33043__auto__);

(statearr_34599[(1)] = (1));

return statearr_34599;
});
var cljs$core$async$state_machine__33043__auto____1 = (function (state_34583){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_34583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e34600){if((e34600 instanceof Object)){
var ex__33046__auto__ = e34600;
var statearr_34601_34615 = state_34583;
(statearr_34601_34615[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34616 = state_34583;
state_34583 = G__34616;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
cljs$core$async$state_machine__33043__auto__ = function(state_34583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33043__auto____1.call(this,state_34583);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33043__auto____0;
cljs$core$async$state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33043__auto____1;
return cljs$core$async$state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto___34604,out))
})();
var state__33134__auto__ = (function (){var statearr_34602 = f__33133__auto__.call(null);
(statearr_34602[(6)] = c__33132__auto___34604);

return statearr_34602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto___34604,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34618 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34618 = (function (f,ch,meta34619){
this.f = f;
this.ch = ch;
this.meta34619 = meta34619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34620,meta34619__$1){
var self__ = this;
var _34620__$1 = this;
return (new cljs.core.async.t_cljs$core$async34618(self__.f,self__.ch,meta34619__$1));
});

cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34620){
var self__ = this;
var _34620__$1 = this;
return self__.meta34619;
});

cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34621 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34621 = (function (f,ch,meta34619,_,fn1,meta34622){
this.f = f;
this.ch = ch;
this.meta34619 = meta34619;
this._ = _;
this.fn1 = fn1;
this.meta34622 = meta34622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34623,meta34622__$1){
var self__ = this;
var _34623__$1 = this;
return (new cljs.core.async.t_cljs$core$async34621(self__.f,self__.ch,self__.meta34619,self__._,self__.fn1,meta34622__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34623){
var self__ = this;
var _34623__$1 = this;
return self__.meta34622;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34617_SHARP_){
return f1.call(null,(((p1__34617_SHARP_ == null))?null:self__.f.call(null,p1__34617_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34621.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34619","meta34619",-1381634563,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34618","cljs.core.async/t_cljs$core$async34618",-1788952032,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34622","meta34622",697153054,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34621.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34621";

cljs.core.async.t_cljs$core$async34621.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30720__auto__,writer__30721__auto__,opt__30722__auto__){
return cljs.core._write.call(null,writer__30721__auto__,"cljs.core.async/t_cljs$core$async34621");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34621 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34621(f__$1,ch__$1,meta34619__$1,___$2,fn1__$1,meta34622){
return (new cljs.core.async.t_cljs$core$async34621(f__$1,ch__$1,meta34619__$1,___$2,fn1__$1,meta34622));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34621(self__.f,self__.ch,self__.meta34619,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30036__auto__ = ret;
if(cljs.core.truth_(and__30036__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34618.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34618.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34619","meta34619",-1381634563,null)], null);
});

cljs.core.async.t_cljs$core$async34618.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34618";

cljs.core.async.t_cljs$core$async34618.cljs$lang$ctorPrWriter = (function (this__30720__auto__,writer__30721__auto__,opt__30722__auto__){
return cljs.core._write.call(null,writer__30721__auto__,"cljs.core.async/t_cljs$core$async34618");
});

cljs.core.async.__GT_t_cljs$core$async34618 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34618(f__$1,ch__$1,meta34619){
return (new cljs.core.async.t_cljs$core$async34618(f__$1,ch__$1,meta34619));
});

}

return (new cljs.core.async.t_cljs$core$async34618(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34624 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34624 = (function (f,ch,meta34625){
this.f = f;
this.ch = ch;
this.meta34625 = meta34625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34626,meta34625__$1){
var self__ = this;
var _34626__$1 = this;
return (new cljs.core.async.t_cljs$core$async34624(self__.f,self__.ch,meta34625__$1));
});

cljs.core.async.t_cljs$core$async34624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34626){
var self__ = this;
var _34626__$1 = this;
return self__.meta34625;
});

cljs.core.async.t_cljs$core$async34624.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34624.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34624.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34624.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34624.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34624.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34624.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34625","meta34625",1420737460,null)], null);
});

cljs.core.async.t_cljs$core$async34624.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34624";

cljs.core.async.t_cljs$core$async34624.cljs$lang$ctorPrWriter = (function (this__30720__auto__,writer__30721__auto__,opt__30722__auto__){
return cljs.core._write.call(null,writer__30721__auto__,"cljs.core.async/t_cljs$core$async34624");
});

cljs.core.async.__GT_t_cljs$core$async34624 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34624(f__$1,ch__$1,meta34625){
return (new cljs.core.async.t_cljs$core$async34624(f__$1,ch__$1,meta34625));
});

}

return (new cljs.core.async.t_cljs$core$async34624(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34627 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34627 = (function (p,ch,meta34628){
this.p = p;
this.ch = ch;
this.meta34628 = meta34628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34629,meta34628__$1){
var self__ = this;
var _34629__$1 = this;
return (new cljs.core.async.t_cljs$core$async34627(self__.p,self__.ch,meta34628__$1));
});

cljs.core.async.t_cljs$core$async34627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34629){
var self__ = this;
var _34629__$1 = this;
return self__.meta34628;
});

cljs.core.async.t_cljs$core$async34627.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34627.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34627.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34627.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34627.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34627.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34627.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34628","meta34628",651998333,null)], null);
});

cljs.core.async.t_cljs$core$async34627.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34627";

cljs.core.async.t_cljs$core$async34627.cljs$lang$ctorPrWriter = (function (this__30720__auto__,writer__30721__auto__,opt__30722__auto__){
return cljs.core._write.call(null,writer__30721__auto__,"cljs.core.async/t_cljs$core$async34627");
});

cljs.core.async.__GT_t_cljs$core$async34627 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34627(p__$1,ch__$1,meta34628){
return (new cljs.core.async.t_cljs$core$async34627(p__$1,ch__$1,meta34628));
});

}

return (new cljs.core.async.t_cljs$core$async34627(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34631 = arguments.length;
switch (G__34631) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33132__auto___34671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto___34671,out){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto___34671,out){
return (function (state_34652){
var state_val_34653 = (state_34652[(1)]);
if((state_val_34653 === (7))){
var inst_34648 = (state_34652[(2)]);
var state_34652__$1 = state_34652;
var statearr_34654_34672 = state_34652__$1;
(statearr_34654_34672[(2)] = inst_34648);

(statearr_34654_34672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (1))){
var state_34652__$1 = state_34652;
var statearr_34655_34673 = state_34652__$1;
(statearr_34655_34673[(2)] = null);

(statearr_34655_34673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (4))){
var inst_34634 = (state_34652[(7)]);
var inst_34634__$1 = (state_34652[(2)]);
var inst_34635 = (inst_34634__$1 == null);
var state_34652__$1 = (function (){var statearr_34656 = state_34652;
(statearr_34656[(7)] = inst_34634__$1);

return statearr_34656;
})();
if(cljs.core.truth_(inst_34635)){
var statearr_34657_34674 = state_34652__$1;
(statearr_34657_34674[(1)] = (5));

} else {
var statearr_34658_34675 = state_34652__$1;
(statearr_34658_34675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (6))){
var inst_34634 = (state_34652[(7)]);
var inst_34639 = p.call(null,inst_34634);
var state_34652__$1 = state_34652;
if(cljs.core.truth_(inst_34639)){
var statearr_34659_34676 = state_34652__$1;
(statearr_34659_34676[(1)] = (8));

} else {
var statearr_34660_34677 = state_34652__$1;
(statearr_34660_34677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (3))){
var inst_34650 = (state_34652[(2)]);
var state_34652__$1 = state_34652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34652__$1,inst_34650);
} else {
if((state_val_34653 === (2))){
var state_34652__$1 = state_34652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34652__$1,(4),ch);
} else {
if((state_val_34653 === (11))){
var inst_34642 = (state_34652[(2)]);
var state_34652__$1 = state_34652;
var statearr_34661_34678 = state_34652__$1;
(statearr_34661_34678[(2)] = inst_34642);

(statearr_34661_34678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (9))){
var state_34652__$1 = state_34652;
var statearr_34662_34679 = state_34652__$1;
(statearr_34662_34679[(2)] = null);

(statearr_34662_34679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (5))){
var inst_34637 = cljs.core.async.close_BANG_.call(null,out);
var state_34652__$1 = state_34652;
var statearr_34663_34680 = state_34652__$1;
(statearr_34663_34680[(2)] = inst_34637);

(statearr_34663_34680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (10))){
var inst_34645 = (state_34652[(2)]);
var state_34652__$1 = (function (){var statearr_34664 = state_34652;
(statearr_34664[(8)] = inst_34645);

return statearr_34664;
})();
var statearr_34665_34681 = state_34652__$1;
(statearr_34665_34681[(2)] = null);

(statearr_34665_34681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34653 === (8))){
var inst_34634 = (state_34652[(7)]);
var state_34652__$1 = state_34652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34652__$1,(11),out,inst_34634);
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
});})(c__33132__auto___34671,out))
;
return ((function (switch__33042__auto__,c__33132__auto___34671,out){
return (function() {
var cljs$core$async$state_machine__33043__auto__ = null;
var cljs$core$async$state_machine__33043__auto____0 = (function (){
var statearr_34666 = [null,null,null,null,null,null,null,null,null];
(statearr_34666[(0)] = cljs$core$async$state_machine__33043__auto__);

(statearr_34666[(1)] = (1));

return statearr_34666;
});
var cljs$core$async$state_machine__33043__auto____1 = (function (state_34652){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_34652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e34667){if((e34667 instanceof Object)){
var ex__33046__auto__ = e34667;
var statearr_34668_34682 = state_34652;
(statearr_34668_34682[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34683 = state_34652;
state_34652 = G__34683;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
cljs$core$async$state_machine__33043__auto__ = function(state_34652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33043__auto____1.call(this,state_34652);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33043__auto____0;
cljs$core$async$state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33043__auto____1;
return cljs$core$async$state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto___34671,out))
})();
var state__33134__auto__ = (function (){var statearr_34669 = f__33133__auto__.call(null);
(statearr_34669[(6)] = c__33132__auto___34671);

return statearr_34669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto___34671,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34685 = arguments.length;
switch (G__34685) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33132__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto__){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto__){
return (function (state_34748){
var state_val_34749 = (state_34748[(1)]);
if((state_val_34749 === (7))){
var inst_34744 = (state_34748[(2)]);
var state_34748__$1 = state_34748;
var statearr_34750_34788 = state_34748__$1;
(statearr_34750_34788[(2)] = inst_34744);

(statearr_34750_34788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34749 === (20))){
var inst_34714 = (state_34748[(7)]);
var inst_34725 = (state_34748[(2)]);
var inst_34726 = cljs.core.next.call(null,inst_34714);
var inst_34700 = inst_34726;
var inst_34701 = null;
var inst_34702 = (0);
var inst_34703 = (0);
var state_34748__$1 = (function (){var statearr_34751 = state_34748;
(statearr_34751[(8)] = inst_34725);

(statearr_34751[(9)] = inst_34703);

(statearr_34751[(10)] = inst_34700);

(statearr_34751[(11)] = inst_34702);

(statearr_34751[(12)] = inst_34701);

return statearr_34751;
})();
var statearr_34752_34789 = state_34748__$1;
(statearr_34752_34789[(2)] = null);

(statearr_34752_34789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34749 === (1))){
var state_34748__$1 = state_34748;
var statearr_34753_34790 = state_34748__$1;
(statearr_34753_34790[(2)] = null);

(statearr_34753_34790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34749 === (4))){
var inst_34689 = (state_34748[(13)]);
var inst_34689__$1 = (state_34748[(2)]);
var inst_34690 = (inst_34689__$1 == null);
var state_34748__$1 = (function (){var statearr_34754 = state_34748;
(statearr_34754[(13)] = inst_34689__$1);

return statearr_34754;
})();
if(cljs.core.truth_(inst_34690)){
var statearr_34755_34791 = state_34748__$1;
(statearr_34755_34791[(1)] = (5));

} else {
var statearr_34756_34792 = state_34748__$1;
(statearr_34756_34792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34749 === (15))){
var state_34748__$1 = state_34748;
var statearr_34760_34793 = state_34748__$1;
(statearr_34760_34793[(2)] = null);

(statearr_34760_34793[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34749 === (21))){
var state_34748__$1 = state_34748;
var statearr_34761_34794 = state_34748__$1;
(statearr_34761_34794[(2)] = null);

(statearr_34761_34794[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34749 === (13))){
var inst_34703 = (state_34748[(9)]);
var inst_34700 = (state_34748[(10)]);
var inst_34702 = (state_34748[(11)]);
var inst_34701 = (state_34748[(12)]);
var inst_34710 = (state_34748[(2)]);
var inst_34711 = (inst_34703 + (1));
var tmp34757 = inst_34700;
var tmp34758 = inst_34702;
var tmp34759 = inst_34701;
var inst_34700__$1 = tmp34757;
var inst_34701__$1 = tmp34759;
var inst_34702__$1 = tmp34758;
var inst_34703__$1 = inst_34711;
var state_34748__$1 = (function (){var statearr_34762 = state_34748;
(statearr_34762[(9)] = inst_34703__$1);

(statearr_34762[(10)] = inst_34700__$1);

(statearr_34762[(14)] = inst_34710);

(statearr_34762[(11)] = inst_34702__$1);

(statearr_34762[(12)] = inst_34701__$1);

return statearr_34762;
})();
var statearr_34763_34795 = state_34748__$1;
(statearr_34763_34795[(2)] = null);

(statearr_34763_34795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34749 === (22))){
var state_34748__$1 = state_34748;
var statearr_34764_34796 = state_34748__$1;
(statearr_34764_34796[(2)] = null);

(statearr_34764_34796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34749 === (6))){
var inst_34689 = (state_34748[(13)]);
var inst_34698 = f.call(null,inst_34689);
var inst_34699 = cljs.core.seq.call(null,inst_34698);
var inst_34700 = inst_34699;
var inst_34701 = null;
var inst_34702 = (0);
var inst_34703 = (0);
var state_34748__$1 = (function (){var statearr_34765 = state_34748;
(statearr_34765[(9)] = inst_34703);

(statearr_34765[(10)] = inst_34700);

(statearr_34765[(11)] = inst_34702);

(statearr_34765[(12)] = inst_34701);

return statearr_34765;
})();
var statearr_34766_34797 = state_34748__$1;
(statearr_34766_34797[(2)] = null);

(statearr_34766_34797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34749 === (17))){
var inst_34714 = (state_34748[(7)]);
var inst_34718 = cljs.core.chunk_first.call(null,inst_34714);
var inst_34719 = cljs.core.chunk_rest.call(null,inst_34714);
var inst_34720 = cljs.core.count.call(null,inst_34718);
var inst_34700 = inst_34719;
var inst_34701 = inst_34718;
var inst_34702 = inst_34720;
var inst_34703 = (0);
var state_34748__$1 = (function (){var statearr_34767 = state_34748;
(statearr_34767[(9)] = inst_34703);

(statearr_34767[(10)] = inst_34700);

(statearr_34767[(11)] = inst_34702);

(statearr_34767[(12)] = inst_34701);

return statearr_34767;
})();
var statearr_34768_34798 = state_34748__$1;
(statearr_34768_34798[(2)] = null);

(statearr_34768_34798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34749 === (3))){
var inst_34746 = (state_34748[(2)]);
var state_34748__$1 = state_34748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34748__$1,inst_34746);
} else {
if((state_val_34749 === (12))){
var inst_34734 = (state_34748[(2)]);
var state_34748__$1 = state_34748;
var statearr_34769_34799 = state_34748__$1;
(statearr_34769_34799[(2)] = inst_34734);

(statearr_34769_34799[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34749 === (2))){
var state_34748__$1 = state_34748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34748__$1,(4),in$);
} else {
if((state_val_34749 === (23))){
var inst_34742 = (state_34748[(2)]);
var state_34748__$1 = state_34748;
var statearr_34770_34800 = state_34748__$1;
(statearr_34770_34800[(2)] = inst_34742);

(statearr_34770_34800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34749 === (19))){
var inst_34729 = (state_34748[(2)]);
var state_34748__$1 = state_34748;
var statearr_34771_34801 = state_34748__$1;
(statearr_34771_34801[(2)] = inst_34729);

(statearr_34771_34801[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34749 === (11))){
var inst_34700 = (state_34748[(10)]);
var inst_34714 = (state_34748[(7)]);
var inst_34714__$1 = cljs.core.seq.call(null,inst_34700);
var state_34748__$1 = (function (){var statearr_34772 = state_34748;
(statearr_34772[(7)] = inst_34714__$1);

return statearr_34772;
})();
if(inst_34714__$1){
var statearr_34773_34802 = state_34748__$1;
(statearr_34773_34802[(1)] = (14));

} else {
var statearr_34774_34803 = state_34748__$1;
(statearr_34774_34803[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34749 === (9))){
var inst_34736 = (state_34748[(2)]);
var inst_34737 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34748__$1 = (function (){var statearr_34775 = state_34748;
(statearr_34775[(15)] = inst_34736);

return statearr_34775;
})();
if(cljs.core.truth_(inst_34737)){
var statearr_34776_34804 = state_34748__$1;
(statearr_34776_34804[(1)] = (21));

} else {
var statearr_34777_34805 = state_34748__$1;
(statearr_34777_34805[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34749 === (5))){
var inst_34692 = cljs.core.async.close_BANG_.call(null,out);
var state_34748__$1 = state_34748;
var statearr_34778_34806 = state_34748__$1;
(statearr_34778_34806[(2)] = inst_34692);

(statearr_34778_34806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34749 === (14))){
var inst_34714 = (state_34748[(7)]);
var inst_34716 = cljs.core.chunked_seq_QMARK_.call(null,inst_34714);
var state_34748__$1 = state_34748;
if(inst_34716){
var statearr_34779_34807 = state_34748__$1;
(statearr_34779_34807[(1)] = (17));

} else {
var statearr_34780_34808 = state_34748__$1;
(statearr_34780_34808[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34749 === (16))){
var inst_34732 = (state_34748[(2)]);
var state_34748__$1 = state_34748;
var statearr_34781_34809 = state_34748__$1;
(statearr_34781_34809[(2)] = inst_34732);

(statearr_34781_34809[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34749 === (10))){
var inst_34703 = (state_34748[(9)]);
var inst_34701 = (state_34748[(12)]);
var inst_34708 = cljs.core._nth.call(null,inst_34701,inst_34703);
var state_34748__$1 = state_34748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34748__$1,(13),out,inst_34708);
} else {
if((state_val_34749 === (18))){
var inst_34714 = (state_34748[(7)]);
var inst_34723 = cljs.core.first.call(null,inst_34714);
var state_34748__$1 = state_34748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34748__$1,(20),out,inst_34723);
} else {
if((state_val_34749 === (8))){
var inst_34703 = (state_34748[(9)]);
var inst_34702 = (state_34748[(11)]);
var inst_34705 = (inst_34703 < inst_34702);
var inst_34706 = inst_34705;
var state_34748__$1 = state_34748;
if(cljs.core.truth_(inst_34706)){
var statearr_34782_34810 = state_34748__$1;
(statearr_34782_34810[(1)] = (10));

} else {
var statearr_34783_34811 = state_34748__$1;
(statearr_34783_34811[(1)] = (11));

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
});})(c__33132__auto__))
;
return ((function (switch__33042__auto__,c__33132__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33043__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33043__auto____0 = (function (){
var statearr_34784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34784[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33043__auto__);

(statearr_34784[(1)] = (1));

return statearr_34784;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33043__auto____1 = (function (state_34748){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_34748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e34785){if((e34785 instanceof Object)){
var ex__33046__auto__ = e34785;
var statearr_34786_34812 = state_34748;
(statearr_34786_34812[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34813 = state_34748;
state_34748 = G__34813;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33043__auto__ = function(state_34748){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33043__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33043__auto____1.call(this,state_34748);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33043__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33043__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto__))
})();
var state__33134__auto__ = (function (){var statearr_34787 = f__33133__auto__.call(null);
(statearr_34787[(6)] = c__33132__auto__);

return statearr_34787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto__))
);

return c__33132__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34815 = arguments.length;
switch (G__34815) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34818 = arguments.length;
switch (G__34818) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34821 = arguments.length;
switch (G__34821) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33132__auto___34868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto___34868,out){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto___34868,out){
return (function (state_34845){
var state_val_34846 = (state_34845[(1)]);
if((state_val_34846 === (7))){
var inst_34840 = (state_34845[(2)]);
var state_34845__$1 = state_34845;
var statearr_34847_34869 = state_34845__$1;
(statearr_34847_34869[(2)] = inst_34840);

(statearr_34847_34869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34846 === (1))){
var inst_34822 = null;
var state_34845__$1 = (function (){var statearr_34848 = state_34845;
(statearr_34848[(7)] = inst_34822);

return statearr_34848;
})();
var statearr_34849_34870 = state_34845__$1;
(statearr_34849_34870[(2)] = null);

(statearr_34849_34870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34846 === (4))){
var inst_34825 = (state_34845[(8)]);
var inst_34825__$1 = (state_34845[(2)]);
var inst_34826 = (inst_34825__$1 == null);
var inst_34827 = cljs.core.not.call(null,inst_34826);
var state_34845__$1 = (function (){var statearr_34850 = state_34845;
(statearr_34850[(8)] = inst_34825__$1);

return statearr_34850;
})();
if(inst_34827){
var statearr_34851_34871 = state_34845__$1;
(statearr_34851_34871[(1)] = (5));

} else {
var statearr_34852_34872 = state_34845__$1;
(statearr_34852_34872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34846 === (6))){
var state_34845__$1 = state_34845;
var statearr_34853_34873 = state_34845__$1;
(statearr_34853_34873[(2)] = null);

(statearr_34853_34873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34846 === (3))){
var inst_34842 = (state_34845[(2)]);
var inst_34843 = cljs.core.async.close_BANG_.call(null,out);
var state_34845__$1 = (function (){var statearr_34854 = state_34845;
(statearr_34854[(9)] = inst_34842);

return statearr_34854;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34845__$1,inst_34843);
} else {
if((state_val_34846 === (2))){
var state_34845__$1 = state_34845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34845__$1,(4),ch);
} else {
if((state_val_34846 === (11))){
var inst_34825 = (state_34845[(8)]);
var inst_34834 = (state_34845[(2)]);
var inst_34822 = inst_34825;
var state_34845__$1 = (function (){var statearr_34855 = state_34845;
(statearr_34855[(7)] = inst_34822);

(statearr_34855[(10)] = inst_34834);

return statearr_34855;
})();
var statearr_34856_34874 = state_34845__$1;
(statearr_34856_34874[(2)] = null);

(statearr_34856_34874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34846 === (9))){
var inst_34825 = (state_34845[(8)]);
var state_34845__$1 = state_34845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34845__$1,(11),out,inst_34825);
} else {
if((state_val_34846 === (5))){
var inst_34822 = (state_34845[(7)]);
var inst_34825 = (state_34845[(8)]);
var inst_34829 = cljs.core._EQ_.call(null,inst_34825,inst_34822);
var state_34845__$1 = state_34845;
if(inst_34829){
var statearr_34858_34875 = state_34845__$1;
(statearr_34858_34875[(1)] = (8));

} else {
var statearr_34859_34876 = state_34845__$1;
(statearr_34859_34876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34846 === (10))){
var inst_34837 = (state_34845[(2)]);
var state_34845__$1 = state_34845;
var statearr_34860_34877 = state_34845__$1;
(statearr_34860_34877[(2)] = inst_34837);

(statearr_34860_34877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34846 === (8))){
var inst_34822 = (state_34845[(7)]);
var tmp34857 = inst_34822;
var inst_34822__$1 = tmp34857;
var state_34845__$1 = (function (){var statearr_34861 = state_34845;
(statearr_34861[(7)] = inst_34822__$1);

return statearr_34861;
})();
var statearr_34862_34878 = state_34845__$1;
(statearr_34862_34878[(2)] = null);

(statearr_34862_34878[(1)] = (2));


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
});})(c__33132__auto___34868,out))
;
return ((function (switch__33042__auto__,c__33132__auto___34868,out){
return (function() {
var cljs$core$async$state_machine__33043__auto__ = null;
var cljs$core$async$state_machine__33043__auto____0 = (function (){
var statearr_34863 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34863[(0)] = cljs$core$async$state_machine__33043__auto__);

(statearr_34863[(1)] = (1));

return statearr_34863;
});
var cljs$core$async$state_machine__33043__auto____1 = (function (state_34845){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_34845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e34864){if((e34864 instanceof Object)){
var ex__33046__auto__ = e34864;
var statearr_34865_34879 = state_34845;
(statearr_34865_34879[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34880 = state_34845;
state_34845 = G__34880;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
cljs$core$async$state_machine__33043__auto__ = function(state_34845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33043__auto____1.call(this,state_34845);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33043__auto____0;
cljs$core$async$state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33043__auto____1;
return cljs$core$async$state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto___34868,out))
})();
var state__33134__auto__ = (function (){var statearr_34866 = f__33133__auto__.call(null);
(statearr_34866[(6)] = c__33132__auto___34868);

return statearr_34866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto___34868,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34882 = arguments.length;
switch (G__34882) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33132__auto___34948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto___34948,out){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto___34948,out){
return (function (state_34920){
var state_val_34921 = (state_34920[(1)]);
if((state_val_34921 === (7))){
var inst_34916 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
var statearr_34922_34949 = state_34920__$1;
(statearr_34922_34949[(2)] = inst_34916);

(statearr_34922_34949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (1))){
var inst_34883 = (new Array(n));
var inst_34884 = inst_34883;
var inst_34885 = (0);
var state_34920__$1 = (function (){var statearr_34923 = state_34920;
(statearr_34923[(7)] = inst_34885);

(statearr_34923[(8)] = inst_34884);

return statearr_34923;
})();
var statearr_34924_34950 = state_34920__$1;
(statearr_34924_34950[(2)] = null);

(statearr_34924_34950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (4))){
var inst_34888 = (state_34920[(9)]);
var inst_34888__$1 = (state_34920[(2)]);
var inst_34889 = (inst_34888__$1 == null);
var inst_34890 = cljs.core.not.call(null,inst_34889);
var state_34920__$1 = (function (){var statearr_34925 = state_34920;
(statearr_34925[(9)] = inst_34888__$1);

return statearr_34925;
})();
if(inst_34890){
var statearr_34926_34951 = state_34920__$1;
(statearr_34926_34951[(1)] = (5));

} else {
var statearr_34927_34952 = state_34920__$1;
(statearr_34927_34952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (15))){
var inst_34910 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
var statearr_34928_34953 = state_34920__$1;
(statearr_34928_34953[(2)] = inst_34910);

(statearr_34928_34953[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (13))){
var state_34920__$1 = state_34920;
var statearr_34929_34954 = state_34920__$1;
(statearr_34929_34954[(2)] = null);

(statearr_34929_34954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (6))){
var inst_34885 = (state_34920[(7)]);
var inst_34906 = (inst_34885 > (0));
var state_34920__$1 = state_34920;
if(cljs.core.truth_(inst_34906)){
var statearr_34930_34955 = state_34920__$1;
(statearr_34930_34955[(1)] = (12));

} else {
var statearr_34931_34956 = state_34920__$1;
(statearr_34931_34956[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (3))){
var inst_34918 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34920__$1,inst_34918);
} else {
if((state_val_34921 === (12))){
var inst_34884 = (state_34920[(8)]);
var inst_34908 = cljs.core.vec.call(null,inst_34884);
var state_34920__$1 = state_34920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34920__$1,(15),out,inst_34908);
} else {
if((state_val_34921 === (2))){
var state_34920__$1 = state_34920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34920__$1,(4),ch);
} else {
if((state_val_34921 === (11))){
var inst_34900 = (state_34920[(2)]);
var inst_34901 = (new Array(n));
var inst_34884 = inst_34901;
var inst_34885 = (0);
var state_34920__$1 = (function (){var statearr_34932 = state_34920;
(statearr_34932[(7)] = inst_34885);

(statearr_34932[(10)] = inst_34900);

(statearr_34932[(8)] = inst_34884);

return statearr_34932;
})();
var statearr_34933_34957 = state_34920__$1;
(statearr_34933_34957[(2)] = null);

(statearr_34933_34957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (9))){
var inst_34884 = (state_34920[(8)]);
var inst_34898 = cljs.core.vec.call(null,inst_34884);
var state_34920__$1 = state_34920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34920__$1,(11),out,inst_34898);
} else {
if((state_val_34921 === (5))){
var inst_34885 = (state_34920[(7)]);
var inst_34893 = (state_34920[(11)]);
var inst_34888 = (state_34920[(9)]);
var inst_34884 = (state_34920[(8)]);
var inst_34892 = (inst_34884[inst_34885] = inst_34888);
var inst_34893__$1 = (inst_34885 + (1));
var inst_34894 = (inst_34893__$1 < n);
var state_34920__$1 = (function (){var statearr_34934 = state_34920;
(statearr_34934[(12)] = inst_34892);

(statearr_34934[(11)] = inst_34893__$1);

return statearr_34934;
})();
if(cljs.core.truth_(inst_34894)){
var statearr_34935_34958 = state_34920__$1;
(statearr_34935_34958[(1)] = (8));

} else {
var statearr_34936_34959 = state_34920__$1;
(statearr_34936_34959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (14))){
var inst_34913 = (state_34920[(2)]);
var inst_34914 = cljs.core.async.close_BANG_.call(null,out);
var state_34920__$1 = (function (){var statearr_34938 = state_34920;
(statearr_34938[(13)] = inst_34913);

return statearr_34938;
})();
var statearr_34939_34960 = state_34920__$1;
(statearr_34939_34960[(2)] = inst_34914);

(statearr_34939_34960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (10))){
var inst_34904 = (state_34920[(2)]);
var state_34920__$1 = state_34920;
var statearr_34940_34961 = state_34920__$1;
(statearr_34940_34961[(2)] = inst_34904);

(statearr_34940_34961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34921 === (8))){
var inst_34893 = (state_34920[(11)]);
var inst_34884 = (state_34920[(8)]);
var tmp34937 = inst_34884;
var inst_34884__$1 = tmp34937;
var inst_34885 = inst_34893;
var state_34920__$1 = (function (){var statearr_34941 = state_34920;
(statearr_34941[(7)] = inst_34885);

(statearr_34941[(8)] = inst_34884__$1);

return statearr_34941;
})();
var statearr_34942_34962 = state_34920__$1;
(statearr_34942_34962[(2)] = null);

(statearr_34942_34962[(1)] = (2));


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
});})(c__33132__auto___34948,out))
;
return ((function (switch__33042__auto__,c__33132__auto___34948,out){
return (function() {
var cljs$core$async$state_machine__33043__auto__ = null;
var cljs$core$async$state_machine__33043__auto____0 = (function (){
var statearr_34943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34943[(0)] = cljs$core$async$state_machine__33043__auto__);

(statearr_34943[(1)] = (1));

return statearr_34943;
});
var cljs$core$async$state_machine__33043__auto____1 = (function (state_34920){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_34920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e34944){if((e34944 instanceof Object)){
var ex__33046__auto__ = e34944;
var statearr_34945_34963 = state_34920;
(statearr_34945_34963[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34964 = state_34920;
state_34920 = G__34964;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
cljs$core$async$state_machine__33043__auto__ = function(state_34920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33043__auto____1.call(this,state_34920);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33043__auto____0;
cljs$core$async$state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33043__auto____1;
return cljs$core$async$state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto___34948,out))
})();
var state__33134__auto__ = (function (){var statearr_34946 = f__33133__auto__.call(null);
(statearr_34946[(6)] = c__33132__auto___34948);

return statearr_34946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto___34948,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34966 = arguments.length;
switch (G__34966) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33132__auto___35036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33132__auto___35036,out){
return (function (){
var f__33133__auto__ = (function (){var switch__33042__auto__ = ((function (c__33132__auto___35036,out){
return (function (state_35008){
var state_val_35009 = (state_35008[(1)]);
if((state_val_35009 === (7))){
var inst_35004 = (state_35008[(2)]);
var state_35008__$1 = state_35008;
var statearr_35010_35037 = state_35008__$1;
(statearr_35010_35037[(2)] = inst_35004);

(statearr_35010_35037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (1))){
var inst_34967 = [];
var inst_34968 = inst_34967;
var inst_34969 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35008__$1 = (function (){var statearr_35011 = state_35008;
(statearr_35011[(7)] = inst_34969);

(statearr_35011[(8)] = inst_34968);

return statearr_35011;
})();
var statearr_35012_35038 = state_35008__$1;
(statearr_35012_35038[(2)] = null);

(statearr_35012_35038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (4))){
var inst_34972 = (state_35008[(9)]);
var inst_34972__$1 = (state_35008[(2)]);
var inst_34973 = (inst_34972__$1 == null);
var inst_34974 = cljs.core.not.call(null,inst_34973);
var state_35008__$1 = (function (){var statearr_35013 = state_35008;
(statearr_35013[(9)] = inst_34972__$1);

return statearr_35013;
})();
if(inst_34974){
var statearr_35014_35039 = state_35008__$1;
(statearr_35014_35039[(1)] = (5));

} else {
var statearr_35015_35040 = state_35008__$1;
(statearr_35015_35040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (15))){
var inst_34998 = (state_35008[(2)]);
var state_35008__$1 = state_35008;
var statearr_35016_35041 = state_35008__$1;
(statearr_35016_35041[(2)] = inst_34998);

(statearr_35016_35041[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (13))){
var state_35008__$1 = state_35008;
var statearr_35017_35042 = state_35008__$1;
(statearr_35017_35042[(2)] = null);

(statearr_35017_35042[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (6))){
var inst_34968 = (state_35008[(8)]);
var inst_34993 = inst_34968.length;
var inst_34994 = (inst_34993 > (0));
var state_35008__$1 = state_35008;
if(cljs.core.truth_(inst_34994)){
var statearr_35018_35043 = state_35008__$1;
(statearr_35018_35043[(1)] = (12));

} else {
var statearr_35019_35044 = state_35008__$1;
(statearr_35019_35044[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (3))){
var inst_35006 = (state_35008[(2)]);
var state_35008__$1 = state_35008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35008__$1,inst_35006);
} else {
if((state_val_35009 === (12))){
var inst_34968 = (state_35008[(8)]);
var inst_34996 = cljs.core.vec.call(null,inst_34968);
var state_35008__$1 = state_35008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35008__$1,(15),out,inst_34996);
} else {
if((state_val_35009 === (2))){
var state_35008__$1 = state_35008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35008__$1,(4),ch);
} else {
if((state_val_35009 === (11))){
var inst_34972 = (state_35008[(9)]);
var inst_34976 = (state_35008[(10)]);
var inst_34986 = (state_35008[(2)]);
var inst_34987 = [];
var inst_34988 = inst_34987.push(inst_34972);
var inst_34968 = inst_34987;
var inst_34969 = inst_34976;
var state_35008__$1 = (function (){var statearr_35020 = state_35008;
(statearr_35020[(11)] = inst_34988);

(statearr_35020[(7)] = inst_34969);

(statearr_35020[(12)] = inst_34986);

(statearr_35020[(8)] = inst_34968);

return statearr_35020;
})();
var statearr_35021_35045 = state_35008__$1;
(statearr_35021_35045[(2)] = null);

(statearr_35021_35045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (9))){
var inst_34968 = (state_35008[(8)]);
var inst_34984 = cljs.core.vec.call(null,inst_34968);
var state_35008__$1 = state_35008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35008__$1,(11),out,inst_34984);
} else {
if((state_val_35009 === (5))){
var inst_34972 = (state_35008[(9)]);
var inst_34969 = (state_35008[(7)]);
var inst_34976 = (state_35008[(10)]);
var inst_34976__$1 = f.call(null,inst_34972);
var inst_34977 = cljs.core._EQ_.call(null,inst_34976__$1,inst_34969);
var inst_34978 = cljs.core.keyword_identical_QMARK_.call(null,inst_34969,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34979 = (inst_34977) || (inst_34978);
var state_35008__$1 = (function (){var statearr_35022 = state_35008;
(statearr_35022[(10)] = inst_34976__$1);

return statearr_35022;
})();
if(cljs.core.truth_(inst_34979)){
var statearr_35023_35046 = state_35008__$1;
(statearr_35023_35046[(1)] = (8));

} else {
var statearr_35024_35047 = state_35008__$1;
(statearr_35024_35047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (14))){
var inst_35001 = (state_35008[(2)]);
var inst_35002 = cljs.core.async.close_BANG_.call(null,out);
var state_35008__$1 = (function (){var statearr_35026 = state_35008;
(statearr_35026[(13)] = inst_35001);

return statearr_35026;
})();
var statearr_35027_35048 = state_35008__$1;
(statearr_35027_35048[(2)] = inst_35002);

(statearr_35027_35048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (10))){
var inst_34991 = (state_35008[(2)]);
var state_35008__$1 = state_35008;
var statearr_35028_35049 = state_35008__$1;
(statearr_35028_35049[(2)] = inst_34991);

(statearr_35028_35049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35009 === (8))){
var inst_34972 = (state_35008[(9)]);
var inst_34976 = (state_35008[(10)]);
var inst_34968 = (state_35008[(8)]);
var inst_34981 = inst_34968.push(inst_34972);
var tmp35025 = inst_34968;
var inst_34968__$1 = tmp35025;
var inst_34969 = inst_34976;
var state_35008__$1 = (function (){var statearr_35029 = state_35008;
(statearr_35029[(7)] = inst_34969);

(statearr_35029[(8)] = inst_34968__$1);

(statearr_35029[(14)] = inst_34981);

return statearr_35029;
})();
var statearr_35030_35050 = state_35008__$1;
(statearr_35030_35050[(2)] = null);

(statearr_35030_35050[(1)] = (2));


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
});})(c__33132__auto___35036,out))
;
return ((function (switch__33042__auto__,c__33132__auto___35036,out){
return (function() {
var cljs$core$async$state_machine__33043__auto__ = null;
var cljs$core$async$state_machine__33043__auto____0 = (function (){
var statearr_35031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35031[(0)] = cljs$core$async$state_machine__33043__auto__);

(statearr_35031[(1)] = (1));

return statearr_35031;
});
var cljs$core$async$state_machine__33043__auto____1 = (function (state_35008){
while(true){
var ret_value__33044__auto__ = (function (){try{while(true){
var result__33045__auto__ = switch__33042__auto__.call(null,state_35008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33045__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33045__auto__;
}
break;
}
}catch (e35032){if((e35032 instanceof Object)){
var ex__33046__auto__ = e35032;
var statearr_35033_35051 = state_35008;
(statearr_35033_35051[(5)] = ex__33046__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35052 = state_35008;
state_35008 = G__35052;
continue;
} else {
return ret_value__33044__auto__;
}
break;
}
});
cljs$core$async$state_machine__33043__auto__ = function(state_35008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33043__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33043__auto____1.call(this,state_35008);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33043__auto____0;
cljs$core$async$state_machine__33043__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33043__auto____1;
return cljs$core$async$state_machine__33043__auto__;
})()
;})(switch__33042__auto__,c__33132__auto___35036,out))
})();
var state__33134__auto__ = (function (){var statearr_35034 = f__33133__auto__.call(null);
(statearr_35034[(6)] = c__33132__auto___35036);

return statearr_35034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33134__auto__);
});})(c__33132__auto___35036,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1507075195337
