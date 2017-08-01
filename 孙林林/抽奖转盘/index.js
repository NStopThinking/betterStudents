function Turntable() {
	this.elem = canvas;
	this.ctx = canvas.getContext("2d");
}

Object.assign(Turntable.prototype, {
	init: function() {
		this.drawCanvas();
		//this.setInterval();
	},

	drawCanvas: function() {
		this.drawArc();
		this.drawPoint();
		this.drawSmallArc();
		this.drawLarge();
		this.drawContent();
	},

	setInterval: function() {
		var this_ = this;
		this_.ctx.save();
		this_.ctx.translate(300, 30);
		setInterval(function() {
			
			
			this_.ctx.beginPath();
			this_.ctx.rotate(Math.PI / 180 * 15);
			
			this_.ctx.clearRect(0, 0, 80, 80);
			this_.drawLarge();
		},1000);
		this_.ctx.restore();
	},

	drawArc: function() {
		this.ctx.beginPath();
		this.ctx.arc(300, 300, 250, 0, Math.PI * 2);
		this.ctx.fillStyle = "#f8c000";
		this.ctx.fill();

		this.ctx.beginPath();
		this.ctx.arc(300, 300, 230, 0, Math.PI * 2);
		this.ctx.fillStyle = "#fff";
		this.ctx.fill();
	},

	drawPoint: function() {
		this.ctx.save();
		this.ctx.translate(300, 300);
		for(var i = 0; i < 26; i++){
			this.ctx.beginPath();
			this.ctx.rotate(Math.PI / 180 * 15);
			this.ctx.arc(0, 240, 6, 0, Math.PI * 2);
			this.ctx.fillStyle = "#fff";
			this.ctx.fill();
			
		}
		this.ctx.restore();
	},

	drawSmallArc: function() {
		var colors = [
	        "#fff4d6","#fff",
	        "#fff4d6","#fff",
	        "#fff4d6","#fff",
	        "#fff4d6","#fff",
	        "#fff4d6","#fff"
        ];
       
		this.ctx.save();
		this.ctx.translate(300, 300);
		for(var index = 0; index < 10; index++){
			
			this.ctx.beginPath();
			this.ctx.moveTo(0, 0);
			this.ctx.fillStyle = colors[index];
			this.ctx.rotate(Math.PI / 180 * 36);
			this.ctx.arc(0, 0, 230, 0, Math.PI / 180 * 36);
			this.ctx.strokeStyle = "#fff4d6";
			this.ctx.stroke();
			this.ctx.fill();
		}
		this.ctx.restore();	
		
	},

	drawContent: function() {
		var contents = [
        		"50M流量包","10Q币",
		        "谢谢参与","5Q币",
		        "10M流量包","20M流量包",
		        "10M流量包","20M流量包",
		        "20Q币 ","30M流量包"
        	];
        this.ctx.save();
		this.ctx.translate(300, 300);
		for(var index = 0; index < 10; index++){
			var content = contents[index];
			this.ctx.beginPath();
			this.ctx.font = "16px Microsoft YaHei";
			this.ctx.fillStyle = "red";
			this.ctx.textAlign = "center";
			this.ctx.textBaseline = "middle";
			this.ctx.rotate(Math.PI / 180 * 36);
			this.ctx.fillText(content, 0, -160);
		}
		this.ctx.restore();
		
	},

	drawLarge: function() {
		this.ctx.save();
		this.ctx.translate(300, 300);
		this.ctx.beginPath();
		this.ctx.arc(0, 0, 80, 0, Math.PI * 2);
		this.ctx.fillStyle = "#fbb41a";
		this.ctx.fill();
		this.ctx.restore();

		this.ctx.save();
		this.ctx.translate(300, 300);
		this.ctx.beginPath();
		this.ctx.arc(0, 0, 70, -Math.PI / 180 * 81, Math.PI / 180 * 261);
		this.ctx.fillStyle = "#ff0022";
		this.ctx.fill();
		this.ctx.restore();

		this.ctx.save();
		this.ctx.translate(300, 300);
		this.ctx.beginPath();
		this.ctx.moveTo(0, -130);
		this.ctx.lineTo(20, -55);
		this.ctx.arc(0, -150, 100, Math.PI / 180 * 81, Math.PI / 180 * 99);
		this.ctx.closePath();
		this.ctx.fillStyle = "#ff0022";
		this.ctx.fill();
		this.ctx.restore();

		this.ctx.save();
		this.ctx.translate(300, 300);
		this.ctx.beginPath();
		this.ctx.fill();
		this.ctx.strokeStyle = "#ff0022";
		this.ctx.stroke;
		this.ctx.font = "36px Arial";
		this.ctx.fillStyle = "#fbb41a";
		this.ctx.fillText("开始", -35, -10);
		this.ctx.fillText("抽奖", -35, 40);
		this.ctx.restore();


	}

});

