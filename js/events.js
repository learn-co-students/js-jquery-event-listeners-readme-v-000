function getIt() {
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass("tasty");
  })
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if(key.keyCode == 103){
      alert('g was pressed');
    }
  })
}

function submitIt() {
  $('form').on("submit", function() {
    if ($("input:first" ).val() === "I love jQuery") {
      alert('your form is going to be submitted now');
      return;
    }
  })
}

// Define a function submitIt that does not accept a parameter. The function should alert "your form is going to be submitted now". And then return;.


$(document).ready(function(){

});
