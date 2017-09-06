function getIt(){
  $("p").on('click', function() {
      alert("Hey!")
    })
}

function frameIt(){
  $("img").on('load', function() {
    $(this).css('border', "solid 2px red").addClass('tasty')
    })
}

function submitIt(){
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.")
  })
}

function pressIt(){
  $("input#typing").on('keydown', function(key) {
    if(key.which == 71){
      alert("g was pressed.")
    }
  })
}

$(document).ready(function(){

  submitIt()
  frameIt()
  getIt()
  pressIt()

});
