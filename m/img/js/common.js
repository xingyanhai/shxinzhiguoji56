
//是否工作时间
window.iswork=true;
$(function() {
    $(".j-slide-not,.j-slide-auto,.j-slide-np").each(function(){
        var clone_text = $(this).find('.m-box').clone();
        $("<div class='sclwrap_box' style='position:relative;'></div>").insertAfter($(this).find('.m-box').get(0));
        $(this).find('.m-box').remove();
        $(this).find('.sclwrap_box').append(clone_text);
    });

	scrollBar();
	scrollBarAuto();
	baojia();
	is_work();
	remainTime();
	//在线客服非工作时间
	$("body").on("click",".zaixianzixun", function() {
	  if(window.iswork==false){
	    $(".yf_zxzx_fix").show();
		
		}
	});
	$(".zxzx_cls").click(function(){
		$(".yf_zxzx_fix").hide();
		
	});	
	$(".yf_zxzx_shade").click(function(){
		$(".yf_zxzx_fix").hide();
		
	});	
	
	 var swiper5 = new Swiper('.service', {
	    slidesPerView: 1,
	    loop: true,
	    autoplay:true,
	    pagination: {
	    el: '.swiper-pagination',
	    clickable: true,
	    }
	});
	 
	 var swiper3 = new Swiper('.safe', {
	    slidesPerView: 1,
	    loop: true,
	    autoplay:true,
	    pagination: {
	    el: '.swiper-pagination',
	    clickable: true,
	    }
	});
	 
	  var swiper4 = new Swiper('.baoxian', {
	    slidesPerView: 1,
	    loop: true,
	    autoplay:true
	    
	});
 
});




//判断当前是否属于工作时间
  function is_work()
  {
	  var mydate = new Date();
	  var cur_hours=mydate.getHours(); //获取当前小时数(0-23)
	  if(cur_hours>=9&&cur_hours<21)
	  {
		  window.iswork=false;
	  }
	  else
	  {
		  window.iswork=false;
		  $(".zaixianzixun").each(function(){
			if($(this).attr("href")!="javascript:void(0)")
			{
				$(this).attr("href","javascript:void(0)");
			}
		});
	    window.iswork=false;
	  }
  }

function baojia()
{
	q=0;
  	var Height = $('.announ_slid p').outerHeight(true);
  	var banner_S = $('.announ_slid p').size(); 
	function move_top(){
		q++;
		if(q==banner_S){
		  q=0;
		}
		$('.announ_slid').stop().animate({top:-q*Height+'px'});
	}
    ti=setInterval(move_top,2000);
	  $('.announ_slid p').hover(function(){
		clearInterval(ti)
	  },function(){
		ti=setInterval(move_top,2000);
	  })
}



//数字滚动效果--------开始>
$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				render(value);
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				if (loopCount >= loops) {
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // 开始的数字
		to: 0,                 // 结束的数字
		speed: 1000,           // 速度
		refreshInterval: 100,  // 多久更新一次 计时器
		decimals: 0,           // 小数位数显示
		formatter: formatter,  // 在渲染前格式化值的处理程序
		onUpdate: null,        // 每次更新元素时的回调方法
		onComplete: null       // 元素完成更新时的回调方法
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
  // 自定义格式化示例
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  // 启动所有计时器
  $('.baojia_timer').each(count); 
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
  //数字滚动效果--------结束>
  
  //价格动态变换
	function remainTime(){  
		var one_r=Math.floor(Math.random()*10);
		var two_r=Math.floor(Math.random()*10);
		if(one_r!=0)
		{
			$('#one img').hide();
			$('#one img').eq(one_r).show();
		}
		else
		{
			$('#one img').hide();
			if(two_r==0)
			  two_r=8;
		}
		$('#two img').hide();
		$('#two img').eq(two_r).show();
		var three_r=Math.floor(Math.random()*10);
		$('#three img').hide();
		$('#three img').eq(three_r).show();
		var four_r=Math.floor(Math.random()*10);
		$('#four img').hide();
		$('#four img').eq(four_r).show();
		var five_r=Math.floor(Math.random()*10);
		$('#five img').hide();
		$('#five img').eq(five_r).show();
		setTimeout("remainTime()",200);  
	}  
  

function scrollBarAuto() {
    var cc = [], kk = [], uu = [], ap, active = 0;

    /*有时间*/
    $(".j-slide-auto").each(function (dd, n) {
        var r = $(this),
		i = r.find(".m-box"),
		s = r.find(".m-cnt");
        i.attr("id", "slides_control_id" + dd),
		s.attr("id", "pager_id" + dd),
		cc.push({
		    slideId: "slides_control_id" + dd,
		    pageId: "pager_id" + dd,
		    index: 0
		});
    });
    $.each(cc, function (No, obj) {
        var h_body = $("#"+obj.slideId).find("img").attr('height');
        $("#"+obj.slideId).find("img").css('height', h_body + 'px');
        if (!document.getElementById(obj.pageId)) {

            new TouchSlider({
                id: obj.slideId,
                timeout: 4000,
                speed: 300,
				loop:true,
                before: function () { },
                after: function () { },
            });
        } else {
            var ap = document.getElementById(obj.pageId).getElementsByTagName('li');
            $("#" + obj.pageId).find("li:first-child").addClass('z-on');
            for (var i = 0; i < ap.length; i++) {
                (function () {
                    var j = i;
                    ap[i].onclick = function () {
                        tt.slide(j);
                        return false;
                    }
                })();
            }
            var tt = new TouchSlider({
                id: obj.slideId,
                timeout: 4000,
                speed: 300,
				loop:true,
                before: function (index) { ap[obj.index].className = ''; obj.index = index; ap[obj.index].className = 'z-on'; },
                after: function () { },
            });
        }
    });
}

function scrollBar() {     //滚动JS
    var cc = [], kk = [], uu = [], ap, active = 0;
    $(".j-slide-not .m-cnt li").removeClass('z-on');
    /*无时间*/
    $(".j-slide-not").each(function (dd, n) {
        var r = $(this),
		i = r.find(".m-box"),
		s = r.find(".m-cnt"),
		pr = r.find(".prev"),
		ne = r.find(".next");
        i.attr("id", "slides_control_id_" + dd),
		s.attr("id", "pager_id_" + dd),
		pr.attr("id", "prev_id_" + dd),
	    ne.attr("id", "next_id_" + dd),
		kk.push({
		    slideId: "slides_control_id_" + dd,
		    pageId: "pager_id_" + dd,
		    prevId: "prev_id_" + dd,
		    nextId: "next_id_" + dd,
		    index: 0
		});
    });
    $.each(kk, function (No, obj) {
        if(document.getElementById(obj.pageId))
        {
        var ap = document.getElementById(obj.pageId).getElementsByTagName('li');
        $("#" + obj.pageId).find("li:first-child").addClass('z-on');
        for (var i = 0; i < ap.length; i++) {
            (function () {
                var j = i;
                $("#" + obj.prevId).bind('click', function () {
                    var i = parseInt(active) - 1;
                    i = i < 0 ? i = 0 : i;
                    tt.slide(i);
                })
                $("#" + obj.nextId).bind('click', function () {
                    var i = parseInt(active) + 1;
                    tt.slide(i);
                })
                ap[i].onclick = function () {
                    tt.slide(j);
                    return false;
                }
            })();
        }

        var tt = new TouchSlider({
            id: obj.slideId,
            auto: false,
            speed: 400,
			loop:true,
            before: function (index) { ap[obj.index].className = ''; obj.index = index; ap[obj.index].className = 'z-on'; },
            after: function () { },
        });
       }else{
            new TouchSlider({
                id: obj.slideId,
                auto: false,
				loop:true,
                speed: 400,
            });
       } 
    });
    /*无时间 左右按钮*/
    $(".j-slide-np").each(function (dd, n) {
        var r = $(this),
		i = r.find(".m-box"),
		pr = r.find(".prev"),
		ne = r.find(".next");
        i.attr("id", "slides-control-id-" + dd),
		pr.attr("id", "prev-id-" + dd),
		ne.attr("id", "next-id-" + dd),
		uu.push({
		    slideId: "slides-control-id-" + dd,
		    prevId: "prev-id-" + dd,
		    nextId: "next-id-" + dd,
		    index: 0,

		});
    });
    $.each(uu, function (no, rr) {
        var size=0;
        if(document.getElementById(rr.slideId))
        {
            size = document.getElementById(rr.slideId).childElementCount;
        }
        if(size<2)
        {
          $('#' + rr.prevId).hide();
          $('#' + rr.nextId).hide();
        }
        $('#' + rr.prevId).bind('click', function () {
            var i = parseInt(rr.index) - 1;
            i = i < 0 ? i = 0 : i;
            ck.slide(i);
        });
        $('#' + rr.nextId).bind('click', function () {
            var i = parseInt(rr.index) + 1;
            i = i >= size - 1 ? i = size - 1 : i;
            ck.slide(i);
        });
        var ck = new TouchSlider({
            id: rr.slideId, speed: 600, timeout: 1000, auto: false,
            before: function (index) { rr.index = index; },
            after: function (index) {
                $('#' + rr.nextId).css("opacity","1");
                $('#' + rr.prevId).css("opacity","1");
                var si_ze = size - 1;
                if (rr.index == si_ze) { $('#' + rr.nextId).css("opacity","0.3"); }
                if (rr.index == 0) { $('#' + rr.prevId).css("opacity","0.3"); }
            }
        });
    });

    /*首页总导航 状态栏少于1 隐藏*/
    $('.m-box').each(function () {
        var k = this.childElementCount;
        if (k < 2) {
            $(this).parent().find('.m-cnt').hide();
            $(this).parent().find('.prev,.next').hide();
            $(this).parent().siblings('.prev,.next').hide();
        } else if (k > 1) { return false }
    })
	$('.m-cnt.m-cnt2 li:first-child').addClass('z-on');
};



