$(function() {

    function Page() {
        this.paragraphElem = $("#paragraph");
        this.fontSetElem = $("#fontSet");
        this.colorSetElem = $("#colorSet");
        this.fontSizeShow = $("#fontNow");
        this.step = 2;
    }

    $.extend(Page.prototype, {

        init: function() {
            this.bindEvents();
        },

        bindEvents: function() {
            this.readyLoad();
            this.fontSetElem.on("click", $.proxy(this.handleFontSizerSet, this))
            this.colorSetElem.on("click", $.proxy(this.handleColorSet, this))
        },

        readyLoad: function() {
            try {
                localStorage.color && this.paragraphElem.css("background", localStorage.color);
                localStorage.fontsize && this.paragraphElem.css("font-size", localStorage.fontsize + "px");
                localStorage.fontsize && this.fontSizeShow.text(localStorage.fontsize)
            } catch (error) {}
        },

        handleFontSizerSet: function(e) {
            var fontSize = this.paragraphElem.css("font-size");
            fontSize = parseInt(fontSize);
            if ($(e.target).attr("id") == "fontAdd") {
                fontSize += this.step;
                if (fontSize > 30) {
                    fontSize = 30;
                    alert("字体过大不易阅读！")
                }
                this.paragraphElem.css("font-size", fontSize + "px");
                this.fontSizeShow.text(fontSize)
            } else if ($(e.target).attr("id") == "fontInc") {
                fontSize -= this.step;
                this.paragraphElem.css("font-size", fontSize + "px");
                this.fontSizeShow.text(fontSize)
            }
            try {
                localStorage.fontsize = fontSize;
            } catch (error) {}
        },

        handleColorSet: function(e) {
            if ($(e.target).attr("class") == "colorLi") {
                var pColor = $(e.target).css("background-color");
                this.paragraphElem.css("background", pColor);
                try {
                    localStorage.color = pColor;
                } catch (error) {}
            }
        }

    })

    var page = new Page().init();
})