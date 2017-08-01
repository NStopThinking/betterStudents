function Page() {
	this.wrap = $("#wrap");
	this.textarea = $(".textarea");
	this.setup = $(".setup");
	this.fontsize = $(".fontsize");
	this.show = $(".show");
	this.bgcolor = $(".bgcolor");
	this.fontchangebig = $(".fontchangebig");
	this.fontchangesmall = $(".fontchangesmall");
	this.num = 12;
	// console.log(this.wrap);
}
$.extend(Page.prototype, {
	init:function() {
		this.resetForData();
		this.fontChange();
		this.bgColor();
	},
	resetForData: function() {
		try{
			if(localStorage.num) {
				this.show.htm(localStorage.num);
			}
		}catch(e) {}		
	},
	fontChange: function() {
		this.fontsize.on("click", $.proxy(this.handleFontChange, this));
	},
	handleFontChange: function(e) {
		if(e.target.className == 'fontchangebig'){
			this.num++;
			if(this.num > 20){
				this.num = 20;
			}
		}
		
		if(e.target.className == 'fontchangesmall'){
			this.num--;
			if(this.num < 12){
				this.num = 12;
			}
		}
		this.show.html(this.num);
		this.textarea.css("fontSize", this.num);
		window.localstorage.num = this.num;	
	},

	bgColor: function() {
		this.bgcolor.on("click", $.proxy(this.handleBgColor, this));
	},
	handleBgColor: function(e) {
		var rgb = $(e.target).css('background');
		this.textarea.css('background', rgb);
	}



})
var page = new Page();
page.init();