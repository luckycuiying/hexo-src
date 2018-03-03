---
title: my hexo 笔记
date: 2017-04-17 17:38:18
tags:
- javaScript
categories:
- 前端
---
看到一篇不错的文章[手把手教你使用Hexo + Github Pages搭建个人独立博客](https://linghucong.js.org/2016/04/15/2016-04-15-hexo-github-pages-blog/)
[hexo常用的命令](https://hexo.io/zh-cn/docs/commands.html)
<!-- more -->
### 相关知识: ###
#### 1.MaHua是什么?
一个在线编辑markdown文档的编辑器

向Mac下优秀的markdown编辑器mou致敬
### Markdown 简明语法
Markdown是一种轻量级的标记语言，语法简单，可以排出简洁的表现界面。
## 一，列表
+ 支持表格、代码块、LaTeX数学公式、目录
- 可以很方便的插入到 Gmail、Evernote
* 很容易转为 HTML 、PDF 文件
* 可以自定义 css 文件，写出更直观优雅的笔记
	* 注：按照Markdown标准语法描述，如果你的 Markdown 
	文本未能正确显示，很可能是在标记符号和文本间忘了保留一个字符的空格
```
	# 一级标题
	## 二级标题
	### 三级标题
	#### 四级标题
	##### 五级标题
	###### 六级标题
```

## 二，标题
```
	# 一级标题
	## 二级标题
	### 三级标题
	#### 四级标题
	##### 五级标题
	###### 六级标题
```
### 结果 ：
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

### 三，图片和链接
在 Markdown 中，链接用 [显示文本](链接地址)的语法描述，例如：
[简书](http://jianshu.io)
可以用类似的语法描述图片（前面多了一个  ! ）：
![](http://ww4.sinaimg.cn/bmiddle/aa397b7fjw1dzplsgpdw5j.jpg)

### 四, 引用
> 我是被引用的内容 =w=

### 五、加粗和斜体，删除线
	**两个连续星号包围一段文本，就把这段加粗啦**
	*两个单独星号包围一段文本，就让文本倾斜咯*
	_或者用下划线来倾斜_
	~~删除线~~
两个星号包围一段文本，就把这段加粗啦 
两个单独星号包围一段文本，就让文本倾斜咯
或者用下划线来倾斜
删除线
这里需要注意，*也被用于描述列表，为区别开，倾斜中的 * 和文本间不能留有空格。

### 六、表格

dog | bird | cat 
----|:----:|----:
foo | foo | foo
bar | bar | bar
baz | baz | baz

绘制表格 需要在前后均保留一行空白。由-|-|- 的结构分割表头和表身，请注意上述代码中的:，控制了单列表格的对齐方向。（也可以用 | - | - | - | 的结构，显得更加整洁）

### 七、分页线和换行
---
三个以上的 -可以描绘一根分页线 （注意前后要空行）

不分段换行：行末加两个空格，直接回车
分段换行：两个或多个回车（用空行来换行）

### 八、代码块
行内代码用 `int sum = b + c`
这里用两个`将 int sum = b+c描述为一段将背景标红的行内代码。

行内代码用 ` int sum = b + c `

行内代码用 int sum = b + c 又被上下的 ``` 标记，变成一段灰色的代码块。
段前空一行，缩进4个空格，然后书写代码，也可以自动转为代码块。
此外，还可以自定义 css 文件，以 ```ruby 的开头描述“这是一段 ruby 代码”，不同的描述可以适配不同的高亮。（ Raysonte代码高亮示例）

```
# [详情查看](http://www.jianshu.com/p/50ba0aad0a1a)
# [高级详情查看](https://www.zybuluo.com/mdeditor)
```javascript
	Zepto(function($){
        // 点击穿透
        var $close = $('#closePopup');
        var $popup = $('#popupLayer');
        var $under = $('#underLayer');
        var $mask = $('#bgMask');

        $close.on('tap', function(e){
            $popup.hide();
            $mask.hide();
        });

        $under.on('tap', function(){
            alert('underLayer clicked');
        });

    });
```
2.代码html展示实验
```html
	<div class="powered-by">
	由 <a class="theme-link" href="https://hexo.io">Hexo</a> 强力驱动
	</div>
	<div class="theme-info">
	主题 -
	<a class="theme-link" href="https://github.com/iissnan/hexo-theme-next">
	NexT.Pisces
	</a>
	</div>
```
3.纯文本展示
```shell
	$ cd d:/hexo
	$ npm install hexo-cli -g
	$ hexo init blog
	$ cd blog
	$ npm install
	$ hexo g # 或者hexo generate
	$ hexo s # 或者hexo server，可以在http://localhost:4000/ 查看
```

        

        
 
