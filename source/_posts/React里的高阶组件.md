---
title: React里的高阶组件
date: 2018-03-04 21:50:02
tags: React
---

### 高阶组件的定义
高阶组件（HOC）是React中对组件逻辑进行重用的高级技术，但是高阶组件并不是React API.
它是一种模式，这种模式是由React 自身的组件性质必然产生的。
##### 具体而言 高阶组件就是一个函数，并且该函数接受一个组件作为参数，并且返回一个包裹后的组件

### 高阶组件的作用
是将一个组件转换成另一个组件
### 应用场景
1，React代码进行更高层次重构的好方法，如果你想精简你的state和生命周期方法，那么高阶组件可以帮助你提取出可重用的函数。

### 最常见的案例
```javascript
    export default function connectToStores(stores, getState) {

    return function (DecoratedComponent) {
        return class StoreConnector extends Component {
            constructor(props) {
                super(props)
                this.handleStoresChanged = this.handleStoresChanged.bind(this)
                this.state = getState(props)
            }

            componentWillMount() {
                stores.forEach(store =>
                    store.addChangeListener(this.handleStoresChanged)
                )
            }

            componentWillUnmount() {
                stores.forEach(store =>
                    store.removeChangeListener(this.handleStoresChanged)
                )
            }

            handleStoresChanged() {
                let newState = getState(this.props);
                this.setState(newState);
            }

            render() {
                console.log(this.props)
                return <DecoratedComponent { ...this.props } { ...this.state } />
            }
        }
    }
}

```
### 容器组件和展示组件
```javascript
    // 展示组件
function Clock(props){
    var [hours, minutes,seconds] = [props.hours,props.minutes,props.seconds].map(num=>{
        return num<10?'0'+num:num;
    })
    return <h1>{hours}:{minutes}:{seconds}</h1>
    
}
// 容器组件
export default class ClockContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date()};
    this._update = this._updateTime.bind(this);
  }
  render() {
    return <List { ...this._extract(this.state.time) }/>;
  }
  componentDidMount() {
    this._interval = setInterval(this._update, 1000);
  }
  componentWillUnmount() {
    clearInterval(this._interval);
  }
  _extract(time) {
    return {
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds()
    };
  }
  _updateTime() {
    this.setState({ time: new Date(this.state.time.getTime() + 1000) });
  }
};
```
### 注意事项
1， 不要再render函数中使用高阶组件
2，必须将静态方法做拷贝
3，Refs属性不能传递

### 无状态组件
创建纯展示组件，这种组件只负责根据传入的props来展示，不涉及到要state状态的操作。
无状态函数式组件形式上表现为一个只带有一个render方法的组件类
无状态组件的创建形式使代码的可读性更好，并且减少了大量冗余的代码，精简至只有一个render方法，大大的增强了编写一个组件的便利，除此之外无状态组件还有以下几个显著的特点：

1，组件不会被实例化，整体渲染性能得到提升
因为组件被精简成一个render方法的函数来实现的，由于是无状态组件，所以无状态组件就不会在有组件实例化的过程，无实例化过程也就不需要分配多余的内存，从而性能得到一定的提升。
组件不能访问this对象
2，无状态组件由于没有实例化过程，所以无法访问组件this中的对象，例如：this.ref、this.state等均不能访问。若想访问就不能使用这种形式来创建组件
3，组件无法访问生命周期的方法
因为无状态组件是不需要组件生命周期管理和状态管理，所以底层实现这种形式的组件时是不会实现组件的生命周期方法。所以无状态组件是不能参与组件的各个生命周期管理的。
4,无状态组件只能访问输入的props，同样的props会得到同样的渲染结果，不会有副作用

只要有可能，尽量使用无状态组件。