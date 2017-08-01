var IScroll = require("../common/iscroll-probe.js"); 
var cartListTP = require("./cart_goods.mustache");
function Page() {
	this.cartList = $(".js-cart-list ul");
	this.totalCount = $(".js-total-count");
	this.totalPri = $(".js-total-pri");
}
$.extend(Page.prototype, {
	init: function() { 
		this.getData(); 
	},
	bindEvents: function() {
		this.countIncrease = $(".js-increase");
		this.countReduce = $(".js-reduce"); 
		this.txt = $(".js-txt"); 
		this.delete = $(".js-delete");
		this.pri = $(".js-pri"); 
		this.countIncrease.bind("touchstart", $.proxy(this.handleCountIncrease, this))
		this.countReduce.bind("touchstart", $.proxy(this.handleCountReduce, this))
		this.delete.bind("touchstart", $.proxy(this.handleDelete, this))
	},
	reckonTotalCountAndPri: function() {
		this.listGoods = $(".js-list-goods"); 
		var totalCount = 0;
		var	totalPri = 0;
		var everyGoodsCount = 0;
		var everyGoodsPri = 0;
		for(var i = 0; i < this.listGoods.length; i++) {
			everyGoodsCount = eval(this.txt.eq(i).val());
			totalCount += everyGoodsCount; 
			everyGoodsPri = eval(this.pri.eq(i).find("span").html().replace("￥", "")) * everyGoodsCount;
			totalPri += everyGoodsPri
		}
		this.totalCount.find("span").html(totalCount)
		this.totalPri.find("span").html("￥"+totalPri)
	},
	handleDelete: function(e) {  
		$(e.target).parent().remove();
		this.reckonTotalCountAndPri()  
	},
	handleCountIncrease: function(e) { 
		var $this = $(e.target).siblings(".js-txt"); 
		var count = eval($this.val()) + 1; 
		$this.attr("value", count);
		this.reckonTotalCountAndPri()  
	},
	handleCountReduce: function(e) {
		var $this = $(e.target).siblings(".js-txt");
		var count;
		if($this.val() <= 0) {
			count = 0;
		}else {
			count = eval($this.val()) - 1; 
		} 
		$this.attr("value", count)
		this.reckonTotalCountAndPri()  
	},
	initIScroll: function() { 
		this.scroll = new IScroll('#wrapper', {
			scrollY: true ,
			scrollX: false
		}); 
	},
	getData: function() {
		$.ajax({
			url: "http://www.abc.com/mock/cartfs.json",
			success: $.proxy(this.getDataSucc, this)
		})
	},
	getDataSucc: function(res) { 
		this.res = res.data.cartList; 
		var html = cartListTP({
			cartList: this.res
		});
		this.cartList.html(html);
		this.bindEvents();
		this.reckonTotalCountAndPri() 
		this.initIScroll(); 
	}
})
var page = new Page();
page.init();