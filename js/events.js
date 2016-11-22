function getIt() {
  $('p').on("click", function() {
    alert('Hey!');
  })
}

function frameIt() {
  $(document).on("load", function() {
    $('img').addClass('tasty');
  })
}

function pressIt() {
  $(document).on("keydown", function(key) {
    if (key.which == 71) {
      alert('g was pressed');
      return;
    }
  })
}

function submitIt() {
  $('form').on("submit", function() {
    alert('Your form is going to be submitted now.');
  })
}

$(document).ready(function(){

  frameIt()

});
