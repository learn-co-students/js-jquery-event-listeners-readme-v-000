//define functions here

$(document).ready(function(){

// call functions here

getIt();

frameIt();

pressIt();

submitIt();

});

function getIt() {
  $('p').on('click', function(){
    alert("Hey!")
  })
}

function frameIt() {
  let img = $('img')
  img.on('load', function(){
    img.addClass('tasty');
  })
}

function pressIt() {
  $('form').on('keydown', function(key) {
    if (key.which == '71') {
      alert("you pressed 'g'")
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
      alert('Your form is going to be submitted now.');
      return;
  })
}