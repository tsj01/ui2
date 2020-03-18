define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var kldBase = require("$UI/kld/base/kldbase");
	var PhotoSwipe = require("../res/photoswipe/js/photoswipe");
	var PhotoSwipeUI_Default = require("../res/photoswipe/js/photoswipe-ui-default.min");
	require("css!../res/photoswipe/css/photoswipe").load();
	require("css!../res/photoswipe/css/default-skin/default-skin").load();
	
	var Model = function(){
		this.callParent();
		this.canRecv = justep.Bind.observable(false);
		this.unrecvyy = justep.Bind.observable('');
		this.showRecvyy = justep.Bind.observable(false);
	    this.othrecvyy = justep.Bind.observable('');
	    this.showOthRecvyy = justep.Bind.observable(false);
	};
	Model.prototype.windowReceiver1Receive = function(event){
	    console.log('--------------windowReceiver1Receive-----------------');
	    //接收列表传输的当前行配件明细
	    var data = this.comp('orderDtlData');
	    console.log(event.params);
	    data.loadData([event.params.dataRow]);
	    data.first();
	    var status = data.getValue('status');
	    this.canRecv.set(event.params.canRecv&&status=='未收');
	    
	    this.showRecvyy.set(status=='不收');
	    
	    this.comp('unrecvReasons').refreshData();
	    this.comp('orderImgData').refreshData();
	    this.comp('recvImgData').refreshData();
	    
	    
	};

	Model.prototype.backBtnClick = function(event){
		this.comp("windowReceiver1").windowEnsure();
	};
	
	Model.prototype.setRecvyy = function(dataRows){
	     var me = this;
		 var dataRow = me.params.dataRow;
		 //
	     //遍历未收原因
	     var unrecvyy = dataRow.recvyy.value;
	     if(me.showRecvyy.get()){
	         var bFind = false;
		     for(var i=0;i< dataRows.length;i++){
		    	 if(dataRows[i].value.value == unrecvyy){
		    		 bFind = true;
		    		 break;
		    	 }
		     }
		     if(bFind){
		         me.unrecvyy.set(unrecvyy);
		         me.othrecvyy.set('');
		    	 me.showOthRecvyy.set(false);
		     }else{
		         me.unrecvyy.set('其他情况');
		         me.othrecvyy.set(unrecvyy);
		    	 me.showOthRecvyy.set(true);
		     }
	     }else
	    	 me.showOthRecvyy.set(false);
	};
	
	// 图片路径转换
	Model.prototype.toImgUrl = function(url) {
		return kldBase.toImgUrl(url);
	};
    Model.prototype.toShortDt = function(dtStr){
        console.log('-------toShortDt-----------dtStr='+dtStr);
        return dtStr ? dtStr.substr(5,11): dtStr;
    };
	Model.prototype.unrecvReasonsCustomRefresh = function(event){
		console.log('----------unrecvReasonsCustomRefresh-----------');
		var me = this;
		var data = event.source;
		data.clear();
		kldBase.sendRequest({
			url : "/mobile",
			action : "getDict",
			params : {
				dno : 'unrecvdtl_reason'
			},
			success : function(res) {
			    data.loadData(res.rows);
				data.first();
				me.setRecvyy(data.toJson().rows);
			}
		});
	};
	Model.prototype.rgpStatusChange = function(event){
		this.showRecvyy.set(event.value == '不收');
		this.showOthRecvyy.set(this.showRecvyy.get());
		if(this.showRecvyy.get()){
			this.showOthRecvyy.set(this.unrecvyy.get() == '其他情况');
		}else{
			//this.unrecvyy.set('');
			//this.othrecvyy.set('');
		} 
	};
	Model.prototype.rgpRecvyyChange = function(event){
		this.showOthRecvyy.set(event.value == '其他情况');
		if(this.showOthRecvyy.get()){
			//this.othrecvyy.set('');
		}
	};
	Model.prototype.btnDealImgClick = function(event){
	    var me = this;
		var dialog = this.comp("windowDialog1");
		dialog.open({
		    src : require.toUrl('./imageView.w'),
			params : {
				oid :  me.params.dataRow.oid.value,
				canRecv : me.canRecv.get(),
				title : '回收部件拍照'
			}
		});
	};
	Model.prototype.btnOKClick = function(event){
		console.log('--------btnOKClick---------');
		var me = this;
		//1.检查合法性
		var data = this.comp('orderDtlData');
		var id = data.getValue('id');
		var status = data.getValue('status');
		var unrecvyy = '';
		if(status==='不收'){
			if(this.unrecvyy.get()===''){
				kldBase.showMsg('需要选择一种不收原因!');
				return;
			}
			if(this.unrecvyy.get()==='其他情况'&&(this.othrecvyy.get()===null||this.othrecvyy.get().trim()==='')){
				kldBase.showMsg('填写其他情况的具体原因!');
				return;
			}
			unrecvyy = me.unrecvyy.get()==='其他情况'?me.othrecvyy.get():me.unrecvyy.get();
		}
		
		var updData = {
			id : id,
			status : status,
			recvyy : unrecvyy,
			recvmemo : data.getValue('recvmemo')
		};
		console.log(updData);
		kldBase.sendRequest({
			url : "/mobile",
			action : "recvOrderdtl",
			params :{
				rows:JSON.stringify([updData])
			} ,
			success : function(res) {
			    data.setValue('status',res.rows[0].status);
				data.setValue('recvyy',res.rows[0].recvyy);
				data.setValue('recvmemo',res.rows[0].recvmemo);
				data.setValue('recvdt',res.rows[0].recvdt);
				data.setValue('recvopr',res.rows[0].recvopr);
				data.setValue('mdtm',res.rows[0].mdtm);
				data.setValue('mopr',res.rows[0].mopr);
				kldBase.showMsg('回收提交成功!');
				me.comp("windowReceiver1").windowEnsure();	
			},
			error:function(msg, xhr){
				kldBase.showError(msg);
			}
		});
	};
	Model.prototype.orderImgDataCustomRefresh = function(event){
		console.log('----------orderImgDataCustomRefresh-----------');
		var me = this;
		
		var tp = event.source.xid==="orderImgData"?'定损照片':'回收照片';
		
		kldBase.sendRequest({
			url : "/mobile",
			action : "getOrderImg",
			params : {
				usePaging:false, 
				limit : event.limit,
				start : event.offset,
				tp : tp,
				oid : me.params.dataRow.oid.value,
				dtlid:me.params.dataRow.userdata.id.value
			},
			success : function(res) {
			     var append = event.options && event.options.append;
			     event.source.loadData(res, append);
			}
		});
	};
	Model.prototype.initPhotoSwipe = function(sliders,idx) {
		//var pswpElement = document.querySelectorAll('.pswp')[0];
		var pswpElement = $('#gallery_recvorder')[0];
		var options = {
		    index: idx,
		    history: false,
		    loop : false,
		    shareEl : false
		};
		var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, sliders, options);
		gallery.init();
	};
	Model.prototype.image1Click = function(event){
		console.log('---------------image1Click----------------');
		var row = event.bindingContext.$object;
		var imgData = row.data;
	    var idx = imgData.getRowIndex(row);
	    var sliders = [];
		$.each(imgData.toJson().rows,function(idx,row){
		     var w=0,h=0;
		     var sizewh = row.sizewh.value;
		     if(sizewh && sizewh!==''){
		        var size = sizewh.split('x');
		        if(size.length==2){
		        	w = size[0]; h = size[1];
		        }
		     }
		     var title = '配件名称:'+row.partname.value+',由['+row.mopr.value+']上传于'+row.mdtm.value;
		     sliders.push({
		        rowId : row.userdata.id.value,
				src: kldBase.toImgUrl(row.path.value),
		        w: w, h: h,
		        title: title
			 });
		 });
	    this.initPhotoSwipe(sliders,idx);
	};
	Model.prototype.listImgAfterRender = function(event){
		console.log('--------------listImgAfterRender-----------------');
		
	};
	Model.prototype.telRender = function(event){
	    if(event.value&& event.value && event.value!==''&& typeof event.value !=='undefined'){
	    	event.html = '<a href="tel:'+event.value+'">拨打电话:'+event.value+'</a>';
	    }
	};
	
	
	return Model;
});
