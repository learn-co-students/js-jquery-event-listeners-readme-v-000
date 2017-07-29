//define functions here

$(document).ready(function(){

// call functions here

});

function getIt() {
  $('p').on("click", function(key){
    if(key.which= 80){
      alert('p was pressed')
    }
  })
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
  if(key.which == 71){
      alert('g was pressed');
  }
})
}

function submitIt() {
  $("form").on("submit", function() {
      alert('Your form is going to be submitted now.');
    })
  };
