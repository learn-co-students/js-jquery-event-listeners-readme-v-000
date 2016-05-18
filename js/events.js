function getIt() {
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass("tasty");
  })
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if(key.keyCode == 103){
      alert('g was pressed');
    }
  })
}

function submitIt() {
  $('form').on("submit", function() {
    if ($("input:first" ).val() === "I love jQuery") {
      alert('your form is going to be submitted now');
      return;
    }
  })
}

$(document).ready(function(){
  getit();
  frameIt();
  pressIt();
  submit();
});
