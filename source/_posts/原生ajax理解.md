---
title: 原生ajax理解
date: 2017-08-04 14:50:38
tags:  js
---
### AJAX : async javascript and xml 异步的js 和 xml
客户端JS中的方法：用来向服务器端发送请求（还可以传递给服务器端数据）然后把服务器端返回的内容获取(Ajax 一般是运行在客户端的浏览器中的)
xml: 可扩展的标记语言（在xml 文件中使用的标签都是自己扩展的）
利用自己扩展的有规则的标记来存储相关的数据
<!-- more -->

###  AJAX 原理
AJAX通过原生的XMLHttpRequest对象发出HTTP请求，得到服务器返回的数据后，再进行处理。
步骤：
1，创建AJAX对象
```javascript
//IE6一下不支持
var xhr = new XMLHttpRequest;
```
2，发出http 请求
```javascript
//发送前的基本信息配置
// 配置请求的方式（get/post）
// 打开一个URL 地址（配置向哪一个服务器地址发送请求
// 同步还是异步：（true 代表异步，false 代表同步， 默认是true）
//[username]:向服务器提供请求的用户
//[userpass]:向服务器提供请求的用户密码
    xhr.open("get","/data.txt",false，[username],[userpass]);
```
3，接受服务器传回的数据
xhr.readyState：ajax 状态码 0,1,2,3,4
0:UNSENT当前的请求还没有发送
1:OPEND URL 地址已经打开（发送前的参数配置已经完成）
2: HEADERS_RECEIVED 响应头信息已经接受
3:LOADING   主要返回的内容正在服务器端进行准备处理
4:DONE   响应主体的内容已经成功返回到客户端
```javascript
xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && /^2\d{2}$/.test(xhr.status)){
        var val = xhr.responseText;
    }
}
```
xhr.status : http网络状态码，描述了服务器响应内容的状态
200 OR ^2\d{2} (200或者以2开头的 ) 都代表响应主体的内容已经成功返回了
301 : 永久重定向/ 永久转义
302: 临时重定向/临时转移
304： 本次获取的数据内容是读取缓存中的数据

400：客户端传递给服务器的参数出现错误
401：无权限访问
404：访问客户端的页面地址不存在
500： 未知的服务器错误
503： 服务器已经超负荷

4，发送请求：参数是请求主体中传递给服务器的内容
```javascript
xhr.send();
```
AJAX可以是同步请求，也可以是异步请求。但是，大多数情况下，特指异步请求。因为同步的Ajax请求，对浏览器有“堵塞效应”。


#### 一，XMLHttpRequest 对象
---
1，作用：XMLHttpRequest 对象用来在浏览器与服务器之间传送数据。
例如：
```javascript
var ajax = new XMLHttpRequest();
ajax.open("get","接口地址URL","设置同步false和异步true");
//上面代码向指定的服务器网址，发出GET请求。
//然后，AJAX指定回调函数，监听通信状态（readyState属性）的变化。
ajax.onreadystatechange = handleStateChange;
//一旦拿到服务器返回的数据，AJAX不会刷新整个网页，而是只更新相关部分，从而不打断用户正在做的事情。
//虽然名字里面有XML，但是实际上，XMLHttpRequest可以报送各种数据，包括字符串和二进制，而且除了HTTP，
它还支持通过其他协议传送（比如File和FTP
```

2, 典型用法
[ajax用法](/demos/2017/0804/index.html)
####  二，XMLHttpRequest实例的属性
2.1 readyState 是一个只读属性，用一个整数和对应的常量，表示XMLHttpRequest 请求当前所处的状态。
---
>  0，对应常量UNSENT，表示XMLHttpRequest实例已经生成，但是open()方法还没有被调用。
>  1，对应常量OPENED，表示send()方法还没有被调用，仍然可以使用setRequestHeader()，设定HTTP请求的头信息。
>  2，对应常量HEADERS_RECEIVED，表示send()方法已经执行，并且头信息和状态码已经收到。
>  3，对应常量LOADING，表示正在接收服务器传来的body部分的数据，如果responseType属性是text或者空字符串，responseText就会包含已经收到的部分信息。
>  4，对应常量DONE，表示服务器数据已经完全接收，或者本次接收已经失败了。
在通信过程中，每当发生状态变化的时候，readyState属性的值就会发生改变。这个值每一次变化，都会触发readyStateChange事件。
2,2  onreadystatechange
---
onreadystatechange属性指向一个回调函数，当readystatechange事件发生的时候，这个回调函数就会调用，并且XMLHttpRequest实例的readyState属性也会发生变化。
另外，如果使用abort()方法，终止XMLHttpRequest请求，onreadystatechange回调函数也会被调用。 只要状态改变，就触发方法执行
```javascript
var xmlhttp = new XMLHttpRequest;
xmlhttp.open( 'GET', 'http://example.com' , true );
xmlhttp.onreadystatechange = function () {
  if ( XMLHttpRequest.DONE != xmlhttp.readyState ) {
    return;
  }
  if ( 200 != xmlhttp.status ) {
    return;
  }
  console.log( xmlhttp.responseText );
};
xmlhttp.send();
```
2.3 response 
---
只读属性，返回接收到的数据（即body部分）他的类型有XMLHttpRequest.responseType 属性的值决定。如果本次请求没有成功或者数据不完整，该属性就会等于null。
2.4 responseType 类型
---
1， ”“：字符串（默认值）
2， “arraybuffer”：ArrayBuffer对象
3， “blob”：Blob对象
4 ，“document”：Document对象
5， “json”：JSON对象
6， “text”：字符串
2.5 responseText
---
responseText属性返回从服务器接收到的字符串，该属性为只读。如果本次请求没有成功或者数据不完整，该属性就会等于null。
responseText属性返回从服务器接收到的字符串，该属性为只读。如果本次请求没有成功或者数据不完整，该属性就会等于null。
```javascript
var data = ajax.responseText;
data = josn .parse(data);
```
2.6 responseXML 
---
responseXML属性返回从服务器接收到的Document对象，该属性为只读。如果本次请求没有成功，或者数据不完整，或者不能被解析为XML或HTML，该属性等于null。

2.7 status 属性表示请求所得到的HTTP状态码
---
200, OK，访问正常
301, Moved Permanently，永久移动
302, Move temporarily，暂时移动
304, Not Modified，未修改
307, Temporary Redirect，暂时重定向
401, Unauthorized，未授权
403, Forbidden，禁止访问
404, Not Found，未发现指定网址
500, Internal Server Error，服务器发生错误
基本上，只有2xx和304的状态码，表示服务器返回是正常状态。
2.8 timeout 属性等于一个整数，表示多少毫秒后，如果请求仍然没有得到结果，就会自动终止。如果该属性等于0，就表示没有时间限制。
```javascript
var xhr = new XMLHttpRequest();
  xhr.ontimeout = function () {
    console.error("The request for " + url + " timed out.");
  };
  xhr.onload = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback.apply(xhr, args);
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.timeout = timeout;
  xhr.send(null);
}
```
##### 2.9， 事件监听接口
---
onloadstart 请求发出
onprogress 正在发送和加载数据
onabort 请求被中止，比如用户调用了abort()方法
onerror 请求失败
onload 请求成功完成
ontimeout 用户指定的时限到期，请求还未完成
onloadend 请求完成，不管成果或失败
#### 三 XMLHttpRequest实例的方法
3.1  abort方法用来终止已经发出的HTTP请求。
---
```javascript
ajax.open('GET', 'http://www.example.com/page.php', true);
var ajaxAbortTimer = setTimeout(function() {
  if (ajax) {
    ajax.abort();
    ajax = null;
  }
}, 5000);
```
3.2  getAllResponseHeaders()
---
getAllResponseHeaders方法返回服务器发来的所有HTTP头信息。格式为字符串，每个头信息之间使用CRLF分隔，如果没有受到服务器回应，该属性返回null。
3.3 getResponseHeader()
---
getResponseHeader方法返回HTTP头信息指定字段的值，如果还没有收到服务器回应或者指定字段不存在，则该属性为null。
#### 四， XMLHttpRequest实例的事件
4.1  readyStateChange事件
readyState属性的值发生改变，就会触发readyStateChange事件。

4.2  progress事件
上传文件时，XMLHTTPRequest对象的upload属性有一个progress，会不断返回上传的进度。

4.3 load事件、error事件、abort事件

### HTTP METHOD: 客户端向服务器端发送请求的方式
以下请求方式不管哪一种都可以向服务器传递数据，也可以从服务器端获取到数据，而且本质意义上内有任何的区别
GET: 一般应用于从服务器获取数据（给服务器的数据少，从服务器哪的数据少）
```javascript
//使用gei发送请求给服务器传递内容一般使用"URL 问号传参数的方式"
    xhr.open("get","/getList?num=12")
```
POST: 一般应用于向服务器推送数据
```javascript
// 一般使用"请求主体的方式"传递给服务器
xhr.open("post","/getList");
xhr.send('{"name":"lisi","age":7}');
```
PUT: 一般用于给服务器上增加资源文件（上传图片功能）
DELETE： 一般应用于从服务器上删除资源
HEAD: 一般只获取服务器的响应头信息

### GET和POST 请求的区别：
一，get 请求传递给服务器的内容存在大小限制,而post 理论上没有限制
原因： get 通过URL 传参给服务器，而每个浏览器对于URL的长度存在限制，谷歌8kb,火狐7kb,IE2kb,如果URL的长度超过限制，浏览器会把超出的部分截取。
二， 缓存问题
get 请求会出先缓存（这个缓存不一定是304）， post 没有缓存。
在项目中一般get请求不会让其出现缓存"清楚缓存"：URL 的末尾追加一个随机数
// xhr.open("get","/getList?num=12&_="+Math.random());
三： 安全问题
一般来说get不安全，而post相对安全一点。













































































