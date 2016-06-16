//define functions here
'use strict';

$(document).ready(function(){

});

function getIt() {
  $('p').on('click',function () {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass("tasty");
  });
}

function pressIt() {
$('#typing').on('keydown', function(key) {
    if(key.keyCode === 71){
        alert('s was pressed');
    }
  });
}


function submitIt() {
  $('form').on('submit', function () {
    alert("Your form is going to be submitted now.");
  });
}
