---
title: React深度理解
date: 2017-08-21 20:22:34
tags: React 
---
###  组件生命周期
一个组件类由 extends Component 创建，并且提供一个 render 方法以及其他可选的生命周期函数、组件相关的事件或方法来定义。

###  React 的生命周期深度理解
#### 1，初始化组件介绍
    getDefaultProps (),  只在组件创建时调用一次并缓存返回的对象（即在 React.createClass 之后就会调用）。
    getInitialState(), 初始化 this.state 的值，只在组件装载之前调用一次。
    render()  组装生成这个组件的 HTML 结构（使用原生 HTML 标签或者子组件），
    也可以返回 null 或者 false，这时候 ReactDOM.findDOMNode(this) 会返回 null。
    现在一般在组件里面使用constructor()构造函数代替 以上两种方法。
#### 2，生命周期函数
##### 装载组件触发 
    1,componentWillMount
    只会在装载之前调用一次，在 render 之前调用，你可以在这个方法里面调用 setState 改变状态，
    并且不会导致额外调用一次 render
    componentDidMount
    只会在装载完成之后调用一次，在 render 之后调用，从这里开始可以通过 ReactDOM.findDOMNode(this) 
    获取到组件的 DOM 节点。 
    更新组件触发：
##### 更新组件触发：
    这些方法不会在首次 render 组件的周期调用
    componentWillReceiveProps()
    shouldComponentUpdate()
    componentWillUpdate()
    componentDidUpdate()
##### 卸载组件
    componentWillUnmount
![生命周期运行图](http://upload-images.jianshu.io/upload_images/2435411-84db7be9ca9cbdc5.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)