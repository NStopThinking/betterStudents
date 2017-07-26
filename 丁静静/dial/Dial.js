function Dial(canvas) {
	this.elem = canvas;
	this.ctx = canvas.getContext("2d")
}
Object.assign(Dial.prototype, {
	init: function() {
		this.drawOuterSideRing();
		this.drawOuterSideRingPointe()
		this.drawSecondSideRing()
		this.drawInnerSideRing()
		this.drawStartText();
		// this.drawPointer()
		this.drawAward();
		
		// this.bindEvents() 

	},
	clearRect: function() {
		this.ctx.clearRect(0, 0, 500, 500);
		// console.log(1)
		this.init();
		this.drawPointer();
	},
	// bindEvents: function() {
	// 	var that = this;
	// 	this.elem.addEventListener('click', function(e){
	// 		var P = that.getEventPosition(e);
	// 		if(that.ctx.isPointInPath(P.x, P.y)){
	// 			console.log(1)
	// 		}else{
	// 			console.log(2)
	// 		}

	// 	}, false) 
	// },
	// getEventPosition: function(ev) {
	// 	var x, y;
	// 	if (ev.layerX || ev.layerX == 0) {
	// 	 	x = ev.layerX;
	// 	 	y = ev.layerY;
	// 	} else if (ev.offsetX || ev.offsetX == 0) { // Opera
	// 		x = ev.offsetX;
	// 		y = ev.offsetY;
	// 	}
	// 	return {x: x, y: y};
	// }, 
	drawOuterSideRing: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.arc(0, 0, 230, 0, Math.PI * 2);
		this.ctx.strokeStyle = "#ffcd0c";
		this.ctx.lineWidth = "20"; 
		this.ctx.stroke()
		this.ctx.restore();
	}, 
	drawOuterSideRingPointe: function() {
		this.ctx.save();
		this.ctx.beginPath()
		this.ctx.translate(250, 250); 
		for(var i = 0; i < 24; i++) { 
			this.ctx.beginPath(); 
			this.ctx.rotate(Math.PI / 180 * 15);
			this.ctx.arc(0, 230, 5, 0, Math.PI * 2);
			this.ctx.fillStyle = "#fff"; 
			this.ctx.fill(); 
		}  
		this.ctx.restore(); 
	},
	drawSecondSideRing: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath(); 
		this.ctx.arc(0, 0, 220, 0, Math.PI * 2);
		this.ctx.fillStyle = '#fff'; 
	 	this.ctx.fill();  
		this.ctx.beginPath(); 
		for(var i = 0; i < 5; i++){
			this.ctx.rotate(Math.PI / 180 * 72)
			this.ctx.moveTo(0, 0); 
			this.ctx.lineTo(220, 0); 
			this.ctx.arc(0, 0, 220, 0, Math.PI / 180 * 36); 
			this.ctx.fillStyle = "#ffffe2";  
		} 
	 	this.ctx.closePath()
	 	this.ctx.fill(); 
		this.ctx.restore(); 
	},
	drawInnerSideRing: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath(); 
	 	this.ctx.arc(0, 0, 70, 0, Math.PI * 2);
	 	this.ctx.lineWidth = 10;
	 	this.ctx.strokeStyle = "#ffcc0e";
	 	this.ctx.fillStyle = "#fa001c"; 
	 	this.ctx.fill();
	 	this.ctx.stroke()
		this.ctx.restore(); 
	},
	drawStartText: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.fillStyle = "#fff"; 
		this.ctx.textAlign = "center"
		this.ctx.font = "40px Arial"
		this.ctx.fillText("开始", -0, -15)
		this.ctx.beginPath();
		this.ctx.textAlign = "center"
		this.ctx.font = "40px Arial"
		this.ctx.fillText("抽奖", -0, 35)      
		this.ctx.restore(); 
	},
	drawPointer: function() {
		this.ctx.save();
		this.ctx.translate(100, 250);
		this.ctx.beginPath();
		this.ctx.rotate(-Math.PI / 180 * 10)
		this.ctx.moveTo(0, 0); 
		this.ctx.lineTo(100, 0); 
		this.ctx.arc(0, 0, 100, 0, Math.PI / 180 * 20); 
		this.ctx.fillStyle = "#fa001c";  
		this.ctx.closePath() 
		this.ctx.fill();  
		this.ctx.restore(); 
	},
	drawAward: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		for(var i = 0; i < 10; i++) {
			this.ctx.rotate(Math.PI / 180 * 36)
			this.ctx.textAlign = "center";
			this.ctx.font = "30px Arial";
			this.ctx.fillStyle = "red"
			this.ctx.fillText("奖励"+ i, 0, 170)
		} 
	 	this.ctx.fill()
		this.ctx.restore(); 
	}
})
 