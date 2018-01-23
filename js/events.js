//define functions here

$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt();

});

function getIt() {
  $('p').on('click', function() {
    alert('hey!');
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('#typing').on('keydown', function(k) {
    if (k.which === 71) {
      alert('You pressed \'g\'!');
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.');
  });
}
