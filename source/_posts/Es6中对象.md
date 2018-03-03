
title: Es6中对象
date: 2017-09-08 21:54:15
tags:
---
### 对象赋值 Es允许把声明的变量直接赋值给对象。
```javascript
let name = "lisi";
let skill = "web";
var obj = {name,skill};
console.log(obj); //{name: "lisi", skill: "web"}
```
### 对象key值得构建
有时候我们会在后台取出key 的值， 而不是我们前端定义好的，这时候我们如何构建我们的key值呢？
比如我们在后台取出了一个key 值，然后可以用[] 数组的形式，进行对象的构建
```javascript
let name = "lisi";
// let skill = "web";
let key = 'skill';obj
let obj = {name,
   [key]:'web'
};
console.log(obj.skill); // 'web'
```
### 自定义对象方法
``` javascript  
    let obj ={
        add:function(a,b){
            return a+b;
        }
    }
    console.log(obj.add(1,2))
```
### 对象比较 Object.is()
Es6 以前判断如下：
```javascript
    var obj1 = {name:'lisi'};
    var obj2 ={name:'lisi'};
    console.log(obj1.name===obj2.name) //true;
```
ES6 提供的方法
```javascript
    var obj1 = {name:'lisi'};
    var obj2 ={name:'lisi'};
    console.log(Object.is(obj1.name,obj2.name)) //true
```
区分=== 和is () 的区别： === 为同值相等； is()为严格相等
[相关具体比较文章](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)
```javascript
    console.log(+0===-0);
    console.log(NaN === NaN);
    console.log(Object.is(-0,+0));
    console.log(Object.is(NaN,NaN));

```
### Object.assign() 和并对象 

```javascript
    var state ={
        data:null,
        query:{
            page:1,
            limit:20
        }
    }
    let newState = Object.assign({},state);
    console.log(newState) //与一个空对象合并，也就复制了一份原来一模一样的新对象

```


