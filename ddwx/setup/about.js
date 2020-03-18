define(function(require) {
	var justep = require("$UI/system/lib/justep");
	//var verCheck = require("appVersionChecker");
	var Util = require("$UI/system/lib/base/util");
	var cordovaReady = false;
	var Model = function() {
		this.callParent();

	};
	Model.prototype.btnHomeClick = function(event) {
		justep.Shell.showPage("main");
	};

	Model.prototype.versionClick = function(event) {
		var me = this;
		/*if (cordovaReady) {
			localStorage['versionIgnore'] = '';
			verCheck.check();
			if(verCheck.version == verCheck.currentVersion){
				me.getElementByXid('appVersion').innerHTML = 'APP版本：' + verCheck.currentVersion;
				Util.hint("当前已是最新版本", {delay : 1000});
				return;
			}
			
		}*/
		Util.hint("当前已是最新版本", {delay : 1000});
	};

	Model.prototype.modelLoad = function(event) {
		var me = this;
		/*document.addEventListener("deviceready", function() {
			cordovaReady = true;
			// APP版本：1.0.0
			setTimeout(function(){
				me.getElementByXid('appVersion').innerHTML = 'APP版本：' + verCheck.currentVersion;
			},2000);
			
		});*/
		
	};

	return Model;
});