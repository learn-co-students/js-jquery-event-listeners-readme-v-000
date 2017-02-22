//define functions here
function getIt() {
  $("p").on("click", function() {
    alert("Hey!")
  });
}

function frameIt() {
  $("img").on("load", function functionName(img) {
    $(this).addClass("tasty")
  });
}

function pressIt() {
  $('#typing').on('keydown', function(e) {
    if (parseInt(e.which) === 71) {
      alert('Quit pressing g')
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  });
}

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
