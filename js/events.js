//define functions here
function getIt(){
  $('p').on('click', ()=>{
    alert("Hey!");
  });
}

function frameIt(){
  $('img').on("load", (evt)=>{
    $('img').addClass('tasty');
  });
}

function submitIt(){
  $("form").on('submit', ()=>{
    alert("Your form is going to be submitted now.");
  });
}

function pressIt(){
  $('input[type=text]').on('keydown', (evt)=>{
    if(evt.which==71)alert("G");
  });
}

$(document).ready(function(){
getIt();
frameIt();
// call functions here

});
