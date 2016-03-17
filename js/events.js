function getIt(){
  $('p').on("click",function(){
    alert("Hey!");
    return;
  });
}

function frameIt(){
  $('img').on("load",function(){
    $('img').addClass('tasty');
  });
}

function pressIt(){
  $('input#typing').on('keydown',function(){
    if(key.keyCode === 71){
      alert("You have pressed the 'g' key");
    } 
  });
}

function submitIt(){
  $('form').on('submit', function(){
    alert("your form is going to be submitted now"); 
    return;
  });
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});