define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/bootstrap/row/row');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/windowContainer/windowContainer');
require('$model/UI2/system/components/bootstrap/carousel/carousel');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/ddwx/setup/main'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='ciyYnym';
	this._flag_='8e2de9a8f71a6ee195ded483a3258e35';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"all_order":{"define":"all_order","label":"所有订单","name":"all_order","relation":"all_order","rules":{"integer":true},"type":"Integer"},"canconfirm_order":{"define":"canconfirm_order","label":"待确认订单","name":"canconfirm_order","relation":"canconfirm_order","rules":{"integer":true},"type":"Integer"},"candispatch_order":{"define":"candispatch_order","label":"待分派订单","name":"candispatch_order","relation":"candispatch_order","rules":{"integer":true},"type":"Integer"},"canrecv_order":{"define":"canrecv_order","label":"待回收订单","name":"canrecv_order","relation":"canrecv_order","rules":{"integer":true},"type":"Integer"},"confirmed_order":{"define":"confirmed_order","label":"修理厂确认","name":"confirmed_order","relation":"confirmed_order","rules":{"integer":true},"type":"Integer"},"id":{"define":"id","label":"ID","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"},"my_order":{"define":"my_order","label":"我的订单","name":"my_order","relation":"my_order","rules":{"integer":true},"type":"Integer"},"overdue_order":{"define":"overdue_order","label":"逾期订单","name":"overdue_order","relation":"overdue_order","rules":{"integer":true},"type":"Integer"},"todaynew_order":{"define":"todaynew_order","label":"今日新增","name":"todaynew_order","relation":"todaynew_order","rules":{"integer":true},"type":"Integer"},"todayrecv_order":{"define":"todayrecv_order","label":"本日已收订单","name":"todayrecv_order","relation":"todayrecv_order","rules":{"integer":true},"type":"Integer"},"urgent_order":{"define":"urgent_order","label":"加急订单","name":"urgent_order","relation":"urgent_order","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"orderStatiscs"});
}}); 
return __result;});