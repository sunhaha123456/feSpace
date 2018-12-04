var main = (function () {
	function webClick() {
	
		var navItemLi=$("#center .indTop .indTopCon .indTopSlice .navItem li");
		navItemLi.hover(function(){
			navItemLi.removeClass("hover");
			$(this).addClass("hover");
		},function(){
			$(this).removeClass("hover");
		})

		$(".gzWx").hover(function(){
			$(this).find(".wxCom").show();
		},function(){
			$(this).find(".wxCom").hide();
		})
    }

    //页面幻灯效果
    function slideBox2(){

    	slideSet($(".pic1"),"click",3000);
    	slideSet($(".pic2"),"click",4000);
    	slideSet($(".pic3"),"click",5000);
    	slideSet($(".pic4"),"click",5000);
	function slideSet(slidPic,eventType,seTime)
    	{
    	var slidUl=slidPic.find(".slideItem");
    	var slidLi=slidPic.find(".slideItem li");	
    	var slidNav=slidPic.find(".slideNav li");
    	var aTxt=slidPic.find(".slideTit a");
    	var prveBtn=slidPic.find(".prveBtn");
	var nextBtn=slidPic.find(".nextBtn");
    	var slidW=slidLi.width();
    	var slidLen=slidLi.length;
    	var titA=$("#center .centCom .centNav .prodTit a");
    	var titAL=titA.length;
    	var j=0;
		titA.removeClass("on");
		titA.eq(0).addClass("on");
		$("#center .centCom .centTit h1").text(titA.eq(0).find("span").text());
    	aTxt.text(slidLi.eq(0).find("img").attr("title"));
	var slideChange=function(){
		 if(j==-2){j=slidLen-2}//重点注意
		                             j+=1
		                            if (j>=slidLen) {
		                                j=0;
		                            } else if (j<0) {
		                                j=slidLen;
		                            }
		 aTxt.text("");

		slidNav.eq(j).addClass("on").siblings("li").removeClass("on");
		if(j!==0){
			titA.removeClass("on");
			titA.eq(j).addClass("on");
			$("#center .centCom .centTit h1").text(titA.eq(j).find("span").text());
		}
		if(j===0&&slidLen=== titAL){
			titA.removeClass("on");
			titA.eq(0).addClass("on");
			$("#center .centCom .centTit h1").text(titA.eq(0).find("span").text());
		}
		
		slidUl.stop().animate({"left":-slidW*j},300);	
		var tit=slidLi.eq(j).find("img").attr("title");
		aTxt.text(tit);
	}

    	slidUl.css("width",parseInt(slidW*slidLen));
    	slidNav.on(eventType,function(){
    		j=$(this).index()-1;
    		slideChange();
    		return false;
    	})
    	titA.on(eventType,function(){
    		j=$(this).index()-1;
    		slideChange();
    		$(this).addClass("on").siblings().removeClass("on");
    		$("#center .centCom .centTit h1").text($(this).find("span").text());
    		return false;
    	})
    	
    		var loop=setInterval(slideChange,seTime);
    	
    	
    	slidPic.hover(function(){
    		clearInterval(loop);
    	},function(){
    		loop=setInterval(slideChange,seTime);
    	})

    	 prveBtn.on(eventType,function(){
		                    j-=2;
		                    slideChange();
		                     return false;
		               })
                nextBtn.on(eventType,function(){
                    j+=0;
                    slideChange();
                    return false;
               })


    	}
    	
    }
    function slideBox(){
    		var seLength1=$('.slide .ggBox li').length;
    		slideXY($('.slide'),5000,seLength1,"click");
	    	function slideXY(con,seTime,seLength,eventType){
		       	  var $con =con, 
			        $box = $con.find('.ggBox'), 
			        $btns = $con.find('.ggBtns'), 
			        $leftBtn=$con.find(".leftBtn"),
			        $rightBtn=$con.find(".rightBtn"),
			        i = 0, 
			        autoChange = function () {
			        	if(i==-2){i=seLength-2}//重点注意
		                             i+=1
		                            if (i>=seLength) {
		                                i=0;
		                            } else if (i<0) {
		                                i=seLength;
		                            }
			   
			        $btns.find('a:eq(' + i + ')').addClass('ggOn').siblings().removeClass('ggOn');
			        var curr = $box.find('li:eq(' + i + ')'),
			            prev = curr.siblings();
			        prev.css('z-index', 2);
			        curr.css('z-index', 3).animate({
			            'opacity': 1
			        }, 150, function () {
			            prev.css({
			                'z-index': 1, 'opacity': 0.1
			            });
			        });
			    }
			    ,loop = setInterval(autoChange, seTime);//每seTime秒循环一次autoChange这个函数
			    $con.hover(function () {
			        clearInterval(loop);
			    }, function () {
			        loop = setInterval(autoChange, seTime);
			    });
			    $btns.find('a').on(eventType,function () {
			        i = $(this).index() - 1;
			        autoChange();//当前单击元素的索引值-1传递给这个函数
			    });

			    $leftBtn.on(eventType,function(){
		                    i-=2;
		                    autoChange();
		                     return false;
		               })
		                $rightBtn.on(eventType,function(){
		                    i+=0;
		                    autoChange();
		                    return false;
		               })
		}
		$(".slide .slideB .ggBtns ").css("width",seLength1*20);
		$('.slide').hover(function(){
			$(this).find(".leftRight").css("display","block");
		},function(){
			$(this).find(".leftRight").css("display","none");
		})
    }

	
	
	
    return {
    		webClickn: function () { webClick(); },
    		slideBoxn: function () { slideBox(); },
    		slideBox2n: function () { slideBox2(); },
    }
  })();

$(function(){
	var docH=$(document).height()-65;
	var docW=$(document).width();
	var centH=$("#center").height();
	$(".centCom").css("height",docH);
	$(".centText").css("height",centH-200);
	main.webClickn();
	main.slideBoxn();
	main.slideBox2n();
})