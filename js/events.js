//define functions here

function getIt(){
  $('p').on("click", function(){
    alert("Hey!");
  }); 
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty')
  })

}

function pressIt(){
  $('input').on('keydown', function(key){
    if (key.keyCode == 71 ) {
      alert('Shit man you just pressed g!!');
    }
  });
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now');
    return;
  });
}


$(document).ready(function(){

// call functions here
  getIt()
  pressIt()
  frameIt()
  submitIt()
});