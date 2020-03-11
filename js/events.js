//define functions here

// bind a 'click' event (alert "Hey!") to the 'p' tag
function getIt() {
  $('p').on('click', function() {
    alert('hey!')
  })
}

// bind 'load' event to image which adds 'tasty' class (adds red border)
function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

// bind 'keydown' event to form input field that alerts when 'G' key pressed
function pressIt() {
  $(document).on('keydown', function(key) {
    if (key.which == 71)
    alert("the 'g' key was pressed")
  })
}

// bind 'submit' event to form that alerts form is going to be submitted
function submitIt() {
  $('form').on('submit', function(e) {
    alert('Your form is going to be submitted now.')
  })
}

// call functions here
$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
