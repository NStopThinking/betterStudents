function Clock(canvas) {
	this.elem = canvas;
	this.ctx = canvas.getContext("2d");
}

Object.assign(Clock.prototype, {
	
	init: function() {
		this.drawCanvas();
		this.start();
	},

	drawCanvas: function() {
		this.Times();
		this.BiaoPan();
		this.MM();
		this.HH();
		this.Num();
		this.shi();
		this.fen();
		this.miao();
		this.spot();
	},

	start: function(){
		var this_ = this;
		setInterval(function() {
			this_.ctx.clearRect(0, 0, 500, 500);
			this_.drawCanvas();
		}, 1000)
	},

	Times: function() {
		var date = new Date();
		this.hours = date.getHours() + (date.getMinutes() / 60);
		if (this.hours > 12) {
			this.hours = this.hours - 12;
		}
		this.minutes = date.getMinutes();
		this.seconds = date.getSeconds();
	},

	BiaoPan: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.arc(0, 0, 248, 0, Math.PI * 2);
		this.ctx.strokeStyle = "#F3A829";
		this.ctx.globalAlpha=0; //0是透明，1是不透明
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.restore();
	},

	spot: function() {
		this.ctx.beginPath();
		this.ctx.arc(250, 250, 6, 0, Math.PI * 2);
		this.ctx.fillStyle = "#F3A829";
		this.ctx.fill();
	},

	MM: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);

		for (var i = 0; i < 60; i++) {
			this.ctx.beginPath();
			this.ctx.moveTo(0,  248);
			this.ctx.lineTo(0, 230);
			this.ctx.lineWidth = 4;
			this.ctx.lineCap='round';
			this.ctx.stroke();
			this.ctx.rotate(Math.PI / 180 * 6);
		}

		this.ctx.restore();
	},

	HH: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);

		for (var i = 0; i < 12; i++) {
			this.ctx.beginPath();
			this.ctx.moveTo(0,  245);
			this.ctx.lineTo(0, 220);
			this.ctx.lineWidth = 8;
			this.ctx.lineCap='round';
			this.ctx.stroke();
			this.ctx.rotate(Math.PI / 180 * 30);
		}

		this.ctx.restore();
	},

	Num: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		this.ctx.fillStyle = "#333";
		this.ctx.font = '33px Arial';
		for (var i = 1; i <= 12; i++) {
			this.ctx.beginPath();
			var x = Math.sin(Math.PI / 180 * 30 * i) * 188;
			var y = -Math.cos(Math.PI / 180 * 30 * i) * 188;
			this.ctx.fillText(i, x, y);
		}
		this.ctx.restore();
	},

	shi: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.rotate(Math.PI / 180 * 30 * this.hours);
		this.ctx.moveTo(0, -122);
		this.ctx.lineTo(0, 10);
		this.ctx.lineWidth=9;
		this.ctx.lineCap='round';
		this.ctx.shadowColor='#333';
		this.ctx.shadowBlur='10';
		this.ctx.shadowOffsetX='0';
		this.ctx.shadowOffsetY='0';
		this.ctx.stroke();
		this.ctx.restore();
	},

	fen: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.rotate(Math.PI / 180 * 6 * this.minutes);
		this.ctx.moveTo(0, -150);
		this.ctx.lineTo(0, 10);
		this.ctx.lineWidth=6;
		this.ctx.lineCap='round';
		this.ctx.shadowColor='#333';
		this.ctx.shadowBlur='10';
		this.ctx.shadowOffsetX='0';
		this.ctx.shadowOffsetY='0';
		this.ctx.stroke();
		this.ctx.restore();
	},

	miao: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.strokeStyle = "#F3A829";
		this.ctx.rotate(Math.PI / 180 * 6 * this.seconds);
		this.ctx.moveTo(0, -220);
		this.ctx.lineWidth = 3;
		this.ctx.lineCap='round';
		this.ctx.lineTo(0, 10);
		this.ctx.shadowColor='#B5B5B3';
		this.ctx.shadowBlur='12';
		this.ctx.shadowOffsetX='3';
		this.ctx.shadowOffsetY='3';
		this.ctx.stroke();
		this.ctx.restore();
	}

});