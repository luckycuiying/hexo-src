---
title: jQuery总结
date: 2017-12-15 08:23:23
tags:
---

### jQuery: 它是用原生的JS 来封装的常用方法的类库(解决了兼容问题)


#### jQuery常用的方法
#####  选择器： 通过传递对应规则的内容，获取到页面中指定的元素/元素集合
//  jQuery 选择器获取到的结果是一个jQuery对象，可以使用jQuery中提供的那些属性和方法，但是不能直接使用浏览器内置的属性和方法。
1, jQuery === $ //true
```javascript
    var $Div = jQuery("#div1"); 
    var $Div = $("#div1"); 
```

// JS 获取到的结果是属于元素对象/元素集合/节点元素...她们就可以使用浏览器为期提供的那天天生自带的属性和方法
```javascript
    var oDiv = document.getElementById("div1");
    console.log(oDiv.clientWidth);
```
// jQuery 不能使用js 的方法和属性 ,js 也不能使用jQuery的属性和方法
```javascript
    var $Div = $("#div1"); 
    console.log($Div.clientWidth) // undefined
    console.log($Div.getAttribute('爱学习')) //  getAttribute is not a function

```
##### js 和 jQuery 相互转换
1》 把原生js 转变为jQuery
```javascript
var oDiv = document.getElementById("div1");
var $oDiv = $(oDiv) // 就把原生获取到的oDiv 转换成jQuery
```
2》把jQuery 转换成 原生js 对象 :直接通过索引获取对应的元素即可
```javascript
var $oDiv = $("#div");
//第一种方法
console.log($oDiv[0].getAttribute('爱学习')) //爱学习
// 第二种
$oDiv.get(0)

```
##### 常用选择器
(1)基本
 #id            $("#div");
 element        $('div');
 .class         $('.className')
   \*            $('*')
 selector1,selector2,selectorN : $("#div ,div, .className")把符合每一个选择器获取到的jQuery对象最后融合在一起，一起获取到

 (2)层次选择器：
 ancestor descendant    $("#div li")  // 获取子子孙孙辈分
 parent > child         $("#div>li")  // 只获取儿子辈分的元素
 
 prev + next            $("#div + ") // 获取他的下一个弟弟元素
                        $("#div + li") // 获取下一个弟弟并且标签名是ul的(一个元素)
 
 prev ~ siblings        $("#div ~ ")    // 获取#div 的所有弟弟元素节点
                        $("#div ~ ul ")  // 在#div的所有弟弟元素中查找标签名为 ul 元素 

 (3)基本过滤器选择器  // 某一个集合下的
 :first
 :last
 :not   除了谁  $("#div>div:not(.className)") 支持className ,标签。  #div1 下所有子集DIV 中样式类名不包含className 的所有元素节点
 :even
 :odd
 :eq   通过索引获取集合中的某一个，但是获取的结果依然还是一个jQuery对象（ 而 get 方法也是通过索引来获取的，但是获取到的结果是一个js原生对象
 :gt   $("#div1>div:gt(2)") 大于索引2的(不包含索引2这一项)
 :lt   $("#div1>div:lt(2)") 小于索引2的(不包含索引2这一项)
 :header
 :animated

 (4)内容过滤器选择器
 :contains   $("#div1 li:contains("js")")  // 获取的所有Li 中内容包含js 的元素。
 :empty   
 :has    $("#div div:has(ul)")  //查找在所有div中包含ul 的那些元素
 :parent  

 (5)可见性过滤器选择器
 :hidden
 :visible

 (6)属性过滤器选择器
 [attribute]
 [attribute=value]
 [attribute!=value]
 [attribute^=value]
 [attribute$=value]
 [attribute*=value]
 [attrSel1][attrSel2][attrSelN]
 ![图片的位置](/assets/blogimg/attribute.png)
 (7)子元素过滤器选择器
 :nth-child
 :first-child
 :last-child
 :only-child

 (8)表单选择器
 :input
 :text
 :password
 :radio
 :checkbox
 :submit
 :image
 :reset
 :button
 :file
 :hidden

 (9)表单过滤器选择器
 :enabled
 :disabled
 :checked
 :selected

##### 方法和属性
一： 回调函数的方法
二： 常用的属性
1》 attr : 获取和设置元素的自定义属性，等价于原生js中的get/setAttrbute
removeAttr
```javascript
var $box = $("#box");
$box.attr("data","100"); //设置属性值
$box.attr("data")  // 获取属性值
$box.attr({
    index:1,
    name:"目的地"
    }); //批量设置自定义属性
$box.removeAttr("data")  //移除data 属性
```
2》 prop: 获取和设置元素的属性(和attr是不同的两套方式，两者之间不能互相混用：用attr设置的只能用attr删除或者修改，获取；同理用prop设置的也只能用prop操作)
// removeProp : 删除
prop 内置的属性可以在html结构中体现出来，但是不是内置的属性是体现不出来的(但是是可以获取到值的)
```javascript
var $box = $("#box");
$box.prop("data",100);  //设置属性值和修改
$box.prop("data");  // 获取属性值
$box.prop({ //批量设置自定义属性
    index:1,
    name:"poi列表"
    })
$box.removeProp("data")  //移除data 属性
```
attr 和 prop的区别： attr 一般都是用来操作自定义的属性，而prop一般都是操作元素的内置属性的(尤其是针对表单大部分都是用prop)
3》 $() 支持传两个参数
```javascript
    // jQuery(selector,context) context一般不用传递，默认是document，但是我们也可以指定具体的上下文来获取需要的元素
    var $box = $("#box"), $boxDivList = $("div", $box)
    $("div",$box) <==> $("#box div");
    $("#box >div") <==> $box.children("div");
```
4》 $boxDivList.addClass("w1"); 通过jQuery选择器获取到是一个元素集合，然后让集合直接调用jQuery中提供的方法，相当于给集合
中的每一个元素都调取了对应的方法(jQuery内置循环操作)
5》 each() 可以遍历jQuery集合中的每一项(和数组的forEach类似)
```javascript
$boxDivList.each(function(index,item){
    $(this).addClass('w2');
    })

```
##### css :
1, css() : 获取(不传参数)/设置（传参数）当前元素的样式值
![图片位置](/assets/blogimg/css.png)
3, offset : 不管父级参照物是谁，获取（不传参数）当前元素距离body的偏移距离(top:xxx,left:xxx)和设置(带参数)
4, position: 获取(不传参数)/设置（传参数）当前元素距离父级参照物的偏移距离(top:xxx,left:xxx); 
5, scrollTop/scrollLeft :获取(不传参数)/设置（传参数）元素的卷去的高度 和设置
6,width/height  // 获取(不传参数)/设置（传参数）元素的 width和height 的值
7,innerWidth/innerHeight //  获取(不传参数)/设置（传参数）元素的可视区域的宽高(等价于clientWidth和clientHeight) 
    设置的时候，保留padding的值，把width 值进行改变(width的最小值为0)
![图片位置](/assets/blogimg/innerwidth.png)
8,outerWidth/outerHeight  获取(不传参数)/设置（传参数）元素的可视区域的宽高(包含边框)，设值和innerWidth 设置一样。
 如果传递进来的是true ,默认的会把外边距margin的值也计算在内了。
![图片位置](/assets/blogimg/outer.png)

9，jQuery 的链式写法原理：执行完成一个方法后的返回值的结果依然是一个jQuery对象，这样就可以继续调用下一个jQuery的方法，如果返回来的不是一个jQuery的对象就会报错
![图片位置](/assets/blogimg/lian.png)
#### 文档处理
一， 向指定元素的末尾位置追加一个新元素 
1, append() :向指定元素的末尾位置追加一个新元素 
    语法：容器.append(元素)
2，appendTo() : 向指定元素的末尾位置追加一个新元素 
    语法： 元素.appendTo(容器)
```javascript
    var oDiv = document.createElement("div");
    oDiv.id = "div5";
    $box.append(oDiv) ;把原生的js和 jQuery 元素节点追加到jQuery对象里面
    $(oDiv).appendTo($box);
```
二， 向指定元素的开头位置追加一个新元素 
语法： 通上末尾位置追加一个新元素
1,  prepend()
2, prependTo()
三，在每个匹配的元素之后/之前插入内容。
1,after()
2,before() 
四：把选择器获取到的元素追加到指定元素的前面或是后面(追加到同级相当于添加了一个哥哥或是弟弟)
1，inserBefore()
2，inserAfter()
```javascript
    var oDiv = document.createElement("div");
    oDiv.id = "div5";
    $(oDiv).inserBefore($box);
    $(oDiv).inserAfter($box); // 
```
五： replaceAll(selector) : 用匹配到的元素替换所有selector 匹配元素替换
```javascript
     var oDiv = document.createElement("div");
        oDiv.id = "div5";
        $(oDiv).replaceAll('ul') ; // 页面中所有的ul 都用oDiv 给替换了
```
六： remove() : 把匹配的结果在页面中移除，移除自己本身
```javascript
$box.remove(); //删除本身
$("ul").remove() ; 
$("ul").remove("#ul2"); //删出所有ul 里面ID是#ul2 的哪一个。
```
七: detach([expr])：
从DOM中删除所有匹配的元素。
这个方法不会把匹配的元素从jQuery对象中删除，因而可以在将来再使用这些匹配的元素。与remove()不同的是，所有绑定的事件、附加的数据等都会保留下来。
```javascript
//从DOM中把所有段落p删除

<p>Hello</p> how are <p>you?</p>
$("p").detach(); //how are
//  从DOM中把带有hello类的段落删除
<p class="hello">Hello</p> how are <p>you?</p>
$("p").detach(".hello"); // how are <p>you?</p>

```
八: clone() 克隆 
####  筛选
一， filter,children, find : 常用的三个筛选方法
1,filter() : 同级过滤 首先通过选择器获取一个集合，在获取的内容中进行二次筛选
```javascript
    console.log($("*",$box).filter("ul"));
```
2,chiidren() : 子集过滤器
```javascript
    console.log($box.children())
    console.log($box.children(".w1"))
    console.log($box.children("ul"))
    console.log($box.children("#div1"))
    console.log($box.children("#div1,#div2"))
    console.log($box.children("[name='data']"))
```
3,find() :后代过滤器
```javascript
    console.log($box.find()) // 空集合
    console.log($box.find("li")) // $("#box li")
    console.log($box.find([name='data'])) // $("#box [name ='data']")
```

### jQuery 这个元素对象的私有属性中叫做selector这个属性存储的值是当前本次查找的选择器的内容； context是当前本次查找的上下文
```javascript
    $("*",$box)  // context: document , selector:"#box *"
    $("*", document.getElementById("box") // context:div#box  ,selector:"*";
```
###  jQuery 中有两个each 和两个map 原理一样，map 支持返回值
1> 循环选择器获取到的jQuery 集合的每一项， 语法： $("div").each()
```javascript
 $("div").each(function(index,item){
    console.log(item;)
    })
```
2> 循环数组，类数组，对象中的每一项 语法：$.each()
```javascript
    $.each([23,43,11,44,33,32,3,34,5,6],function(index,item){
        console.log(item;)
    });
    $.each(document.getElementsByTagName("*"),function(index,item){
        console.log(item);
    });
    $.each({name:"李四",age:'27'}, function(index,item){
        console.log(item);
    });

```
3> $.makeArray == likeArray
#### 事件
.stop()和.finish() 
$box.stop().hide():结束上一个动画，下面的动画紧接着当前的位置开始运动的
.finish():结束上一个动画，并且让元素快速的到达目标位置，在开始下一个动画


####  效果动画

[不错的文章](http:jQuery.cuishifeng.cn/)