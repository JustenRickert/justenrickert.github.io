---
layout: post
title: "First Post"
tags: [Emacs, Spacemacs, complex, simple]
published: true
---

Hello, world! Obligatory thanks for checking out my blog. There is not a lot
that I have to say right now, but keep checking up on me from time to time
because I will surely be making excuses to put my life on hold to write some of
it all down at some point soon.

Ideally I would like to teach people things here. I think the world is simply a
platform for people to share the contents of their lives with each other. A
place to take a break from their daily personal lives from time to time to say
"hello world, look what I did today," which is kind of what I am doing right
now. So, hello world, look what I'm doing!

If you are curious about the way that I did this, here is an image, an
unfortunately narrow viewport, of the way that my writing process happens. It is
a _buffer_ of the document which will be translated to an _html_ file format
deliverable by a _static site generator_ and able to be viewed by a _web
browser_, which is (probably) how you are viewing these words right now. (If you
are interested, you could be viewing it at as _source code_ in [my _GitHub
repository_](https://github.com/JustenRickert/justenrickert.github.io).)

![Emacs screenshot]({{ site.url }}/images/emacs-first-post-screen.png)

The program, Emacs, provides a mechanism to develop things (anything, even)
through text editing and keyboard shortcuts. It allows me to move things around
on my computer (words, files, directories, other programs,
[butterflies](https://xkcd.com/378/)) all conveniently with only the keys at my
fingertips. That is, I need not take the time to move my hands to and from the
mouse to highlight text, to drag and drop things, or to scroll windows up and
down pages, etc.

> __eas·y__ / ˈēzē/ _adjective_ <br> achieved without great effort; presenting
> few difficulties. "an easy way of retrieving information"

It may seem strange to want to use such a primitive-looking editing program to
do such a thing. If you were wondering, that is a screenshot of the entire face
of the application as it is running. One would think developing something
complex must surely require using something much more than that, but hear me
out, because it _is_ much more than that, and everything I am doing that is
complex here actually becomes much simpler inside the strange, darkly colored
Emacs box above. Perhaps some would argue otherwise---that it is a program not
so easy to use---so let me explain this point a little. In fact if you were a
keen observer, you will have noticed that I am not using the Emacs mode to edit
the markdown format text, and that is because I cannot get it to work at the
moment! It must not be so easy if I cannot figure it out, after all.

> __sim·ple__ / ˈsimpəl/ _adjective_ <br> composed of a single element; not compound.

Rich Hickey, a programmer made popular by his designing the programming
language [Clojure](https://en.wikipedia.org/wiki/Clojure), is well know for a
presentation he gave on the language
titled
[_Simple Made Easy_](https://www.infoq.com/presentations/Simple-Made-Easy). In
the presentation he contrasted the difference between the words _simple_ and
_easy_, emphasizing simplicity's virtues over easiness'. The takeaway is this:

<blockquote>Simple is often erroneously mistaken for easy. Easy means "to be
at hand", "to be approachable". Simple is the opposite of complex which
means "being intertwined," "being tied together." Simple is not the same as
easy.<footer>Rick Hickey</footer></blockquote>

The comparison I am making here is that the fashion I have found to develop
things on my computer (like this blog) was not easy to figure out. When I run
the `tree` command on the source directory I am met with an amalgam of different
kinds of information. The source directory of the blog contains 18 directories
containing 25 different files needing managing somehow. That goes without
mentioning their depending upon an understanding
of [Jekyll](https://jekyllrb.com/)
and [GitHub Pages](https://pages.github.com/).

![`tree` screenshot]({{ site.url }}/images/tree-first-post-screen.png)

When I do the same command on the directory containing all of the work that I have done in the last year of school, the command returns that there exists 97 directories containing 616 files. Doing the `wc` command tells me that there are 229,729 words contained in just the org file format alone! Clearly, this is complex. Upon viewing such a system one _need_ ask the question "How does one simplify this?" Surely, finding a such a simplification could not be easy.

In any case, before even beginning to consider what steps need be taken to figure out how the system even works, one needs to learn how to be productive inside of it. Perhaps second to that is a need to make oneself feel at home working inside such a complexity. My proposition is that my program of choice is the means by which I simplify the works in the life; though such movements may not be easy, it should not be that the works in the end are too complex---rather, they should be simple. I am an intrepid explorer of informational networks, intertwined strings of processed text inseparable according their associated file format's parsing algorithms, and am clothed in my [Spacemacs](http://spacemacs.org/) spacesuit, ready to try my hand at making simple the not-so-easy task of programming. However, I truly wish only to inspire and motivate those around me to try to be the same.
