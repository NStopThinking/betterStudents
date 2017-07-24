function inherit(child, parent) {
	function tempCtor() {};
	tempCtor.prototype = parent.prototype;
	child.superClass_ = parent.prototype;
	child.prototype = new tempCtor();
	child.prototype.constructor = child;
}


function Clock(canvas) {
	this.elem = canvas;
	this.ctx = canvas.getContext("2d");
}

Clock.prototype = {
	constructor: Clock,

	init: function() {
		this.drawCanvas();
		this.setInterval();
	},

	setInterval: function() {
		var this_ = this;
		setInterval(function() {
			this_.ctx.clearRect(0, 0, 500, 500);
			this_.drawCanvas();
		},1000)
	},

	drawCanvas: function() {
		this.drawPannel();
		this.drawCenterPoint();
		this.drawMinutes();
		this.drawHours();
		this.drawHoursNum();
		this.drawTime();
	},

	drawTime: function() {},

	drawPannel: function() {
		this.getTimes();
		this.ctx.save(); //save()和restore()成对出现，表示备份初始画布，restore()恢复初始画布
		this.ctx.translate(250, 250);  //画布的初始点坐标移动位置
		this.ctx.beginPath();
		this.ctx.arc(0, 0, 100, 0, Math.PI * 2);
		this.ctx.strokeStyle = "#666";
		this.ctx.fillStyle = "#ccc";
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.restore();
		this.drawHourPointer();
		this.drawMinutesPointer();
		this.drawSecondsPointer();
	},

	getTimes: function() {
		var data = new Date();
		this.hours = data.getHours() + data.getMinutes() / 60;
		this.minutes = data.getMinutes() + data.getSeconds() / 60;
		this.seconds = data.getSeconds();
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
			this.ctx.moveTo(0, -97);
			this.ctx.lineTo(0, -95);
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
			this.ctx.moveTo(0, -97);
			this.ctx.lineTo(0, -91);
			this.ctx.lineWidth = 2;
			this.ctx.stroke();
			this.ctx.rotate(Math.PI / 180 * 30);
		}
		this.ctx.restore();
	},

	drawHoursNum: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		this.ctx.fillStyle = "#333";
		for (var i = 1; i <= 12; i++) {
			var x = Math.sin(Math.PI / 180 * 30 * i) * 80,
				y = -Math.cos(Math.PI / 180 * 30 * i) * 80;
			this.ctx.fillText(i, x, y);
		}
		this.ctx.restore();
	},

	drawHourPointer: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.rotate(Math.PI / 180 * 30 * this.hours);
		this.ctx.moveTo(0, -40);
		this.ctx.lineTo(0, 10);
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawMinutesPointer: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.rotate(Math.PI / 180 * 6 * this.minutes);
		this.ctx.moveTo(0, -50);
		this.ctx.lineTo(0, 15);
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawSecondsPointer: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.strokeStyle = "red";
		this.ctx.rotate(Math.PI / 180 * 6 * this.seconds);
		this.ctx.moveTo(0, -60);
		this.ctx.lineTo(0, 20);
		this.ctx.stroke();
		this.ctx.restore();
	}
}



function newClock(canvas) {
	this.elem = canvas;
	this.ctx = canvas.getContext("2d");
}

inherit(newClock, Clock);

newClock.prototype.drawHourPointer = function() {
	this.ctx.save();
	this.ctx.translate(250, 250);
	this.ctx.beginPath();
	this.ctx.rotate(Math.PI / 180 * 30 * this.hours);
	this.ctx.arc(0, -30, 6, 0, Math.PI * 2);
	this.ctx.fillStyle = "red";
	this.ctx.fill();
	this.ctx.restore();
}

newClock.prototype.drawMinutesPointer = function() {
	this.ctx.save();
	this.ctx.translate(250, 250);
	this.ctx.beginPath();
	this.ctx.rotate(Math.PI / 180 * 6 * this.minutes);
	this.ctx.arc(0, -60, 4, 0, Math.PI * 2);
	this.ctx.fillStyle = "blue";
	this.ctx.fill();
	this.ctx.restore();
}

newClock.prototype.drawSecondsPointer = function() {
	this.ctx.save();
	this.ctx.translate(250, 250);
	this.ctx.beginPath();
	this.ctx.rotate(Math.PI / 180 * 6 * this.seconds);
	this.ctx.arc(0, -70, 3, 0, Math.PI * 2);
	this.ctx.fillStyle = "yellow";
	this.ctx.fill();
	this.ctx.restore();
}

newClock.prototype.drawCenterPoint = function() {}

newClock.prototype.drawTime = function() {
	function num(num) {
		if (num<10) {
			num = "0"+num;
		}
		return num;
	}
	var date = new Date();
	this.hour = date.getHours();
	this.hour = num(this.hour);
	this.minutes = date.getMinutes();
	this.minutes = num(this.minutes);
	this.second = date.getSeconds();
	this.second = num(this.second);
	this.ctx.save();
	this.ctx.translate(250, 250);
	this.ctx.beginPath();	
	this.ctx.textAlign = "center";
	this.ctx.textBaseline = "middle";
	this.ctx.font = "20px Arial";
	this.ctx.fillStyle = "green";
	this.ctx.fillText(this.hour + ':' + this.minutes + ':' + this.second, 0, 0);
	this.ctx.restore();
}