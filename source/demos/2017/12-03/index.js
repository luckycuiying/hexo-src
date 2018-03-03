
function getCss (curEle,attr){
    var val =null,reg =null;
    if("getComputedStyle" in window){
        val = window.getComputedStyle(curEle,null)[attr];
    }else{
        if(attr ==="opacity"){
            val = curEle.currentStyle["filter"]; //"alpha(opacity=10)"
            reg = /^alpha\(opacity=(\d+(?:\.\d+)?)\)$/i;
            val =  reg.test(val) ? reg.exec(val[1]/100):1;
        }
        val = curEle.currentStyle[attr];

    } // 去掉单位的正则
    reg = /^-?(\d+(\.d+)?)(px|pt|rem|em)?$/i;
    return reg.test(val)? parseFloat(val):val;
}

function Leftfiler(){
    this._constructor();
}
Leftfiler.prototype={
    _constructor:function(){
        this.initDoms();
        this.initEvents();
    },
    initDoms:function(){
        this._first_box1 = document.getElementById("first_box1");
        this._first_box2 = document.getElementById("first_box2");
        this._left = document.getElementById("lift");
        this.box = document.getElementsByClassName("box");
        this.lift_item = document.getElementsByClassName("lift_item");
        this.J_lift_item_top = document.getElementById("J_lift_item_top");
    },
    computeDisplay:function(ele){
        var curHeight =parseInt(getCss(this._first_box1,"height"))+parseInt(getCss(this._first_box2,"height"))-200;
        var curTop = document.documentElement.scrollTop|| document.body.scrollTop;
        ele.style.display= curTop>curHeight ? "block" : "none";
    },
    getCrrentIndex:function(){
        var curScrollTop = document.documentElement.scrollTop|| document.body.scrollTop;
        for (var i = 0; i < this.box.length; i++) {
            var eleOffsetTop = this.box[i].offsetTop;
            var maxVal = eleOffsetTop + this.box[i].offsetHeight;
            if(curScrollTop>eleOffsetTop&&curScrollTop<maxVal){
                console.log(i,this.lift_item[i])
                break;
               // this.lift_item[i].style.backgroundColor = "red"; 
            }
        }
    },
    leftMove:function(ele){
        var self = this;
       ele.style.display="none"; // 只设置这一行，往后走的时候又触发了window.onscroll,我们需要取消掉
       window.onscroll = null;
       var duration = 500, interval = 10,target = document.documentElement.scrollTop||document.body.scrollTop;
       var step = (target/duration)*interval;
       var timer = window.setInterval(function(){
           var curTop = document.documentElement.scrollTop||document.body.scrollTop;
           if(curTop===0){
               window.clearInterval(timer);
               window.onscroll = function(){
                      self.computeDisplay(ele)
                  }
               return;
           }
           curTop -= step;
           document.documentElement.scrollTop = curTop
           document.body.scrollTop= curTop
       },interval)

    },
    jumpTagert:function(index){
        if(index===0|| index ===11){
            return;
        }
        var ele =document.getElementById("portal_"+index);
        var offsetTop = ele.offsetTop || ele.offsetTop;
        document.documentElement.scrollTop = offsetTop;
        document.body.scrollTop = offsetTop;
    },
    initEvents:function(){
        var self = this;
        window.onscroll = function(){
        self.getCrrentIndex()
        self.computeDisplay(self._left);
        }
        // this.J_lift_item_top = document.getElementByClassName("J_lift_item_top"); 获取到的是className的元素集合，不是一个。
        for(var i=0;i<this.lift_item.length;i++){
            var curEle =this.lift_item[i] ;
            (function(curEle2,index){
                curEle2.onclick=function(e){
                    self.jumpTagert(index)
                }
            })(curEle,i)
        };
        this.J_lift_item_top.addEventListener('click',function(){
            self.leftMove(self._left);
        })
       
    }

}
var currentTab = new Leftfiler();
