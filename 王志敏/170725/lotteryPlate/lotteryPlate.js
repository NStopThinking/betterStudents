function Page() {
	this.canvas = document.getElementById('mycanvas');
	this.ctx = this.canvas.getContext('2d');
	this.canvas.width = 500;
	this.canvas.height = 500;
	this.img=new Image();
	this.img.src='./circle.png';
	var dis = 360/26;
	this.data = [
			{prize:'幸运',s:0,e:3*dis},{prize:'二等',e:dis*(4.5),s:3*dis},{prize:'三等',s:dis*(4.5),e:(6.5)*dis},
			{prize:'幸运',s:dis*(6.5),e:(9.5)*dis},{prize:'一等',e:dis*(10.5),s:(9.5)*dis},
			{prize:'三等',s:dis*(10.5),e:(12.5)*dis},{prize:'二等',s:dis*(12.5),e:(14)*dis},
			{prize:'幸运',e:dis*(18),s:(14)*dis},{prize:'三等',s:dis*(18),e:(20)*dis},
			{prize:'二等',s:dis*(20),e:(21.5)*dis},{prize:'幸运',s:dis*(21.5),e:(24)*dis},
			{prize:'三等',s:dis*(24),e:(26)*dis}
		];

};

Object.assign(Page.prototype, {
	init: function() {
		this.drawImg();
		this.bindEvents();
	},

	bindEvents: function() {

	},

	drawImg: function(e) {
		var flag=true;
		var this_ = this;
		this.img.onload=function(){
			this_.draw(0);
			this_.canvas.addEventListener("click", this_.handleCanvasClick.bind(this_, e, flag));
		}
	},

	handleCanvasClick: function(ev, flag) {
		var e = ev || window.event;
		if( e.offsetX>200 && e.offsetX<300 && e.offsetY>200 && e.offsetY<300 && flag){
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.draw(0);						
			flag = false;	
			
			var a=0;
			var step=1;
			var bb=20;
			var time=0;
			var ran=Math.floor(Math.random()*18)*20;
			var this_ = this;

			var timer=setInterval(function(){
				time+=20;
				bb*=step;
				a+=bb;
				if(a>360){a = 0}
				if(time/1000 > 2 && Math.floor(a) == ran){
					step = 0.95;
				}
				this_.ctx.clearRect(0, 0, this_.canvas.width, this_.canvas.height);

				this_.draw(a / 180 * Math.PI);
				
				if(bb<0.01){
					clearInterval(timer);
					this_.data.forEach(function(item){
						//console.log(item.s,item.e,item.prize)
						if((360-a)>item.s && (360-a)<item.e){
							alert('恭喜您获取：'+item.prize+'奖')
						}
					})
					flag = true;
				}
				
			},20)
		}
	},

	draw: function(angle) {
		this.circle(angle);
		this.pointer();
	},

	//根据角度画转盘
	circle: function(angle) {
		this.ctx.save();
		this.ctx.translate( this.canvas.width/2, this.canvas.width/2);
		this.ctx.rotate(angle);
		this.ctx.drawImage(this.img, -this.canvas.width/2, -this.canvas.width/2, this.canvas.width, this.canvas.width)				
		this.ctx.restore();
	},

	pointer: function() {
		var r=70;

		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate( this.canvas.width/2, this.canvas.height/2)
		this.ctx.fillStyle='#333';
		this.ctx.moveTo(-15, -r+8);
		this.ctx.lineTo(15, -r+8);
		this.ctx.lineTo(0, -this.canvas.width/2 + 100);
		this.ctx.fill();
		this.ctx.closePath();
		this.ctx.restore();
		
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate( this.canvas.width/2, this.canvas.height/2)
		this.ctx.fillStyle='#333';
		this.ctx.arc(0, 0, r, 0, 2*Math.PI);
		this.ctx.fill();
		this.ctx.closePath();
		this.ctx.restore();

		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate( this.canvas.width/2, this.canvas.height/2)
		this.ctx.fillStyle="deepskyblue"
		this.ctx.arc(0, 0, r-20, 0, 2*Math.PI);
		this.ctx.fill();
		this.ctx.closePath();
		this.ctx.restore();

		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.translate( this.canvas.width/2, this.canvas.height/2)
		this.ctx.font="normal 18px 微软雅黑";//顺序不能改
		this.ctx.fillStyle = "#333";
		this.ctx.textBaseline = "middle";
		this.ctx.textAlign = "center";
		this.ctx.fillText('开始抽奖',0,0);
		this.ctx.closePath();
		this.ctx.restore();

	}
	
});
	
var page = new Page();
page.init();
