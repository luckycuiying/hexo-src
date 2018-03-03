---
title: ES箭头函数
date: 2017-09-08 18:27:02
tags:
---
###  Es6 函数新增加了默认值
```javascript
function add(a,b=1){
    return a+b;
}
console.log(add(2)) //3
```
1,获得需要传递的参数个数
如果你在使用别人的框架时，不知道别人的函数需要传递几个参数怎么办？
ES6为我们提供了得到参数的方法(xxx.length).我们用上边的代码看一下需要传递的参数个数。
```javascript
function add(a,b){
    if(a ===0){
    throw new Error('this is error');
    }
    return a+b;
}
console.log(add.length)
```
这时控制台打印出了2，但是如果我们去掉严谨模式，并给第二个参数加上默认值的话，这时候add.length的值就变成了1， 
也就是说它得到的是必须传入的参数。
### 箭头函数
```javascript
let f = v =>v; //等同于 let = function(v){return v;}
//箭头函数支持的写法
let f = () =>s;
let add =(a,b=1) => a+b;
let add =(d,b)=>{return a+b}
console.log(add(1));
```
使用箭头函数时需要注意以下几点：
< 函数体内的this对象，绑定定义时所在的对象，而不是使用时所在的对象（this指向window）
< 不可当作构造函数，也就是说不能使用new命令，否则会抛出错误
< 不可以使用arguments对象，因为该对象在函数体内不存在
### {}的使用 箭头函数中不可加new，也就是说箭头函数不能当构造函数进行使用。
### 对象的函数解构
函数能解构JSON，那解构我们的数组就更不在话下了，我们看下边的代码。我们声明一个数组，然后写一个方法，最后用…进行解构赋值。
```javascript
let arr = ['lisi','前端','react'];
function fun(a,b,c){
    console.log(a,b,c)
}
fun(...arr)
### in 的用法
in 是用来判断对象或者数组中是否存在某个值的。
对象判断
```javascript
let obj = {
    a:'lisi',
    b:'前端开发'
}
console.log('a' in obj) //返回true 
### 数组判断
//Es5 
```javascript
let arr = [,,,,];
console.log(arr.lenght); //5 数组中其实全是空值，这就是一个坑啊。那用ES6的in就可以解决这个问题
```
```javascript
let arr =[,,,,,];
console.log(0 in arr) // false  在这里的0 指的是数组下标位置是否为空
ler arr = ['lisi','react'];
console.log(0 in arr) // true   在这里的0 指的是数组下标位置是否为空
```
### 数组的遍历方法
1. forEach() //forEach循环的特点是会自动省略为空的数组元素，相当于直接给我们筛空了。当是有时候也会给我们帮倒忙。
```javascript
let arr = ['1','2','name','sex','love'];
arr.forEach((val,index)=>console.log(index,val));
```
![图片的位置](/assets/blogimg/pic4.png)
2, filter
```javascript
let arr = ['lisi','wangwu','react']
arr.filter(x=>console.log(x));
```
![图片的位置](/assets/blogimg/pic5.png)
3,some 
```javascript
let arr = ['lisi','name','love','web'];
arr.some(x=>console.log(x))
// lisi  name love webview
4,map()  map在这里起到一个替换的作用
```javascript
let arr = ['3','4','5','6'];
console.log(arr.map(x=>'web'));
// ['web','web','web','web']
```
### 数组转换字符串
1,数组输出成字符串的形式
```javascript
let arr =['react','css ','js','node',];
console.log(arr.join('|')); //react| css| js | node
//join()方法就是在数组元素中间，加了一些间隔，开发中很有用处。
```
2,toString()方法
```javascript
let arr =['react','css ','js','node',];
console.log(arr.toString()) //react,css,js,node
```






