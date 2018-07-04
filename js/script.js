$(document) .ready(function(){
	
// customer redirect start
$("#regLk").click(function(){
    window.location.href = "1_customer_login.html";
}); 
$("#fblnk").click(function(){
    window.location.href = "https://www.facebook.com/";
}); 
$("#googlelnk").click(function(){
    window.location.href = "https://plus.google.com/";
}); 
$("#twitterlnk").click(function(){
    window.location.href = "https://twitter.com/";
}); 
$("#registerLink").click(function(){
    window.location.href = "2_customer_signup.html";
}); 

$("#forgotLnk").click(function(){
    window.location.href = "4_customer_forgotpassword.html";	
}); 
$("#searchCnfrm").click(function(){
    window.location.href = "6_customer_vehicleconfirm.html";	
}); 
$("#submitLnk").click(function(){
	alert("Submitted");
});
$("#loginClDashBd").click(function(){
    window.location.href = "3_customer_dashboadrd.html";	
});
$("#vehCallPrev").click(function(){
    window.location.href = "7_customer_previewpage.html";	
});
$("#arrowCall").click(function(){
    window.location.href = "6_customer_vehicleconfirm.html";	
});
$("#arrowId-ClAc").click(function(){
    window.location.href = "customer_Account_settings.html";	
});
$("#callPrivacy").click(function(){
    window.location.href = "customer_privacy_settings.html";	
});


//customer redirect end	
	
//Sign In Page Start
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
//Sign In Page End 

//customer Sign Up Page Start
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
//customer Sign Up Page End 

//customer resetpaswrd page End 
$("#newPswrdInpt input").focus(function(e){	
$("#newPaswrdLbl").addClass("newPaswrdLbl");
});

$("#newPswrdInpt input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#newPaswrdLbl").removeClass("newPaswrdLbl");
	}
});

$("#confirmPswrdInpt input").focus(function(e){	
$("#cinfirmPswrdLbl").addClass("cinfirmPswrdLbl");
});

$("#confirmPswrdInpt input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#cinfirmPswrdLbl").removeClass("cinfirmPswrdLbl");
	}
});
//customer resetpaswrd page End 

//Search page start
$("#fromInpt input").focus(function(e){	
$("#fromLbl").addClass("fromLbl");
});

$("#fromInpt input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#fromLbl").removeClass("fromLbl");
	}
});
$("#toInpt input").focus(function(e){	
$("#toLbl").addClass("toLbl");
});

$("#toInpt input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#toLbl").removeClass("toLbl");
	}
});
$("#weightInpt input").focus(function(e){	
$("#weightLbl").addClass("weightLbl");
});

$("#weightInpt input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#weightLbl").removeClass("weightLbl");
	}
});
$("#priceInpt input").focus(function(e){	
$("#priceLbl").addClass("priceLbl");
});

$("#priceInpt input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#priceLbl").removeClass("priceLbl");
	}
});
//Search page end

//confirm page popup start

$("#listItmInpt").hide();
 $("#searchpopUp").click(function(){
       $("#listItmInpt").show();
	   $("#searchpopUp").hide();
 }); 
$("#CloseId").click(function(){
	$("#listItmInpt").hide();
	$("#searchpopUp").show();
});	
//confirm page popup end

//dashboard popup start
$("#searchpopUp").hide();
$("#close").click(function() {
	$("#searchpopUp").show();
	$("#popUp").hide();		
});
$(window).on('load', function(){ 
	$("#popUp").show();
});	
//dashboard popup End

//dashboard map start
function initMap() {
  var uluru = {lat: -25.344, lng: 131.036};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  var marker = new google.maps.Marker({position: uluru, map: map});
}
//dashboard map end

//customer trip popup start
$("#pastclId").hide();
$("#upcomeId").show();
 $("#pasttripId").click(function(){
       $("#pastclId").show();
	   $("#upcomeId").hide();
	   $(".top1").css("border-bottom", "3px solid #000")
	   $(".top2").css("border-bottom", "0px solid #000")
 }); 
  $(".top2").css("border-bottom", "3px solid #000")
 $("#upcomingTripId").click(function(){
       $("#upcomeId").show();
	   $("#pastclId").hide();
	   $(".top2").css("border-bottom", "3px solid #000")
	   $(".top1").css("border-bottom", "0px solid #000")
 }); 
//customer trip popup start\

});
