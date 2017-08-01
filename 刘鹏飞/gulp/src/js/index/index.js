require("../common/lazyload.js");
require("../common/demoUtils.js");
var IScroll = require("../common/iscroll.js");
var categoryTpl = require("./category_item.mustache");
var categoryTpl1 = require("./list.mustache");
$(".lazy").lazyload();
function Page() {
	this.categoryElem = $(".js-category");
	this.categoryElem1 = $(".js-category1");
	this.loadNoticeElm=$("#loadNotice");
	this.flag=false;
	this.loading=false;
}

$.extend(Page.prototype, {

	init: function() {
		this.promoteEfficiency();
		this.getCategoryDataHeader();
		this.bindEvents();
	},
	bindEvents:function(){
		document.addEventListener('touchmove',function(e){e.preventDefault();},isPassive() ? {
			capture: false,
			passive: false
		} : false);
	},
	
	promoteEfficiency: function() {
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, this.isPassive() ? {
			capture: false,
			passive: false
		} : false);
	},
	
	getCategoryDataHeader: function(){
		$.ajax({
			url: "./mock/index.json",
			success: $.proxy(this.handleGetDataSucc, this)
		})
	},
	handleGetDataSucc: function(response) {
		var data = response.data,
			categories = data.category,
			list=data.list;
		var html1 = categoryTpl1({
			list: list
		});
		var html = categoryTpl({
			categories: categories
		});

		this.categoryElem.append(html);
		this.categoryElem1.append(html1)
		
		this.initIscrollX();
		this.initIscrollY();
	},
	initIscrollX: function() {
		this.scroll = new IScroll('#wrapper', { 
			scrollX: true, 
			scrollY: false
		});
	},
	
	initIscrollY: function() {
		$(".lazy").lazyload()
		this.scroll = new IScroll('#wrapper1', { 
			scrollX: false, 
			scrollY: true,
			probeType: 3,
			mouseWheel:true
		});
		this.scroll.on('scroll', $.proxy(this.handleScroll,this));
		this.scroll.on("scrollEnd",$.proxy(this.handleScrollEnd,this));
	},
	handleScroll:function(){
		//console.log(this.loadNoticeElm.css())
		$(window).scroll()
		//console.log(this.scroll.y);
		if(!this.loading){
			if(this.scroll.y>80){
				this.flag=true;
				this.loadNoticeElm.show()
			}else{
				this.loadNoticeElm.hide()
			}
		}
	},
	
	handleScrollEnd:function(){
		if(this.flag){
			this.loading=true;
			this.flag=false;
			setTimeout($.proxy(this.handleGetDate,this),1500)
		}
	},
	
	handleGetDate:function(){
		//alert(1)
		$.ajax({
			url: "./mock/index.json",
			success: $.proxy(this.handleGetDataSu, this)
		})
		
	},
	handleGetDataSu:function(response){
		//alert(1)
		
		var list=response.data.list;
		var html2 = categoryTpl1({
			list: list
		});
		this.loadNoticeElm.after(html2);
		this.loading=false;
		this.scroll.refresh();
		$(".lazy").lazyload()
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