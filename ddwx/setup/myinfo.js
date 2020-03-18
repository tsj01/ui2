define(function(require){
	var justep = require("$UI/system/lib/justep");
	var kldBase = require("$UI/kld/base/kldbase");
	var Model = function(){
		this.callParent();
	};

	Model.prototype.btnHomeClick = function(event){
		justep.Shell.showPage("main");
	};
	
	Model.prototype.userDataCustomRefresh = function(event){
		var me = this;
		var data = me.comp("userData");
		data.clear();
		kldBase.sendRequest({
			url : "/mobile",
			action : "getUserInfo",
			params : {
				uid_ :kldBase.getCurUid()
			},
			success : function(res) {
				data.loadData(res.rows);
				data.first();
			}
		});
	};
	
	return Model;
});