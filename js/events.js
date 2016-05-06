function getIt(){
  $('p').on('click', function(){
    alert('Hey!');
  });
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  });
}

function pressIt(){
  $('input#typing').on('keydown', function(key) {
  if(key.keyCode == 1){
      alert('g was pressed');
  }
});
}

function submitIt(){
  $('form').on('submit', function() {
  if ($( 'input:first' ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
});
}
