function Clock(canvas) {
	this.cElem = canvas;
	this.ctx = canvas.getContext("2d");
};

Object.assign(Clock.prototype, {
	init: function() {
		this.drawCanvas();
		this.setInterval();
	},

	drawCanvas: function() {
		this.drawPannel();
		this.drawCenterPoint();
		this.drawMinutes();
		this.drawHours();
		this.drawHoursNum();
		this.getTimes();
		this.drawHourPointer();
		this.drawMinutesPointer();
		this.drawSecondsPointer();
	},

	getTimes: function() {
		var date = new Date();
		this.hours = date.getHours() + (date.getMinutes()/60) + (date.getSeconds()/3600);
		this.minutes = date.getMinutes() + (date.getSeconds()/60);
		this.seconds = date.getSeconds();
	},

	drawPannel: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		this.ctx.arc(0, 0, 100, 0, Math.PI*2);
		this.ctx.strokeStyle = "#999";
		this.ctx.fillStyle = "#eee";
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawCenterPoint: function() {
		this.ctx.beginPath();
		this.ctx.arc(250, 250, 3, 0, Math.PI*2);
		this.ctx.fillStyle = "red";
		this.ctx.fill();
	},

	drawMinutes: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		for(var i=0; i<60; i++){
			this.ctx.beginPath();
			this.ctx.moveTo(0, -97);
			this.ctx.lineTo(0, -94);
			this.ctx.strokeStyle = "#333";
			this.ctx.stroke();
			this.ctx.rotate(Math.PI/180*6);
		};
		this.ctx.restore();	
	},

	drawHours: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		for(var i=0; i<12; i++){
			this.ctx.beginPath();
			this.ctx.moveTo(0, -97);
			this.ctx.lineTo(0, -90);
			this.ctx.strokeStyle = "#333";
			this.ctx.stroke();
			this.ctx.rotate(Math.PI/180*30);
		};
		this.ctx.restore();
	},

	drawHoursNum: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		this.ctx.fillStyle = "#333";
		this.ctx.font = "14px Arial";
		for(var i=1; i<=12; i++){
			var x = Math.sin(Math.PI/6*i) * 80;
			var y = -Math.cos(Math.PI/6*i) * 80;
			this.ctx.fillText(i, x, y);
		};
		this.ctx.restore();
	},

	drawHourPointer: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		this.ctx.rotate(Math.PI/6 * this.hours);
		this.ctx.moveTo(0, -50);
		this.ctx.lineTo(0, 10);
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawMinutesPointer: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		this.ctx.rotate(Math.PI/30 * this.minutes);
		this.ctx.moveTo(0, -60);
		this.ctx.lineTo(0, 12);
		this.ctx.strokeStyle = "deepskyblue";
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawSecondsPointer: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		this.ctx.rotate(Math.PI/30 * this.seconds);
		this.ctx.moveTo(0, -70);
		this.ctx.lineTo(0, 15);
		this.ctx.strokeStyle = "red";
		this.ctx.stroke();
		this.ctx.restore();
	},

	setInterval: function() {
		var this_ = this;
		setInterval(function(){
			this_.drawCanvas();
		},1000)
	}
})