define(function(require){
	var justep = require("$UI/system/lib/justep");
    var kldBase = require("$UI/kld/base/kldbase");
	var Model = function(){
		this.callParent();
		this.showSrv = justep.Bind.observable(true);
		this.showInsur = justep.Bind.observable(true);
		this.showGar = justep.Bind.observable(true);
		this.enableDsy = justep.Bind.observable(true);
	};

    Model.prototype.modelLoad = function(event){
    	this.doInit();
	};

    Model.prototype.dsyReadonly = function(row) {
	    var v = row.val("dsyReadOnly");//通过传的row获取fName的值
	    return v == 1 ? true: false;
    }
	Model.prototype.windowReceiver1Receive = function(event){
		if(!kldBase.isEmpty(this.params.order_search))
			this.comp("optionsData").setValue('searchInput',this.params.order_search);
		if(this.params.first){ 
			this.doInit();
			if(this.params.garageParams){
				this.comp("optionsData").setValue('garageid',this.params.garageParams.garageid);
				this.comp("optionsData").setValue('garage',this.params.garageParams.garage);
			}
		}
		
		var Dd = window.kldCfg.Dd;
		var user = Dd.user;
		var br =  user.branch;
		var brtp = br.brtp;
		this.showSrv.set(brtp=='保险公司'||brtp=='汽修单位');
		this.showInsur.set(brtp=='收件服务商'||brtp=='汽修单位');
		this.showGar.set(brtp=='保险公司'||brtp=='收件服务商');
		switch(brtp){
			case '收件服务商':
				if(user.auth.indexOf('保险代理')>=0){
					this.comp("optionsData").setValue('dsyid',user.id);
					this.comp('inputDsy').set({value:user.name});
					this.enableDsy.set(false); 
					this.comp('inputDsy').set({readonly:true});
				}else{
					this.enableDsy.set(true);
					if(this.comp('inputDsy').get('readonly')){ 
					    this.comp('inputDsy').set({readonly:false});
						this.comp("optionsData").setValue('dsyid',null);
						this.comp('inputDsy').set({value:null});
					}
					
				}
				break;
		}	
	};
	
	Model.prototype.doInit = function(){
	    var Dd = window.kldCfg.Dd;
		var user = Dd.user;
		var br =  user.branch;
		var brtp = br.brtp;
		var lastMonths = window.kldCfg.lastMonths;
		var obj = {
			    id  : 0 ,
			    searchInput : '',
			    scdt : justep.Date.toString(justep.Date.decrease(new Date(),lastMonths,'m'),'yyyy-MM-dd'),
			    ecdt : justep.Date.toString(new Date,'yyyy-MM-dd'),
			    //syydt : justep.Date.toString(justep.Date.decrease(new Date(),lastMonths,'m'),'yyyy-MM-dd'),
			    //eyydt : justep.Date.toString(new Date,'yyyy-MM-dd'),
			    //erecvdt : justep.Date.toString(new Date,'yyyy-MM-dd')
			};
			
		switch(brtp){
			case '保险公司':
				obj=$.extend(obj,{
					insurid : br.id,
					insur : br.shortname
				});
				var srvObj = this.getFirstOneSrv();
			    if(srvObj){
			    	obj.srvid = srvObj.srvid;
			    	obj.srv = srvObj.srv;
			    }
				break;
			case '收件服务商':
				obj=$.extend(obj,{
					srvid : br.id,
					srv : br.shortname
				});
				this.comp('inputDsy').set({value:null});
				if(user.auth.indexOf('保险代理')>=0){
					obj.dsyid = user.id;
					//obj.dsy = user.name;
					this.comp('inputDsy').set({value:user.name});
					this.enableDsy.set(false);
					this.comp('inputDsy').set({readonly:true});
				}
				break;
			case '汽修单位':
				obj=$.extend(obj,{
					garageid : br.id,
					garage : br.shortname
				});
				break;
		}
		//this.comp('inputRecv').set({value:null});
		
		var options = {
				defaultValues : [ obj ]
		};
		this.comp("optionsData").clear();	
		this.comp("optionsData").newData(options);	
	};

	Model.prototype.backBtnClick = function(event){
		this.comp('windowReceiver1').windowCancel();
	};

	Model.prototype.btnResetClick = function(event){
		this.doInit();
	};

	

	Model.prototype.optionsDataCustomRefresh = function(event){
		
	};

	

	Model.prototype.btnChooseSrvClick = function(event){
		var shortname = this.comp('optionsData').getValue('srv');
		this.comp("brDialog").open({
		    src : require.toUrl('./brlist.w'),
	    	params : {
	    		brtp : '收件服务商',
	    		shortname : shortname
	    	}
	    });
	};

	

	Model.prototype.btnChooseInsurClick = function(event){
		var shortname = this.comp('optionsData').getValue('insur');
		this.comp("brDialog").open({
		    src : require.toUrl('./brlist.w'),
	    	params : {
	    		brtp : '保险公司',
	    		shortname : shortname
	    	}
	    });
	};
	

	Model.prototype.btnChooseGarageClick = function(event){
		var shortname = this.comp('optionsData').getValue('garage');
		this.comp("brDialog").open({
		    src : require.toUrl('./brlist.w'),
	    	params : {
	    		brtp : '汽修单位',
	    		shortname : shortname
	    	}
	    });
	};
	

	Model.prototype.btnChooseInsurlxrClick = function(event){
		var optionsData = this.comp("optionsData");
		var lxr = this.comp('inputDsy').get('value');
		var bid = optionsData.getValue('insurid')||-1;
		this.comp("lxrDialog").open({
		    src : require.toUrl('./userlist.w'),
	    	params : {
	    		brtp : '保险公司',
	    		lxr : lxr,
	    		bid : bid
	    	}
	    });
	};

    Model.prototype.btnChooseOrderstatusClick = function(event){
    	var optionsData = this.comp("optionsData");
		this.comp("statusDialog").open({
		    src : require.toUrl('./basicDict.w'),
	    	params : {
	    		dno : 'order_status',
	    		title : '订单状态'
	    	}
	    });
	};
    

	Model.prototype.statusDialogReceived = function(event){
		var optionsData = this.comp("optionsData");
		var retObj = event.data;
		if(retObj){
			optionsData.setValue('status', retObj.value);
		}
	};

	Model.prototype.lxrDialogReceived = function(event){
		var optionsData = this.comp("optionsData");
		var retObj = event.data;
		console.log('--------lxrDialogReceived-------');
		//console.log(retObj);
		switch(retObj.brtp){
			case '收件服务商':
				this.comp('inputRecv').set({value:retObj.name});
				//刷新联系人
				break;	
			case '保险公司':
				optionsData.setValue('dsyid', retObj.id);
				this.comp('inputDsy').set({value:retObj.name});
				break;
			case '汽修单位':
				optionsData.setValue('garlxr', retObj.name);
				optionsData.setValue('gartel', retObj.tel);
				//刷新联系人
				break;
				
		}
	};
	

	Model.prototype.brDialogReceived = function(event){
		var optionsData = this.comp("optionsData");
		var retObj = event.data;
		console.log('--------brDialogReceived-------');
		//console.log(retObj);
		switch(retObj.brtp){
			case '收件服务商':
				optionsData.setValue('srvid', retObj.id);
				optionsData.setValue('srv', retObj.shortname);
				break;
			case '保险公司':
			    optionsData.setValue('insurid', retObj.id);
				optionsData.setValue('insur', retObj.shortname);
				break;
			case '汽修单位':
				optionsData.setValue('garageid', retObj.id);
				optionsData.setValue('garage', retObj.shortname);
				break;
		}
	};
	

	Model.prototype.btnSearchClick = function(event){
		var data = this.comp("optionsData");
		var pObj = {};
		if(data.getValue('srv')) pObj.srv = data.getValue('srv');
		if(data.getValue('insur')) pObj.insur = data.getValue('insur');
		var dsy = this.comp('inputDsy').get('value');
		if(dsy) pObj.dsy = dsy;
		if(data.getValue('garage')) pObj.garage = data.getValue('garage');
		var status = data.getValue('status');
		if(status){
		    pObj.status = data.getValue('status');
			if(status =='已关闭'){ pObj.isdisp = '已关闭'; delete pObj.status;}
			if(status =='已确认'){ pObj.actid  = 'confirmed_order';  delete pObj.status;}
		}
		if(data.getValue('cmforder')){
			pObj.cmforder = data.getValue('cmforder');
		}
		if(data.getValue('recvoprname')){
			pObj.recvoprname = data.getValue('recvoprname');
		}
		
		if(data.getValue('scdt')) pObj.sdt = justep.Date.toString(data.getValue('scdt'),'yyyy-MM-dd hh:mm:ss');
		if(data.getValue('ecdt')) pObj.edt = justep.Date.toString(data.getValue('ecdt'),'yyyy-MM-dd hh:mm:ss');
		if(data.getValue('srecvdt')) pObj.srecvdtm = justep.Date.toString(data.getValue('srecvdt'),'yyyy-MM-dd hh:mm:ss');
		if(data.getValue('erecvdt')) pObj.erecvdtm = justep.Date.toString(data.getValue('erecvdt'),'yyyy-MM-dd hh:mm:ss');
		if(data.getValue('syydt')) pObj.syydt = justep.Date.toString(data.getValue('syydt'),'yyyy-MM-dd hh:mm:ss');
		if(data.getValue('eyydt')) pObj.eyydt = justep.Date.toString(data.getValue('eyydt'),'yyyy-MM-dd hh:mm:ss');
		var searchInput = data.getValue('searchInput');
		if(searchInput){
			if(searchInput.trim().length>0){
				pObj.order_search = searchInput;
			}
		}
		if(this.params.data.callback){
			this.params.data.callback(pObj);
		}
		this.comp('windowReceiver1').windowCancel();
		
	};

	Model.prototype.btnChooseRecv = function(event){
		var optionsData = this.comp("optionsData");
		var lxr = this.comp('inputRecv').get('value');
		var bid = optionsData.getValue('srvid')||-1;
		this.comp("lxrDialog").open({
		    src : require.toUrl('./userlist.w'),
	    	params : {
	    		brtp : '收件服务商',
	    		lxr : lxr,
	    		bid : bid,
	    		authlike : '外勤',
	    		title : '回收人员'
	    	}
	    });
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

	

	return Model;
});