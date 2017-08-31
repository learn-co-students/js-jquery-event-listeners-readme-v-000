//define functions here

$(document).ready(function(){

getIt()
frameIt()
pressIt()
submitIt()


});


function getIt() {
	document.querySelector('p').addEventListener('click', function() {
		alert('Hey!')
	});
}

function frameIt() {
	$('img').on('load', function() {
		$('img').addClass('tasty')
	})
}

function submitIt() {
	$("form").on('submit', function() {
		alert('Your form is going to be submitted now.');
	});
}


function pressIt() {
	$(document).on('keydown', function(e) {
		if (e.which == 71)
			alert('you pressed g');
	});
}