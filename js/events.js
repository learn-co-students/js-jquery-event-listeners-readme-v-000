//define functions here

$(document).ready(function(){

// call functions here

});

function getIt(){
  $("p").on("click", function(){
    alert("hey!");
  })
}


function frameIt(){
  $("Img").on("load", function(){
    $("Img").addClass("tasty");
  })
}

function pressIt(){
  $("#typing").on('keydown', function(key){
    if(key.which===71)
    alert("You pressed 'g'!");
  })
}

function submitIt(){
  $("form").on("submit", function(form){
    alert("Your form is going to be submitted now.");
  })
}
