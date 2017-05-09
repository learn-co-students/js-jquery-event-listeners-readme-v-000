//define functions here
$(document).ready(function(){
});

function getIt() {
  $("p").on("click", function() {
    alert("Hey!");
    return;
  })
}

function submitIt() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.");
  })
}

function frameIt() {
  $("img").on("load", function () {
    $(this).addClass("tasty");
  })
}

function pressIt() {
  $("form").on("keydown", function(key) {
    if (key.which == 71) {
      alert("g was pressed")
    }
  })
}
