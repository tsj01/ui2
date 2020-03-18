define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/select/radioGroup');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
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
var __parent0=require('$model/UI2/ddwx/order/recvorder'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cbqu6ry';
	this._flag_='55e050aa35e0e6de0c7015ce633df201';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","label":"id","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"},"isvalue":{"define":"isvalue","label":"价值件","name":"isvalue","relation":"isvalue","type":"String"},"oid":{"define":"oid","label":"派工单id","name":"oid","relation":"oid","rules":{"integer":true},"type":"Integer"},"orgsno":{"define":"orgsno","label":"原厂编号","name":"orgsno","relation":"orgsno","type":"String"},"partname":{"define":"partname","label":"零部件名称","name":"partname","relation":"partname","type":"String"},"partno":{"define":"partno","label":"易碎贴","name":"partno","relation":"partno","type":"String"},"price":{"define":"price","label":"单价","name":"price","relation":"price","rules":{"number":true},"type":"Double"},"recvdt":{"define":"recvdt","label":"回收日期","name":"recvdt","relation":"recvdt","type":"String"},"recvmemo":{"define":"recvmemo","label":"回收备注","name":"recvmemo","relation":"recvmemo","type":"String"},"recvopr":{"define":"recvopr","label":"回收人员","name":"recvopr","relation":"recvopr","type":"String"},"recvoprname":{"define":"recvoprname","name":"recvoprname","relation":"recvoprname","type":"String"},"recvtel":{"define":"recvtel","name":"recvtel","relation":"recvtel","type":"String"},"recvyy":{"define":"recvyy","label":"未收原因","name":"recvyy","relation":"recvyy","type":"String"},"status":{"define":"status","label":"回收状态","name":"status","relation":"status","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"orderDtlData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"text":{"define":"text","name":"text","relation":"text","type":"String"},"value":{"define":"value","name":"value","relation":"value","type":"String"}},"directDelete":false,"events":{},"idColumn":"value","initData":"[{\"value\":\"未收\",\"text\":\"未收\"},{\"value\":\"已收\",\"text\":\"已收\"},{\"value\":\"不收\",\"text\":\"不收\"}]","isMain":false,"limit":20,"xid":"recvStatusType"});
 new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","label":"ID","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"},"name":{"define":"name","label":"name","name":"name","relation":"name","type":"String"},"value":{"define":"value","label":"value","name":"value","relation":"value","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"unrecvReasonsCustomRefresh"},"idColumn":"id","isMain":false,"limit":20,"xid":"unrecvReasons"});
 new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"},"mdtm":{"define":"mdtm","name":"mdtm","relation":"mdtm","type":"String"},"mopr":{"define":"mopr","name":"mopr","relation":"mopr","type":"String"},"name":{"define":"name","name":"name","relation":"name","type":"String"},"partname":{"define":"partname","name":"partname","relation":"partname","type":"String"},"path":{"define":"path","label":"路径","name":"path","relation":"path","type":"String"},"paththumb":{"define":"paththumb","name":"paththumb","relation":"paththumb","type":"String"},"sizekb":{"define":"sizekb","name":"sizekb","relation":"sizekb","type":"String"},"sizewh":{"define":"sizewh","name":"sizewh","relation":"sizewh","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"orderImgDataCustomRefresh"},"idColumn":"id","initData":"[{\"id\":\"1\",\"path\":\"\",\"create_time\":\"2015-05-17\",\"create_username\":\"tsw\"}]","isMain":false,"limit":-1,"xid":"orderImgData"});
 new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"},"mdtm":{"define":"mdtm","name":"mdtm","relation":"mdtm","type":"String"},"mopr":{"define":"mopr","name":"mopr","relation":"mopr","type":"String"},"name":{"define":"name","name":"name","relation":"name","type":"String"},"partname":{"define":"partname","name":"partname","relation":"partname","type":"String"},"path":{"define":"path","label":"路径","name":"path","relation":"path","type":"String"},"paththumb":{"define":"paththumb","name":"paththumb","relation":"paththumb","type":"String"},"sizekb":{"define":"sizekb","name":"sizekb","relation":"sizekb","type":"String"},"sizewh":{"define":"sizewh","name":"sizewh","relation":"sizewh","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"orderImgDataCustomRefresh"},"idColumn":"id","initData":"[{\"id\":\"1\",\"path\":\"\",\"create_time\":\"2015-05-17\",\"create_username\":\"tsw\"}]","isMain":false,"limit":-1,"xid":"recvImgData"});
}}); 
return __result;});