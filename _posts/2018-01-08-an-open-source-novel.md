---
layout: post
title: "Creating an Open Source Fiction Novel with Git"
tags: [Git, commandline, GitHub, open source]
published: true
---

Let's work together on a novel! I've had in my head a while an idea for a book about man and robot. The robot is a natural language processing automaton, meaning he's capable of effective human speech comprehension. The human is like any of us; merely something to view the majesty of the universe through. 

Currently the repository is private [Asteroid Boy repository](https://github.com/JustenRickert/asteroidboy). If you have interest in seeing the project please ask about contributing. Then this tutorial could actually be useful to you!

First, just like any GitHub repository, something must be cloned.
```bash
git clone https://github.com/JustenRickert/asteroidboy
```

Assuming your git credentials are stored and those credentials have access to the repository, everything will clone successfully. Otherwise you'll probably have to enter in your account name and password. In any case you'll _need_ access to the repository as someone who contributes.

## Making a Contribution

Whenever work is to be done, the work should be done on a branch. First `git status` to make sure there isn't anything waiting to be committed. 

<div style="text-align: center;">
<img src="{{ site.baseurl }}/images/an-open-source-novel/git-status.png"><br>
<span>This is what my terminal looks like</span>
</div>

If everything comes up clear, then a branch can be made. A branch should have a specific intent & its name should represent that intent.

```bash
git checkout -b new_branch_for_editing_chapter_one
```

Or, another branch that's already started can be checked out.

```bash
git checkout already_started_branch_for_writing_chapter_two
```

Either way, if the command runs successfully, all the files in the file directory will match what exists on the branch. Go ahead and make some edits. To save any edits you make, you'll have to first stage the additions to be made using `git add` (or `git add .` to add all the changes) then committing the changes to your branch using `git commit`.

```bash
git add .
git commit -m "Commit message with some information about what edits were made"
```

### Tip to see what you changed

At this point, you might want to inspect all of the actual changes you made. You can use the following command, which shows you the difference between the branch at the current & previous collection of commits (which, in this case, since only one commit was made, will consist of the one commit made).

```bash
git diff HEAD~1
```

Using the command line, however, can be a little unwieldy after a while. I use Emacs, and Emacs has a wonderful package called Magit. It makes viewing diffs actually enjoyable. Here's what my single commit diff looks like using Magit's Ediff utility. The green side represents the newer version. The bold words are the words that are different.

<div style="text-align: center;">
<img src="{{ site.baseurl }}/images/an-open-source-novel/my-editing-setup.png"><br>
<span>This is what my Emacs looks like</span>
</div>

## Finally, Share the Changes

Finally you'll want to share the changes. (Or I want you to share the changes so that I can add them.) When changes are committed, they are only committed to the local version of the repository. They need to be pushed to the online GitHub repository (the _remote_) for everyone else to look at.

```bash
git push -u
```

The `-u` flag stands for `--set-upstream`. It's the flag that, when without an argument, tells `git push` to push the local branch to the remote branch of the same name (or if the remote name was previously set to something else, then whatever it was previously set to).

That should be enough to get started with!
