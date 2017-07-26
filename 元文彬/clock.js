function Clock(canvas) {
	this.elem = canvas;
	this.ctx = canvas.getContext("2d");

}

Object.assign(Clock.prototype, {
	init: function() {
		this.drawCanvas();
		this.setInterval();
	
	},

	drawCanvas: function() {
		this.getTimes();
		this.drawPannel();
		this.drawCenterPoint();
		this.drawHours();
		this.drawMinutes();
		this.drawHoursNum();
		this.drawHourPointer();
		this.drawMinutesPointer();
		this.drawSecondsPointer();
	},

	setInterval: function() {
		var this_ = this;
		setInterval(function() {
			this_.ctx.clearRect(0, 0, 500, 500);
			this_.drawCanvas();
		},1000)
	},

	getTimes: function() {
		var date = new Date();
		this.hours = date.getHours() + (date.getMinutes() / 60);
		this.minutes = date.getMinutes();
		
		this.seconds = date.getSeconds();
	},

	drawPannel: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		this.ctx.arc(0, 0, 200, 0, Math.PI*2);
		this.ctx.fillStyle = "#000";
		this.ctx.fill();

		this.ctx.stroke();
		this.ctx.restore();
	},

	drawCenterPoint: function() {
		this.ctx.save();
		this.ctx.beginPath();
		// this.ctx.translate(250, 250);
		this.ctx.arc(250, 250, 3, 0, Math.PI*2);
		this.ctx.fillStyle = "#666";
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawMinutes: function() {
		this.ctx.save();
		
		this.ctx.translate(250, 250);
		for (var i = 0; i < 60; i++) {
			this.ctx.beginPath();
			this.ctx.strokeStyle = "#fff";
			this.ctx.moveTo(0, -198);
			this.ctx.lineTo(0, -190);
			this.ctx.lineWidth = 2;
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
			this.ctx.strokeStyle = "#fff";
			this.ctx.moveTo(0, -198);
			this.ctx.lineTo(0, -182);
			this.ctx.lineWidth = 2;
			this.ctx.stroke();
			this.ctx.rotate(Math.PI / 180 * 30);
		}
			
		
		this.ctx.restore();
	},

	drawHoursNum: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.fillStyle = "#fff";
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		this.ctx.font = "25px Arial";
		for (var i = 1; i <= 12; i++) {
			this.ctx.beginPath();
			var x = Math.sin(Math.PI / 180 *30 *i) * 165;
			var y = -Math.cos(Math.PI / 180 *30 *i) * 165;
			this.ctx.fillText(i, x, y);
		}
		this.ctx.restore();

	},

	drawHourPointer: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		this.ctx.lineWidth = 3;
		this.ctx.strokeStyle = "#fff";
		this.ctx.rotate(Math.PI / 180 * 30 * this.hours);
		this.ctx.moveTo(0, -100);
		this.ctx.lineTo(0, 10);
		this.ctx.stroke();
		
		this.ctx.restore();	
	},

	drawMinutesPointer: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.lineWidth = 2;
		this.ctx.strokeStyle = "#fff";
		this.ctx.translate(250, 250);
		this.ctx.rotate(Math.PI / 180 * 6 * this.minutes);
		this.ctx.moveTo(0, -130);
		this.ctx.lineTo(0, 15);
		this.ctx.stroke();
		
		this.ctx.restore();	
	},

	drawSecondsPointer: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		this.ctx.strokeStyle = "#fff";
		this.ctx.rotate(Math.PI / 180 * 6 * this.seconds);
		this.ctx.moveTo(0, -160);
		this.ctx.lineTo(0, 20);
		this.ctx.stroke();
		this.ctx.restore();	
	},
})