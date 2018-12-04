var main = (function () {
	function webClick() {
		//导航效果
		var navLi=$("#header .headTop .headNav .headNavUl .navLi");
		var popUl=$("#header .headTop .headNav .popUL");
		var popLi=$("#header .headTop .headNav .popUL .popCom");
		navLi.mouseenter(function(){
			var _index=$(this).index();
			var _left=$(this).position().left;
			popLi.hide();
			popUl.css("left",_left);
			popLi.eq(_index).show();
		})
		popLi.hover(function(){
			$(this).show();
		},function(){
			$(this).hide();
		})

		// 首页小图切换大图效果
		var indItemA=$("#center .centBox .indCom .indCon .indImgItem li a");
		var indImgCom=$("#center .centBox .indCom .indCon .indImg2 a img");
		indItemA.mouseenter(function(){
			indItemA.removeClass("active");
			$(this).addClass("active");
			var _src=$(this).find("img").attr("src");
			indImgCom.attr("src",_src);
		})
	      

		//搜索框提示
	        $(".promptTxt").each(function () {
	            var pVal = $(this).attr("placeholder");
	            $(this).focus(function () {
	                $(this).attr("placeholder", "");
	            }).blur(function () {
	                var thisVal = $(this).val();
	                if (thisVal != "") {
	                    $(this).attr("placeholder", "");
	                }
	                else {
	                    $(this).attr("placeholder", pVal);
	                }
	            });
	        });


    }

    //页面幻灯效果
    function slideBox(){
    		var seLength1=$('.slide .ggBox li').length,
    		seLength2=$('.slide2 .ggBox li').length,
    		seLength3=$('.slide3 .ggBox li').length,
    		seLength4=$('.slide4 .ggBox li').length;
    		slideXY($('.slide'),5000,seLength1,"click");
    		slideXY($('.slide2'),5000,seLength2,"mouseover");
    		slideXY($('.slide3'),4000,seLength3,"click");
    		slideXY($('.slide4'),5000,seLength4,"mouseover");
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
    		slideBoxn: function () { slideBox(); }
    }
  })();

$(function(){
	main.webClickn();
	main.slideBoxn();
	
})