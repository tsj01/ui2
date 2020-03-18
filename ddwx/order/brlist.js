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
		var data = event.source;
		kldBase.sendRequest({
			url : "/mobile",
			action : "getBranch",
			params : {
				usePaging:true,
				limit : event.limit,
				start : event.offset,
				brtp : me.params.brtp,
				query : this.searchFact.latestValue
			},
			success : function(res) {
				var append = event.options && event.options.append;
				//手动加载数据和
				data.loadData(res, append);
				me.comp('factList').refresh();
			}
		});
	};

	Model.prototype.chkboxChg = function(event){
		var cr = event.bindingContext.$object;
		var retObj ={
		    brtp    : this.params.brtp,
		    id   : cr.val('id'),
		    brcatg : cr.val('brcatg'),
		    shortname : cr.val('shortname'),
		    brname  : cr.val('brname'),
		    braddr  : cr.val('brname'),
		    locateaddr  : cr.val('locateaddr')
		};
		//console.log('retObj');
		//console.log(retObj);
		var receiver = this.comp("windowReceiver1");
		receiver.windowEnsure(retObj);
	};

	Model.prototype.windowReceiver1Receive = function(event){
		var shortname = this.params.shortname;
		this.searchFact.set(shortname);
		var brtp = this.params.brtp;
		var title = '';
		switch(brtp){
			case '收件服务商':
				title = '收件单位';
				break;
			case '汽修单位':
				title = '汽修单位';
				break;
			case '保险公司':
				title = '保险公司';
				break;		
		}
		this.comp('titlebar').set({title:title});
		this.comp('factData').refreshData();
		
	};

	return Model;
});