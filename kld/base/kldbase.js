define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Util = require("$UI/system/lib/base/util");
	var _kldCfg = null;
	var _KldBase = {
		BASE_URL : null,
		ver : 100,
		key : 'kldkey',
		getCurUid:function(){
			console.log('    -----getCurUid----ver='+_kldCfg.ver+'--curUid='+_kldCfg.curUid+'--openid='+_kldCfg.openid);
			if(_kldCfg.ver>=200){
				if(this.isEmpty(_kldCfg.openid)||_kldCfg.openid.length<8)
					return _kldCfg.curUid;
				else
					return _kldCfg.openid;
			}else{
				var kldkey = localStorage[this.key]||'-1#-1';
				return kldkey.split('#')[0];
			}
		},
		
		checkLogin:function(cbParams){
			var curUid = this.getCurUid();
			console.log('-------------checkLogin----------------');
			console.log('    ---------ver='+this.ver+'--curUid='+curUid);
			if( this.isEmpty(curUid)||curUid== '-1'){
				console.log('-----------checkLogin failed -----------------');
				return false;
			}else{
				console.log('-----------checkLogin ok-----------------');
				return true;
			}
		},
		uploadFile  : function(options){
			/* 上传文件 */
            var self = this;
			var formData = new FormData();
            var kldkey = localStorage[this.key]||'';
			formData.append('kldkey',kldkey);
			formData.append('ver',self.ver);
			for(var key in options.params){
           		formData.append(key,options.params[key]);
            }
			$.ajax({
				type : "post",
				dataType: 'json',
				url : (options.baseUrl||this.BASE_URL) + options.url+"/doAction?method="+options.action,
				data : formData,
				crossDomain: true,
			    contentType: false,
                processData: false,
				complete : function(xhr) {
					if (xhr.readyState == 4 && xhr.status == 200) {
						if (options.success) {
							if(xhr.responseJSON.success){
								options.success.call(this, xhr.responseJSON, xhr);
							}else{
								if(xhr.responseJSON.NeedLogin){
									console.log('--------------needLog---tarPage main---------------');
									justep.Shell.showPage("login",{tarPage:'main'});
								}else{
									if (options.error) {
										options.error.call(this, xhr.responseJSON.message, xhr);
									} else {
										if(xhr.responseJSON.message){
											self.showError(xhr.responseJSON.message);
										}else{
											self.showError("服务端错误:");
										}
									}
								}
							}
						}
					} else {
						var msg = self.getErrorMsg(xhr);
						if (options.error) {
							options.error.call(this, msg, xhr);
						} else {
							self.showError(msg);
						}
					}
				}
			});
		},
		/**
 		options = {
 			"async" : 是否异步请求，默认false
 			"url" : 服务端请求地址，不包含BASE_URL
 			"action" : 动作标识
 			"params" : 动作对应的参数
 			"success" : 请求成功后的回调，参数(resultData, xhr)
 			"error" : 请求失败后的回调，参数(msg, xhr)
 		}
        */
		sendRequest : function(options) {
			var self = this;
			var kldkey = localStorage[this.key]||'';
			var openid = localStorage[this.key_openid]||'';
			var nickname = localStorage[this.key_nickname]||'';
			options.params = options.params||{};
			options.params.usePaging = options.params.usePaging||false;
			options.params.kldkey = kldkey;
			options.params.openid = openid;
			options.params.nickname = nickname;
			options.params.ver = self.ver;
			var tarUrl = (options.baseUrl||this.BASE_URL) + options.url;
			if(options.action){
				//通过action调用
				tarUrl += "/doAction?method="+options.action;
			}else if(options.callMethod){
				//直接调用
				tarUrl += "/"+options.callMethod;
			}
			console.log('------params------------');
			console.log('--kldkey='+options.params.kldkey);
			console.log('--openid='+options.params.openid);
			$.ajax({
				type : options.type||"post",
				async : options.async && true,
				url : tarUrl,
				data : options.params,
				/*xhrFields: {
					withCredentials: true
				},*/
				crossDomain: true,
				complete : function(xhr) {
					
					//跨域调用可能的返回值,不用处理
					if (xhr.readyState == 0 && xhr.status == 0) return;
					
					if (xhr.readyState == 4 && xhr.status == 200) {
						if (options.success) {
							if(xhr.responseJSON.success){
								options.success.call(this, xhr.responseJSON, xhr);
							}else{
								if(xhr.responseJSON.NeedLogin){
									justep.Shell.showPage("login");
								}else{
									if (options.error) {
										options.error.call(this, xhr.responseJSON.message, xhr);
									} else {
										if(xhr.responseJSON.message){
											self.showError(xhr.responseJSON.message);
										}else{
											self.showError("服务端错误:");
										}
									}
								}
							}
						}
					} else {
						var msg = self.getErrorMsg(xhr);
						if (options.error) {
							options.error.call(this, msg, xhr);
						} else {
							self.showError(msg);
						}
					}
				}
			});
		},
		
		getErrorMsg : function(xhr) {
			return $(xhr.responseText).filter("h1:first").text() || xhr.statusText;
		},
		
		showError : function(msg) {
			Util.hint(msg, {
				"type" : "danger",
				"position" : 'middle',
				delay : 5000
			});
		},
		showMsg : function(msg,delay){
			Util.hint(msg, {
				"type" : "info",
				"position" : 'middle',
				delay : delay||2000
			});
		},
		
		getDataColumns : function(data) {
			var columns = {};
			$.each(data.defCols, function(key){
				columns[key] = {
					"name" : data.defCols[key]["name"],
					"type" : data.defCols[key]["type"]
				};
			});
			return columns;
		},
		toUrl:function(path){
			var self = this;
			return self.BASE_URL + '/' + path;
		},
		toImgUrl : function(path){
			var self = this;
			return path?self.BASE_URL + '/' +_kldCfg.imgPrefix+ path:"";
		},
		toString : function(value){ 
			return Object.prototype.toString.call(value);
		},
		isArray: ('isArray' in Array) ? Array.isArray : function(value) {
            return this.toString(value) === '[object Array]';
        }, 
		isEmpty: function(value, allowEmptyString) {
            return (value == null) || (!allowEmptyString ? value === '' : false) || ( this.isArray(value) && value.length === 0);
        },
		doInit : function(reqParams){
			if(reqParams){
				if(this.isEmpty(reqParams.openid)==false&&reqParams.openid.length>8){
					window.kldCfg.openid = reqParams.openid;
					localStorage[window.kldCfg.key_openid] = reqParams.openid;
					localStorage[window.kldCfg.key_nickname] = reqParams.nickname;
				}
			}
			_kldCfg = window.kldCfg;
			_KldBase.BASE_URL = _kldCfg.base_url;
			_KldBase.ver = _kldCfg.ver||_KldBase.ver;
			_KldBase.key = _kldCfg.key ||_KldBase.key;
			_KldBase.key_openid =  _kldCfg.key_openid;
		}
	};
	//_KldBase.doInit();
	return _KldBase;
});