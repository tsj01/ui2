define(function(require) {
	require("./setup/kldcfg");
	var kldBase = require("$UI/kld/base/kldbase");
	var justep = require("$UI/system/lib/justep");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');
	var CommonUtils = require("$UI/system/components/justep/common/utils");
	
	var Model = function() {
		this.callParent();
		var reqParams = this.getContext().getRequestParameters();
		console.log('-------------reqParams-----------------');
		console.log(reqParams);
		if(!kldCfg.isWx){
		    console.log('-------------非微信运行环境,开始检查版本-----------------');
			require("appVersionChecker");
		}
		kldBase.doInit(reqParams);
		var shellImpl = new ShellImpl(this, {
			"contentsXid" : "pages",
			"pageMappings" : {
				"main" : {
					url : require.toUrl('./setup/main.w')
				},
				"login" : {
					url : require.toUrl('./setup/login.w')
				},
				"orderlist" : {
					url : require.toUrl('./order/orderlist.w')
				},
				"orderdetail" : {
					url : require.toUrl('./order/orderdetail.w')
				},
				"updatepwd" : {
					url : require.toUrl('./setup/updatepwd.w')
				},
				"about" : {
					url : require.toUrl('./setup/about.w')
				},
				"myinfo" : {
					url : require.toUrl('./setup/myinfo.w')
				}
			}
		});
		var me = this;
		shellImpl.useDefaultExitHandler = false;
        CommonUtils.attachDoubleClickExitApp(function() {
			
			var windowContainer = me.comp("windowContainer1");
			var isHomePage = windowContainer.getInnerModel().comp('mainContents').getActiveIndex() == 0;
			console.log('--isHomePage='+isHomePage);
			if (shellImpl.pagesComp.getActiveIndex() === 1&&isHomePage) {
				return true;
			}
			return false;
		});

	};
 
	Model.prototype.modelLoad = function(event){
		
		justep.Shell.showPage("main");
	    console.log('--------index modelLoad---------------');
	    var me = this;
	    if(kldBase.checkLogin()===false){
	        console.log('--------index open login Dialog---------------');
	    	this.comp("loginDialog").open();
		}
		/*
		else{
		    console.log('--------index open main---------------');
			
		}*/
	};

	Model.prototype.modelModelConstruct = function(event){
	    console.log('--------index modelModelConstruct---------------');
        document.title = '订单管理';
        
	};

	Model.prototype.maintActive = function(event){
	    console.log('--------index----mainActive---------------');
	};


	Model.prototype.modelModelConstructDone = function(event){
		console.log('--------index modelModelConstructDone---------------');
	};





	Model.prototype.loginDialogReceived = function(event){
		console.log('-----index----loginDialogClose----------');
		var me = this;
		//var windowContainer = me.comp("windowContainer1");
		//windowContainer.getInnerModel().reloadData();
		justep.Shell.showPage("main",{forLogin:true});
	};





	return Model;
});