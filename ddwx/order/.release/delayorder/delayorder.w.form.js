define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/select/radioGroup');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/windowReceiver/windowReceiver');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/button/radio');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/ddout/order/delayOrder'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='crMBjA3';
	this._flag_='edcad7bf25a82224e014360c5e717aa2';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"yydt":{"define":"yydt","label":"预约时间","name":"yydt","relation":"yydt","rules":{"datetime":true},"type":"DateTime"},"yydt_old":{"define":"yydt_old","name":"yydt_old","relation":"yydt_old","rules":{"datetime":true},"type":"DateTime"}},"directDelete":false,"events":{},"idColumn":"yydt","isMain":false,"limit":20,"xid":"data1"});
 new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","label":"ID","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"},"name":{"define":"name","label":"name","name":"name","relation":"name","type":"String"},"value":{"define":"value","label":"value","name":"value","relation":"value","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"delayReasonsCustomRefresh"},"idColumn":"id","isMain":false,"limit":20,"xid":"delayReasons"});
}}); 
return __result;});