---
title: React深度理解
date: 2017-08-21 20:22:34
tags: React 
---
###  React 的生命周期深度理解
1，当首次装在组件时，按顺序执行性：
    getDefaultProps (), 
    getInitialState(),
    现在一般在组件里面使用constructor()构造函数代替 以上两种方法。
    然后在执行： componentWillMount()———>render()————>componentDidMount()
    当卸载组件时，执行： componentWillUnmount()

2,当重新装在组件时，执行的顺序是：和 1，的顺序一致，但不执行  getDefaultProps (), 

3，当再次渲染组件时，执行的顺序是：
componentWillReceiveProps()—————>shouldComponentUpdate()————>componentWillMount()————> render()————>componentDidMount()
如图：
![生命周期运行图](http://upload-images.jianshu.io/upload_images/2435411-84db7be9ca9cbdc5.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)