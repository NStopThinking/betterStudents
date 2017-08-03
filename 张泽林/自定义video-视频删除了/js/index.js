$(function(){

	

	function Page() {


		
		this.Clarity = $('.qua');
		this.playBtn = $('#start-stop');
		this.bg = $('.bg');

		this.video = $('#video');
		this.videoElem = this.video[0];

		this.volume1 = $('#volume1');
		this.qua = $('.Quality');
		this.Setup = $('#pz');
		this.fullScreenElem = $('#full');

		this.processElem = $("#process");
		this.volumeElem = $("#volume");

		this.t1 = $('.t1');
		this.t2 = $('.t2');


		this.duration = 0;




	}

	$.extend(Page.prototype, {
	    init: function() {
	    	this.bindEvents();
	    },
	  
	    bindEvents:function() {

	    	this.video.on("canplay", $.proxy(this.handleCanPlay, this));
			this.video.on("timeupdate", $.proxy(this.handleTimeUpdate, this));
			this.video.on("ended", $.proxy(this.videoEnd, this));

	    	this.playBtn.on('click',$.proxy(this.PlayBtn, this));
	    	this.bg.on('click',$.proxy(this.playBg,this));
	    	this.video.on('click',$.proxy(this.V_play,this));
	    	this.volume1.on('click',$.proxy(this._volume,this));
	    	this.Setup.on('click',$.proxy(this.peizhi,this));
	    	this.fullScreenElem.on('click',$.proxy(this.handleFullScreenBtnClick,this));

	    	this.volumeElem.on("change", $.proxy(this.handleVolumeChange, this));
			this.processElem.on("change", $.proxy(this.handleProcessChange, this));

			this.Clarity.on('click',$.proxy(this.clarity,this));

	    },
	    clarity:function(e) {
	    	$('.Quality').fadeOut();
	    },
	    formatTime:function(date) {
        	if(parseInt(date / 60 / 60)>0){
			    return [
			        parseInt(date / 60 / 60),
			        parseInt(date / 60 % 60),
			        parseInt(date % 60)
			    ] 
			    .join(":")
		        .replace(/\b(\d)\b/g, "0$1");
        	}else{
        		 return [
			        parseInt(date / 60 % 60),
			        parseInt(date % 60)
			    ]
		        .join(":")
		        .replace(/\b(\d)\b/g, "0$1");
        	}
		},

	    handleTimeUpdate: function(e) {
	    	this.onTrackedVideoFrame(this.videoElem.currentTime, this.videoElem.duration);
			var rate = (e.target.currentTime / this.duration);
			this.processElem.val(rate);
		},

		onTrackedVideoFrame : function(currentTime, duration) {
			var curr = this.formatTime(currentTime);
			var dura = this.formatTime(duration);
        	this.t1.text(curr);
            this.t2.text(dura);
        },

		handleCanPlay: function(e) {
			this.duration = this.videoElem.duration;
		},

		handleVolumeChange: function(e) {
			var target = $(e.target);
			this.videoElem.volume = target.val();
		},

		handleProcessChange: function(e) {
			var target = $(e.target),
				nowTime = this.duration * target.val();
			this.videoElem.currentTime = nowTime;
		},

	    playBg:function() {
		    this.videoElem.play(); 
		    this.bg.fadeOut();
			this.playBtn.attr('src','./images/pause1.png')
	    },
	    PlayBtn:function() {

			if (this.videoElem.paused) {
				this.bg.fadeOut(200);
				this.playBtn.attr('src','./images/pause1.png')
			    this.videoElem.play(); 
			} else {
				this.bg.fadeIn(200);
				this.playBtn.attr('src','./images/play1.png')
			    this.videoElem.pause(); 
			}
	    },
	    V_play:function() {
	    	$('.Quality').fadeOut();
	    	if (this.videoElem.paused) {
				this.bg.fadeOut(200);
				this.playBtn.attr('src','./images/pause1.png')
			    this.videoElem.play(); 
			} else {
				this.bg.fadeIn(200);
				this.playBtn.attr('src','./images/play1.png')
			    this.videoElem.pause(); 
			}
	    },
	    _volume:function() {
	    	if(!this.videoElem.muted){
	    		this.videoElem.muted=true;
	    		this.volume1.attr('src','./images/mute.png')
	    	}else{
	    		this.videoElem.muted=false;
	    		this.volume1.attr('src','./images/no-mute.png')
	    	}
	    },
	    peizhi:function() {
	    	this.qua.toggle();
	    },
	    handleFullScreenBtnClick:function() {
	    	this.launchFullscreen(this.videoElem);
	    	
	    },

	  

	    launchFullscreen: function (element){
		    //此方法不可以在异步任务中执行，否则火狐会出问题
		    if(element.requestFullscreen) {
		        element.requestFullscreen();
		    } else if(element.mozRequestFullScreen) {
		        element.mozRequestFullScreen();
		    } else if(element.msRequestFullscreen){
		        element.msRequestFullscreen();
		    } else if(element.oRequestFullscreen){
		        element.oRequestFullscreen();
		    }else if(element.webkitRequestFullscreen){
		        element.webkitRequestFullScreen();
		    }else{
		        var docHtml = document.documentElement;
		        var docBody = document.body;
		        var videobox = document.getElementById('videobox');
		        var cssText = 'width:100%;height:100%;overflow:hidden;';
		        docHtml.style.cssText = cssText;
		        docBody.style.cssText = cssText;
		        videobox.style.cssText = cssText+';'+'margin:0px;padding:0px;';
		        document.IsFullScreen = true;
		    }
		},

		//退出全屏
		exitFullscreen: function (){
		    if (document.exitFullscreen) {
		        document.exitFullscreen();
		    } else if (document.msExitFullscreen) {
		        document.msExitFullscreen();
		    } else if (document.mozCancelFullScreen) {
		        document.mozCancelFullScreen();
		    } else if(document.oRequestFullscreen){
		        document.oCancelFullScreen();
		    }else if (document.webkitExitFullscreen){
		        document.webkitExitFullscreen();
		    }else{
		        var docHtml = document.documentElement;
		        var docBody = document.body;
		        var videobox = document.getElementById('videobox');
		        docHtml.style.cssText = "";
		        docBody.style.cssText = "";
		        videobox.style.cssText = "";
		        document.IsFullScreen = false;
		    }
		},
		videoEnd:function(){
			this.bg.fadeIn(200);
			this.playBtn.attr('src','./images/play1.png')
		}
	
		


	});

	var page = new Page();
	page.init();


})