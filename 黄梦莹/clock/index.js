function Clock(canvas){
	this.canvasElem = canvas;
	this.context = this.canvasElem.getContext("2d");

}
Object.assign(Clock.prototype, {

	init: function(){
		this.drawCanvas();
		this.setInterval();
		

	},

	drawCanvas: function(){

		this.getTime();
		this.drawPannel();
		this.drawCenterPoint();
		this.drawMinutes();
		this.drawHour();
		this.drawHourNum();
		this.drawHourPoint();
		this.drawMinutesPoint();
		this.drawSecondsPoint();

	},

	setInterval: function(){
		var this_ = this;
		setInterval( function(){
			this_.context.clearRect(0, 0, 500, 500);
			this_.drawCanvas();
		},1000);
	},

	getTime: function(){
		var data = new Date();
		this.hours = data.getHours() + (data.getMinutes() / 60);
		this.minutes = data.getMinutes();
		this.seconds = data.getSeconds();
	},

	drawPannel: function(){
		this.context.save();
		this.context.beginPath();
		this.context.translate(250, 250);
		this.context.arc(0, 0, 100, 0, Math.PI*2);
		this.context.fillStyle = "#eee";
		this.context.strokeStyle = "#ccc";
		this.context.fill();
		this.context.stroke();
		this.context.restore();//恢复到之前备份的内容

	},

	drawCenterPoint: function(){
		this.context.beginPath();
		this.context.arc(250, 250, 3, 0, Math.PI*2);
		this.context.fillStyle = "red";
		this.context.fill();
		

	},

	drawMinutes: function(){
		this.context.save();
		
		this.context.translate(250, 250);

		for (var i = 0; i < 60 ; i++) {
			this.context.beginPath();
			this.context.moveTo(0,-97);
			this.context.lineTo(0,-93);
			this.context.lineWidth = 2;
			this.context.strokeStyle = "#000";
			this.context.rotate(Math.PI/180*6);
			this.context.stroke();

		}

		this.context.restore();
	},

	drawHour: function(){

		this.context.save();
		
		this.context.translate(250, 250);

		for (var i = 0; i < 12 ; i++) {
			this.context.beginPath();
			this.context.moveTo(0,-97);
			this.context.lineTo(0,-88);
			this.context.lineWidth = 2;
			this.context.strokeStyle = "#000";
			this.context.rotate(Math.PI/180*30);
			this.context.stroke();

		}

		this.context.restore();

	},

	drawHourNum: function(){
		this.context.save();
		this.context.beginPath();
		this.context.translate(250, 250);
		this.context.textAlign = "center";
		this.context.textBaseline = "middle";

		for (var i = 1; i <= 12; i++) {
			this.context.fillStyle = "#000";
			var x = Math.sin(Math.PI / 180 * 30 * i) * 80;
			var y = -Math.cos(Math.PI / 180 * 30 * i) * 80;
			this.context.fillText(i , x, y);
		
		}
		

		this.context.restore();


	},

	drawHourPoint: function(){
		this.context.save();
		this.context.beginPath();
		this.context.translate(250, 250);
		this.context.rotate(Math.PI/180 * 30 * this.hours);
		this.context.moveTo(0, -40);
		this.context.lineTo(0, 0);
		this.context.stroke();
		this.context.restore();
	},

	drawMinutesPoint: function(){
		this.context.save();
		this.context.beginPath();
		this.context.translate(250, 250);
		this.context.rotate(Math.PI/180 * 6 * this.minutes);
		this.context.moveTo(0, -60);
		this.context.lineTo(0, 0);
		this.context.stroke();
		this.context.restore();
	},

	drawSecondsPoint: function(){
		this.context.save();
		this.context.beginPath();
		this.context.translate(250, 250);
		this.context.rotate(Math.PI/180 * 6 * this.seconds);
		this.context.moveTo(0, -60);
		this.context.lineTo(0, 0);
		this.context.strokeStyle = "red";
		this.context.stroke();
		this.context.restore();
	},


});