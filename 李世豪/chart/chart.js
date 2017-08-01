function Page(canvas, data) {
	this.elem = canvas;
	this.data = data;
	this.color = ['red','bule','skyblue','yellow','pink','purple'];
	this.ctx = canvas.getContext("2d");
}

Page.prototype = {
	construstor: Page,

	init: function() {
		this.drawLine();
		this.drawText();
		this.drawRect();
	},

	drawLine: function() {
		this.ctx.beginPath();
		this.ctx.moveTo(50, 50);
		this.ctx.lineTo(600, 50);
		this.ctx.strokeStyle = 'red';
		this.ctx.lineWidth = 2;
		this.ctx.stroke();
		this.ctx.beginPath();
		this.ctx.moveTo(50, 50);
		this.ctx.lineTo(50, 500);
		this.ctx.strokeStyle = 'black';
		this.ctx.lineWidth = 2;
		this.ctx.stroke();
		this.ctx.beginPath();
		this.ctx.moveTo(50, 500);
		this.ctx.lineTo(600, 500);
		this.ctx.strokeStyle = 'gray';
		this.ctx.lineWidth = 4;
		this.ctx.stroke();
		this.ctx.beginPath();
		this.ctx.moveTo(50, 140);
		this.ctx.lineTo(600, 140);
		this.ctx.strokeStyle = 'gray';
		this.ctx.lineWidth = 1;
		this.ctx.stroke();
		this.ctx.beginPath();
		this.ctx.moveTo(50, 230);
		this.ctx.lineTo(600, 230);
		this.ctx.strokeStyle = 'gray';
		this.ctx.lineWidth = 1;
		this.ctx.stroke();
		this.ctx.beginPath();
		this.ctx.moveTo(50, 320);
		this.ctx.lineTo(600, 320);
		this.ctx.strokeStyle = 'gray';
		this.ctx.lineWidth = 1;
		this.ctx.stroke();
		this.ctx.beginPath();
		this.ctx.moveTo(50, 410);
		this.ctx.lineTo(600, 410);
		this.ctx.strokeStyle = 'gray';
		this.ctx.lineWidth = 1;
		this.ctx.stroke();
	},

	drawText: function() {
		//this.ctx.beginPath();
		this.ctx.font = "20px Arial";
		this.textAlign = "left";
		this.ctx.fillText(0, 0, 500);
		this.ctx.fill();
		//this.ctx.beginPath();
		this.ctx.font = "20px Arial";
		this.textAlign = "left";
		this.ctx.fillText(1302, 0, 410);
		this.ctx.fill();
		//this.ctx.beginPath();
		this.ctx.font = "20px Arial";
		this.textAlign = "left";
		this.ctx.fillText(2604, 0, 320);
		this.ctx.fill();
		//this.ctx.beginPath();
		this.ctx.font = "20px Arial";
		this.textAlign = "left";
		this.ctx.fillText(3906, 0, 230);
		this.ctx.fill();
		//this.ctx.beginPath();
		this.ctx.font = "20px Arial";
		this.textAlign = "left";
		this.ctx.fillText(5208, 0, 140);
		this.ctx.fill();
		//this.ctx.beginPath();
		this.ctx.font = "20px Arial";
		this.textAlign = "left";
		this.ctx.fillText(6510, 0, 50);
		this.ctx.fill();
	},

	drawRect: function() {
		var num = Math.floor(250 / this.data.length);
		for (var i = 0; i < this.data.length; i++) {
			var iColor = Math.round(5*Math.random());
			var iNum = Math.round(450 * (1-this.data[i]/6510)+50);
			this.ctx.beginPath();
			this.ctx.rect(50 + num * (2*i + 1), iNum, num, 500-iNum);
			this.ctx.fillStyle = this.color[iColor];
			this.ctx.fill();
			this.ctx.beginPath();
			this.ctx.fillStyle = "black";
			this.ctx.fillText(this.data[i], 50 + num * (2*i + 1), iNum);
		}
	}
}