function Page() {
	this.readerElem = $("#reader");
	this.addBtnElem = $("#addBtn");
	this.textElem = $("#text");
	this.reduceBtnElem = $("#reduceBtn");
	this.fontSize = $("#fontSize");
	this.list = $("#list");
	this.reader = $("#reader");
	this.fontSizeNum = 12;
}

$.extend(Page.prototype, {
	init: function() {
		this.bindEvents();
		this.resetForData();
	},
	bindEvents: function() {
		this.addBtnElem.on("click", $.proxy(this.handleAddFontSize, this));
		this.reduceBtnElem.on("click", $.proxy(this.handleReduceFontSize, this));
		this.list.on("click", $.proxy(this.handleItemClick, this));
	},
	resetForData: function() {
		try{
			if(window.localStorage.fontSizeSs) {
				this.fontSize.html(window.localStorage.fontSizeSs);
			}
			if(window.localStorage.backgroundColor) {
				this.reader.css("backgroundColor", window.localStorage.backgroundColor);
			}
		}catch(e) {}
	},
	handleAddFontSize: function(e) {
		e.preventDefault();
		this.fontSizeNum += 2;
		this.fontSize.html(this.fontSizeNum);
		var fontSizeSs = this.fontSize.html();
		this.textElem.css("font-size", this.fontSizeNum + "px");
		window.localStorage.fontSizeSs = fontSizeSs;
		
	},
	handleReduceFontSize: function(e) {
		e.preventDefault();
		this.fontSizeNum -= 2;
		this.fontSize.html(this.fontSizeNum);
		var fontSizeSs = this.fontSize.html();
		this.textElem.css("font-size", this.fontSizeNum + "px");
		window.localStorage.fontSizeSs = fontSizeSs;
		
	},
	handleItemClick: function(e) {
		if($(e.target).css("backgroundColor")) {
			this.reader.css("backgroundColor", $(e.target).css("backgroundColor"));
		};
		var backgroundColor = $(e.target).css("backgroundColor");
		window.localStorage.backgroundColor = backgroundColor;
	}
});
var page = new Page();
page.init();