$(function(){
	$("#xiangmuLI").click(function(){
		$("#xiangmu").css("display","block");
		$("#pinggu").css("display","none");
		$("#xiangmuLI").addClass("active").siblings().removeClass("active")
	});
	$("#pingguLI").click(function(){
		$("#xiangmu").css("display","none");
		$("#pinggu").css("display","block");
		$("#pingguLI").addClass("active").siblings().removeClass("active");
	});
});
