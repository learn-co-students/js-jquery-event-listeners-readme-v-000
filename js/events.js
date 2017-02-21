//define functions here

$(document).ready(function(){

  getIt()

  frameIt()

  submitIt()

  pressIt()
});


function getIt() {
  $('p').on('click', function() {
    alert("Hello")
  })
}

function frameIt() {
  $('img').on('load', function() {
    $(this).addClass("tasty")
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.")
  })
}

function pressIt() {
  $(document).on('keydown', function(e) {
    if(e.which == 71){
      alert("G was pressed.")
    }
  })
}
