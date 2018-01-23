//define functions here
function getIt() {
  $("p").on("click", function(){
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on("load", function(){
  $('img').addClass('tasty');
});
}

function pressIt() {
  $(document).on("keydown", function(key) {
    if(key.keyCode == 71){
      alert("g key was pressed.");
    }
  });
}

function submitIt() {
  $("form").on("submit", function(){
  alert("your form is going to be submitted now");
  return;
});
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();

});
