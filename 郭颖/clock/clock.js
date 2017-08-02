function Clock(canvas) {	//只负责钟表的创建
	this.elem = canvas;
	this.context = canvas.getContext("2d");
}

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
		setInterval(function() {
			this_.context.clearRect(0,0,500,500);
			this_.drawCanvas();
		})
	},

	getTimes: function() {
		var date = new Date();
		this.hours = date.getHours() + date.getMinutes() / 60;
		if (this.hours > 12) {
			this.hours = this.hours - 12;
		}
		this.minutes = date.getMinutes();
		this.seconds = date.getSeconds();
	},
	
	drawPannel: function() {	//表盘
		this.context.save();	//备份坐标系
		this.context.translate(250, 250);
		this.context.beginPath();
		this.context.arc(0, 0, 100, 0, Math.PI * 2);
		this.context.strokeStyle = "#999";
		this.context.fillStyle = "#fdfcdd";
		this.context.fill();
		this.context.stroke();
		this.context.restore();	//恢复到备份之前的坐标位置
	},

	drawCenterPoint: function() {	//中心的小圆
		this.context.beginPath();
		this.context.arc(250, 250, 3, 0, Math.PI * 2);
		this.context.fillStyle = "red";
		this.context.fill();
	},

	drawMinutes: function() {		
		this.context.save();
		this.context.beginPath();
		this.context.translate(250, 250);
		for(var i = 0; i < 60; i++){
			this.context.beginPath();
			this.context.moveTo(0, -97);
			this.context.lineTo(0, -94);
			// this.context.lineWidth = 2;
			this.context.stroke();
			this.context.rotate(Math.PI / 180 * 6);
		}
		this.context.restore();
	},

	drawHours:function() {		
		this.context.save();
		this.context.beginPath();
		this.context.translate(250, 250);
		for(var i = 0; i < 12; i++){
			this.context.beginPath();
			this.context.moveTo(0, -97);
			this.context.lineTo(0, -87);
			// this.context.lineWidth = 2;
			this.context.stroke();
			this.context.rotate(Math.PI / 180 * 30);
		}
		this.context.restore();
	},

	drawHoursNum: function() {	
		this.context.save();
		this.context.beginPath();
		this.context.translate(250, 250);
		this.context.textAligh = "center";
		this.context.textBaseline = "middle";
		this.context.fillStyle = "#333";

		for(var i = 1; i <= 12; i++){
			this.context.beginPath();
			var x = Math.sin(Math.PI / 180 * 30 *i) * 78;
			var y = - Math.cos(Math.PI / 180 * 30 *i) * 78;
			this.context.fillText(i, x, y);
		}
		this.context.restore();
	},

	drawHourPointer: function() {
		this.context.save();
		this.context.beginPath();
		this.context.translate(250, 250);
		this.context.rotate(Math.PI / 180 * 30 * this.hours);
		this.context.moveTo(0, -50);
		this.context.lineTo(0, 0);
		this.context.stroke();
		this.context.restore();
	},

	drawMinutesPointer: function() {
		this.context.save();
		this.context.beginPath();
		this.context.translate(250, 250);
		this.context.rotate(Math.PI / 180 * 6 * this.minutes);
		this.context.moveTo(0, -60);
		this.context.lineTo(0, 10);
		this.context.stroke();
		this.context.restore();
	},

	drawSecondsPointer: function() {
		this.context.save();
		this.context.beginPath();
		this.context.translate(250, 250);
		this.context.strokeStyle = "red";
		this.context.rotate(Math.PI / 180 * 6 * this.seconds);
		this.context.moveTo(0, -70);
		this.context.lineTo(0, 10);
		this.context.stroke();
		this.context.restore();
	}

})
