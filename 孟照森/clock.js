function Clock(canvas) {
	this.elem = canvas;
	this.ctx = canvas.getContext("2d");
}

Object.assign(Clock.prototype, {
	init: function() {
		this.drawCanvas();
		this.setInterval();
	},
	
	drawCanvas:function() {
		this.drawPannel();
		this.drawCenterPoint();
		this.drawMinutes();
		this.drawHours();
		this.drawHoursNum();
		this.getTime();
		this.drawHourPointer();
		this.drawMinutesPointer();
		this.drawSecondsPointer();
	},
	
	drawPannel:function () {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.arc(0, 0, 100, 0, Math.PI * 2);
		this.ctx.strokeStyle = "#999";
		this.ctx.fillStyle= "#eee";
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
	
	drawMinutes: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);

		for (var i = 0; i < 60; i++) {
			this.ctx.beginPath();
			this.ctx.moveTo(0, - 97);
			this.ctx.lineTo(0, -93);
			this.ctx.strokeStyle = "red";
			this.ctx.stroke();
			this.ctx.rotate(Math.PI / 180 * 6);
			
		}
		this.ctx.restore();
	},
	
	drawHours: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);

		for (var i = 0; i < 12; i++) {
			this.ctx.beginPath();
			this.ctx.moveTo(0, - 97);
			this.ctx.lineTo(0, -87);
			this.ctx.lineWidth = 2;
			this.ctx.stroke();
			this.ctx.rotate(Math.PI / 180 * 30);
		}

		this.ctx.restore();
	},
	
	drawHoursNum: function() {
		this.ctx.save();
		this.ctx.translate(250,250);
		this.ctx.beginPath();
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		this.ctx.fillStyle = "#333";
		for (var i = 1; i <= 12; i++) {
			this.ctx.beginPath();
			var x = Math.sin(Math.PI / 180 * 30 * i) * 78;
			var y = -Math.cos(Math.PI / 180 * 30 * i) * 78;
			this.ctx.fillText(i, x, y)
		}
		this.ctx.restore();
	},
	
	getTime: function() {
		var date = new Date();
		this.hours = date.getHours() + (date.getMinutes() / 60);		
		this.minutes = date.getMinutes()+(date.getSeconds() / 60);
		this.seconds = date.getSeconds();
	},
	
	
	drawHourPointer: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.rotate(Math.PI / 180 * 30 * this.hours);
		this.ctx.moveTo(0, -40);
		this.ctx.lineTo(0, 10);
		this.ctx.lineWidth = 3;
		this.ctx.stroke();
		this.ctx.restore();
	},
	
	drawMinutesPointer: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.strokeStyle = "aqua";
		this.ctx.rotate(Math.PI / 180 * 6 * this.minutes);
		this.ctx.moveTo(0, -55);
		this.ctx.lineTo(0, 10);
		this.ctx.lineWidth = 2;
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawSecondsPointer: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.strokeStyle = "red";
		this.ctx.rotate(Math.PI / 180 * 6 * this.seconds);
		this.ctx.moveTo(0, -70);
		this.ctx.lineTo(0, 10);
		this.ctx.stroke();
		this.ctx.restore();
	},
	
	setInterval: function(){
		var that = this;
		setInterval(function() {
			that.ctx.clearRect(0, 0, 500, 500)
			that.drawCanvas();
		}, 1000)
	},
	
});