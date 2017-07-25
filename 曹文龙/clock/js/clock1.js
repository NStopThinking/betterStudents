function Clock(canvas){
	this.elem=canvas;
	this.ctx=canvas.getContext("2d");
}
Object.assign(Clock.prototype,{
	init:function(){
		this.drawPannel();
		this.drawCenterPoint();
		this.drawMinutes();
	},
	
	drawPannel:function(){
		this.ctx.translate(250,250);
		this.ctx.arc(0,0,100,0,Math.PI*2)
		this.ctx.strokeStyle="#999";
		this.ctx.fillStyle="#eee";
		this.ctx.fill();	
		this.ctx.stroke();	
		
	},
	drawCenterPoint:function(){
		this.ctx.beginPath();
		this.ctx.arc(250,250,3,0,Math.PI*2);
		this.ctx.fillStyle="red";
		this.ctx.fill();
	},
	drawMinutes:function(){
		this.ctx.save();
		this.ctx.translate(250,250);
		this.ctx.moveTo(0,-96);
		this.ctx.lineTo(0,-93);
		this.ctx.lineWidth=2
		//this.ctx.stroke();	
		this.ctx.restore();
		
	}
})

