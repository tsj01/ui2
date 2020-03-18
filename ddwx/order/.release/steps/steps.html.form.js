define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/ddout/order/steps'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cyMNn6z';
	this._flag_='f8e6080cdd45b0d4f6dc3eabe156ce34';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
}}); 
return __result;});