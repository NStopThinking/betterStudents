(function($){
	$(function(){
		function Page() {
			this.content = $("#content");
			this.presize = $("#presize");
			this.nextsize = $("#nextsize");
			this.size = $("#size");
			this.sizenum = localStorage.fontSize ? localStorage.fontSize : 16;
			this.foot = $("#foot");
			this.footspan = this.foot.find("span");
		};

		$.extend(Page.prototype, {
			init: function() {
				this.bindEvents();
			},

			bindEvents: function() {
				this.restore();
				this.presize.on("click", $.proxy(this.reduceSize, this));
				this.nextsize.on("click", $.proxy(this.increaseSize, this));
				this.foot.on("click", $.proxy(this.changeColor, this));
				this.addBgColor();
			},

			restore: function() {
				this.content.css("background-color",localStorage.bgColor);
				this.content.css("font-size",localStorage.fontSize+"px");
				this.size.text(localStorage.fontSize);
			},

			reduceSize: function() {
				try{
					localStorage.fontSize = this.size.text();
				}catch(e){}
				
				this.sizenum--;
				if(this.sizenum < 12){
					this.sizenum = 12;
				}
				
				this.size.text(this.sizenum);
				this.content.css("font-size",this.sizenum+"px");
			},

			increaseSize: function() {
				try{
					localStorage.fontSize = this.size.text();
				}catch(e){}
				
				this.sizenum++;
				if(this.sizenum > 24){
					this.sizenum = 24;
				}
				
				this.size.text(this.sizenum);
				this.content.css("font-size",this.sizenum+"px");
			},

			changeColor: function(e) {
				try{
					localStorage.bgColor = this.content.css("background-color");
				}catch(e){}
				
				this.content.css("background-color",$(e.target).attr("name"));
				
			},

			addBgColor: function() {
				for(var i=0; i<this.footspan.size(); i++){
					this.footspan.eq(i).css("background",this.footspan.eq(i).attr("name"));
				}
			}
		});

		var page = new Page();
		page.init();
	})
})(jQuery)