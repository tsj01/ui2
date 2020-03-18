define(function(require) {
	require("../setup/kldcfg");
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	//require("$UI/system/components/justep/dataTables/dataTables");
	var MsgDialog = require("$UI/system/components/justep/messageDialog/messageDialog");
	var kldBase = require("$UI/kld/base/kldbase");
	require("../res/js/exif");
	var PhotoSwipe = require("../res/photoswipe/js/photoswipe");
	var PhotoSwipeUI_Default = require("../res/photoswipe/js/photoswipe-ui-default");
	require("css!../res/photoswipe/css/photoswipe").load();
	require("css!../res/photoswipe/css/default-skin/default-skin").load();
	/*require("css!$UI/system/components/justep/dataTables/css/dataTables.bootstrap").load();
	require("css!$UI/system/components/justep/dataTables/css/responsive.dataTables").load();
	require("css!$UI/system/components/justep/dataTables/css/responsive.bootstrap").load();*/
	
	var isSaved = false;
    var parentNode = $('body').find('.window').get(0);
	var Model = function() {
		this.callParent();
		this.showTitle = justep.Bind.observable(true);
		this.showContent = justep.Bind.observable(true);
		this.showDeal = justep.Bind.observable(true);
		this.showSubmitBtn = justep.Bind.observable(true);
	};

    	
		

	Model.prototype.btnSubmitClick = function(event) {
	    //检查输入情况
	    var data = this.comp('data1');
	    if(kldBase.isEmpty(data.getValue('title'))){
	        kldBase.showMsg('缺少标题');
	    	return;
	    }
	    if(kldBase.isEmpty(data.getValue('content'))){
	        kldBase.showMsg('缺少内容');
	    	return;
	    }
	    if(this.params.act=='upd'&&kldBase.isEmpty(data.getValue('dmemo'))){
	        kldBase.showMsg('缺少处理意见');
	    	return;
	    }
	    this.doSave();
	};
	Model.prototype.doSave = function() {
	    
	    var data = this.comp('data1');
	    var act = this.params.act;
	    var paramsObj =[{
	    	id  : data.getValue('id'),
	    	refid : data.getValue('refid'),
	    	oid : data.getValue('oid'),
	    	status : data.getValue('status'),
	    	title : data.getValue('title'),
	    	content : data.getValue('content'),
	    	dmemo :  data.getValue('dmemo')
	    }];
	    var me = this;
	    kldBase.sendRequest({
			url : "/mobile",
			action : act=='upd'?'updOrdermsg':'addOrdermsg',
			params : {
				rows : JSON.stringify(paramsObj)
			},
			success : function(res) {
			    if(me.params.callback){
			    	me.params.callback(true);
			    }
				me.comp("windowReceiver1").windowCancel();
			},
			error:function(msg, xhr){
				kldBase.showError(msg);
			}
		});
	};
	
	Model.prototype.windowReceiver1Receive = function(event){
		var data = this.comp('data1');
		var Dd = window.kldCfg.Dd;
		var user = window.kldCfg.Dd.user;
		
		var obj = {
			    id  : 0, 
			    refid : 0,
			    oid : this.params.oid
			};
		switch(this.params.act){
			case 'add':
				this.showSubmitBtn.set(true);
				this.showDeal.set(false);
				this.showTitle.set(true);
				this.showContent.set(true);
				obj.status = '待处理';
				data.newData({
					defaultValues : [ obj ]
				});
			break;
			case 'view':
				this.showSubmitBtn.set(false);
				var refid = event.params.rowData.refid.value;
				this.showDeal.set(refid==0);
				this.showTitle.set(true);
				this.showContent.set(true);
				data.loadData([event.params.rowData],false);
				data.first();
			break;
			case 'reply':
				this.showSubmitBtn.set(true);
				this.showDeal.set(false);
				this.showTitle.set(false);
				this.showContent.set(true);
				obj.refid = event.params.rowData.userdata.id.value;
				obj.title = '回复:['+event.params.rowData.title.value+']';
				data.newData({
					defaultValues : [ obj ]
				});
			break;
			case 'upd':
				this.showSubmitBtn.set(true);
				this.showDeal.set(true);
				this.showTitle.set(false);
				this.showContent.set(false);
				data.loadData([event.params.rowData],false);
				data.first();
			break;
		}
	    
	};
		
	
	Model.prototype.modelLoad = function(event){

	};
	
	
	Model.prototype.btnBackClick = function(event){
		this.comp("windowReceiver1").windowCancel();
	};
	
	
		
	
	
	
		
	
	
	
	
		
	
		
	
	return Model;
});