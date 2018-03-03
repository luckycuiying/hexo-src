---
title: call和apply
date: 2017-11-28 20:29:34
tags: js基础
---

### call
```javascript
// Function.prototype.call = function(){

}

var obj = {name:"珠峰培训"}
 function fn(){
    console.log(this);
 }
 fn()
 obj.fn() //obj.fn is not a function 
fn.call(obj)
```
call 方法的作用：
首先我们让原型上的call方法执行，在执行call方法的时候，我们让fn方法中的this 变为第一个参数值。然后再把fn 这个函数执行；

```javascript
var obj = {name:"珠峰培训"}
 function fn(){
    console.log(this);
 }
Function.prototype.myCall = fu.ction(context){
    //让this这个函数中的“this" 关键字变成“context"的值
   var that = eval( this.toString().replace("this","obj"));
   this() //让fn 执行
}
fn.mySCall(obj) // this是fn 里面的this 
fn.sum(obj)   //this是sum 里面的this 
function sum(){
console.log(this)
}
```
```javascript
function fn1(){console.log(1)};
function fn2(){console.log(2)};
fn1.call(fn2); //只改变this，但没有用的。
fn1.call.call(fn2) 
fn1.call.call.call.call.call(fn2)
Function.prototype.call(fn1)
Function.prototype.call.call.call(fn1)
```