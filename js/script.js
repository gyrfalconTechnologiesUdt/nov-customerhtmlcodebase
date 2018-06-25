$(document).ready(function(){

//User Name Filed Key up Event
$("#userName input").focus(function(e){
<<<<<<< HEAD
	$('#usrNmLbl').addClass("test2")
});

$("#userName input").blur(function(e){
	$('#usrNmLbl').removeClass("test2")
=======
	console.log(e.currentTarget.value);
>>>>>>> c63d6f761559dd186828d7b7b3008b59f0a6e790
});



$("#testFunction").click(function(){
	$('#sign').addCl	ass("test")
});




});

