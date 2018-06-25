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
$("#mobileNoInpt input").focus(function(e){
	
$("#mblNoLbl").addClass("mblNoLbl");
});
$("#mobileNoInpt input").blur(function(e){
	
$("#mblNoLbl").removeClass("mblNoLbl");
});
$("#mailIdInput input").focus(function(e){
	
$("#emailLbl").addClass("emailLbl");
});
$("#mailIdInput input").blur(function(e){
	
$("#emailLbl").removeClass("emailLbl");
});

});

