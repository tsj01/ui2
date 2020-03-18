define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/windowReceiver/windowReceiver');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/ddwx/order/searchOptions'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cRZZVBn';
	this._flag_='3005bd105472a189d220729d760911cd';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"cmforder":{"define":"cmforder","name":"cmforder","relation":"cmforder","type":"String"},"dsy":{"define":"dsy","label":"","name":"dsy","relation":"dsy","rules":{"readonly":"$model.dsyReadonly($row)"},"type":"String"},"dsyReadOnly":{"define":"dsyReadOnly","name":"dsyReadOnly","relation":"dsyReadOnly","rules":{"integer":true},"type":"Integer"},"dsyid":{"define":"dsyid","name":"dsyid","relation":"dsyid","rules":{"integer":true},"type":"Integer"},"ecdt":{"define":"ecdt","name":"ecdt","relation":"ecdt","rules":{"date":true},"type":"Date"},"erecvdt":{"define":"erecvdt","name":"erecvdt","relation":"erecvdt","rules":{"date":true},"type":"Date"},"eyydt":{"define":"eyydt","name":"eyydt","relation":"eyydt","rules":{"date":true},"type":"Date"},"garage":{"define":"garage","name":"garage","relation":"garage","type":"String"},"garageid":{"define":"garageid","name":"garageid","relation":"garageid","rules":{"integer":true},"type":"Integer"},"id":{"define":"id","label":"ID","name":"id","relation":"id","type":"String"},"insur":{"define":"insur","label":"","name":"insur","relation":"insur","type":"String"},"insurid":{"define":"insurid","name":"insurid","relation":"insurid","rules":{"integer":true},"type":"Integer"},"recvoprname":{"define":"recvoprname","name":"recvoprname","relation":"recvoprname","type":"String"},"scdt":{"define":"scdt","name":"scdt","relation":"scdt","rules":{"date":true},"type":"Date"},"searchInput":{"define":"searchInput","label":"","name":"searchInput","relation":"searchInput","type":"String"},"srecvdt":{"define":"srecvdt","name":"srecvdt","relation":"srecvdt","rules":{"date":true},"type":"Date"},"srv":{"define":"srv","label":"","name":"srv","relation":"srv","type":"String"},"srvid":{"define":"srvid","name":"srvid","relation":"srvid","rules":{"integer":true},"type":"Integer"},"status":{"define":"status","name":"status","relation":"status","type":"String"},"syydt":{"define":"syydt","name":"syydt","relation":"syydt","rules":{"date":true},"type":"Date"}},"directDelete":false,"events":{"onCustomRefresh":"optionsDataCustomRefresh"},"idColumn":"id","initData":"[]","isMain":false,"limit":20,"xid":"optionsData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"},"name":{"define":"name","label":"名称","name":"name","relation":"name","type":"String"},"value":{"define":"value","label":"值","name":"value","relation":"value","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":1,\"name\":\"是\",\"value\":\"是\"},{\"id\":2,\"name\":\"否\",\"value\":\"否\"},{\"id\":3,\"name\":\"\",\"value\":\"无\"}]","isMain":false,"limit":20,"xid":"yesnoData"});
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
}}); 
return __result;});