//define functions here

function getIt() {
  $("p").on("click", function() { alert("Hey!") })
}

function frameIt() {
  $("img").on("load", function() { $(this).addClass("tasty") })
}

function pressIt() {
  $("input").on("keydown", function(e) { if(parseInt(e.which) === 71) alert("g key was pressed") })
}

function submitIt() {
  $("form").on("submit", function() { alert("Your form is going to be submitted now."); })
}

$(document).ready(function(){

  // call functions here
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
