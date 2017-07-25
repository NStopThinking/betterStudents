function Turntable() {
    this.canvas = $("#canvas")[0];
    this.context = this.canvas.getContext('2d');
}
Object.assign(Turntable.prototype, {
    init: function() {
        this.canvas.height = 400;
        this.canvas.width = 400;
        this.safeDraw($.proxy(this.drawPanel, this));
        this.safeDraw($.proxy(this.drawPoint, this));
        this.safeDraw($.proxy(this.drawTurnTable, this));
        this.safeDraw($.proxy(this.drawWheel, this));
    },
    drawPanel: function() {
        this.context.translate(200, 200);
        this.context.arc(0, 0, 180, 0, Math.PI * 2);
        this.context.fillStyle = '#ffbe04';
        this.context.fill();
    },
    drawPoint: function() {
        this.context.translate(200, 200);
        for (var i = 0; i < 24; i++) {
            this.context.beginPath();
            this.context.arc(170, 0, 5, 0, Math.PI * 2);
            this.context.fillStyle = '#fff';
            this.context.strokeStyle = '#fff';
            this.context.stroke();
            this.context.fill();
            this.context.rotate(Math.PI / 180 * 15);
        }
    },
    drawTurnTable: function() {
        this.context.translate(200, 200);
        for (var i = 0; i < 10; i++) {
            this.context.beginPath();
            this.context.moveTo(0, 160);
            var text = ["一等奖", "二等奖", "特等奖", "一等奖", "二等奖", "三等奖", "一等奖", "二等奖", "特等奖", "三等奖"]
            if (i % 2 == 0) {
                this.context.fillStyle = "blue"
            } else {
                this.context.fillStyle = "yellow"
            }
            this.context.moveTo(0, 0);
            this.context.arc(0, 0, 160, 0, Math.PI / 5);
            this.context.lineTo(0, 0);
            this.context.strokeStyle = '#fff';
            this.context.stroke();
            this.context.fill();

            this.context.font = '18px sans-serif';
            this.context.fillStyle = "#333"
            this.context.rotate(Math.PI / 180 * 36);
            this.context.fillText(text[i], 80, -30);
        }
    },
    drawWheel: function() {
        this.context.translate(200, 200);
        this.context.save();
        this.context.rotate(Math.PI / 180 * 20);
        this.context.moveTo(-40, -100)

        this.context.arc(0, 0, 40, -Math.PI / 2, Math.PI * 15 / 12);
        this.context.lineTo(-40, -100)
        this.context.fillStyle = "red";
        this.context.strokeStyle = '#fff';
        this.context.stroke();
        this.context.fill();

        this.context.restore();
        this.context.beginPath();
        this.context.fillStyle = "#fff";
        this.context.textAlign = 'center';
        this.context.font = '16px sans-serif';
        this.context.fillText("开始抽奖", 0, 0);


    },
    safeDraw: function(cb) {
        this.context.save();
        this.context.beginPath();
        cb();
        this.context.closePath();
        this.context.restore();
    }
})
var turntable = new Turntable();
turntable.init();