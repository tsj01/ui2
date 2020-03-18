define(function(require) {
    var kldBase = require("$UI/kld/base/kldbase");
	var justep = require("$UI/system/lib/justep");
	var Util = require("$UI/system/lib/base/util");
	var MD5 = require("$UI/system/lib/base/md5");
	var md5 = new MD5();
	var Model = function() {
		this.callParent();
	};
	Model.prototype.modelLoad = function(event) {
		console.log('----------login modelLoad----------------');
	};

	Model.prototype.btnLoginClick = function(event) {
	    var uid = this.comp("txtUserId").val();
	    var me = this;
		kldBase.sendRequest({
			url : "/mobile",
			action : "login",
			params : {
				loginid : uid,
				pwd : md5.calcMD5(this.comp("txtUserPwd").val()),
				ultype :'branch'
			},
			success : function(res) {
				
			    if(window.kldCfg.ver>=200){
			    	localStorage[window.kldCfg.key] = res.kldkey;
			    	localStorage[window.kldCfg.key_uid] = uid;
			    	window.kldCfg.curUid = uid;
			    	
			    	//清除openid
			    	localStorage.removeItem[window.kldCfg.key_openid];
			    	window.kldCfg.openid = ''; 
			    }else{
			    	localStorage[window.kldCfg.key] = res.kldkey;
			    }
				//localStorage['mobile_funcs'] = res.rows.mobile_funcs;
				Util.hint('登录成功！', {
					delay : 500
				});
				console.log('-----------login ok-------------');
				if(me.params.tarPage)
					justep.Shell.showPage(me.params.tarPage); //,{fromLogin:true});
				else
					me.comp("windowReceiver1").windowEnsure();
				
						
				
			} 
		});
	};
	Model.prototype.modelActive = function(event){
		console.log('----------login modelActive----------------');
	};
	return Model;
});