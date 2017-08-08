function getIt() {
  return $('p').on("click", function () {
    alert("Hey!")
  });
}

function frameIt() {
  return $('img').on("load", function () {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  return $('form').on('keydown', function (key) {
    if (key.which === 71) {
      alert("g was pressed")
    }
  });
}

function submitIt() {
  return $("form").on("submit", function () {
    alert("Your form is going to be submitted now.");
    return;
  });
}

$(document).ready(function(){

  getIt();
  frameIt();
  pressIt();
  submitIt();

});
