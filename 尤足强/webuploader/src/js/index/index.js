var IScroll = require('../common/iscroll-probe.js');
var categoryTpl = require('./category_item.mustache');
function Page() {
    this.categoryElem = $('.js-category');
    this.goodsList = $('.goods-list');

}

//看页面效果请输入：http://helloworld.duapp.com/dist/index.html

$.extend(Page.prototype, {
	init: function() {
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
    		url: './mock/index.json',
    		success:$.proxy(this.handleGetDataSucc, this),
    		
    	})
    },
    handleGetDataSucc: function(response) {
        response = typeof response == 'string' ? JSON.parse(response) : response;

        this.data = response.data;
        this.categories = this.data.category;

        var html = categoryTpl({categories: this.categories});

        this.categoryElem.append(html);
        this.initIscroll();
        this.scroll.refresh();
        this.categoryItem = $('.js-category-item');
        this.handleCategoryItem();
        this.handleFirstPage();
       

    },

	initIscroll: function() {
        this.scroll = myScroll = new IScroll('#wrapper', {
         	scrollX: true,
         	scrollY: false,
        });
	},

	handleCategoryItem: function() {
		this.categoryItem.first().addClass('category-item-active');

        this.categoryItem.on('touchstart',$.proxy(this.handleCategoryItemActive,this));
	},

	handleCategoryItemActive: function(e) {
        this.categoryItem.removeClass('category-item-active');
        $(e.target).addClass('category-item-active');

        var index = $(e.target).index();
        this.goodsList.html('<div class="loading">加载中</div>');
        var goods = this.categories[index].goods;
        var html = categoryTpl({goods: goods});
        this.goodsList.append(html);
	    
        this.initListIscroll();
        this.iscrollBindEvents();
        this.scrolls.y = 0; 
        this.lazyLoad();

	},
    
	handleFirstPage: function() {

	var goods = this.categories[0].goods;
    var html = categoryTpl({goods: goods});
    this.goodsList.append(html);

    this.initListIscroll();
	this.iscrollBindEvents();
    this.lazyLoad();
	},

    lazyLoad: function() {
    	$(".lazy").lazyload({         
		    effect : "fadeIn",
		    container: $("#container")
		});
        
    },

    initListIscroll: function() {
        this.scrolls  = new IScroll('#wrapper2', {
			probeType: 3, 
			mouseWheel: true,
        });
    },

    iscrollBindEvents: function() {
        this.scrolls.on('scroll', $.proxy(this.updatePosition,this));
	    this.scrolls.on('scrollEnd', $.proxy(this.updatePositionEnd,this));        
    },

    updatePosition:function() {
        // $(window).trigger('scroll')
        if(this.scrolls.y > 100) {
            $('.loading').show();
            this.flag = true;
        }else if(this.scrolls.y < 30){
            $('.loading').hide();
        }
    },

    updatePositionEnd: function() {
        if(this.flag) {
            this.goodsList.append('<div>新添加的内容</div>');
            this.flag = false;
        }

        this.scrolls.refresh();
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
