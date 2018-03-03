---
title: 锋利的JQuery总结（一）
date: 2017-05-04 11:34:16
tags:
---

### 一，JQuery的环境配置
1,JQuery分为压缩版和非压缩版
2,$=JQuery
3,$(document).ready(function(){});相当于$(function(){});
4,//注释用
5,DOM对象与JQuery对象的相互转换
    DOM对象转成jQuery对象 用$()把DOM对象包装起来就变成jQuery对象了。例如：
```javascript
    var v = document.getElementById('v');
    var $v = $(v);即可
```
jQuery对象转换成DOM对象有两种方法即:[index]和.get(index)
    ① jQuery是数组对象可以通过[index]的方法来得到相对应的DOM对象。
    例如：
```javascript
     var $v = $('#v');
     var v =$v[0];
```
 ②jQuery本身提供的.get(index)方法得到相应的DOM对象
```javascript
    var $v = ('#v');
    var v = $v.get(0);
```
#### DOM对象才能使用DOM的方法，jQuery对象是不能使用DOM中的方法。
6,与其他JS库冲突的解决(主要是$符号谁生效的问题)
    【1】在其他库之后导入
        使用前：先调用jQuery.noconflict();------$会被释放给jQuery库。
    【2】在其他库之前导入
        就直接使用$()就好N了。

### 二, jQuery选择器
1, Css是找到元素后添加样式，jQuery是找到元素后添加行为。
2, jQuery选择器的优势
    【1】简洁的书写
    【2】支持CSS1到CSS3的选择器
    【3】完善的处理机制，即使元素不存在也不会像JS一样报错
3, 判断某元素是否存在的方法
    if($('#tt').length>0)或者if($("#tt")[0])  不是要用if($('#tt')!=null),因为永远不为空

4, 原生JS中查找或获取元素的方法
```javascript
    getElementById("id")  //如 id="one"
    getElementByName("name") //如多选按钮的 name="check"
    getElementByTag("tagname")  //如<a>、<span>等html标签
```
    
5, 选择器的分类
> * 基本选择器
> * 层次选择器
> * 过滤选择器
> * 表单选择器

6, 基本选择器

<1> $('#div') id选择器
<2> $('.div') class选择器
<3> $('p') 标签选择器
<4> $('*') 选择所有元素
<5>$("div,span,.myclass") 组合

7、层次选择器

<1>$("div span")  选择div中  span后代元素
<2>$(“div >span”) 选择div中span的子元素
<3>$(“.one + div”)选one的下一个div元素————相当于$(“.one”).next("div")
<4>$("#two ~ div") 选id为two的后面所有<div>兄弟元素————相当于$(“#two”).nextAll("div");

8、过滤选择器

<1>$(" div:first") 所有div元素中第一个div 
<2>$(" div:last") 所有div元素中最后一个div
<3>$(" input:not(.myclass)") 不是 class为myclass 的<input>元素
<4>$(" input:even") 索引为偶数的input
<5>$(" input:odd")索引为奇数的input
<6>$("input:eq(1)") 索引为1的input——————index从0开始
<7>$("input:gt(1)")  索引大于1的input
<8>$("input :lt(1)") 索引小于1的input
<9>$(":header")  所有的<h1> <h2> <h3>......
<10>$("div:animated") 正在执行动画的<div>
<11>$("div:contains('我')")   含有文本‘我’的div
<12>$("div:empty")  空的div
<13>$(" div :has(p)")   含有<p>的<div>
<14>$("div:parent")       含有子元素的<div>
<15> $(":hidden")    所有不可见元素
<16>$("div:visible")   所有的可见的<div>
<17>$(" div[id]")      拥有id属性的<div>
<18>$(" div[title=test]")    title为test的<div>
<19> $ ("div [title!=test]") title不为test的<div>
<20> $(" div[title^=test]")    title以“test”开头的div
<21>$ ("div [title$=test]")    title以“test”结束的div
<22>$(" div[title*=test]")          title含有test的div
<23>$("div[id][title$=test]")     组合多条件选择
<24>:nth-child(index/even/odd/equation)  ————————index从1开始
<25>:first-child
<26>:last-child
<27> :only-child
<28> $("#form1 :enabled")            id为“form1”的表单内所有可用的元素
<29>$("#form2:disable")
<30>$("input:checked")         所有被选中的<input>元素
<31>$("select:selected")       所有被选中的<select>元素
<32>$(":input")                   所有<input> <textarea><select><button> 元素
<33>$(":text")                    所有单行文本框
<34>$(":password")           所有密码框
<35>$(":radio")                   所有单选框 
<36>$(":checkbox")             所有复选框
<37>$(":submit")               所有的提交按钮
<38>$(":image")          所有图像按钮
<39>$(":reset")              所有重置按钮
<40>$(":button")    所有按钮
<41>$(":file")            所有上传域
<42>$(":hidden")            所有不可见元素

 9、.click()事件中添加return false 可以使链接不跳转

10、添加与去除样式
    removeClass()
    addClass()
    //这两个可以用一个 **toggleClass()** 代替


11、要时刻记住，如果用户禁用了javascript后，你的页面是不能正常处理

12、toggle()方法交替一组鼠标点击的动作

hover()方法交替一组鼠标滑过的动作

13、end() 方法可以返回到上一个可以操作的元素

14 .closest(selector) :从元素本身开始，在DOM 树上逐级向上级元素匹配，并返回最先匹配的祖先元素。
    selector: 匹配元素的选择器字符串。，例如:标签ul，li, p, div ....; class ,id 等。 
##### .closest( selector [, context ] )
   context 如果提供这个参数，那么在这个DOM元素内查找匹配的元素，可以使用这个参数减小查找范围，如果在这个在这个DOM元素内没有查找到匹配的元素，那么返回空的jQuery对象。可选参数
#### .closest( jQuery object )
    jQuery object
    类型: jQuery
    一个用于匹配元素的jQuery对象。
##### .closest( element )
    element
    类型: Element
    一个用于匹配元素的DOM元素。
![图片位置](/assets/blogimg/closest.png)
### 15, .index() 匹配的元素中搜索给定元素的索引值，从0开始计数。






























