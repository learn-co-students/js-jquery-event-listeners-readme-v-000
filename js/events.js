//define functions here
function getIt() {
  $( 'p' ).on( 'click', notify );
}

function notify() {
  alert( 'Hey!' );
}

function frameIt() {
  $( 'img' ).on( 'load', addTasty );
}

function addTasty() {
  $( 'img' ).addClass( 'tasty' );
}

function pressIt() {
  $( 'input' ).on( 'keydown', function( key ) {
    if( key.keyCode == 71 ) {
      alert( 'g was pressed' );
    }
  });
}

function submitIt() {
  $( 'form' ).on( 'submit', function () {
    if ( $( 'input:first' ).val() === 'I love jQuery' ) {
      alert( "your form is going to be submitted now" );
      return;
    }
    alert( 'you entered the wrong value' );
  });
}

$( document ).ready( function(){

// call functions here

});
