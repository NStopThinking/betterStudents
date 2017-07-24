function inherit(child, parent) {
	function tempCtor() {};
	tempCtor.prototype = parent.prototype;
	child.superClass_ = parent.prototype;
	child.prototype = new tempCtor();
	child.prototype.constructor = child;
}

function Clock(canvas) {
	this.ele = canvas;
	this.ctx = canvas.getContext("2d");
}

Object.assign(Clock.prototype, {

	init: function() {
		this.drawCanvas();
		this.setInterval();
	},

	drawCanvas: function() {
		this.getTime();
		this.drawPannel();
		this.drawCenterPoint();
		this.drawMinutes();
		this.drawHours();
		this.drawHoursNum();
		this.drawHoursPointer();
		this.drawMinutesPointer();
		this.drawSecondsPointer();
	},

	setInterval: function() {
		var _this = this;
		setInterval(function() {
			_this.ctx.clearRect(0, 0, 500, 500);
			_this.drawCanvas();
		}, 1000)
	},


	getTime: function() {
		var date = new Date();
		this.hours = date.getHours() + (date.getMinutes()/60);
		this.minutes = date.getMinutes();
		this.seconds = date.getSeconds();
	},

	drawPannel: function() {
		this.ctx.beginPath();
		this.ctx.save();		
		this.ctx.translate(250, 250);
		this.ctx.arc(0, 0, 100, 0, Math.PI * 2);
		this.ctx.strokeStyle = "#999";
		this.ctx.fillStyle = "#eee";
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawMinutes: function() {
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.translate(250, 250);

		//this.ctx.rotate(Math.PI / 180 *6);
		for (var i = 0; i < 60; i++) {
			this.ctx.beginPath();
			this.ctx.moveTo(0, -96);
			this.ctx.lineTo(0, -93);
			this.ctx.lineWidth = 2;
			this.ctx.stroke();			
			this.ctx.rotate(Math.PI / 180 *6);
		}
		this.ctx.restore();
		
	},

	drawHours: function() {
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.translate(250, 250);

		//this.ctx.rotate(Math.PI / 180 *6);
		for (var i = 0; i < 12; i++) {
			this.ctx.beginPath();
			this.ctx.moveTo(0, -96);
			this.ctx.lineTo(0, -87);
			this.ctx.lineWidth = 2;
			this.ctx.stroke();			
			this.ctx.rotate(Math.PI / 6);
		}
		this.ctx.restore();
	},

	drawCenterPoint: function() {
		this.ctx.beginPath();
		this.ctx.arc(250, 250, 5, 0, Math.PI * 2);
		this.ctx.fillStyle = "#900";
		this.ctx.fill();

	},

	drawHoursNum: function() {
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.textAlign = 'center';		
		this.ctx.textBaseline = 'middle';
		this.ctx.fillStyle = "#333";
		for (var i = 1; i <= 12; i++) {
			var x = Math.sin(Math.PI / 6 * i) * 78;
			var y = -Math.cos(Math.PI / 6 * i) * 78;
			this.ctx.fillText(i, x, y);
		}
		this.ctx.restore();
	},

	drawHoursPointer: function() {
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.rotate(Math.PI / 6 * this.hours);
		this.ctx.moveTo(0, -50);
		this.ctx.lineTo(0, 10);
		this.ctx.strokeStyle = "#e00"
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawMinutesPointer: function() {
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.rotate(Math.PI / 30 * this.minutes);
		this.ctx.moveTo(0, -70);
		this.ctx.lineTo(0, 10);
		this.ctx.strokeStyle = "#999"
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawSecondsPointer: function() {
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.rotate(Math.PI / 30 * this.seconds);
		this.ctx.moveTo(0, -90);
		this.ctx.lineTo(0, 10);
		this.ctx.strokeStyle = "#000";
		this.ctx.stroke();
		this.ctx.restore();
	}
});

inherit(newClock, Clock);

function newClock(canvas) {
	this.ele = canvas;
	this.ctx = canvas.getContext("2d");
}

newClock.prototype.drawSecondsPointer = function(){
	this.ctx.beginPath();
	this.ctx.save();
	this.ctx.translate(250, 250);
	this.ctx.rotate(Math.PI / 30 * this.seconds);
	this.ctx.moveTo(0, -90);
	this.ctx.lineTo(0, 10);
	this.ctx.strokeStyle = "#9c69ba";
	this.ctx.stroke();
	this.ctx.restore();
};

newClock.prototype.drawHoursPointer = function(){
	this.ctx.beginPath();
	this.ctx.save();
	this.ctx.translate(250, 250);
	this.ctx.rotate(Math.PI / 6 * this.hours);
	this.ctx.moveTo(0, -50);
	this.ctx.lineTo(0, 10);
	this.ctx.strokeStyle = "#98ac96"
	this.ctx.stroke();
	this.ctx.restore();
};