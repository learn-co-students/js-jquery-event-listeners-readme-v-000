//define functions here
var getIt = function(){
  $('p').on('click',function(){
    alert("Hey!");
  })
}

var frameIt = function(){
  $('img').on('load',function(){
    $(this).addClass('tasty');
  })
}
var pressIt = function(){
  $('input').on('keydown', function(key) {
    if(key.keyCode == 71){
        alert('g was pressed');
    }
  });
}

var submitIt = function(){
  $('form').on('submit',function(){
    alert('your form is going to be submitted now');
    return;
  })
}
$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
