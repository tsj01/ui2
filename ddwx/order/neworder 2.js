define(function(require) {
	require("../setup/kldcfg");
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Util = require("$UI/system/lib/base/util");
	//require("$UI/system/components/justep/dataTables/dataTables");
	var MsgDialog = require("$UI/system/components/justep/messageDialog/messageDialog");
	var kldBase = require("$UI/kld/base/kldbase");
	require("../res/js/exif");
	var PhotoSwipe = require("../res/photoswipe/js/photoswipe");
	var PhotoSwipeUI_Default = require("../res/photoswipe/js/photoswipe-ui-default");
	require("css!../res/photoswipe/css/photoswipe").load();
	require("css!../res/photoswipe/css/default-skin/default-skin").load();
	var wxAPI = require("$UI/kld/base/wxAPI");
	if(window.kldCfg.isWx==false){
	    require("$UI/system/lib/cordova/cordova");
	    require("cordova!cordova-plugin-camera");// 调用摄像头类
		require("cordova!cordova-plugin-file");// 本地文件上传类
		require("cordova!cordova-plugin-file-transfer");// 文件上传转换类
	}
	/*require("css!$UI/system/components/justep/dataTables/css/dataTables.bootstrap").load();
	require("css!$UI/system/components/justep/dataTables/css/responsive.dataTables").load();
	require("css!$UI/system/components/justep/dataTables/css/responsive.bootstrap").load();*/
	
	var isSaved = false;
    var parentNode = $('body').find('.window').get(0);
	var Model = function() {
		this.callParent();
		var user = window.kldCfg.Dd.user;
		var br =  user.branch;
		var brtp = br.brtp;
		this.showSrv = justep.Bind.observable(brtp=='保险公司'||brtp=='汽修单位');
		this.showInsur = justep.Bind.observable(brtp=='收件服务商'||brtp=='汽修单位');
		this.showGar = justep.Bind.observable(brtp=='保险公司'||brtp=='收件服务商');
		this.rowCnt = 0 ;
		this.enableDsy = justep.Bind.observable(true);
		this.canSave = justep.Bind.observable(false);
		//this.canSubmit = justep.Bind.observable(false);
		this.canScan = justep.Bind.observable(false);
		this.showSMS = justep.Bind.observable(false);
	};

    Model.prototype.getChanged = function(json){
    	var ret={
    			add:[],
    			upd:[],
    			del:[]
    	};
    	if(json){
    		var rows = json.rows;
    		for(var i=0;i<rows.length;i++){
    		    if(rows[i].userdata.isModified||rows[i].userdata.recordState=='delete'){
    		        var obj = {
		    			id : rows[i].userdata.id.value
		    		};
		    		var key = null;
    		    	switch(rows[i].userdata.recordState){
    		    		case 'new':
	    		    		for(key in rows[i]){
				    			if(key=='userdata') continue;
			    				if(typeof rows[i][key].value != 'undefined'){
			    					obj[key]=rows[i][key].value;
			    				}
				    		}
    		    			ret.add.push(obj);
    		    			break;
    		    		case 'edit':
    		    		    for(key in rows[i]){
				    			if(key=='userdata') continue;
				    			if(rows[i][key].changed==1)
				    				obj[key]=rows[i][key].value;
				    		}
    		    			ret.upd.push(obj);
    		    			break;
    		    		case 'delete':
    		    			ret.del.push(obj);
    		    			break;
    		    	}
    		    	if(typeof obj.isvalue != 'undefined'){
    		    		obj.isvalue = obj.isvalue==1?'是':'否';
    		    	}
    		    	if(typeof obj.yydt != 'undefined'){
	    		    	var dt = justep.Date.fromString(obj.yydt,'yyyy-MM-ddThh:mm:ss.fffZ');
	    		    	obj.yydt = justep.Date.toString(dt,'yyyy-MM-dd hh:mm:ss');
    		    	}
    		    }
    		}
    	}
    	return ret;
    };    

	
	Model.prototype.btnSaveClick = function(event){
        this.doSave(false);
	};
		

	Model.prototype.btnSubmitClick = function(event) {
	    this.doSave(true);
	};
	Model.prototype.doSave = function(isSubmit) {
	
		var me = this;
		//1.检查订单主信息
		var orderData = this.comp('orderData');
		var srv =  orderData.getValue('srv');
		var insur = orderData.getValue('insur');
		var dsy = orderData.getValue('dsy');
		var dtlData = me.comp('orderDtlData');
		var lastMonths = window.kldCfg.lastMonths;
		if(isSubmit){
			if(kldBase.isEmpty(srv)){
				kldBase.showMsg('尚未选择回收单位!');
				return;
			}
			if(kldBase.isEmpty(insur)){
				kldBase.showMsg('尚未选择保险公司!');
				return;
			}
			if(kldBase.isEmpty(dsy)){
				kldBase.showMsg('尚未选择查勘员!');
				return;
			}
			var accno = orderData.getValue('accno');
			var plateno = orderData.getValue('plateno');
			var carmodel = orderData.getValue('carmodel');
			if(kldBase.isEmpty(accno)){
				kldBase.showMsg('缺少报案号!');
				return;
			}
			if(kldBase.isEmpty(plateno)){
				kldBase.showMsg('缺少车牌号!');
				return;
			}
			if(kldBase.isEmpty(carmodel)){
				kldBase.showMsg('缺少车型名称!');
				return;
			}
			var garage = orderData.getValue('garage');
			var garlxr = orderData.getValue('garlxr');
			var gartel = orderData.getValue('gartel');
			var yydt = orderData.getValue('yydt');
			var Dd = window.kldCfg.Dd;
			if(Dd.branch.brtp==='收件服务商'){
				if(kldBase.isEmpty(garage)){
					kldBase.showMsg('尚未选择汽修单位!');
					return;
				}
				if(kldBase.isEmpty(garlxr)){
					kldBase.showMsg('缺少汽修联系人!');
					return;
				}
				if(kldBase.isEmpty(gartel)){
					kldBase.showMsg('缺少汽修联系方式!');
					return;
				}
			}
			if(kldBase.isEmpty(yydt)){
				kldBase.showMsg('尚未选择预约日期!');
				return;
			}
			//2.检查明细项
			
			var dtlCheckOK = true;
			dtlData.each(function(params){
			    var partname = params.row.row.partname.value.latestValue;
				if(kldBase.isEmpty(partname)){
				    kldBase.showMsg('第'+(params.index+1)+'行明细缺少配件名称!');
				    dtlCheckOK = false;
					params.cancel = true;
				}
			});
			if(!dtlCheckOK) return;
			
			//if (isSaved)	return;
			//isSaved = true;
		}
        var act = this.params.act;
		if(act == 'add'){
			this.comp('orderData').setValue('status', isSubmit?'已提交':'已暂存');
		}else{
			if(isSubmit&& this.comp('orderData').getValue('status')=='已暂存') this.comp('orderData').setValue('status','已提交');
		}
        var mst = {};
        var json = orderData.toJson(true);
        if(json.rows.length>0){
            mst = me.getChanged(json);
            if(me.params.act=='add'){
            	mst = mst.add[0];
            }else{
            	mst = mst.upd[0];
            	mst.id = orderData.getValue('id');
            	mst.oldver = orderData.getValue('oldver') ;
            }
        }else{
        	if(me.params.act=='upd'){
        		mst.id = orderData.getValue('id');
            	mst.oldver = orderData.getValue('oldver') ;
        	}
        }
		var dtls = me.getChanged(dtlData.toJson(true));
		var atts = me.getChanged(me.comp("orderImgData").toJson(true));
		
		var order = {
		    isSubmit : isSubmit,
		    checkSdt : justep.Date.toString(justep.Date.decrease(new Date(),lastMonths,'m'),'yyyy-MM-dd'),
			act : me.params.act,
			mst : mst,
			dtlAdd : dtls.add,
		    dtlUpd : dtls.upd,
		    dtlDel : dtls.del,
		    attAdd : atts.add,
		    attUpd : atts.upd,
		    attDel : atts.del
		};
		
		//console.log(order);
		//me.comp("btnSave").set({disabled : true});
		//me.comp("btnSubmit").set({disabled : true});
		if(isSubmit){
			var lgmsg = new MsgDialog({
				parentNode : parentNode
			});
			lgmsg.on('onClose', function(event) {
				if(event.button == 'ok'){
				    //3.检查报案号车牌号的唯一性
					var chkParams = {
						id : orderData.getValue('id'),
						insurid : orderData.getValue('insurid'),
						srvid : orderData.getValue('srvid'),
						accno : orderData.getValue('accno'),
						plateno : orderData.getValue('plateno'),
						checkSdt : justep.Date.toString(justep.Date.decrease(new Date(),lastMonths,'m'),'yyyy-MM-dd')
					};
					kldBase.sendRequest({
						url : "/mobile",
						action : "checkByAccnoPlateno",
						params : chkParams,
						success : function(res) {
						    var msg = '该保险公司最近'+Dd.lastMonths+'个月内,有重复存在.'+res.rows+',请仔细核对!';
							me.saveOrder(order,isSubmit,function(){
								if(res.rows !='' ) kldBase.showMsg(msg,5000);
							});
						},
						error:function(msg, xhr){
							kldBase.showError(msg);
						}
					});
					
				}
			}, this);
			lgmsg.show({
				type : 'OKCancel',
				title : '提示',
				message : '确认提交订单吗?',
				width:''
			});
		}else{
			me.saveOrder(order,isSubmit);
		}
	};
	
Model.prototype.saveOrder = function(order,isSubmit,cb){
    var me = this;
	kldBase.sendRequest({
			url : "/mobile",
			action : "saveOrder",
			params : {
				rows: JSON.stringify(order),
			},
			success : function(res) {
				isSaved = false;
				//me.comp("btnSave").set({disabled : false});
				//me.comp("btnSubmit").set({disabled : false});
				var oldact = me.params.act;
				if(me.params.act=='add'){
					me.params.act = 'upd';
					me.params.id = res.rows.mst.id;
				}
				var msg = isSubmit? '提交成功!' : '保存成功!';
				kldBase.showMsg(msg);
				if(cb) cb();
				me.comp("windowReceiver1").windowEnsure({act : oldact});
			},
			error:function(msg, xhr){
				kldBase.showError(msg);
				isSaved = false;
				//me.comp("btnSave").set({disabled : false});
				//me.comp("btnSubmit").set({disabled : false});
			}
		});
};	
Model.prototype.uploadFile = function(file){
	    	var me = this;
	        //图片方向角 added by lzk 
			var Orientation = null; 
			//获取照片方向角属性，用户旋转控制 
	        EXIF.getData(file, function() { 
	            //alert(EXIF.pretty(this)); 
	            //alert(EXIF.getTag(this, 'Orientation'));  
	            EXIF.getAllTags(this);  
	            Orientation = EXIF.getTag(this, 'Orientation');
	            console.log('---------Orientation='+Orientation); 
	            //return; 
	        });
	        
			var rotateImg = function(img, direction,canvas) { 
				    //对图片旋转处理 added by lzk www.bcty365.com   
			        //alert(img); 
			        //最小与最大旋转方向，图片旋转4次后回到原方向   
			        var min_step = 0;   
			        var max_step = 3;   
			        //var img = document.getElementById(pid);   
			        if (img == null)return;   
			        //img的高度和宽度不能在img元素隐藏后获取，否则会出错   
			        var height = img.height;   
			        var width = img.width;   
			        //var step = img.getAttribute('step');   
			        var step = 2;   
			        if (step == null) {   
			            step = min_step;   
			        }   
			        if (direction == 'right') {   
			            step++;   
			            //旋转到原位置，即超过最大值   
			            step > max_step && (step = min_step);   
			        } else {   
			            step--;   
			            step < min_step && (step = max_step);   
			        }   
			        //img.setAttribute('step', step);   
			        /*var canvas = document.getElementById('pic_' + pid);   
			        if (canvas == null) {   
			            img.style.display = 'none';   
			            canvas = document.createElement('canvas');   
			            canvas.setAttribute('id', 'pic_' + pid);   
			            img.parentNode.appendChild(canvas);   
			        }  */ 
			        //旋转角度以弧度值为参数   
			        var degree = step * 90 * Math.PI / 180;   
			        var ctx = canvas.getContext('2d');   
			        switch (step) {   
			            case 0:   
			                canvas.width = width;   
			                canvas.height = height;   
			                ctx.drawImage(img, 0, 0);   
			                break;   
			            case 1:   
			                canvas.width = height;   
			                canvas.height = width;   
			                ctx.rotate(degree);   
			                ctx.drawImage(img, 0, -height);   
			                break;   
			            case 2:   
			                canvas.width = width;   
			                canvas.height = height;   
			                ctx.rotate(degree);   
			                ctx.drawImage(img, -width, -height);   
			                break;   
			            case 3:   
			                canvas.width = height;   
			                canvas.height = width;   
			                ctx.rotate(degree);   
			                ctx.drawImage(img, -width, 0);   
			                break;   
			        }   
			    }   
	        var compressImage = function(path, params, callback) {
	            /**
	             * 图片压缩（利用canvas）
	             * @param  path     图片路径
	             * @param  params      压缩配置width,height,quality，不传则按比例压缩
	             * @param  callback  回调函数
	             */
                var img = new Image();
                img.onload = function() {
                    var that = this;
                    // 默认压缩后的图片尺寸
                    var w = 576, h = 768;
                    //var w = 1080, h = 1440;
                    //var w = 2160, h = 2880;
                    
                    var expectWidth = this.naturalWidth; 
	                var expectHeight = this.naturalHeight; 
	                 
	                if (this.naturalWidth > this.naturalHeight && this.naturalWidth > w) { 
	                    expectWidth = w; 
	                    expectHeight = expectWidth * this.naturalHeight / this.naturalWidth; 
	                } else if (this.naturalHeight > this.naturalWidth && this.naturalHeight > h) { 
	                    expectHeight = h; 
	                    expectWidth = expectHeight * this.naturalWidth / this.naturalHeight; 
	                } 
	                var canvas = document.createElement("canvas"); 
	                var ctx = canvas.getContext("2d"); 
	                canvas.width = expectWidth; 
	                canvas.height = expectHeight; 
	                ctx.drawImage(this, 0, 0, expectWidth, expectHeight); 

                    // 不特别指定的话默认图片质量为0.7
                    var quality = 0.7;
                    if (params.quality && params.quality <= 1 && params.quality > 0) {
                        quality = params.quality;
                    }
                            
                    var base64 = null;
	                //修复ios     
	                if (navigator.userAgent.match(/iphone/i)) { 
	                    console.log('iphone'); 
	                    //alert(expectWidth + ',' + expectHeight); 
	                    //如果方向角不为1，都需要进行旋转 added by lzk 
	                    if(Orientation != "" && Orientation != 1){ 
	                        console.log('旋转处理'); 
	                        switch(Orientation){ 
	                            case 6://需要顺时针（向左）90度旋转 
	                                console.log('需要顺时针（向左）90度旋转'); 
	                                rotateImg(this,'left',canvas); 
	                                break; 
	                            case 8://需要逆时针（向右）90度旋转 
	                                console.log('需要顺时针（向右）90度旋转'); 
	                                rotateImg(this,'right',canvas); 
	                                break; 
	                            case 3://需要180度旋转 
	                                console.log('需要180度旋转'); 
	                                rotateImg(this,'right',canvas);//转两次 
	                                rotateImg(this,'right',canvas); 
	                                break; 
	                        }        
	                    } 
	                    base64 = canvas.toDataURL(file.type, quality);
	                }else if (navigator.userAgent.match(/Android/i)) {
	                    // 修复android 
	                    console.log('android');
	                    //这个有错，那就不修正了
	                    //var encoder = new JPEGEncoder(); 
	                    //base64 = encoder.encode(ctx.getImageData(0, 0, expectWidth, expectHeight), 80);
	                    base64 = canvas.toDataURL(file.type, quality); 
	                }else{ 
	                    console.log('other-mobile');
	                    if(Orientation !== "" && Orientation !== 1){ 
	                        //alert('旋转处理'); 
	                        switch(Orientation){ 
	                            case 6://需要顺时针（向左）90度旋转 
	                                console.log('需要顺时针（向左）90度旋转'); 
	                                rotateImg(this,'left',canvas); 
	                                break; 
	                            case 8://需要逆时针（向右）90度旋转 
	                                console.log('需要顺时针（向右）90度旋转'); 
	                                rotateImg(this,'right',canvas); 
	                                break; 
	                            case 3://需要180度旋转 
	                                console.log('需要180度旋转'); 
	                                rotateImg(this,'right',canvas);//转两次 
	                                rotateImg(this,'right',canvas); 
	                                break; 
	                        }        
	                    } 
	                    base64 = canvas.toDataURL(file.type, quality);
	                } 
                    callback(base64);
                };
                img.src = path;
            };
            /*
            //统一变成上传base64,不再需要这个了。2020.03.05 mmc
			var processData = function(dataurl,filename){
                //将base64转换为文件
            	var arr = dataurl.split(','), //mime = arr[0].match(/:(.*?);/)[1],
				bstr = atob(arr[1]), n = bstr.length, u8arr =new Uint8Array(n);
            	while(n--){
            		u8arr[n] = bstr.charCodeAt(n);
            	}
            	return new window.File([u8arr], filename,{type:file.type});
            };*/
			
            var uploadPic = function(image_data, image_name) {
                /* 上传图片 */
                kldBase.sendRequest({
					url : "/mobile",
					action : "addImageBase64",
					params : {
						needMask : me.needMask,
						locInf : me.locInf.locInf,
						lng : me.locInf.lng,
						lat : me.locInf.lat,
						image_data : image_data,
						image_name : image_name
					},
					success : function(res) {
					    if(res.success === true) {
                            me.add2DataRow(JSON.parse(res.rows));              
                        }else {
                            alert('文件上传失败！'); 
                        }
					}
				});
            };
		    var reader = new FileReader();
            reader.onload = function(e) {
                var image_base64 = this.result;
                console.log('-----------image_base64----------------');
                //console.log(image_base64);
                //压缩并上传图片
                compressImage(image_base64,
            		{
                		quality: 1.0,
            		}, function(base64Codes) {
                        //var bl = processData(base64Codes, file.name);
                        //uploadPic(bl);
                        uploadPic(base64Codes, file.name);
            		}
                );
            };
            reader.readAsDataURL(file);
            
	};
	
	Model.prototype.modelLoad = function(event) {
		var me = this;
		var doChange = function(fileUpload){
			var files = fileUpload.files;
	        for (var i = 0; i < files.length; i++) {
	            var file = files[i];
	            if (file.type.indexOf("image") === 0) {
	                if (file.size >= 1024 * 1024 * 50) {
	                    alert('图片大小过大，应小于50M');
	                } else {
	                    me.uploadFile(file);
	                }
	            } else {
	                alert('文件"' + file.name + '"不是图片类型');
	                break;
	            }
	        }
		};
		if(window.kldCfg.isWx){
		    $(me.getElementByXid("fileUpload")).show();
			$(me.getElementByXid("fileUpload")).change(function() {
			    console.log('---------fileUpload changed!--------');
				console.log('---------isWx='+window.kldCfg.isWx);
			    me.needMask = true;
		        doChange(this);
		        this.value = '';
		    });
	    }else{
	    	$(me.getElementByXid("fileUpload")).hide();
	    }
	    $(me.getElementByXid("fileUpload2")).change(function() {
	        me.needMask = false;
	    	doChange(this);
	    	this.value = '';
	    });
	};

    Model.prototype.add2DataRow =function(imgRows){
        //加入附件缓存
        var me = this;
    	var objs = [];
    	var cnt = me.comp('orderImgData').getCount();
    	for(var i = 0 ; i<imgRows.length;i++){
    	    var id = (cnt+i+1)*(-1);
        	var obj = {
        	    id : id,
				oid : me.imgParams.oid,
				dtlid: me.imgParams.dtlid,
				tp : '定损照片',
				name : imgRows[i].fileName,
				sizekb : imgRows[i].sizekb,
				sizewh : imgRows[i].sizewh,
				path : imgRows[i].fileUrl,
				paththumb : imgRows[i].thumbUrl
			};
			objs.push(obj);
    	}
		var options = {
			defaultValues : objs
		};
    	me.comp('orderImgData').newData(options);
    	me.comp('orderImgList').refresh(true);
    	//更新照片数
    	var dtlData = me.comp('orderDtlData1');
		var curRow = dtlData.getCurrentRow();
		dtlData.setValue('attcount',dtlData.getValue('attcount',curRow)+imgRows.length,curRow);
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

    
    Model.prototype.contentOrderActive = function(event){
    	//if(window.kldCfg.isDebug)  console.log('----------contentOrderActive-----------');
    	
	};
	
	Model.prototype.contentOrderDtlActive = function(event){
		//if(window.kldCfg.isDebug)  console.log('----------contentOrderDtlActive-----------');
	};
    
	Model.prototype.contentOrderImgActive = function(event){
		//if(window.kldCfg.isDebug)  console.log('----------contentOrderImgActive-----------');
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
	    console.log('---------------initPhotoSwipe-------------------');
	    var me = this;
	    
	    //var pswpElement = document.querySelectorAll('.pswp')[0];
	    var pswpElement = $('#gallery_neworder')[0];
		var options = {
		    index: idx,
		    history: false,
		    loop : false,
		    shareEl : false,
		    deleteEl : true,
		    downloadEl : window.kldCfg.isWx==false
		};
		var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, sliders, options);
		/*
		 * 动态计算图片的宽高值，性能略有影响
		gallery.listen('gettingData', function(index, item) {
		    if( item.w==0 && typeof item.loading == 'undefined' ){
				var img = new Image();
			    img.onload = function(){
			    	item.w = img.naturalWidth;
			    	item.h = img.naturalHeight;
			    	gallery.updateSize(true);
			    };
			    img.src = item.src;
		    }
		});*/
		gallery.onDeleteItem = function(){
		    //var parentNode = $('body').find('#gallery').get(0);
		    var lgmsg = new MsgDialog({
					parentNode : pswpElement
				});
			lgmsg.on('onClose', function(event) {
				if(event.button == 'ok'){
					var idx = gallery.getCurrentIndex();
					var  rowId = gallery.currItem.rowId;
					if(gallery.items.length==1){
					    //最后一张不能删除,只要关闭即可
					    gallery.close();
					}else{
						if(idx==gallery.items.length -1) //如果是最后一张，那么删除前需要先滑动到前一张
							gallery.goTo(idx-1);
						gallery.items.splice(idx,1);
						gallery.invalidateCurrItems();
						gallery.updateSize(true);
						gallery.ui.update();
					}
					
					//移除照片
					var imgData = me.comp('orderImgData');
					imgData.deleteData(imgData.getRowByID(rowId));
					me.comp('orderImgList').refresh(true);
					//修改照片数
					var dtlData = me.comp('orderDtlData1');
					var curRow = dtlData.getCurrentRow();
					dtlData.setValue('attcount',dtlData.getValue('attcount',curRow)-1,curRow);
				}
			}, this);
			lgmsg.show({
				type : 'OKCancel',
				title : '提示',
				message : '确认删除这张照片吗?',
				width:''
			});
		};
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
		console.log('---------------image1Click----------------');
		var me = this;
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
	    var dtlData = me.comp('orderDtlData1');
	    var curRow = dtlData.getCurrentRow().toJson();
		this.initPhotoSwipe(sliders,idx);
	};
	

	Model.prototype.telRender = function(event){
	    if(event.value&&event.value!==''){
	    	event.html = '<a href="tel:'+event.value+'">拨打电话:'+event.value+'</a>';
	    }
	};

	Model.prototype.btnChooseSrvClick = function(event){
	    var shortname = this.comp('orderData').getValue('srv');
		this.comp("brDialog").open({
		    src : require.toUrl('./brlist.w'),
	    	params : {
	    		brtp : '收件服务商',
	    		shortname : shortname
	    	}
	    });
	};
	
	Model.prototype.btnChooseInsurClick = function(event){
		var shortname = this.comp('orderData').getValue('insur');
		this.comp("brDialog").open({
		    src : require.toUrl('./brlist.w'),
	    	params : {
	    		brtp : '保险公司',
	    		shortname : shortname
	    	}
	    });
	};
	
	Model.prototype.btnChooseGarageClick = function(event){
	    var shortname = this.comp('orderData').getValue('garage');
		this.comp("brDialog").open({
		    src : require.toUrl('./brlist.w'),
	    	params : {
	    		brtp : '汽修单位',
	    		shortname : shortname
	    	}
	    });
	};
	
	Model.prototype.modelParamsReceive = function(event){
	    console.log('-------neworder--modelParamsReceive-------');
	    //this.comp("btnSave").set({disabled : false});
		//this.comp("btnSubmit").set({disabled : false});
	};
	Model.prototype.doInit = function(){
	    var Dd = window.kldCfg.Dd;
		this.rowCnt = 0 ;
		var user = Dd.user;
		var br =  user.branch;
		var brtp = br.brtp;
		this.showSrv.set(brtp=='保险公司'||brtp=='汽修单位');
		this.showInsur.set(brtp=='收件服务商'||brtp=='汽修单位');
		this.showGar.set(brtp=='保险公司'||brtp=='收件服务商');
		
		var act = this.params.act;
		this.comp("orderData").clear();
		this.comp("orderDtlData").clear();
		this.comp("orderDtlData1").clear();
		this.comp("orderImgData").clear();
		
		if(act=='add'){
		    this.imgParams = {
				oid : 0,
				dtlid : 0
			};
			//预约日期默认为第二天下午2点
			var yydts = justep.Date.toString(justep.Date.increase(new Date(),1,'d'),"yyyy-MM-dd")+' 14:00:00';
			console.log('---yydt='+yydts);
			var yydt = justep.Date.fromString(yydts, "yyyy-MM-dd hh:mm:ss");
			var obj = {
			    id  : 0 ,
			    status : '已暂存',
				isurgent : '否',
				isdisp : '未派单',
				yydt : yydt
			};
			switch(brtp){
				case '保险公司':
				    obj=$.extend(obj,{
						insurid : br.id,
						insur : br.shortname,
						dsyid : user.id,
						dsy : user.name,
						dsytel : user.tel
					});
					var srvObj = this.getFirstOneSrv();
				    if(srvObj){
				    	obj.srvid = srvObj.srvid;
				    	obj.srv = srvObj.srv;
				    }
				    this.showSMS.set(br.brcatg=='大地保险');
					break;
				case '收件服务商':
					obj=$.extend(obj,{
						srvid : br.id,
						srv : br.shortname,
						dept : user.dname,
						srvopr : user.name
					});
					if(Dd.user.auth.indexOf('保险代理')>=0){
						obj.dsyid = user.id;
						obj.dsy = user.name;
						obj.dsytel = user.tel;
						this.enableDsy.set(false); 
					}
					break;
				case '汽修单位':
					obj=$.extend(obj,{
						garageid : br.id,
						garage : br.shortname,
						garaddr : br.locateaddr||br.braddr,
						garlxr : user.name,
						gartel : user.tel
					});
					var srvObj = this.getFirstOneSrv();
				    if(srvObj){
				    	obj.srvid = srvObj.srvid;
				    	obj.srv = srvObj.srv;
				    }
					break;
			}
			if(this.params.orderObj){
				obj = $.extend(obj,this.params.orderObj);
				if(brtp == '收件服务商'){
					obj.dept = user.dname;
				    obj.srvopr =user.name;
				    if(Dd.user.auth.indexOf('保险代理')>=0){
						obj.dsyid = user.id;
						obj.dsy = user.name;
						obj.dsytel = user.tel; 
						this.enableDsy.set(false);
					}
				}
			}
			var options = {
				defaultValues : [ obj ]
			};
			this.comp("orderData").newData(options);
			var status = this.comp("orderData").getValue('status');
			var isdisp = this.comp("orderData").getValue('isdisp');
			this.canSave.set(isdisp!='已关闭'&&(status=='已暂存'||!status));
			//明细也自动插入一行
			obj = {
			    id  : this.rowCnt ,
			    oid : obj.id,
			    status : '未收',
				isvalue : 0,
				price : 0
			};
			this.rowCnt++;
			options = {
				defaultValues : [ obj ]
			};
			this.comp("orderDtlData").newData(options);
			
		}else{
		    this.imgParams = {
				oid : this.params.id,
				dtlid : 0
			};
			this.comp("orderData").refreshData();
			this.comp("orderDtlData").refreshData();
			this.comp("orderDtlData1").refreshData();
			this.comp("orderImgData").refreshData();
		}
		
		var orderContents = this.comp('orderContents');
		if(orderContents.getActiveIndex()!==0){
			orderContents.to(0);
		}
		
	};
	
	
	Model.prototype.brDialogReceived = function(event){
		var orderData = this.comp("orderData");
		var retObj = event.data;
		console.log('--------brDialogReceived-------');
		//console.log(retObj);
		switch(retObj.brtp){
			case '收件服务商':
				orderData.setValue('srvid', retObj.id);
				orderData.setValue('srv', retObj.shortname);
				orderData.setValue('srvType', retObj.brcatg);
				break;
			case '保险公司':
			    orderData.setValue('insurid', retObj.id);
				orderData.setValue('insur', retObj.shortname);
				orderData.setValue('insurType', retObj.brcatg);
				this.showSMS.set(retObj.brcatg=='大地保险');
				break;
			case '汽修单位':
				orderData.setValue('garageid', retObj.id);
				orderData.setValue('garage', retObj.shortname);
				orderData.setValue('garType', retObj.brcatg);
				var addr = retObj.locateaddr || retObj.braddr;
				orderData.setValue('garaddr', addr);
				//刷新联系人
				break;
		}
		
	};
	
	Model.prototype.btnChooseGarlxrClick = function(event){
	    var orderData = this.comp("orderData");
		var lxr = orderData.getValue('garlxr');
		var bid = orderData.getValue('garageid')||-1;
		this.comp("lxrDialog").open({
		    src : require.toUrl('./userlist.w'),
	    	params : {
	    		brtp : '汽修单位',
	    		lxr : lxr,
	    		bid : bid
	    	}
	    });
	};
	
	Model.prototype.btnChooseInsurlxrClick = function(event){
		var orderData = this.comp("orderData");
		var lxr = orderData.getValue('dsy');
		var bid = orderData.getValue('insurid')||-1;
		this.comp("lxrDialog").open({
		    src : require.toUrl('./userlist.w'),
	    	params : {
	    		brtp : '保险公司',
	    		lxr : lxr,
	    		bid : bid
	    	}
	    });
	};
	Model.prototype.lxrDialogReceived = function(event){
		var orderData = this.comp("orderData");
		var retObj = event.data;
		console.log('--------lxrDialogReceived-------');
		//console.log(retObj);
		switch(retObj.brtp){
			case '保险公司':
				orderData.setValue('dsyid', retObj.id);
				orderData.setValue('dsy', retObj.name);
				orderData.setValue('dsytel', retObj.tel);
				break;
			case '汽修单位':
				orderData.setValue('garlxr', retObj.name);
				orderData.setValue('gartel', retObj.tel);
				//刷新联系人
				break;
		}
	};
	
	Model.prototype.modelActive = function(event){

	};
	
	Model.prototype.btnAddRowClick = function(event){
		var orderDtlData = this.comp("orderDtlData");
		var obj = {
		    id  : -1*(this.rowCnt++) ,
		    status : '未收',
			isvalue : 0,
			price : 0
		};
		obj.oid = this.params.act=='upd' ?this.params.id:0;
		var options = {
		    defaultValues : [obj]
		};
		orderDtlData.newData(options);
	};
	
	Model.prototype.btnDelClick = function(event){
		var orderDtlData = this.comp("orderDtlData");
		var row = orderDtlData.getCurrentRow();
		var rowCount = orderDtlData.getCount();
		if(row && rowCount>1){
			var lgmsg = new MsgDialog({
					parentNode : parentNode
				});
			lgmsg.on('onClose', function(event) {
				if(event.button == 'ok'){
					orderDtlData.deleteData(row);
				}
			}, this);
			lgmsg.show({
				type : 'OKCancel',
				title : '提示',
				message : '确认删除该配件吗?',
				width:''
			});
			
		}
	};
	
	Model.prototype.btnInsertClick = function(event){
		var orderDtlData = this.comp("orderDtlData");
		var row = orderDtlData.getCurrentRow();
		var idx = orderDtlData.getRowIndex(row);
		var obj = {
		    id  : -1*(this.rowCnt++) ,
		    status : '未收',
			isvalue : 0,
			price : 0
		};
		if(this.params.act=='upd') obj.oid = this.params.id;
		var options = {
		    index : idx, 
			defaultValues : [obj]
		};
		orderDtlData.newData(options);
	};
	
	
	Model.prototype.orderDataCustomRefresh = function(event){
		if(window.kldCfg.isDebug)  console.log('----------orderDataCustomRefresh-----------');
		var me = this;
		
		var Dd = window.kldCfg.Dd;
		var user = Dd.user;
		var br =  user.branch;
		var brtp = br.brtp;
		
		var data = me.comp("orderData");
		kldBase.sendRequest({
			url : "/mobile",
			action : "getOrder",
			params:{
			    id: this.params.id
			},
			success : function(res) {
				
				
				data.loadData(res.rows);
				data.first();
				var status = data.getValue('status');
				var isdisp = data.getValue('isdisp');
				var insur =  data.getValue('insur');
				me.canSave.set(isdisp!='已关闭'&&(status=='已暂存'||!status));
				
				switch(brtp){
					case '保险公司':
						me.showSMS.set(br.brcatg=='大地保险');
						break;
					case '收件服务商':
						console.log('----------修改---------insur='+insur);
						if(!kldBase.isEmpty(insur)){
							me.showSMS.set(insur.indexOf('大地')>=0);
						}
						break;
				}
			}
		});
	};
	
	Model.prototype.orderDtlDataCustomRefresh = function(event){
		if(window.kldCfg.isDebug)  console.log('----------orderDtlDataCustomRefresh-----------');
		var me = this;
		var data = this.comp("orderDtlData");
		kldBase.sendRequest({
			url : "/mobile",
			action : "getOrderdtl",
			params : {
				oid : this.params.id
			},
			success : function(res) {
			    var append = event.options && event.options.append;
			    for(var i=0; i<res.rows.length; i++){
			    	var r = res.rows[i];
			    	r.isvalue = r.isvalue=='是'?1:0;
			    }
				data.loadData(res, append);
			    //data.first();
			    me.comp("dtlGrid").refresh();
			}
		});
	};
	Model.prototype.orderDtlData1CustomRefresh = function(event){
		if(window.kldCfg.isDebug)  console.log('----------orderDtlData1CustomRefresh-----------');
		var me = this;
		var data = this.comp("orderDtlData1");
		kldBase.sendRequest({
			url : "/mobile",
			action : "getOrderdtl4Attcount",
			params : {
				tp : '定损照片',
				oid : me.params.id||341
			},
			success : function(res) {
			    var append = event.options && event.options.append;
				data.loadData(res, append);
			    data.first();
			    me.comp("tblOrderImg").refresh();
			}
		});
	};
	
	
	Model.prototype.tblOrderImgRowSelect = function(event){
	    var me = this;
		console.log('----------tblOrderImgRowSelect-----------');
		var dtlData = event.row.data;
		var curRow = dtlData.getCurrentRow();
		var row = curRow.toJson();
		this.imgParams = {
			oid : row.oid.value,
			dtlid : row.userdata.id.value,
			partname : row.partname.value
		};
		this.comp('orderImgList').refresh(true);
		me.locInf = {
            locInf : '',
        	lng : 0,
        	lat : 0
         };
	};
	
	Model.prototype.orderImgDataCustomRefresh = function(event){
		console.log('----------orderImgDataCustomRefresh-----------');
		var me = this;
		
		kldBase.sendRequest({
			url : "/mobile",
			action : "getOrderImg",
			params : {
				usePaging:false, 
				limit : event.limit,
				start : event.offset,
				tp : '定损照片',
				oid : me.params.id 
			},
			success : function(res) {
			     var append = event.options && event.options.append;
			     event.source.loadData(res, append);
			     me.comp('orderImgList').refresh(true);
			     
			}
		});
	};
	Model.prototype.imgDataCustomRefresh = function(event){
	    var me = this;
		event.source.clear();
		var data = this.comp("orderImgData");
		var rows = data.find(['dtlid'],[me.imgParams.dtlid], false, false, false, false);
		var jsonData = {
				'@type' : "table",
				rows : [],
				userdata : {
					'sys.count' : null
				}
		};
		for(var i =0 ;i <rows.length; i++){
		    jsonData.rows.push(rows[i].toJson());
		}
		event.source.loadData(jsonData, true);
	};
	
	
	Model.prototype.orderDtlDataAfterNew = function(event){
		console.log('------------orderDtlDataAfterNew----------------------');
		var newRow =  event.options.defaultValues[0];
		console.log(newRow);
		var data = this.comp("orderDtlData1");
		var obj = {
			    id  : newRow.id ,
			    oid : newRow.oid,
			    status : newRow.status,
				partname : newRow.partname,
				attcount : 0
		};
		var options = {
			defaultValues : [ obj ]
		};
		data.newData(options);
	};
	
	Model.prototype.orderDtlDataAfterDelete = function(event){
		console.log('------------orderDtlDataAfterDelete----------------------');
		//console.log(event.deleteRows);
		var id = event.deleteRows[0].row.id.value.latestValue;
		var data = this.comp("orderDtlData1");
		var row = data.find(['id'],[id],true,false,false);
		if(row){
			data.deleteData(row);
		}else{
			console.log('-----not find,cant del-----');
		}
	};
	
	
	Model.prototype.orderDtlDataValueChanged = function(event){
	    console.log('------------orderDtlDataValueChanged----------------------');
		console.log(event.col+','+event.value);
		if(event.col=='partname'){
			var id = event.row.row.id.value.latestValue;
			var data = this.comp("orderDtlData1");
			var row = data.find(['id'],[id],true,false,false);
			if(row){
				console.log('partname='+event.value);
				data.setValue(event.col,event.value,row[0]);
			}else{
				console.log('-----not find,cant upd-----');
			}
		}
		
	};
	
	Model.prototype.windowReceiver1Receive = function(event){
		console.log('--------windowReceiver1Receive----------');
		wxAPI.doInit(function(){
			console.log('-----------wxAPI is ready---------------');
		});
		this.comp('titleBar1').set({title:this.params.act==='add'?'新增订单':'修改订单'});
		this.doInit();
	};
		
		
	
	Model.prototype.btnCloseClick = function(event){
		this.comp("windowReceiver1").windowCancel();
	};
	
	Model.prototype.getFirstOneSrv = function(){
	    var srvObj = null;
		kldBase.sendRequest({
			url : "/mobile",
			async : false,
			action : "getBranch",
			params : {
				usePaging:true,
				limit : 5,
				start : 0,
				brtp : '收件服务商'
			},
			success : function(res) {
				if(res.rows.length ==1){
					srvObj = {
						srvid : res.rows[0].id,
						srv : res.rows[0].shortname,
						srvname : res.rows[0].brname
					}
				}
			}
		});
		return srvObj;
	};
		
	
	Model.prototype.btnScanClick = function(event){
	    var orderDtlData = this.comp("orderDtlData");
		var row = orderDtlData.getCurrentRow();
		if(row){
			//orderDtlData.setValue('partno', '001', row);
			wxAPI.scanQRCode(function(resultStr){
				//alert('code='+resultStr);
				orderDtlData.setValue('partno', resultStr, row);
			});
		}
		
	};
		
	
	Model.prototype.dtlGridRowClick = function(event){
		this.canScan.set(true);
	};
	Model.prototype.imgCameraClick = function(event){
		//拍照
		console.log('---------imgCameraClicked!--------');
		console.log('---------isWx='+window.kldCfg.isWx);
		if(window.kldCfg.isWx) return;
		
		var picOptions = {
				destinationType : navigator.camera.DestinationType.DATA_URL,
				sourceType : navigator.camera.PictureSourceType.CAMERA,
				saveToPhotoAlbum:true,
			    mediaType : 0,//只选择图片
			    quality : 40,
				targetWidth : 576, //1080,
				targetHeight : 768, //1440,
				correctOrientation : 1
		};
        var me = this;
		navigator.camera.getPicture(onLoadImageSuccess, onLoadImageFail, picOptions);
		// 拍照成功后回调
		function onLoadImageSuccess(imageData) {
			imageData = "data:image/png;base64," + imageData;
			/* 上传图片 */
                kldBase.sendRequest({
					url : "/mobile",
					action : "addImageBase64",
					params : {
						needMask : me.needMask,
						locInf : me.locInf.locInf,
						lng : me.locInf.lng,
						lat : me.locInf.lat,
						image_data : imageData,
						image_name : 'app_camera'
					},
					success : function(res) {
					    //var obj = me.getElementByXid("fileUpload") ; 
					    //obj.outerHTML=obj.outerHTML;
					    if(res.success === true) {
                            me.add2DataRow(JSON.parse(res.rows));              
                        }else {
                            alert('文件上传失败！'); 
                        }
					}
				});
		}
		function onLoadImageFail(error) {
			if(error.indexOf('canceled')<0){
				Util.hint(error, {
					delay : 3000
				});
			}
		}
	};
		
	Model.prototype.btnSmsClick = function(event){
	    var me = this;
		if ($(this.comp("smsPopOver").$domNode).css("display") == "block") {
			this.comp("smsPopOver").hide();
		} else {
		    me.comp('smsInput').val('');
		    me.comp('inputAccno').set({value:''});
	    	me.comp('inputPlateno').set({value:''});
	    	me.comp('inputCarmodel').set({value:''});
	    	me.comp('inputGarage').set({value:'',disabled:false});
	    	me.comp('inputGaraddr').set({value:'',disabled:false});
	    	
			this.comp("smsPopOver").show();
		}
	};
		
	
		
	
	Model.prototype.output10Render = function(event){

	};
	Model.prototype.btnImportClick = function(event){
	    var me = this;
		if(me.smsInfo){
		    var orderData = this.comp('orderData');
		    orderData.setValue('accno',me.comp('inputAccno').value.trim());
			orderData.setValue('plateno',me.comp('inputPlateno').value.trim());
			orderData.setValue('carmodel', me.comp('inputCarmodel').value.trim());
			if(me.smsInfo.garageid&&me.smsInfo.garageid!=0){
			    orderData.setValue('garageid',me.smsInfo.garageid);
			}else{
				orderData.setValue('garageid',0);
			}
			orderData.setValue('garage',me.comp('inputGarage').value.trim());
			orderData.setValue('garaddr',me.comp('inputGaraddr').value.trim());
		}
		if ($(this.comp("smsPopOver").$domNode).css("display") == "block") {
			this.comp("smsPopOver").hide();
		} else {
			this.comp("smsPopOver").show();
		}
	};
	
	Model.prototype.btnAnalyClick = function(event){
	    var me  = this;
	    
	    var smsTxt = me.comp('smsInput').val().trim();
		if(kldBase.isEmpty(smsTxt)) return;
		var insurType =  '大地保险';
		me.smsInfo = null;
		me.comp('inputAccno').set({value:''});
    	me.comp('inputPlateno').set({value:''});
    	me.comp('inputCarmodel').set({value:''});
   		me.comp('inputGarage').set({value:''});
   		me.comp('inputGaraddr').set({value:''});
		kldBase.sendRequest({
			url : "/mobile",
			action : "analySMS",
			params : {
				smsTxt:smsTxt,
				insurType:insurType
			},
			success : function(res) {
			    console.log(res);
			    if(res.success){
			    	var smsInfo = res.rows;
			    	me.comp('inputAccno').set({value:smsInfo.accno});
			    	me.comp('inputPlateno').set({value:smsInfo.plateno});
			    	me.comp('inputCarmodel').set({value:smsInfo.carmodel});
			    	if(smsInfo.garageid&&smsInfo.garageid!=0){
			    		me.comp('inputGarage').set({value:smsInfo.garage,disabled:true});
			    		me.comp('inputGaraddr').set({value:smsInfo.garaddr,disabled:true});
			    	}else{
			    		me.comp('inputGarage').set({value:smsInfo.garage,disabled:false});
			    		me.comp('inputGaraddr').set({value:smsInfo.garaddr,disabled:false});
			    	}
			    	me.smsInfo = smsInfo;
			    }
			},
			error:function(msg, xhr){
				kldBase.showError(msg);
			}
		});
	};
		
	
	return Model;
});