define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var kldBase = require("$UI/kld/base/kldbase");
	var wxAPI = require("$UI/kld/base/wxAPI");
	var Model = function(){
		this.callParent();
		this.showLabel = justep.Bind.observable(0);
		this.showD = justep.Bind.observable(0);
	};

	Model.prototype.mapDataReceiverReceive = function(event){
		//console.log('---------mapDataReceiverReceive------------');
		var curCity = window.kldCfg.Dd ? window.kldCfg.Dd.user.branch.adminarea : '杭州市';
		var lng = null, lat = null , city = curCity;
		//var kldkey = localStorage[window.kldCfg.key];
		var url =  require.toUrl('baiduMap/showGarage.html?_dt=Date.now()&lng='+lng+'&lat='+lat+'&city='+city); //+'&kldkey='+kldkey);
		var mapFrame = $(this.getElementByXid("baiduMap"));
		mapFrame.attr('src',url);
	};

	Model.prototype.modelLoad = function(event){
	    var me = this;
		window.onmessage=function(e){
            if(e.data && typeof e.data =="string" ){
                if(e.data.trim().length>0){
	            	var msgData = JSON.parse(e.data);
		            if(msgData.type=='baiduMap'){
		                console.log('-----------on message from map-----------------------');
			            //console.log(msgData);
			            var data = msgData.data;
			            switch(msgData.action){
			            	case  'getAddress':
				            	wxAPI.getBaiduAddress(data.lng,data.lat,function(result){
				            	
					            });
					            var addr = data.locAddr+data.titleAddr;  //+msgData.data.dtlAddr;
					            console.log(addr);
				            	break;
				            case  'map_isready':
				                me.doShowGars();
				            	break;
				            case  'garage_order':
				            	justep.Shell.showPage("orderlist",{actid:'garage_order',garageid:data.garageid,title:data.garage});
				            	break;
				            case  'garage_nav':
				                wxAPI.openLocation(data.lng,data.lat,data.name,data.addr);
				                break;	
			            }
		            }
	            }
            }
        };
        wxAPI.doInit(function(wx){
        	console.log('--------showGar --wxInit is done-----------');
        });
	};
    Model.prototype.sendMessage2Map = function(msgData){
		if(this.getElementByXid("baiduMap"))
			this.getElementByXid("baiduMap").contentWindow.postMessage(JSON.stringify(msgData),'*');
	},
	Model.prototype.button1Click = function(event){
	    var me = this;
	    wxAPI.getLocation(function(lng,lat){
				me.sendMessage2Map({
	        		type : 'baiduMap',
	        		action : 'location',
	        		data : {
	        			curPos : {
		        			lng : lng,
		        			lat : lat
	        			}
	        		}
			    });
		});
	};

	Model.prototype.button2Click = function(event){
	    this.doShowGars();
	};
    Model.prototype.doShowGars = function(){
    	var me = this;
    	var lastMonths = window.kldCfg.lastMonths;
    	var showLabel = this.showLabel.get();
    	var showD = this.showD.get();
		kldBase.sendRequest({
			url : "/mobile",
			action : "getOrderDistribution",
			params : {
				months : -1*lastMonths
			},
			success : function(res) {
			    if(wxAPI.isReady){
			        console.log('------wx is ready------');
	                wxAPI.getLocation(function(lng,lat){
						me.sendMessage2Map({
			        		type : 'baiduMap',
			        		action : 'location&&garages_dist',
			        		data : {
			        			curPos : {
				        			lng : lng,
				        			lat : lat
			        			},
			        			showLabel : showLabel,
			        			showD : showD,
			        			gars : res.rows
			        		}
				    	});
	                });
                }else{
                    console.log('------wx is not ready------');
	                me.sendMessage2Map({
		        		type : 'baiduMap',
		        		action : 'location&&garages_dist',
		        		data : {
		        			curPos : {
			        			lng : 120.11056641764,
			        			lat : 30.300492298038,
		        			},
		        			showLabel : showLabel,
			        		showD : showD,
		        			gars : res.rows
		        		}
			    	});
                }			
			},
			error:function(msg, xhr){
				kldBase.showError(msg);
			}
		});
    };
	
	Model.prototype.modelParamsReceive = function(event){
		//console.log('----showGar-----modelParamsReceive------------');
	};
	
	return Model;
});