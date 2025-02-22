---
title: 'Git'
pubDate: 2025-02-22
oneLiner: 'Welcome to my new blog about learning Git!'
description: 'This is the first post of my new Astro blog.'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["astro", "blogging", "learning in public"]
---

## What is Version Control ?

Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.

### Local Version Control

- Many people’s goto choice.
- The approach is to **copy files into another directory** (perhaps a time-stamped directory, if they’re clever).
- This approach is very common because it is so simple, but **it is easy to forget which directory you’re in and accidentally write to the wrong file or copy over files you don’t mean to.**

![Version Control using Directories](./folders.png)

---

## What is Git?

- By far, the **most widely used modern version control system!**
- **Distributed Developement**
    
    For a centralized VCS, each developer gets a working copy that points back to a single central repository. Git, however, is a distributed version control system.
    
    <aside>
    📌 Instead of a working copy, each developer gets their own local repository, complete with a full history of commits.
    
    </aside>
    
    Having a full local history makes Git fast, since it means you don’t need a network connection to create commits, inspect previous versions of a file.
    

## What is Github?

- Git is not the same as GitHub.
- GitHub is a cloud-based hosting service that lets you manage Git repositories.
- Helps share our code with others

---

## Getting Started

1. [Download](https://git-scm.com/downloads) and Install
2. Open Git Bash

### Your Identity

The first thing you should do when you install Git is to set your user name and email address.

<aside>
📢 This is important because every Git commit uses this information

</aside>

```bash
git config --global user.name "Andrew Late"
git config --global user.email seeWhatIdidThere@haha.com
```

<aside>
📢  `--global` option - Git will always use that information for anything you do on that system. If you want to override this with a different name or email address for specific projects, you can run the command without the `--global` option when you’re in that project.

</aside>

### Checking Your Settings

```bash
git config --list
```

### Getting Help

```bash
# 1
git help <command>

# 2
git <command> --help

#Example
git help add
```

---

## The PAY ATTENTION moment begins here!

### The 3 States

Git has three main states that your files can reside in: modified, staged and committed:

- **Modified** means that you have changed the file but have not committed it to your database yet.
- **Staged** means that you have marked a modified file in its current version to go into your next commit snapshot.
- **Committed** means that the data is safely stored in your local database.

<aside>
📌 This leads us to the three main sections of a Git project:
1. **The Working Directory** - One Version of the project that can be used or modified.
2. **Staging Area** - Stores information about what will go into your next commit.
3. **.git directory(Repository)**- Contains all the commits.

</aside>

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9f7d4f41-468b-4167-8833-d4e3f0490804/Untitled.png)

<aside>
📌 **BASIC WORKFLOW**

1. You modify files in your working tree.
2. You selectively stage just those changes you want to be part of your next commit, which adds ***only*** those changes to the staging area.
3. You do a commit, which takes the files as they are in the staging area and stores that snapshot permanently to your Git directory.
</aside>

### Status of Files

Each file in your working directory can be in one of two states: **Tracked** or **Untracked.**

- Tracked files consists of **Unmodified**, **Modified** and **Staged** files.
- Untracked files are **everything else.**

When you perform `git init` all files present in the working directly are **Untracked.**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d822f45a-7948-4fe4-97d2-c77f1c715849/Untitled.png)

### Checking the Status of Files

The main tool you use to determine which files are in which state.

```bash
git status
```

To do: 

1. Add a new file
2. Now run the git status command

![Output](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e6a9f75a-8468-4b4e-9ac0-9cf98cf4da2e/Untitled.png)

Output

You can see that your new `index.html` file is untracked because it’s under the “Untracked files” heading in your status output. An untracked file basically means that Git doesn't know about it and will only track the file if you explicitly tell it to do so.

### Tracking New Files

Let’s start tracking the new file that we added.

```bash
git add <file_name>

# To add Everything, literally
git add -A

# To make it interactive
git add -p
```

To begin tracking the `index.html` file, you can run the `git add index.html` command. Now, if you run the status command again : 

![Output](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1227a34b-8eac-4adb-b093-76d094be22ea/Untitled.png)

Output

You can see that your `index.html` file is now **tracked and staged to be committed.**

<aside>
💡 **You want to know exactly what you changed?**
Use the `git diff` command.

</aside>

### Committing Changes

Now that your staging area is set up the way you want it, you can commit your changes. 

<aside>
📌 Any files you have **created** or **modified** that you haven’t run `git add`
 on since you edited them — won’t go into this commit. They will stay as modified on your disk.

</aside>

<aside>
📌 Every time you perform a commit, you’re recording a **snapshot** of your project that you can revert to or compare to later.

</aside>

To commit the changes, the following command is used:

```bash
git commit <filename> -m "<Message>"

# Committing the whole staging area
git commit -m "<Message>"
```

In our case, you can run the git commit -m “Added: HTML file” command.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d824b70d-ec65-49c6-8216-211bc0ae61b8/Untitled.png)

**Observations**

Now you’ve created your first commit! You can see that the commit has given you some output about itself: 

- Which branch you committed to ⇒ `master`
- What SHA-1 checksum the commit has ⇒ `ae8a85c`
- How many files were changed, and statistics about lines added and removed in the commit.

Let’s create a couple of commits. 

![image (1).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/98654922-d42d-4063-ad4f-2ed0f46db0be/image_(1).png)

### Viewing the Commit History

After you have created several commits, you’ll probably want to look back to see what has happened. The following command helps you do it:

```bash
git log

# Also prints the list of modified files, and their details
git log --stat

# Limit to "n" entries
git log -n

# Printing each commit on a single line
git log --oneline
```

Let’s run this command on our machine.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8318ac1f-3036-4872-8a7c-72fdc8505814/Untitled.png)

**Observations**

- By default, `git log` lists the commits made in that repository in reverse chronological order (i.e., the most recent commits show up first.)
- command lists each commit with its
    1. SHA-1 checksum, 
    2. Author’s name and email, 
    3. Date, and 
    4. Commit message.

<aside>
📢 **The hell is HEAD?**

 HEAD tells you:

- What branch you're currently one,
- What the next parent will be (cuz HEAD is now the pointing to the parent of the next commit).
</aside>

### Removing Commits / Going back

The following command is used to go back:

```bash
git reset <commit_hash>

# Reset to previous commit
git reset --hard HEAD^
```

<aside>
📢 **Let’s understand**

![01 git-sequence-transparent kopiera.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b02d249b-0b23-4b10-b941-372fe696ca4c/01_git-sequence-transparent_kopiera.png)

After doing `git reset b` , now the HEAD and Main are pointing to the commit “b”.

![03 git-reset-transparent kopiera.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/95966e24-9334-4a14-9e15-50e1ef060f85/03_git-reset-transparent_kopiera.png)

</aside>

### Undoing Things

At any stage, you may want to undo something. Here, we’ll review a few basic tools for undoing changes that you’ve made.

<aside>
📌 **Be careful, because you can’t always undo some of these undos.** 
This is one of the few areas in Git where you may lose some work if you do it wrong.

</aside>

- **Case 1:** **When you commit too early and possibly forget to add some files, or you mess up your commit message.**
    
    TO DO:
    
    If you want to redo that commit, make the additional changes you forgot, stage them, and commit again using the `--amend` option.
    
    ```bash
    git commit --amend -m "<Message>"
    ```
    
    This command takes your staging area and uses it for the commit. 
    
    <aside>
    ⚠️ **If you’ve made no changes since your last commit** (for instance, you run this command immediately after your previous commit), then ⇒
    
    your snapshot will look exactly the same, and all you’ll change is your commit message.
    
    </aside>
    
- **Case 2:** **To unstage a staged file**
    
    The nice part is that the `git status` reminds you how to undo changes to them.
    
    ```bash
    git restore --staged <file>
    ```
    
- **Case 3**: **Unmodifying a modified file**
    
    What if you realize that you don’t want to keep your changes to a file that you just modified? 
    
    Luckily, `git status` tells you how to do that too.
    
    ```bash
    git restore <file>
    ```
    

## Git Branching - THE KILLER FEATURE!

Branching means you diverge from the main line of development and continue to do work without messing with that main line. This is an expensive process in other Version Control Systems.

![Concept](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f285db09-b6a0-40ab-b5a4-0f958e60ee48/image.png)

Concept

<aside>
🚧 **What Happens in the Real World?**

The following scenario is common :

1. You are working on a website
2. The production branch (mostly main branch) is working fine.
3. Suddenly, you get an idea for a new feature. You talk to your boss regarding the same, and he/she agrees to it.
4. So, you create a new branch and work on it.

At this stage, you receive a call that there is a critical issue that needs to be fixed. You’ll do the following :

1. Switch back to your production branch (because you were working on the new feature branch).
2. Create a branch to fix the issue.
3. After it’s texted, merge the fix back to the production branch
4. Phew!
5. Now, you switch back to your new feature branch and continue working. 
</aside>

### Creating a new Branch

```bash
git branch <branch_name>
```

This command only **created** a new branch — **it didn't switch to that branch.**

### Switching Branches

```bash
# To switch to an existing branch
git checkout <branch_name>

# To create and switch to that branch
git checkout -b <branch_name>
```

### Merging

For merging a branch into an other one, all you have to do is check out the branch you wish to merge into and then run the following command :

```bash
# To switch/checkout to main branch(for eg)
git checkout main

# Merge 
git merge <branch_to_merge>
```

- **Case 1:** **Fast Forward Merge**
    
    Happens when the main branch (the one you are merging into) has no commits after the branch to merge was created.
    
    Let’s merge the branch(to be merge) into the main branch:
    
    ![carbon (8).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/28b3dd0e-7de6-4825-b691-a19ced90acc3/carbon_(8).png)
    
    ![03-04 Fast forward merge.svg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/62e3c028-96eb-43c8-81b0-f034a1fed1ff/03-04_Fast_forward_merge.svg)
    
- **Case 2:** **Three-way merge**
    
    This happens when the main branch has some commits after the branch to merge was created. 
    
    Here, a fast-forward is not possible.
    
    ![carbon (9).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c7af6bc8-cd62-4855-a29e-9f31a4bbe9c1/carbon_(9).png)
    
    ![05-06 Fast forward merge.svg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e8537b64-3961-49b5-98ff-b238131f21a6/05-06_Fast_forward_merge.svg)
    
    <aside>
    ✅ Git creates a new snapshot that results from this three-way merge and automatically creates a new commit that points to it. This is referred to as a merge commit, and is special in that it has more than one parent.
    
    </aside>
    
    ### Merge Conflicts
    
    If the two branches you're trying to merge both changed the same part of the same file, Git won't be able to figure out which version to use. When such a situation occurs, it stops right before the merge commit so that you can resolve the conflicts manually.
    
    ![carbon (11).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fc9b3063-286f-44a3-ab2e-0ed59a4617cc/carbon_(11).png)
    
    There you go! CONFLICT!!!
    
    ### Identifying the Conflict
    
    We can further gain insight of the situation by using the git status command.
    
    <aside>
    🔥 When you encounter a merge conflict, running the `git status` command shows you which files need to be resolved.
    
    </aside>
    
    ![Output](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/28a2e0d0-2010-4e26-8677-773d13148112/carbon_(12).png)
    
    Output
    
    The output from `git status` indicates that there are unmerged paths due to a conflict.
    
    ### Resolving Conflicts
    
    <aside>
    📌 The most direct way to resolve a merge conflict is to edit the conflicted file.
    
    </aside>
    
    Once the file has been edited use `git add` command to stage the new merged content. To finalize the merge create a new commit using the `git commit` command.
    
    Git will see that the conflict has been resolved and creates a new merge commit to finalize the merge.
    
    > [Extras](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts#:~:text=Git%20commands%20that%20can%20help%20resolve%20merge%20conflicts) on Resolving Conflicts
    > 
    

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/177d3739-c6d7-4b61-a962-0878ba4d631e/Untitled.png)