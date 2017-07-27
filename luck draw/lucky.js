function Lucky(panelCanvas) {
	this.elem = panelCanvas;
	this.ctx = panelCanvas.getContext("2d");
}

Object.assign(Lucky.prototype,{
	
	init: function(){
		this.drawLuckDraw();
	},
	
	drawLuckDraw: function(){
		this.drawDial();
		this.drawDot();
		this.drawRewardsarea();
		this.drawRewardText();
	},
	
	drawDial: function(){
		this.ctx.save();
		this.ctx.translate(350, 350);
		this.ctx.beginPath();
		this.ctx.arc(0, 0, 300, 0, Math.PI * 2);
		this.ctx.fillStyle = "#58d251";
		this.ctx.fill();
		
		this.ctx.beginPath();
		this.ctx.arc(0, 0, 260, 0, Math.PI * 2);
		this.ctx.fillStyle = "#ff5050";
		this.ctx.fill();
		this.ctx.restore();
	},
	
	drawDot: function(){
		this.ctx.save();
		this.ctx.translate(350, 350);
		for(var i = 0; i < 16; i++){
			this.ctx.beginPath();
			this.ctx.arc(0, -280, 9, 0, Math.PI * 2 );
			this.ctx.fillStyle = "#3c3c3c";
			this.ctx.fill();
			this.ctx.rotate(Math.PI / 180 * 22.5);
		}
		this.ctx.restore();
	},
	
	drawRewardsarea: function(){
		this.ctx.save();
		this.ctx.translate(350, 350);
		for(var i = 0; i < 4; i++){
			this.ctx.beginPath();
			this.ctx.moveTo(0, 0);
			this.ctx.arc(0, 0, 260, -Math.PI / 8, Math.PI / 8 );
			this.ctx.fillStyle = "#ff9d9d";
			this.ctx.fill();
			this.ctx.rotate(Math.PI / 180 * 90);
		}
		this.ctx.restore();
	},
	
	
	
	drawRewardText: function(){
		var arr = ["一斤西瓜", "一斤桃子", "一斤芒果", "一斤葡萄","一斤草莓", "一斤山竹", "一斤苹果", "一斤香蕉"];
		this.ctx.save();
		this.ctx.translate(350, 350);
		for(var i = 0; i < 8; i++){
			this.ctx.beginPath();
			this.ctx.font = "30px Arial blod";
			this.ctx.fillStyle = "#333";
			this.ctx.textAlign = "center";
			this.ctx.tetxBase = "middle";
			this.ctx.fillText(arr[i], 0, 200);
			this.ctx.rotate(Math.PI / 180 * 45);
		}
		this.ctx.restore();	
	}
	
	
});

function Point(pointCanvas) {
	this.elem = pointCanvas;
	this.ctx = pointCanvas.getContext("2d");
}

Object.assign(Point.prototype, {
	
	init: function(){
		this.drawPoint();
		this.drawPointtext();
	},
	
	drawPoint: function(){
		this.ctx.save();
		this.ctx.translate(350, 350);
		
		this.ctx.beginPath();
		this.ctx.moveTo(0, 0);
		this.ctx.arc(0, 0, 70, 0, Math.PI * 2 );;
		this.ctx.fillStyle = "#ff5050";
		this.ctx.fill();
		
		this.ctx.beginPath();
		this.ctx.moveTo(0, 0);
//				this.ctx.arc(0, 0, 50, -Math.PI * 3 /8 , Math.PI * 11 / 8 );
		this.ctx.arc(0, 0, 60, 0, Math.PI * 2 );;
		this.ctx.fillStyle = "red";
		this.ctx.fill();
		
		this.ctx.beginPath();
		this.ctx.moveTo(-60*Math.sin(Math.PI/8), -60*Math.cos(Math.PI/8));
		this.ctx.lineTo(0, -100);
		this.ctx.lineTo(60*Math.cos(Math.PI*-3/8), 60*Math.sin(Math.PI*-3/8) );
		this.ctx.fillStyle="red";
		this.ctx.fill();
		
		this.ctx.beginPath();
		this.ctx.moveTo(0, 0);
		this.ctx.arc(0, 0, 50, 0, Math.PI * 2 );;
		this.ctx.fillStyle = "#fff";
		this.ctx.fill();
		
		
		this.ctx.restore();
		
	},
	
	drawPointtext: function(){
		this.ctx.save();
		this.ctx.translate(350, 350);
		this.ctx.beginPath();
		this.ctx.font = "30px Arial blod";
		this.ctx.fillStyle = "red";
		this.ctx.fillText("点击", -30, -10);
		this.ctx.fillText("抽奖", -30, 30);
		this.ctx.restore();
	}
	
})