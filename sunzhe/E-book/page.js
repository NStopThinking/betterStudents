/**
 * Created by Administrator on 2017/7/25.
 */
(function ($) {
    $(function () {
        function Page() {
            this.fontEnlarge = $(".js-fontEnlarge");
            this.showSize = $(".js-showSize");
            this.fontReduce = $(".js-fontReduce");
            this.content = $(".js-content");
            this.bgSeleter = $(".js-bgSeleter");
            this.list = $(".js-list");
        }

        $.extend(Page.prototype, {
            init: function () {
                this.initSet();
                this.bindEvents();
            },
            initSet: function () {
                try {
                    if (window.localStorage.fontSize) {
                        this.showSize.html(window.localStorage.fontSize);
                        this.content.css("font-size", parseInt(window.localStorage.fontSize));
                    }
                    if (window.localStorage.bgColor) {
                        this.list.css("background", window.localStorage.bgColor);
                    }
                } catch (e) {
                }
            },
            bindEvents: function () {
                this.fontEnlarge.on("click", $.proxy(this.handleFontEnlarge, this));
                this.fontReduce.on("click", $.proxy(this.handleFontReduce, this));
                this.bgSeleter.on("click", $.proxy(this.handleChangeBackground, this));
            },
            handleFontEnlarge: function () {
                var fontSize = parseInt(this.showSize.html()) + 2;
                this.showSize.html(fontSize);
                this.content.css("font-size", fontSize);
                try {
                    window.localStorage.fontSize = fontSize;
                } catch (e) {
                }
            },
            handleFontReduce: function () {
                var fontSize = parseInt(this.showSize.html()) - 2;
                this.showSize.html(fontSize);
                this.content.css("font-size", fontSize);
                try {
                    window.localStorage.fontSize = fontSize;
                } catch (e) {
                }
            },
            handleChangeBackground: function (e) {
                if ($(e.target).attr("class").indexOf("js-bg-item") > -1) {
                    var bgColor = $(e.target).css("background-color");
                    this.list.css("background", bgColor);
                    try {
                        window.localStorage.bgColor = bgColor;
                    } catch (e) {
                    }
                }
            }
        });
        var page = new Page();
        page.init();
    });
})(jQuery);

