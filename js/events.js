function getIt(){
  $('p:first').on('click', function(){
    alert("Hey!");
  });
}

function frameIt(){
  $('img:first').on('load', function(){
    $('img:first').addClass('tasty');
    return;
  });
}

function pressIt(){
  $('input#typing').on('keydown', function(e){
    if (e.which === 71){
      alert('You have pressed the G spot!');
    }
  });
}

function submitIt(){
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.');
  });
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
