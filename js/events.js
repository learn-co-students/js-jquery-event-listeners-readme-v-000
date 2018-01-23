function getIt(){
  $('p').click(function(){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').load(function(){
    $(this).addClass('tasty');
  });
}
function pressIt(){
  $(document).on('keydown',function(key){
    if(key.which == 71){
      alert('g was pressed');
    }
  });
}
function submitIt(){
  $("form").on("submit", function(){
    alert("Your form is going to be submitted now.");
  })
}

$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt();
// call functions here

});
