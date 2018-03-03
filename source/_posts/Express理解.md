---
title: Express理解
date: 2017-08-09 10:33:44
tags:  js
---
#### 一，Express 快速创建程序框架的步
[Express快速生成框架的步骤](http://expressjs.com/zh-cn/starter/generator.html)
<!-- more -->
### 二，Express 的理解及应用
1，Express 是基于node.js平台web应用开发框架。主要用在后台数据的支持可以很快的搭建一整套网站的开发。
2,以html5 离线缓存的为例:
第一，用express 快速创建程序框架
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.hjs
    ├── index.hjs
    └── layout.hjs

##### 然后在框架的views 创建 cookie.hjs 页面 在routes里的index.js 和users.js空间里添加路由(及页面的地址)例如 index.js为例：


特别注意 设置了
res.cookie('name', 'koby', { domain: '.example.com', path: '/admin', secure: true });
name: 类型为String
value: 类型为String和Object，如果是Object会在cookie.serialize()之前自动调用JSON.stringify对其进行处理
Option: 类型为对象，可使用的属性如下
    domain：cookie在什么域名下有效，类型为String,。默认为网站域名
    expires: cookie过期时间，类型为Date。如果没有设置或者设置为0，那么该cookie只在这个这个session有效，即关闭浏览器后，这个cookie会被浏览器删除。
    httpOnly: 只能被web server访问，类型Boolean。
    maxAge: 实现expires的功能，设置cookie过期的时间，类型为String，指明从现在开始，多少毫秒以后，cookie到期。
    path: cookie在什么路径下有效，默认为'/'，类型为String
    secure：只能被HTTPS使用，类型Boolean，默认为false
    signed:使用签名，类型Boolean，默认为false。`express会使用req.secret来完成签名，需要cookie-parser配合使用`
   

```javascript
//后端设置cookie 
router.get('/storage', function(req, res, next) {
    //基本设置 按需求设置需要的参数 在这里主要测试httpOnly 这参数的作用
    res.cookie('name', 'koby', {maxAge:90000000,httpOnly: true });
    res.render('cookie',{
        title:'cookie',name:req.cookies.name
    });
});
//前端获取和设置等 
//前提是必须先引用docCookies组件。具体的引用方式根据项目的打包工具而灵活引用
$(function(){
    $('#cookieGet').click(function(event) {
        var name = docCookies.getItem('name');
        console.log(name);
        var name = docCookies.setItem('name','lisi');
        var name = docCookies.removeItem('name');

    });
})
//但因为本案例是测试httpOnly的参数作用以上代码是无法获取到cookie值的。
//httpOnly: true 只能后端更改和使用 前端是无法获取到的。
//httpOnly: false 或是不设置这一参数。通过以上方式前端是可以获取到cookie值得。可以改变cookie。
```

####  localStorage和sessonStorage
[相关不错的文章](http://blog.csdn.net/a727911438/article/details/54290931)
localStorage：
（1）特性：
     域内安全、永久保存。即客户端或浏览器中来自同一域名的所有页面都可访问localStorage数据且数据除了删除否则永久保存，但客户端或浏览器之间的数据相互独立。
（2）四个函数：
     A. localStorage.setItem      存储数据信息到本地
     B. localStorage.getItem      读取本地存储的信息
     C. localStorage.removeItem   删除本地存储的信息
     D. localStorage.clear        清空所以存储的信息
sessonStorage：
（1）特性：
   会话控制、短期保存。会话概念与服务器端的session概念相似，短期保存指窗口或浏览器或客户端关闭后自动消除数据。(理解为浏览关闭后再打开后为一个回话控制)
（2）四个函数：
   A. sessionStorage.setItem       存储数据信息到本地
   B. sessionStorage.getItem       读取本地存储的信息
   C. sessionStorage.removeItem    删除本地存储的信息
   D. sessionStorage.clear         清空所以存储的信息     
案例：
``` html
<!DOCTYPE html>
<html>
  <head>
    <title>{{ title }}</title>
    <link rel='tylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1>{{ title }}</h1>
    <p>Welcome to {{ title }}</p>
    {{! http://blog.csdn.net/a727911438/article/details/54290931 }}
    <div id="localStorageSet">localStorageSet</div>
    <div id="localStorageGet">localStorageGet</div>
    <div id="localStorageRemove">localStorageRemove</div>
    <div id="localStorageClear">localStorageClear</div>
    <div id="sessionStorageSet">sessionStorageSet</div>
    <div id="sessionStorageGet">sessionStorageGet</div>
    <div id="sessionStorageRemove">sessionStorageRemove</div>
    <div id="sessionStorageClear">sessionStorageClear</div>
    <div id="cookieSet">cookieSet</div>
    <div id="cookieGet">cookieGet</div>
    <script src="//cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>
    <script src="/javascripts/docCookies.js"></script>
    <script src="/javascripts/cookie.js"></script>
  </body>
</html>
```

```javascript

$(function(){
    $('#localStorageSet').click(function(event) {
        localStorage.setItem('name','lisi');
    });
    $('#localStorageGet').click(function(event) {
        var get = localStorage.getItem('name');
        alert(get);
    });
    $('#localStorageRemove').click(function(event) {
        localStorage.removeItem('name');
    });
    $('#localStorageClear').click(function(event) {
        localStorage.clear();
    });
    $('#cookieGet').click(function(event) {
        var name = docCookies.getItem('name');
        console.log(name);
    });
})
```
