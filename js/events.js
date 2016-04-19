//define functions here

$(document).ready(function(){
  getIt();
  frameIt();


});

function getIt(){
  $('p').on("click", function(){
      alert("Hey!");
  });

}
function frameIt() {
  $('img').on('load', function(){
    $('img').addClass('tasty');
  });
}

function pressIt () {
  $('form input').on('keydown',function(key){
     if( key.keycode == 71){
        alert('g was pressed');
    }
  });
}

function submitIt () {
  $('form').on('submit', function(){
      alert("your form is going to be submitted now");
  });
}