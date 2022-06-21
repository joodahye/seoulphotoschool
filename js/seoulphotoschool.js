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
	
	//포트폴리오:썸네일 클릭하면 큰이미지 보인다.
	$(".photo").click(function(){
		//<a>속 이미지 주소와 <img alt> 가져온다.
		const p1 = $(this).children().attr("src");
		const p2 = $(this).children().attr("alt");
		console.log(p1 + p2);
		
		$(".big img").attr({"src": p1 , "alt" : p2});
		$(".big").fadeIn();
	});
	
	//포트폴리오 큰이미지 클릭하면 사라진다.
	$(".big").click(function(){
		$(this).fadeOut();
	});
	
});