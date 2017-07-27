function Page() {
	this.box = $("#box");
	this.spanAddElem = $("#span-add");
	this.spanReduceElem = $("#span-reduce");
	this.listElem=$("#list");
	this.num;
	this.fontSize=$('#fontSize');
}
$.extend(Page.prototype, {
	init: function() {
		this.resetForData();
		this.bindAddEvents();
		this.bindReduceEvents();
		this.bindBgEvents();
		this.handleSubmit();
	},
	resetForData: function() {
		try{
			if(parseInt(window.localStorage.articleFontSize)){
				this.num=parseInt(window.localStorage.articleFontSize);
				this.spanAddElem.next().text(this.num);
				this.fontSize.css('fontSize', this.num);
			}
			if(window.localStorage.boxBg){
				this.boxBg=window.localStorage.boxBg;
				this.box.css('background',this.boxBg);
			}
		}catch(e){}
	},
	bindAddEvents: function() {
		this.spanAddElem.on("click", $.proxy(this.handleSpanAdd, this))
	},
	handleSpanAdd:function() {
		var _thatFont=1+parseInt(this.spanAddElem.next().html());
		this.spanAddElem.next().text(_thatFont);
		this.spanAddElem.prev().css("fontSize",_thatFont);
		window.localStorage.articleFontSize = _thatFont;
	},
	bindReduceEvents:function() {
		this.spanReduceElem.on("click", $.proxy(this.handleSpanReduce, this));
	},
	handleSpanReduce:function() {
		var _thatFont=parseInt(this.spanAddElem.next().html())-1;
		this.spanAddElem.next().text(_thatFont);
		this.spanAddElem.prev().css("fontSize",_thatFont);
		window.localStorage.articleFontSize = _thatFont;
	},
	bindBgEvents:function() {
		this.listElem.on("click", $.proxy(this.handleListBg, this));
	},
	handleListBg:function(e) {
		var _target=e.target;
		var bg=$(_target).css("backgroundColor");
		this.box.css("backgroundColor",bg);
		window.localStorage.boxBg = bg;
	},
	handleSubmit: function(e) {
		var articleFontSize = this.spanAddElem.prev().css("fontSize");
			boxBg = this.box.css("backgroundColor");
		var Date=new Date();//时间戳
		if(articleFontSize &&boxBg) {
			try {
				window.localStorage.articleFontSize = articleFontSize;
				window.localStorage.boxBg = boxBg;
			} catch(e) {}
		} else {
			alert("error");
			return false;
		}
	}
});
var page = new Page();
page.init();