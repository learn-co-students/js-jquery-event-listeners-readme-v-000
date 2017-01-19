//define functions here

function getIt(){
  $("p").bind("click", function(){
      alert("Hey!");
  });
}

function frameIt(){
  $("img").addClass("tasty")
}

function pressIt(){
  $(document).on('keypress', function(key) {
    if (key.which == 71){
      alert('enter was pressed');
    }
  });
}

function submitIt(){
  $("form").on("submit", function() {
    if ($( "input:first" ).val() === "correct") {
      alert('your form is going to be submitted now');
      return;
    }
    alert("you entered the wrong value");
    return;
  });
}


// $(document).on('keypress', function(key) {
//   if (key.which == 13){
//     alert('enter was pressed');
//   }
// });    




$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});


// Define a function pressIt that does not accept a parameter. 
// The function should bind a keydown event to the input field of the form that alerts 
// a user when they have pressed the g key.

// Define a function submitIt that does not accept a parameter. 
// The function should bind a submit event to the form that alerts "Your form is going to be submitted now.".
