---
title: css选择器
date: 2017-11-03 20:27:00
tags:  css
---
###  一，基本选择器
1，* ：通用选择器，匹配任何元素。 例如： *{margin:0;paddig:0}
2, E ：标签选择器， 匹配所有使用E标签的元素。 例如： p{font-size:2rem}
3，.info: class选择器。匹配所有class属性包含info的元素。 例如： .infor{color:#000} p.info{color:#000}
4, #footer : id 选择器。 例如：#footer{backgruond:#fefefe}  p#footer{background:#fefefe}

###  二 多元素组合选择器
5，E F ： 多元素选择器，同时匹配所有E元素或F元素，E和F之间用逗号分隔
例如：div , p { color:#f00; }
6，E F:后代元素选择器，匹配所有属于E元素后代的F元素，E和F之间用空格分隔
例如：#nav li { display:inline; } 
7，E>F： 子元素选择器，匹配所有E元素的子元素F
例如： div > strong { color:#f00; }
8，E+F ： 毗邻元素选择器，匹配所有紧随E元素之后的同级元素F（兄弟节点）
例如：p + p { color:#f00; }
9，E ~ F 匹配任何在E元素之后的同级F元素（所有弟弟节点）
###  三，属性选择器
10，E[att] :匹配所有具有att属性的E元素，不考虑它的值。（注意：E在此处可以省略，比如"[cheacked]"。以下同。）
例如： p[title]{color:#f00}
11， E[att=val] :匹配所有att属性等于"val"的E元素
例如：div[class=error] { color:#f00; }
12，E[att~=val]: 匹配所有att属性具有多个空格分隔的值、其中一个值等于"val"的E元素
例如：td[headers~=col1] { color:#f00; }
13，E[att|=val] :匹配所有att属性具有多个连字号分隔（hyphen-separated）的值、其中一个值以"val"开头的E元素，主要用于lang属性，比如"en"、"en-us"、"en-gb"等等
例如：p[lang|=en] { color:#f00; }

### 四: 伪类选择器
14. E:first-child:   匹配父元素的第一个子元素
例如：p:first-child { font-style:italic; }
15. E:link : 匹配所有未被点击的链接
16. E:visited:   匹配所有已被点击的链接
17. E:active :   匹配鼠标已经其上按下、还没有释放的E元素
18. E:hover: 匹配鼠标悬停其上的E元素
19. E:focus: 匹配获得当前焦点的E元素
20. E:lang(c) :  匹配lang属性等于c的E元素

### 五, 伪元素
21. E:first-line    匹配E元素的第一行
例如：p:first-line { font-weight:bold; color;#600; }
22. E:first-letter  匹配E元素的第一个字母
例如：.preamble:first-letter { font-size:1.5em; font-weight:bold; }

23. E:before    在E元素之前插入生成的内容
例如：.cbb:before { content:""; display:block; height:17px; width:18px; background:url(top.png) no-repeat 0 0; margin:0 0 0 -18px; }
24. E:after 在E元素之后插入生成的内容
例如：a:link:after { content: " (" attr(href) ") "; }
### 六，CSS 3 属性选择器

25. E[att^="val"]   属性att的值以"val"开头的元素
26. E[att$="val"]   属性att的值以"val"结尾的元素
27. E[att*="val"]   属性att的值包含"val"字符串的元素

### 七，CSS 3中与用户界面有关的伪类
序号  选择器 含义
28. E:enabled   匹配表单中激活的元素
29. E:disabled  匹配表单中禁用的元素
30. E:checked   匹配表单中被选中的radio（单选框）或checkbox（复选框）元素
31. E::selection    匹配用户当前选中的元素

### 八， CSS 3中的结构性伪类
32, E:root  匹配文档的根元素，对于HTML文档，就是HTML元素
33, E:nth-child(n) : 匹配其父元素的第N个子元素，第一个编号为1.
34, E:nth-last-child(n)   匹配其父元素的倒数第n个子元素，第一个编号为1
35, E:nth-of-type(n)    与:nth-child()作用类似，但是仅匹配使用同种标签的元素
36, E:nth-last-of-type(n)   与:nth-last-child() 作用类似，但是仅匹配使用同种标签的元素
37, E:last-child    匹配父元素的最后一个子元素，等同于:nth-last-child(1)
38, E:first-of-type  匹配父元素下使用同种标签的第一个子元素，等同于:nth-of-type(1)
39, E:last-of-type  匹配父元素下使用同种标签的最后一个子元素，等同于:nth-last-of-type(1
40, E:only-of-type  匹配父元素下使用同种标签的唯一一个子元素，等同于:first-of-type:last-of-type或 :nth-of-type(1):nth-last-of-type(1)
41, E:empty 匹配一个不包含任何子元素的元素，注意，文本节点也被看作子元素

### 九，css3 反选伪类
 42, E:not() :匹配不符合当前选择器的任何元素 例如：:not(p) { border:1px solid #ccc; }

### 十， CSS 3中的 :target 伪类
43. E:target    匹配文档中特定"id"点击后的效果
