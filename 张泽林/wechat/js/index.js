$(function() {
	
	function Page() {
		
		$(document).ready(function() { 
			$('#load').fadeOut()
		}); 
		
		var myScroll = new IScroll('#wrapper');
	



		var map = new AMap.Map("container", {
	        resizeEnable: true,
            zoom:13,
	    });
	    //驾车导航，您如果想修改结果展现效果，请参考页面：http://lbs.amap.com/fn/css-style/
	    var drivingOption = {
	        policy:AMap.DrivingPolicy.LEAST_TIME
	    };
	    var driving = new AMap.Driving(drivingOption); //构造驾车导航类
	    //根据起终点坐标规划驾车路线
	    driving.search([{keyword:'北京科技职业技术学院'},{keyword:'华彬费尔蒙酒店'}], function(status, result){
			if(status === 'complete' && result.info === 'OK'){
				(new Lib.AMap.DrivingRender()).autoRender({
					data: result,
	                map: map
	              
	            });
			}else{
	             alert(result);
	        }
		});





		FastClick.attach(document.body);



		var swiper = new Swiper('.swiper-container', {
			paginationClickable: true,
			direction: 'vertical',
			onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			    swiperAnimateCache(swiper); //隐藏动画元素 
			    swiperAnimate(swiper); //初始化完成开始动画
			}, 
			onSlideChangeEnd: function(swiper){ 
				swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			} 
		});
		
		
		this.Show  = $('.btn');
		this.Hide  = $('#close');
		this.board = $('.board');
		this.Read  = $('#read');
		this.Audio = $('.mp3');
		this.Music = $('#aud')[0];
		this.Send  = $('#send');
		this.readbox = $('#cont');
		this.Name  = $('#name');
		this.Error = $('#error');
	}

	$.extend(Page.prototype, {
		init: function() {
			this.bindEvents();
		},
		bindEvents: function() {
			this.Show.on('click',$.proxy(this.show,this));
			this.Hide.on('click',$.proxy(this.hide,this));
			this.Read.on('click',$.proxy(this.read,this));
			this.Audio.on('click',$.proxy(this.aud,this));
			this.Send.on('click',$.proxy(this.send,this));
			this.Send.on('click',$.proxy(this.prependTo,this));
			
			
		},
		show:function() {
			this.board.fadeIn();
		},
		hide:function() {
			this.board.fadeOut();
		},
		read:function() {
			this.readbox.focus();
		},
		aud:function() {
			this.Audio.toggleClass('rotate');
			if(this.Music.paused) {
				this.Music.play(); 
			} else {
				this.Music.pause();
			}
		},
		send:function() {
			var content = this.readbox.val();
			var name = this.Name.val();
			if(content==''){
				this.Error.html('说点什么把');
				this.Error.css('display','block');
				this.Error.removeClass('success');
			  	this.Error.stop().animate( {opacity:'0'},2500,$.proxy(this.Reset,this));
			}
			if(name==''){
				this.Error.html('名字必须填写哦');
				this.Error.css('display','block');
				this.Error.removeClass('success');
			  	this.Error.stop().animate( {opacity:'0'},2500,$.proxy(this.Reset,this));
			}
			if(content==''&&name==''){
				this.Error.html('不可以什么都不写哦');
				this.Error.css('display','block');
				
				this.Error.removeClass('success');
			  	this.Error.stop().animate( {opacity:'0'},2500,$.proxy(this.Reset,this));
			}
			if(content!=''&&name!=''){
				this.Error.addClass('success');
				this.Error.css('display','block');
				this.Error.html('发送成功');
			  	this.Error.stop().animate( {opacity:'0'},2500,$.proxy(this.Reset,this));
			}
		},
		Reset:function(){
			this.Error.css({opacity:1, display:"none"});
		},
		prependTo:function(){
			var content = this.readbox.val();
			var name = this.Name.val();
			if(content!=''&&name!=''){
				this.Error.addClass('success');
				this.Error.css('display','block');
				var con = this.readbox.val();
				var name = this.Name.val();
				var myDate = new Date();
				var res =   '<li>'+
								'<p class="w1">'+
									'<span class="author">'+name+'</span>'+
									'<span class="time">发表于  '+myDate.toLocaleString()+'</span>'+
								'</p>'+
								'<p class="word">'+
								con+
								'</p>'+
							'</li>'
				
				
				$(res).prependTo("#List");
				this.Error.html('发送成功');
				this.readbox.val('');
				this.Name.val('');
			  	this.Error.stop().animate( {opacity:'0'},2500,$.proxy(this.Reset,this));
			}
		}
		
	});

	var page = new Page();
	page.init();

})