//define functions here

$(document).ready(function(){

	getKeyCode();
	getIt();
	frameIt();
	pressIt();
	submitIt();
	
});

function getKeyCode(){
	$(document).on('keypress', function(key) {
		console.log("" + key.keyCode);
  });
}

function getIt(){
	$('p').on('click', function(){
		alert("Hey!");
	});
}

function frameIt(){
	$('img').on('load', function(){
		$(this).addClass('tasty');
	});
}

function pressIt(){
	$('input').on('keydown', function(key){
		if (key.keyCode == 103){
			alert("you pushed 'g'")
		}
	});
}

function submitIt(){
	$('form').on("submit", function(){
		alert("your form is going to be submitted now");
		return;
	});
}