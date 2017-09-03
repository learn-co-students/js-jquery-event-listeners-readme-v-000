//define functions here

$(document).ready(function(){

// call functions here

});


function getIt() {
  $('p').on('click', function(key) {
    alert("Hey!");
  })
}


function frameIt() {
  $('img').on('load', function(key) {
    $('img').addClass('tasty')
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.")
  })
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if (key.which == 71) {
      alert("g was pressed");
    }
  })
}
