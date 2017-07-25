function Page() {
    this.canvas = document.getElementById("canvas");
    this.canvas.width = 200;
    this.canvas.height = 200;
    this.context = canvas.getContext('2d');
}
Object.assign(Page.prototype, {
    init: function() {
        this.darwBMW();
    },
    darwBMW: function() {
        this.context.beginPath();
        this.context.arc(100, 100, 95, 0, Math.PI * 2);
        this.context.strokeStyle = "#999"
        this.context.lineWidth = 5;
        this.context.fillStyle = "rgba(0,0,0,.8)"
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
        this.context.fillStyle = '#FFF';
        this.context.font = "25px Arial"
        this.context.textAlign = 'center';
        this.context.fillText("B", 40, 60);
        this.context.fillText("M", 100, 30);
        this.context.fillText("W", 160, 60);
        this.context.closePath();
        this.context.beginPath();
        this.context.arc(100, 100, 60, 0, Math.PI * 2);
        this.context.strokeStyle = '#ccc';
        this.context.fillStyle = '#fff';
        this.context.lineWidth = 5;
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
        this.context.beginPath();
        this.context.moveTo(100, 100);
        this.context.lineTo(158, 100);
        this.context.arc(100, 100, 58, 0, Math.PI / 2);
        this.context.lineTo(100, 100);
        this.context.lineTo(158, 100);
        this.context.arc(100, 100, 58, Math.PI, Math.PI * 3 / 2);
        this.context.lineTo(100, 100);
        this.context.fillStyle = "blue";
        this.context.fill();
    }
})
var page = new Page()
page.init();