//define functions here
function getIt()
{
  $('p').on("click", function(key){
  alert("Hey!");
});
 }

function frameIt()
{
  $('img').on("load", function(key){
  $('img').addClass('tasty');
});
}

function pressIt()
{
  $(window).on("keydown", function(key){
    if(key.which==71)
       alert("you pressed g!");
}) ;
}

function submitIt()
{
  $('form').on("submit", function(key){
  alert("Your form is going to be submitted now.");
});
}


$(document).ready(function(){

// call functions here
getIt();
pressIt();
frameIt();
submitIt();
});
