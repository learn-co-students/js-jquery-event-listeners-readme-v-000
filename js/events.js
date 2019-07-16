//define functions here
function getIt() {
  $("p").on("click", (e) => {
    alert("Hey!");
  });
}

function frameIt() {
  $("img").on("load", (e) => {
    $(e.target).attr("class", "tasty")
  });
}

function pressIt() {
  $("input").on("keydown", (e) => {
    if (parseInt(e.detail||e.which) == 71){
      alert("You pressed 'g'!");
    }
  });
}

function submitIt() {
  $("form").on("submit", (e) => {
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){
// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
