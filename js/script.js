$(document) .ready(function(){
	
//redirect start
$("#regLk").click(function(){
    window.location.href = "file:///D:/projects/NOV/novhtmlbasecode/nov-htmlcodebase/1_customer_login.html";
}); 

$("#registerLink").click(function(){
    window.location.href = "file:///D:/projects/NOV/novhtmlbasecode/nov-htmlcodebase/2_customer_signup.html";
}); 

$("#forgotLnk").click(function(){
    window.location.href = "file:///D:/projects/NOV/novhtmlbasecode/nov-htmlcodebase/4_customer_forgotpassword.html";	
}); 
$("#searchCnfrm").click(function(){
    window.location.href = "file:///D:/projects/NOV/novhtmlbasecode/nov-htmlcodebase/6_customer_vehicleconfirm.html";	
}); 
$("#submitLnk").click(function(){
	alert("Submitted");
});



//redirect end	
	
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

// driver signup page strat
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

//driver signup page End

// Hamburger menu start
$("#menu-button").click(function(){
  $(this).toggleClass("active");
  $("#line-1").toggleClass("active");
  $("#line-2").toggleClass("active");
  $("#line-3").toggleClass("active");
  $("#menu").slideToggle("slow");
});
// Hamburger menu end

//driver history page start
$(".rectangle1").hide();
$(".rectangle2").hide();
 $("#cureentReq").click(function(){
       $(".rectangle1").show();
       $(".rectangle2").show();
    }); 	
//driver history page End

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
$("#close").click(function() {
	$("#popUp").hide();
});
	
$("#popUp").load(function() {
    $("this").show();
});	
//dashboard popup End
});