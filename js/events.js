function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  });
}

function pressIt() {
  $('input').on('keydown', function() {
    if (key.keyCode == 71) {
      return "keydown";
    };
  });
}

function submitIt() {
  $('form').on('submit',function() {
    alert("your form is going to be submitted now");
    return;
  });
}


$(document).ready(function(){

// call functions here

});