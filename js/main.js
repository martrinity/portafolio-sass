$(document).ready(function() {

	$('.collapse').collapse();

	$("#myCarousel").carousel();

	$(".item").click(function(){
    	$("#myCarousel").carousel(1);
	});

	$(".left").click(function(){
    	$("#myCarousel").carousel("prev");
	});

	
});