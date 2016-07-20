//define functions here

//define functions here
function getIt() {

 $('p').on('click', function() {
  return alert("Hey!");
 });
}
function frameIt() {

  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if (key.keyCode == 71) {
      alert("Aintt nothing but a g thang babby")
    }
  })

}

function submitIt() {
  $('form').on('submit', function(){
    alert("Your input will be submitted.")
    
  })

}

$(document).ready(function() {
 

   getIt();
   frameIt();
   pressIt();
  submitIt();
}); 
