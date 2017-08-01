/**
 * Created by Administrator on 2017/7/29.
 */
var IScroll = require("../common/iscroll.js");
var lazyload = require("../common/lazyload.js");
var categoryTpl = require("./category_item.mustache");
var datalistTpl = require("./listdata_item.mustache");
function Page() {
    this.categoryList = $(".js-category");
    this.conttentList = $(".js-conttentList");
    this.loadNotice = $('#loadNotice');
    this.flag = false;
    this.loading = false;
}
$.extend(Page.prototype, {
    init: function () {
        this.bindEvent();
        this.promoteEfficiency();
        this.initIscroll();
        this.getCategoryData();
        this.getListData();
    },
    bindEvent: function () {
        this.categoryList.on('click', $.proxy(this.categoryClickListener, this));
    },
    categoryClickListener: function (e) {
        if ($(e.target).attr("class").indexOf("js-category-item") > -1 &&
            $(e.target).attr("class").indexOf("category-item-active") === -1) {
            $(e.currentTarget).children().removeClass("category-item-active");
            $(e.target).addClass("category-item-active");
            this.getListData();
        }
    },
    promoteEfficiency: function () {
        document.addEventListener('touchmove', function (e) {
            e.preventDefault();
        }, this.isPassive() ? {
            capture: false,
            passive: false
        } : false);
    },
    initIscroll: function () {
        this.myScroll = new IScroll('#wrapper', {
            scrollX: true,
            scrollY: false
        });
        this.contentScroll = new IScroll('#content', {
            scrollX: false,
            scrollY: true,
            probeType: 3
        });
        this.contentScroll.on('scroll', $.proxy(this.handleScroll, this));
        this.contentScroll.on('scrollEnd', $.proxy(this.handleScrollEnd, this));
    },
    handleScroll: function () {
        $(window).trigger("scroll");
        if (!this.loading) {
            if (this.contentScroll.y > 100) {
                this.flag = true;
                this.loadNotice.show();
            } else {
                this.loadNotice.hide();
            }
        }
    },
    handleScrollEnd: function () {
        if (this.flag) {
            this.loading = true;
            this.flag = false;
            //setTimeout($.proxy(this.handleGetData, this), 2000);
            this.handleDownLoadData();
            // $.proxy(, this);
        }
    }, handleDownLoadData: function () {
        $.ajax({
            url: "./mock/item.json",
            success: $.proxy(this.handleDownLoadDataSuccess, this)
        });

    }, handleDownLoadDataSuccess: function (res) {
        var datalist = res.data.category;
        var html = datalistTpl({datalist: datalist});
        this.conttentList.append(html);
        this.contentScroll.refresh();
        $(".lazy").lazyload();
        this.loading = false;
    },
    getCategoryData: function () {
        $.ajax({
            url: "./mock/index.json",
            success: $.proxy(this.handleGetDataSuccess, this)
        });
    },
    handleGetDataSuccess: function (res) {
        var categoryes = res.data.category;
        var html = categoryTpl({categoryes: categoryes});
        this.categoryList.append(html);
        this.myScroll.refresh();
        this.categoryList.children().first().addClass("category-item-active");
    },
    getListData: function () {
        $.ajax({
            url: "./mock/item.json",
            success: $.proxy(this.handleGetListDataSuccess, this)
        });
    },
    handleGetListDataSuccess: function (res) {
        this.contentScroll.scrollTo(0, 0, 0);
        var datalist = res.data.category;
        var html = datalistTpl({datalist: datalist});
        this.conttentList.html(html);
        this.contentScroll.refresh();
        $(".lazy").lazyload();
    }, isPassive: function () {
        var supportsPassiveOption = false;
        try {
            addEventListener("test", null, Object.defineProperty({}, 'passive', {
                get: function () {
                    supportsPassiveOption = true;
                }
            }));
        } catch (e) {
        }
        return supportsPassiveOption;
    }
});
var page = new Page();
page.init();