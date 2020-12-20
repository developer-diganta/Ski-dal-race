var s=false;
    var sd = new Audio("Eight_Bit_Race_Cars.mp3");
$(".so").click(function(){
  if(!s){
    $(".so").html('<img src="https://img.icons8.com/color/48/000000/room-sound.png/">');
    console.log("clicked");

    sd.play();
    s=true;
  }
  else{
    $(".so").html('  <img src="https://img.icons8.com/fluent/48/000000/mute.png"/>');
s=false;
    sd.pause();
  }

});



var trig=true;
score=0;
var level=1;
ct=true;

cnt=2;
$(document).keydown(function(e){

    console.log("Key pressed!");
    if(e.keyCode==38){
      $(".skier").addClass("jump");
      setTimeout(()=>{
        $(".skier").removeClass("jump")},700);
    }


  }
)

$(document).keydown(function(e){
    console.log("Key pressed!"+e.keyCode);
    if(e.keyCode==39){
      sk=document.querySelector(".skier");
      skX=parseInt(window.getComputedStyle(sk,null).getPropertyValue('left'));
      sk.style.left=skX+150+"px";


  }
}
)

$(document).keydown(function(e){
    console.log("Key pressed!"+e.keyCode);
    if(e.keyCode==37){
      sk=document.querySelector(".skier");
      skX=parseInt(window.getComputedStyle(sk,null).getPropertyValue('left'));
      sk.style.left=skX-150+"px";


  }
}
)

// score=0;
setInterval(function(){
function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
}
col=collision($(".skier"),$(".hurdle"));
if(col){
  console.log("True");
  console.log(score);
  j=document.querySelector(".scene");
  j.style.background="rgba(0,0,0,0.6)";
  $(".score").addClass("emp");
  $(".skier").addClass("emp");
  $(".hurdle").addClass("emp");
    $(".crowd").addClass("emp");
      $(".crowd2").addClass("emp");
        $(".logo").addClass("emp");
  $(".skifall").removeClass("emp");
  if(score>10){
    $(".sco").html("Final Score : " + score+ '<img src="gold.png" alt="gold" height="75" width="75">');}
  else if(score>7){
      $(".sco").html("Final Score : " + score+ '<img src="silver.png" alt="silver" height="75" width="75">');
    }
  else if(score>5){
      $(".sco").html("Final Score : " + score+ '<img src="bronze.png" alt="bronze" height="75" width="75">');
  }
  else{
      $(".sco").html("Final Score : " + score);
  }


  ct=false;}

else{

      var x1 = $(".skier").offset().left;
          var x2 = $(".hurdle").offset().left;
          b=Math.abs(x1-x2);
  if(trig && ct && b<100){
      score=score+1;
      if(score>cnt ){
        cnt=cnt+5;
        // a=document.querySelector(".hurdani");
        if(level>10){
            $(".fame").html("Final Score : " + score+ ' You are in Hall Of Fame <br> <img src="fame.png" alt="fame" height="200" width="200">');
          console.log("Yipee!!In the hall of fame");
          return;
        }
        a="hurd "+(10-level)+ "s linear infinite";
        level=level+1;
        // a.style.animation="hurd"+"5s"+"linear infinite";
        console.log(level);
        $(".hurdani").css("animation",a);

      }
      showScore();
      trig=false;
      setTimeout(()=>{
        trig=true;
      },5000);
  }
}


// var x1 = $(".skier").offset().left;
// var x2 = $(".hurdle").offset().left;
// if(x2<0){
//   score=10000000000000000;
//   console.log(score);
// }

},100);

function showScore(){
  $(".score").html("Hurdle No. : 0"+score);
}
