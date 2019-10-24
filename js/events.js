//define functions here
function getIt() {
  $("p").on("click", function() {
    alert("Hey!");
  })
};

function frameIt() {
  $("img").on("load", function() {
    $("img").addClass('tasty');
  })
};

function pressIt() {
  $("input#typing").on("keydown", function(key) {
    console.log(key.which)
    if(key.which === 71 || key.detail === 71) {
      alert("You pressed the 'g' key");
    }
  })
};

function submitIt() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.")
  })
};


$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
