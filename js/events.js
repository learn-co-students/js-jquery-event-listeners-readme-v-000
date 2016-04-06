function getIt(){
  $('p').on('click', function() {
    return "Hey!";
  });
}

function frameIt(){
  $('img').on('load', function() {
    return $('img').addClass("tasty");
  });
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if (key.keyCode === 71) {
      alert('g was pressed');
    }
  });
}

function submitIt(){
  $('form').on('submit', function() {
    alert("your form is going to be submitted now");
    return;
  });
}

$(document).ready(function(){

getIt(),
frameIt(),
pressIt(),
submitIt;

});