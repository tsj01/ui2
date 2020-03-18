define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/dataTables/dataTables');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/ddwx/order/imageViewRepair'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cABVZje';
	this._flag_='e0023d69353dd4a22e9339d209483ce6';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":false,"confirmRefresh":false,"defCols":{"attcount":{"define":"attcount","name":"attcount","relation":"attcount","rules":{"integer":true},"type":"Integer"},"id":{"define":"id","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"},"oid":{"define":"oid","name":"oid","relation":"oid","rules":{"integer":true},"type":"Integer"},"partname":{"define":"partname","name":"partname","relation":"partname","type":"String"},"status":{"define":"status","name":"status","relation":"status","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"orderdtlDataCustomRefresh"},"idColumn":"id","initData":"[]","isMain":false,"limit":-1,"xid":"orderdtlData"});
 new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"},"mdtm":{"define":"mdtm","name":"mdtm","relation":"mdtm","type":"String"},"mopr":{"define":"mopr","name":"mopr","relation":"mopr","type":"String"},"name":{"define":"name","name":"name","relation":"name","type":"String"},"partname":{"define":"partname","name":"partname","relation":"partname","type":"String"},"path":{"define":"path","label":"路径","name":"path","relation":"path","type":"String"},"paththumb":{"define":"paththumb","name":"paththumb","relation":"paththumb","type":"String"},"sizekb":{"define":"sizekb","name":"sizekb","relation":"sizekb","type":"String"},"sizewh":{"define":"sizewh","name":"sizewh","relation":"sizewh","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"orderImgDataCustomRefresh"},"idColumn":"id","initData":"[{\"id\":\"1\",\"path\":\"\",\"create_time\":\"2015-05-17\",\"create_username\":\"tsw\"}]","isMain":false,"limit":-1,"xid":"orderImgData"});
}}); 
return __result;});