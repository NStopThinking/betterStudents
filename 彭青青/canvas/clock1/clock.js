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
	this.elem=canvas;
	this.ctx=canvas.getContext("2d");
}
Object.assign(Canvas.prototype,{
	init:function(){
		this.drawCanvas();
		this.setInterval();
	},
	drawCanvas:function(){
		this.drawPannel();
		this.drawCenterPoint();
		this.drawMinutes();
		this.drawHours();
		this.drawHoursNum();
		this.getTimes();
		this.drawHourPointer();
		this.drawMinutesPointer();
		this.drawSecondsPointer();
	},
	getTimes:function(){
		var date=new Date();
		this.hours=date.getHours()+(date.getMinutes()/60);
		if(this.hours>12){
			this.hours=this.hours-12;
		}
		this.minutes=date.getMinutes();
		this.seconds=date.getSeconds();
	},
	drawPannel:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.arc(0,0,100,0,Math.PI*2);
		this.ctx.strokeStyle="LightGray";
		this.ctx.lineWidth=4;
		this.ctx.fillStyle="skyblue";
		this.ctx.fill();
		this.ctx.shadowColor = "LightGray"; 
		this.ctx.shadowBlur  = "20";
		this.ctx.stroke();
		this.ctx.restore();
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
//		this.ctx.rotate(Math.PI/180*6);
		for(var i=0;i<60;i++) {
			this.ctx.beginPath();
			this.ctx.moveTo(0,-97);
			this.ctx.lineTo(0,-94);
			this.ctx.strokeStyle="white";
//			this.ctx.lineWidth=2;
			this.ctx.stroke();
			this.ctx.rotate(Math.PI/180*6);
		}
		this.ctx.restore();
	},
	drawHours:function(){
		this.ctx.save();
		this.ctx.translate(250,250);
//		this.ctx.rotate(Math.PI/180*6);
		for(var i=0;i<60;i++) {
			this.ctx.beginPath();
			this.ctx.moveTo(0,-97);
			this.ctx.lineTo(0,-89);
			this.ctx.strokeStyle="white";
//			this.ctx.lineWidth=2;
			this.ctx.stroke();
			this.ctx.rotate(Math.PI/180*30);
		}
		this.ctx.restore();
	},
	drawHoursNum:function(){
		this.ctx.save();
		this.ctx.translate(250,250);
		this.ctx.textAlign="center";
		this.ctx.textBaseline="middle";
		this.ctx.fillStyle="#fff";
		for(var i=1;i<=12;i++) {
			this.ctx.beginPath();
			var x=Math.sin(Math.PI/180*30*i)*80;
			var y=-Math.cos(Math.PI/180*30*i)*80;
			this.ctx.fillText(i,x,y);
		}
		this.ctx.restore();
	},
	drawHourPointer:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);//定位中心点
		this.ctx.rotate(Math.PI/180*30*this.hours);//画布旋转的角度
		this.ctx.lineWidth="3";
		this.ctx.moveTo(0,-50);//时针的位置（实际是定的，竖直）
		this.ctx.lineTo(0,0);
		this.ctx.stroke();
		this.ctx.restore();
	},
	drawMinutesPointer:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.rotate(Math.PI/180*6*this.minutes);
		this.ctx.moveTo(0,-60);
		this.ctx.lineTo(0,12);
		this.ctx.stroke();
		this.ctx.restore();
	},
	drawSecondsPointer:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.strokeStyle="red";
		this.ctx.rotate(Math.PI/180*6*this.seconds);
		this.ctx.moveTo(0,-70);
		this.ctx.lineTo(0,10);
		this.ctx.stroke();
		this.ctx.restore();
	},
	setInterval:function(){
		var this_=this;
		setInterval(function(){
			this_.ctx.clearRect(0,0,500,500);
			this_.drawCanvas();
		},1000)
	}
});
function newCanvas(canvas){
	this.canvas=canvas;
	this.ctx=canvas.getContext("2d");
}
inherit(newCanvas,Canvas);
newCanvas.prototype.drawSecondsPointer=function(){
	this.ctx.save();
	this.ctx.beginPath();
	this.ctx.translate(250,250);
	this.ctx.strokeStyle="green";
	this.ctx.rotate(Math.PI/180*6*this.seconds+30);
	this.ctx.moveTo(0,-70);
	this.ctx.lineTo(0,10);
	this.ctx.stroke();
	this.ctx.restore();
}
