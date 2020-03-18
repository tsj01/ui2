define(function(require){
    require("../setup/kldcfg");
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Util = require("$UI/system/lib/base/util");
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
	
	var Model = function(){
		this.callParent();
		this.showImgFolder = justep.Bind.observable(true);  //justep.Bind.observable(kldCfg.Dd.customParams.recv_cameraonly!=='是');
	};
	
	
	/*Model.prototype.imgDataCustomRefresh = function(event){
		 console.log('------------imgDataCustomRefresh---------------');
		//var url = require.toUrl("./json/imgData1.json");
		//allData.loadDataFromFile(url,event.source,true);
		var jsonData = [
			{"id":"1","fSmallImg":"../res/img/1_thumb.jpg","fBigImg":"../res/img/1.jpg","fBigSize":"550x734"},
			{"id":"2","fSmallImg":"../res/img/2_thumb.jpg","fBigImg":"../res/img/2.jpg","fBigSize":"327x220"},
			{"id":"3","fSmallImg":"../res/img/3_thumb.jpg","fBigImg":"../res/img/3.jpg","fBigSize":"500x280"},
			{"id":"4","fSmallImg":"../res/img/4_thumb.jpg","fBigImg":"../res/img/4.jpg","fBigSize":"260x220"},
			{"id":"5","fSmallImg":"../res/img/5_thumb.jpg","fBigImg":"../res/img/5.jpg","fBigSize":"550x440"},
			{"id":"6","fSmallImg":"../res/img/6_thumb.jpg","fBigImg":"../res/img/6.jpg","fBigSize":"550x440"}
			];
		//this.comp('imgData').loadData(jsonData);
	};*/
	
	// 图片路径转换
	Model.prototype.toImgUrl = function(url) {
		return kldBase.toImgUrl(url);
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
					action : "uploadImageBase64",
					params : {
						tp : '维修照片',
						oid : me.imgParams.oid,
						dtlid: me.imgParams.dtlid,
						partname : me.imgParams.partname,
						needMask : me.needMask,
						locInf : me.locInf.locInf,
						lng : me.locInf.lng,
						lat : me.locInf.lat,
						image_data : image_data,
						image_name : image_name
					},
					success : function(res) {
					    //var obj = me.getElementByXid("fileUpload") ; 
					    //obj.outerHTML=obj.outerHTML;
					    if(res.success === true) {
                            me.add2DataRow(res.rows);                
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
	Model.prototype.modelLoad = function(event){
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
	    });
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
				tp : '维修照片',
				oid : me.imgParams.oid,
				dtlid : me.imgParams.dtlid
			},
			success : function(res) {
			     var append = event.options && event.options.append;
			     event.source.loadData(res, append);
			     
			}
		});
	};
	
	Model.prototype.initPhotoSwipe = function(sliders,idx,rowCanRecv) {
	    console.log('---------------initPhotoSwipe-------------------');
	    var me = this;
	    var canDel = false;
	    
	    if(me.showImgFolder.get()){
	        canDel = true;
	    }else{
	    	canDel = rowCanRecv;
	    }
	    
	    //var pswpElement = document.querySelectorAll('.pswp')[0];
	    var pswpElement = $('#gallery_imageview')[0];
		var options = {
		    index: idx,
		    history: false,
		    loop : false,
		    shareEl : false,
		    deleteEl : canDel,
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
					//然后后台删除该图片
					kldBase.sendRequest({
						url : "/mobile",
						action : "delOrderImg",
						params : {
							id : rowId
						},
						success : function(res) {
							var imgData = me.comp('orderImgData');
							imgData.remove(imgData.getRowByID(rowId));
							var dtlData = me.comp('orderdtlData');
							var curRow = dtlData.getCurrentRow();
							dtlData.setValue('attcount',dtlData.getValue('attcount',curRow)-1,curRow);
						}
					});
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
	    var rowCanRecv = false;
	    var dtlData = me.comp('orderdtlData');
	    var curRow = dtlData.getCurrentRow().toJson();
	    if(curRow.userdata.id.value === 0) 
			rowCanRecv = me.params.canRecv;
		else
		    rowCanRecv = curRow.status.value === '未收';
		this.initPhotoSwipe(sliders,idx,rowCanRecv);
	};
	
	Model.prototype.orderdtlDataCustomRefresh = function(event){
		console.log('----------orderdtlDataCustomRefresh-----------');
		var me = this;
		
		kldBase.sendRequest({
			url : "/mobile",
			action : "getOrderdtl4Attcount",
			params : {
				usePaging:false, 
				limit : event.limit,
				start : event.offset,
				tp : '维修照片',
				oid : me.params.oid||341
			},
			success : function(resultData) {
			     var append = event.options && event.options.append;
			     event.source.loadData(resultData, append);
			     event.source.doRefreshAfter(resultData, event.options);
			}
		});
	};
		
	Model.prototype.dataTables1RowSelect = function(event){
	    var me = this;
		console.log('----------dataTables1RowClick-----------');
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
		var rowCanRecv = true;
		//if(row.userdata.id.value === 0) 
		//	rowCanRecv = me.params.canRecv;
		//else
		//    rowCanRecv = row.status.value === '未收';
		
		if(me.showImgFolder.get()==false){
		    //1.这种模式下严格要求,必须照片必须现场拍,且只有未收时可以拍照    	
			//不能回收时，不能拍照
			if(me.params.canRecv  === false){
			    $(me.getElementByXid("camera")).css('display','none');
				$(me.getElementByXid("fileUpload")).css('display','none');
				$(me.getElementByXid("fileUpload2")).css('display','none');
			}else{
			    if(rowCanRecv){
				    $(me.getElementByXid("camera")).css('display','block');
					$(me.getElementByXid("fileUpload")).css('display','block');
					$(me.getElementByXid("fileUpload2")).css('display','block');
				}else{
					$(me.getElementByXid("camera")).css('display','none');
					$(me.getElementByXid("fileUpload")).css('display','none');
					$(me.getElementByXid("fileUpload2")).css('display','none');
				}
				wxAPI.doInit(function(){
					console.log('-----------wxAPI is ready---------------');
					wxAPI.getLocation(function(lng,lat){
					    if(lng=='' || lat==''|| !lng||!lat){
					        kldBase.showError('无法定位!');
					    }else{
						    me.locInf = {
						        locInf : '定位成功',
						    	lng : lng,
						    	lat : lat
						    }
					    }			
					});
				});
			}
			
		}else{
			//2.这种模式下可以补照片，所以不严格要求
			wxAPI.doInit(function(){
					console.log('-----------wxAPI is ready---------------');
					wxAPI.getLocation(function(lng,lat){
					    if(lng=='' || lat==''|| !lng||!lat){
					        kldBase.showError('无法定位!');
					    }else{
						    me.locInf = {
						        locInf : '定位成功',
						    	lng : lng,
						    	lat : lat
						    }
					    }			
					});
			});
		}
	};
	
	
	
		
	Model.prototype.modelParamsReceive = function(event){
	    var me = this;
		this.comp('titlebar').set({title:this.params.title});
		this.comp('orderdtlData').refreshData();
		 
	};
	
	Model.prototype.add2DataRow = function(imgRows){
        var me = this;
    	me.comp('orderImgData').loadData(imgRows, true);
    	var dtlData = me.comp('orderdtlData');
		var curRow = dtlData.getCurrentRow();
		dtlData.setValue('attcount',dtlData.getValue('attcount',curRow)+1,curRow);
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
			    //allowEdit:true,
				quality : 100,
				targetWidth : 1080,
				targetHeight : 1440,
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
					action : "uploadImageBase64",
					params : {
						tp : '维修照片',
						oid : me.imgParams.oid,
						dtlid: me.imgParams.dtlid,
						partname : me.imgParams.partname,
						needMask : me.needMask,
						locInf : me.locInf.locInf,
						lng : me.locInf.lng,
						lat : me.locInf.lat,
						image_data : imageData,
						image_name : 'app_camera.jpg'
					},
					success : function(res) {
					    //var obj = me.getElementByXid("fileUpload") ; 
					    //obj.outerHTML=obj.outerHTML;
					    if(res.success === true) {
                            me.add2DataRow(res.rows);              
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
	
		
	return Model;
});