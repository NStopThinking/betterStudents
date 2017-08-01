function Page() {
    this.addElem = $(".add");
    this.bodyElem = $("body");
    this.subtractElem = $(".subtract");
    this.fontSizeElem = $(".fontSize");
    this.contentElem = $(".content");
    this.colorBoxElem = $(".colorBox");
    this.fontSize = localStorage.fontSize ? Number(localStorage.fontSize) : parseInt(this.contentElem.css("font-size"));
    this.bgColor = localStorage.bgColor ? localStorage.bgColor : $(".main").css("backgroundColor");
}
$.extend(Page.prototype, {
    init: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        this.saveLocalStorage();
        this.contentElem.css("font-size", this.fontSize);
        this.bodyElem.css("background", this.bgColor);
        this.addElem.on("click", $.proxy(this.addClick, this));
        this.subtractElem.on("click", $.proxy(this.subtractClick, this));
        this.changFontSize();
        this.colorClick();
    },
    saveLocalStorage: function() {
        localStorage.fontSize = this.fontSize;
        localStorage.bgColor = this.bgColor;
    },
    changFontSize: function() {
        this.fontSizeElem.html(this.fontSize);
        this.saveLocalStorage();
    },
    colorClick: function() {
        this.colorBoxElem.on("click", $.proxy(this.changBgColor, this));
    },
    changBgColor: function(e) {
        if ($(e.target).attr("class") == "color") {
            this.bgColor = $(e.target).css("backgroundColor");
            this.bodyElem.css("background", this.bgColor);
            this.saveLocalStorage();
        }
    },
    addClick: function(e) {
        this.fontSize = this.fontSize + 2;
        this.contentElem.css("font-size", this.fontSize);
        this.changFontSize();

    },
    subtractClick: function(e) {
        this.fontSize = this.fontSize - 2;
        this.contentElem.css("font-size", this.fontSize);
        this.changFontSize();

    }

});
var page = new Page();
page.init();