---
title: ES6中新增的数组知识(三)
date: 2017-09-06 21:37:07
tags:
---
### ES6中新增的数组知识
#### Array.from() 用于将类数组转化为真正的数组,还可以遍历set 和Map.
1，JSON 数组的转换
JSON 数组的格式写法：
```javascript
// 标准的JSON数组格式，跟普通的JSON对比是在最后多了一个length属性
let json = {
    '0':'lisi',
    '1': "前端妹子",
    '2': '爱学习',
    length:3
}
//轻松使用ES6的语法转变成数组
 let arr = Array.from(json) //该函数可以方便地替代ES5中使用Array.prototype.slice来进行数组转换。
    console.log(arr) //['lisi','前端妹子','爱学习']
// ES5 的写法
var arr1 =[].slice.call(json)
```
主要应用DOM 操作返回的NodeList 集合,以及函数内部的arguments 对象
```javascript
let ps = document.querySelectorAll('p');
let pArr = Array.from(ps);
console.log(pArr)
// arguments对象
function foo() {
  var args = Array.from(arguments);
  // ...
}
```



### 数组的遍历

##### 1,Array.of()方法：用来将一组值转换为数组
```javascript
let arr = Array.of(2,3,4,5,6);
console.log(arr); //[2,3,4,5,6]
let arr2 = Array.of('张三','lisi','wangwu');
console.log(arr2) //['张三','lisi','wangwu']
```
#### 2,find( )实例查找  满足条件就停止查找
新增数组实例方法：find()和findIndex()。两者的参数都是一个回调函数，返回第一个回调函数返回值为true的元素的值（或下标）。
这两个函数解决了ES5中indexOf()函数不能找到NaN元素的问题。
 必须有一个已经存在的数组，然后使用的方法，
 find方法是从数组中查找。在find方法中我们需要传入一个匿名函数，函数需要传入三个参数：
 value：表示当前查找的值。
 index：表示当前查找的数组索引。
 arr：表示当前数组。
 ```javascript
 let arr = [2,3,4,5,6] ;
 console.log( arr.find(function(value,index,arr){
        return value>3;
    }))  //4

 let arr2 = ['张三','lisi','wangwu'];
 console.log(arr2.find(function(value,index,arr){
    return value == "lisi";
    })) // lisi

 ```

#### 3,新增数组实例方法：fill(),使用指定值对数组进行填充。
参数为一个时将数组所有元素替换为参数的值，
参数为三个时，将指定起始位置（第二个参数）和终止位置（第三个参数）
替换为目标值（第一个参数） 包含起始值，但不包含终止值。
```javascript
    var arr = ['a','sds','gb','rf'];
    arr.fill('lisi',1,3)
    console.log(arr)
```

#### 4,新增数组实例方法：ectries(),keys(),values(),三个都返回遍历器：
```javascript

// 输出下标
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'
for (let elem of ['a', 'b'].entries()) {
    console.log('index+'+val)
}
//entries()实例方式生成的是Iterator形式的数组，那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值。
我们来看下面的代码：
let arr = ['lisi','qunar','前端开发'];
let list = arr.entries();
console.log(list) //Array Iterator {} 就支持手动循环
console.log(list.next().value); //[0,"lisi"]
console.log(list.next().value);// [1,"qunar"]
console.log(list.next().value); //[3,"前端开发”]

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
```
##### 5,新增数组推导的写法，用于快捷地从当前数组生成指定数组（ES5中可以使用map()和filter()实现）：
```javascript
//ES5:
var a1 = [1, 2, 3, 4];
var a2 = a1.map(function(i){return i * 2});
var a3 = a1.filter(function(i){return i > 2});
var a4 = a1.filter(function(i){return i > 2})
           .map(function(i){return i * 2});
a2 // [2, 4, 6, 8]
a3 // [3, 4]
a4 // [6,8]

//ES6:
var a1 = [1, 2, 3, 4];
var a2 = [for (i of a1) i * 2];
var a3 = [for (i of a1) if (i > 2) i];
var a4 = [for (i of a1) if (i > 2) i * 2];//同时实现ES5中的map和filter 

a2 // [2, 4, 6, 8]
a3 // [3, 4]
a4 // [6,8]
```
####  6,for…of数组索引:有时候开发中是需要数组的索引的，那我们可以使用下面的代码输出数组索引。
```javascript
let arr = ['lisi','fddsf','dfgfkfg'];
for(let index of arr.keys()){
    console.log(index+':'+val)
}

