---
title: npm模块安装机制简介
date: 2017-10-31 20:00:17
tags: 工具
---

### npm 是Node 的模块管理器，功能极其强大。
![图片位置](/assets/blogimg/npm.jpg)
### 安装别人写好的模块
```html 
$mpm install
```
#### npm install 命令是用来安装模块到node_modules 目录
例如：
 $ npm install <文件名>
 过程是安装之前 npm install 会先检查，node_modules 目录之中是否已经存在指定的模块。
 如果存在，就不在重新安装了，即使远程仓库已经有了一个新版版本，也是如此。
 如果希望一个模块不管是够安装过，npm 都要强制重新安装可以使用
 $ nom install <模块名> --force || $npm install <模块名> -f
####  npm updata 跟新已安装模块的命令
    $ npm updata <模块名> 它会先到远程仓库查询最新的版本，然后在查询本地版本，如果本地版不存在或者远程版本比较新，就会安装

####  缓存目录
npm install或npm update命令，从 registry 下载压缩包之后，都存放在本地的缓存目录。
这个缓存目录，在 Linux 或 Mac 默认是用户主目录下的.npm目录，在 Windows 默认是%AppData%/npm-cache。通过配置命令，可以查看这个目录的具体位置。

$ npm config get cache
$HOME/.npm
你最好浏览一下这个目录。

$ ls ~/.npm 
# 或者
$ npm cache ls
你会看到里面存放着大量的模块，储存结构是{cache}/{name}/{version}。

$ npm cache ls react
~/.npm/react/react/0.14.6/
~/.npm/react/react/0.14.6/package.tgz
~/.npm/react/react/0.14.6/package/
~/.npm/react/react/0.14.6/package/package.json
每个模块的每个版本，都有一个自己的子目录，里面是代码的压缩包package.tgz文件，以及一个描述文件package/package.json。
除此之外，还会生成一个{cache}/{hostname}/{path}/.cache.json文件。比如，从 npm 官方仓库下载 react 模块的时候，就会生成registry.npmjs.org/react/.cache.json文件。
这个文件保存的是，所有版本的信息，以及该模块最近修改的时间和最新一次请求时服务器返回的 ETag 。

{
  "time":{
    "modified":"2016-01-06T23:52:45.571Z",
    // ...
  },
  "_etag":"\"7S37I0775YLURCFIO8N85FO0F\""
}
对于一些不是很关键的操作（比如npm search或npm view），npm会先查看.cache.json里面的模块最近更新时间，跟当前时间的差距，是不是在可接受的范围之内。如果是的，就不再向远程仓库发出请求，而是直接返回.cache.json的数据。
.npm目录保存着大量文件，清空它的命令如下。

$ rm -rf ~/.npm/*
# 或者
$ npm cache clean

#### 模块的安装过程
总结一下，Node模块的安装过程是这样的。
发出npm install命令
npm 向 registry 查询模块压缩包的网址
下载压缩包，存放在~/.npm目录
解压压缩包到当前项目的node_modules目录
注意，一个模块安装以后，本地其实保存了两份。一份是~/.npm目录下的压缩包，另一份是node_modules目录下解压后的代码。
但是，运行npm install的时候，只会检查node_modules目录，而不会检查~/.npm目录。也就是说，如果一个模块在～/.npm下有压缩包，但是没有安装在node_modules目录中，npm 依然会从远程仓库下载一次新的压缩包。
这种行为固然可以保证总是取得最新的代码，但有时并不是我们想要的。最大的问题是，它会极大地影响安装速度。即使某个模块的压缩包就在缓存目录中，也要去远程仓库下载，这怎么可能不慢呢？
另外，有些场合没有网络（比如飞机上），但是你想安装的模块，明明就在缓存目录之中，这时也无法安装。
