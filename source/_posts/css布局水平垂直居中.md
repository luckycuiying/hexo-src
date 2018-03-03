---
title: css布局水平垂直居中
date: 2017-09-16 14:29:16
tags: css基础
---
### 水平居中
####  行内元素
方案一： 在块级父容器中让行内元素居中，只需使用 text-align: center;
使用类型元素有： inline/inline-block/inline-table/flex 元素实现居中
#### 块级元素 
1，固定宽的块级元素
    margin: 0 auto;
2，绝对定位实现水平居中
```css 
.ele{
    position:absolute;
    width:100px;
    left:50%;
    top:50%
    margin:-50px 0 0 -50px;
}
```

### 不设置宽高
3,CSS3的flex实现水平居中方法 不限定宽度
![在线demo](/demos/2017/0917-4/height.html)
![在线demo](/demos/2017/0917-4/vertical.html)

```javascript
 // 是让mother 里的a2 在mother盒子里水平垂直居中
    display: flex;
    align-items: center;
    justify-content: center;
// mother 没有固定宽高的 下面相对定位是让mother的高度和mod1高度一致即高度100%；
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
```    
4, position+transform 实现水平垂直居中
![在线demo](/demos/2017/0917-4/vertical.html)
里面的的第二个模块
 ```css
 transform:translate(-50%,-50%);
 ```
 是相对自身原来的位置发生位移的。类似 position:relative;
5, 绝对定位和margin

```css 
  .content{
  position:relative
  } 
  .content .box{
  position:absolute;
  margin:auto;
  left:0;
  top:0;
  right:0;
  bottom:0
  }
```

