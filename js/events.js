//define functions here



// call functions here

  function getIt(){
    $('p').on('click', function(){
      alert('hey!')
    })
  }




function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty')
  })
}


function pressIt() {
  $('#typing').on('keydown', function(key){
    if(key.which == 71){
      alert("G KEY!")
    }
  })
}

function submitIt(){

    $('form').on('submit', function(key){
        alert("Your form is going to be submitted now.")
    })
}
