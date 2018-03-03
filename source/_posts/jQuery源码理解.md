---
title: jQuery源码理解
date: 2017-12-15 20:34:06
tags:
---

### 为什么 $() = jQuery()
原理：window.jQuery = window.$ = jQuery (jQuery就是闭包中的私有的函数)
```javascript
    $() =$jQuery
    var $oDiv = jQuery("#div") <==>$("#div")
```
###  $("box",context) 原理：
```javascript
var jQuery = function (selector,context){
    return new jQuery.fn.init(selector,context)
}
```
selector: 参数支持的类型：[string]选择器的类型 [object]js 原生的对象(把原生的对象转换为jQuery对象)
[function]回调函数(等价于$(document).ready...) / $(function(){})

context: 不传默认为document; 传递的是一个原生对象能够上下文，但是传递的是一个jQuery对象，他默认会把其重构为选择器）
返回值： 返回了一个jQuery 类的实例  (jQuery.fn)
```javascript
jQuery.fn = jQuery.prototype ={
    constructor = jQuery
}
jQuery.extend = jQuery.fn.extend = function(){
    jQuery.extend:把它当做一个普通的对象，在对象中增加了，extend 方法
    jQuery.fn.extend : 在它的原型上也增加了一个extend方法
}
```
###  jQuery选择器： 创建jQuery这个类的一个实例(jQuery对象)
```javascript
 $("box")===$("box") //false
```
###   在jQuery这个类的原型上定义了很多属性和方法，而是通过选择器获取的每一个实例都是可以调用这些方法：属性，css 文档操作，筛选....
```javascript
    $("*").css();
```
### jQuery当做一个普通的对象，在它自己的属性上增加了一个常用的方法： Ajax,工具 ...
$.ajax();

### extend : 扩展 
1,向jQuery属性名上扩展(把它当做一个对象), 主要用来完善类库的，给类库增加核心的方法
```javascript
jQuery.extend({
    aa:function(){
        console.log("aaa");
    }
})
$.aa();
```
2,  向jQuery的原型上扩展(把他当做一个类) 主要用来编写一些基于 jQuery插件
```javascript
jQuery.fn.extend({
    bb:function(){
        console.log("bbb")
    }
});
$().bb()
```