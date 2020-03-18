define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/ddout/order/list'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cq6riYj';
	this._flag_='687d8d22a81bb9db9aa36e05ed1dc8ab';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"},"insur":{"define":"insur","name":"insur","relation":"insur","type":"String"},"orderno":{"define":"orderno","name":"orderno","relation":"orderno","type":"String"},"yydt":{"define":"yydt","name":"yydt","relation":"yydt","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"data1CustomRefresh"},"idColumn":"id","isMain":false,"limit":3,"xid":"data1"});
}}); 
return __result;});