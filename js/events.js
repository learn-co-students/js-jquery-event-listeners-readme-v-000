function getIt() {
$('p').on('click', function() {
  alert('Hey!');
})
};

function frameIt() {
$('img').on('load', function() {
  $('img').addClass('tasty');
})
};

function pressIt() {
$(document).on('keydown', function(key) {
  if(key.which == 71){
  $('input').alert('g was pressed');
  }
})};

/*$("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
}*/




//define functions here

$(document).ready(function(){
getIt();
//frameIt();
});

$(document).ready(function(){
frameIt()
});

$(document).ready(function(){
pressIt()
})



//frameIt();

// call functions here
