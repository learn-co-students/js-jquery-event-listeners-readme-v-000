//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  })
}

function pressIt() {
  $('input[type="text"]').on('keydown', function(key) {
    if (key.keyCode === 71) {
      alert('You have pressed the g key');
    }
  });
}

function submitIt() {
  alert("you form is going to be submitted now");
  return;
}

$(document).ready(function(){
  // call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});














