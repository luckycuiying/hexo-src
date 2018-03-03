---
title: ES6事件绑定
date: 2017-11-15 12:20:43
tags:
---
### react绑定事件方式
1，触发点击事件时才执行  onChanageTab()这个函数，然后把结果赋给onTap
```javascript
            onTap ={()=>{
                    this.onChanageTab()
                }}
```
2 ,触发点击事件时才执行  onChanageTab这个函数，但这个函数只是定义但没有执行
```javascript
            onTap ={()=>{
                    this.onChanageTab
                }}
```                
3,不用触发点击事件，onChanageTab() 这个函数就执行了，然后就把值赋给了ontap
```javascript
            onTap ={
                    this.onChanageTab()
                }
```
###  onTap  
```javascript  
<Touchable touchClass ="tap-opacity" onTap ={()=> {this.onChanageTab()}}> //这个组件里定义的。
</Touchable>
```


### react 原生的方式：
```javascript
 onClick = {()=>{alert(‘click')}}
 class Square extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:null
        }
    }
    changeStateVal(){
        this.setState({
            value:'hello,word'
            })
    }
    render(){
        return(
            <button className="Square" onClick={()=>{this.changeStateVal()}}>
            {this.state.value}
            </button>
            )
    }
 }
 ```