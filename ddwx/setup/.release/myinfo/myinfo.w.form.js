define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/ddwx/setup/myinfo'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cqAJBrq';
	this._flag_='1de48624745e7dbf8c3718a892bee654';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"brname":{"define":"brname","label":"企业名称","name":"brname","relation":"brname","type":"String"},"brtp":{"define":"brtp","label":"企业类型","name":"brtp","relation":"brtp","type":"String"},"dname":{"define":"dname","label":"所属部门","name":"dname","relation":"dname","type":"String"},"gender":{"define":"gender","label":"性别","name":"gender","relation":"gender","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"},"loginid":{"define":"loginid","label":"用户账号","name":"loginid","relation":"loginid","type":"String"},"name":{"define":"name","label":"用户名称","name":"name","relation":"name","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"userDataCustomRefresh"},"idColumn":"id","isMain":false,"limit":20,"xid":"userData"});
}}); 
return __result;});