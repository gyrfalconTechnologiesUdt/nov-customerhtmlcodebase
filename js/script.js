$(document).ready(function(){

//User Name Filed Key up Event
$("#userName input").focus(function(e){
	$('#usrNmLbl').addClass("test2")
});

$("#userName input").blur(function(e){
	$('#usrNmLbl').removeClass("test2")
});



$("#testFunction").click(function(){
	$('#sign').addCl	ass("test")
});




});
