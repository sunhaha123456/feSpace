$(function(){
	if(document.getElementById("indexPage")){
		for(var i=0; i<=$(".in_contents_top").find("li").size()-1; i++){
			$(".in_contents_top").find("li").eq(i).find("img").eq(0).css({"width":1024,"height":390});
		}
	}else{
		for(var i=0; i<=$(".in_contents_top").find("li").size()-1; i++){
			$(".in_contents_top").find("li").eq(i).find("img").eq(0).css({"width":1024,"height":364});
		}
		for(var i=0; i<=$(".contents_top").find("li").size()-1; i++){
			$(".contents_top").find("li").eq(i).find("img").eq(0).css({"width":1024,"height":364});
		}
	}
	var timer=null;
	var blo=true;
	function move(){
		if(blo==true){
			$(".in_contents_top").find("ul").animate({"left":"-=1024"},600,function(){
				$(".in_contents_top").find("ul").css("left","0").find("li:first").appendTo($(this));
			});
		}else{
			$(".in_contents_top").find("ul").css("left",-1024).find("li:last").insertBefore($(".in_contents_top").find("ul").find("li:first"));
			$(".in_contents_top").find("ul").animate({"left":"+=1024"},600);
		}
	}	
	$(".rightMenu").click(function(){
		if(!$(".in_contents_top").find("ul").is(":animated")){
			blo=true;
			clearInterval(timer);
			move();
			timer=setInterval(function(){					   		
				if(document.getElementById("tataPro_z")){
					return false;
				};
				blo=true;
				move()
			},5000);
		}	
	})
	$(".leftMenu").click(function(){
		if(!$(".in_contents_top").find("ul").is(":animated")){
			blo=false;
			clearInterval(timer);
			move();
			timer=setInterval(function(){								
				if(document.getElementById("tataPro_z")){
					return false;
				};
				blo=true;
				move()
			},5000);
		}
	})
	timer=setInterval(function(){
		if(document.getElementById("tataPro_z")){
			return false;
		};
		blo=true;
		move()
	},5000);
})
$(function(){
	var timer1=null;
	var blo1=true;
	function move1(){
		if(blo1==true){
			$("#in_contents_top").animate({"left":"-=1024"},600,function(){
				$("#in_contents_top").css("left","0").find("li:first").appendTo($(this));
			});
		}else{
			$("#in_contents_top").css("left",-1024).find("li:last").insertBefore($("#in_contents_top").find("li:first"));
			$("#in_contents_top").animate({"left":"+=1024"},600);
		}
	}	
	$(".rightMenu1").click(function(){
		if(!$("#in_contents_top").is(":animated")){
			blo1=true;
			clearInterval(timer1);
			move1();
		}
	})		
	$(".leftMenu1").click(function(){
		if(!$("#in_contents_top").is(":animated")){
			blo1=false;
			clearInterval(timer1);
			move1();
		}	
	})	
	timer1=setInterval(function(){
		blo1=true;
		move1()
	},5000);
})
$(function(){
	for(var i=0; i<=$(".addusBottom_l").find("li").size()-1; i++){
		(function(i){
			$(".addusBottom_l").find("li").eq(i).click(function(){	
				var num=i+1;
				$(this).removeClass().addClass("active").siblings().removeClass();
				$("#addcon"+num).show().siblings().hide();
			})
		})(i)
	}
})
$(function(){
	var imgsrcSave;
	$("#imgChange").find("img").mouseover(function(){
		var src2 = $(this).attr("src2");
		$(this).attr("src", src2);
	})
	$("#imgChange").find("img").mouseout(function(){
		var src1 = $(this).attr("src1");
		$(this).attr("src", src1);
	})
	var imgsrcSave1;
	$(".changeimg").find("img").mouseover(function(){
		imgsrcSave1=$(this).attr("src");
		var imgSrc=$(this).attr("src").split("/");
		var arrLength=imgSrc.length
		var imgSrc1=imgSrc[arrLength-1].split(".");
		var arrLength1=imgSrc1.length
		imgSrc1[arrLength1-2]=imgSrc1[arrLength1-2]+"_large";
		imgSrc1=imgSrc1.join(".");
		imgSrc[arrLength-1]=imgSrc1;
		imgSrc=imgSrc.join("/");
		$(this).attr("src",imgSrc);
	})			
	$(".changeimg").find("img").mouseout(function(){
		$(this).attr("src",imgsrcSave1);
	})
})
$(function(){
	if(document.getElementById("returnTop")){
		var oTop=document.getElementById("returnTop");	
		oTop.style.left=document.getElementById("index").offsetLeft+900+"px";
		oTop.onclick=function(){
			var scrolltop=document.documentElement.scrollTop;
			var timer=null;
			function rol(){
				window.scrollTo(0,scrolltop);
				scrolltop-=scrolltop/20;
				timer=setTimeout(rol,10);
				if(scrolltop<=1){
					clearTimeout(timer);
				}
			}
			rol();
		}
	}
})
$(function(){
	$("#outBox > li").mouseover(function(){
		if($(this).find(".outBox").find("li").size()!=0){
			$(this).find(".outBox").show();
			$(this).css("z-index",2)
			$(this).siblings().css("z-index",1);
		}
	})		
	$("#outBox > li").mouseout(function(){
		$(this).find(".outBox").hide();
	})
})	
$(function(){
	for(var i=0; i<=$(".in_imglistPro").find("li").size()-1; i++){
		(function(i){			
			$(".in_imglistPro").find("li").eq(i).click(function(){
				$(".in_contents").find("ul").eq(i).show().attr("id","in_contents_top").siblings("ul").hide().attr("id","");
			})
		})(i)
	}
})	
$(function(){
	var oClose = $("#close");
	oClose.click(function(){
		alert(1)
		self.opener = null;
		window.open("","_self");
		self.close();
	});
})