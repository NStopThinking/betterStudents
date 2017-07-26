function Pannel(canvas) {
	this.elem = canvas;
	this.ctx = canvas.getContext("2d");
	this.num = 6;
	this.btn = $("#btn");
}
Object.assign(Pannel.prototype, {
	init: function() {
		this.setInterval(0);
	},

	setInterval: function(num) {
		var this_ = this;
		var num1 = 40;
		var timer = setInterval(function() {
			console.log(1);
			if(num1 <= 0) {
				clearInterval(timer);
			}else {
				this_.ctx.clearRect(0, 0, 500, 500);
				this_.drawCanvas(num -= (num1--));
			}
		},200)
	},

	drawCanvas: function(num) {
		this.drawPannel();
		this.drawList(num);
		this.drawHand();
		this.drawCenter();
	},
	drawPannel: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.arc(200, 200, 200, 0, Math.PI*2);
		this.ctx.strokeStyle = "#999";
		this.ctx.fillStyle = "#ccc";
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.restore();
	},
	
	drawList: function(num) {

		for(var i = 0; i < 6; i++) {
			this.ctx.save();
			this.ctx.beginPath();
			this.ctx.translate(200, 200);
			this.ctx.rotate (Math.PI/180 * num);
			this.ctx.moveTo(0, 0);
			this.ctx.rotate((360 / 6 * i + 360 / 6 / 2) * Math.PI/180)
			this.ctx.arc(0, 0, 200, 0, 2 * Math.PI / 6, false);
			if(i % 2 == 0) {
				this.ctx.fillStyle = "yellow";
			}else{
				this.ctx.fillStyle = "pink";
			}
			this.ctx.fill();
			this.ctx.lineWidth = 2;
			this.ctx.strokeStyle = "#eee";
			this.ctx.stroke();
			this.fillStyle = "black";
			this.ctx.font = "16px sans-serif";
			this.ctx.restore();
		}
	},
	drawCenter: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.arc(200, 200, 70, 0, Math.PI*2);
		this.ctx.strokeStyle = "#999";
		this.ctx.fillStyle = "#ccc";
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.restore();
	},
	drawHand: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.moveTo(180, 200);
		this.ctx.lineTo(200, 100);
		this.ctx.lineTo(220, 200);
		this.ctx.lineTo(180, 200);
		this.ctx.lineWidth = 2;
		this.ctx.strokeStyle = "red";
		this.ctx.fillStyle = "red";
		this.ctx.fill();
		// this.ctx.closePath();
		this.ctx.stroke();
		this.ctx.restore();
	}

});
