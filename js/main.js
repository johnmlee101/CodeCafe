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

$(".imageHeader > img").click(function() {
    window.location.href = "http://purdueieee.org"; 
});
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
$('#email').keypress(function (e) {
  if (e.which == 13) {
    apply();
  }
});

