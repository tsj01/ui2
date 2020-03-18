window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_67878a3fe70641f3b92428a6713c8b75l_zh_CNs_desktopd_pc/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_a8d53ccf1b884d08890e9dc3fd5b5a53l_zh_CNs_desktopd_pc/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/dataTables/css/responsive,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/dataTables/css/responsive,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_74109b16441d4c1297fe74b0d2f30143l_zh_CNs_desktopd_pc/system/components/comp2.min.js','/v_922d2b86f2e6460880fd4f9ed50a399dl_zh_CNs_desktopd_pc/system/core.min.js','/v_21877e2f7e594064868d6b4604a61fdcl_zh_CNs_desktopd_pc/system/common.min.js','/v_979fa4aa2a8b47d1bea7c75d7e512f5al_zh_CNs_desktopd_pc/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/bootstrap/inputGroup/inputGroup');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/ddwx/order/orderlist'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cyA7Nb2';
	this._flag_='fc75ca32c85c51789adbe564ff00bd6d';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"text":{"define":"text","name":"text","relation":"text","type":"String"},"value":{"define":"value","name":"value","relation":"value","type":"String"}},"directDelete":false,"events":{},"idColumn":"value","initData":"[{\"value\":\"\",\"text\":\"全部\"},{\"value\":\"1\",\"text\":\"今日新增\"}]","isMain":false,"limit":20,"xid":"stateType"});
 new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"car_info":{"define":"car_info","label":"车辆信息","name":"car_info","relation":"car_info","type":"String"},"confirmed":{"define":"confirmed","label":"确认次数","name":"confirmed","relation":"confirmed","rules":{"integer":true},"type":"Integer"},"disparea":{"define":"disparea","label":"收件路线","name":"disparea","relation":"disparea","type":"String"},"dispdt":{"define":"dispdt","label":"分派日期","name":"dispdt","relation":"dispdt","rules":{"date":true},"type":"Date"},"dtl_info":{"define":"dtl_info","label":"收件信息","name":"dtl_info","relation":"dtl_info","type":"String"},"garaddr":{"define":"garaddr","label":"收件地址","name":"garaddr","relation":"garaddr","type":"String"},"garage":{"define":"garage","label":"汽修单位","name":"garage","relation":"garage","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"},"insur":{"define":"insur","label":"保险公司","name":"insur","relation":"insur","type":"String"},"isurgent":{"define":"isurgent","label":"加急","name":"isurgent","relation":"isurgent","type":"String"},"orderno":{"define":"orderno","label":"派工单号","name":"orderno","relation":"orderno","type":"String"},"overdue_info":{"define":"overdue_info","label":"逾期信息","name":"overdue_info","relation":"overdue_info","type":"String"},"srv":{"define":"srv","label":"收件服务商","name":"srv","relation":"srv","type":"String"},"status":{"define":"status","label":"状态","name":"status","relation":"status","type":"String"},"yydt":{"define":"yydt","label":"预约日期","name":"yydt","relation":"yydt","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"orderDataCustomRefresh"},"idColumn":"id","isMain":false,"limit":5,"xid":"orderData"});
}}); 
return __result;});
