---
title: ES6 里面的类
date: 2018-01-04 17:53:36
tags:
---

### 类 (class)
 也可以设置默认参数
```javascript
    class Person{
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
        showName(){
            return this.name;
        }
        showAge(){
            return this.age;
        }
    }
    var p1 = new Person('lisi',20)
    console.log(p1.showAge())
```
### 继承 
原型继承：
```javascript
class Tab{
    constructor(id){
        this.oBox = document.getElementById(id);
        this.oBtn = this.oBox.getElementsByTagName('input');
        this.oDiv = this.oBox.getElementsByTagName('div');
        this.iNow = 0;
        this.init();
    }
    init(){
        for (let i = 0; i < this.oBtn.length; i++) {
            this.oBtn[i].onclick = function(){
                this.iNow =i;
                this.hide();
                this.show(i);
            }.bind(this)
        }
    }
    hide(){
        for (let i = 0; i < this.oBtn.length; i++) {
            this.oBtn[i].className ="";
            this.oDiv[i].style.display="none";
        }
    }
    show(index){
        this.oBtn[index].className="on";
        this.oDiv[index].style.display="block";
    }
}
// box2 继承box
class AutoTab  extends Tab{
    constructor(id){
        super(id);
        setInterval(this.next.bind(this),1000);
    }
    next(){
        this.iNow++;
        if(this.iNow ==this.oBtn.length)this.iNow =0;
        this.hide();
        this.show(this.iNow)
    }
}
window.onload=function(){
    new Tab('box');
    let at = new AutoTab('box2');
    document.onclick = function(){
        at.next()
    }
}

```

### ES6 模块化
模块化操作主要包括两个方面。
export :负责进行模块化，也是模块的输出。
import : 负责把模块引，也是模块的引入操作。
export default的使用
加上default相当是一个默认的入口。在一个文件里export default只能有一个。
export default{a,d,c} 多个模块导出


### promise就是一个对象，用来传递异步操作的数据
1，pending(等待，处理中)---> resolve (完成)
                        reject (拒绝，失败)
2，创建一个promise的对象
```javascript
var p1 = new Promise(function(resolve,reject){
    // resolve(1)
    reject(2)

});
// then 是有返回值的，他的返的promise的对象值 会在下一个then 里面体现
p1.then(function(val){
    console.log("成功了"+val);
},function(val){
    console.log('失败了'+val)
})
``` 
3, catch  用来捕获的
```javascript
var p1 = new Promise(function(resolve,reject){
    // resolve(1)
    reject(2)

});
p1.then(function(val){
    console.log("成功了"+val);
    throw '发生错误了'
}).catch(function(e){
    console.log(e) // 发生错误了
})
```

4, all 方法 全部，用于将多个Promise 对象组合，包装成一个全新的promise 实例
Promise.all([p1,p2,p3...]); 所有的Promise 对象都正确，才走成功，否则，只有一个报错，都是失败。

```javascript
var p1 = Promise.resolve(3);
var p2 = Promise.reject(5);
Promise.all([true,p1,p2]).then(function(val){
    console.log('成功了'+val)
},function(val){
    console.log('错误了'+val)
})
```

### race() 返回的也是一个promise 对象  
最先能执行promise 的结果，根据 那个快，就用那个
```javascript
    var p1 = new Promise(function(resolve,reject){
    setTimeout(resolve,100,'one');
})

var p2 = new Promise(function(resolve,reject){
    setTimeout(resolve,500,'two');
})
Promise.race([p1,p2]).then(function(val){
    console.log(val) // one  谁先到时间 就先执行谁
})
```
Promise.reject() 生产错误的一个Promise对象
用法
```javascript
Promise.reject('错误信息').then(function(){

    },function(res){
        console.log(res) // 错误信息
    })

```
Promise.resolve() 生成一个成功的Promise 对象
语法： Promise.resolve(val); val 不同类型的值
```javascript
Promise.resolve('success').then(function(val){
    console.log(val) // 成功
    },function(res){
        console.log(res) // 这句是不会执行
    })
```
Promise.resolve(Promise); 传了一个Promise 对象的值。
```javascript
let  p1 = Promise.resolve(3);
let p2 = Promise.resolve(p1)
p2.then(function(val){
    console.log(val) //3
})

```



