var IScroll = require('../common/iscroll.js');
var categoryTpl = require("./category_item.mustache");


function Page() {
	this.categoryElem = $ (".js-category");
	this.categoryid = $("#category_id");
}

$.extend (Page.prototype, {
	init: function() {
		this.getCategoryData();
		this.bindEvents();
		this.promoteEfficiency();
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
	},
	
	bindEvents: function() {
		this.categoryElem.on('click', $.proxy(this.bindaddClass, this));
	},
	//添加class样式
	bindaddClass: function(e) {
		$(e.target).addClass('category-item-active')
		$(e.target).siblings().removeClass('category-item-active');
    },	
		
	getCategoryData: function() {
		$.ajax({
			url: "/mock/index.json",
			success: $.proxy(this.handleGetDataSucc, this)
		
		})
	},
	
	handleGetDataSucc: function (response) {
		var data = response.data,
			categories = data.category;
		
		var html = categoryTpl({
			categories: categories
		});
		this.categoryElem.append(html);
		this.initIscroll();
	
	},
	
	initIscroll: function() {
		this.scroll = new IScroll('#wrapper', { 
			scrollX: true, 
			scrollY: false,
					
		});
		
		this.scroller = new IScroll('.content', { 
			scrollX: false, 
			scrollY: true,
			
		});
		
	},
});

var page = new Page();
page.init();
