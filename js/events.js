//define functions here

function getIt() {
  $('p')[0].on('click', alert("Hey!"));
}

function frameIt() {
  $('img').on('load', function() {$(this).addClass('tasty')})
}

function pressIt() {
  $('#typing').on('keydown', function(event) {
    if (event.which == 71) {
      alert('You pressed g!')
    }
  })
}

function submitIt() {
  $('input[type="submit"]').on('click', alert("Your form is going to be submitted now."))
}


$(document).ready(function(){

}
