//define functions here
function getIt(){
  alert('Hey!');
}

function submitIt(){
  $('form').on('submit',function(){
    alert('Your form is going to be submitted now.');
  });
}

function pressIt(){
  $('input').on('keydown',function(e){
    const key = parseInt(e.detail || e.which)
    if (key == 71){
      alert('g was pressed');
    }
  });
}

function frameIt(){
  $('img').addClass('tasty');
}

$(document).ready(function(){
// call functions here
$('p').on('click',getIt);
submitIt();
pressIt();
// $('form').on('submit',submitIt);
$('img').on('load',frameIt);
//$('input').on('keydown',pressIt);
});
