---
title: Dom总结
date: 2017-10-08 15:13:07
tags:  js 基础
---


###   一，DOM的概念和属性
##### 1，什么是DOM
DOM 是Document Object Model 的缩写。是对XML文档的内容进行表示的模型。
它把XML文档看作是一系列node和node间的关系，每一个node都当做一个对象，所有又叫做文档对象模型。
我们可以把DOM理解为DOM树(html文档)，有很多的节点(元素)构成。
##### 2，DOM的属性
节点三要素(节点的属性)： 节点的类型（nodeType），节点的值(nodeValue)，节点的名称(nodeName)
![图片的位置](/assets/blogimg/nodeType.png)
1,节点的类型（nodeType):只读属性,表示的是该节点的类型。属性可用来区分不同类型的节点，
    比如常用类型： 元素(1),属性(2)和文本(3)。
```javascript
    nodeType == 1; //元素节点   大写的标签名
    nodeType == 2 ;// 属性节点   
    nodeType == 3; // 文本节点   #text
    nodeType == 8 ; //注释节点   
    nodeType ==9 ; //document文档节点
    var type = node.nodeType;
```
2，节点的值(nodeValue)：Node.nodeValue 属性返回或设置当前节点的值。
     语法:
```javascript
  let value = node.nodeValue; //value是一个包含当前节点的值的字符串（如果有的话）
```
常用的三种节点类型中，元素节点是没有nodeValue 值的，返回的是null; 文本节点返回的是文本的内容， 
属性节点返回的是该属性的属性值
##### 如果nodeValue的值为null,则对它赋值也不会有任何效果.
3，节点的名称(nodeName):返回当前节点的节点名称, 只读属性.
    语法：
``` javascript
let str = node.nodeName;
```
#### 遍历节点树
4, Node.childNodes (获取所有的子节点)返回包含指定节点的子节点的集合(空格和换行都当做文本节点处理)，该集合为即时更新的集合包含所有类型的节点。
5. Node.children （获取所有元素节点） 返回的都是元素节点的所有子节点（只是元素节点的集合）有兼容问题，火狐不支持，IE包含注释节点
6, Node.parentNode 返回指定的节点在DOM树中的父节点.(永远是一个元素节点)
7，Node.firstChild/firstElementChild （获取所有子节点中的第一个节点）只读属性返回树中节点的第一个子节点，如果节点是无子节点，则返回 null。(包含所有类型节点)
8，Node.lastChild/lastElementChild （获取所有子节点中的最后一个）是一个只读属性，返回当前节点的最后一个子节点。如果父节点为一个元素节点，则子节点通常为一个元素节点，或一个文本节点，或一个注释节点。如果没有子节点，则返回 null。
9, Node.nextSibling/nextElementSibling（获取下一个弟弟节点）是一个只读属性，返回其父节点的 childNodes 列表中紧跟在其后面的节点，如果指定的节点为最后一个节点，则返回 null。
10, Node.previousSibling /previousSiblingElementSibling(获取上一个各个节点)返回当前节点的前一个兄弟节点,没有则返回null.
11， document 节点是没有父元素。document节点的parentNode属性将返回null. document.nodeType的值是9.
#### 文本内容
12，innerHTML : 获取元素节点的内容 
13，Node.innerText 是一个表示一个节点及其后代的“渲染”文本内容的属性。
14， Node.textContent 属性表示一个节点及其后代的文本内容。

语法：
``` javascript
// 获得文本内容:
let text = element.textContent;
// 设置文本内容:
element.textContent = "this is some sample text";
```
(1)描述:
如果 element 是 Document，DocumentType 或者 Notation 类型节点，则 textContent 返回 null。如果你要获取整个文档的文本以及CDATA数据，可以使用 document.documentElement.textContent。
如果节点是个CDATA片段，注释，ProcessingInstruction节点或一个文本节点，textContent 返回节点内部的文本内容（即 nodeValue）。
对于其他节点类型，textContent 将所有子节点的 textContent 合并后返回，除了注释、ProcessingInstruction节点。如果该节点没有子节点的话，返回一个空字符串。
在节点上设置 textContent 属性的话，会删除它的所有子节点，并替换为一个具有给定值的文本节点。
(2)与innerText的区别
Internet Explorer 引入了 node.innerText。意图类似，但有以下区别：
textContent 会获取所有元素的内容，包括 p标签 元素，然而 innerText 不会。
innerText意识到样式，并且不会返回隐藏元素的文本，而textContent会。
由于 innerText 受 CSS 样式的影响，它会触发重排（reflow），但textContent 不会。
与 textContent 不同的是, 在 Internet Explorer (对于小于等于 IE11 的版本) 中对 innerText 进行修改， 不仅会移除当前元素的子节点，而且还会永久性地破坏所有后代文本节点（所以不可能再次将节点再次插入到任何其他元素或同一元素中）。
(3)与innerHTML的区别
正如其名称，innerHTML 返回 HTML 文本。通常，为了在元素中检索或写入文本，人们使用innerHTML。但是，textContent通常具有更好的性能，因为文本不会被解析为HTML。此外，使用textContent可以防止  XSS 攻击。


###  二，DOM 中常用的增删改查方法
##### 1，创建节点 和 文本节点
```javascript
//动态创建元素节点
var oDiv = document.createElement('div');
//它创建的是一个元素节点，所以nodeType等于1，oDiv.nodeName将返回oDiv;

// 文本节点
var text = document.createTextNode('I love js');
//它创建的是一个文本节点，所以nodeType等于3，text.nodeName将返回#text;
```
##### 2, 复制节点 Node.cloneNode() 方法返回调用该方法的节点的一个副本.
语法：
```javascript
let dupNode = node.cloneNode(deep);
//node 将要被克隆的节点
// dupNode 克隆生成的副本节点
//deep 可选 是否采用深度克隆,如果为true,则该节点的所有后代节点也都会被克隆,如果为false,则只克隆该节点本身.
```
需要注意的
1，克隆一个元素节点会拷贝它所有的属性以及属性值,当然也就包括了属性上绑定的事件(比如onclick="alert(1)"),但不会拷贝那些使用addEventListener()方法或者node.onclick = fn这种用JavaScript动态绑定的事件.
2，在使用Node.appendChild()或其他类似的方法将拷贝的节点添加到文档中之前,那个拷贝节点并不属于当前文档树的一部分,也就是说,它没有父节点.
3，如果deep参数设为false,则不克隆它的任何子节点.该节点所包含的所有文本也不会被克隆,因为文本本身也是一个或多个的Text节点.
4 ，如果deep参数设为true,则会复制整棵DOM子树(包括那些可能存在的Text子节点).对于空结点(例如img和input元素),则deep参数无论设为true还是设为false,都没有关系,但是仍然需要为它指定一个值.
5 ，如果克隆后，Id  一样，需要用setAttribute('id','another_id'),改变新的节点。
### 以上 创建节点 和 文本节点,复制节点 都是游离状态，不会自动添加到文档中，需要配合 appendChild()或者 insertBefore()方法或者replaceChild()方法。
#####  3，插入节点 appendChild() 
语法：
```javascript
var oDiv = document.createElement('div');
document.appendChild(oDiv)
// 插入指定节点的最后一个子节点列表后添加一个新的子节点。
```
移动元素功能 [查看demo](/demos/2017/10-08/index.html)
##### 4, 插入节点 insertBefore() 在当前节点的某个子节点之前再插入一个子节点。
语法： 
```javascript
var insertedElement = parentElement.insertBefore(newElement, referenceElement);
```
insertedElement: 是被插入后的新节点，即 newElement
parentElement :这个方法是由父元素调用的。
newElement: 是要插入的新节点
referenceElement : 在插入newElement之前的那个节点位置.(如果没有这个参数的话就和appendChild()方法一样)
```javascript
var parentElement = document.getElementById('parentElement');
var childElement = document.getElementById('childElement');
var span =  document.createElement("span");;
var newElement = parentElement.insertBefore(span,childElement);
```
![查看结果](/assets/blogimg/jieguo.png) 
##### 5, 删除节点 removeChilid() 从DOM中删除一个子节点。返回删除的节点.
语法：
```javascript
let removeEle = parentNode.removeChilid(ele);
```
removeEle : 删除的节点
parentNode: 父元素调用这个方法
ele: 要删除的元素
案例一：指定父元素
```javascript
<div id="top" align="center">
  <div id="nested"></div>
</div>
<script>
    var d = document.getElementById("top");
    var d_nested = document.getElementById("nested");
    var throwawayNode = d.removeChild(d_nested);
</script>
````
结果是
```html 
<div id="top" align="center"></div>
```
案例二： 未指定父元素
```javascript
<div id="top" align="center">
  <div id="nested"></div>
</div>
<script>
var d_nested = document.getElementById("nested");
var p = d_nested.parentNode;
p.removeChilid(d_nested);
</script>
```
结果同上
##### 6, 替换节点 replaceChild(）用指定的节点替换当前节点的一个子节点，并返回被替换掉的节点。
语法：
```javascript
replacedNode = parentNode.replaceChild(newChild, oldChild);
```
newChild : 用来替换 oldChild 的新节点。如果该节点已经存在于DOM树中，则它会被从原始位置删除。
oldChild : 被替换掉的原始节点。
replacedNode: 和oldChild相等。
parentNode:父元素调用这个方法
案例： 
```javascript
    <div><span id="childSpan">foo bar</span></div>
    <script>
        var sp1 = document.createElement("span");
            sp1.setAttribute("id", "newSpan");
        var sp1_content = document.createTextNode("新的span元素的内容.");
            sp1.appendChild(sp1_content);
        var sp2 = document.getElementById("childSpan");
        var parentDiv = sp2.parentNode;
        parentDiv.replaceChild(sp1, sp2);
    </script>
```
结果：
```html
<div>
  <span id="newSpan">新的span元素的内容.</span>
</div>
```
##### 7,设置/获取/删除/判断是否有属性的一系列方法 
语法:
```javascript
setAttribute() // 设置元素的属性（包含自定义属性） 修改了html元素的结构。
var a = document.createElement("p");
a.setAttribute('title','my demo');
// <p title="my demo"></p>
getAttribute() // 获取属性方法
<div id="tab" title='标题'></div>
var a = document.getElementById('tab');
var b = a.getAttribute('title')
//结果： 
console.log(b) // 标题
hasAttribute() //方法返回一个布尔值，表示当前元素节点是否包含指定属性。
var d = document.getElementById('div1');
if (d.hasAttribute('align')) {
  d.setAttribute('align', 'center');
}
removeAttribute() //从当前元素节点移除属性。
// HTML代码为
 <div id="div1" align="left" width="200px"></div>
document.getElementById('div1').removeAttribute('align');
// 现在的HTML代码为
 <div id="div1" width="200px"></div>
```
这个方法在IE6-8 先不能修改class属性。
### 8，查找节点
```javascript

// 返回当前文档中第一个类名为 "myclass" 的元素,移动端我们获取元素常用的方法（IE6/7/8 不兼容）
var el = document.querySelector("#myclass"); //获取一个
// 返回一个文档中所有的class为"note"或者 "alert"的div元素
var els = document.querySelectorAll("div.note, div.alert"); //获取多个类数组集合
document.querySelectorAll('input[type ="radio"]')

// 2, document.getElementById('xxx')
// 获取元素id 在整个文档中，通过元素的ID 获取到这个元素对象，上下文是document.
// 若果页面中id 重复了，那么这个方法默认只获取第一个元素，在IE 6/7 下，input里面neme 也当id 使用；还不区分大小写。
// 若果没有获取到，返回null.
var el = document.getElementById('xxx');

// 3，获取节点的name获取节点,主要应用于表单具有name属性的元素。 返回是具有同样名称的节点类数组 然后，我们可以通过要获取节点的某个属性来循环判断是否为需要的节点
var els = document.getElementsByName(elementName) //应用于获取具有同样name 的表单元素
// 获取元素class通过元素的类名（class值）
var els = document.getElementsByClassName('highlight');

//  4,document.getElementsByTagName('td');
// 获取元素标签元素 通过节点的Tag获取节点集合，同样该方法也是返回一个类数组
// document称之为上下文(content),就是我们自己可以限定当前获取元素的范围。
var els = document.getElementsByTagName('td');
```
// 5, document.getElementsByClassName('tab');通过元素的类名获取class 值。
var eles = document.getElementByClassName('tab')

// 6，document.body  //获取body
// 7, document.documentEelement  // 获取HTML 文档

###   9. hasChildNodes方法返回一个布尔值,表明当前节点是否包含有子节点.
```javascript
element.hasChildNodes()
```
#### 总结有三种方法可以判断当前节点是否有子节点。
node.firstChild !== null
node.childNodes.length > 0
node.hasChildNodes()



