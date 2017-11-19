function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.");
  });
}

function pressIt() {
  $(document).on('keydown', function(e) {
    if(e.which === 71) {
      alert("Thanks for pressing g!");
    }
  });
}

function frameIt() {
  $('img').on('load', function(e) {
    e.target.className = "tasty";
  });
}

$(document).ready(function(){
  getIt();
  submitIt();
  pressIt();
  frameIt();
});

