//define functions here

$(document).ready(function(){
  getIt();
  frameIt();

});

function getIt() {
  $('p').on("click", function(){
    alert('Hey!');
  });
};

function frameIt() {
  $('img').on("load", function() {
    $(this).addClass("tasty");
  });
};

function pressIt() {
  $('input#typing').on("keydown", function(key) {
    if (key.which == 71) {
      alert('You pressed g');
    };
  });
};

function submitIt() {
  $('form').on("submit", function() {
    alert("Your form is going to be submitted now.");
    return;
  });
};
