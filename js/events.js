//define functions here
function getIt() {
  $("p").on('click', function() {
      alert('hey');
});
}

function frameIt() {
  $(document).on('load', function() {
    $("img").addClass('tasty');
  });
}

function submitIt() {
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.');
    return;
});
}

function pressIt() {
  $(document).on('keydown', function(key) {
  if(key.which == 71){
      alert('g was pressed');
  }
});
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
submitIt();
pressIt();
});
