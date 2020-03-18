define(function(require) {
	if(!window.kldCfg) require("./kldcfg");
	require("css!$UI/system/components/bootstrap/lib/css/bootstrap").load();
	require("css!$UI/kld/base/kldbase").load();
	//require("cordova!cordova-plugin-geolocation");
	//require("cordova!com.justep.cordova.plugin.baidulocation");
	//require("appVersionChecker");
	
	var MsgDialog = require("$UI/system/components/justep/messageDialog/messageDialog");
	var Util = require("$UI/system/lib/base/util");
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var kldBase = require("$UI/kld/base/kldbase");
	
	var parentNode = $('body').find('.window').get(0);
	var Model = function() {
		this.callParent();
		this.showNewOrder = justep.Bind.observable(true);
		this.showCanRecv = justep.Bind.observable(true);
		this.showCanConfirm = justep.Bind.observable(false);
		this.showOverdue = justep.Bind.observable(true);
	};
	Model.prototype.modelLoad = function(event){
	    if(window.kldCfg.isDebug) console.log('-------main--modelLoad---------------');
	    if(!window.kldCfg) require("./kldcfg");
	};

	Model.prototype.btnLoginOut = function(event){
	    var me = this;
	    this.lgmsg = new MsgDialog({
				parentNode : parentNode
			});
		this.lgmsg.on('onClose', function(event) {
			if(event.button == 'ok'){
				if(event.button == 'ok'){
			    if(window.kldCfg.isDebug)  console.log('-----------onClose');
				kldBase.sendRequest({
					url : "/mobile",
					action : "logout",  
					success : function(res) {
					    if(window.kldCfg.isDebug)  console.log('-----------logout ');
					    localStorage.removeItem(window.kldCfg.key);
						localStorage.removeItem(window.kldCfg.key_uid);
						//清除openid
						localStorage.removeItem[window.kldCfg.key_openid];
						window.kldCfg.openid = ''; 
						
						me.comp("loginDialog").open();
						
					}
				});
				
			}
			}
		}, this);
		this.lgmsg.show({
			type : 'OKCancel',
			title : '提示',
			message : '确认注销吗',
			width:''
		});
	};
	
	/*Model.prototype.myOrderClick = function(event){
		justep.Shell.showPage(require.toUrl("./myorder.w?recover_userid=" + kldBase.getCurUid()));
	};*/
	
	Model.prototype.myInfoClick = function(event){
		//justep.Shell.showPage(require.toUrl("./myinfo.w?uid=" + kldBase.getCurUid()));
		justep.Shell.showPage("myinfo");
	};
	
	Model.prototype.updatePwdClick = function(event){
		//justep.Shell.showPage(require.toUrl("./updatepwd.w?uid=" + kldBase.getCurUid()));
		justep.Shell.showPage("updatepwd");
	};
	
	Model.prototype.versionClick = function(event){
		Util.hint("当前已是最新版本", {delay : 1000});
	};
	
	Model.prototype.aboutClick = function(event){
		justep.Shell.showPage("about");
	};
	
	Model.prototype.reloadData = function(){
		//刷新登录信息等
        var me = this;
        if(window.kldCfg.isDebug)  console.log('----------main---reloadData------------------');
        var lastMonths = window.kldCfg.lastMonths;
        console.log(window.kldCfg);
	    if(window.kldCfg.curUid||window.kldCfg.openid){
	        //加载用户基本信息
	        kldBase.sendRequest({
				url : "/mobile",
				action : "getLoginInfo",
				success : function(res) {
					console.log('--------------getLoginInfo---------------');
					console.log(res);
					var Dd ={};
					Dd.user = JSON.parse(res.rows.ddvars);
					Dd.branch = Dd.user.branch;
					Dd.ultype = res.rows.ultype;
					Dd.customParams = res.rows.customParams;
					me.showNewOrder.set(true);
		            me.showCanRecv.set(true);
					me.showCanConfirm.set(false);
					me.showOverdue.set(true);
					if(Dd.branch.brtp =='汽修单位'){ 
						me.showNewOrder.set(false);
						me.showCanRecv.set(false);
						me.showCanConfirm.set(true);
						me.showOverdue.set(false);
					}
					if(Dd.branch.brtp =='收件服务商'){
						me.showNewOrder.set(Dd.user.auth.indexOf('内勤调度')>=0||Dd.user.auth.indexOf('保险代理')>=0);
					}
					window.kldCfg.Dd = Dd;
				}
			});
	        //加载统计数据
			var data = this.comp("orderStatiscs");
				data.clear();
			if(window.kldCfg.isDebug)  console.log('----------main---call getOrderStatiscs------------------');	
			kldBase.sendRequest({
				url : "/mobile",
				action : "getOrderStatiscs",
				params : {
					months : -1*lastMonths,
					for_my : true
				},
				success : function(res) {
					data.loadData(res.rows);
					data.first();
				}
			});
		}
	};

	Model.prototype.contentHomeActive = function(event){
	    if(window.kldCfg.isDebug)  console.log('----------main---contentHomeActive------------------');
	    this.reloadData();
	};

		
	Model.prototype.modelActive = function(event){
	    if(window.kldCfg.isDebug)  console.log('----------main---modelActive------------------');
		this.reloadData();
	};

		
	Model.prototype.modelParamsReceive = function(event){
		if(window.kldCfg.isDebug)  console.log('----------main---modelParamsReceive------------------');
		
		/*if(event.params.forLogin){
		    //如果是从登录界面返回，应该默认打开首页，激活首页的方法在此无效
		    var mainContents = this.comp('mainContents');
		    if(window.kldCfg.isDebug)  console.log('----------forLogin is true,activeIndex='+mainContents.getActiveIndex());
		    //mainContents.to(0);
		    if(window.kldCfg.isDebug)  console.log(this.comp('btnHome').$domNode);
		    this.comp('btnHome').$domNode.click();
			
		}*/
		
		
		//刷新地图
		var url = require.toUrl('../baiduMap/showGar.w?v='+new Date());
	    this.comp("windowContainer1").set('src',url);
		this.comp("windowContainer1").refresh();
	};

		
	Model.prototype.getAllOrder = function(event){
		justep.Shell.showPage("orderlist",{actid:'all_order',title:'所有订单'});
	};

		
	Model.prototype.getCanRecvOrder = function(event){
		justep.Shell.showPage("orderlist",{actid:'canrecv_order',title:'待回收订单'});
	};


    
		
	Model.prototype.getCanConfirm = function(event){
		justep.Shell.showPage("orderlist",{actid:'canconfirm_order',title:'待确认订单'});
	};
		
		
	Model.prototype.getConfirmedOrder = function(event){
		justep.Shell.showPage("orderlist",{actid:'confirmed_order',title:'修理厂确认订单'});
	};

		
	Model.prototype.getUrgentOrder = function(event){
		justep.Shell.showPage("orderlist",{actid:'urgent_order',title:'加急订单'});
	};

		
	Model.prototype.getOverdueOrder = function(event){
		justep.Shell.showPage("orderlist",{actid:'overdue_order',title:'逾期订单'});
	};

		
	Model.prototype.getTodayrecvOrder = function(event){
		justep.Shell.showPage("orderlist",{actid:'todayrecv_order',title:'本日已收订单'});
	};

    	
	Model.prototype.getMyOrder = function(event){
		justep.Shell.showPage("orderlist",{actid:'my_order',for_my:true,title:'我的订单'});
	};
    
    Model.prototype.btnNewOrderClick = function(event){
		//justep.Shell.showPage("neworder",{act:'add'});
		this.comp("orderDialog").open({
	    	src : require.toUrl('../order/neworder.w'),
	    	params : {
	    		act : 'add'
	    	}
	    });
    	//justep.Shell.showPage("neworder",{act:'upd',id:483});
	};
    
		
	Model.prototype.loginDialogClose = function(event){
		if(window.kldCfg.isDebug)  console.log('-----main----loginDialogClose----------');
		//从登录界面返回，应该默认打开首页
		var mainContents = this.comp('mainContents');
		if(mainContents.getActiveIndex()!==0){
			mainContents.to(0);
		}
		//刷新地图
		//this.comp("windowContainer1").getInnerModel().doShowGars();	
	};

		
	Model.prototype.contentMyActive = function(event){
		if(window.kldCfg.isDebug)  console.log('----------main---contentMyActive------------------');
	};

		
	Model.prototype.contentLocationActive = function(event){
		
	};

		
	Model.prototype.windowContainer1Load = function(event){
	    console.log('-----main----windowContainer1Load----------');
	    var me = this;
	    //500毫秒后加载
	    /*
		setTimeout(function(){
			me.comp("windowContainer1").getInnerModel().doShowGars();
		},500);
		*/
		
	};
		
	Model.prototype.orderDialogReceived = function(event){
		if(event.data&&event.data.act == 'add')
		   justep.Shell.showPage("orderlist",{actid:'my_order',for_my:true,title:'我的订单'});
	};
		
	

	

		
	return Model;
});