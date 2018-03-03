---
title: 函数(function)
date: 2017-09-17 16:30:36
tags:  js 基础
---

###  函数：是一段JavaScript代码，它只定义一次，但是可以被执行和多次调用。（具备某个功能的一个方法）
函数本身是没有什么意义的，只有执行这个函数就实现对应的功能才能体现自己的价值
### ECMAScript规定的函数声明方式有三种：
1>普通函数声明：
```javascript
function sum(num1,num2){
    return num1+num2;
}
2> 使用表达式方式来：使用变量初始化发生声明函数
```javascript
var sum = function(num1,num2){
    return num1+num2
}
```
3> 使用Function构造函数声明
```javascript
var sum = new Function('num1','num2','num1+num2')


###  一，函数有两部分组成的：创建一个函数，执行一个函数
1，创建一个函数 ：首先开辟一个新的内存空间，浏览器为其分配一个十六进制的地址，我们假设地址为：xxxfff000,
其次是把函数中的JS代码 当做“字符串”存储到内存空间，然后把这个地址赋值给当前函数名(即：sum = xxxfff00)
```javascript
    // 创建一个函数
   function 方法名(){
    // 函数体：存储某个功能的代码
   }
   方法名() // 执行函数
   function sum(){
    var total = null;
    total = 1+1;
   }
   sum //sum 不加小括号代表：函数体本身 输出函数本身的代码。
   sum(); // 把函数执行的结果输出
   sum();
   sum();// 执行函数 ，函数可以多次执行，一般情况下每一次执行函数和上一次没有任何关系
```
#####  二， 函数执行的目的： 把函数之前存储的那些字符串变成js 代码，然后再让js代码从上到下依次的执行
分三步执行：1> 当函数执行的时候，首先会提供一个供函数体中代码执行的环境 -> '私有作用域>
         2>: 把函数体中的代码字符串变为代码从上到下执行。
闭包机制：函数执行的时候，首先会形成一个新的私有作用域，供函数体中的代码从上到下执行，形成的那个私有的作用域把我们函数体中的代码包裹起来，保护了里面变量的私有变量
            不收外界的干扰(外面获取不到也修改不了) 我们把函数执行的时候形成的这种保护机制就叫做“闭包”。
#####  三,函数的四要素
1，关键字 function
2, 函数名称标识符(函数名)
3,一对圆括号 （） 传参数使用
4, 一对{} 函数执行的语句，即函数体
5,自执行原理：在一个表达式后面加上括号()，该表达式会立即执行。
```javascript
var tensquare = (function(x){
    return x*x;
}(10));
```
#####  四,函数的参数有形参和实参
1，形参和实参的区别：
形参是在函数定义时所写的参数，相当于函数中定义的变量。
实参是在调用的函数时传入的参数
```javascript
// a, b 是形参
 function add(a,b){
    return a+b;
 }
 // 2,5 是实参
 add(2,5);
 ```

#####  五，函数内部的属性： arguments和this 两个对象。
1，函数中argunments: 函数天生自带的（不管写没写形参，也不管是否传递值，arguments始终存在），用来接收函数传递进来的参数值得一个集合。
观察他的结构发现，它是以数字作为索引，索引从零开始逐级递增，索引0储存的就是第一个参数的值，索引1，存储的是第二个参数值，索引N存储的是N+1个参数值。。。。。
有一个叫做length的属性，这个属性是动态的判断一共传递了多少个参数。和数组的形式一样，，但不叫数组，叫类数组。
类数组有自己特殊的属性callee 属性代表的是： 函数本身
1,任意数的求和： 
```javascript
 function sum(){
    var total = null;
    for(var i = 0; i<argumnents.length;i++){
        cur = Number(arguments[i]) //把传进来的参数转化成数字类型的。
        if(!isNaN(cur)){
            total += cur
        }
    }
    return tatal
 }
console.log(sum(100,300,500,200)) //1000
console.log(sum()) // null
console.log(sum(100,200,'400') //300400
console.log(sum(100,200,'400','JavaScript') //NaN
```
2，this 对象this引用的是函数据以执行操作的对象，或者说函数调用语句所处的那个作用域。
当在全局作用域中调用函数时，this对象引用的就是window(window是一个对象，是JavaScript中最大的对象，是最外围的对象)。



#####  六， return  作用： 返回值的，终止函数体中的代码
1.返回值作用：
```javascript
    function sum(sum1,sum2){
        var total = null;
        total = num1+num2;
        return total ;//出口  return 就是当前函数提供给我们的出口，因为不提供出口的话，闭包的机制导致了在
        // 函数体内的变量total，外面无法获取到里面的total的值，如果想在外面用total的值，必须通过return把total的值返回给外面即可--->返回值机制
        // 但并不是把变量返回给外面，而是把变量存储的值返回给外面 即：return total==>return 200;

    }
    console.log(sum(100,100)) //入口
    var total = sum(100,200) // 这句话含义是： 先把sum函数执行，然后把sum 函数执行的结果的返回值，赋值给变量total。(查看sum执行的结果，只需要看sum中是否存在return.
        有return 的话,return 后面返回的值是什么，函数的结果就是什么值，；如果没有return，那么默认的返回值是 undefined)
    console.log(total) //报错， total is not defined 即total这变量没有定义
    //原因是，函数在执行的时候，首先形成一个私有的作用域，保护里面的内容不受外界干扰(闭包的机制)，导致了在函数体中定义的变量total,在函数体的外面不能直接获取到。
```
2， 终止函数的作用
```javascript
    function sum(num1,num2){
        var total = null
        total = num1+num2;
        return ; // 后面没有内容的话，就是终止函数体内的代码，return 下面的的代码都不会执行
        console.log(total) //永远不会执行
    }
    sum(200,400)
```
##### 七，匿名函数 Js 中常用到的的两种方式
1， 自执行函数：定义函数和执行函数一起完成。
```javascript
    ;(function(num){
        console.log(num)
    })(100);
    // 其他形式 都是自执行函数。
    +function(num){console.log(num)}(100);
    -function(num){console.log(num)}(100);
    !function(num){console.log(num)}(100);
    ~function(num){console.log(num)}(100);

```
2， 用作函数表达式 ：即把函数定义的部分当做一个值赋值给一个变量或者元素的某个行为
```JavaScript
        oDiv.onclick = function(){
            ....
        }
```

#####  八,函数表达式： 
 ```javascript
  //匿名函数表达式
var square = function(x){
    return x*x;
}
// 具名函数表达式
var f = function fact(x){rentur x*x;}
// 函数表达式还可以作为参数传给其他函数
data.sort(function(a,b){return a-b});

```
#####  函数声明提升(函数的提升高变量提升)
函数声明定义：如果function foo(){}被包含在一个函数体内，或者位于程序的最顶部的话，那它就是一个函数声明。
```javascript
function foo(){} //声明函数
(function(){
    function bar(){}
})(); // 声明在函数体内的一部分
```
函数提升

```javascript
function hoistFunction(){
    foo(); //I am hoisted
    function foo(){
        console.log('I am hoisted')
    }
}
hoistFunction(); 
//编译后的代码
function hoistFunction(){
    function foo(){
        console.log('I am hoisted')
    }
    foo(); // //I am hoisted
}
// 同一个作用域中存在多个同名函数声明，后面出现的将会覆盖前面的函数声明：
function hoistFunction(){
    function foo(){
        console.log(1)
    }
    foo(); // 2
    function foo(){
        console.log(2)
    }
}
//  函数声明和表达式遇到时，的结果
function hoistFunction() {
    foo(); // 2
    // 函数表达式：
    var foo = function() {
        console.log(1);
    };
    foo(); // 1
    //函数声明
    function foo() {
        console.log(2);
    }
    foo(); // 1
}
hoistFunction();
//函数声明的优先级最高，会被提升至当前作用域最顶端，所以第一次调用时实际执行了下面定义的函数声明，
//然后第二次调用时，由于前面的函数表达式与之前的函数声明同名,所以foo赋值的函数表达式覆盖了同名函数声明。
```

#####   九, 函数的四种调用方式,每种方式的不同方式在于 this 的初始化。
JS 中的this代表得是当前行为执行的主体;
js 中的context 代表的是当前行为执行的环境；this 是谁和函数在哪到哪定义的和在哪执行的都没关系；如何区分this?
1> 函数执行： 首先看函数名前面有没有“.” 有的话“.” 前面是谁this就是谁；没有“.” this指的是window。
```javascript
function fn(){
    console.log(this)
}
var obj = {fn:fn};
fn() //window
obj.fn() //obj

function sum(){
    fn(); //window
}
sum();
var oo = {
    sum:function(){
        //this指 oo 
        fn()// fn 里面的this指window
    }
}
```
2>自执行函数里面的this永远指向window
3> 给元素的某一个事件绑定方法，当事件触发的时候,执行对应的方法，方法中的this是当前的元素
```javascript
document.getElementById('div1').onclick = fn   //fn 中的this 是#div
    
document.getElementById('div1').onclick = function(){ //this 指的是div1
    fn() // fn里面的this 指的是window
}
4> 在构造函数模式中，类中（函数体中）出现的this.xxx=xxx 中的this是当前类的一个实例。

``` 

1, 作为函数
```javascript
    function myFunction(a,b){
        return a*b ;
    }
    myFunction(10,2) //20 this指向window
    //以上函数不属于任何对象。但是在 JavaScript 中它始终是默认的全局对象。


```
2，作为方法
```javascript
//函数作为对象方法调用，会使得 this 的值成为对象本身。
var myObect = {
    firstName ="xu",
    lastName = "lili",
    fullName: function () {
           return this.firstName + " " + this.lastName;
       }
}
myObect.fullName(); // xu lili this指 myObect
```
3，作为构造函数 
```javascript
    //如果函数调用前使用了 new 关键字, 则是调用了构造函数。
    function myFunction(arg1, arg2) {
        this.firstName = arg1;
        this.lastName  = arg2;
    }
    // 创建新对象
    var x = new myFunction("John","Doe");
    x.firstName;       //返回 John this指myFunction()
```
4，通过他们的call()和apply() 方法间接调用
作为函数方法调用函数
在 JavaScript 中, 函数是对象。JavaScript 函数有它的属性和方法。
call() 和 apply() 是预定义的函数方法。 两个方法可用于调用函数，两个方法的第一个参数必须是对象本身。
```javascript
function myFunction(a, b) {
    return a * b;
}
myObject = myFunction.call(myObject, 10, 2);     // 返回 20

function myFunction(a, b) {
    return a * b;
}
myArray = [10, 2];
myObject = myFunction.apply(myObject, myArray);  // 返回 20
```
两个方法都使用了对象本身作为第一个参数。 两者的区别在于第二个参数： apply传入的是一个参数数组，也就是将多个参数组合成为一个数组传入，而call则作为call的参数传入（从第二个参数开始）。
在 JavaScript 严格模式(strict mode)下, 在调用函数时第一个参数会成为 this 的值， 即使该参数不是一个对象。
在 JavaScript 非严格模式(non-strict mode)下, 如果第一个参数的值是 null 或 undefined, 它将使用全局对象替代

5，函数还可以作为值传给另外一个函数。
函数也可以是值， 可以将函数赋值给一个变量，作为参数传给另外一个函数。
```javascript
function box(sum,num){
    return sum+num;
}
function sum(num){
    return num+10;
}
var result = box(sum(10),10)
console("result:"+result)  //30


function box(sum,num){
    return sum(num);
}
function sum(num){
    return num+10;
}
var result=box(sum,10);
console.log(result) //20
```
案例：假如一个对象数组，我们想根据某个对象对象属性进行排序，而传递给数组sort() 方法的比较函数要接受两个参数，既要比较的值。
可是我们还需要一种方式来指明按照那个属性来排序。就可以定义一个函数，它接受一个属性名，然后根据这个属性名来创建一个比较函数。

```javascript
var data = [{name:'lisi',age:28},{name:"wangwu",age:56},{name:"zhangsan",age:46}]
  function createComparisonFunction(prototypeName){
        return function(object1,object2){
            var value1 = object1[prototypeName];
            var value2 = object2[prototypeName];
            if(value1<value2){
                return -1;
            }else if(value1>value2){
                return 1;
            }else{
                return 0;
            }
        }
  }
var res1 = data.sort(createComparisonFunction('age'));
var res2 = data.sort(createComparisonFunction(name));
console.log(res1) // [{name:'lisi',age:28},{name:"zhangsan",age:46},{name:"wangwu",age:56}]
console.log(res2) // [{name:'lisi',age:28},{name:"zhangsan",age:46},{name:"wangwu",age:56}]

```
###  十，函数属性和方法
1> javascript中的函数就是对象，因此函数也就有属性和方法，每个函数都包含两个属性:length和prototype.
其中，length属性表示函数希望接受的命名参数的个数。
```
function box (num1,num2){
    return num1+num2
}
console.log(box.length) //2
```
2> prototype 属性，它保存所有实例方法的真正所在也就是原型。
prototype属性有两个方法： call()和apply() 每个函数都包含着两个非继承而来的方法，这两个方法的用途都在
特定的作用域中调用函数，实际上等于设置函数体内this对象值
```javascript
function box(num1,num2){
    return num1+num2
}
function sayBox (num1,num2){
    return box.apply(this,[num1,num2]) // this指向window
}
function sayBox2(num1,num2){
    return box.apply(this,arguments) 
}
console.log(sayBox(10,10)+'<br/>') //20
console.log(sayBox2(10,10)) //20
```
(2)call()方法和apply()方法延伸
call()方法和apply()方法相同，它们的区别仅仅在于接收参数的方式不同。对于call()方法而言，第一个参数是作用域，没有变化，变化的只是其余参数都是直接传递给函数的。
```javascript
function box(num1,num2){
    return num1+num2
}
function callBox(num1,num2){
    return box.call(this,num1,num2) //区别apply()
}
console.log(callBox(10,10)) //20
```
(3) call()和apply()真正的作用是扩展函数懒以运行的作用域
``` javascript
var color = "red" ;
var box = {
    color:"blue"
};
function sayColor(){
    return this.color;
}
console.log(sayColor() +'<br/>');  // red
console.log(sayColor.call(this)+'<br />'); // red
console.log(sayColor.call(window)+'<br />'); //red
console.log(sayColor.call(box))  //blue
```