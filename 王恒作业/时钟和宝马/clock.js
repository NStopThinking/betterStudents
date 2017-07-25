function Clock(canvas){
	tthis.elem=canvas;
	this.ctx=canvas.getContext("2d");
	
}
Object.assign(Clock.prototype,{
	init:function(){
		this.drawCanvas();
		this.setInterval();
		
	},
	drawCanvas:function(){
		this.getTimes();
		this.drawPannel();
		this.drawCenterPoint();
		this.drawHours();
		this.drawHoursNum();
		this.drawHourPointer();
		this.drawMinutesPointer();
		this.drawSecondsPointer();
		
		
	},
	setInterval:function(){
		var this_=this;
		setInterval(function(){
			this_.ctx.clearRect(0,0,500,500);
			this_.drawCanas();
		},1000)
		
	},
	getTimes:function(){
		var date=new Data();
		this.hours=data.getHours()+(data.getMinutes()/60);
		this.minutes=date.getMinutes();
		this.seconds=data.getSeconds();
	}
	
	
	drawPannel: function(){
		this.ctx.save();
		this.ctx.translats(250,250);
		this.ctx.beginPath();
		this.ctx.arc(0,0,100,0,Math.PI*2);
		this.ctx.strokeStyle="#999";
		this.ctx.fillStyle="#eee";
		this.ctx.fill();
		
		this.ctx.stroke();
		this.ctx.restore();
	},
	draeCenterPoint:function(){
		this.ctx.beginPath();
		this.ctx.arc(250,250,3,0,Math.PI*2);
		this.ctx.fillStyle="red";
		this.ctx.fill();
	},
	
	
	
	
	drawHoursNum:function(){
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.translate(250,250);
		this.ctx.textAlign="center";
		this.ctx.textBaseline="middle";
		this.ctx.fillstyle="#333"
		for(var i=1;i<=12;i++){
			var x=Math.sin(Math.PI/6*i)*70;
			var y=Math.cos(Math.PI/6*i)*70;
			this.ctx.fillText(i,x,y);
			
		}
		this.ctx.restore();
	}
	drawMinutesPointer: function(){
		this.ctx.save();
		this.ctx.();
	}
	drawMinutes:function(){
		this.ctx.save();
		this.ctx.translate(250,250);
		
		for (var i=0;i<60;i++){
			this.ctx.beginPath();
			this.ctx.moveTo(0,-97);
			this.ctx.lineTo(0,-93);
			this.ctx.lineWidth=2;
			this.ctx.stroke();
			this.ctx.rotate(Math.PI/180*6);
			
			
		}
		this.ctx.restore();
	},
	drawHours:function(){
		this.ctx.save();
		this.ctx.translate(250,250);
		
		for (var i=0;i<12;i++){
			this.ctx.beginPath();
			this.ctx.moveTo(0,-97);
			this.ctx.lineTo(0,-87);
			this.ctx.lineWidth=2;
			this.ctx.stroke();
			this.ctx.rotate(Math.PI/180*30);
			
			
		}
		this.ctx.restore();
	},
	drawSecondsPointer: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.strokeStyle = "red";
		this.ctx.rotate(Math.PI / 180 * 6 * this.seconds);
		this.ctx.moveTo(0, -70);
		this.ctx.lineTo(0, 10);
		this.ctx.stroke();
		this.ctx.restore();
	}

	
})
var page=new Page();
page.init();
