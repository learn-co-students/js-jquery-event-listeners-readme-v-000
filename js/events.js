'use strict';

//define functions here

//define functions here
function getIt() {

 $('p').on('click', function() {
  return alert("Hey!");
 });
}
function frameIt() {

  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt(){
   $('#typing').on('keydown', function(key){
     if(key.keyCode == 103){
           alert('g was pressed');
       }
   })
 }

function submitIt() {
  $('form').on('submit', function(){
    alert("Your form is going to be submitted now.")
    
  })

}

$(document).ready(function() {
 

   getIt();
   frameIt();
   pressIt();
  submitIt();
}); 
