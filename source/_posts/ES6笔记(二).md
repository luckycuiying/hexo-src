---
title: ES6笔记(二)
date: 2017-09-06 20:18:16
tags:
---
### 字符串模版
1,es5 和es6 拼接对比
```javascript
    let lisi='李四';
    let blog1 = '非常高兴你能看到这篇文章，我是你的老朋友'+lisi+'。我们一起学习字符串模版。';
    let blog2 = `非常高兴你能看到这篇文章，我是你的老朋友${lisi}。我们一起学习字符串模版。`;
    console.log(blog1)
    console.log(blog2)
```
2,还支持运算符
```javascript
let a = 2;
let b = 3;
let result = `${a+b}`;
console.log(result)
// 5
```
### 字符串查找※传统上
JavaScript只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6又提供了三种新方法。
1，查找是否存在
ES6 直接用includes() 就可以判断布尔值(true/false)，不在返回索引值。
```javascript
let lisi = "李四"
let blog1 = `非常高兴你能看到这篇文章，我是你的老朋友${lisi}。我们一起学习字符串模版。`;
console.log(blog1.includes(lisi))
// true
//startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部.
console.log(blog1.startsWith(lisi));
//false
//endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部.

console.log(blog1.endsWith(lisi));
//false
//repeat()返回一个新字符串，表示将原字符串重复n次。可以方便地构建由重复字符或字符串构成的字符串：

// 以| 结尾复制lisi 三遍
console.log('lisi|'.repeat(3))
```
### ES6数字操作
ES6将ES5中的全局方法：isFinite(),isNaN(),parseInt(), parseFloat()移至Number上，
分别变为Number.isFinite(),Number.isNaN(),Number.parseInt(), Number.parseFloat()。
这样做是为了逐步减少全局方法，使语言逐步模块化。
1，数字判断和转换 数字验证Number.isFinite( xx )
```javascript
let a= 11/4;
console.log(Number.isFinite(a));//true
console.log(Number.isFinite('lisi'));//false
console.log(Number.isFinite(NaN));//false
console.log(Number.isFinite(undefined));//false
```
2,NaN验证
NaN是特殊的非数字，可以使用Number.isNaN()来进行验证。下边的代码控制台返回了true。
``` javascript
console.log(Number.isNaN(NaN))
```
3. 判断是否为整数Number.isInteger(xx)
```javascript
let a=123.1;
console.log(Number.isInteger(a)); //false
```
4,整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)
```javascript
let a='9.18';
console.log(Number.parseInt(a));  //9
console.log(Number.parseFloat(a));//9.18
```
5,整数取值范围操作
整数的操作是有一个取值范围的，它的取值范围就是2的53次方。
```javascript
let a = Math.pow(2,53)-1;
console.log(a); //9007199254740991
```
6.最大安全整数 和最小安全整数
```javascript
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
```
7, 安全整数判断isSafeInteger( )
```javascript
let a= Math.pow(2,53)-1;
console.log(Number.isSafeInteger(a));
//false
```
8,Math对象新增的方法:
```javascript
Math.trunc(n) 去除一个数的小数部分
Math.sign(b) 判断一个数是正数、负数还是0.
Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）
Math.cbrt(x) 返回x的立方根
Math.clz32(x) 返回x的32位二进制整数表示形式的前导0的个数
Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
Math.expm1(x) 返回eˆx - 1
Math.fround(x) 返回x的单精度浮点数形式
Math.hypot(...values) 返回所有参数的平方和的平方根
Math.imul(x, y) 返回两个参数以32位整数形式相乘的结果
Math.log1p(x) 返回1 + x的自然对数
Math.log10(x) 返回以10为底的x的对数
Math.log2(x) 返回以2为底的x的对数
Math.tanh(x) 返回x的双曲正切（hyperbolic tangent)
```
