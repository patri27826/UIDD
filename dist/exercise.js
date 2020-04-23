$(document).ready(function() {
  $('#ajax-form button[type="submit"]').click((event) => {
    event.preventDefault()
//====== ajax打包資料 ====================================================================================================
$.get('./step5', {                   //notice the link from html `fName` to server `fname` (`fName` in `./dist/exercise.html` vs. `fname` in `./ser.js`)
  fname: $('input[name="fName"]').val(),
  lname: $('input[name="lName"]').val(),
//fname: $("fName").val(),lname: $("lName").val(),
})

//====== ajax資料回顯 ====================================================================================================
$.get('./step5', {
  fname: $('#ajax-form input[name=fName]').val(),
  lname: $('#ajax-form input[name=lName]').val(),
}, (data) => {
$('#ajax-output').html('<font color="#ffffff">'+ data+ '</font>');                  //回傳歡迎詞
$('#out_1').css( "display", "none" );
$('#out_2').css( "display", "block" );
$('#out').css( "display", "block" );

setTimeout(() => {    //update `div#ajax-output` first                                          //回傳信用卡頁
$('#out').css( "display", "none" );
$('#out_3').css( "display", "block" );
$('#out_sub').css( "display", "block" );
$('#bottom').css( "display", "block" );
$('#Header').html(document.getElementById("ajax-output").textContent.substring(14,document.getElementById("ajax-output").textContent.indexOf("!")
));

}, 1500)
})

//====== ajax同步等待loading ====================================================================
setTimeout(() => {    //update `div#ajax-output` first
 $('#ajax-output').html('loading')
}, 0)
  })
});


$(document.getElementById('out_1')).click(()=>{
$(document.getElementById('out_1')).css('display',"none");
$('#ajax-output').html('<font color="#ffffff">'+ 'HELLO '+ '</font>');    
$('#out').css( "display", "block" );}
)

$('#ajax-output').click(()=>{
  $('#ajax-output').css('display','none');
$('#out').css( "display", "none" );
$('#out_3').css( "display", "block" );
$('#out_sub').css( "display", "block" );
$('#bottom').css( "display", "block" );

})

var expansion = null; //是否存在展開的
var container = document.querySelectorAll('#card_base');
 for(var i = 0; i < container.length; i++){ 
   var x, y, X, Y, swipeX, swipeY;
    container[i].addEventListener('click', function(event) { 
      x = event.changedTouches[0].pageX;
       y = event.changedTouches[0].pageY; 
       swipeX = true; swipeY = true ; 
      var rect=this.getBoundingClientRect();
      var s =rect.left;
       
       
       
      this.addEventListener('touchmove', function(event){ 
        X = event.changedTouches[0].pageX;
        Y = event.changedTouches[0].pageY; // 左右滑動 
        
       
        if(x>=X)
        {
          var sum=s-x+X;
          event.preventDefault;
          this.style.marginLeft=sum+'px';
        }
        this.addEventListener('touchend',function(event){
          this.style.marginLeft= s+'px';
          if(x-X>20)
          {
    //$('.autumn.leaf').transition('slide right');


            this.style.marginLeft =s+'px';
          
          }
        });
/*
        if(swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0){ // 阻止事件冒泡 
          event.stopPropagation; 
          if(X - x > 10){ //右滑 
            event.preventDefault;
             this.className = ""; //右滑收起 
          } 
          if(x - X > 10){ //左滑 
            event.preventDefault;
            this.className = "swipeleft"; //左滑展開
             
            } 
             swipeY = false; 
            } // 上下滑動 
            if(swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) 
            { swipeX = false; } */
          }); 
    });
  }
    
  
