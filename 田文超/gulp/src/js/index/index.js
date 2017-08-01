require("../common/lazyload.js");
var IScroll = require("../common/iscroll.js");
var categoryTpl = require("./category_item.mustache");
var goodsTpl = require("./goods.mustache");

function Page() {
	this.flag = false;
	this.loading = false;
	this.loadNoticeElem = $("#loadNotice");
	this.categoryElem = $(".js-category");
	this.contentElem = $(".js-content");
}
$.extend(Page.prototype, {

	init: function() {
		this.promoteEfficiency();
		this.getCategoryData();		
	},

	getCategoryData: function() {
		$.ajax({
			url: "/mock/index.json",
			success: $.proxy(this.handleGetDataSucc, this),
		});
	},

	handleGetDataSucc: function(response) {
		var data = response.data,
			classifyHtml = categoryTpl({categories:data.category});		
		this.categoryElem.append(classifyHtml);
		this.initClassifyIscroll();
		this.initContentIscroll();
	},

	initClassifyIscroll: function() {
		this.classifyScroll = new IScroll('#wrapper', { 
			scrollX: true, 
			scrollY: false
		});
	},

	initContentIscroll: function() {
		this.contentScroll = new IScroll('.content-wrapper', {
			scrollX: false, 
			scrollY: true,
			probeType: 3
		});
		this.contentScroll.on("scroll", $.proxy(this.handleContentScroll, this));
		this.contentScroll.on("scrollEnd", $.proxy(this.handleContentScrollEnd, this));
	},

	handleContentScroll: function() {
		if(!this.loading) {
			if(this.contentScroll.y > 50) {
			this.flag = true;
			this.loadNoticeElem.show();
			}else {
			this.loadNoticeElem.hide();
			}
		}
	},

	handleContentScrollEnd: function() {
		$(window).trigger("scroll");
		if(this.flag) {
			this.loading = true;
			this.flag = false;
			setTimeout($.proxy(this.getGoodsData, this),2000);
		}
	},

	getGoodsData: function() {
		$.ajax({
			url: "/mock/goods.json",
			success: $.proxy(this.handleGetGoodsDataSucc, this),
		});
	},

	handleGetGoodsDataSucc: function(response) {
		var data = response.data,
			contentHtml = goodsTpl({goods:data.goods});
		this.contentElem.append(contentHtml);
		this.lazyload();
		this.loading = false;
		this.contentScroll.refresh();
	},

	promoteEfficiency: function() {
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, this.isPassive() ? {
			capture: false,
			passive: false
		} : false);
	},
	
	lazyload: function() {
		$(".lazy").lazyload();
	},

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