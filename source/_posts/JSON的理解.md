---
title: JSON的理解
date: 2017-09-01 09:45:20
tags:  javascript
---

### 一，json 是什么？
1，是一种轻量级数据交换的格式，是纯文本的字符串，是作为一种代替XML数据格式角色出现。简单易读方便转换跨平台。
是JavaScript语言里的一个子集

####   json 的两种结构：
1，是名称和值的集合 它被理解为对象（object），纪录（record），结构（struct），字典（dictionary），哈希表（hash table），有键列表（keyed list）
，或者关联数组 （associative array）。
2，值的有序列表（An ordered list of values）。在大部分语言中，它被理解为数组（array）。
####  json的具体形式
对象： {‘名称’：‘值’，‘名称’：‘值’}
数组： 数组是值（value）的有序集合。一个数组以“[”（左中括号）开始，“]”（右中括号）结束。值之间使用“,”（逗号）分隔。
[1,2,3,4,5,]
####   JSON字面量又是什么?
解析：
```javascript 
// javascript 对象字面量的写法
var obj1 = new Object();  //创建一个对象
var obj2 = {} //字面量
```
在看看下面的一段代码
```javascript
var person = {
    'name':'lisi',
    'age':'24',
    'sex': '男'
}
```
从上我们可以看出这就是用字面量表示一个对象，而这个格式就是json格式的， 因为本身json就是JavaScript语法集的一种，
所以json字面量就是用json格式的JavaScript对象字面量。
#### 与javasript 字面量对比
json放到JavaScript中执行是合法代码，是JavaScript对象字面量，但是JavaScript对象字面量不一定是json
``` javascript
var person={
    "name":"xianyu",
    "age":24,
    "love":"Online Game"
}
//和
var person={
    name:'xianyu',
    age:24,
    love:'Online Game',
    skill:function(){
          alert('basketball')
    }
}
```
一， json必须是符合以下
1.键一定要用双引号，值如果是字符串也要用双引号包括
2.数据只包括，数字，布尔，数组，null，对象，字符串
二，而JavaScript对象字面量属性不用引号也可以，而且值可以是任何类型，函数，undefined或者是正则都是可以的 。
json只是JavaScript语法集中的一种，还有很多其他部分的东西都是不符合json的规范。


