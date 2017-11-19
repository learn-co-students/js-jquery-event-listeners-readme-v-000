//define functions here

// you did it different from the labs answers - you needed to use the "on" more 
// "bind" appears to work just like "on"

// lab answers

function getIt() {
  $('p').on('click', function() {
    alert('hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('#typing').on('keydown', function(e) {
    // 'g' corresponds to 71
    if (e.which === 71) {
      alert("You pressed 'g'!")
    }
  })
}

function submitIt() {
  $('form').on('submit', function(e) {
    alert('Your form is going to be submitted now.')
  })
}


// ///my answers 
// function getIt(){
//   $("p").bind("click", function(){
//       alert("Hey!");
//   });
// }

// // needed to use a load event - passes spec but see answer below
// function frameIt(){
//   $("img").addClass("tasty")
// }

// function pressIt(){
//   $(document).on('keydown', function(key) {
//     if (key.which == 71){
//       alert('enter was pressed');
//     }
//   });
// }

// function submitIt() {
//   $('form').bind('submit', function() {
//     alert('Your form is going to be submitted now.')
// //   })
// }
