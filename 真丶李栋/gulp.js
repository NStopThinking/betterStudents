var IScroll = require("../common/iscroll.js");
var categoryTpl = require("./category_item.mustache");
var goodsTpl = require("./goods.mustache");

require("../common/lazyload.js");


function Page() {
	this.categoryElem = $(".js-category");
	this.contentElem = $(".js-content")
}

$.extend(Page.prototype,{
	
	init:function () {
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
			url: "/mock/nidex2.json",
			success: $.proxy(this.handleGetDataSucc, this)
		})
	},
	
	handleGetDataSucc: function(response) {
		var data = response.data,
			classifyHtml = categoryTpl({categories:data.category});
			contentHtml= goodsTpl({goods: data.goods})

		this.categoryElem.html(classifyHtml);
		this.contentElem.html(contentHtml);
		this.bindEvents();
		this.initIscroll();
		this.lazyload();
	},
	
	bindEvents: function() {
		this.a = $(".category-item");
		this.a.eq(0).addClass("category-item-active").css("color","#FFFFFF")
		this.a.bind("click", $.proxy(this.click,this))
	},
	click: function (e){
		$(e.target).css("color","#fff").siblings().css("color","#000");
		$(e.target).addClass("category-item-active").siblings().removeClass("category-item-active");
	},
	
	
	
	
	initIscroll: function () {
		this.classifyScroll = new IScroll(".classify-wrapper",{
			scrollX:true,
			scrollY:false
		});
		
		this.contentScroll = new IScroll(".content-wrapper",{
			scrollX:false,
			scrollY:true,
			probeType:3
		});
		 
		this.contentScroll.on("scroll",$.proxy(this.handleScrollEnd, this));
	},
	
	handleScrollEnd: function() {
		$(window).trigger("scroll" );
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
	},
});

var page = new Page().init();
