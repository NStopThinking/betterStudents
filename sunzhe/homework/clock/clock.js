/**
 * Created by Administrator on 2017/7/24.
 */
function Clock(canvas) {
    this.canvasElement = canvas;
    this.context = canvas.getContext("2d");
}
Object.assign(Clock.prototype, {
    init: function () {
        this.drawCanvas();
        this.setInterval();
    },
    setInterval: function () {
        var that = this;
        setInterval(function () {
            that.drawCanvas();
        }, 1000);
    },
    drawCanvas: function () {
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
    getTimes: function () {
        var date = new Date();
        this.hours = date.getHours() + (date.getMinutes() / 60);
        if (this.hours > 12) {
            this.hours = this.hours - 12;
        }
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
    },
    drawPannel: function () {
        this.context.save();//保存之前的
        this.context.translate(250, 250);
        this.context.beginPath();
        this.context.arc(0, 0, 100, 0, Math.PI * 2);
        this.context.strokeStyle = "#999";
        this.context.fillStyle = "#ccc";
        this.context.stroke();
        this.context.fill();
        this.context.restore();//恢复
    },
    drawCenterPoint: function () {
        this.context.beginPath();
        this.context.arc(250, 250, 3, 0, Math.PI * 2);
        this.context.fillStyle = "red";
        this.context.fill();
    },
    drawMinutes: function () {
        this.context.save();
        this.context.translate(250, 250);
        for (var i = 0; i < 60; i++) {
            this.context.beginPath();
            this.context.rotate(Math.PI / 180 * 6);
            this.context.moveTo(0, -97);
            this.context.lineTo(0, -93);
            this.context.lineWidth = 2;
            this.context.stroke();
        }
        this.context.restore();
    },
    drawHours: function () {
        this.context.save();
        this.context.translate(250, 250);
        for (var i = 0; i < 12; i++) {
            this.context.beginPath();
            this.context.rotate(Math.PI / 180 * 30);
            this.context.moveTo(0, -97);
            this.context.lineTo(0, -90);
            this.context.lineWidth = 4;
            this.context.stroke();
        }
        this.context.restore();
    },
    drawHoursNum: function () {
        this.context.save();
        this.context.translate(250, 250);
        this.context.textAlign = "center";
        this.context.textBaseline = "middle";
        this.context.fillStyle = "#000";
        for (var i = 1; i <= 12; i++) {
            this.context.beginPath();
            var x = Math.sin(Math.PI / 180 * 30 * i) * 78;
            var y = -Math.cos(Math.PI / 180 * 30 * i) * 78;
            this.context.fillText(i, x, y);
        }
        this.context.restore();
    },
    drawHourPointer: function () {
        this.context.save();
        this.context.translate(250, 250);
        this.context.beginPath();
        this.context.rotate(Math.PI / 180 * 30 * this.hours);
        this.context.moveTo(0, -40);
        this.context.lineTo(0, 10);
        this.context.lineWidth = 2;
        this.context.strokeStyle = "black";
        this.context.stroke();
        this.context.restore();
    },
    drawMinutesPointer: function () {
        this.context.save();
        this.context.translate(250, 250);
        this.context.beginPath();
        this.context.rotate(Math.PI / 180 * 6 * this.minutes);
        this.context.moveTo(0, -60);
        this.context.lineTo(0, 12);
        this.context.strokeStyle = "blue";
        this.context.stroke();
        this.context.restore();
    },
    drawSecondsPointer: function () {
        this.context.save();
        this.context.translate(250, 250);
        this.context.beginPath();
        this.context.rotate(Math.PI / 180 * 6 * this.seconds);
        this.context.moveTo(0, -70);
        this.context.lineTo(0, 15);
        this.context.strokeStyle = "red";
        this.context.stroke();
        this.context.restore();
    }


});
