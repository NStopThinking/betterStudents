/**
 * Created by Administrator on 2017/7/29.
 */
var detailsTpl = require("./details.mustache");
function Page() {
    this.details = $(".details");
}
$.extend(Page.prototype, {
    init: function () {
        this.getDetailsData();
    },
    getDetailsData: function () {
        $.ajax({
            url: "./mock/details.json",
            success: $.proxy(this.getDataSuccess, this)
        });
    },
    getDataSuccess: function (res) {
        var html = detailsTpl({detailsData: res});
        this.details.append(html);
    }
});
var page = new Page();
page.init();