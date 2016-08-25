//define functions here

//The function should bind a click event 
//to the p tag. When the paragraph is clicked, 
//the function should alert "Hey!".

function getIt(){
  $('p').on('click', function(){
    alert('hey!')
  });
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty')
  });
}

//function should bind a keydown event to 
//the input field of the form that alerts a 
//user when they have pressed the g key.

function pressIt(){
  $('input').on('keydown', function(key){
    if(key.which == 71){
      alert('g was pressed');
    }
  });
}

//function should bind a submit event 
//to the form that alerts "Your form is 
//going to be submitted now."

function submitIt(){
  $("form").on("submit", function(){
    alert("Your form is going to be submitted now.");
  })
}

$(document).ready(function(){

// call functions here

});
