//define functions here

function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if (key.keyCode === 67) {
      alert("You have pressed g.");
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert("your form is going to be submitted now");
  });
}