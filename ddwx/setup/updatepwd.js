define(function(require){
	var justep = require("$UI/system/lib/justep");
	var Util = require("$UI/system/lib/base/util");
	var kldBase = require("$UI/kld/base/kldbase");
	var MD5 = require("$UI/system/lib/base/md5");
	var md5 = new MD5();
	var Model = function(){
		this.callParent();
	};

	Model.prototype.btnOkClick = function(event){
		var me = this;
		if(!me.comp("txt_old_pwd").val()){
			Util.hint('旧密码不能为空！', {delay : 1000});
			return;
		}if(!me.comp("txt_new_pwd").val()){
			Util.hint('新密码不能为空！', {delay : 1000});
			return;
		}
		if(me.comp("txt_new_pwd").val() != me.comp("text_comfir_pwd").val()){
			Util.hint('新密码与确认密码不一致！', {delay : 1000});
			return;
		}
		
		
		kldBase.sendRequest({
			url : "/mobile",
			action : "resetpwd",
			params : {
				old_pwd : md5.calcMD5(me.comp("txt_old_pwd").val()),
				new_pwd :md5.calcMD5(me.comp("txt_new_pwd").val()),
				uid_:kldBase.getCurUid()
			},
			success : function(res) {
				if(window.kldCfg.ver>=200){
					localStorage['kldkey2'] = res.kldkey;
				}else{
					localStorage['kldkey'] = res.kldkey;
				}
			    Util.hint(res.message, {
					delay : 500
				});
				justep.Shell.closePage();
			}
		});
	};
	
	Model.prototype.btnHomeClick = function(event){
		justep.Shell.showPage("main");
	};

	return Model;
});