window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_6274_nol_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_6274_nol_zh_CNs_d_m/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/dataTables/css/responsive,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/dataTables/css/responsive,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_6274_nol_zh_CNs_d_m/system/components/comp2.min.js','/v_6274_nol_zh_CNs_d_m/system/core.min.js','/v_6274_nol_zh_CNs_d_m/system/common.min.js','/v_6274_nol_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
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
