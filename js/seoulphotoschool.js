$(document).ready(function(){
	
	//상단메뉴
$("header li").on("mouseenter click",function(){
		$(this).stop().animate({height:"300px"});
		$(this).children("nav").slideDown();
	});
	
	//상단메뉴를 벗어나면
	$("header li").mouseleave(function(){
		$(this).stop().animate({height:"100px"});
		$(this).children("nav").slideUp();
	});
	
});