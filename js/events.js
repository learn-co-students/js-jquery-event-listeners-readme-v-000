function getIt() {
  alert("Hey!");
}

function frameIt() {
  $('img').addClass('tasty');
}

function pressIt(key) {
  if(key.keyCode == 71){
    alert("g key was pressed.");
  }
}

function submitIt() {
  alert("your form is going to be submitted now");
  return;
}

$(document).ready(function(){
  $("p").on("click", getIt);
  $("img").on("load", frameIt);

  $(document).on('keydown', function(key) {
    pressIt(key);
  });

  $("form").on("submit", submitIt);
});
