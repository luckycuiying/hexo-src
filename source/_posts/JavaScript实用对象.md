---
title: javascript的对象使用
date: 2017-05-31 11:30:37
tags:  JavaScript
---
### 【JavaScript的对象理解不多的文章】(https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects)
    
### json数据的获取，删除和赋值理解代码如下：
```javascript
<script type="text/javascript">
    var gggg = {
        webview : {
            dianping : '121wdwdwd ke',
            note : 'adcdefg',
            invite : 'com.www.xxxxx://inv',
            sharenote : 'com.www.xxxxx://?keywords=&day=&type=&month='
        },
        touch : {
            dianping : '121wdwdwd ke',
            note : 'adcdefg',
            invite : 'com.www.xxxxx://inv',
            sharenote : 'com.www.xxxxx://?keywords=&day=&type=&month='
        }

    };

    // alert(gggg.webview.dianping)
    function getData(p1,p2){
        gggg[p1][p2];
        // alert(gggg[p1][p2]);

    }

    function delData(p1,p2){
        delete gggg[p1][p2];
        // alert(gggg[p1][p2]);

    }


    function setData(p1,p2,new1){
        gggg[p1][p2] = new1;
    }
    //获取json 数据 
    getData('touch','note');
    // 删除对象里的某一项值 
    delData('touch','note');
    //给对象里的某一项重新赋值 
    setData('touch','note', '12345');
    getData('touch','note');


    var person = {
        name : 'aaaa',
        age  : 18,
        addr : 'bj'
    };
    //kk 表示person对象里的每一项 属性
    for (var kk in person) {
       // 这里的kk 代表当前传进来的属性 
      console.log("obj." + kk + " = " + person[kk]);
    }
结果：
    obj.name = aaaa
    obj.age = 18
    obj.addr = bj


</script>
```