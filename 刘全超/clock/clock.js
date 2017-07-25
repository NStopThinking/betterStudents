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
		this.drawMinutes();
		this.drawHours();
		this.drawHoursNum();
		this.drawHourPointer();
		this.drawMinutePointer();
		this.drawSecondPointer();
	},

	setInterval: function() {
		this.ctx.beginPath();
		var this_ = this;
		setInterval(function() {
			this_.ctx.clearRect(0, 0, 600, 600);
			this_.drawCanvas();
		},1000)
	},

	getTimes: function() {
		this.ctx.beginPath();
		var date = new Date();
		this.hours = date.getHours() + (date.getMinutes() / 60);
		if(this.hours > 12) {
			this.hours = this.hours - 12;
		}
		this.minutes = date.getMinutes();
		this.seconds = date.getSeconds();
	},

	drawPannel: function() {
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.translate(300, 300);
		this.ctx.arc(0, 0, 150, 0, Math.PI * 2)
		this.ctx.strokeStyle = "#999";
		this.ctx.fillStyle = "#ddd";
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawCenterPoint: function() {
		this.ctx.beginPath();
		this.ctx.arc(300, 300, 3, 0, Math.PI * 2)
		this.ctx.fillStyle = "red";
		this.ctx.fill();
	},

	drawMinutes: function() {
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.translate(300, 300);
		this.ctx.rotate(Math.PI / 30);
		for (var i = 0; i < 60; i++) {
			this.ctx.beginPath();	
			this.ctx.moveTo(0, -147);
			this.ctx.lineTo(0, -143);
			// this.ctx.lineWidth = 2;
			this.ctx.stroke();
			this.ctx.rotate(Math.PI / 30);
		}
		
		this.ctx.restore();
	},

	drawHours: function() {
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.translate(300, 300);
		this.ctx.rotate(Math.PI / 6);
		for (var i = 0; i < 12; i++) {
			this.ctx.beginPath();	
			this.ctx.moveTo(0, -147);
			this.ctx.lineTo(0, -139);
			// this.ctx.lineWidth = 2;
			this.ctx.stroke();
			this.ctx.rotate(Math.PI / 6);
		}
		
		this.ctx.restore();
	},

	drawHoursNum: function() {
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.translate(300, 300);
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		this.ctx.fillStyle = "blue";

		for (var i = 1; i <= 12; i++) {
			this.ctx.beginPath();
			var x = Math.sin(Math.PI /  6 * i) * 128;
			var y = -Math.cos(Math.PI /  6 * i) * 128;
			this.ctx.fillText(i, x, y);

			// this.ctx.rotate(Math.PI / 6);
		}
		

		this.ctx.restore();
	},

	drawHourPointer: function() {
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.translate(300, 300);
		this.ctx.rotate(Math.PI / 180 * 30 * this.hours);
		this.ctx.moveTo(0, -60);
		this.ctx.lineTo(0, 0);
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawMinutePointer: function() {
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.translate(300, 300);
		this.ctx.rotate(Math.PI / 180 * 6 * this.minutes);
		this.ctx.moveTo(0, -75);
		this.ctx.lineTo(0, 10);
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawSecondPointer: function() {
		this.ctx.save();
		this.ctx.translate(300, 300);
		this.ctx.beginPath();
		this.ctx.strokeStyle = "red";
		this.ctx.rotate(Math.PI / 180 * 6 * this.seconds);
		this.ctx.moveTo(0, -90);
		this.ctx.lineTo(0, 10);
		this.ctx.stroke();
		this.ctx.restore();
	}

});