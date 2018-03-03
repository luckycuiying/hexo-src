---
title: css3学习记录
date: 2017-07-28 21:53:02
tags:  css

---

### 1, object-fit 
css属性指的是：指定替换元素的内容应该如何适应到其使用的高度和宽度确定的框。
语法： object-fit: fill(填写) || contain(包含) || cover(覆盖)|| none(没有) || scale-dowm(比例缩小)  等关键字来指定
fill： 被替换的内容的大小，以填补该元素的内容框：对象的具体对象的大小是元素的使用宽度和高度。
contain: 被替换的内容的大小，为自身宽高比不变，适应该元素的内容框的大小：它的具体对象的大小被解析为对元素的使用宽度和高度的含有约束。
cover
被替换的内容的尺寸却使元件的整个内容框，以保持其长宽比其具体的对象的大小被解析为针对元素的使用的宽度和高度的盖约束。
none
被替换的内容的尺寸却使元件的整个内容框，以保持其长宽比其具体的对象的大小被解析为针对元素的使用的宽度和高度的盖约束。
scale-down
内容的尺寸仿佛none或contain指定了，取将导致更小的具体对象的大小。

### 1,圆角
```css 
.box_round{
    -moz-border-radius: 30px; /* FF1+ */
　　 -webkit-border-radius: 30px; /* Saf3+, Chrome */
　　 border-radius: 30px; /* Opera 10.5, IE 9 */
}
```
### 2, 盒子阴影（box-shadow)
```css
       -moz-box-shadow: 3px 3px 4px #ffffff; /* FF3.5+ */
    　　-webkit-box-shadow: 3px 3px 4px #ffffff; /* Saf3.0+, Chrome */
    　　box-shadow: 3px 3px 4px #ffffff; /* Opera 10.5, IE 9.0 */
    　　filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=3px, OffY=3px, Color='#ffffff'); /* IE6,IE7 */
    　　-ms-filter: "progid:DXImageTransform.Microsoft.dropshadow(OffX=3px, OffY=3px, Color='#ffffff')"; /* IE8 */
```
 四个值：含义分别为：x轴偏移值、y轴偏移值、阴影的模糊度、以及阴影颜色。
IE 6~8使用其独有的滤镜，需要设置三个参数：offX（X轴偏移值）、offY（Y轴偏移值）、Color（阴影颜色）。
### 3, 线性渐变
```css
.box_gradient {
　　background-image: -moz-linear-gradient(top, #444444, #999999); /* FF3.6 */
　　background-image: -webkit-gradient(linear,left top, left bottom, color-stop(0, #444444),color-stop(1, #999999)); /* Saf4+, Chrome */
　　filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#444444', endColorstr='#999999', GradientType='0'); /* IE6,IE7 */
　　-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#444444', endColorstr='#999999',GradientType='0')"; /* IE8 */
}
```
先看Firefox : -moz-linear-gradient(top, #444444, #999999);
三个参数。第一个参数表示线性渐变的方向，top是从上到下、left是从左到右，如果定义成left top，
那就是从左上角到右下角。第二个和第三个参数分别是起点颜色和终点颜色。你还可以在它们之间插入更多的参数，表示多种颜色的渐变。
谷歌：
-webkit-gradient(linear,left top, left bottom, color-stop(0, #444444),color-stop(1, #999999));
-webkit-gradient是webkit引擎对渐变的实现，一共有五个参数。第一个参数表示渐变类型（type），可以是linear（线性渐变）或者radial（辐射渐变）。第二个参数和第三个参数，都是一对值，分别表示渐变起点和终点。这对值可以用坐标形式表示，也可以用关键值表示，比如left top（左上角）和left bottom（左下角）。第四个和第五个参数，分别是两个color-stop函数。
color-stop函数接受两个参数，第一个表示渐变的位置，0为起点，0.5为中点，1为结束点；第二个表示该点的颜色。

### 四， 透明
```css 
.box_rgba {
　　background-color: #B4B490;
　　background:transparent;
　　filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#99B4B490',endColorstr='#99B4B490'); /* IE6,IE7 */
　　-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#99B4B490',endColorstr='#99B4B490')"; /* IE8 */
　　zoom: 1;
　　background-color: rgba(180, 180, 144, 0.6); /* FF3+, Saf3+, Opera 10.10+, Chrome */
}
```
除了IE，其他浏览器几乎都支持rgba函数。它有四个参数，前三个为一种颜色的RGB值，第四个为透明度，这里设为0.6。
