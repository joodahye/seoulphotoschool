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
	
	//��Ʈ������:����� Ŭ���ϸ� ū�̹��� ���δ�.
	$(".photo").click(function(){
		//<a>�� �̹��� �ּҿ� <img alt> �����´�.
		const p1 = $(this).children().attr("src");
		const p2 = $(this).children().attr("alt");
		console.log(p1 + p2);
		
		$(".big img").attr({"src": p1 , "alt" : p2});
		$(".big").fadeIn();
	});
	
	//��Ʈ������ ū�̹��� Ŭ���ϸ� �������.
	$(".big").click(function(){
		$(this).fadeOut();
	});
	
});