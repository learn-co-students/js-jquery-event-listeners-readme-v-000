
$(document).ready(function () {
	getIt();
	frameIt();
	pressIt();
	submitIt();
});

function getIt() {
	$('p:first').on('click', function () {
		alert("Hey!");
	});
}

function frameIt() {
	$('img').on('load', function () {
		$('img').addClass('tasty');
	});
}

function pressIt() {
	$('#typing').on('keydown', function (e) {
		if (e.which === 71) {
			// if (e.key === 'g') {
			alert('You have pressed the G key!');
		}
	});
}

function submitIt() {
	$("form").on("submit", function () {
		alert('Your form is going to be submitted now.');
	});
}