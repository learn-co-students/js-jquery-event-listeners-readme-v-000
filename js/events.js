function getIt() {
$('p').on('click', function() {
  alert('Hey!');
})
};

function frameIt() {
$('img').on('load', function() {
  $('img').addClass('tasty');
})
}

/*$('document').on('keydown', function pressIt() {
  if(key.which == 71){
    alert('g was pressed');
  }
});

$("form").on("submit", function() {
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
})

//frameIt();

// call functions here
