//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('#typing').on('keydown', function(e) {
    // 'g' corresponds to 71
    if (e.which === 71) {
      alert("You pressed 'g'!")
    }
  })
}

function submitIt() {
  alert('Your form is going to be submitted now.');
}

$(document).ready(function(){

// call functions here
  getIt();

  frameIt();

  pressIt();

  $("form").on("submit", function() {
    submitIt();
    return;
  });

});
