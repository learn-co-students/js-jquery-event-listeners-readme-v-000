function getIt(){
  jQuery('p').on('click', function(){
    alert('Hey!');
  });
}

function frameIt(){
  jQuery('img').on('load', function(){
    jQuery('img').addClass('tasty');
  });
}

function pressIt(){
  jQuery('input').on('keydown', function(key){
    if (key.keyCode == 71){
      alert('g was pressed');
    }
  });
}

function submitIt(){
  jQuery('form').on('submit', function(){
    console.log('your form is going to be submitted now');
    return;
  });
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});