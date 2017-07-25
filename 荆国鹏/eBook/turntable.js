function Table(canvas){
    this.elem = canvas;
    this.ctx = canvas.getContext("2d");
}
Object.assign(Table.prototype,{
    init:function(){
        this.drawPannel();
        this.drawPannelarc();
        this.drawSector();
        this.drawSmallarc();
        this.drawText();
        this.drawtextGold();
    },
    drawPannel:function(){
        this.ctx.save();
        this.ctx.translate(250,250);
        this.ctx.lineWidth = 40;
        this.ctx.arc(0,0,200,0,Math.PI*2);
        this.ctx.strokeStyle = "gold";
        this.ctx.fillstyle = "pink";
        this.ctx.stroke();
        this.ctx.restore();
    },
    drawPannelarc:function(){
        this.ctx.save();
        this.ctx.translate(250,250)
        for(var i=0; i<24; i++){
            this.ctx.beginPath();
            this.ctx.arc(0,200,10,0,Math.PI*2);
            this.ctx.fillStyle = "white";
            this.ctx.fill();
			this.ctx.rotate(Math.PI/180*24);
        }
        this.ctx.restore();
    },
    drawSector:function(){
        this.ctx.save();
        this.ctx.translate(250,250);
        this.ctx.beginPath();
        this.ctx.moveTo(0,0);
        this.ctx.arc(0,0,180,0,Math.PI/3);
        this.ctx.fillStyle = "blue";
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        //
        this.ctx.beginPath();
        this.ctx.moveTo(0,0);
        this.ctx.arc(0,0,180,Math.PI/3,Math.PI*2/3);
        this.ctx.fillStyle = "pink";
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        //
        this.ctx.beginPath();
        this.ctx.moveTo(0,0);
        this.ctx.arc(0,0,180,Math.PI*2/3,Math.PI);
        this.ctx.fillStyle = "green";
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        //
        this.ctx.beginPath();
        this.ctx.moveTo(0,0);
        this.ctx.arc(0,0,180,Math.PI,Math.PI*4/3);
        this.ctx.fillStyle = "yellow";
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        //
        this.ctx.beginPath();
        this.ctx.moveTo(0,0);
        this.ctx.arc(0,0,180,Math.PI*4/3,Math.PI*5/3);
        this.ctx.fillStyle = "red";
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        //
        this.ctx.beginPath();
        this.ctx.moveTo(0,0);
        this.ctx.arc(0,0,180,Math.PI*5/3,Math.PI*2);
        this.ctx.fillStyle = "purple";
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.restore();
    },
    drawSmallarc:function(){
        this.ctx.save();
        this.ctx.translate(250,250);
        this.ctx.beginPath();
        
        this.ctx.arc(0,0,35,Math.PI*1.6,Math.PI*1.4);
        this.ctx.fillStyle = "black";
        this.ctx.lineTo(0,-70);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

    },
    drawText:function(){
        this.ctx.save();
        
        for(var i=1; i<7; i++){
            this.ctx.font = "30px Arial";
        
            this.ctx.fillText(i+"等奖", -30, -120);
            this.ctx.fillStyle = "white";
            this.ctx.fill();
			this.ctx.rotate(Math.PI/3);
        }
        this.ctx.restore();
    },
    drawtextGold:function(){
        this.ctx.font = "26px Arial";
        this.ctx.fillStyle = "red";
        this.ctx.fillText("抽奖", -24, 10);
    }


})