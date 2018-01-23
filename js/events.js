function getIt(){
  $('p').on('click', function(){
    alert('Hey!');
  });
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
    $('img').css({'border-color':'red'});
  });
}

function pressIt(){
  $('input').on('keydown', function(){
    if(key.keyCode == 103){
      alert('g was pressed');
    }
  });
}

function submitIt(){
  $('form').on('submit', function(){
    alert('your form is going to be submitted now');
    return;
  });
}





$(document).ready(function(){

});
