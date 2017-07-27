function Reader() {
	this.content = $(".content");
	this.contentElem = this.content[0];
	this.sizeBtn = $(".js-sizeBtn");
	this.addSize = $(".js-addSize");
	this.reduceSize = $(".js-reduceSize");
	this.fontSize = $(".fontSize");
	this.fontColor = $(".js-color");
}

$.extend(Reader.prototype, {

	init: function() {
		this.bindEvents();
	},

	bindEvents: function() {
		//this.setSize();
		$(window).on("load", $.proxy(this.setFontSize, this));
		this.sizeBtn.on("click", $.proxy(this.handleSizeBtnClick, this));
		this.fontColor.on("click", $.proxy(this.changeBgColor, this));
	},

	handleSizeBtnClick: function(e) {

		if($(e.target).attr("class").indexOf("js-addSize") > -1) {

			var contentFontSize = parseInt(this.content.css("font-size"));
			var newSize = contentFontSize + 1 + "px";
			this.content.css("font-size", newSize);
			this.fontSize.val(newSize.replace("px",""));
			try{
				window.localStorage.fontSize = newSize;
			}catch(e) {}

		}else if($(e.target).attr("class").indexOf("js-reduceSize") > -1) {

			var contentFontSize = parseInt(this.content.css("font-size"));
			var newSize = contentFontSize - 1 + "px";
			this.content.css("font-size", newSize);
			this.fontSize.val(newSize.replace("px",""));
			try{
				window.localStorage.fontSize = newSize;
			}catch(e) {}
		}
	},

	changeBgColor: function(e) {
		var newColor = $(e.target).css("background");
		this.content.css("background", newColor);
	},

	setFontSize: function() {
		try {
			if(localStorage.fontSize) {
				this.content.css("font-size", localStorage.fontSize);
				this.fontSize.val(localStorage.fontSize.replace("px",""));
			}
		}catch(e) {}
	}
})

var reader = new Reader();
reader.init();