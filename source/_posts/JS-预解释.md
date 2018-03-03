---
title: JS 预解释
date: 2017-11-22 15:42:32
tags:
---
### 预解释定义：
1>预解释发生的环境： 预解释是放生在当前作用域下的， 把带var 和 function 关键字的变量提升到当前作用域的顶层(函数的提升最高，会覆盖同名的其他变量)，但只是声明或者定义。
2> 针对的对象是 带var 和 function 关键字的， 带var 的变量只是声明，而function 关键字的是声明加定义。
3> 一个function 在代码执行之前，就会在（进行预解释的时候）就把声明和定义完成了，在接下来执行代码的过程中，如果在遇到定义的那块代码，就直接跳过就好。
![图片的位置](/assets/blogimg/tisheng.png);

```javascript
console.log(total) // undefined var变量只是提升但没有定义
var total= 0;
sum(1,2,3) //6 因为函数的在预解释时候已经把函数提升到最高的顶层，然后在开始执行。所以函数在定义代码之前也可以执行。
function sum(){
            var total = null;
            for(var i = 0;i<arguments.length;i++){
                var val = Number(arguments[i]);
                console.log(val)
                if(isNaN(val)){
                    continue;
                }
                total+=val ;
            }
            return total;
        }
sum(1,"2",3,"a")  //6
```
![图片的位置](/assets/blogimg/sum2.png);

4> 函数开始执行就会形成一个私有作用域,(栈内存)，首先进行就是预解释，其次代码执行(在这个函数中定义的变量都是私有的变量)形成的这个作用域保护里面的私有变量不受外界的干扰。我们把这种机制叫做闭包。
5> 函数执行一次就形成一个新的私有作用域，一般情况每一次形成的私有作用域都会自动消毁。

### JS中的预解释的理解
一，预解释是毫无节操的一种机制，自从有了预解释，从此节操是路人。
1》预解释的时候不管条件是否成立，都要把带var的进行提前声明
```javascript
    if(!("num" in window)){ // in : 是判断num是否为window 这个对象的一个属性，是的话返回true,不是的话返回的是false.
        var num = 12
    }
    console.log(num)  //undefined  带var 的变量会提升值作用域顶端，但是不会赋值，所以（”num“ in window）为真，取反为falsa.后面代码就不会执行了。所以是 undefined. 
```
2》 预解释的时候至预解释”=“ 左边的，右边的值不参与预解释。
3》 自执行函数也是不能预解释的。因为自执行函数是定义可执行一起完成的，所以当代码执行到这个位置的时候定义和执行一起完成了。
4》 在函数里里面，return 下面声明和定义的变量不会执行但是会预解释。变量提升。后面的是返回值，也是不做预解释的。
```javascript
    function fn(){
        //预解释
        console.log(num); //undefined 而不是报错
        return function(){ // 因为是返回值，所以不会预解释

        }
        var num = 100;
    }

```
5》 如果在预解释的时候，如果名字已经声明过了，不需要重新的声明，但是需要重新赋值
在JS中如果变量的名字和函数的名字重复了，也算冲突。
```javascript
  var fn = 13;
  function fn (){
    console.log("ok")
  }
```
```javascript
fn(); //2
function fn(){
    console.log(1)
};
fn(); //2
var fn = 10;
fn(); // 报错
function fn(){
    console.log(2)
}
fn()
```

### 匿名函数包含两种
1, 函数表达式 : 把函数定义的部分当做一个值给变量或是元素的绑定事件
``` javascript
var fn = function(){

}
oDiv.onclick =function(){

}
window.setTimeout(function(){

},1000);
```
2, 自执行函数: 定义和执行放在一起操作了。定义完了紧接着就执行了。 
```javascript
// 第一种
 ;(function(name){
    console.log('我的名字叫做'+name)
    })('李四');
    // 第二种
    ~function(name){
    console.log('我的名字叫做'+name)
    }('李四');
    // 第三种
    +function(name){
        console.log('我的名字叫做'+name)
    }('李四');
    // 第四种
    !function(name){
        console.log('我的名字叫做'+name)
    }('李四');
```