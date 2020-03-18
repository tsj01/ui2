define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/textarea/textarea');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/windowReceiver/windowReceiver');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/ddwx/order/ordermsgEdit'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cfia2Ez';
	this._flag_='eea9d97ecf1afd73c49b0a0456b992b9';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"content":{"define":"content","name":"content","relation":"content","type":"String"},"ddt":{"define":"ddt","name":"ddt","relation":"ddt","type":"String"},"dmemo":{"define":"dmemo","name":"dmemo","relation":"dmemo","type":"String"},"dopr":{"define":"dopr","name":"dopr","relation":"dopr","type":"String"},"id":{"define":"id","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"},"oid":{"define":"oid","name":"oid","relation":"oid","rules":{"integer":true},"type":"Integer"},"orderno":{"define":"orderno","name":"orderno","relation":"orderno","type":"String"},"refid":{"define":"refid","name":"refid","relation":"refid","rules":{"integer":true},"type":"Integer"},"sdt":{"define":"sdt","name":"sdt","relation":"sdt","type":"String"},"sopr":{"define":"sopr","name":"sopr","relation":"sopr","type":"String"},"status":{"define":"status","name":"status","relation":"status","type":"String"},"title":{"define":"title","name":"title","relation":"title","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"data1"});
}}); 
return __result;});