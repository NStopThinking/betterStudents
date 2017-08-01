
		function Page() {
			this.audio = $("#audio");
			this.audioElem = this.audio[0];
			this.playElem = $("#handle");
			this.index = true;
		}
		$.extend(Page.prototype, {
			init: function() {
				this.bindEvents();
			},
			bindEvents: function() {
				this.playElem.on("click", $.proxy(this.handleBtn, this));
			}, 

			handleBtn: function() {
				if(this.index){
					this.audioElem.play();
				}else{
					this.audioElem.pause();
				}
				this.index = !this.index;
			}
		});
		var page = new Page();
		page.init();