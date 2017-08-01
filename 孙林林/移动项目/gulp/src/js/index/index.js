require("../common/lazyload.js");

var IScroll = require("../common/iscroll.js");
var categoryTpl = require("./category_item.mustache");
var goodsTpl = require("./goods.mustache");

function Page() {
	this.categoryElem = $(".js-category");
	this.contentElem = $(".js-content");
}	

$.extend(Page.prototype, {
	init: function() {
		this.promoteEfficiency();
		this.getCategoryData();
	},

	promoteEfficiency: function() {
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, this.isPassive() ? {
			capture: false,
			passive: false
		} : false);
	},

	getCategoryData: function() {
		$.ajax({
			url: "./mock/index.json",
			success: $.proxy(this.handleGetDataSucc, this)
			
		});
	},

	handleGetDataSucc: function(response) {
		var data = response.data,
			categories = data.category,
			goods = data.goods;
		var html = categoryTpl({
			categories:categories
		});
		var contentHtml = goodsTpl({
			goods: goods
		});
		
		this.categoryElem.append(html);
		this.contentElem.html(contentHtml);
		this.initIscroll();
		this.lazyload();
	},

	initIscroll: function() {
		this.classifyScroll = new IScroll('.classify-wrapper', {
			scrollX: true,
			scrollY: false
		});
		this.contentScroll = new IScroll('.content-wrapper', {
			scrollX: false,
			scrollY: true,
			probeType: 2
		});
		this.contentScroll.on("scroll", $.proxy(this.handleScrollEnd, this));
	},

	handleScrollEnd: function() {
		//当内容滚动停止时执行方法：
		// //方法一：
		// $(window).trigger("scroll");
		//方法二：
		$(window).scroll();
		
	},

	lazyload: function() {
		$(".lazy").lazyload();
	},
	// ref https://github.com/WICG/EventListenerOptions/pull/30
	isPassive: function() {
	    var supportsPassiveOption = false;
	    try {
	        addEventListener("test", null, Object.defineProperty({}, 'passive', {
	            get: function () {
	                supportsPassiveOption = true;
	            }
	        }));
	    } catch(e) {}
	    return supportsPassiveOption;
	}

});

var page = new Page();
page.init();