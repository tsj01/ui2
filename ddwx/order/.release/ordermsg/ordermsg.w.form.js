define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/windowReceiver/windowReceiver');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/grid/grid');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/ddwx/order/ordermsg'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cN7nmIz';
	this._flag_='599cb3f98b5e8d8bc775d58c131eb931';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"content":{"define":"content","label":"内容","name":"content","relation":"content","type":"String"},"ddt":{"define":"ddt","name":"ddt","relation":"ddt","type":"String"},"dmemo":{"define":"dmemo","name":"dmemo","relation":"dmemo","type":"String"},"dopr":{"define":"dopr","name":"dopr","relation":"dopr","type":"String"},"id":{"define":"id","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"},"isleaf":{"define":"EXPRESS","name":"isleaf","relation":"EXPRESS","rules":{"calculate":"$model.isLeaf($row.val(\"lastreply\"))"},"type":"String"},"lastreply":{"define":"lastreply","name":"lastreply","relation":"lastreply","type":"String"},"oid":{"define":"oid","name":"oid","relation":"oid","rules":{"integer":true},"type":"Integer"},"orderno":{"define":"orderno","name":"orderno","relation":"orderno","type":"String"},"refid":{"define":"refid","name":"refid","relation":"refid","rules":{"integer":true},"type":"Integer"},"sbr":{"define":"sbr","name":"sbr","relation":"sbr","type":"String"},"sdt":{"define":"sdt","name":"sdt","relation":"sdt","type":"String"},"sopr":{"define":"sopr","name":"sopr","relation":"sopr","type":"String"},"status":{"define":"status","name":"status","relation":"status","type":"String"},"title":{"define":"title","name":"title","relation":"title","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"data1CustomRefresh"},"idColumn":"id","initData":"[]","isMain":false,"limit":20,"treeOption":{"isDelayLoad":true,"nodeKindRelation":"isleaf","parentRelation":"refid"},"xid":"data1"});
}}); 
return __result;});