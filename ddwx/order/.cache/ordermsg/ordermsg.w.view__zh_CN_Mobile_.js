window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_b541dc34682d48daba9233e728ae12b6l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_00860434aa924c168eab13149bdf99d5l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/dataTables/css/responsive,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/dataTables/css/responsive,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_f4a030cae1b34c9bbddf779348f2fdb4l_zh_CNs_d_m/system/core.min.js','/v_4452dccbd8c54022b56d806ff56aad37l_zh_CNs_d_m/system/common.min.js','/v_503700aee1504df7bf87dde4983712cfl_zh_CNs_d_m/system/components/comp.min.js','/v_364f55e05ecd4378930f639121397d95l_zh_CNs_d_m/system/components/pc.addon.min.js']);define(function(require){
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
