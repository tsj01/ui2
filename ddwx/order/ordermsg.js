define(function(require){
    require("../setup/kldcfg");
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
    var MsgDialog = require("$UI/system/components/justep/messageDialog/messageDialog");
	var kldBase = require("$UI/kld/base/kldbase");
	var Model = function(){
		this.callParent();
		this.canView = justep.Bind.observable(false);
		this.canReply = justep.Bind.observable(false);
		this.canDeal = justep.Bind.observable(false);
	};

    Model.prototype.isLeaf = function(lastreply){
    	return (!lastreply||lastreply=='')?'nkLeaf':'';
    }
 
	Model.prototype.data1CustomRefresh = function(event){
	    console.log('-----------data1CustomRefresh--------------');
	    var me = this;
	    var paramsObj = {
				usePaging:false, 
				limit : event.limit,
				start : event.offset,
				oid : this.params.oid,
				orderno : this.params.orderno
			};
		var append = event.options && event.options.append;
	    var parent = event.options && event.options.parent;	
		if(parent){
		    console.log('-------------parentId='+parent.getID());
			paramsObj.refid = parent.row.id.value.latestValue;
		}
		kldBase.sendRequest({
			url : "/mobile",
			action : "getOrdermsg",
			params : paramsObj,
			success : function(resultData) {
			     event.source.loadData(resultData, append,parent);
			     event.source.doRefreshAfter(resultData, event.options);
			     me.comp('grid1').refresh();
			}
		});
	};

	
	Model.prototype.btnAddClick = function(event){
		this.doAction('add');
	};
	
	Model.prototype.doAction = function(act){
		var me = this;
	    var rowId = me.comp('grid1').getSelection(); 
	    var row = this.comp('data1').getRowByID(rowId);
	    var rowData = row ? row.toJson():'';
		this.comp('msgWin').open({
			src : require.toUrl('./ordermsgEdit.w'),
	    	params : {
	    		act : act,
	    		oid : this.params.oid,
	    		rowData : rowData,
	    		callback : function(reload){
	    			if(reload){
	    				me.comp('data1').refreshData();
	    			} 
	    		}
	    	}
		});
	}

	Model.prototype.btnVievClick = function(event){
	    this.doAction('view');
	};

	Model.prototype.btnReplyClick = function(event){
		this.doAction('reply');
	};

	Model.prototype.btnDealClick = function(event){
		this.doAction('upd');
	};

	Model.prototype.grid1CellRender = function(event){
	    var refid =  event.row.toJson().refid.value;
	    var cv =  kldBase.isEmpty(event.colVal)?'': event.colVal;
		switch(event.colName){
			case 'title':
			    if(refid==0)
			    	event.html = cv.length >4 ? cv.substr(0,4):cv;
			    else
			        event.html = '';
			break;
			case 'content':
				event.html = cv.length >6 ? cv.substr(0,6)+'...':cv;
			break;
			case 'sdt':
				if(cv.length>10)
			        event.html = cv.substr(5,11);
			break;
		}
		event.html = '<span style="font-size:12px">'+event.html+'</span>';
	};

	Model.prototype.grid1IndexChanged = function(event){
		if(event.row){
		    this.canView.set(true);
		    var Dd = window.kldCfg.Dd;
			var r = event.row.toJson();
			var refid = r.refid.value;
			this.canReply.set(refid==0);
			this.canDeal.set(refid==0&&Dd.user.auth.indexOf('内勤调度')>=0&&r.status.value=='待处理');
		}else{
			this.canView.set(false);
			this.canReply.set(false);
			this.canDeal.set(false);
		}
	};

	

	Model.prototype.windowReceiver1Receive = function(event){
	    console.log('----------------windowReceiver1Receive---------------------');
		this.comp('data1').clear();
		this.comp('data1').refreshData();
		this.canView.set(false);
		this.canReply.set(false); 
		this.canDeal.set(false);
	};

	return Model;
});