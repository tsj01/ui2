define(function(require){
	var justep = require("$UI/system/lib/justep");
    var kldBase = require("$UI/kld/base/kldbase");
	var Model = function(){
		this.callParent();
		this.searchFact = justep.Bind.observable("");
	};

	Model.prototype.factDataCustomRefresh = function(event){
	    var me = this;
		var data = event.source;
		var qryParams ={
				usePaging:false,
				start : event.offset,
				limit : event.limit,
				dno : this.params.dno,
				search : this.searchFact.latestValue
			 };
		kldBase.sendRequest({
			url : "/mobile",
			//async : true,
			action : "getBasicDict",
			params : qryParams,
			success : function(resultData) {
				var append = event.options && event.options.append;
				data.loadData(resultData, append);
				//3.8里面异步调用ajax时,必须自己接管调用doRefreshAfter
				//参见：异步请求注意问题 http://docs.wex5.com/wex5-ui-question-list-2169
				data.doRefreshAfter(resultData, event.options);
			} 
		});
	};

	Model.prototype.chkboxChg = function(event){
		var cr = event.bindingContext.$object;
		var retObj ={
		    id   : cr.val('id'),
		    name : cr.val('name'),
		    value  : cr.val('value'),
		};
		//console.log('retObj');
		//console.log(retObj);
		var receiver = this.comp("windowReceiver1");
		receiver.windowEnsure(retObj);
	};

	Model.prototype.windowReceiver1Receive = function(event){
		this.searchFact.set(this.params.search);
		var title = this.params.title;
		this.comp('titlebar').set({title:title});
		this.comp('factList').refresh(true);
	};

	return Model;
});