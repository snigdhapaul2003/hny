$(".btn").click(function () {
  $(".main").css("display","none");
  $(".main").css("height","0");
  $(".play").css("display","block");
});

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}
function shuffle(s) {
  var arr = s.split('');
  var n = arr.length;

  for(var i=0 ; i<n-1 ; ++i) {
    var j = getRandomInt(n);

    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  s = arr.join('');
  return s;
}

var s = ["festivities","hourglass","january","resolution","fireworks","sparkler","memorable","prosperous","magical","calendar","midnight","gathering"];
var x=Math.floor(Math.random() * 12);


var word1 = shuffle(s[x]);

$("#word").text(word1);

// var word2=$("input").value;
var word2=s[x];

function getVal() {
  var word3=document.querySelector("input").value;
  $("#wor").text("Your answer is:"+word3);
  word3=word3.toLowerCase();
  // if(word3===word2)
  // {
  //   console.log("hello");
  // }
  var result=word2.localeCompare(word3);
  console.log(result);
  if(result===0)
  {
    window.setTimeout(function() {
      $("input").css("display","none");
      $("#wor").text("congratulations");
    },10000);

    $(".play").css("display","none");
    $(".play").css("height","0");
    $(".back-image").css("display","block");
    $(".quotes").css("display","block");
    $(".memories").css("display","block");
    $("#footer").css("display","block");
  }
  else
  {
    $("input").css("display","none");
    $("#wor").text("Oh! Sorry! Refresh this page to try again!!!");

  }
}


$(".btn").click(function () {
  $("#gallery").css("display","inherit");
  $(".btn").css("display","none");
});

$(".reso").one('mouseover',function () {
  var res=prompt("🎉Your new year resolution!!! Write it down here!!!🎉");
  alert(" 🥳 Congratulations 🥳 ");
  $(".reso").css("display","none");
  $(".resss").text("My new year resolution:  "+res);
});
