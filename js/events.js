//define functions here
function getIt() {
  $('p').on('click', function(){alert('hey!');})
}

function frameIt() {
  $('img').on('load', function(){$('img').addClass('tasty');})
}

function submitIt() {
  $('form').on('submit', function(e) {alert('Your form is going to be submitted now.');
})
}

function pressIt() {
  $('input').on('keydown', function(key){
    if(key.which == 71){alert("g was pressed");}
  })
}



$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();

});
