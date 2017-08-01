require("../common/lazyload.js")
var IScroll = require("../common/iscroll-probe.js"); 
var categoryTPl = require("./category_item.mustache");

function Page() {
	 this.category = $(".js-category");
	 this.detailList = $(".js-detail-list ul")
}
$.extend(Page.prototype, {
	init: function() { 
		this.promoteEfficiency()
		this.getData();
		this.bindEvents(); 
	}, 
	getData: function() {
		$.ajax({
			url: "/mock/indexfs.json",
			success: $.proxy(this.getDataSucc, this)
		})
	},
	getDataSucc: function(res) {
		// console.log(1)
		this.handleGetCategoryDataSucc(res);
		this.handleGetDetailListDataSucc(res);
	},
	handleGetCategoryDataSucc: function(res) {
		var html = ""; 
		html = categoryTPl({
			category: res.data.category 
		})
		// console.log(html)
		this.category.html(html);
		this.categoryItem = $(".category-item");
		this.categoryItem.eq(0).addClass("category-item-active")
		this.initIscroll();
	},
	handleGetDetailListDataSucc: function(res) {
		// console.log(res)
		var html = "";
		html = categoryTPl({
			detailList: res.data.detail_list
		})
		// console.log(html);
		// console.log(this.detailList)
		this.detailList.html(html)
		this.initIscroll();
		this.lazyload()
	},
	lazyload: function() {
		$(".lazy").lazyload();
	},
	initIscroll: function() {
		this.scroll = new IScroll("#wrapper1", {
			scrollX: false,
			scrollY: true
		}) 
		this.scroll1 = new IScroll("#wrapper", {
			scrollX: true,
			scrollY: false
		}) 
		this.scroll1.on("scroll", $.proxy(this.handleScrollEnd, this));

	},
	handleScrollEnd: function() {
		$(window).trigger("scroll");
	},
	bindEvents: function() { 
		this.category.bind("touchstart", $.proxy(this.touchStartCategoryItem, this)) 
	}, 
	touchStartCategoryItem: function(e) { 
		if(e.target.nodeName == "LI") {
			$(e.target).addClass("category-item-active").siblings().removeClass("category-item-active")
		} 
	},
	promoteEfficiency: function() {
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, this.isPassive() ? {
			capture: false,
			passive: false
		} : false);
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
})
var page = new Page();
page.init()
 

 