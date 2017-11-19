//define functions here

function getIt() {
  $("p").on("click", function() {
    alert("Hey!");
    return;
  });
}

function frameIt() {
  $("img").addClass("tasty").on("load", function() {
    return;
  });
}

function pressIt() {
  $(document).on("keydown", function(key) {
    //if (key) {
      if (key.which == 71) {
        alert("g was pressed");
      //}
    }
  });
}

function submitIt() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.");
    return;
  });
}


// call functions here


$(document).ready(function() {
  getIt();
  frameIt();
  pressIt();
  submitIt();
})