//define functions here

function getIt() {
  $('p').on('click', function () {
    alert("Hey!")
  });
}

function frameIt() {
  $('img').on('load', function () {
    $('img').addClass('tasty');
  });
}

function  pressIt() {
  $('#typing').on('keydown', function (key) {
    if(key.which == 71) {
      alert("You pressed 'g'!");
    }
  });
}

function submitIt() {
  $('form').on('submit', function () {
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

// call functions here

});
