
$(document) .ready(function(){
	

	
$("#userNameInpt input").focus(function(e){
	
$("#usrNmLbl").addClass("usrNmLbl");

});
$("#userNameInpt input").blur(function(e){
	
$("#usrNmLbl").removeClass("usrNmLbl");

});

$("#passWrdInpt input").focus(function(e){
	
$("#paswrdLbl").addClass("paswrdLbl");

});
$("#passWrdInpt input").blur(function(e){
	
$("#paswrdLbl").removeClass("paswrdLbl");

});
$("#firstNmInpt input").focus(function(e){
	
$("#paswrdLbl").addClass("paswrdLbl");

});
$("#firstNmInpt input").blur(function(e){
	
$("#fnameLbl").removeClass("fnameLbl");

});
$("#lastNmInpt input").focus(function(e){
	
$("#lNameLbl").addClass("lNameLbl");

});
$("#lastNmInpt input").blur(function(e){
	
$("#lNameLbl").removeClass("lNameLbl");

});
$("#mailIdInput input").focus(function(e){
	
$("#emailLbl").addClass("emailLbl");

});
$("#mailIdInput input").blur(function(e){
	
$("#emailLbl").removeClass("emailLbl");

});
$("#mobileNoInpt input").focus(function(e){
	
$("#mblNoLbl").addClass("mblNoLbl");

});
$("#mobileNoInpt input").blur(function(e){
	
$("#mblNoLbl").removeClass("mblNoLbl");

});
});

