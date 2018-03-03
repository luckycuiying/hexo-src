function formartTime(){
    var w ={
        0:'日',
        1:'一',
        2:'二',
        3:'三',
        4:'四',
        5:'五',
        6:'六'
    }
    function zero(value){
        return value <10 ? "0"+value:value;
    }
    var time = new Date();
    var year = time.getFullYear();
    var mounth = time.getMonth()+1; //0 -11 代表我们的12个月
    var day = time.getDate();
    var week = time.getDay(); //0-6
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    // var mlSeconds = time.getMillisenconds();
    var resTime = year+'年'+zero(mounth)+'月'+zero(day)+'日 '+'星期'+w[week]+' '+zero(hours)+'时'+zero(minutes)+'分'+zero(seconds)+'秒';
    return resTime;
}
var timeBox = document.getElementById('div1');
    timeBox.innerHTML = "北京时间："+formartTime();
var timer = setInterval(function(){
    timeBox.innerHTML = "北京时间："+formartTime();
},1000)