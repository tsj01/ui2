define(function(require){
	var justep = require("$UI/system/lib/justep");
    var kldBase = require("$UI/kld/base/kldbase");
	var Model = function(){
		this.callParent();
		this.searchFact = justep.Bind.observable("");
	};

	Model.prototype.factDataCustomRefresh = function(event){
	    console.log('--on factDataCustomRefresh');
	    var me = this;
	    var Dd = window.kldCfg.Dd;
		var user = Dd.user;
		var brtp = user.branch.brtp;
		var dname ='';
		if(brtp=='保险公司'){
			if(user.orderauth.indexOf("本部门订单")>=0 && !kldBase.isEmpty(user.dname)){
				dname = user.dname;
			}
		}
		var paramsObj = {
				usePaging:true,
				limit : event.limit,
				start : event.offset,
				bid : me.params.bid,
				dname : dname,
				searchUser : this.searchFact.latestValue
			};
		if(me.params.authlike) paramsObj.authlike = me.params.authlike;
		var data = event.source;
		kldBase.sendRequest({
			url : "/mobile",
			action : "getUser",
			params : paramsObj,
			success : function(res) {
				var append = event.options && event.options.append;
				//手动加载数据和
				data.loadData(res, append);
				data.doRefreshAfter(res, event.options);
			}
		});
	};

	Model.prototype.chkboxChg = function(event){
		var cr = event.bindingContext.$object;
		var retObj ={
		    brtp    : this.params.brtp,
		    id   : cr.val('id'),
		    loginid : cr.val('loginid'),
		    name  : cr.val('name'),
		    dname  : cr.val('dname'),
		    tel    : cr.val('tel')
		};
		//console.log('retObj');
		//console.log(retObj);
		var receiver = this.comp("windowReceiver1");
		receiver.windowEnsure(retObj);
	};

	Model.prototype.windowReceiver1Receive = function(event){
		var lxr = this.params.lxr;
		this.searchFact.set(lxr);
		var brtp = this.params.brtp;
		var title = '';
		if(this.params.title) title = this.params.title;
		switch(brtp){
			case '收件服务商':
				title = title?title:'内勤人员';
				break;
			case '汽修单位':
				title = '汽修联系人';
				break;
			case '保险公司':
				title = '查勘员';
				break;		
		}
		this.comp('titlebar').set({title:title});
		this.comp('factData').clear();
		this.comp('factList').refresh(true);
		
	};

	return Model;
});