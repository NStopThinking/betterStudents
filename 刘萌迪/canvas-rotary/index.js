function Rotary(canvas) {
	this.elem = canvas;
	this.ctx = canvas.getContext("2d");
}

Object.assign(Rotary.prototype, {
	
	init: function() {
		this.drawCanvas();
		//this.setInterval();
	},

	drawCanvas: function() {
		this.drawPannel();
		this.drawYellowCircle();
		this.drawWhiteCircle();
		this.drawCircleone();
		this.drawCircletwo();
		this.drawCirclethree();
		this.drawCircleText();
		this.drawList();
		this.drawListText();
	},

	drawPannel: function() {
		this.ctx.save();
		this.ctx.translate(200, 200);
		this.ctx.beginPath();
		this.ctx.arc(0, 0, 190, 0, Math.PI * 2);
		this.ctx.strokeStyle = "#fa8d18";
		this.ctx.lineWidth = 10;
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawYellowCircle: function() {
		this.ctx.save();
		this.ctx.translate(200, 200);

		for (var i = 0; i < 24; i++) {
			this.ctx.beginPath();
			this.ctx.arc(190, 0, 2.5, 0, Math.PI * 2);
			this.ctx.lineWidth = 5;
			this.ctx.fillStyle = "#ffe333";
			this.ctx.fill();
			this.ctx.rotate(Math.PI / 180 * 15);
		}

		this.ctx.restore();
	},

	drawWhiteCircle: function() {
		this.ctx.save();
		this.ctx.translate(200, 200);

		for (var i = 0; i < 12; i++) {
			this.ctx.beginPath();
			this.ctx.arc(190, 0, 2.5, 0, Math.PI * 2);
			this.ctx.lineWidth = 5;
			this.ctx.fillStyle = "white";
			this.ctx.fill();
			this.ctx.rotate(Math.PI / 180 * 30);
		}

		this.ctx.restore();
	},

	drawCircleone: function() {
		this.ctx.save();
		this.ctx.translate(200, 200);
		this.ctx.beginPath();
		this.ctx.arc(0, 0, 185, 0, Math.PI * 2);
		this.ctx.strokeStyle = "#edea94";
		this.ctx.fillStyle = "white";
		this.ctx.lineWidth = 3;
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawCircletwo: function() {
		this.ctx.save();
		this.ctx.translate(200, 200);
		this.ctx.beginPath();
		this.ctx.arc(0, 0, 70, 0, Math.PI * 2);
		this.ctx.strokeStyle = "#e0dfd3";
		this.ctx.lineWidth = 2;
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawCirclethree: function() {
		this.ctx.save();
		this.ctx.translate(200, 200);
		this.ctx.beginPath();
		this.ctx.arc(0, 0, 50, 0, Math.PI * 2);
		this.ctx.strokeStyle = "#dff0e7";
		this.ctx.fillStyle = "#dc272c";
		this.ctx.lineWidth = 3;
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawCircleText: function() {
		this.ctx.save();
		this.ctx.fillStyle = "#000";
		this.ctx.font = "38px Arial";
		this.ctx.fillText("", 0, 0);
		this.ctx.restore();
	},
		
	drawList: function() {
		this.ctx.save();
		this.ctx.translate(200, 200);

		for (var i = 0; i < 8; i++) {
			this.ctx.beginPath();
			this.ctx.moveTo(-80, - 165);
			this.ctx.lineTo(-30, -65);
			this.ctx.lineWidth = 2;
			this.ctx.strokeStyle = "#ccc";
			this.ctx.stroke();
			this.ctx.rotate(Math.PI / 180 * 45);
		}
		this.ctx.restore();
	},

	// drawListText: function() {
	// 	this.ctx.save();
	// 	this.ctx.translate(200, 200);
	// 	this.ctx.beginPath();
	// 	this.ctx.textAlign = "center";
	// 	this.ctx.textBaseline = "middle";
	// 	this.ctx.fillStyle = "#333";

	// 	for (var i = 1; i <= 8; i++) {
	// 		this.ctx.beginPath();
	// 		var x = Math.sin(Math.PI / 180 * 45 * i) * 78;
	// 		var y = -Math.cos(Math.PI / 180 * 45 * i) * 78;
	// 		this.ctx.fillText(i, x, y);
	// 	}

	// 	this.ctx.restore();
	// },



	setInterval: function(){
		var this_ = this;
		setInterval(function() {
			this_.ctx.clearRect(0, 0, 500, 500);
			this_.drawCanvas();
		}, 1000)
	},

	

	drawCenterPoint: function() {
		this.ctx.beginPath();
		this.ctx.arc(250, 250, 3, 0, Math.PI * 2);
		this.ctx.fillStyle = "red";
		this.ctx.fill();
	},

	

	



	drawHourPointer: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.rotate(Math.PI / 180 * 30 * this.hours);
		this.ctx.moveTo(0, -40);
		this.ctx.lineTo(0, 10);
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawMinutesPointer: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.rotate(Math.PI / 180 * 6 * this.minutes);
		this.ctx.moveTo(0, -60);
		this.ctx.lineTo(0, 10);
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
	}

});