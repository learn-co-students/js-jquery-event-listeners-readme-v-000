function getIt() {
	$('p').on('click', () => alert('Hey!'))
}

function frameIt() {
	$('img').on('load', () => $('img').addClass('tasty'))
}

function pressIt() {
	$('input').on('keydown', function(key) {
		if (key.which === 71) {
			alert('The G Key Was Pressed!')
		}
	}) 	
}

function submitIt() {
	$('form').on('submit', () => alert('Your form is going to be submitted now.'))
}

$(document).ready(function(){
	getIt()
	frameIt()
	pressIt()
	submitIt()
});
