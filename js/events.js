//define functions here

function getIt(){
  $("p").on("click", function(){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  });
}

function pressIt(){
  $("#typing").on('keydown',function(key){
    if(key.keyCode == 103){
      alert('g was pressed');
    }

  });
}

function submitIt(){
  $("form").on('submit', function(){
    alert("your form is being submitted now");
    return;
  });
}

$(document).ready(function(){

// call functions here
getIt()

});