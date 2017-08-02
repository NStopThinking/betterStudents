function inherit(child, parent) {
	function tempCtor() {};
	tempCtor.prototype = parent.prototype;
	child.superClass_ = parent.prototype;
	child.prototype = new tempCtor();
	child.prototype.constructor = child;
	console.log(child);
	console.log(parent);
}
function Canvas(canvas){
	this.canvas = canvas; 
}
Canvas.prototype = {
	constructor:Canvas,
	init:function(){
		this.ctx = this.canvas.getContext('2d');
		var this_ = this;
		this.setInterval();
		this.drawCanvas();
	},
	drawCanvas:function(){
		this.getTime()
		this.drawArc();
		this.drawCenterArc();
		this.drawHours();
		this.drawMinutes();
		this.drawHoursNum();
		this.drawHoursPointer();
		this.drawMinutesPointer();
		this.drawSecondsPointer();
	},
	setInterval:function(){
		var this_ = this;
		setInterval(function(){
			this_.ctx.clearRect(0,0,500,500);
			this_.drawCanvas();

		},1000)
	},
	getTime:function(){
		var date = new Date();
		this.hours = date.getHours() + date.getMinutes()/60;
		this.minutes = date.getMinutes();
		this.seconds = date.getSeconds();
	},
	drawArc:function(){
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.translate(200,200);
		this.ctx.arc(0, 0, 100, 0, Math.PI*2);
		this.ctx.fillStyle = 'rgba(3,4,254,.7)';
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.closePath();
		this.ctx.restore();
	},
	drawCenterArc:function(){
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.translate(200,200);
		this.ctx.arc(0, 0, 3, 0, Math.PI*2);
		this.ctx.fillStyle = '#ff0';
		this.ctx.stroke();
		this.ctx.fill();
		this.ctx.closePath();
		this.ctx.restore();
	},
	drawHours:function(){
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.translate(200,200);
		for (var i = 1; i <= 12; i++) {
			this.ctx.beginPath();
			this.ctx.strokeStyle = '#fff';
			this.ctx.fill();
			this.ctx.moveTo(0,-98);
			this.ctx.lineTo(0,-90);
			this.ctx.stroke();
			this.ctx.rotate(Math.PI/180*30)
		}
		this.ctx.restore();
	},
	drawMinutes:function(){
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.translate(200,200);
		for (var i = 0; i < 60; i++) {
			this.ctx.strokeStyle = '#fff';
			this.ctx.fill();
			this.ctx.beginPath();
			this.ctx.moveTo(0,-96);
			this.ctx.lineTo(0,-94);
			this.ctx.stroke();
			this.ctx.rotate(Math.PI/180*6)
		}
		this.ctx.restore();
	},
	drawHoursNum:function(){
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.translate(200,200);
		this.ctx.textAlign = 'center';
		this.ctx.textBaseline = 'middle';
		this.ctx.fillStyle = '#fff';
		this.ctx.fill();
		for(var i = 1; i <= 12;i++){
			var x = Math.sin(Math.PI/180*30*i)*80;
			var y = -Math.cos(Math.PI/180*30*i)*80;
			this.ctx.fillText(i,x,y);
		}
		this.ctx.restore();
	},
	drawHoursPointer:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(200,200);
		this.ctx.rotate(Math.PI/180*30*this.hours);
		this.ctx.moveTo(0,-50);
		this.ctx.lineTo(0,10);
		this.ctx.stroke();
		this.ctx.restore();

	},
	drawMinutesPointer:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(200,200);
		this.ctx.rotate(Math.PI/180*6*this.minutes);
		this.ctx.moveTo(0,-60);
		this.ctx.lineTo(0,10);
		this.ctx.stroke();
		this.ctx.restore();
	},
	drawSecondsPointer:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(200,200);
		this.ctx.strokeStyle = 'orange';
		this.ctx.rotate(Math.PI/180*6*this.seconds);
		this.ctx.moveTo(0,-75);
		this.ctx.lineTo(0,10);
		this.ctx.stroke();
		this.ctx.restore();
	}
}
function Canvas1(canvas) {
	this.canvas = canvas;
}
inherit(Canvas1, Canvas);
Canvas1.prototype.drawSecondsPointer = function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(200,200);
		this.ctx.strokeStyle = 'red';
		this.ctx.rotate(Math.PI/180*6*this.seconds);
		this.ctx.moveTo(0,-75);
		this.ctx.lineTo(0,10);
		this.ctx.stroke();
		this.ctx.restore();
} 
Canvas1.prototype.drawArc = function(){
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.translate(200,200);
		this.ctx.arc(0, 0, 100, 0, Math.PI*2);
		this.ctx.fillStyle = 'rgba(133,224,54,.7)';
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.closePath();
		this.ctx.restore();
}