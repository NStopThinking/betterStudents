function Turnplate(canvas){
	
	this.elem = canvas;
	this.ctx = canvas.getContext('2d');
}
Object.assign(Turnplate.prototype,{
	init:function(){	
		this.drawCanvas()
		//this.drawImag()
		this.bindEvents()
	},
	drawCanvas:function(){
		this.smallArc();
		this.drawTriangle();
	},
	bindEvents:function(){
		this.btn.on('click',this.handleClickEvents().bind(this))
	},
	handleClickEvents:function(){
		this_ = this;
	},
	setInterval:function(){
		this.ctx.save();
		this.ctx.translate(250,250);
		this.ctx.beginPath();
		this.ctx.stroke();
		this.ctx.restore();
	},
	drawTriangle:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.moveTo(Math.cos(1/3*Math.PI)*60,-Math.sin(1/3*Math.PI)*60);
		this.ctx.lineTo(0,-150);
		this.ctx.lineTo(-Math.cos(1/3*Math.PI)*60,-Math.sin(1/3*Math.PI)*60)
		this.ctx.fillStyle = 'yellow';
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.restore();
	},
	smallArc:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.arc(0,0,60,-Math.PI*1/3,Math.PI*4/3);
		this.ctx.fillStyle = 'yellow';
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.restore();
	}
})