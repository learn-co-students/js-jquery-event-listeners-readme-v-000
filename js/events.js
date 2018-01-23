function getIt() {
  $("p").on('click', function () {
    alert("Hey!");
  });
}

function frameIt() {
  var img = $("img");
  img.on('load', function () {
    return img.addClass("tasty");
  });
}

function pressIt() {
  $("#typing").on('keydown', function (key) {
    if (key.keyCode === 70) {
      alert("You pressed the 'G' key!");
    }
  });
}

function submitIt() {
  $("form").on('submit', function () {
    alert("your form is going to be submitted now");
    return;
  });
}

$(document).ready(function(){

  getIt();
  frameIt();
  pressIt();
  submitIt();

});
