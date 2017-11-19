function getIt() {
  $('p').on('click', function(e) {
    alert('Hey!');
  })
}

function frameIt() {
  $('img').on('load', function(e) {
    $(this).addClass('tasty');
  });
}

function submitIt() {
  $('form').on('submit', function(e) {
    alert('Your form is going to be submitted now.')
  });
}

function pressIt() {
  $('input').on('keydown', function(e) {
    if (e.which === 71) {
      alert('you pressed g');
    }
  });
}

$(document).ready(function(){
  getIt();
  frameIt();
  submitIt();
  pressIt();
});
