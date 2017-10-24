---
layout: post
title: "An Incremental Game in Clojure"
tags: [state machines, UI developement, Clojure language]
date: 2017-10-17
published: true
---

I was listening to a Cognitect podcast and learned that it's a good idea to use state machines to develop user interfaces for applications. Since Clojure is a data-oriented language, I figure that it should make for good language to implement that sort of thing. First, however, let's take a look at what exactly a state machine is, then we'll dive into the game I'm going to showcase so that it hopefully makes sense why a state machine might be a good abstraction to use for it. NOTE that I'm going to take this all very slowly. There's a lot of ground to cover, certainly, but I want to cover it all very well.

## What's a State Machine?

{% include definition.html
word="state ma·chine"
ipa="stāt məˈSHēn"
part="noun"
content="a device that can be in one of a set number of stable conditions depending on its previous condition and on the present values of its inputs." %}

That's perhaps a little terse. Without an already established idea of the conceptual computer state machine, meaning is probably lost---perhaps somewhere around the words _conditions_ and _inputs_.

<div class="left">
<img src="{{ site.baseurl }}/images/incremental-game-clojure/state-machine.png">
</div>

Usually a state machine is drawn like this png I took from Wikipedia. The leftmost arrow points toward the starting state, and every other arrow represents a _transition_ (also possibly called a _transition function_, a _transitionary function_, or even a _state mutation_). This is a very simple state machine meant only to handle _inputs_ of $$0$$ or $$1$$. An example usage, given the string of inputs $$00000$$, would go as follows: 
1. Place mouse cursor or finger on the starting state $$S_1$$.
2. For each number in the input sequence $$00000$$, move mouse cursor or finger along the _transition_ arrow of the same number, stopping briefly at each state to ponder existence or the triviality of this task. The sequence of states here should be: $$(S_1, S_2, S_1, S_2, S_1, S_2)$$.
3. When there are no more numbers left in the sequence, check the state the mouse cursor or finger stopped upon. Simple state machines like these are generally only supposed to give an $$Accept$$ or $$Reject$$ response, where a doubly circled state is conventionally $$Accept$$ and a singly circled state $$Reject$$. Here, since we stopped on $$S_2$$, we should $$Reject$$.

These kinds of machines make a lot of sense for low-level computer hardware because the $$Reject$$ response can be thought of as a $$0$$ and $$Accept$$ a $$1$$, and many of them can be strung together for chained computations to compute, for example, binary arithmetic.

Since the goal isn't to create a computer before an incremental game, this limited view of a finite state machine doesn't really mean anything. Rather, the given abstract definition makes much more sense for the scope of an incremental game and (at least I think) the history helps to put into perspective why the terms were chosen for this design abstraction. Though before we start to talk in detail about this structure again, let's take a gander at the real topic of this post.

## Incremental Game

An incremental game at first consists of some point value that the player wants to increment. Then, after some points are accumulated, things to spend the points on (which in return produce more points for the player to earn). 

### State

Let's define our state to be something more than just $$S_1$$ or $$S_2$$, as in the trivial example before. Here, we can consider our player's point system to be money. I think we can all unfortunately agree that money is a good system to determine who's competing well in this game of life we all play, and so should be good to use here too.

```clojure
(defonce state
  (atom {:money 0}))
```

From the Clojure docs, one can read that _"atoms provide a way to manage shared, synchronous, independent state"_. At the moment let's ignore the buzzwords used in that definition, and just say _"atoms provide a way to manage state"_ which is useful to know given that we're trying to create a machine of states. (I promise to get back to those buzzwords eventually.) We can read from this state as follows:

```clojure
(:money @state)
```

The `@` here denotes the dereference operator. We must use the `@` here because we're using an `atom`. Atoms have an underlying importance that's hard to explain rigorously, but one can essentially think of it this way: The atom refers to something; don't look at the atom, look at what it refers to with the dereference operator.

Now that we have a state to manage, we need some way to manage it. (Remember it's called a _state machine_ and not just a _state_.)

```clojure
(defn give-user-money! [amt]
  (swap! state update :money #(+ % amt)))

(defn take-user-money! [amt]
  (swap! state update :money #(- % amt)))
```

By the name of these functions it should be easy to tell what they do. However, the implementation may seem a little unclear. For a single line function implementation it's actually very complex! For example it may partially appear that I was lying about `@`, but the function `swap!` asks specifically for an `atom` as operand (and not what the `atom` refers to). `swap!` also asks for a function and some values to pass to that function. We pass it `update` which uses the other two remaining operands, one of which is an anonymous function, taking whatever implicit value exists in `state` mapped under the name `:money` as its own operand, and returns the sum/difference of the implicit value passed to the anonymous function and the operand `amt` passed to the function being defined. `update` then returns the value of the anonymous function to `swap` with the value in `state` having the key `:money`.

Yikes! Take a second to reread that if you need, then note the usage of `!`. These functions (and `swap!`) _mutate the state_. We want to be very clear about when the state changes, which is why we use `!`. Clojure, being a functional programming language, tries its hardest to not mutate any state whenever possible. The convention is that functions have no side effects, so in this particular case one should be clear that that convention no longer holds.

### Game Machining

Next we want to actually run something. An easy way to do this without doing any work is to write a looping function to automatically give the user money. I'll do this by utilizing JavaScript's high performance convention for looping `js/requestAnimationFrame`.

```clojure
(defn loop! []
  (give-user-money! some-amt)
  (js/requestAnimationFrame loop!))
```

(In the actual implementation I do some things to handle performance problems, but since it is not relevant at the moment has been left as an exercise. `js/requestAnimationFrame` attempts to always run at $$60$$ fps, but in the event that it cannot I don't want a player to suffer by not getting the full amount of money they deserve. Hint: my method used `js/performance.now`.) 

Note that we haven't established exactly what `some-amt` is. Since really the only thing talked about here has been state machines, it makes sense to reuse that somehow. 

Let's add some value to our `state` definition and use that instead of an undeclared variable.

```clojure
(defonce state
  (atom {:money        0
          :money-factor 1}))

(defn loop! []
  (give-user-money! (:money-factor @state))
  (js/requestAnimationFrame loop!))
```

Now at each frame, the user will be given $$1$$ money! Though the apparent problem is that there's no way to tell whether or not it's working.

It'll be very convenient to use `reagent` here, so make sure to add 
```clojure
(:require [reagent.core :as reagent])
```
to your `namespace`. Also make sure that your `figwheel` project has an `index.html` resource with a `div` having an id "app". Then define a function that uses `hiccup`-style syntax to return an `html` element, render that element with `reagent`, and finally start the loop! (I went through this very quickly. I'll talk more about `hiccup` and `reagent` and the purpose they serve later. It somewhat ties into why atoms are important. Actually, `reagent` has its own important implementation of `atom`. I'm not sure exactly why but I assume it's to do virtual DOM diffing.)

```clojure
(defn user-money []
  [:div "$" (:money @user/state)])

(reagent/render-component [user-money]
                          (. js/document (getElementById "app")))
(loop!)
```

In total:

```clojure
(ns commgame.core
  (:require [reagent.core :as reagent :refer [atom]]))

(defonce state
  (atom {:money        0
          :money-factor 1}))

(defn give-user-money! [amt]
  (swap! state update :money #(+ % amt)))

(defn take-user-money! [amt]
  (swap! state update :money #(- % amt)))

(defn loop! []
  (give-user-money! (:money-factor @state))
  (js/requestAnimationFrame loop!))

(defn user-money []
  [:div "$" (:money @user/state)])

(reagent/render-component [user-money]
                          (. js/document (getElementById "app")))
(loop!)
```

Hardly any work at all!

## Why a State Machine?

Recall from the definition of _state machine_ that it must be in _"one of a set number of stable conditions"_. Eventually, the game being written is going to start including more and more data in the state. The state atom will become larger and larger, and working with it will become messier and messier. The sensible decision should then be to touch this state in as few different ways as possible. 

It would be wise to create a separation between how one concerns themselves with state transitions and how one uses those defined state mutations logically in the operations of the game. One proves that each written input transition of a state derives, from the previous state, sets of stable conditions for the next state to be in, and they do this (a __very__ difficult task potentially full of unit testing and headaches) within the state machine paradigm so that they need not concern themself with it while writing the user interface or game logic. 

Evidence of this lies in the fact that the simple user interface element calls no functions whatsoever. It doesn't care about how or why the state managed to be where it is. It cares only that it exists in a stable condition, which should have been proved in the implementation details of the state transitions.

## Why Clojure?

It may seem counter-intuitive to use Clojure, a language against using functions with side-effects, to create a state machine relying on functions to directly affect it. Actually, because of this it's better. Because Clojure relies so little on state mutation, one can be sure they're mutating state only when calling defined transitionary functions and never accidentally. 

Furthermore, creating the state of the state machines is rather easy. Since Clojure is a language focused on data and data manipulation, things that state machines rely on, writing the state happens to be straight-forward. If I wanted to write a chili recipe in Clojure, it's two pairs of parentheses and a keyword away from basically how I would have scribbled it on a piece of paper anyway.

```clojure
(def chili-recipe
  {"lean ground beef"  (pounds 1.5)
   "onion"             1
   "green bell pepper" 1
   "minced garlic"     (cloves 2)
   "red kidney beans"  (ounces 16)
   "diced tomatoes"    (ounces 14)
   "chili powder"      (tablespoons 3)
   "salt"              (teaspoons 1)
   "pepper"            (teaspoons 1)
   "ground cumin"      (teaspoons 1)})
```

## TODO yet

- Talk about atoms some more. (Including _shared, synchronous, independent state_.)
- Talk about `hiccup`, `reagent`, and the virtual DOM.
