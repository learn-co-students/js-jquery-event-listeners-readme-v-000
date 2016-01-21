//define functions here
function getIt(){
  $('p').on("click", function(){
    alert("HEY")
  });
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass("tasty");
  });
}

function pressIt(){
 $('#typing').on('keydown', function(theKey) {
    if(theKey.keyCode == 71){
        alert('g was pressed');
    }
  });
}

function submitIt(){
  $("form").on("submit", function() {
    if ($( "input:first" ).val() === "I love jQuery") {
      alert('your form is going to be submitted now');
      return;
    }
    $("div").html("Not valid!");
  });
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});