require("../common/swiper.min.js");
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination-mine',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true,
    autoplay: 3000
});
