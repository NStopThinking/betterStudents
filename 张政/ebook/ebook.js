	function Page(){
		this.magnifyFontElemt = $('#magnifyFont');
		this.boxElemt = $('#box');
		this.reduceFontElemt=$("#reduceFont");
		this.font_SizeElemt=$("#font_Size");
		this.listElemt=$("#list");
	};
	$.extend(Page.prototype, {
		init:function() {
			this.bindlocalData();	
			this.bindEvents();
			
		},
		bindlocalData:function(){
			console.log(localStorage.background)
			try{
			this.font_SizeElemt.text(localStorage.fontSize);
			this.boxElemt.css("fontSize",parseInt(localStorage.fontSize));
			this.boxElemt.css("backgroundColor",localStorage.background)
			}catch(e){}
		},
		bindEvents:function() {
			this.magnifyFontElemt.on("click",$.proxy(this.magnifyFont,this));
			this.reduceFontElemt.on("click",$.proxy(this.reduceFont,this));
			this.listElemt.on("click",$.proxy(this.listfn,this));
		},
		magnifyFont:function() {
			var constfont=parseInt(this.boxElemt.css("fontSize"));
			constfont=constfont+2;
			if (constfont>=20) {
				constfont=20;
			}
			this.boxElemt.css("fontSize",constfont);
			this.font_SizeElemt.text(constfont);
			localStorage.fontSize=constfont
		},
		reduceFont:function() {
			var constfont=parseInt(this.boxElemt.css("fontSize"));
			constfont=constfont-2;
			if (constfont<12) {
				constfont=12;
			}
			this.boxElemt.css("fontSize",constfont);
			this.font_SizeElemt.text(constfont);
			localStorage.fontSize=constfont
		},
		listfn:function(e) {
			var bgColor=$(e.target).css("backgroundColor");
			this.boxElemt.css("backgroundColor",bgColor);
			localStorage.background=this.boxElemt.css("backgroundColor")
		}
	})
	var page = new Page();
	page.init();