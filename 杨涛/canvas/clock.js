function Clock(canvas) {//只负责钟表创建
	this.elem = canvas;
	this.ctx = canvas.getContext('2d');
}

Object.assign(Clock.prototype, {
	init: function() {
		this.setInterval();
		this.drawPannel();
		this.drawCenterPoint();
		this.getTimes();
		this.drawMinutes();
		this.drawHours();
		this.drawHoursNum();
		this.drawHourPointer();
		this.drawMinutesPointer();
		this.drawSecondsPointer();
	},
	
	getTimes: function() {
		var date = new Date();		
		this.hours = date.getHours() + (date.getMinutes() / 60);
		if (this.hours > 12) {
			this.hours = this.hours - 12;
		}
		this.minutes = date.getMinutes();
		this.seconds = date.getSeconds();		
	},
	
	setInterval: function() {
		var that = this;
		setInterval(function () {
			that.ctx.clearRect(0, 0, 500, 500);
			that.init();
		}, 1000)
	},
	
	drawPannel: function() {		
		this.ctx.save();//备份坐标系
		this.ctx.translate(250, 250);//移动画布中心点
		this.ctx.beginPath();
		this.ctx.arc(0, 0, 100, 0, Math.PI * 2);
		this.ctx.strokeStyle = '#faf983';
		this.ctx.fillStyle = '#84f681';
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.restore();//恢复备份之前的坐标系
	},
	
	drawCenterPoint: function() {
		this.ctx.beginPath();
		this.ctx.arc(250, 250, 3, 0, Math.PI * 2);
		this.ctx.fillStyle = 'blue';
		this.ctx.fill();
		
	},
	//分钟刻度
	drawMinutes: function() {	
		this.ctx.save();
		this.ctx.translate(250, 250);
		for (var i = 0; i < 60; i++) {
			this.ctx.beginPath();
			this.ctx.moveTo(0, -97);
			this.ctx.lineTo(0, -93);
			this.ctx.stroke();
			this.ctx.rotate(Math.PI / 180 * 6);
		}
		this.ctx.restore();
	},
	//小时刻度
	drawHours: function() {	
		this.ctx.save();
		this.ctx.translate(250, 250);
		for (var i = 0; i < 12; i++) {
			this.ctx.beginPath();
			this.ctx.moveTo(0, -97);
			this.ctx.lineTo(0, -87);
			this.ctx.lineWidth = 2;
			this.ctx.stroke();
			this.ctx.rotate(Math.PI / 180 * 30);
		}
		this.ctx.restore();
	},
	//时间数字
	drawHoursNum: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.textAlign = 'center';
		this.ctx.textBaseline = 'middle';
		this.ctx.fillStyle = '#333';
		for (var i=1; i<=12; i++) {
			this.ctx.beginPath();
			var x = Math.sin(Math.PI / 180 * 30 * i) * 78;
			var y = -Math.cos(Math.PI /180 * 30 * i) * 78;
			this.ctx.fillText(i, x, y);
		}
		this.ctx.restore();
	},
	
	drawHourPointer: function() {	
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.rotate(Math.PI / 180 * 30 * this.hours);
		this.ctx.moveTo(0, -40);
		this.ctx.lineTo(0, 10);
		this.ctx.stroke();
		this.ctx.restore();
	},
		
	drawMinutesPointer: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.rotate(Math.PI / 180 * 6 * this.minutes);
		this.ctx.moveTo(0, -60);
		this.ctx.lineTo(0, 10);
		this.ctx.stroke();
		this.ctx.restore();
	},
	
		
	drawSecondsPointer: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.strokeStyle = 'red';
		this.ctx.rotate(Math.PI / 180 * 6 * this.seconds);
		this.ctx.moveTo(0, -70);
		this.ctx.lineTo(0, 10);
		this.ctx.stroke();
		this.ctx.restore();
	},
	
});