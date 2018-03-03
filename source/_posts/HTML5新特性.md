---
title: HTML5新特性
date: 2017-12-24 11:34:58
tags:
---
###  HTML5基本概述
HTML: 超文本标记语言（页面中不仅仅只有文字，而且可以呈现出图片，音视频等媒体资源）
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>Title</title>
</head>
<body>

</body>
</html>
```
XHTML:它是HTML比较规范严谨的一代版本
文档声明比较复杂，需要特殊强调当前的页面需要严谨一些
```html
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html
        PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <title>Title</title>
</head>
<body>

</body>
</html>

```
XML: 可以扩展的标记语言（HTML中使用的标签都是W3C标准中规定的，XML允许我们自己扩展标签的）,他的作用不是用来写页面结构的
而是用来存储一些数据的（可以扩展的标签作为标识，清晰明了的展示出数据结构。。。）
```html
<root>
    <student>
        <name>李四</name>
        <age>30</age>
    </student>

    <student>
        <name>王五</name>
        <age>27</age>
    </student>
</root>
```
HTML5: 当前HTML 最新的一代版本， 也是非常成功的一代版本，目前市场上基本都是基HTML5规范进行开发(他相对于传统的HTML增加了更多一些有助于开发的内容)
```html
<!DOCTYPE html>
<html lang='en'><!--声明页面的语言模式：english，如果页面中出现了英文单词，浏览器会自主发起是否翻译的功能-->
    <head>
        <!--指定当前页面的编码格式是国际统一编码格式：UTF-8  GB2312中国编码...-->
        <meta charset='UTF-8'>
    </head>
    <body>

    </body>
</html>
```
### HTML5提供的新语法规范
1, 对原有语义化标签的升级
标签语义化： 每一个html标签都有自己特殊的含义，在搭建页面结构的时候，应该让合理的标签做合适事情。
2, HTML5 中新增的一些语义化标签
```html
articel:文章区域
header: 头部区域
footer:尾部区域
main : 主体内容
section : 普通内容区域
figure: 配图区域
figcaption:配图说明
aside:与主题无关的内容（一般用来放广告的区域）
nav:导航区域
...
都是块元素
```
3,HTML5 新增加的标记标签
```html
mark:用来标记需要高亮显示的文本
time:用来标记日期文本
``` 
4, HTML5 对于原标签语义化的调整
```html
strong:之前是加粗，现在重点是朗读（加粗的效果还有，但是语义不一样的）
small: 之前是变小，现在是附属细则（效果变小）
hr: 之前是一条直线，现在是分割线，用来分割两个区域。

```
1.autocomplete: 自动完成填充,会记录之前输入的内容,给你自动提示
2.autofocus 打开页面自动获取鼠标的焦点
3.form='form的id':一个form之外的表单元素也让其属于这个form
4.width height :只存在域input 的type是image的表单元素
5.multiple:可以选择多个文件<input type="file" multiple>
6.required:必填的
7.input的新type值文字:
```html
<input type="text"> 
<br>网址:<input type="url"> 
<br>邮箱:<input type="email"> 
<br>密码:<input type="password">
<br>数字:<input type="number" max="10" min="0" step="3"/><br>色卡:<input type="color">  
<br>电话:<input type="tel"> 
<br>日期:<input type="date"><br>
日期:<input type="time">
<br>日期:<input type="datetime-local">
<br>日期:<input type="month"><br>日期:<input type="week">
<br>范围:<input type="range">
<br>重置:<input type="reset"><br>
提交:<input type="submit">pattern="":正则进行校验novalidate:不做校验

```

### 新增标签的兼容问题
解决： 在当前页面的head中（css后），我们导入一个JS 插件： html5.min.js 它就是用来把页面内所有不兼容的H5语义化标签进行兼容处理：
1》 把页面内的所有不兼容的标签进行替换
2》把css 中使用标签选择器设置的样式（H5标签也替换成其他方式
标准浏览器内不用引用
```html
<head>

    <!--[if lt IE 9]>
    <script src="js/html5.min.js"></script>
    <![endif]-->
</head>
<!--条件注释中的代码要严格区分大小写以及空格等细节问题-->
```
### HTML5 表单的新特性
一 传统表单类型
```html
form 
input:text, password,submit,reset,button,radio,checkbox,file,hidden
button
select
label
textarea
....
```
二  HTML5 表单的新特性
1, 给input 设置了很多新的类型
input:search,url,email,tel,number,range,color,date,time,dataTime ....
2, 优势
作用提供更加强大的功能，方便开发。
在移动端使用对应的input类型，当用户输入的时候可以调取出对应的虚拟键盘
部分类型还提供了表单验证
3,input 增加了一个属性： placeholder ,给表单框设置默认信息提示
4, 二级下拉框（select是一级下拉框）
```html
<input type="text" id="department" list="departmentList">
<datalist id="departmentList">
    <option value="市场部">市场部</option>
    <option value="技术部">技术部</option>
    <option value="总裁办">总裁办</option>
</datalist>
```
H5中的表单验证（内置规则不是特别好），所以真实项目中的表单验证依然延续传统的正则验证完成

###  html5 新曾其他的标签
一,增加的媒体： 视频：audio  音频：video
```javascript
<video src="movie.ogg" controls="controls">如果浏览器不支持 video 标签。就会显示这里面的内容</video>


```
1,优缺点：
传统的音视频播放是基于flash来完成的，需要浏览器中安装 adobe flash player 插件

现在只需要基于audio或者video播放即可，但是对于音视频的格式有限制，对于浏览器也有限制

移动端对于flash的支持不好，但是基本上都支持audio和video 
PC端的IE浏览器（低版本）不支持audio和video，但是支持flash
二 绘画 canvas
它是一个画布，允许我们在JS中通过代码绘制图形以及实现一些好玩的动画

百度统计图插件：Echarts就是基于canvas开发的
三，提供了很多强大的JS API

API：Application Programming Interface 应用程序接口（凡是提供一个共别人调取使用的都可以称之为接口,例如：使用AJAX从服务器端获取数据，需要一个URL地址，此地址就是一个API，
浏览器提供给我们很多常用的方法，每一个方法都可以叫做API）
四:本地存储
webStorage:
localStorage: 本地信息存储
在没有H5本地存储之前，我们都使用cookie做的本地存储
区别：

localStorage,只要使用浏览器打开,存在里面的内容会被永久存储,关闭页面再打开任然存在,在其他的网页也可以获取
```javascript
localStorage.lc="去哪儿";
alert(localStorage.zf);
localStorage.setItem("QQ","647812808");
localStorage.removeItem("QQ");

//实现一个查看当前浏览次数的方法
if(!localStorage.getItem("n")){
    localStorage.setItem("n",1)
    }else {
        localStorage.setItem("n",parseInt(localStorage.getItem("n"))+1)
    }
    alert("这是第"+localStorage.getItem("n")+"次")
```
sessionStorage: 本地回话存储
```javascript
//sessionStorage:存储在浏览器上,只要浏览器不关闭,就会有,关闭浏览器就是消失,但是在其他的页面中获取不到
if(!sessionStorage.getItem("code")){
    sessionStorage.setItem("code",1)
}else {
    sessionStorage.setItem("code",parseInt(sessionStorage.getItem("code"))+1)
}
```

五: 获取本机地理位置

通过H5可以获取当前用户地理位置（精度、纬度、精准度…），再结合第三方地图（高德地图、百度地图、腾讯地图…）API接口，实现一些生活服务的推荐等
六:提供了新的通信方式：websocket
想要实现实时通讯类的产品，基本上现在都是基于socket.io这个框架来完成的
七：提供操作手机硬件功能的API
调取手机的重力感应器，实现摇一摇，或者实现一些小游戏 
调取手机的摄像头或者通讯录
不是所有的手机浏览器都支持这些功能，即时支持这些功能的浏览器，在实现效果上也是不理想的（不稳定、卡顿等）
八：H5离线缓存：manifest
第一次连网请求完成页面，把信息缓存到本地，下一次即时断网的情况下，也可以看到上一次的信息






