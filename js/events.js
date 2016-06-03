//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('hey!');
  })
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  })
}

function submitIt() {
  $('form').on('submit', function(e) {
    alert('Your form is going to be submitted now.');
  })
}

function pressIt(){
  $('#typing').on('keydown', function(g){
    if(g.which == 71) {
      alert("You pressed 'g'!");
    }
  })
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
});
