define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var wxAPI = require("$UI/kld/base/wxAPI");
	var Model = function(){
		this.callParent();
	};

	Model.prototype.mapDataReceiverReceive = function(event){
		console.log('---------mapDataReceiverReceive------------');
		var lng = null, lat = null , city = '杭州市';
		var url =  require.toUrl('baiduMap/selectAddr.html?_dt=Date.now()&lng='+lng+'&lat='+lat+'&city='+city);
		var mapFrame = $(this.getElementByXid("baiduMap"));
		mapFrame.attr('src',url);
		//$mapFrame.on('load',function(){
		//	mapFrame.contentWindow.postMessage(position, "*");
		//});
	};

	Model.prototype.modelLoad = function(event){
		window.onmessage=function(e){
            if(e.data && typeof e.data =="string" ){
                if(e.data.trim().length>0){
	            	var msgData = JSON.parse(e.data);
		            if(msgData.type=='baiduMap'){
		                console.log('-----------on message from map-----------------------');
			            console.log(msgData);
			            var data = msgData.data;
			            wxAPI.getBaiduAddress(data.lng,data.lat,function(result){
			            	
			            });
			            var addr = data.locAddr+data.titleAddr;  //+msgData.data.dtlAddr;
			            console.log(addr);
		            }
	            }
            }
        };
	};
    Model.prototype.sendMessage2Map = function(msgData){
		this.getElementByXid("baiduMap").contentWindow.postMessage(JSON.stringify(msgData),'*');
	},
	Model.prototype.button1Click = function(event){
	    var me = this;
	    wxAPI.doInit(function(){
		    wxAPI.getLocation(function(lng,lat){
				me.sendMessage2Map({
	        		type : 'baiduMap',
	        		data : {
	        			lng : lng,
	        			lat : lat
	        		}
			    });
			});
	    });
		
	};

	Model.prototype.button2Click = function(event){
	    var s = '../bak/wxJsSDK.w';
		this.comp('windowDialog1').open();
	};

	return Model;
});