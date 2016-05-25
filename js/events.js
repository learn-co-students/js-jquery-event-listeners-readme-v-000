

$(document).ready(function(){

 getIt();

 frameIt();

 pressIt();

 submitIt();
});

function getIt() {
  $("p").on("click", alert("Hey!"));
}

function frameIt() {
  $("img").on('load'.addClass("tasty"));
}

function pressIt() {
  $(document).on("keydown");
  if(key.keyCode == 71){
      alert("g was pressed");
}

function submitIt() {
  $("form").on("submit");
  if ($( "input:typing" ).val() === "I love JQuery") {
    alert('your form is going to be submitted now');
    return;
}
