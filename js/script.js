$(document).ready(function(){

//User Name Filed Key up Event
$("#userNameInpt input").focus(function(e){
	//alert("hi");
$("#usrNmLbl").addClass("usrNmLbl");	
	
});
$("#userNameInpt input").blur(function(e){
	//alert("hi");
$("#usrNmLbl").removeClass("usrNmLbl");	
	
});
$("#passWrdInpt input").focus(function(e){
	//alert("hi");
$("#paswrdLbl").addClass("paswrdLbl");	
	
});
$("#passWrdInpt input").blur(function(e){
	//alert("hi");
$("#paswrdLbl").removeClass("paswrdLbl");	
	
});

$("#testFunction").click(function(){
	alert("success");
});




});

