define(function(require) {
	var $ = require("jquery");
	var kldBase = require("$UI/kld/base/kldbase");
	var Util = require("$UI/system/lib/base/util");
	var wx = require("https://res.wx.qq.com/open/js/jweixin-1.4.0.js");
	if(!kldCfg.isWx){
		require("cordova!cordova-plugin-geolocation");
		require("cordova!com.justep.cordova.plugin.barcodescanner");
	}
	
    var wgs84tobd09 = function(lng,lat,callback){
    	var url = 'https://api.map.baidu.com/geoconv/v1/?coords='+lng+','+lat+'&from=1&to=5&ak=4PLrMiRg2lqj3pAu6Kz4SaNvOyWrh61V';
    	$.get(url, function(res) {
    		if(res.status===0){
    			var lng = res.result[0].x,lat = res.result[0].y;
    			console.log('---------baidu-coords--type=bd09ll,lng='+lng+',lat='+lat);
    			if(callback) callback(lng,lat);
    			//getBaiduAddress(lng,lat,callback);
    		}else{
    			alert('wgs84tobd09出错,error-code='+res.status);
    		}
    	},'jsonp');
    };
    var bd09togcj02 = function(lng,lat,callback){
    	var url = 'https://api.map.baidu.com/geoconv/v1/?coords='+lng+','+lat+'&from=5&to=3&ak=4PLrMiRg2lqj3pAu6Kz4SaNvOyWrh61V';
    	$.get(url, function(res) {
    		if(res.status===0){
    			var lng = res.result[0].x,lat = res.result[0].y;
    			console.log('---------baidu-coords--type=gcj02,lng='+lng+',lat='+lat);
    			if(callback) callback(lng,lat);
    			//getBaiduAddress(lng,lat,callback);
    		}else{
    			alert('bd09togcj02,error-code='+res.status);
    		}
    	},'jsonp');
    };
    var getBaiduAddress = function(lng,lat,callback){
    	var url = 'http://api.map.baidu.com/geocoder/v2//?location='+lat+','+lng+'&output=json&ak=4PLrMiRg2lqj3pAu6Kz4SaNvOyWrh61V';
    	$.get(url, function(res) {
    		if(res.status===0){
    			console.log('-------baidu address----------');
    			console.log(res.result);
    			var addr = res.result.formatted_address+'('+res.result.sematic_description+')';
    			if(callback) callback(lng,lat,addr);
    		}else{
    			alert('获取百度地址错误,error-code='+res.status);
    		}
    	},'jsonp');
    };
	var wxAPI = {
		checkJsApi : function(){
			wx.checkJsApi({
			  jsApiList: [
		        'checkJsApi',          
		        'getNetworkType',
		        'chooseImage',
		        'scanQRCode',
		        'openLocation',
				'getLocation',
				'closeWindow'
		      ],
		      success: function (res) {
		        alert(JSON.stringify(res));
		      }
		    });
		},
		scanQRCode : function(cb){
			if(kldCfg.isWx){
				wx.scanQRCode({
				      needResult: 1,
				      desc: 'scanQRCode desc',
				      success: function (res) {
				        //alert('code='+res.resultStr);
				    	if(cb) cb(res.resultStr);
				      }
				});
			}else{
				justep.barcodeScanner.scan(function(result){
					if(cb) cb(result.text);
				}, function(error){
					Util.hint(msg, {
						delay : 1000
					});
				});
			}
			
		},
		chooseImage : function(){
			var images = {
				    localId: [],
				    serverId: []
				  };
			wx.chooseImage({
			  //count: 1, // 默认9
			  sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
			  sourceType: [ 'camera','album'],  // 可以指定来源是相册还是相机，默认二者都有
		      success: function (res) {
		    	//alert(res);
		        console.log(res);
		    	images.localId = res.localIds;
		        alert('已选择 ' + res.localIds.length + ' 张图片');
		      }
		    });
		},
		openLocation : function(lng,lat,name,addr){
			bd09togcj02(lng,lat,function(lng,lat){
				wx.openLocation({
				      latitude: lat,
				      longitude: lng,
				      name: name,
				      address: addr,
				      scale: 14,
				      infoUrl: 'http://weixin.qq.com'
				      /*latitude: 23.099994,
				      longitude: 113.324520,
				      name: 'TIT 创意园',
				      address: '广州市海珠区新港中路 397 号',
				      scale: 14,
				      infoUrl: 'http://weixin.qq.com'*/
				 });
			});
			
		},
		getLocation : function(callback,needAddr){
			if(kldCfg.isWx){
				wx.getLocation({
				      success: function (res) {
				    	  console.log('---------wx-coords--type=wgs84,lng='+res.longitude+',lat='+res.latitude);
				    	  if(needAddr)
				    		  wgs84tobd09(res.longitude,res.latitude,function(lng,lat){
				    			  getBaiduAddress(lng,lat,callback);
				    		  });
				    	  else
				    		  wgs84tobd09(res.longitude,res.latitude,callback);
				      },
				      cancel: function (res) {
				    	  console.log(res);
				    	  alert('无法获得当前定位信息!');
				    	  callback(null,null);
				      }
				});
			}else{
				navigator.geolocation.getCurrentPosition(function onSuccess(pos) {
					var coords = pos.coords;
					var coordType = pos.coorType;
					console.log('---------geo-coordsType='+coordType+',lng='+coords.longitude+',lat='+coords.latitude);
					console.log(pos);
					if (typeof navigator.baiduLocation == "undefined")// 安卓使用百度定位，如果baiduLocation
					{
						// 为空则表示该定位为苹果自带的定位
						console.log('---------apple-coordsType='+coordType+',lng='+coords.longitude+',lat='+coords.latitude);
						if(needAddr)
				    		  wgs84tobd09(coords.longitude,coords.latitude,function(lng,lat){
				    			  getBaiduAddress(lng,lat,callback);
				    		  });
				    	else
				    		  wgs84tobd09(coords.longitude,coords.latitude,callback);

					} else {
						//isLocation = false;
						console.log('---------android-coordsType='+coordType+',lng='+coords.longitude+',lat='+coords.latitude);
						if(callback) callback(coords.longitude,coords.latitude,pos.address);
					}

				}, function onError(msg) {
					Util.hint(msg, {
						delay : 1000
					});
					//isLocation = false;
				});
			}
		},
		getBaiduAddress : function(lng,lat,callback){
			getBaiduAddress(lng,lat,callback);
		},
		closeWindow: function(){
			wx.closeWindow();
		}
	};
	var setupWxConfig = function(wxcfg){
    	wx.config({    
	    	debug: false,    
	    	appId: wxcfg.appId,    
	    	timestamp: wxcfg.timestamp,    
	    	nonceStr: wxcfg.nonceStr,    
	    	signature: wxcfg.signature,    
	    		jsApiList: [    
				'checkJsApi',
				'getNetworkType',
				'openLocation',
				'getLocation',
				'scanQRCode',
				'chooseImage'
			]
		});
    };
	var wxInit = function(callback,errorback){
    	//ios和android对签名地址的要求不同,所以只能截取#之前的那段
    	//具体的坑请参考https://segmentfault.com/a/1190000017870058
    	var wx_url = window.location.href.split('#')[0];
    	wx.ready(function(){
    		wxAPI.isReady = true;
	    	if(callback) callback(wx);
	    });
    	wx.error(function (res) {
    		wxAPI.isReady = false;
			if(errorback) 
				errorback(wx);
			else
				alert(res.errMsg);
		});
    	kldBase.sendRequest({
    		url : "/mobile",
    		callMethod : 'call?method=getWxConfig',
    		params : {
    			wx_url : wx_url
    		},
    		success : function(res) {
    		    var wxcfg = res.rows;
    		    //console.log(wxcfg);
    		    //console.log(wx);
    		    setupWxConfig(wxcfg);
    		    
    		} 
    	});
    }; 
    wxAPI.doInit = wxInit;
    return wxAPI;
});