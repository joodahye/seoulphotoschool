$(document).ready(function(){
	
	//��ܸ޴�
$("header li").on("mouseenter click",function(){
		$(this).stop().animate({height:"300px"});
		$(this).children("nav").slideDown();
	});
	
	//��ܸ޴��� �����
	$("header li").mouseleave(function(){
		$(this).stop().animate({height:"100px"});
		$(this).children("nav").slideUp();
	});
	
});