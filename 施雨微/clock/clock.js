function Clock(canvas){
	this.canvasElem = canvas;
	this.ctx = canvas.getContext("2d");
}//负责创建钟表
Object.assign(Clock.prototype, {
	init: function() {
		this.drawCanvas();
		this.setInterval();
	},

	drawCanvas: function() {
		this.getTimes();
		this.drawPannel();
		this.drawCenterPoint();
		this.drawMinutes();
		this.drawHours();
		this.drawHoursNum();
		this.drawHourPointer();
		this.drawMinutesPointer();
		this.drawSecondsPointer();
	},

	setInterval: function() {
		var this_ = this;
		setInterval(function(){
			this_.ctx.clearRect(0, 0, 500, 500);
			this_.drawCanvas();
		},1000)
	},

	getTimes: function(){
		this.ctx.beginPath();
		var d = new Date();
		this.hours = d.getHours();
		this.minutes = d.getMinutes();
		this.seconds = d.getSeconds();
	},

	drawPannel: function(){
		this.ctx.save();//先备份坐标情况代码
		this.ctx.beginPath();
		this.ctx.translate(250, 250);//平移画布中心点
		this.ctx.arc(0, 0, 100, 0, Math.PI * 2);
		this.ctx.fillStyle = "#eee";
		this.ctx.strokeStyle = "#999";
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.restore();//把坐标情况恢复到备份前
	},

	drawCenterPoint: function(){
		this.ctx.beginPath();
		this.ctx.arc(250, 250, 3, 0, Math.PI * 2);
		this.ctx.fillStyle = "red";
		this.ctx.fill();
	},

	drawMinutes: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);		
		for(var i = 0; i < 60; i ++){
			this.ctx.beginPath();
			this.ctx.moveTo(0, -97);
			this.ctx.lineTo(0, -93);
			this.ctx.lineWidth = 2;
			this.ctx.stroke();
			this.ctx.rotate(Math.PI / 180 * 6);
		}		
		this.ctx.restore();
	},

	drawHours: function(){
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);		
		for(var i = 0; i < 12; i ++){
			this.ctx.beginPath();
			this.ctx.moveTo(0, -97);
			this.ctx.lineTo(0, -87);
			this.ctx.lineWidth = 2;
			this.ctx.stroke();
			this.ctx.rotate(Math.PI / 180 * 30);
		}		
		this.ctx.restore();
	},

	drawHoursNum: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		this.ctx.fillStyle = "#333";
		for(var i = 1; i <= 12; i ++){
			this.ctx.beginPath();
			var x = Math.sin(Math.PI / 180 * 30 * i) * 80;
			var y = -Math.cos(Math.PI / 180 * 30 * i) * 80;
			this.ctx.fillText(i, x, y);
		}
		this.ctx.restore();
	},

	drawHourPointer: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		this.ctx.rotate(Math.PI / 180 * 30 * this.hours);
		this.ctx.moveTo(0, -50);
		this.ctx.lineTo(0, 10);
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawMinutesPointer: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		this.ctx.rotate(Math.PI / 180 * 6 * this.minutes);
		this.ctx.moveTo(0, -60);
		this.ctx.lineTo(0, 10);
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawSecondsPointer: function() {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate(250, 250);
		this.ctx.rotate(Math.PI / 180 * 6 * this.seconds);
		this.ctx.strokeStyle = "red";
		this.ctx.moveTo(0, -70);
		this.ctx.lineTo(0, 10);
		this.ctx.stroke();
		this.ctx.restore();
	}
})