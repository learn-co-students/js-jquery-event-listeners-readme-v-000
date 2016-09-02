function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  });
}

function frameIt() {
  $('img').load(function() {
    $(this).addClass('tasty');
  });
}

function pressIt() {
  $('input#typing').keydown(function(key) {
    if (key.which === 71) {
      alert("You have pressed the G key.")
    }
  });
}

function submitIt() {
  $('form').submit(function() {
    alert("Your form is going to be submitted now.");
  })
}

$(document).ready(function(){

// call functions here

});
