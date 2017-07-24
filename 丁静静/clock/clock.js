function Clock(canvas) { 
	this.elem = canvas;
	this.ctx = canvas.getContext("2d");
}
Object.assign(Clock.prototype, {
	init: function() {
		// console.log(1)
		this.drawCanvas();
		this.setInterval()
	},
	drawCanvas: function() {
		this.drawPanel();
		this.getTimes();
		this.drawHours();
		this.drawMinutes();
		this.drawHourseNum();
		this.drawCenterPointe();
		this.drawHoursPointer();
		this.drawMinutesPointer();
		this.drawSecondsPointer();
	},
	setInterval: function(){
		var that = this;
		setInterval(function() {
			that.ctx.clearRect(0, 0, 500, 500);
			that.drawCanvas(); 
		}, 1000)
	},
	drawPanel: function() {
		this.ctx.beginPath()
		this.ctx.arc(250, 250, 100, 0, Math.PI * 2)
		this.ctx.strokeStyle = "#999";
		this.ctx.fillStyle = "#eee";
		this.ctx.fill()
		this.ctx.stroke(); 
	},
	drawHours: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		for(var i = 0; i < 12; i++) {
			this.ctx.rotate(Math.PI / 180 * 30)	
			this.ctx.beginPath(); 
			this.ctx.moveTo(0, -96);
			this.ctx.lineTo(0, -86);
			this.ctx.lineWidth = 4;
			this.ctx.strokeStyle = "#000";
			this.ctx.stroke();
		}; 
		this.ctx.restore();
	},
	drawMinutes: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		for(var i = 0; i < 60; i++) {
			this.ctx.rotate(Math.PI / 180 * 6)	
			this.ctx.beginPath(); 
			this.ctx.moveTo(0, -96);
			this.ctx.lineTo(0, -92);
			this.ctx.lineWidth = 2;
			this.ctx.strokeStyle = "#000";
			this.ctx.stroke();
		}; 
		this.ctx.restore();
	},
	drawHourseNum: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.fillStyle = '#000';
		this.ctx.textAlign = "center"
		this.ctx.textBaseline = "middle"
		for(var i = 1; i <= 12; i++) { 
			this.ctx.beginPath()  
		 	var x = Math.sin(Math.PI / 180 * 30 * i) * 78;
		 	var y = -Math.cos(Math.PI / 180 * 30 * i) * 78; 
			this.ctx.fillText(i, x, y);

		};  
		this.ctx.restore();
	},
	drawCenterPointe: function() {
		this.ctx.beginPath();
		this.ctx.arc(250, 250, 5, 0, Math.PI * 2);
		this.ctx.fillStyle = "red";
		this.ctx.fill()
	},
	getTimes: function() { 
		var date = new Date();
		this.hours = date.getHours() + (date.getMinutes() / 60); 
		this.minutes = date.getMinutes();
		this.seconds = date.getSeconds();
	},
	drawHoursPointer: function() {
		this.ctx.save();
		this.ctx.beginPath(); 
		this.ctx.translate(250, 250);
		this.ctx.rotate(Math.PI / 180 * 30 * this.hours);   
		this.ctx.moveTo(0, -40);
		this.ctx.lineTo(0, 10);
		this.ctx.strokeStyle = "#000";
		this.ctx.stroke()
		this.ctx.restore();
	},
	drawMinutesPointer: function() {
		this.ctx.save();
		this.ctx.beginPath(); 
		this.ctx.translate(250, 250);
		this.ctx.rotate(Math.PI / 180 * 6 * this.minutes);  
		this.ctx.moveTo(0, -60);
		this.ctx.lineTo(0, 10);
		this.ctx.strokeStyle = "#000";
		this.ctx.stroke()
		this.ctx.restore();
	},
	drawSecondsPointer: function() {
		this.ctx.save();
		this.ctx.beginPath(); 
		this.ctx.translate(250, 250);
		this.ctx.rotate(Math.PI / 180 * 6 * this.seconds); 
		this.ctx.moveTo(0, -70);
		this.ctx.lineTo(0, 10);
		this.ctx.strokeStyle = "red";
		this.ctx.stroke()
		this.ctx.restore();
	} 
})