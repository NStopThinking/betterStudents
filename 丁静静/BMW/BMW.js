function Bmw(canvas) {
	this.canvas = canvas;
	this.ctx = canvas.getContext("2d");
}
Object.assign(Bmw.prototype, {
	init: function() {
		// console.log(1)
		this.drawOuterRing();
		this.drawSecondRing();
		this.drawinnerRing();
	 	this.drawArcBorder();
	 	this.drawLineBorder();
	 	this.drawText();
	},
	drawOuterRing: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(400, 400);
		this.ctx.arc(0, 0, 280, 0, Math.PI * 2);
		this.ctx.lineWidth = "20";
		this.ctx.strokeStyle = "#c9d7e0";
		this.ctx.stroke()
		this.ctx.restore();
	},
	drawSecondRing: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(400, 400);
		this.ctx.lineWidth = "100";
		this.ctx.strokeStyle = "#231f20";
		this.ctx.arc(0, 0, 220, 0, Math.PI * 2);
		this.ctx.stroke(); 
		this.ctx.restore();	
	},
	drawinnerRing: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(400, 400);  
		for(var i = 0; i < 4; i++){
			this.ctx.moveTo(0, 0);
			if(i == 0) {
				this.ctx.lineTo(165, 0); 
				this.ctx.arc(0, 0, 165, Math.PI / 2 * i, Math.PI / 2 * (i + 1)); 
			}else if(i == 1) {
				this.ctx.lineTo(0, 165);  

			}else if(i == 2) {
				this.ctx.lineTo(-165, 0); 
				this.ctx.arc(0, 0, 165, Math.PI / 2 * i, Math.PI / 2 * (i + 1));  

			}else {
				this.ctx.lineTo(0, -165) 

			}
	 		this.ctx.strokeStyle = "#000"; 
			this.ctx.closePath(); 
			this.ctx.fillStyle = "#68b4d8" 
		}
		this.ctx.fill() ; 
		this.ctx.restore();	
	},
	drawArcBorder: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(400, 400);
		var gradient =  this.ctx.createRadialGradient(0, 0, 160, 0, 0, 170);
		gradient.addColorStop(0, "#191307")
		gradient.addColorStop(1, "#e9e5f3")
		this.ctx.arc(0, 0, 165, 0, Math.PI * 2);
		this.ctx.lineWidth = "10";
		this.ctx.strokeStyle = gradient;
		this.ctx.stroke()
		this.ctx.restore();	

	},
	drawLineBorder: function() {
		this.ctx.save();
		this.ctx.translate(400, 395);
		var gradient =  this.ctx.createLinearGradient(0, 0, 0, 10);
		gradient.addColorStop(0, "#fff");
		gradient.addColorStop(0.5, "#000"); 
		gradient.addColorStop(1, "#fff");
		this.ctx.beginPath();  
		this.ctx.rect(-160, 0, 320,10); 
		this.ctx.fillStyle = gradient;
		this.ctx.fill();
		this.ctx.restore();
		this.ctx.save();  
		this.ctx.translate(395, 400); 
		var gradient =  this.ctx.createLinearGradient(0, 0, 10, 0);
		gradient.addColorStop(0, "#fff");
		gradient.addColorStop(0.5, "#000"); 
		gradient.addColorStop(1, "#fff");
		this.ctx.beginPath(); 
		this.ctx.rect(0, -160, 10, 320); 
		this.ctx.fillStyle = gradient;
		this.ctx.fill();
		this.ctx.restore() 
	},
	drawText: function() {
		this.ctx.save();  
		this.ctx.translate(400, 400); 
		this.ctx.beginPath(); 
		this.ctx.textAlign = "center"
		this.ctx.font = "100px Arial";
		this.ctx.fillStyle = '#fff'
		this.ctx.fillText("M", 0, -185); 
		this.ctx.rotate(Math.PI * 0.25); 
		this.ctx.fillText("W", 0, -185);
		this.ctx.rotate(Math.PI * 1.5); 
		this.ctx.fillText("B", 0, -185);
		this.ctx.fill();
		this.ctx.restore() 
	} 
})