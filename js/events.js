function getIt () {
  $('p').on('click', function() {
    alert('Hey!')
  });
}

function frameIt () {
  $('img').addClass("tasty");

  $('img').on('load', function() {
  });
}

function submitIt () {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  });
}

function pressIt () {
  $('document').on('keydown', function() {
    if (key.which === 71) {
      alert('you pressed g');
    }
  });
}


$(document).ready(function(){

// call functions here

});
