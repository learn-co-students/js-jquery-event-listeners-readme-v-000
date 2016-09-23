//define functions here

function getIt() {
  return alert('Hey!');
}

function frameIt() {
  $('img').addClass("tasty");
}

function pressIt() {
  $('#typing').on("keydown", function(key) {
    if (key.which === 71) {
      alert('g key pressed');
    }
  });
}

function submitIt() {
  alert("Your form is going to be submitted now.");
}

$(document).ready(function(){
// call functions here
  $('p').on("click", getIt());
  $('img').on("load", frameIt());
  $('form').on("submit", submitIt());
});
