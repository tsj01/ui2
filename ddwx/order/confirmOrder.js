define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var kldBase = require("$UI/kld/base/kldbase");
	var Model = function(){
	    this.callParent();		
	};
	Model.prototype.btnOKClick = function(event){
		console.log('--------btnOKClick---------');
		var me = this;
		//1.检查合法性
		var dataRow = this.comp("data1").getCurrentRow();
		var yydt_old = this.comp("data1").getValue('yydt_old', dataRow);
		var yydt = this.comp("data1").getValue('yydt', dataRow);
		var delayy = '';
		var msg = this.comp("data1").getValue('msg', dataRow);
		if(yydt < new Date()){
		    kldBase.showMsg('新日期应该晚于当前时间!');
			return;
		}else{
			if(yydt == new Date()) delayy = '修理厂确认';
		}
		var updData = {
		    id : this.params.dataRow.userdata.id.value,
		    yydtold : justep.Date.toString(yydt_old, 'yyyy-MM-dd hh:mm:ss'),
			yydt : justep.Date.toString(yydt, 'yyyy-MM-dd hh:mm:ss'),
			oldver : this.params.dataRow.oldver.value
		};
		if(delayy!=='') updData.delayy = delayy;
		kldBase.sendRequest({
			url : "/mobile",
			action : "updateOrder4Action",
			params :{
			    actid : 'confirmOrder',
			    msg : msg,
				rows:JSON.stringify(updData)
			} ,
			success : function(res) {
				me.comp("windowReceiver1").windowEnsure(res.rows[0]);	
			},
			error:function(msg, xhr){
				kldBase.showError(msg);
			}
		});
		
	};

	Model.prototype.windowReceiver1Receive = function(event){
	    var dataRow = this.params.dataRow; 
	    this.comp('data1').add({
	    	yydt: justep.Date.fromString(dataRow.yydt.value, 'yyyy-MM-dd hh:mm:ss'),
	    	yydt_old: justep.Date.fromString(dataRow.yydt.value, 'yyyy-MM-dd hh:mm:ss')
	    });
	   		
	};
	

	Model.prototype.backBtnClick = function(event){
		this.comp("windowReceiver1").windowEnsure();
	};

	


	


	

	return Model;
});
