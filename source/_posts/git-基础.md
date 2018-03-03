---
title: git 基础
date: 2017-04-21 10:46:31
tags: 工具使用技巧
---

### Git是什么
是一个免费的、分布式的版本控制工具，或是一个强调了速度快的源代码管理工具。
### git安装
    1，查看是否安装git 命令： git 
### 介绍一下Git的基本命令和操作
##### 1,Git通常有两种方式来进行初始化:
git clone: 这是较为简单的一种初始化方式
	当你已经有一个远程的Git版本库，只需要在本地克隆一份，例如'git clone git://github.com/someone/some_project.git some_project'命令就是将'git://github.com/someone/some_project.git'这个URL地址的远程版 本库完全克隆到本地some_project目录下面
git init和git remote：
	这种方式稍微复杂一些，当你本地创建了一个工作目录，你可以进入这个目录，
    使用'git init'命令进行初始化，Git以后就会对该目录下的文件进行版本控制，
    这时候如果你需要将它放到远程服务器上，可以在远程服务器上创建一个目录，并把 可访问的URL记录下来，
    此时你就可以利用'git remote add'命令来增加一个远程服务器端，
    例如'git remote add origin git://github.com/someone/another_project.git'这条命令就会增加URL地址为'git: //github.com/someone/another_project.git'，名称为origin的远程服务器，以后提交代码的时候只需要使用 origin别名即可
##### 2,Git的基本命令 
git init 初始化
克隆仓库的命令格式为 git clone [url]
	案例：git clone git://github.com/schacon/grit.git
git status 检查当前文件状态
git diff 查看这次修改的内容和之前版本的内容(命令行内比较) ;git df (是调图形界面比较)
git add . 添加已修改文件(添加和修改的)
git add . -A(所有修改和添加删除的文件)
git diff --cached (添加后在比较时命令)
git commit -m 'initial project version' 提交已修改的文件' 备注主要需改的内容  '
git log 查看提交历史
git pull origin master 获取远程别人提交的代码
git push origin master  把自己的代码推送到远程服务器。
##### 查看分支命令
git branch  //列出所有本地分支
git branch -r //列出所有远程分支
git remove -v (查看所有项目)
// 列出所有本地分支和远程分支
git branch -a 查看远程的所有分支名
##### 新建分支命令
创建新分支的前提是切回master分支获取最新的master(git pull origin master)
创建本地分支：git branch "分支名"/master (还在本分支上)
切换分支： git checkout [name] （git co - 返回上一个分支）
创建新分支并立即切换到新分支： git checkout -b [name]
推送到远程： git push
##### 删除分支
【git 删除本地分支】
git branch -d（分支名）
【git 删除远程分支】
git push origin --delete [分支名]  (origin 后面有空格)
git branch -dr [remote/branch]


##### 合并分支命令
前提是切回master分支获取最新的master(git pull origin master)然后在切回当前分支执行(git merge master)
1, git checkout master
2, git pull origin master
3, git checkout - (返回当前分支)
4, git merge master(合并)
5, git pull
6, git push
##### 撤销修改
第一种没有提交到暂存区
1，git status
2,git checkout -- file可以丢弃工作区的修改：
```javascript
git checkout -- 文件名 //把工作区的修改全部撤销
第二种 已经提交到暂存区，需要撤销 但是还好没有Git commit, 撤销步骤
1，git reset HEAD 文件名（. 代表所有文件）
2，git checkout -- 文件名（同上）
##### 删除文件
1，删除工作区文件，并且将这次删除放入暂存区
git rm [file1][file2]...
2，rm 文件名
# 改名文件，并且将这个改名放入暂存区
git mv [file-original] [file-renamed]


