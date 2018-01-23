//define functions here

function getIt() {
  $("p").click(function() {
    alert("Hey!");
  });
}

function frameIt() {
  $("img").on("load", function(){
    $("img").addClass("tasty");
  });
}

function pressIt() {
  $("form").on('keydown', function(key) {
    if(key.which == 71){
        alert("You have pressed 'g'!");
    }
  });
}

function submitIt() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){

// call functions here

});
