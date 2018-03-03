---
title: null和undefined的区别
date: 2017-12-07 16:03:55
tags:
---
### 概念
null :空对象指针 —> 没有具体的值 —> 一般都是我们手动设置初始的值为null,后期的话会给其赋值
undefined : 未定义—> 连这个属性都没有 —> 一般都是浏览器默认值
一， null使用场景
1，我们设定一个变量，后期需要使用，那么我们前期设置默认值为null
```javascript
    var timer = null;
    function move(){
        window.clearTimeout(timer);
        timer = window.setTimeout(move,1000);
    }
    move();

```
2, 在js内存释放中，我们想释放一个堆内存，就让其值变为null即可
```javascript
    var obj = {name:"李翠英"};
    obj = null;  //刚开始开辟的这个堆内存没有被占用，浏览器会在空闲的的时候把它销毁
```
3, 我们通过DOM 中提供的属性和方法获取页面中的某一个元素标签，如果当前标签不存在，获取的结果就是null,而不是undefined。
```javascript
    document.getElementById("div1") // 如果页面中没有#div1,获取的结果就是null
```
4, 在正则的exec/字符串的match 捕获中,
如果当前要捕获的字符串和正则不匹配的话,捕获的结果为null
```javascript
    var reg =/\d+?/g;
    var str = "zhufengpeixun" ;
    reg.exec(str)  //null
    str.match(reg) //nulll
```
###  undefined 使用场景
1, 在js 预解释的时候，只声明未定义，默认的值是undefined;
```javascript
    console.log(num); //undefined
    var num = 13;
```
2, 在一个函数中，如果没有写retrun,或者return 后面啥都返回,默认的返回值是underfind
```javascript
    function fn(){

    }
    var res = fn();
    console.log(res); //undefined
```
3, 函数中设置了形参，但是执行的时候如果没有传递参数的值，那么形参默认值是undefined
```javascript
    function fn(a,b,c){
         a =10;
         b = 20;
         c = undefined // arguments[2] =30;让形参c 的值边为30
    }
    fn(10,20)
```
4，获取一个对象的属性名对应的属性值，如果当前的这属性名不存在的话，属性值默认是 undefined
```javascript
var obj ={};
console.log(obj.name); //undefined
```
应用这个道理来检测当前的浏览器是否兼容一个方法
window.getComputedStyle 获取当前元素经过浏览器计算的样式
在标准浏览器里面我们获取到的结果是 function getComputedStyle(){[native code]}
在IE6~8中，我们获取到的是 undefined,不兼容 getComputedStyle
```javascript
function getCss (curEle,attr){
    var val =null,reg =null;
    if("getComputedStyle" in window){
        val = window.getComputedStyle(curEle,null)[attr];
    }else{
        if(attr ==="opacity"){
            val = curEle.currentStyle["filter"]; //"alpha(opacity=10)"
            reg = /^alpha\(opacity=(\d+(?:\.\d+)?)\)$/i;
            val =  reg.test(val) ? reg.exec(val[1]/100):1;
        }
        val = curEle.currentStyle[attr];

    } // 去掉单位的正则
    reg = /^-?(\d+(\.d+)?)(px|pt|rem|em)?$/i;
    return reg.test(val)? parseFloat(val):val;
}


```