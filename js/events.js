//define functions here

$(document).ready(function(){

// call functions here

});

function getIt(){
  $("p").on("click", function(){
    alert("Hey!")
  })
}

function frameIt(){
  $("img").on("load", function(){
    $("img").addClass("tasty");
  })
}

function pressIt(){
  $("#typing").keydown("keydown", function(key){
    if(key.which === 71)
    alert("You pressed 'g'!");
  })
}

function submitIt(){
  $("form").on("submit", function(form){
    alert("Your form is going to be submitted now.");
  })
}
