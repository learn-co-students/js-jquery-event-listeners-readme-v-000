//define functions here
function getIt(){
  $('p').click('click',function(){
    alert('Hey!');
  })
};

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  })
};

function pressIt(){
  $('#typing').on('keydown', function(e){
    if(e.which === 71){
      alert("You pressed 'g'!");
    }
  })
};

function submitIt(){
  $('form').on('submit', function(e){
    alert('Your form is going to be submitted now.');
  })
}
