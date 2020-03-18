define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	//var MsgDialog = require("$UI/system/components/justep/messageDialog/messageDialog");
	var kldBase = require("$UI/kld/base/kldbase");
	var MsgDialog = require("$UI/system/components/justep/messageDialog/messageDialog");
	var steps = require('../res/js/steps');
	require("css!../res/css/steps.css").load();
	var PhotoSwipe = require("../res/photoswipe/js/photoswipe");
	var PhotoSwipeUI_Default = require("../res/photoswipe/js/photoswipe-ui-default");
	require("css!../res/photoswipe/css/photoswipe").load();
	require("css!../res/photoswipe/css/default-skin/default-skin").load();
	require("https://api.map.baidu.com/getscript?v=1.2&ak=&services=&t=20130716024057");
	require("https://api.map.baidu.com/library/GeoUtils/1.2/src/GeoUtils_min.js");
	if(window.kldCfg.isWx==false){
	    require("$UI/system/lib/cordova/cordova");
		require("cordova!cordova-plugin-file");// 本地文件上传类
		require("cordova!cordova-plugin-file-transfer");// 文件上传转换类
	}
	var wxAPI = require("$UI/kld/base/wxAPI");
	
	var isSave = false;

	var Model = function() {
		this.callParent();
		/*this.canArrive = justep.Bind.observable(false);
		this.canDontrecv = justep.Bind.observable(false);
		this.canDelay = justep.Bind.observable(false);*/
		
		this.canRecv = justep.Bind.observable(false);
		this.canUpd = justep.Bind.observable(false);
		this.canCopy = justep.Bind.observable(true);
		this.canConfirm = justep.Bind.observable(false);
		this.can2Confirm = justep.Bind.observable(false);
		this.canImgRepair = justep.Bind.observable(false);
		this.canMsg = justep.Bind.observable(false);
	};
	var parentNode = $('body').find('.window').get(0);

	Model.prototype.btnSaveClick = function(event) {
		var me = this;

		var orderDtlData = me.comp("orderDtlData").toJson();
		var orderData = me.comp("orderData").toJson();
		var postorderDtlDataData = [];
		var postOrderData = {
			id : orderData.rows[0].userdata.id.value,
			recovery_unitname : orderData.rows[0].recovery_unitname.value,
			accident_code : orderData.rows[0].accident_code.value,
			plate_code : orderData.rows[0].plate_code.value,
			car_model : orderData.rows[0].car_model.value,
			linkman_name : orderData.rows[0].linkman_name.value,
			linkman_tell : orderData.rows[0].linkman_tell.value,
			addr : orderData.rows[0].addr.value,
			remark : orderData.rows[0].remark.value
		};

		for (var i = 0; i < orderDtlData.rows.length; i++) {
			var r = orderDtlData.rows[i];
			if(r.name.value){
			var item = {
				id : r.userdata.id.value,
				name : r.name.value,
				tag : r.tag.value,
				job_apply_id : orderData.rows[0].userdata.id.value
			};
			postorderDtlDataData.push(item);
			}
			
		}
	
		if (isSave)
			return;
		isSave = true;
		me.comp("btnSave").set({
			disabled : true
		});

		kldBase.sendRequest({
			url : "/mobile",
			action : "jobApplyAdd",
			params : {
				postOrderData : JSON.stringify(postOrderData),
				postorderDtlDataData : JSON.stringify(postorderDtlDataData)
			},
			success : function(res) {
				/*if (me.params) {
					me.params.refresh();
				}*/
				isSave = false;
				me.comp("btnSave").set({
					disabled : false
				});
				justep.Shell.closePage();
			},
			error:function(msg, xhr){
				kldBase.showError(msg);
				isSave = false;
				me.comp("btnSave").set({
					disabled : false
				});
			}
		});
	};

	Model.prototype.btnHomeClick = function(event) {
	    this.comp("windowReceiver1").windowEnsure();
		justep.Shell.showPage("main");
	};

	Model.prototype.modelLoad = function(event) {
		
	};

	Model.prototype.tabs1Select = function(event) {

	};

	Model.prototype.locationClick = function(event) {

	};
	
	
	
	//图片路径转换
	Model.prototype.toImgUrl = function(url){
		return kldBase.toImgUrl(url);
	};
	
	Model.prototype.imgClick = function(event){
		var row = event.bindingContext.$object;
		justep.Shell.showPage(require.toUrl("./imgview.w?id=" + row.val('id')));
	};
	
    Model.prototype.getOrderStatus = function(){
        var isdisp = this.comp('orderData').getValue("isdisp");
        var status = this.comp('orderData').getValue("status");
        var value = isdisp=='已关闭'?isdisp:status;
    	return value;
    },

	Model.prototype.orderDataCustomRefresh = function(event) {
		if(window.kldCfg.isDebug)  console.log('----------orderDataCustomRefresh-----------');
		var me = this;
		var data = event.source;
		kldBase.sendRequest({
			url : "/mobile",
			action : "getOrder",
			params:{
			    usePaging:true,
				limit : event.limit,
				start : event.offset,
				id: this.params.id,
				withtj : true
			},
			success : function(res) {
				data.loadData(res.rows);
				data.first();
				var status = res.rows[0].status;
				var isdisp = res.rows[0].isdisp;
				var dsyid = res.rows[0].dsyid;
				
				me.canUpd.set(isdisp!='已关闭'&&(status=='已暂存'||status=='已提交'));
				me.canCopy.set(false);
				me.canConfirm.set(false);
				me.can2Confirm.set(false);
				me.canImgRepair.set(false);
				me.canMsg.set(isdisp!='已关闭');
				
				var Dd = window.kldCfg.Dd;
				if(Dd.branch.brtp==='保险公司'){
					//定损员只能修改自己的订单
					me.canUpd.set(me.canUpd.get() && Dd.user.id === dsyid);
					me.canCopy.set(true);
					me.can2Confirm.set(isdisp!='已关闭'&&status=='已派单');
				}
				if(Dd.branch.brtp =='汽修单位'){
					me.canConfirm.set(isdisp!='已关闭'&&status=='已派单');
					me.canImgRepair.set(isdisp!='已关闭');
				}
				if(Dd.branch.brtp =='收件服务商'){
					me.canUpd.set(me.canUpd.get()&&Dd.user.auth.indexOf('内勤调度')>=0);
					me.canCopy.set(Dd.user.auth.indexOf('内勤调度')>=0||Dd.user.auth.indexOf('保险代理')>=0);
				}
				
				
			}
		});
	};
	Model.prototype.loadSteps = function(oid){
		var me = this;
		kldBase.sendRequest({
			url : "/mobile",
			action : "getOrderSteps",
			params : {
				oid:oid
			},
			success : function(res) {
			    if(window.kldCfg.isDebug)  console.log('--------step datas---------');
				var sData = res.rows;
			    var data = [];
			    var preDtm = null,curDtm = null;
			    var active =0;
			    for(var key in sData){
			    	var title = sData[key].act;
			    	if(sData[key].cnt>1) title += '<sup style="color:red;font-size:10px">'+sData[key].cnt+'</sup>';
			    	var desc = sData[key].status==1?'<span>'+sData[key].dtm.substring(5,sData[key].dtm.length-3)+'<span>':'';
			    	var stepObj = {
			        		title :  title,
			        		//status : sData[key].status,
			        		description : desc
			        	};
			    	curDtm = new Date(sData[key].dtm);
			    	if(key>0&&sData[key].status==1){
			    		var usedDtm = curDtm - preDtm;
			    		if(usedDtm >=0){
				    		var days = Math.floor(usedDtm / (24 * 3600 * 1000)); // 计算出天数
				            var leavel = usedDtm % (24 * 3600 * 1000); // 计算天数后剩余的时间
				            var hours = Math.floor(leavel / (3600 * 1000)); // 计算剩余的小时数
				            var leavel2 = leavel % (3600 * 1000); // 计算剩余小时后剩余的毫秒数
				            var minutes = Math.floor(leavel2 / (60 * 1000)); // 计算剩余的分钟数
				            var leavel3 = leavel2 % (60 * 1000); // 计算剩余小时后剩余的毫秒数
				            var seconds = Math.floor(leavel3 / (1000)); // 计算剩余的秒数
				            if(seconds>0) minutes +=1;	            
				            var usedTime = days >0 ? days+'天' : '';
				            usedTime += hours>0? hours+'时' : '';
				            usedTime += minutes+'分';
				            stepObj.customHtml ='<div style="order:2;" class="step-description">'+usedTime+'</div>'
				            //stepObj.title += '<sub style="color:brown;font-size:12px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+usedTime+'</sub>';
			    		}
			    	}
			    	//if(window.kldCfg.isDebug)  console.log(curDtm);
			    	preDtm = curDtm==null||curDtm=='undefined'||curDtm<new Date('1971-01-01')?preDtm:curDtm;
			    	data.push(stepObj);
			    	if(sData[key].status==1) active = key; 
			    }
			    
			    var steps1 = steps({
			    	el: "#orderSteps",
				    data : data,
			    	/*  data: [
				        { title: "提交" , description: "<span title=\"好好的\">04-01 09:02<span>" },
				        { title: "派单" , description: "<span title=\"好好的\">04-02 10:04<span>" },
				        { title: "确认<span style='color:red;font-size:14px'><sup>0</sup></span>" , description: "<span title=\"好好的\">04-02 11:15<span>" },
				        { title: "到达<span style='color:red;font-size:14px'><sup>3</sup></span>" , description: "<span title=\"好好的\">04-03 12:02<span>" ,customHtml: '<div style="order:2;" class="step-description">历时01:13</div>' },
				        { title: "回收" , description: "<span title=\"好好的\">04-03 12:12<span>" },
				        { title: "入库" , description: "<span title=\"好好的\">04-04 09:00<span>" }
				    ], */
				    //active: data.length-1,
				    active : active,
				    center : true,
				    dataOrder: ["title", "line", "description"]
				    //iconType: "bullets",
				    //direction: "vertical"
				});
			    
			},
			error:function(msg, xhr){
				kldBase.showError(msg);
			}
		});
	};

	Model.prototype.orderDtlDataCustomRefresh = function(event) {
	    if(window.kldCfg.isDebug)  console.log('----------orderDtlDataCustomRefresh-----------');
		var data = event.source;
		kldBase.sendRequest({
			url : "/mobile",
			action : "getOrderdtl",
			params : {
				oid : this.params.id
			},
			success : function(res) {
			    var append = event.options && event.options.append;
				data.loadData(res, append);
			    data.first();
			}
		});
	};
    
	
	Model.prototype.orderImgDataCustomRefresh = function(event){
		if(window.kldCfg.isDebug)  console.log('----------orderImgDataCustomRefresh-----------');
		var me = this;
		var data = event.source;
		kldBase.sendRequest({
			url : "/mobile",
			action : "getOrderImg",
			params : {
				usePaging:true, 
				tp : '定损照片',
				oid :  this.params.id
			},
			success : function(res) {
				var append = event.options && event.options.append;
				data.loadData(res, append);
				//3.8里面异步调用ajax时,必须自己接管调用doRefreshAfter
				//参见：异步请求注意问题 http://docs.wex5.com/wex5-ui-question-list-2169
				data.doRefreshAfter(res, event.options);
			}
		});
	};
	Model.prototype.recvImgDataCustomRefresh = function(event){
		if(window.kldCfg.isDebug)  console.log('----------orderImgDataCustomRefresh-----------');
		var me = this;
		var data = event.source;
		kldBase.sendRequest({
			url : "/mobile",
			action : "getOrderImg",
			params : {
				usePaging:true, 
				tp : '回收照片',
				oid :  this.params.id
			},
			success : function(res) {
				var append = event.options && event.options.append;
				data.loadData(res, append);
				//3.8里面异步调用ajax时,必须自己接管调用doRefreshAfter
				//参见：异步请求注意问题 http://docs.wex5.com/wex5-ui-question-list-2169
				data.doRefreshAfter(res, event.options);
			}
		});
	};

	Model.prototype.deleteBtnClick = function(event){
		
	};

	
	Model.prototype.backBtnClick = function(event){
	    this.comp("windowReceiver1").windowCancel();
	};
    
    Model.prototype.contentOrderActive = function(event){
    	if(window.kldCfg.isDebug)  console.log('----------contentOrderActive-----------');
    	
	};
	
	Model.prototype.contentOrderDtlActive = function(event){
		if(window.kldCfg.isDebug)  console.log('----------contentOrderDtlActive-----------');
	    this.comp('listOrderDtl').refresh(true);
	};
    
	Model.prototype.contentOrderImgActive = function(event){
		if(window.kldCfg.isDebug)  console.log('----------contentOrderImgActive-----------');
		     this.comp('listImg').refresh(true);
		     this.comp('listImg2').refresh(true);
		     this.comp('listImg3').refresh(true);
		     
	};
	
	Model.prototype.windowReceiver1Receive = function(event){
		if(window.kldCfg.isDebug)  console.log('---------------windowReceiver1Receive---------------');
		wxAPI.doInit(function(){
			console.log('-----------wxAPI is ready---------------');
		});
		this.comp('orderData').refreshData();
		this.comp('orderContents').to(0);
		this.loadSteps(this.params.id);
	};
	Model.prototype.listLineClicked = function(event){
		var row = event.bindingContext.$object;
		var dialog = this.comp("recvDialog");
		dialog.open({
		    src : require.toUrl('./recvorder.w'),
			params : {
				canRecv : this.canRecv.get(),
				dataRow : row.toJson()
			}
		});
	};
	
	Model.prototype.recvDialogReceived = function(event){
			if(window.kldCfg.isDebug)  console.log('---------recvorder-----recvDialogReceived-------------------');
			this.comp('listOrderDtl').refresh(true);
			this.comp('orderData').refreshData();
	};
	
	
	
	Model.prototype.initPhotoSwipe = function(sliders,idx) {
		//var pswpElement = document.querySelectorAll('.pswp')[0];
		var pswpElement = $('#gallery_orderdetail')[0];
		var options = {
		    index: idx,
		    history: false,
		    loop : false,
		    shareEl : false,
		    downloadEl : window.kldCfg.isWx==false
		};
		var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, sliders, options);
		gallery.onDownloadItem = function(){
		   console.log('---------onDownloadItem----------');
		   console.log(gallery.currItem);
		   var imgUrl = gallery.currItem.src;
		   var fileName = gallery.currItem.fileName;
		   
		   var localstorage = cordova.file.cacheDirectory;
		   
		   var filePath = localstorage+fileName;
		   var url = imgUrl;
		   var fileTransfer = new FileTransfer();
		   var tmpdirEntry = null;
		   window.resolveLocalFileSystemURL(cordova.file.cacheDirectory, function (entry) {
			   tmpdirEntry = entry;    
		   });
		   console.log('---imgUrl='+imgUrl);
		   fileTransfer.download(
				url,
				filePath,
				function(entry){
				     //justep.Util.hint("文件下载成功!");
				     fileTransfer.saveToAlbum(filePath,
				     function(e){
				    	 justep.Util.hint("已经下载到相册!",{'delay' : 1000});
				    	 console.log('--filePath='+filePath);
				    	 tmpdirEntry.getFile(fileName, {
								create : false
							}, function(fileEntry) {
								fileEntry.remove(function() {
									//justep.Util.hint("文件删除成功", {
									//	'delay' : 5000
									//});
								}, function(err) {
									alert("文件删除失败,错误码 ：" + err.code);
								});
							}, function(err) {
								alert("文件打开失败,错误码 ：" + err.code);
							});
				     },
				     function(err){
				         justep.Util.hint("下载到相册失败!"+err.code);
				     });
					 
				},
				function(error){
				     justep.Util.hint("文件下载失败!");
					 console.log("download error source " + error.source);
	                 console.log("download error target " + error.target);
	                 console.log("upload error code" + error.code);
				}
			);
		};
		gallery.init();
		
	};
	Model.prototype.image1Click = function(event){
		if(window.kldCfg.isDebug)  console.log('---------------image1Click----------------');
		var row = event.bindingContext.$object;
	    var idx = row.data.getRowIndex(row);
	    var imgData = row.data;
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
		     var path = row.path.value;
		     sliders.push({
		        rowId : row.userdata.id.value,
				src: kldBase.toImgUrl(path),
				fileName : row.partname.value+'_'+path.substring(path.lastIndexOf("/")+1,path.length),
		        w: w, h: h,
		        title: title
			 });
		 });
		this.initPhotoSwipe(sliders,idx);
	};
	

	Model.prototype.telRender = function(event){
	    if(event.value&&event.value!==''){
	    	event.html = '<a href="tel:'+event.value+'">拨打电话:'+event.value+'</a>';
	    }
	};
	
	Model.prototype.btnMsgClick = function(event){
		var row = this.comp('orderData').getCurrentRow();
		this.comp("msgDialog").open({
	    	src : require.toUrl('../order/ordermsg.w'),
	    	params : {
				oid : this.comp('orderData').getValue('id', row),
				orderno : this.comp('orderData').getValue('orderno', row)
			}
	    });
	};
		
	Model.prototype.output10Render = function(event){
		var orderData = this.comp('orderData');
		var row = orderData.getCurrentRow();
		var srv = orderData.getValue('srv', row);
		var orderno = orderData.getValue('orderno', row);
		event.html = srv+'-'+orderno;
	};
	Model.prototype.btnUpdClick = function(event){
		this.comp("orderDialog").open({
	    	src : require.toUrl('../order/neworder.w'),
	    	params : {
	    		act : 'upd',
	    		id : this.params.id
	    	}
	    });
	};
	
	Model.prototype.btnCopyClick = function(event){
	    var data = this.comp('orderData');
	    obj = {
			isurgent : '否',
			isdisp : '未派单'
		};
		var obj ={
			//复制订单内容
			insurid:data.getValue('insurid'),
			insur : data.getValue('insur'),
			dsyid : data.getValue('dsyid'),
			dsy : data.getValue('dsy'),
			dsytel : data.getValue('dsytel'),
			srvid : data.getValue('srvid'),
			srv : data.getValue('srv'),
			garageid : data.getValue('garageid'),
			garage : data.getValue('garage'),
			garlxr : data.getValue('garlxr'),
			gartel : data.getValue('gartel'),
			garaddr : data.getValue('garaddr'),
			accno : data.getValue('accno'),
			plateno : data.getValue('plateno'),
			carmodel : data.getValue('carmodel'),
			own : data.getValue('own'),
			owntel : data.getValue('owntel'),
			vin : data.getValue('vin'),
			isurgent : data.getValue('isurgent'),
			dept : data.getValue('dept'),
			srvopr : data.getValue('srvopr')
		};
		this.comp("orderDialog").open({
	    	src : require.toUrl('../order/neworder.w'),
	    	params : {
	    		act : 'add',
	    		orderObj : obj
	    	}
	    });
	};
	
	
	Model.prototype.orderDialogReceived = function(event){
		if(event.data&&event.data.act == 'add'){
		   this.comp('windowReceiver1').windowCancel();
		   justep.Shell.showPage("orderlist",{actid:'my_order',for_my:true,title:'我的订单'});
		}else{
			this.comp('orderData').refreshData();
			this.loadSteps(this.params.id);
		}
	};
	
	
	Model.prototype.btnConfirmClick = function(event){
	    var row = this.comp('orderData').getCurrentRow();
		this.comp("orderDialog").open({
	    	src : require.toUrl('../order/confirmOrder.w'),
	    	params : {
				dataRow: row.toJson()
			}
	    });
	};
	
	Model.prototype.btn2ConfirmClick = function(event){
	    var me = this;
		var lgmsg = new MsgDialog({
				parentNode : parentNode
			});
			lgmsg.on('onClose', function(event) {
				if(event.button == 'ok'){
					me.doToConfirm();
				}
			}, this);
			lgmsg.show({
				type : 'OKCancel',
				title : '提示',
				message : '确认给汽修单位发送催单消息吗?',
				width:''
			});
	};
	
	Model.prototype.doToConfirm = function(){
		kldBase.sendRequest({
			url : "/mobile",
			action : "sendOrderToConfirmMsg",
			params :{
			    id : this.comp('orderData').getValue('id')
			} ,
			success : function(res) {
				kldBase.showMsg(res.rows);	
			},
			error:function(msg, xhr){
				kldBase.showError(msg);
			}
		});
	}
	
	Model.prototype.btnImgRepairClick = function(event){
		var me = this;
		var dialog = this.comp("imgRepireDialog");
		dialog.open({
		    src : require.toUrl('./imageViewRepair.w'),
			params : {
				oid :  me.params.id,
				title : '维修部件拍照'
			}
		});
	};
	
	
	Model.prototype.repairImgDataCustomRefresh = function(event){
		if(window.kldCfg.isDebug)  console.log('----------repairImgDataCustomRefresh-----------');
		var me = this;
		var data = event.source;
		kldBase.sendRequest({
			url : "/mobile",
			action : "getOrderImg",
			params : {
				usePaging:true, 
				tp : '维修照片',
				canRecv : true,
				oid :  me.params.id
			},
			success : function(res) {
				var append = event.options && event.options.append;
				data.loadData(res, append);
				//3.8里面异步调用ajax时,必须自己接管调用doRefreshAfter
				//参见：异步请求注意问题 http://docs.wex5.com/wex5-ui-question-list-2169
				data.doRefreshAfter(res, event.options);
			}
		});
	};
	return Model;
});