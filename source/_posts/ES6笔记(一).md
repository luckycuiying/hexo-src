---
title: ES6笔记(一)
date: 2017-09-06 20:18:16
tags:
---
### 新增块级作用域（let与const关键字） 
1， 新增了声明块级使用域变量的关键字let。与var相比，使用let声明的变量有如下特点：
let ：声明的变量所在作用域为块级，变量不存在变量提升 ，不允许重复声明否则会报错。
代码块： {} 包起来的代码，形成了一个作用域，就是块级作用域。 比如： if,  for, while
```javascript
//es5 实现方式
(function(){
    for (var i = 0;i < 10;i++){
        console.log(i)
    }
})();

// Es6 实现方式
 for(let i=0;i<10;i++){
 console.log(i)
 }
```
需要注意的是，ES6中函数本身的作用域在其块级作用域(就是匿名函数自执行)之类（相当于使用let声明了），这样，在if条件内声明的函数就不会像ES5因函数提升而总会被声明。
2，const 一旦赋值，再也修改不了。声明时一定要初始化值。同样不能重复定义，用途是：防止意外修改变量。


### 全局对象属性
　　全局对象是最顶层的对象，在浏览器环境指的是window对象，在Node.js指的是global对象。ES5规定，所有全局变量都是全局对象的属性。
　　ES6规定，var命令和function命令声明的全局变量，属于全局对象的属性；let命令、const命令、class命令声明的全局变量，不属于全局对象的属性。
### 变量的解构赋值
1，数组形式解构赋值
```javascript
let [a,b,c] =[1,2,3];// 就等于 let a= 1,b=2,c =3
// 数组可以设置默认值 undefined 和null  的区别：
let[a,b='lisi'] =['李四',undefined] ;
let[c,d='wangwu'] =['王五',null] ;

```

2,对象形式的解构赋值
```javascript
let {bar, foo} = {foo:'aaa', bar = 'bbb'};
console.log(foo) //aaaa
console.log(bar) //bbb
// 方式二：
let {first: f, last: l} = {first: "hello", last: "world"};
console.log(f)
console.log(l)
// 如果是先定义后赋值的话 需要在赋值的时候需要添加();
let foo;
{foo} = {foo:"aaa"};
console.log(foo) // 这样的话在编译的时候就会报错的， 解决方案就是在
({foo}={foo:"aaa"}) // aaa 就能编译好了。

```
### 字符串解构
```
const [a,b,c,d,e,f] = "shuais"

//a = s,
//b = h,
//c = u,
//d = a,
//e = i,
//f = s;
```
###  对象扩展运算符（…）：
1，传多个参数
例如：
```javascript
function jspang(...arg){
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
    console.log(arg[3]);
}
jspang(1,2,3);
//这时我们看到控制台输出了 1,2,3，undefined，这说明是可以传入多个值，
//并且就算方法中引用多了也不会报错。
//给筛选组件 传需要的所有参数 （month，days...)
<FilterTab {...pageInfo.query} />
```
2, 解决问题
```javascript
let arr1 = ['www','qunar','com']
    let arr2 = arr1
    console.log(arr2)
    arr2.push('lisi')
    console.log(arr1)
    //console.log(arr2)
```
![图片的位置](/assets/blogimg/pic1.png)
##### arr1 的值也被改变了 这一问题 我们利用对象的扩展运算符来解决
```javascript
let arr1 = ['www','qunar','com']
    let arr2 = [...arr1]
    console.log(arr2)
    arr2.push('lisi')
    console.log(arr1)
    console.log(arr2)
```
![图片的位置](/assets/blogimg/pic2.png)
### rest运算符 也是三个点, 看图理解
```javascript
    function sum(first,...arg){
        //  ES5 输出方式
        //for (var i = 0; i < arg.length; i++) {
        //    console.log(i);
        // }
        // es6 
        for(let val of arg){
            console.log(val);
        }
    }
    sum(1,2,3)

```
![图片的位置](/assets/blogimg/pic3.png)
这时候控制台打印出了7，说明我们arg里有7个数组元素，这就是rest运算符的最简单用法。

