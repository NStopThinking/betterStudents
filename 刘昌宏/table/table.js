function Canvas() {
	this.ctx = canvas.getContext("2d");
}

Object.assign(Canvas.prototype, {
	init: function(arr) {
		this.drawCanvas(arr);
	},

	drawCanvas: function(arr) {
		this.drawScale();
		this.drawHorizen();
		this.drawHistogram(arr);
		this.drawAxis();
	},

	drawAxis: function() {
		this.ctx.beginPath();
		this.ctx.moveTo(50, 20);
		this.ctx.lineTo(50, 520);
		this.ctx.lineTo(550, 520);
		this.ctx.lineWidth = "3";
		this.ctx.strokeStyle = "#000";
		this.ctx.stroke();
	},

	drawScale: function() {
		for(var i = 0; i <= 5; i++){
			this.ctx.beginPath();
			this.ctx.fillText(1000 * i, 10, 520 - 100 * i);
		}
	},

	drawHorizen: function() {
		for(var i = 1; i <= 5; i++){
			this.ctx.beginPath();
			this.ctx.moveTo(50, 520 - 100 * i);
			this.ctx.lineTo(550, 520 - 100 * i);
			this.ctx.lineWidth = "2";
			if(i === 5){
				this.ctx.strokeStyle = "red";
			}else {
				this.ctx.strokeStyle = "#ccc";
			}
			this.ctx.stroke();
		}
	},

	drawHistogram: function(arr) {
		for(var i = 0; i < arr.length; i++){
			this.width = Math.floor(500 / arr.length / 2);
			this.height = arr[i] / 5000 * 500;
			console.log(this.width + "," + this.height);
			this.ctx.beginPath();
			this.ctx.save();
			this.ctx.translate(50 + this.width + this.width * i * 2, 520 - this.height);
			this.ctx.rect(0, 0, this.width, this.height);
			switch(Math.floor(arr[i] / 1000)){
				case 0 : this.ctx.fillStyle = "red"; break;
				case 1 : this.ctx.fillStyle = "pink"; break;
				case 2 : this.ctx.fillStyle = "orange"; break;
				case 3 : this.ctx.fillStyle = "yellow"; break;
				case 4 : this.ctx.fillStyle = "blue"; break;
				default : break;
			}
			this.ctx.fill();

			this.ctx.beginPath();
			this.ctx.fillStyle = "#000";
			this.ctx.fillText(arr[i], 5, -5);
			this.ctx.restore();
			
		}
		
	}
})