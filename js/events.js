//define functions here

function getIt() {
  $('p').click(function() {
    window.alert("Hey!");
  });
}

function frameIt() {
  $('img').load(function() {
    $(this).addClass("tasty");
  });
}

function pressIt() {
  $('input').keydown(function(key){
    if(key.which == 71) {
      window.alert("g key pressed");
    }
  });
}

function submitIt() {
  $('form').submit(function() {
    window.alert("Your form is going to be submitted now.")
  });
}


$(document).ready(function() {

  // call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
