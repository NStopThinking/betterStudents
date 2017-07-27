function Page() {
    this.e_book = $('.e-book');
    this.book_content = $('.book-content');
    this.backgroundColor = this.book_content.css('background');
    this.book_setting = $('.book-setting');
    this.setting_btn = $('.setting-btn');
    this.font_add = $('.font-add');
    this.fontSize = $('.font-size');
    this.font_sub = $('.font-sub');
    this.color = $('.color');
    this.size = 18;
    
};

$.extend(Page.prototype, {
	init: function() {
        this.bindEvents();
	},

	bindEvents: function() {
        this.show();
        this.addFontSize();
        this.subFontSize();
        this.localSet();
        this.setColorClick();
	},

	show: function() {
        this.setting_btn.on('click',$.proxy(this.showAnimate,this));

        this.book_setting.on('mouseleave',$.proxy(this.showLeave,this));
	},

	showAnimate: function() {
		this.book_setting.stop().animate({
            	bottom:0,
            },500)
        this.setting_btn.css('display','none')
	},

	showLeave: function() {
        this.book_setting.stop().animate({
            	bottom:-150,
            },500);
        this.setting_btn.fadeIn(1000)
	},

	addFontSize: function() {
		this.font_add.on('click',$.proxy(this.addClick,this));
	},

	addClick: function() {
		if(localStorage.fontSize){
            this.size = Number(localStorage.fontSize)
            this.size += 2;

		}else{
            this.size += 2;
		}
		
        this.book_content.css('font-size',this.size);
        this.fontSize.text(this.size);
        window.localStorage.fontSize = this.size;
	},

	subFontSize: function() {
		this.font_sub.on('click', $.proxy(this.subClick,this))
	},

	subClick: function() {
		if(localStorage.fontSize){
            this.size = Number(localStorage.fontSize)
            this.size -= 2;

		}else{
            this.size += 2;
		}
		
        this.book_content.css('font-size',this.size);
        this.fontSize.text(this.size);
        window.localStorage.fontSize = this.size; 
	},

	setColorClick: function() {

		this.color.on('click',$.proxy(this.setClickSon,this))
	},

	setClickSon: function(e) {
        this.backgroundColor = $(e.target).css('background')
		this.book_content.css('background',this.backgroundColor);
		window.localStorage.backgroundColor = this.backgroundColor;   
	},

	localSet: function() {
        if(localStorage.fontSize){
            this.fontSize.text(Number(localStorage.fontSize))
            this.book_content.css('font-size',Number(localStorage.fontSize));
        }

        if(localStorage.backgroundColor) {
			this.backgroundColor = localStorage.backgroundColor;
			this.book_content.css('background',this.backgroundColor);
		}
 
	},

})

var page = new Page();
page.init();

