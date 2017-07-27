function Page() {
	this.sizeAdd = $(".size-add");
	this.sizeFont = $(".size-font");
	this.sizeSub = $(".size-sub");
	this.content = $(".content");
	this.setColor = $(".set-color");
}

$.extend(Page.prototype, {

	init: function() {
		this.bindEvents();
		this.resetData();
	},

	bindEvents: function() {
		this.sizeAdd.on("click", $.proxy(this.handleFontSizeAdd, this));
		this.sizeSub.on("click", $.proxy(this.handleFontSizeSub, this));
		this.setColor.on("click", $.proxy(this.handleSetColor, this));
	},

	resetData: function() {
		try{
			if (localStorage.sizeNum) {
				this.content.css("font-size", localStorage.sizeNum + "px");
				this.sizeFont.text(localStorage.sizeNum);
			}
			if (localStorage.color) {
				this.content.css("background", localStorage.color);
			}
		}catch(e) {}
		
	},

	handleFontSizeAdd: function() {
		var sizeNum = this.sizeFont.text();
		sizeNum++;
		this.sizeFont.text(sizeNum);
		this.content.css("font-size", sizeNum + "px");
		localStorage.sizeNum = sizeNum;
	},

	handleFontSizeSub: function() {
		var sizeNum = this.sizeFont.text();
		sizeNum--;
		if (sizeNum == 11) {
			sizeNum = 12;
			alert("已是最小字体");
		}
		this.sizeFont.text(sizeNum);
		this.content.css("font-size", sizeNum + "px");
		try{
			localStorage.sizeNum = sizeNum;
		}catch(e) {}
		
	},

	handleSetColor: function(e) {
		if ($(e.target)) {
			var Color = $(e.target).css("background");
			this.content.css("background", Color);

		}
		try{
			localStorage.color = Color;
		}catch(e) {}
	}

})

var page = new Page();
page.init();