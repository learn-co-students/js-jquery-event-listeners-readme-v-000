

$(document).ready(function(){

 getIt();
 frameIt();
 pressIt();


});

function getIt(){
  $('p').on('click',function(){alert('Hey!');})
}

function frameIt () {
  $('img').on('load', function(){$('img').addClass('tasty');})
}

function pressIt () {
  $('input:first').on('keydown', function() {
    if(keyCode == 71){alert('g was pressed');}})
}

function submitIt () {
  $('form').on('submit', function() {alert("your form is going to be submittet now");})
  return;
}
