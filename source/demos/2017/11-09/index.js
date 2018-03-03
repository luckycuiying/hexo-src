
// 把1-100之间不能被三整除的数相加
// 方法一：
var total = null;
for (var i = 1; i <= 100; i++) {
    if(i%3!==0){
        total += i;
    }
}
console.log(total)
var total2 =null;
var i= 1;
while(i<=100){
    i % 3 !==0 ? total2+=i : null
    i++;
}
console.log(total2)

// 递归方法
function sum(n){
    if(n===0){ // 如果传递进来的值是0，则说明已经累加到头了。我们不需要累加了。返回一个0
        return 0 ;
    }
    if(n %3===0){ // 如果传进来的值是可以被三整除的话，我们认为当前的值是不需要累加的，继续执行下一个值。
        return sum(n-1);
    }
    // console.log(n)
    return n+sum(n-1); //100+sum(100-1)98+97+.....

}
var total4 = sum(100);
console.log(total4)

function fun(n){
    if(n == 1){
        return 1;
    }
    if(n%2 !==0){
        return fun(n-1);
    }
    return n*fun(n-1);
}
var reslut = fun(10)
console.log(reslut)

//使用递归的方法让setTimeout实现setInterval
// 原理： 每隔一秒后执行完成后，从新在设置一个新的定时器，让新的定时器一秒后在执行move方法，一直到结束。
    var count = 0;
     var timer = null;
     function move(){
        window.clearTimeout(timer); // 每次都新设置一个定时器，旧的不用需要清除，不然占内存。
        count++;
        console.log(count);
        if(count===10){
            return
        }
        timer = window.setTimeout(move,1000)
    }
    move()