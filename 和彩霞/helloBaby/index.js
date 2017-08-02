function Page() {
	this.fiveImg3 = $(".five-img3");
	this.fiveImg4 = $(".five-img4");
}

$.extend(Page.prototype, {
	init: function() {
		this.bg();
	},
	bg: function() {
		setTimeout($.proxy(this.handleBg, this), 2000);
	},
	handleBg: function() {
		this.fiveImg3.css({
			'display':'block',
			"opacity":'0.3'

		});

	}
})
var page = new Page();
page.init();