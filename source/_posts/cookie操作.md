---
title: cookie操作
date: 2017-09-20 11:13:37
tags:  jq基础
---
### cookie用法
1，写入cookie
```javascript
//创建和覆盖一个cookie
    
docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])

docCookies.setItem('add_clicked'+ bookId,"1",Infinity,'/','travel.qunar.com');

//参数： name(必填)指 要创建和覆盖的cookie的名字(string); value(必填)cookie 的值。
//一下参数都是可选项。
// end(Infinity) 期限值 最大是年龄秒数 一年为31536e3, 永不过期的cookie 为Infinity
// path(/路径) 如果没有定义，默认为当前文档位置的路径。(string or null)。路径必须为绝对路径
// domain(域名)  如果没有定义，默认为当前文档位置的路径的域名部分
// secure  cookie只会被https传输 (boolean或null)。

```
2， 获取一个cookie 的方法
```javascript
docCookies.setItem(name); //如果cookie 不存在则返回null
```
3, 删除一个cookie 
```javascript
docCookies.removeItem(name); //删除一个cookie
```
4,检测是否存在某一个cookie
```javascript
docCookies.hasItem(name)
```
5, 得到所有cookie的列表
```javascript
docCookies.key(); //返回一个这个路径所有可读的cookie的数组。
```
[不错的文章](https://gxnotes.com/article/70326.html)

