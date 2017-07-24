	function Clock(canvas) {
		this.canvasElem=canvas;
		this.ctx=canvas.getContext("2d");
	}

	Object.assign(Clock.prototype, {
		init: function(){
			this.drawCanvas();
			this.setInterval();
		},
		setInterval:function() {
			var this_= this;
			setInterval(function(){
				this_.ctx.clearRect(0,0,500,500);
				this_.drawCanvas();
			},1000)
		},
		drawCanvas:function(){
			this.getTimes();
			this.drawPannel();
			this.drawCenterPoint();
			this.drawMinutes();
			this.drowHours();
			this.drowHoursNum();
			this.drawHourPointer();
			this.drawMinutesPointer();
			this.drawSecondPointer();
		},
		getTimes:function(){
			var date =new Date();
			this.hours=date.getHours()+(date.getMinutes()/60);
			if (this.hours>12) {
				this.hours=this.hours-12;
			}
			this.minutes=date.getMinutes();
			this.seconds=date.getSeconds();
		},
		drawPannel:function() {
			this.ctx.save();
			this.ctx.translate(250,250);
			this.ctx.beginPath();
			this.ctx.arc(0,0,100,0,Math.PI*2);
			this.ctx.strokeStyle="#da2333"
			this.ctx.fillStyle="#eee";
			this.ctx.fill();
			this.ctx.stroke();
			this.ctx.restore();
		},
		drawCenterPoint:function() {
			this.ctx.beginPath();
			this.ctx.arc(250,250,3,0,Math.PI*2)
			this.ctx.fillStyle="red";
			this.ctx.fill();
		},
		drawMinutes:function(){
			this.ctx.beginPath();
			this.ctx.save();
			this.ctx.translate(250,250);
			for (var i = 0; i < 60; i++) {
			this.ctx.beginPath();
			this.ctx.moveTo(0,-97);
			this.ctx.lineTo(0,-93);
			this.ctx.lineWidth=2;
			this.ctx.stroke();
			this.ctx.rotate(Math.PI/180*6);
			}
			
			this.ctx.restore();
		},
		drowHours:function() {
			this.ctx.beginPath();
			this.ctx.save();
			this.ctx.translate(250,250);
			for (var i = 0; i < 12; i++) {
			this.ctx.beginPath();
			this.ctx.moveTo(0,-97);
			this.ctx.lineTo(0,-87);
			this.ctx.lineWidth=2;
			this.ctx.stroke();
			this.ctx.rotate(Math.PI/180*30);
			}
			
			this.ctx.restore();
		},
		drowHoursNum:function() {
			this.ctx.save();
			this.ctx.translate(250,250);
			this.ctx.textAlign="center";
			this.ctx.textBaseline="middle";
			this.ctx.fillStyle="#222";
			for (var i = 1; i < 13; i++) {
			this.ctx.beginPath();
			var x = Math.sin(Math.PI/180*30*i)*78;
			var y = -Math.cos(Math.PI/180*30*i)*78;
			this.ctx.fillText(i,x,y);
			}
			this.ctx.restore();
		},
		drawHourPointer:function() {
			this.ctx.save();
			this.ctx.translate(250,250);
			this.ctx.beginPath();
			this.ctx.rotate(Math.PI/180*30*this.hours);
			this.ctx.moveTo(0,-50);
			this.ctx.lineTo(0,6);
			this.ctx.stroke();
			this.ctx.restore();
		},
		drawMinutesPointer:function() {
			this.ctx.save();
			this.ctx.translate(250,250);
			this.ctx.beginPath();
			this.ctx.rotate(Math.PI/180*6*this.minutes);
			this.ctx.moveTo(0,-70);
			this.ctx.lineTo(0,10);
			this.ctx.stroke();
			this.ctx.restore();
		},
		drawSecondPointer:function() {
			this.ctx.beginPath();
			this.ctx.save();
			this.ctx.translate(250,250);
			this.ctx.strokeStyle="red";
			this.ctx.rotate(Math.PI/180*6*this.seconds);
			this.ctx.moveTo(0,-80);
			this.ctx.lineTo(0,10);
			this.ctx.stroke();
			this.ctx.restore();
		},
	})