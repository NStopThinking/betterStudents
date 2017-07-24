function Clock(ele, style) {
    this.ele = $(ele)[0];
    this.size = style.size ? (style.size >= 100 ? style.size : 70) : 300;
    this.bgColor = style.bgColor || " #eee";
    this.borderColor = style.borderColor || "#ccc";
    this.centerPointColor = style.secondsPointColor || "#555";
    this.hoursPointColor = style.minutesPointColor || "#999";
    this.fontColor = style.fontColor || "#666";
    this.stepColor = style.stepColor || "#666";
    this.minutesPointColor = style.minutesPointColor || "#333";
    this.secondsPointColor = style.secondsPointColor || "#000";
    this.context = this.ele.getContext('2d');
    this.ele.width = this.size;
    this.ele.height = this.size;
    this.init();
}
Object.assign(Clock.prototype, {
    init: function() {
        this.drawCanvas();
        this.setInterval();
    },
    drawCanvas: function() {
        this.safeDraw($.proxy(this.drawPannel, this));
        this.safeDraw($.proxy(this.drawCenterPoint, this));
        this.safeDraw($.proxy(this.drawStep, this));
        this.safeDraw($.proxy(this.drawHoursNum, this));
        this.safeDraw($.proxy(this.getTimes, this));
        this.safeDraw($.proxy(this.drawHourPoint, this));
        this.safeDraw($.proxy(this.drawMinutesPoint, this));
        this.safeDraw($.proxy(this.drawSecondsPoint, this));
    },
    setInterval: function() {
        var that = this;
        setInterval(function() {
            that.context.clearRect(0, 0, 500, 500);
            that.drawCanvas();
        }, 1000)
    },
    drawPannel: function() {
        this.context.translate(this.size / 2, this.size / 2);
        this.context.fillStyle = this.bgColor;
        this.context.strokeStyle = this.borderColor;
        this.context.lineWidth = this.size / 50;
        this.context.arc(0, 0, this.size / 2 - this.size / 30, 0, Math.PI * 2);
        this.context.fill();
        this.context.stroke();
    },
    drawCenterPoint: function() {
        this.context.translate(this.size / 2, this.size / 2);
        this.context.fillStyle = this.centerPointColor;
        this.context.strokeStyle = this.borderColor;
        this.context.arc(0, 0, this.size / 70, 0, Math.PI * 2);
        this.context.fill();
    },
    drawStep: function() {
        var w = 18;
        this.context.translate(this.size / 2, this.size / 2);
        for (var i = 0; i < 60; i++) {
            this.context.beginPath();
            w = i % 5 == 0 ? this.size / 10 : this.size / 15;
            this.context.moveTo(0, -(this.size / 2 - this.size / 20));
            this.context.lineTo(0, -(this.size / 2 - w));
            this.lineWidth = 2;
            this.context.strokeStyle = this.stepColor;
            this.context.stroke();
            this.context.rotate(Math.PI / 180 * 6);
        }
    },
    drawHoursNum: function() {
        this.context.translate(this.size / 2, this.size / 2);
        for (var i = 1; i <= 12; i++) {
            this.context.beginPath();
            var x = Math.sin(Math.PI / 180 * 30 * i) * (this.size / 2 - this.size / 7);
            var y = -Math.cos(Math.PI / 180 * 30 * i) * (this.size / 2 - this.size / 7);
            this.context.font = this.size / 15 + 'px sans-serif';
            this.context.textAlign = 'center';
            this.context.fillStyle = this.fontColor
            this.context.textBaseline = 'middle';
            this.context.fillText(i, x, y);
        }
    },
    getTimes: function() {
        var date = new Date();
        this.minutes = date.getMinutes();
        this.hours = date.getHours() + (this.minutes / 60);
        this.seconds = date.getSeconds();
    },
    drawHourPoint: function() {
        this.context.translate(this.size / 2, this.size / 2);
        this.context.rotate(Math.PI / 180 * 30 * this.hours);
        this.context.lineWidth = this.size / 80;
        this.context.strokeStyle = this.hoursPointColor;
        this.context.lineCap = 'round';
        this.context.moveTo(0, -(this.size / 2 - (this.size / 3.8)));
        this.context.lineTo(0, 5);
        this.context.stroke();

    },
    drawMinutesPoint: function() {
        this.context.translate(this.size / 2, this.size / 2);
        this.context.rotate(Math.PI / 180 * 6 * this.minutes);
        this.context.lineWidth = this.size / 120;
        this.context.strokeStyle = this.minutesPointColor;
        this.context.lineCap = 'round';
        this.context.moveTo(0, -(this.size / 2 - (this.size / 4.7)));
        this.context.lineTo(0, 10);
        this.context.stroke();

    },
    drawSecondsPoint: function() {
        this.context.translate(this.size / 2, this.size / 2);
        this.context.rotate(Math.PI / 180 * 6 * this.seconds);
        this.context.lineWidth = this.size / 150;
        this.context.strokeStyle = this.secondsPointColor;
        this.context.lineCap = 'round';
        this.context.moveTo(0, -(this.size / 2 - (this.size / 6)));
        this.context.lineTo(0, 15);
        this.context.stroke();

    },
    safeDraw: function(cb) {
        this.context.save();
        this.context.beginPath();
        cb();
        this.context.closePath();
        this.context.restore();
    }
})