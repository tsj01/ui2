define(function(require) {
    require("../setup/kldcfg");
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var kldBase = require("$UI/kld/base/kldbase");
	var Model = function() {
		this.callParent();
	};

    
	Model.prototype.listLineClick = function(event) {
		var me = this;
		// 调用对话框编辑，并传入当前行数据
		var row = event.bindingContext.$object;
		var rowData = row.toJson();
		me.comp("orderDialog").open({
	    	src : require.toUrl('./orderdetail.w'),
	    	params : {
	    		id: rowData.userdata.id.value,
	    		orderno : rowData.orderno.value,
				data:{
					refresh:function(){ 
						me.comp("orderData").refreshData();
					}
				}
	    	}
	    }); 
	};

	/*
	 * Model.prototype.detailDialogReceived = function(event) { // 对话框返回后保存数据
	 * this.comp("orderData").saveData(); };
	 */

	Model.prototype.orderDataCustomRefresh = function(event) {
		if(window.kldCfg.isDebug)  console.log('--orderlist-orderDataCustomRefresh----');
        var me = this;
		var data = event.source;
		var lastMonths = window.kldCfg.lastMonths;
		var sdt = justep.Date.toString(justep.Date.decrease(new Date(),lastMonths,'m'),'yyyy-MM-dd');
        var qryParams ={
				usePaging:true,
				start : event.offset,
				limit : event.limit,
				withtj : 'true',
				sdt : sdt
			 };
			 
		qryParams = $.extend(qryParams,me.params);
		if(me.pObj){   
			qryParams = $.extend(qryParams,me.pObj);
		}
		if(kldBase.isEmpty(qryParams.actid)) qryParams.actid = 'all_order';	 	 

		kldBase.sendRequest({
			url : "/mobile",
			//async : true,
			action : "getOrderInfo",
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

	
	Model.prototype.btnSearch = function(event){
	    var order_search = this.comp('searchInput').value.trim();
	    if(this.pObj)
	    	this.pObj.order_search = order_search;
	    else
	        this.pObj = {order_search :order_search};	
		this.comp('orderList').refresh(true);
	};

	Model.prototype.backBtnClick = function(event){
	    justep.Shell.showPage('main');
	};
 
	Model.prototype.modelParamsReceive = function(event){
	    var me = this;
	    this.pObj = null;
	    this.comp('searchInput').set({value:''});
	    this.comp('titlebar').set({title:event.params.title});
	    if(event.params.actid){
	    	me.first = true;
		}else
	    	me.first = null;	
	    if(event.params.actid=='garage_order'){
	    	me.garageParams = {
		    	garageid : event.params.garageid,
		    	garage : event.params.title
		    }
	    }else
	    	me.garageParams = null;
	    
	    this.comp('orderList').refresh(true);
	};

	
	Model.prototype.orderDialogReceived = function(event){
		//不要刷新列表
		//this.comp('orderList').refresh(true);
	};

	
	Model.prototype.output1Render = function(event){
	    var row = event.bindingContext.$object;
		var rowData = row.toJson();
		event.html = rowData.orderno.value+'('+rowData.srv.value+')';
		//console.log(rowData);
	};

    Model.prototype.fmtDate = function(dt){
    	return dt? dt.substr(5,11):'';
    };
	
	Model.prototype.btnSearchOptionsClick = function(event){
		var me = this;
		me.comp("searchDialog").open({
	    	src : require.toUrl('./searchOptions.w'),
	    	params : {
	    	    order_search : me.comp('searchInput').value.trim(),
	    	    first : me.first,
	    	    garageParams : me.garageParams,
	    		data:{
					callback:function(pObj){
					    console.log('--------searchOptions--callback-----------'); 
					    console.log(pObj);
					    me.pObj = pObj;
					    me.comp('searchInput').set({value:pObj.order_search?pObj.order_search:''});
					    me.comp('orderList').refresh(true);
						//me.comp("orderData").refreshData();
					}
				}
	    	}
	    });
	    me.first = null;
	};
	Model.prototype.addrRender = function(event){
	    if(event.value&&event.value!=='' && typeof event.value !=='undefined'){
	    	if(event.value.length>24) event.html = '...'+event.value.substr(event.value.length-24,24);
	    	//event.html = '<a href="tel:'+event.value+'">拨打电话:'+event.value+'</a>';
	    }
	};
	
	Model.prototype.carInfoRender = function(event){
		if(event.value&&event.value!=='' && typeof event.value !=='undefined'){
	    	if(event.value.length>24) event.html = '...'+event.value.substr(event.value.length-28,28);
	    	//event.html = '<a href="tel:'+event.value+'">拨打电话:'+event.value+'</a>';
	    }
	};

	
	return Model;
});