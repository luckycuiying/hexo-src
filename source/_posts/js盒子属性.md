---
title: js盒子属性
date: 2017-12-06 21:51:16
tags:
---

### JS盒子的十三个属性如下：
#### client 系列的
1，clientWidth: 内容的宽度+左右填充
2，clientHeight: 内容的高度+上下填充（和内容溢出没有关系）
3，clientLeft: 左边框的宽度（border[left/top]width)
4, clientTop: 上边框的宽度
内容的宽度和高度： 我们设置width/height这两个样式就是内容的宽和高；如果没有设置height值，容器的高度会根据里面的内容自己进行适应

#### offset 系列的
5，offsetParent:当前父级参照物
6，offsetWidth: 1，clientWidth+左右边框 （和内容溢出没有关系）
7，offsetHeight: 1，clientWidth+上下边框（和内容溢出没有关系）
8，offsetLeft:当前元素的外边框距离父级参照物的左边内边距的偏移量
9, offsetTop: 当前元素的外边框距离父级参照物的上边内边距的偏移量

#### scroll 系列的

一，scrollWidth /scrollHeight :和我们的内容溢出有关系。
1》 在内容没有溢出的情况下他的值和 clientWidth/clientHeight 一样。
2》 在有内容溢出的情况下获取结果如下规则：
 scrollWidth: 真是内容的宽度（包含溢出）+左填充 
 scrollHeight: 真是内容的高度（包含溢出）+上填充
3》 获取的结果都是约等于值，因为：同一个浏览器我们是否设置overflow = "hidden" 对于最终的结果有影响；在不同的浏览器下获取的值也相等
二， scrollLeft/scrollTop : 滚动条卷去的width/height

### 关于JS盒子模型的取值问题
上面十三个属性获取到的结果永远不可能是小数，都是整数，浏览器会在原来真是的结果进行四舍五入。

### 关于操作浏览器本身的盒子模型信息
1》 浏览器的可视窗口的宽度和高度（也就是平时的一屏的宽和高） 就是 clientWidth/clientHeight 的值
2》scrollWidth/scrollHeight 是当前页面的的内容真是高度包含溢出的部分（即所有屏加起来的高度，是一个个大概值。
还有兼容问题
### 一般我们需要些两套如下：
1，获取浏览器当前的可视窗口：
document.documentElement.clientWidth || document.body.clientWidth;
document.documentElement.clientHeight|| document.body.clientHeight;
document.documentElement.clientLeft|| document.body.clientLeft;

### 获取元素的样式方法
1， box.style.属性名 的方法 只能获取到行内样式（外链的样式时获取不到的）
2， 使用window.getComputedStyle 这个方法获取所有经过浏览器计算过得样式(只要当前的元素标签可以在页面中呈现出来，那么他的所有样式都是经过浏览器计算或渲染过得)
 语法：
 window.getComputedStyle(box,null);
 第一个参数：当前要操作的元素对象， 第二个参数是：当前元素的伪类（一般不写）
 获取到的结果是 css styleDeclaration 这个类的一个实例：包含可当前元素的所有样式属性和值
 如图：
 ![图片的位置](/assets/blogimg/hezi1.png);

通以上方法获取某个属性值如下图：

![图片的位置](/assets/blogimg/huoqu.png);

这个方法在IE 下有兼容问题
在IE6~8 下使用 currentStyle俩获取所用经过浏览器计算过得样式
console.dir(box.currentStyle).width

### 以上十三个属性和方法都是只读属性。只有scrollTop 和scorllLef这两个属性是唯一可以读和写的属性
一，针对box
```javascript
box.scrollTop  = 0 // 直接回到顶部

```
scrollTop 是有边界的(最大值和最小值)；
最小值： 0；
最大值：是真是的高度减去当前容器一屏幕的高度。
maxVal = box.scrollHeight-box.clientHeight

二， 针对整个屏幕
 [demo](/demos/2017/12-07/window.html);

