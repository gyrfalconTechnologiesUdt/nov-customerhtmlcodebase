
$(document) .ready(function(){
	

$("#userNameInpt input").focus(function(e){
	
$("#usrNmLbl").addClass("usrNmLbl");

});

$("#userNameInpt input").blur(function(e){	
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#usrNmLbl").removeClass("usrNmLbl");
	}

});

$("#passWrdInpt input").focus(function(e){
	
$("#paswrdLbl").addClass("paswrdLbl");

});
$("#passWrdInpt input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
$("#paswrdLbl").removeClass("paswrdLbl");
}
});
$("#firstNmInpt input").focus(function(e){
	
$("#fnameLbl").addClass("fnameLbl");

});
$("#firstNmInpt input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
	$("#fnameLbl").removeClass("fnameLbl");
	}
});
$("#lastNmInpt input").focus(function(e){
	
$("#lNameLbl").addClass("lNameLbl");

});
$("#lastNmInpt input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
$("#lNameLbl").removeClass("lNameLbl");
	}
});
$("#mailIdInput input").focus(function(e){
	
$("#emailLbl").addClass("emailLbl");

});
$("#mailIdInput input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
$("#emailLbl").removeClass("emailLbl");
	}
});
$("#mobileNoInpt input").focus(function(e){
	
$("#mblNoLbl").addClass("mblNoLbl");

});
$("#mobileNoInpt input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
$("#mblNoLbl").removeClass("mblNoLbl");
	}
});


});

