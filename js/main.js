function urlParam(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    } else {
       return results[1] || 0;
    }
}


function postPHP(email)
{
$.ajax({        
   type: "POST",
   url: "php/submit.php",       
   data: {
     email: email 
   },
   success: function(result) {
        if(result == 1)
        {
          window.location.href = "submitted.html";    
        }         
        else {
          $("#email").css("border","1px solid #ff0000")
          $("#email").after("<div id='emailError'>Please enter a valid email.</div>")   
        }
      },
    error: function(e) {
        console.log(e)
    }
    });  
}


function scroll() {
    $('html,body').animate({
        scrollTop: [$("body").height(), "swing"]
    }, 1000);
}

function reset() {
    $("#email").css("border","none");
    if ($("#emailError")) $("#emailError").remove();
}
function apply() {
    $("#email").css("border","none");
    if ($("#emailError")) $("#emailError").remove();
    var email = $("#email").val();
    if (email != '')
    {
        postPHP(email);
    }
    else {
        $("#email").css("border","1px solid #ff0000")
        $("#email").after("<div id='emailError'>Please enter a valid email.</div>")               
    }
}


function loadVideo(){
  //if(randomVideo == 1) {
    $("#bgvid").children()[0].src = "images/video.mp4"
  //}
  //else {
  //  $("#bgvid").children()[0].src = "images/video5.mp4"
  //}
  $("#bgvid").load();
}
var randomVideo;
$(function() {
  //randomVideo = Math.ceil(Math.random()*2)
  //if(randomVideo == 1)
  //{
  //$(".videoBody").css("background","url(images/background2.jpg)")
  //}
  loadVideo();
  $(".imageHeader > img:first-child").click(function() {
      window.location.href = "http://purdueieee.org"; 
  });
  $(".imageHeader > img:nth-child(3)").click(function() {
      window.location.href = "https://www.cs.purdue.edu/cswn/";
  });
  $('#email').keypress(function (e) {
  if (e.which == 13) {
    apply();
  }
  });
})
