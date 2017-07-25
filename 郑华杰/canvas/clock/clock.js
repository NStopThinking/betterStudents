function Clock(canvas){
	this.elem=canvas;
	this.ctx=canvas.getContext("2d");
}
Object.assign(Clock.prototype,{
	init:function(){
		this.setInterval();
		this.drawCanvas();
	},
	setInterval:function(){
		var _this=this;
		setInterval(function(){
		  _this.ctx.clearRect(0,0,500,500);
		  _this.drawCanvas();
		},1000);
		
	},
	drawCanvas:function(){
		this.drawPannel();
		this.drawCenterPoint();
		this.drawMinutes();
		this.drawHours();
		this.drawHoursNum();
		this.gettime();
		this.drawHoursPoint();
		this.drawMinutesPoint();
		this.drawSecondsPoint();
	},
	drawPannel:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);
		this.ctx.arc(0,0,100,0,Math.PI*2);
		this.ctx.strokeStyle="#999";//描边的颜色
		this.ctx.fillStyle="#eee";
		this.ctx.fill();
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
		this.ctx.translate(250,250);//对坐标轴进行重新定义
		for(var i=0;i<60;i++){
			this.ctx.beginPath();
			this.ctx.moveTo(0,-97);
			this.ctx.lineTo(0,-93);
		    this.ctx.lineWidth=2;
		    this.ctx.stroke();
		    this.ctx.rotate(Math.PI/180*6);//旋转坐标轴
			
		}
		this.ctx.restore();
	},
	drawHours:function(){
		this.ctx.save();
		this.ctx.translate(250,250);//对坐标轴进行重新定义
		for(var i=0;i<12;i++){
			this.ctx.beginPath();
			this.ctx.moveTo(0,-97);
			this.ctx.lineTo(0,-87);
		    this.ctx.lineWidth=2;
		    this.ctx.stroke();
		    this.ctx.rotate(Math.PI/180*30);//旋转坐标轴
			
		}
		this.ctx.restore();
		
	},
	drawHoursNum:function(){
		this.ctx.save();
		this.ctx.translate(250,250);//对坐标轴进行重新定义
		this.ctx.beginPath();
		this.ctx.textAlign="center";
		this.ctx.textBaseline="middle";
		this.ctx.fillStyle="#333";
		for(var i=1;i<=12;i++){
			this.ctx.beginPath();
			var x=Math.sin(Math.PI/180*30*i)*78;
			var y=-Math.cos(Math.PI/180*30*i)*78;
			this.ctx.fillText(i,x,y);
		}
		this.ctx.restore();
		
	},
	gettime:function(){
		var date=new Date();
		this.hours=date.getHours()+date.getMinutes()/60;
	    if(this.hours>12){
	    	this.hours-=12;
	    }
	    this.minutes=date.getMinutes();
	    this.seconds=date.getSeconds();
	},
	drawHoursPoint:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);//对坐标轴进行重新定义
		this.ctx.rotate(Math.PI/180*30*this.hours);
		this.ctx.moveTo(0,-40);
		this.ctx.lineTo(0,10);
		this.ctx.stroke();
		this.ctx.restore();
	},
	drawMinutesPoint:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);//对坐标轴进行重新定义
		this.ctx.rotate(Math.PI/180*6*this.minutes);
		this.ctx.moveTo(0,-60);
		this.ctx.lineTo(0,10);
		this.ctx.stroke();
		this.ctx.restore();
	},
	drawSecondsPoint:function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250,250);//对坐标轴进行重新定义
		this.ctx.rotate(Math.PI/180*6*this.seconds);
		this.ctx.moveTo(0,-70);
		this.ctx.lineTo(0,10);
		this.ctx.stroke();
		this.ctx.restore();
	}
});
