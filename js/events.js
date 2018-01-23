//define functions here

function getIt() {
  $('p').on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
$('img').on("load", function() {
  $('img').addClass("tasty");
});
}

function pressIt() {
// keydown event to the input field of the form that
// alerts a user when they have pressed the g key
$(document).on("keydown", function(key) {
  if(key.which == 71) {
    alert('g was pressed');
  }
});
}

function submitIt() {
  $('form').on("submit", function() {
    alert('Your form is going to be submitted now.');
    return;
  });
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
