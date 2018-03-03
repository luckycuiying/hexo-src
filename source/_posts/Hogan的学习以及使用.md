---
title: Hogan.js了解和使用
date: 2017-07-10 14:49:31
tags:
---

### Hogan 的定义
[hogan.js不错的网站](http://cw.hubwiz.com/card/c/55c0792f3ad79a1b05dcc401/1/1/1/)
[mustache的语法](http://www.cnblogs.com/JoannaQ/p/3462318.html)

### Mustache 的模板语法很简单，就那么几个，用于HTML，配置文件，源代码等。它的工作方式是
(不错的外链)[http://wowubuntu.com/markdown/#blockquote]
```html
> * {{keyName}}
> * {{#keyName}} {{/keyName}}
> * {{^keyName}} {{/keyName}}
> * {{.}}//
> * {{>partials}}
> * {{{keyName}}}
> * {{!comments}}
```

通过通过以哈希值或者对象的方式扩展模板标签。
```javascript
   var data = {
    "company": "Apple",
    "address": {
        "street": "1 Infinite Loop Cupertino</br>",
        "city": "California ",
        "state": "CA ",
        "zip": "95014 "
    },
    "product": ["Macbook ","iPhone ","iPod ","iPad "]
}
//{{keyName}}  变量
var tpl = '<h1>Hello {{company}}</h1>';
var html = Mustache.render(tpl, data);
console.log( html )
```
