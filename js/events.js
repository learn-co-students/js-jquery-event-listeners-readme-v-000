//define functions here

function getIt() {
  $('p').on('click', function () {
    alert('hey');
  })
}

function frameIt() {
  $('img').on('load', function(){
    //actions you want to happen
    $('img').addClass('tasty');
  });
}

function pressIt() {
  //g key pressed alert 'g was pressed'
  $("input").on('keydown', function(key) {
    if(key.keyCode == 71){
        alert('g was pressed');
    }
  });
}

function submitIt() {
  $("form").on("submit", function() {
    alert("your form is going to be submitted now");
    return;
  });
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
