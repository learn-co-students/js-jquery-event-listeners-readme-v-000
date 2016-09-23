//define functions here

function getIt() {
  alert('Hey!');
}

function frameIt() {
  $('img').addClass("tasty");
}

function pressIt() {
  if ($('#typing').val() == 'g') {
    return alert('g key pressed');
  }
}

function submitIt() {
  alert("Your form is going to be submitted now.");
}

$(document).ready(function(){
  debugger;
// call functions here
  $('p').on("click", getIt());
  $('img').on("load", frameIt());
  $('#typing').on("keydown", pressIt());
  $('form').on("submit", submitIt());
});
