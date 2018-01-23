//define functions here

$(document).ready(function(){

  // call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();

});

function getIt(){
  $('p').click(function(){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').load(function(){
    $('img').addClass('tasty');
  });
}

function pressIt(){
  $('input').keydown(function(event){
    if(event.which == 71){
      alert('g was pressed');
    }
  });
}

function submitIt(){
  $('form').submit(function(){
    alert("Your form is going to be submitted now.");
  });
}
