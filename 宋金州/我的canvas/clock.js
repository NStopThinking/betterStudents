function Clock(canvas) {
	this.elem = canvas;
	this.ctx = canvas.getContext("2d");
}
Object.assign(Clock.prototype, {

	init: function() {
		this.drawCanvas();
		this.setInterval();		
	},

	setInterval: function(){
		var this_ = this;
		setInterval(function() {
			this_.ctx.clearRect(0, 0, 500, 500);
			this_.drawCanvas();
		}, 1000)
	},

	drawCanvas: function() {
		this.getTime();
		this.drawPanel();
		this.drawCenterPoint();
		this.drawHours();
		this.drawMinutes();
		this.drawHoursPoint();
		this.drawHoursNum();
		this.drawMinutesPoint();
		this.drawSecondsPoint();
	},

	getTime:function() {
		var oDate = new Date();
			seconds = oDate.getSeconds(),
		    minutes = oDate.getMinutes() + seconds/60,
		    hours = oDate.getHours() + minutes/60;
		    if(hours>12){
		    	hours-=12;
		    }

	},

	drawPanel: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.arc(0, 0, 100, 0, Math.PI * 2);
		this.ctx.strokeStyle = "#ccc";
		this.ctx.fillStyle = "#eee";
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.restore();

		
	},

	drawCenterPoint: function() {
		
		this.ctx.beginPath();
		this.ctx.arc(250, 250, 3, 0, Math.PI * 2);
		this.ctx.fillStyle = "red";
		this.ctx.fill();
	},

	drawHours: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		for(var i = 0; i < 12; i++) {
			this.ctx.moveTo(0, -97);
			this.ctx.lineTo(0,-87);
			this.ctx.rotate(Math.PI / 180 * 30);
			this.ctx.stroke();
		}
		this.ctx.restore();

	},

	drawMinutes: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		for(var i = 0; i < 60; i++) {
			this.ctx.moveTo(0, -97);
			this.ctx.lineTo(0,-92);
			this.ctx.rotate(Math.PI / 180 * 6);
			this.ctx.stroke();
		}
		this.ctx.restore();

	},

	drawHoursNum: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		this.ctx.fillStyle = "gray";		
		for(var i = 1; i <= 12; i++) {
			this.ctx.beginPath()
			var x =  Math.sin(Math.PI / 180 *30 * i) * 75;
			var y = -Math.cos(Math.PI /180 * 30 * i) * 75;
			this.ctx.fillText(i, x, y);
			
		}
		this.ctx.restore();
	},

	drawHoursPoint: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.rotate(Math.PI / 180 * 30 * hours)
		this.ctx.moveTo(0, -30);
		this.ctx.lineTo(0, 10);
		this.ctx.strokeStyle = "balck";	
		this.ctx.stroke()
		this.ctx.restore();
	},

	drawMinutesPoint: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.rotate(Math.PI / 180 * 6 * minutes)
		this.ctx.moveTo(0, -50);
		this.ctx.lineTo(0, 10);
		this.ctx.strokeStyle = "green";	
		this.ctx.stroke()
		this.ctx.restore();
	},

	drawSecondsPoint: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.rotate(Math.PI / 180 * 6 * seconds)
		this.ctx.moveTo(0, -70);
		this.ctx.lineTo(0, 10);
		this.ctx.strokeStyle = "red";	
		this.ctx.stroke()
		this.ctx.restore();
	},
})

