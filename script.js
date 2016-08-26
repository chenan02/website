$(document).ready(function (){
	$("#about").click(function (){
		$('html, body').animate({
			scrollTop: $("#background2").offset().top
	   }, 1500);
	});
	$("#projects").click(function (){
		$("html, body").animate({
		  scrollTop: $("#background3").offset().top
		}, 1500);
	});
	$("#contact").click(function(){
		$("html, body").animate({
			scrollTop: $("#background4").offset().top
		}, 1500);
	});
});