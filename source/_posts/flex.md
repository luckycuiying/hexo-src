---
title: flex布局
date: 2017-09-20 19:17:05
tags:  css 基础
---
### Flex布局是什么
Flex 是Flexible Box 的缩写，意为‘弹性布局’，任何一个容器都可以制定为Flex 布局
```css
// 块级元素指定Flex
.box{
    display:flex;
}
// 行内元素使用flex
 span{
    display:inline-flex
}
```
Webkit 内核的浏览器，必须加上-webkit前缀。
```css
    .box{
    display:-webkit-flex;
    display:flex;
}
```
注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。

### flex 常见的布局
1，子元素均分父盒子的宽度
```css
.box{
    display:flex;
}
.box .item{
    flex:1;
}
```
2, 左中右布局(左边和右边盒子宽度固定，中间的盒子根据内容自适应)
```css
.box{
    display: flex;
    width: 1000px;
    margin: 0 auto;
    height: 400px;
    background: #ccc;
    padding: 20px;
}
.box .item{
margin-left: 20px;
background:red;
border: 1px solid green;
}
.box li:nth-child(1){
    width:200px;
    margin-left:0;
    background:yellow;
}
 .box li:nth-child(2){
     flex:1;
     overflow: hidden;
 }
.box li:nth-last-child(1){
    width:200px;
}
```
[demo](/demos/2017/0921/index.html)
3，子元素这行问题
[demo](/demos/2017/0921/index.html)
### 属性划分
#### 针对容器(父盒子的属性) 大致有六个，如下：
1，flex-direction:row（->) | row-reverse(<-) | column (向上)| column-reverse（向下）;  项目排列的方向
2，flex-wrap : nowrap（默认不换行） | wrap （换行，第一行在上面）| wrap-revers （换行，第一行在下面） ; 换行问题
3，flex-flow :属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap;flex-direction || flex-wrap;
4，justify-content:flex-start(左) | flex-end(右) | center(居中) | space-between(两端对齐)| space-around(项目两侧的间隔相等); 项目在主轴上(水平方向)的对齐方式。
5，align-items : flex-start(顶部) | flex-end(底部) | center(垂直居中) | baseline(第一行文字的基线对齐) | stretch(默认值如果项目未设置高度或设为auto，将占满整个容器的高度。); 垂直方向的对齐(容器的垂直反方向的对齐)
6，align-content : flex-start | flex-end | center | space-between(与交叉轴两端对齐，轴线之间的间隔平均分布。) | space-around(每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。)| stretch;
#### 针对子元素的（item)
1,order : 通过 值得大小改变子元素在文档流里的位置。(值： 1，2，3 数值来表示)
2,flex-grow : 义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。 默认值 0 ；
3,flex-shrink :同上相反，缩小比例。如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
4,flex-basis : 子元素占据固定的空间。
5,flex : 属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
6,align-self :auto | flex-start | flex-end | center | baseline | stretch; 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
###  具体使用参考文章
[具体使用参考](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)