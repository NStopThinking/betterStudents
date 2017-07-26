function Canvas() {
	this.canvas = document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");
	this.canvas.width="1000";
	this.canvas.height="1000";
	
	this.endTime = new Date(2017,6,27,23,59,59);
	this.curShowTimeSeconds = 0;
	this.nextShowTimeSeconds = 0;

	this.curHours = 0;
	this.curMinutes = 0;
	this.curSeconds = 0;

	this.nextHours = 0;
	this.nextMinutes = 0;
	this.nextSeconds = 0;

	this.hours = 0;
	this.minutes = 0;
	this.seconds = 0;

	this.radius = 8;
	this.marginTop = 60;
	this.marginLeft = 30;
	this.digit = digit;

};

Object.assign(Canvas.prototype, {
	init: function() {
		this.setInterval();

	},

	setInterval: function() {
		var that = this;
		setInterval(function(){
			that.coolCountdown();
			that.updata();
		},1000);
	},

	getCurrentShowTimeSeconds: function() {
		var curTime = new Date();
		var ret = Math.round((this.endTime.getTime() - curTime.getTime()) / 1000);
		return ret = ret>0 ? ret : 0;
	},

	updata: function() {
		this.nextShowTimeSeconds = this.getCurrentShowTimeSeconds();
		
		this.nextHours = parseInt(this.nextShowTimeSeconds / 3600);
		this.nextMinutes = parseInt((this.nextShowTimeSeconds - this.nextHours*3600) / 60);
		this.nextSeconds = this.nextShowTimeSeconds % 60;

		this.curHours = parseInt(this.curShowTimeSeconds / 3600);
		this.curMinutes = parseInt((this.curShowTimeSeconds - this.curtHours*3600) / 60);
		this.curSeconds = this.curShowTimeSeconds % 60;

		if(this.nextSeconds != this.curSeconds){
			this.curShowTimeSeconds = this.nextShowTimeSeconds;
		}

	},

	coolCountdown: function() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		this.curShowTimeSeconds = this.getCurrentShowTimeSeconds();
		this.hours = parseInt(this.curShowTimeSeconds / 3600);
		this.minutes = parseInt((this.curShowTimeSeconds - this.hours*3600) / 60);
		this.seconds = this.curShowTimeSeconds % 60;


		this.renderDigit(this.marginLeft, this.marginTop, parseInt(this.hours/10));
		this.renderDigit(this.marginLeft+15*(this.radius+1), this.marginTop, parseInt(this.hours%10));
		
		this.renderDigit(this.marginLeft+30*(this.radius+1), this.marginTop, 10);

		this.renderDigit(this.marginLeft+39*(this.radius+1), this.marginTop, parseInt(this.minutes/10));
		this.renderDigit(this.marginLeft+54*(this.radius+1), this.marginTop, parseInt(this.minutes%10));
		
		this.renderDigit(this.marginLeft+69*(this.radius+1), this.marginTop, 10);

		this.renderDigit(this.marginLeft+78*(this.radius+1), this.marginTop, parseInt(this.seconds/10));
		this.renderDigit(this.marginLeft+93*(this.radius+1), this.marginTop, parseInt(this.seconds%10));
	},

	renderDigit: function(x, y, num) {
		this.ctx.fillStyle = "rgb(0,102,153)";

		for(var i=0; i<this.digit[num].length; i++){
			for(var j=0; j<this.digit[num][i].length; j++){
				if(this.digit[num][i][j] == 1){
					this.ctx.beginPath();
					this.ctx.arc(
						x+j*2*(this.radius+1)+(this.radius+1),
						y+i*2*(this.radius+1)+(this.radius+1),
						this.radius,
						0,
						Math.PI*2
					);
					this.ctx.closePath();
					this.ctx.fill();
				}
			}
		}
	}

})

var cav = new Canvas();
cav.init();