
function getIt() {
  $('p').on('click', function(){
    alert('hey');
  });
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass("tasty");
  });
}

function pressIt() {
  $('#typing').on('keydown', function(key){
    if(key.keyCode == 71) {
      alert('g was pressed');
    }
  });
}

function submitIt() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.");
    return;
  });
}


$(document).ready(function(){
  getit();
  frameIt();
  pressIt();
  submitIt();


});
