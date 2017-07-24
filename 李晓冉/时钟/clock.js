function Clock(canvas){
	this.elem = canvas;
	this.ctx = canvas.getContext("2d");
}

Object.assign(Clock.prototype,{
	init: function(){
		//alert(1);
		
		this.drawClock();
        this.setInterval();
	},
	setInterval:function(){
		var that = this;
		setInterval(function(){
			that.ctx.clearRect(0,0,500,500);
			that.drawClock();
		},1000);
	},
	drawClock:function(){
		
		this.drawPanel();
		this.drawNum();
		this.drawPoint();
		this.drawMinuteTick();
		this.drawHourTick();
		this.getTime();
		this.drawHourPointer();
		this.drawMinutePointer();
		this.drawSecondPointer();
		this.showDigitalclock();
	},
	drawPanel: function(){
		
		this.ctx.beginPath();
		//this.ctx.save();
		this.ctx.arc(200,200,100,0,Math.PI * 2);
		this.ctx.strokeStyle = "yellow";
		this.ctx.fillStyle = "green";
		this.ctx.fill();
		this.ctx.stroke();
		//this.ctx.restore();
	},
	drawPoint: function(){
		this.ctx.beginPath();
		this.ctx.arc(200,200, 5, 0, Math.PI * 2 );
		this.ctx.fillStyle = "yellowgreen";
		this.ctx.fill();
		this.ctx.closePath();
	},
	drawHourTick: function(){
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.strokeStyle = "white";
		this.ctx.translate(200,200);

		for(var i = 0 ; i < 12; i ++){
			this.ctx.beginPath();
			this.ctx.rotate(Math.PI/180 * 30);
			this.ctx.moveTo(0,-96);
			this.ctx.lineTo(0,-86);
			this.ctx.lineWidth = 3;
			this.ctx.lineCap = "round";
			this.ctx.stroke();
		}
			this.ctx.restore();
	},
	drawMinuteTick: function(){
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.strokeStyle = "white";
		this.ctx.translate(200,200);

		for(var i = 0 ; i < 60; i ++){
			this.ctx.beginPath();
			this.ctx.rotate(Math.PI/180 * 6);
			this.ctx.moveTo(0,-90);
			this.ctx.lineTo(0,-95);
			this.ctx.stroke();
		}
			this.ctx.restore();
	},
     
	getTime: function(){
		this.date = new Date();

		this.seconds = this.date.getSeconds();
		this.minute = this.date.getMinutes() + this.seconds / 60;
		this.hour = this.date.getHours() + this.minute / 60;
		
		//console.log(this.hour,this.minute,this.seconds);

	},

	showDigitalclock: function(){
		this.ctx.font = "20px Arial";
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		this.ctx.fillStyle = "green";
		this.ctx.strokeStyle = "green";
		this.ctx.fillText(parseInt(this.hour),110,320);
		this.ctx.fillText("时",140,320);
		this.ctx.fillText(parseInt(this.minute),180,320);
		this.ctx.fillText("分",220,320);
		this.ctx.fillText(parseInt(this.seconds),260,320);
		this.ctx.fillText("秒",300,320);
		this.ctx.strokeText("Treasure Every Moment That You Have!",200,60);
	},
	drawHourPointer : function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(200,200);
		this.ctx.rotate(Math.PI / 180 * 30 * this.hour);
		this.ctx.moveTo(0,0);
		this.ctx.lineTo(0,-34);
		this.ctx.lineWidth = 3;
		this.ctx.lineCap = "round";
		this.ctx.stroke();
		this.ctx.restore();
	},
	drawMinutePointer : function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(200,200);
		this.ctx.rotate(Math.PI / 180 * 6 * this.minute);
		this.ctx.moveTo(0,0);
		this.ctx.lineTo(0,-54);
		this.ctx.lineWidth = 2;
		this.ctx.lineCap = "round";
		this.ctx.stroke();
		this.ctx.restore();
	},
	drawSecondPointer : function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(200,200);
		this.ctx.rotate(Math.PI / 180 * 6 * this.seconds);
		this.ctx.moveTo(0,-3);
		this.ctx.lineTo(0,-64);
		this.ctx.lineWidth = 1;
		this.ctx.lineCap = "round";
		this.ctx.stroke();
		this.ctx.restore();
	},
	drawNum: function(){
		//alert(2);
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(200,200);
		this.ctx.font = "12px Arial";
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		this.ctx.fillStyle = "yellow";

		for(var i = 1; i <= 12 ; i ++){
			this.ctx.rotate(Math.PI / 180 * 30);
			this.ctx.fillText(i,0,-70);
		}
		
		this.ctx.restore();
	}

	


});
