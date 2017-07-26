function Page(){
	this.content = $('.content');
	this.add = $('.add');
	this.font= $('.font');
	this.reduce = $('.reduce');
	this.colorStyle = $('#color-style');
}
Object.assign(Page.prototype,{
	init:function(){
		this.resetData();
		this.bindEvents();
		},
	resetData:function(){
		try{
			if(localStorage.fontSize){
				console.log(localStorage.fontSize)
			this.font.val(parseInt(localStorage.fontSize));
			this.content.css('fontSize',localStorage.fontSize);
			}
			if(localStorage.background){
			this.content.css('background',localStorage.background);
			}	
			}catch(e){}
	},
	bindEvents:function(){
		this.add.on('click',$.proxy(this.addFontSize,this))
		this.reduce.on('click',$.proxy(this.reduceFontSize,this))
		this.font.on('blur',$.proxy(this.changeFontSize,this))
		this.colorStyle.on('click', $.proxy(this.handleColorStyle,this))
		
	},
	changeFontSize:function(){
		if(Number(this.font.val())<=0){
		Number(this.font.val()) = 0;
		}
		this.content.css('fontSize',this.font.val()+'px');
		fontSize = this.content.css('fontSize')
		try{
			localStorage.fontSize = fontSize;
		}catch(e){}	
	},
	handleColorStyle:function(e){
		this.content.css('background',$(e.target).css('background')) 
		background = this.content.css('background')
		try{
			localStorage.background = background;
		}catch(e){}	
	},
	addFontSize:function(){
		this.font.val(Number(this.font.val()) + 2);
		this.content.css('fontSize',this.font.val()+'px');
		fontSize = this.content.css('fontSize')
		try{
			localStorage.fontSize = fontSize;
		}catch(e){}	
	},
	reduceFontSize:function(){
		if(Number(this.font.val())<=0){
			Number(this.font.val()) = 0;
		}
		this.font.val(Number(this.font.val()) - 2);
		this.content.css('fontSize',this.font.val()+'px');
		fontSize = this.content.css('fontSize')
		try{
			localStorage.fontSize = fontSize;
		}catch(e){}	
	}
})
var page = new Page();
page.init();