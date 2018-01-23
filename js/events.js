//define functions here
function getIt(){
	$('p').click(function(){
		alert("Hey!");
	});
}

function pressIt(){
	$('form input:first').keydown(function(){
		if(key.keyCode==71){alert("G was pressed");}
	});
}

function frameIt(){
	$('img').load(function(){
		$('img').addClass('tasty');
	});
}

function submitIt(){
	$('form').submit(function(){
		if($('input:first').val()==="I love jQuery") {
			alert('your form is going to be submitted now');
			return;
		}
	});
}


$(document).ready(function(){
	getIt()
	frameIt();
	pressIt();
// call functions here

});
