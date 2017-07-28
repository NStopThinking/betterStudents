//面向过程
var socket = io();

$("form").submit(function() {
	socket.emit("message", $("#m").val());
	$("#m").val('');
	return false;
});

socket.on("brodcast", function(msg) {
	$("#messages").append($("<li>").text(msg));
});

//面向对象
function Page(){
	this.form = $("form");
	this.m = $("#m");
	this.msg = $("#messages");
	this.socket = socket;
}

$.extend(Page.prototype, {
	init: function() {
		this.form.on("submit", $.proxy(this.submit,this));
		this.socket.on("brodcast", $.proxy(this.brodcast,this,msg));
	},

	submit: function() {
		this.socket.emit("message", this.m.val());
		this.m.val("");
		return false;
	},

	brodcast: function() {
		this.msg.append($("<li>").text(msg));
	}
})

var page = new Page();
page.init();