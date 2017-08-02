function Canvas() {
	this.canvas = document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");
}

Object.assign(Canvas.prototype, {
	init: function() {
		this.drawBigArc();
		this.drawSmallArc();
		this.drawSection1();
		this.drawSection2();
		this.drawSection3();
		this.drawSection4();
		this.drawTextM();
		this.drawTextB();
		this.drawTextW();
	},
	drawBigArc: function() {
		this.ctx.beginPath();		
		this.ctx.arc(150, 150, 80, 0, Math.PI *2);
		this.ctx.fillStyle = "#231816";
		this.ctx.fill ();
		this.ctx.strokeStyle = "#e7ecef";
		this.ctx.lineWidth = 4;
		this.ctx.stroke();
		this.ctx.closePath();
	},
	drawSmallArc: function() {
		this.ctx.beginPath();
		this.ctx.strokeStyle = "#6e899e";
		this.ctx.arc(150, 150, 52, 0, Math.PI *2);
		this.ctx.lineWidth = 1 ;
		this.ctx.stroke();
	},
	drawSection1: function() {
		this.ctx.beginPath();
		this.ctx.strokeStyle = "#77939f";
		this.ctx.moveTo(150, 150);
    	this.ctx.lineTo(200, 150);
		this.ctx.arc(150, 150, 50, 0, Math.PI / 2);
		this.ctx.fillStyle ="#5ddaf6";
		this.ctx.fill();
		this.ctx.lineWidth =1;
		this.ctx.closePath();
		this.ctx.stroke();
	},
	
	drawSection2: function() {
		this.ctx.beginPath();
		this.ctx.moveTo(150, 150);
    	this.ctx.lineTo(100, 150);
    	this.ctx.arc(150, 150, 50, Math.PI, Math.PI * 1.5);
    	this.ctx.fillStyle ="#5ddaf6";
		this.ctx.fill();
    	this.ctx.strokeStyle = "#77939f";
    	this.ctx.closePath();
    	this.ctx.stroke();
	},
	drawSection3: function() {
		this.ctx.beginPath();
		this.ctx.moveTo(150, 150);
    	this.ctx.lineTo(150, 100);
    	this.ctx.arc(150, 150, 50, Math.PI * 1.5, Math.PI * 2);
    	this.ctx.fillStyle ="#fff";
		this.ctx.fill();
    	this.ctx.strokeStyle = "#77939f";
    	this.ctx.stroke();
    	this.ctx.closePath();
	},
	drawSection4: function() {
		this.ctx.beginPath();
		this.ctx.moveTo(150, 150);
    	this.ctx.lineTo(150, 200);
    	this.ctx.arc(150, 150, 50, Math.PI / 2, Math.PI);
    	this.ctx.fillStyle ="#fff";
		this.ctx.fill();
    	this.ctx.strokeStyle = "#77939f";
    	this.ctx.stroke();
    	this.ctx.closePath();
	},
	drawTextM: function() {
		this.ctx.save();
		this.ctx.translate(150, 150);
		this.ctx.beginPath();
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		this.ctx.font = "22px Arial";
        this.ctx.fillStyle = "#fff";
        this.ctx.fillText("M", 0, -65);
        this.ctx.restore();
	},
	drawTextB: function() {
		this.ctx.save();
		this.ctx.translate(150, 150);
		this.ctx.beginPath();
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		this.ctx.font = "22px Arial";
        this.ctx.fillStyle = "#fff";
        this.ctx.rotate(-45);
        this.ctx.fillText("B",0, -65);
        this.ctx.restore();
	},
	drawTextW: function() {
		this.ctx.save();
		this.ctx.translate(150, 150);
		this.ctx.beginPath();
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		this.ctx.font = "22px Arial";
        this.ctx.fillStyle = "#fff";
        this.ctx.rotate(45);
        this.ctx.fillText("W",0, -65);
        this.ctx.restore();
	}
});

var canvas = new Canvas();
canvas.init();