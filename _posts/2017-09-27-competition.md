---
layout: post
title: "Complex Competition"
tags: [mathematics, rust language, complex contensts]
date: 2017-09-27
published: true
---

## Introduction

My aunt Shelley asked me an interesting question about a weight loss competition
she competed in. The goal of the competition was to see who could lose the most
weight. To those who don't know, my aunt Shelley doesn't weigh very much, which
means that she started with a major disadvantage. After ending up losing the
competition she thought her results were better than the other competitors
somehow, so asked me how something like this could actually be calculated
better. She wanted to win that competition!

### Math!

First, lets consider some data needed for a weight loss competition. A
contestant will have a weight, which means that we can calculate the weight at
the beginning of the competition and at the end of it. In each competition with
my cousin Shelley, we'll refer to her as $$s$$, there will be a weight for her
$$s_{i}$$ at the beginning and $$s_{f}$$ at the end of the competition. When
there are multiple competitions, the function $$\nu$$ may differ. The differing
functions, our collection of normalizing functions, can so be denoted $$\nu_{1},
\nu_{2}, \dots, \nu_{N}$$.

In a simple case where there are two contestants, one being my aunt Shelley and
the other being some other contestant $$c$$, we can consider the following
matrix as the data structure:

$$\begin{bmatrix} 
\nu_{1}(s) & \nu_{2}(s) \\
\nu_{1}(c) & \nu_{2}(c)
\end{bmatrix},$$

where $$s$$ and $$c$$ are shorthand for $$(s_{i}, s_{f})$$ and $$(c_{i},
c_{f})$$, and we can define $$\nu_{1}$$ to be the difference and $$\nu_{2}$$ to
be the relative difference of the beginning and ending weight. For future
convenience, there is also the condition that the maximum value of any column is
$$1$$. We can use a normalizing function to achieve the condition for the
$$\nu_{1}$$ case by making $$\nu_{1}\prime(x) = (x_{i} - x_f)$$ and
$$\nu_{2}\prime(x) = (x_{i} - x_{f}) / x_{i}$$, so that $$\nu_{1} =
\nu_{1}\prime / \max\{\nu_{1}\prime(s), \nu_{1}\prime(c)\}$$ and $$\nu_{2} =
\nu_{2}\prime / \max\{\nu_{2}\prime(s), \nu_{2}\prime(c)\}$$.

$$\begin{bmatrix} 
(s_{i} - s_{f}) / \max\{(s_{i} - s_{f}, c_{i} - c_{f})\} &
(s_{i} - s_{f}) / (s_{i} \cdot \max\{(s_{i} - s_{f}) / s_{i}, (c_{i} - c_{f}) / c_{i}\}) \\
(c_{i} - c_{f}) / \max\{(s_{i} - s_{f}, c_{i} - c_{f})\}) &
(c_{i} - c_{f}) / (c_{i} \cdot \max\{(s_{i} - s_{f}) / s_{i}, (c_{i} - c_{f}) / c_{i}\}) \\
\end{bmatrix}$$

An example calculation of this matrix for the data $$(s_{i}, s_{f}) = (135.1,
125.3)$$, $$(c_{i}, c_{f}) = (150.2, 140.0)$$ yields:

$$\begin{bmatrix} 
0.96 & 1.00 \\
1.00 & 0.94
\end{bmatrix}.$$

This means that Shelley would lose the difference contest by $$0.04$$ points,
but win the relative difference contest by $$0.06$$ points. Using this point
information, we can then derive a method to determine a winner in consideration
of each competition. This is rather simple, as we can form a new vector that is
a linear combination of each column in the vector. There is also imposed the
constraint that the sum of scalars for each linear combination is $$1$$. An
example solution from this case might be $$0.75$$ times the first column and
$$0.25$$ the second column.

$$\begin{bmatrix} 
0.94 \\
0.95
\end{bmatrix}$$

In this case the other contestant wins the combined competition. Or, where both
competitions are weighted evenly at $$0.50$$, it is 

$$\begin{bmatrix} 
0.98 \\
0.97
\end{bmatrix},$$

and Shelley wins.

#### Also

It is possible to use very much the same methods on larger competitions with
more people, and with more categories as well. We could have an $$M \times N$$
size array

$$\begin{bmatrix} 
\nu_{1}(c_1) & \nu_{2}(c_1) & \dots & \nu_{N}(c_1) \\
\nu_{1}(c_2) & \nu_{2}(c_2) & \dots & \nu_{N}(c_2) \\
\vdots & \vdots & \ddots & \dots  \\
\nu_{1}(c_M) & \nu_{2}(c_M) & \dots & \nu_{N}(c_M)
\end{bmatrix}.$$

### Implementation

I used the following `structs` in my implementation code:

```rust
pub struct Contestant<'a> {
    name: &'a str,
    weight_start: f32,
    weight_end: f32,
}

pub struct Competition<'a> {
    scores: Vec<f32>,
}

pub struct Contest<'a> {
    competitions: Vec<Competition<'a>>,
    contestants: Vec<Contestant<'a>>
}
```

I've elided some of the associated functions to these `structs`, but the
following demonstrates the normalizing function and an example usage that I use
to define the `Debug` trait which one can then use with the `println!` macro to
display the array.

```rust
impl<'a> competition<'a> {
    /// Returns a vector of normalized scores
    pub fn normalized_scores(&self) -> Vec<f32> {
        let highest = self.scores.iter().fold(-f32::MAX, |highest, score| {
            if score > &highest {
                *score
            } else {
                highest
            }
        });
        self.scores.iter().map(|s| s / highest).collect()
    }
}

impl<'a> fmt::Debug for Contest<'a> {
    /// Debug trait implementation for Contest. Prints a contestant.len() by
    /// competition.len() array
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        let scores: Vec<Vec<f32>> = self.competitions
            .iter()
            .map(|comp| comp.linear_normalized_scores())
            .collect();

        let mut format_str = String::new();

        for j in 0..self.contestants.len() {

            for i in 0..self.competitions.len() {
                format_str.push_str(&format!("{:5.2}", scores[i][j]));
            }
            format_str.push_str(&format!("\n"));
        }
        write!(f, "{}", format_str)
    }
}
```

Using the library is as easy as building up a vector of contestants, then
creating a contest with those contestants. For example:

```rust
let shelley = Contestant::new("Shelley", 135.1, 125.3);
let sarah = Contestant::new("Sarah", 150.2, 140.0);
let bob = Contestant::new("Bob", 187.8, 174.4);
let contest = Contest::new(vec![shelley, sarah, bob]);
println!("{:?}", contest);
```

which prints the following:

```
0.06 0.07
0.91 1.00
1.00 0.89
```
