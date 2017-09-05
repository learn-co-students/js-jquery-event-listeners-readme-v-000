
function getIt() {
  $('p').on('click', function(){
    alert('Hey!')
  });
};

function frameIt(){
  $('img').on('load', function(){
    $('img').attr({
    class: "tasty"})
  });
};

function pressIt() {
  $('input#typing').on('keydown', function(key) {
    if(key.which == 71) {
        alert('G was pressed')
    }
  })
}

function submitIt(){
  $('form').on('submit', function(){
    alert("Your form is going to be submitted now.")
  });
};


$(document).ready(function(){
});
