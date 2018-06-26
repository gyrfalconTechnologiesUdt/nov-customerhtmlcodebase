
$(document) .ready(function(){
	

	
$("#userNameinput input").focus(function(e){
	
$("#userNameLbl").addClass("userNameLbl");

});
$("#userNameinput input").blur(function(e){
	
$("#userNameLbl").removeClass("userNameLbl");

});

$("#userNameinput input").focus(function(e){
	
$("#mailicon").addClass("mailicon");

});
$("#userNameinput input").blur(function(e){
	
$("#mailicon").removeClass("mailicon");

});
$("#passwordinput input").focus(function(e){
	
$("#passwordLbl").addClass("passwordLbl");

});
$("#passwordinput input").blur(function(e){
	
$("#passwordinput").removeClass("passwordinput");

});

$("passwordinput input").focus(function(e){
	
$("#passwordicon").addClass("passwordicon");

});

