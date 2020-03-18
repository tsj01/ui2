window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_db4e8fde8a26403f9c87774ed0fdb050l_zh_CNs_desktopd_pc/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_b55a93cd4abc44b68d60345a7b5ab709l_zh_CNs_desktopd_pc/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/dataTables/css/responsive,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/dataTables/css/responsive,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_e3eed29fe07f4ba29d258cdbec5aa99el_zh_CNs_desktopd_pc/system/components/comp2.min.js','/v_761f306c94d54073a711ac6ab50bfe22l_zh_CNs_desktopd_pc/system/core.min.js','/v_9e036b1368214a74a6dce43c35066e8dl_zh_CNs_desktopd_pc/system/common.min.js','/v_aa64bdcaefc44b748cd8069bbf8d1affl_zh_CNs_desktopd_pc/system/components/comp.min.js']);define(function(require){
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
var __parent0=require('$model/UI2/ddout/order/imageView'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cNFVv6b';
	this._flag_='58c4d29c0d615607ca38558a3e37b6ab';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"attcnt":{"define":"attcnt","name":"attcnt","relation":"attcnt","rules":{"integer":true},"type":"Integer"},"id":{"define":"id","name":"id","relation":"id","rules":{"integer":true},"type":"Long"},"partname":{"define":"partname","name":"partname","relation":"partname","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":0,\"partname\":\"整车\",\"attcnt\":2},{\"id\":1,\"partname\":\"玻璃\",\"attcnt\":3},{\"id\":2,\"partname\":\"车门\",\"attcnt\":1},{\"id\":3,\"partname\":\"座椅\",\"attcnt\":1}]","isMain":false,"limit":20,"xid":"data1"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fBigImg":{"define":"fBigImg","label":"大图","name":"fBigImg","relation":"fBigImg","type":"String"},"fBigSize":{"define":"fBigSize","label":"大图尺寸","name":"fBigSize","relation":"fBigSize","type":"String"},"fSmallImg":{"define":"fSmallImg","label":"小图","name":"fSmallImg","relation":"fSmallImg","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"imgDataCustomRefresh"},"idColumn":"id","isMain":false,"limit":20,"xid":"imgData"});
}}); 
return __result;});
