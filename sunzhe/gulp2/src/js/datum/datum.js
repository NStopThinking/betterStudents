require("../common/swiper.min.js");
var datumImgsTpl = require("./datum_imgs.mustache");
var datumItemTpl = require("./datum_item.mustache");
function Page() {
    this.swiperWrapper = $(".swiper-wrapper");
    this.mainDatum = $(".main-datum");
    this.mainGodetails = $(".main-godetails");

}
$.extend(Page.prototype, {
    init: function () {
        this.bindEvents();
        this.getDatumData();
    },
    bindEvents: function () {
        this.mainGodetails.on('touchstart', $.proxy(this.detailOnclick, this));
    },
    detailOnclick: function (e) {
        //console.log(123);
        location.href = "./details.html";
    },
    getDatumData: function () {
        $.ajax({
            url: "./mock/datum.json",
            success: $.proxy(this.handleGetDataSuccess, this)
        });
    },
    handleGetDataSuccess: function (res) {
        console.log(res.data);
        var imgList = res.data.imgs;
        var itemData = res.data;
        var imgHtml = datumImgsTpl({imgList: imgList});
        var itemHtml = datumItemTpl({itemData: itemData});
        this.swiperWrapper.append(imgHtml);
        this.mainDatum.append(itemHtml);
        this.initSwiper();
    },
    initSwiper: function () {
        this.swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination-mine',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 30,
            loop: true,
            autoplay: 3000
        });
    }
});
var page = new Page();
page.init();