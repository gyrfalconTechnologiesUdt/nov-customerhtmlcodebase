$(document) .ready(function(){
	
// customer sign up redirect start
$("#regLk").click(function(){
    window.location.href = "1_customer_login.html";
}); 
// customer sign up redirect end

// customer sign In redirect start
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

// customer sign In redirect end

// menu redirect start
$("#paymentId").click(function(){
    window.location.href = "customer_paymentmethods.html";	
});
$("#tripId").click(function(){
    window.location.href = "customre_yourtrips_page.html";	
});
$("#settingId").click(function(){
    window.location.href = "customer_Account_settings.html";	
});
$("#lgoutback").click(function(){
    window.location.href = "1_customer_login.html";	
});
// menu redirect end

// customer dasbboard redirect start
$("#searchCnfrm").click(function(){
    window.location.href = "6_customer_vehicleconfirm.html";	
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
// customer dasbboard redirect end

// customer payment redirect start
$("#arrowId-Menu").click(function(){
    window.location.href = "3_customer_dashboadrd.html";	
});
// customer payment redirect end

// customer trip redirect start
$("#triparrowId-Menu").click(function(){
    window.location.href = "3_customer_dashboadrd.html";	
});
// customer trip redirect end

// customer reset paswrd redirect start
$("#submitLnk").click(function(){
	alert("Submitted");
});
// customer reset paswrd redirect end
	
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
$("#loginClDashBd").click(function(){
    var txtUsername = document.getElementById("txtUsername").value;
	var txtPassword = document.getElementById("txtPassword").value;
   if(txtUsername== "gayathri" && txtPassword== "pavithra")
   {
    window.location.href = "3_customer_dashboadrd.html";	
   }
	{
	   if (txtPassword!= "pavithra")
	    {   
		document.getElementById('pswrderror').innerHTML="password do not match"; 		
		
		}
	}
		{
		if (txtUsername!= "gayathri") 
		{
		document.getElementById('usernameerror').innerHTML="username do not match"; 
		}
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
$("#map").hide();
$("#close").click(function() {
	$("#searchpopUp").show();
	$("#map").show();
	$("#popUp").hide();		
});
$(window).on('load', function(){ 
	$("#popUp").show();
});	
//dashboard popup End

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
//customer trip popup start

// customer settings start
$("#addressId input").focus(function(e){	
$("#addressLbl").addClass("addressLbl");
});

$("#addressId input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#addressLbl").removeClass("addressLbl");
	}
});
$("#editid1").click(function(e){	
$("#fnameid").focus();
});
// customer settings end

//customer payment page start
$("#paytmid").click(function(){
    window.location.href = "https://paytm.com/";	
});
//customer payment page start

});
