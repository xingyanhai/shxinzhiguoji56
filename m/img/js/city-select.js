/**
 * 该文件是用于html5页面的下拉城市选择组件
 * 2017/11/18
 */
var body_height=document.body.clientHeight;
(function(window){
	var GP_EN = new Array('A 安徽','B 北京','C 重庆','F 福建','G 广西','G 贵州','G 广东','G 甘肃','H 海南','H 湖北','H 黑龙江','H 河南','H 河北','H 湖南','J 江苏','J 吉林','J 江西','L 辽宁','N 内蒙古','N 宁夏','Q 青海','S 四川','S 陕西','S 上海','S 山东','S 山西','T 天津','X 西藏','X 新疆','Y 云南','Z 浙江');
	var GC1 =new Array();
		GC1['A 安徽']=new Array('合肥市','阜阳市','芜湖市','蚌埠市','淮南市','马鞍山市','淮北市','铜陵市','安庆市','黄山市','滁州市','宿州市','巢湖市','六安市','亳州市','池州市','宣城市');
		GC1['B 北京']=new Array('北京市');
		GC1['C 重庆']=new Array('重庆市');
		GC1['F 福建']=new Array('福州市','厦门市','三明市','莆田市','泉州市','漳州市','南平市','龙岩市','宁德市');
		GC1['G 广西']=new Array('南宁市','百色市','柳州市','桂林市','梧州市','北海市','防城港市','钦州市','贵港市','玉林市','贺州市','河池市','来宾市','崇左市');
		GC1['G 贵州']=new Array('贵阳市','六盘水市','遵义市','安顺市','铜仁市','毕节市','黔东南苗族侗族自治州','黔西南布依族苗族自治州','黔南布依族苗族自治州');
		GC1['G 广东']=new Array('广州市','深圳市','珠海市','汕头市','韶关市','河源市','梅州市','惠州市','汕尾市','东莞市','中山市','江门市','佛山市','阳江市','云浮市','湛江市','茂名市','肇庆市','清远市','潮州市','揭阳市');
		GC1['G 甘肃']=new Array('兰州市','金昌市','白银市','天水市','嘉峪关市','武威市','张掖市','平凉市','酒泉市','庆阳市','定西市','陇南市','甘南藏族自治州','临夏回族自治州');
		GC1['H 海南']=new Array('海口市','三亚市','五指山市','琼海市','儋州市','文昌市','万宁市','东方市','澄迈县','定安县','屯昌县','临高县','白沙黎族自治县','昌江黎族自治县','乐东黎族自治县','陵水黎族自治县','琼中黎族苗族自治县','保亭黎族苗族自治县','南沙群岛','西沙群岛','中沙群岛的岛礁及其海域');
		GC1['H 湖北']=new Array('武汉市','黄石市','襄阳市','十堰市','荆州市','宜昌市','荆门市','鄂州市','孝感市','黄冈市','咸宁市','随州市','仙桃市','天门市','潜江市','神农架林区','恩施土家族苗族自治州');
		GC1['H 黑龙江']=new Array('哈尔滨市','齐齐哈尔市','鹤岗市','双鸭山市','鸡西市','大庆市','伊春市','牡丹江市','佳木斯市','七台河市','黑河市','绥化市','大兴安岭市');
		GC1['H 河南']=new Array('郑州市','鹤壁市','开封市','洛阳市','平顶山市','焦作市','新乡市','安阳市','濮阳市','许昌市','漯河市','三门峡市','南阳市','商丘市','信阳市','周口市','驻马店市');
		GC1['H 河北']=new Array('石家庄市','唐山市','秦皇岛市','邯郸市','邢台市','保定市','张家口市','承德市','沧州市','廊坊市','衡水市');
		GC1['H 湖南']=new Array('长沙市','株洲市','湘潭市','衡阳市','邵阳市','岳阳市','常德市','张家界市','益阳市','郴州市','永州市','怀化市','娄底市','湘西土家族苗族自治州');
		GC1['J 江苏']=new Array('南京市','徐州市','连云港市','淮安市','宿迁市','盐城市','扬州市','泰州市','南通市','镇江市','常州市','无锡市','苏州市','昆山市','江阴市','常熟市');
		GC1['J 吉林']=new Array('长春市','吉林市','四平市','辽源市','通化市','白山市','松原市','白城市','延边朝鲜族自治州');
		GC1['J 江西']=new Array('南昌市','景德镇市','萍乡市','新余市','九江市','鹰潭市','赣州市','吉安市','宜春市','抚州市','上饶市');
		GC1['L 辽宁']=new Array('沈阳市','大连市','本溪市','鞍山市','抚顺市','丹东市','锦州市','葫芦岛市','营口市','盘锦市','阜新市','辽阳市','铁岭市','朝阳市');
		GC1['N 内蒙古']=new Array('呼和浩特市','乌兰察布','锡林郭勒盟','巴彦淖尔','阿拉善盟','兴安盟','包头市','乌海市','赤峰市','通辽市','鄂尔多斯市','呼伦贝尔市');
		GC1['N 宁夏']=new Array('银川市','石嘴山市','吴忠市','中卫市','固原市');
		GC1['Q 青海']=new Array('西宁市','海东市','海北藏族自治州','黄南藏族自治州','海南藏族自治州','果洛藏族自治州','玉树藏族自治州','海西蒙古族藏族自治州');
		GC1['S 四川']=new Array('成都市','自贡市','攀枝花市','泸州市','德阳市','绵阳市','广元市','遂宁市','内江市','乐山市','南充市','宜宾市','广安市','达州市','巴中市','眉山市','资阳市','雅安市','阿坝藏族羌族自治州','甘孜藏族自治州','凉山彝族自治州');
		GC1['S 陕西']=new Array('西安市','铜川市','宝鸡市','咸阳市','渭南市','延安市','汉中市','榆林市','安康市','商洛市');
		GC1['S 上海']=new Array('上海市');
		GC1['S 山东']=new Array('济南市','青岛市','聊城市','滨州市','菏泽市','潍坊市','日照市','淄博市','枣庄市','东营市','烟台市','威海市','济宁市','泰安市','莱芜市','德州市','临沂市');
		GC1['S 山西']=new Array('太原市','大同市','阳泉市','长治市','晋城市','朔州市','晋中市','忻州市','临汾市','运城市','吕梁市');
		GC1['T 天津']=new Array('天津市');
		GC1['X 西藏']=new Array('拉萨市','那曲地区','昌都地区','山南地区','日喀则地区','阿里地区','林芝地区');
		GC1['X 新疆']=new Array('乌鲁木齐市','克拉玛依市','石河子市','阿拉尔市','图木舒克市','五家渠市','吐鲁番市','哈密市','和田市','喀什地区','阿克苏地区','克孜勒苏柯尔克孜自治州','巴音郭楞蒙古自治州','昌吉回族自治州','博尔塔拉蒙古自治州','伊犁哈萨克自治州','阿勒泰地区','塔城地区');
		GC1['Y 云南']=new Array('昆明市','曲靖市','玉溪市','保山市','昭通市','普洱市','临沧市','丽江市','文山壮族苗族自治州','红河哈尼族彝族自治州','西双版纳傣族自治州','楚雄彝族自治州','大理白族自治州','德宏傣族景颇族自治州','怒江傈傈族自治州','迪庆藏族自治州');
		GC1['Z 浙江']=new Array('杭州市','宁波市','温州市','嘉兴市','湖州市','绍兴市','金华市','舟山市','台州市','丽水市','衢州市','义乌市');

	window.FabiaoSelect = {
		initialize: function(option) {
			new Fabiao(option);
		}
	}

	var instance = null;

	function Fabiao(option) {
		this.config = {};
		this.targetCollection = [
		{
			'targetDom': '#area',
			'forDom': '#froms'
		}];
		this.num = 1;
		this.currTarget = null;
		this.initialize(option);
	}

	Fabiao.prototype = {

		/* 初始化组件,并将配置参数option传入 */
		initialize: function(option) {
			//console.log("option:"+JSON.stringify(option));
			//配置默认参数
			this.config = $.extend({},{
				targetDom: '#area',		//绑定的目标表单
				data: [{"province": GP_EN},{"city": GC1}],		//下拉里面的所需要的参数,以key-value形式传入,key可作为对应value的class
				forDom: '#froms',		//当前表单form
				markClass: 'on',		//控制选择到的下拉选项
				dataHandle: null,		//自定义组装数据
				hideBox: null, 		//自定义隐藏动画或逻辑
				callback: function(){}
			}, option);
			//console.log("config:"+JSON.stringify(this.config));
			
			if (option.targetDom && option.forDom) {
				this.targetCollection.push({
					'targetDom': option.targetDom,
					'forDom': option.forDom
				});
				this.num++;
			}

			if (!instance) {
				this.createBox();
				instance = this;
			}
			this.event();
		},

		/* 给select绑定事件 */
		event: function(){
			var self = this,
				moveMark = false,//判断是点击还是触摸移动
				boxEle = $('.area-select-box')[0],//用于绑定判断动画元素
				inputTarget = $(this.targetCollection[this.num - 1].targetDom),
				inputForm = $(this.targetCollection[this.num - 1].forDom),
				inputParent = inputTarget.parent();

			self.animate = false;//用于判断动画
							
			inputTarget.prop('readonly', true);

			self.areaMove = false;
			inputParent.on('touchstart', function(e){
				self.areaMove = false;
			});
			inputParent.on('touchmove', function(e){
				self.areaMove = true;
			});
			inputParent.on('touchend', function(e){
				var id = $(e.target).attr('id');
				if(!self.areaMove){
					self.areaMove = false;
					// $(self.config.targetDom).focus();
					self.animate = true;
					var box = $('.area-select-box');
					inputForm.find('input,select').blur();
					$('#mfyy_phone').blur();
					self.currTarget = $(e.currentTarget).find('input');
					self.selectFill($(e.target));
					box.show();
					setTimeout(function(){$('.area-select-obj').removeClass('area-mark');},0);//节点显示完毕后才移除class确保css动画执行
					setTimeout(function(){
						self.animate = false;
					}, 400);
				}
			});

			// $(this.config.targetDom).on('touchstart', function(e){
			// 	self.areaMove = false;
			// });
			// $(this.config.targetDom).on('touchmove', function(e){
			// 	self.areaMove = true;
			// });
			// //目标表单
			// $(this.config.targetDom).on('touchend', function(e){
			// 	if(self.areaMove){
			// 		self.areaMove = false;
			// 		return;
			// 	}
			// 	e.preventDefault();
			// 	animate = true;
			// 	var box = $('.area-select-box');

			// 	$(self.config.forDom).find('input,select').blur();
			// 	$('#mfyy_phone').blur();
			// 	self.selectFill();
			// 	box.show();
			// 	setTimeout(function(){$('.area-select-obj').removeClass('area-mark')},0);//节点显示完毕后才移除class确保css动画执行
			// });

			$(".area-select-box").on('touchstart', function(e){
				e.preventDefault();
			});

			//用于判断动画结束
			// var transitionEvent = self.whichTransitionEvent();
			// transitionEvent && boxEle.addEventListener(transitionEvent, function(e){
			// 	animate = false;
			// });

			//点击灰色背景关闭select
			$(".area-select-background").on('touchstart', function(e){
		        e.preventDefault();
		        if(!self.animate){
		        	self.animate = true;
		        	self.hideBox();
		        }
		        $(".backmall").css("height",body_height);
		    });

			//点击获取触摸点
			var startY = -1,
				originY = -1,
				time = 0,
				stopTime = 0;
			$('.area-select').on('touchstart', function(e){
				var targetDom = $(e.target);
				e.preventDefault();
				startY = e.originalEvent.touches[0].pageY;
				originY = e.originalEvent.touches[0].pageY;
				//如果点到的是li下的div
		        if(targetDom.hasClass('area-select-option')){
		            li = targetDom.parent();
		        }else if(targetDom.parent().hasClass('area-select-option')){
		        	li = targetDom.parent().parent();
		        }else{
		            li = targetDom;
		        }
				stopTime = setInterval(function(){
					time++;
					if(time > 20 && !li.hasClass('area-background-tab')){
			        	li.addClass('area-background-tab');
					}
				}, 10);
			});

			//下拉选项里面如果是上下滑动不触发点击
			$('.area-select').on('touchmove', function(e){
				var select = $(e.currentTarget);//当前触发事件的元素
				var ul = $(e.currentTarget).find('ul');//触发元素下的ul
				var moveY = e.originalEvent.touches[0].pageY;//移动后的Y坐标
				var move = startY - moveY;//移动的位置 ++↑  --↓
				var heightSelect = select.height();//当前作为窗口的高度
				var heightUl = ul.height();//窗口里面内容的高度
				var height =  heightSelect - heightUl;//两个容器高度差就是ul最大移动距离
				var top = parseInt(ul.data('top') || 0);//获取当前元素的top 之前没有移动则为undefined
				if(moveY !== startY){
					moveMark = true;
					startY = moveY;//将当前移动的坐标覆盖开始值
				}
				if(Math.abs(startY - originY) >= 4){
					clearInterval(stopTime);
					ul.find('.area-background-tab').removeClass('area-background-tab');
		    	}
				if(height < 0){//高度差大于0则说明窗口里面内容不用移动
					if(e.originalEvent.touches[0].clientY <= -1 && top <= height){
						ul.addClass('transition-select');
						ul.css('-webkit-transform', 'translateY(' + height + 'px)');
		        		ul.data('top', height);
		        		setTimeout(function(){
				        	ul.removeClass('transition-select');
				        }, 500);
				        return;
					}
					//如果移动后top大于0则为0   移动后top小于高度差说明移动到最大距离
					var m = (top - move) >= 86 ? 86 : (top - move) <= (height - 86) ? (height - 86) : (top - move);
					ul.data('top', m);
					ul.css('-webkit-transform', 'translateY(' + m + 'px)');
				}
			});

			//触摸离开
		    $('.area-select').on('touchend', function(e){
		    	//如果是上下滑动不执行后续动作
		    	time = 0;
		    	clearInterval(stopTime);
		        var ul = $(e.currentTarget).find('ul');
		        var height = $(this).height() - ul.height();
		        ul.addClass('transition-select');
		        if(ul.data('top') >= 0){
		        	ul.css('-webkit-transform', 'translateY(0px)');
		        	ul.data('top', '0');
		        }else if(ul.data('top') <= height){
		        	ul.css('-webkit-transform', 'translateY(' + height + 'px)');
		        	ul.data('top', height);
		        }
		        setTimeout(function(){
		        	ul.removeClass('transition-select');
		        }, 500);
		    	$(e.currentTarget).find('.area-background-tab').removeClass('area-background-tab');
		    	if(moveMark && Math.abs(startY - originY) >= 4){
		    		moveMark = false;
		    		return;
		    	}
		        var targetDom = $(e.target),//当前点击的元素
		        	dataFont = '',//area-select-province里面text
		            city = '',//area-select-city里面的text
		            li = '';//当前点击的li

		        //如果点到的是li下的div
		        if(targetDom.hasClass('area-select-option')){
		            li = targetDom.parent();
		        }else if(targetDom.parent().hasClass('area-select-option')){
		        	li = targetDom.parent().parent();
		        }else{
		            li = targetDom;
		        }
		        //如果点击的是第一行选项 给第二行填充对应数据
		        if(li.parent().hasClass('area-select-province')){
		        	dataFont = li.data('handle');
				    self.fillCity(dataFont, city);
		        }
		        if(li.hasClass('area-select')){
		        	return;
		        }
		        li.parent().find('.' + self.config.markClass).removeClass(self.config.markClass);
		        li.addClass(self.config.markClass);
		        //如果点击的是第二行 则关闭select
		        if(li.parent().hasClass('area-select-city')){
			        //将之前的选择标记干掉 给点击的li加上标记
			        //拿到两个选择的text 填充到目标表单 然后执行关闭动画
					var province = $('.area-select-province').find('.' + self.config.markClass + ' .area-select-option').text();
					//console.log("province:"+province);
					if($('.area-select-city').find('.' + self.config.markClass + ' .area-select-option').length>1)
						var city = $('.area-select-city').find('.' + self.config.markClass + ' .area-select-option').eq(1).text();
					else 
						var city = $('.area-select-city').find('.' + self.config.markClass + ' .area-select-option').text();
					//console.log("city:"+city);
					if (self.currTarget) {
						self.currTarget.val(province.substring(2) + ' ' + city);
					}
					
					animate = true;
					self.config.callback();
		        	self.hideBox();
		        	self.currTarget=null;
		        	$(".backmall").css("height",body_height);
		        }
		    });
		},

		/* 如果输入框里面有值,则展示出来 */
		selectFill: function(target){
			var inputTarget = target;//$(this.targetCollection[this.num - 1].targetDom);
			var cityArr = inputTarget.val().split(' ');
			var ul = $('.area-select-province');
			var onHandle = '';
			if(inputTarget.val()){
				var liDom = ul.find('li');
				for(var i=0; i< liDom.length; i++){
					var handle = $(liDom[i]).data('handle');
					if(cityArr[0] === handle.substring(2)){
						ul.find('.on').removeClass('on');
						$(liDom[i]).addClass('on');
						onHandle = handle;
					}
				}
				this.fillCity(onHandle, '', cityArr[1]);
			}
		},

		/* 填充第二行数据 */
		fillCity: function(dataFont, city, cityText){
			var self = this;
			str = '<ul class="area-select-city">';

    		for (var key in self.config.data[1]['city'][dataFont]) {
	    		city += '<li class=\"' + (self.config.data[1]['city'][dataFont][key] === cityText ? self.config.markClass : "") + '\">' +
		                    '<div class="area-select-option">' + self.config.data[1]['city'][dataFont][key] + '</div>' +
		                '</li>';
    		};
    		str += city + '</ul>';
		    $('.area-city').html(str);
		},

		/* 用于返回判断动画的事件名 */
		whichTransitionEvent: function(){
			var el = document.createElement('fakeelement');
			var transitions = {
				'transition': 'transitionend',
				'OTransition': 'oTransitionEnd',
				'MozTransition': 'transitionend',
				'WebkitTransition': 'webkitTransitionEnd'
			}
			for(var t in transitions){
				if(el.style[t] !== undefined){
					return transitions[t];
				}
			}
		},

		/* 关闭select */
		hideBox: function(){
			//如果存在自定义关闭函数则执行自定义函数
			if( typeof this.config.hideBox === 'function' ){
				this.config.hideBox();
				return;
			}

			$(document.body).removeAttr('style');
            $('.area-select-obj').addClass('area-mark');
            var clearT = setTimeout(function(){
                clearTimeout(clearT);
                $('.area-select-box').hide();
            }, 400);

		},

		/* 将数据组装成节点 */
		dataHandle: function(){
			var areaSelect = '';//组件的select
			for(var data in this.config.data){
				for (var key in this.config.data[data]) {
					var li = '',
						arr = [],
						select = '<div class="area-select area-' + key + '">' +
						            '<ul class="area-select-' + key + '">';//将key加上area-select前缀class

					if('city' === key){
						arr = this.config.data[data][key]['A 安徽'];
					}else{
						arr = this.config.data[data][key];
					}

					for(var k in arr){
						var str = '';
						if('city' === key){
							str = arr[k];
						}else{
							str = '<span>'+ arr[k].substring(2,-1) + '</span>' + arr[k].substring(2);
						}
						li += '<li data-handle="' + arr[k] + '" class=\"' + ("city" === key ? "" : (k == 0 ? this.config.markClass : "")) + '\">' +
			                    '<div class="area-select-option">' + str + '</div>' +
			                 '</li>';
					}

					li += '</ul></div>';
					select += li;
					areaSelect += select;
				};
			}
			$(".area-select-province").find("li").removeClass("on");
			return areaSelect;
		},

		/* 创建select */
		createBox: function(){
			//如果有自定义组装函数就执行自定义组装函数
			var areaSelect = typeof this.config.dataHandle === 'function' ? this.config.dataHandle() : this.dataHandle();

			var str = '<div class="area-select-box">' +
					    '<div class="area-select-background"></div>' +
					    '<div class="area-select-obj area-mark">' +
					    	areaSelect +
					    '</div>' +
					'</div>';

			
			$(document.body).append(str);	

		}
	}
	
})(window)
