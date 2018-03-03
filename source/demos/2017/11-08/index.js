layout: false
--------
// 原理：
var arr= [4,3,5,2,1]
// 第一轮比较 虽然没有实现最终目标，但是已经把数组中最大的那个值（5）已经放到数组的末尾了。
// 4>3 交互位置 [3,4,5,2,1]
// 4<5 不交换位置[3,4,5,2,1]
// 5>2 交换位置[3,4,2,5,1]
// 5>1交换位置 [3,4,2,1,5]
//第二轮比较 虽然没有实现最终目标，但是已经把数组中最大的那个值（4）已经放到数组的末尾了。
// 3>4 不交换位置 [3,4,2,1,5]
// 4>2 交换位置 [3,2,4,1,5]
// 4>1 交换位置 [3,2,1,4,5]
// 第三轮
// 3>2 交换位置 [2,3,1,4,5]
// 3>1 交互位置 [2,1,3,4,5]
//第四轮
// 2>1 交换位置 [1,2,3,4,5]

//规则： 冒泡排序比较的次数是数组的arr.length-1,
//如果 i 代表轮数 ，j 是每一轮循环的次数
//但是每一轮比较的次数是arr.length-1-i
//两个比较交换位置： 1，利用一个一个空变量，2，不适用空变量
var a = 12; 
var b = 13;
a = a+b; //a =25
b = a-b; //25-13 = 12
a = a-b ; //25-12 =13
function bubbleSort(arr){
    var length = arr.length-1;
    var temp=null;
    for (var i = 0; i <length; i++) {
        for (var j = 0; j<length-i; j++) {
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j] =arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    return arr   
}
var res = bubbleSort(arr)
// console.log(res)

//y优化
var arr2 = [2,1,4,3,5]
// 第一轮 i= 0
// 2>1 交换位置  [1,2,4,3,5]
// 2<4不交换位置 [1,2,4,3,5]
// 2<3 不交换位置 [1,2,4,3,5]
// 2<5 不交换位置 [1,2,4,3,5]
// 第二轮 i= 1
// 1<2 不交换位置 [1,2,4,3,5]
// 2<3 不交换位置 [1,2,4,3,5]
// 4>3 交换位置 [1,2,3,4,5]
 
 function bubbleSort2(arr){
      var flag = false;
        for (var i = 0; i < arr.length-1; i++) {
           for (var j = 0; j < arr.length-1-i; j++) {
               if(arr[j]>arr[j+1]){
                 arr[j] = arr[j]+arr[j+1];
                 arr[j+1] = arr[j]-arr[j+1];
                 arr[j] = arr[j]-arr[j+1];
                 flag = true;
               }
               if(flag){
                flag=false;
               }else{
                break;
               }
           }
        }
        return arr2
 }
 var res2 = bubbleSort2(arr2)
 // console.log(arr2)
 // 快速排序 原理是 1，在数组中找一个基准点（一般都把数组的中间项作为基准）
 // 2， 那基准点和数组中的其他项比较，声明两个left，right变量，把小于基准点的项放到左边的空数组里，把大于基准点的项放进右边的空数组里面
 // 3, 然后循环再找基准点在分，最后数组传进来的是一项，就返回数组本身。
 // 拆分完后，再把左边排序号的数组和基准点好友右边排序好的通过concat()合并
 var arr2 =[12,13,23,14,20,26,34,13,16]
 function quickSort(arr){
    if(arr.length<=1){ //如果传递进来的数组中只有一项，就不用在拆分了。直接返回当前的数组
        return arr;
    }
    var pointIndex = Math.floor(arr.length/2) // 找准基准点的索引值,向下取整。
    var poitValue = arr.splice(pointIndex,1)[0]; //通过基准点的索引在原来的数组中，删除这一项，并且把基准点这一项得值获取到。
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        var cur = arr[i];
        // 循环那当前的值和基准点做比较，小于基准点的push到左边的数组里，大于的就push 到右边的数组里。
        cur< poitValue? left.push(cur) :right.push(cur);
    }
    return quickSort(left).concat([poitValue],quickSort(right))
 }
 var res = quickSort(arr)
 // console.log(res)
 // 插入排序
function insertSort(arr){
    var newArray =[]; //相当于左手放所有拿来的所有扑克牌的盒子
    newArray.push(arr[0]); // 拿到第一张牌
    // for 循环就是你重复一次一次的抓牌
    for (var i = 1; i < arr.length; i++) {
        var cur = arr[i];// 当前抓到的牌
        // 需要把当前抓到的牌和左手里的牌倒叙比较插入
        for(j=newArray.length-1;j>=0;){
            if(cur<newArray[j]){ //当前新抓的牌比左右手中的newArray[j]这张牌小，继续和newArray[j]的牌比
                j--;
                if(j===-1){//说明当前的牌比你手里的任何一张牌都小，我们把这张牌插入到最前面
                    newArray.unshift(cur)
                }
            }else{ //说明当前抓的牌比右手中的newArray[j]这张牌大，放在newArray[j]这张牌的后面，也相当于在newArray[j+1] 这张牌的前面。
                newArray.splice(j+1,0,cur);
                j=-1;
            }
        }
    }
    return newArray;
}
var res = insertSort([6,3,5,7,2,4])
console.log(res)