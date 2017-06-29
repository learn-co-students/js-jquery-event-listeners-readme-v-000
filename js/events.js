//define functions here
function getIt() {
  $('p').on('click', () => {
    alert("Hey!");
  });
}

function frameIt() {
  $( 'img' ).on('load', function(){
    var x = $(this);
    $( this ).addClass( "tasty" );
  });
}

function submitIt(){
  $('form').on('submit', () => {
    alert("Your form is going to be submitted now.")
  })
}

function pressIt(){
  $('#typing').on('keydown', (key) => {
    if (key.which === 71) {
      alert("You pressed G")
    }
  })
}

frameIt();

$(document).ready(function(){

  // call functions here
  getIt();
  pressIt();

});
