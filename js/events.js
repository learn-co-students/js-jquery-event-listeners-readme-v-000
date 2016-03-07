//define functions here
function getIt(){
  $('p').on('click', function(){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').on('load', function(){
    $(this).addClass('tasty');
  });
}

function pressIt(){
 $('#typing').on('keydown', function(theKey) {
    if(theKey.keyCode == 71){
        alert('g was pressed');
    }
  });
}

function submitIt(){
  $('form').on('submit', function(){
    alert("your form is going to be submitted now");
    return
  })
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();

});