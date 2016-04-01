//define functions here

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});

function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass("tasty");
  });
}

function pressIt() {
  $("input").on('keydown', function(key) {
    if(key.keyCode == 71) {
      alert('you have pressed the g key');
    }
    return;
  });
}

function submitIt() {
  $("form").on("submit", function() {
    alert("your form is going to be submitted now");
  return;
});
  
}