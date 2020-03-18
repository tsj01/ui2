<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:200px;left:446px;" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="optionsData" idColumn="id" confirmRefresh="true" onCustomRefresh="optionsDataCustomRefresh"><rule xid="rule1">
   <col name="dsy" xid="ruleCol1">
    <readonly xid="readonly1">
     <expr xid="default1">$model.dsyReadonly($row)</expr></readonly> </col> </rule>
  <data xid="default3">[]</data>
  <column label="ID" name="id" type="String" xid="xid1"></column>
  <column label="" name="searchInput" type="String" xid="xid2"></column>
  <column name="srvid" type="Integer" xid="xid15"></column>
  <column label="" name="srv" type="String" xid="xid3"></column>
  <column name="insurid" type="Integer" xid="xid16"></column>
  <column label="" name="insur" type="String" xid="xid4"></column>
  <column name="dsyid" type="Integer" xid="xid18"></column>
  <column label="" name="dsy" type="String" xid="xid5"></column>
  <column name="garageid" type="Integer" xid="xid17"></column>
  <column name="garage" type="String" xid="xid6"></column>
  <column name="status" type="String" xid="xid11"></column>
  <column name="scdt" type="Date" xid="xid7"></column>
  <column name="ecdt" type="Date" xid="xid8"></column>
  <column name="srecvdt" type="Date" xid="xid9"></column>
  <column name="erecvdt" type="Date" xid="xid10"></column>
  <column name="dsyReadOnly" type="Integer" xid="xid12"></column>
  <column name="syydt" type="Date" xid="xid13"></column>
  <column name="eyydt" type="Date" xid="xid14"></column>
  <column name="cmforder" type="String" xid="xid19"></column>
  <column name="recvoprname" type="String" xid="xid20"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="yesnoData" idColumn="id">
   <column name="id" type="Integer" xid="xid52"></column>
   <column label="名称" name="name" type="String" xid="xid53"></column>
   <column label="值" name="value" type="String" xid="xid54"></column>
   <data xid="default2">[{&quot;id&quot;:1,&quot;name&quot;:&quot;是&quot;,&quot;value&quot;:&quot;是&quot;},{&quot;id&quot;:2,&quot;name&quot;:&quot;否&quot;,&quot;value&quot;:&quot;否&quot;},{&quot;id&quot;:3,&quot;name&quot;:&quot;&quot;,&quot;value&quot;:&quot;无&quot;}]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="更多选项"
          class="x-titlebar" xid="titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="backBtnClick" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">更多选项</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content  x-scroll-view" xid="content1" _xid="C7C78D3804F00001BA62DA4868C711EB" style="bottom: 0px;">
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div class="x-panel-top" xid="top2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
   <div class="x-col" xid="col21"><input type="text" class="form-control input-sm" component="$UI/system/components/justep/input/input" xid="searchInput" placeHolder="请输入车牌号、报案号或订单号" bind-ref='$model.optionsData.ref("searchInput")'></input></div>
   </div></div>
   <div class="x-panel-content" xid="content2" _xid="C7C78E4677F00001B1F9AF40FFD1A920"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row17" style="padding:0px 10px 0px 0px;margin:0px 0px 0px 0px;height:30px;border-bottom-style:solid;border-bottom-width:0px;border-bottom-color:#C0C0C0;" bind-visible="showSrv">
   <div class="x-col" xid="col22">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit15" style="margin-left:10px;">
     <label class="x-label" xid="label16" style="padding-left:6px;width:70px;"><![CDATA[回收单位]]></label>
     <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input13" bind-ref='$model.optionsData.ref("srv")' style="padding-right:6px;height:24px;"></input></div> </div> 
   <div class="x-col x-col-fixed x-col-center" xid="col1" style="width:auto;padding:0px 0px 0px 0px;margin:0px 5px 0px 0px;">
    <a component="$UI/system/components/justep/button/button" class="btn btn-primary btn-xs btn-only-icon" label="button" xid="btnChooseSrv" icon="icon-ios7-arrow-right"  style="margin-top:15px" onClick="btnChooseSrvClick">
     <i xid="i2" class="icon-ios7-arrow-right"></i>
     <span xid="span4"></span></a> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="padding:0px 10px 0px 0px;margin:10px 0px 0px 0px;height:30px;" bind-visible="showInsur">
   <div class="x-col" xid="col14">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit14" style="margin-left:10px;">
     <label class="x-label" xid="label15" style="padding-left:6px;width:70px;"><![CDATA[保险公司]]></label>
     <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input12" bind-ref='$model.optionsData.ref("insur")' style="padding-right:6px;height:24px;"></input></div> </div> 
   <div class="x-col x-col-fixed x-col-center" xid="col15" style="width:auto;padding:0px 0px 0px 0px;margin:0px 5px 0px 0px;">
    <a component="$UI/system/components/justep/button/button" class="btn btn-primary btn-xs btn-only-icon" label="button" xid="btnChooseInsur" icon="icon-ios7-arrow-right"  style="margin-top:15px" onClick="btnChooseInsurClick">
     <i xid="i1" class="icon-ios7-arrow-right"></i>
     <span xid="span8"></span></a> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="padding:0px 10px 0px 0px;margin:10px 0px 0px 0px;height:30px;" bind-visible="showInsur">
   <div class="x-col" xid="col9">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit13" style="margin-left:10px;">
     <label class="x-label" xid="label13" style="padding-left:6px;width:70px;"><![CDATA[查勘员]]></label>
     <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="inputDsy" style="padding-right:6px;height:24px;"></input></div> </div> 
   <div class="x-col x-col-fixed x-col-center" xid="col16" style="width:auto;padding:0px 0px 0px 0px;margin:0px 5px 0px 0px;">
    <a component="$UI/system/components/justep/button/button" class="btn btn-primary btn-xs btn-only-icon" label="button" xid="btnChooseInsurlxr" icon="icon-ios7-arrow-right"  style="margin-top:15px" bind-enable=" $model.enableDsy" onClick="btnChooseInsurlxrClick">
     <i xid="i7" class="icon-ios7-arrow-right"></i>
     <span xid="span9"></span></a> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row23" style="padding:0px 10px 0px 0px;margin:12px 0px 0px 0px;height:30px;" bind-visible="showGar">
   <div class="x-col" xid="col33">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit9" style="margin-left:10px;">
     <label class="x-label" xid="label9" style="padding-left:6px;width:70px;">汽修单位</label>
     <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input8" bind-ref='$model.optionsData.ref("garage")' style="padding-right:6px;height:24px;"></input></div> </div> 
   <div class="x-col x-col-fixed x-col-center" xid="col7" style="width:auto;padding:0px 0px 0px 0px;margin:0px 5px 0px 0px;">
    <a component="$UI/system/components/justep/button/button" class="btn btn-primary btn-xs btn-only-icon" label="button" xid="btnChooseGarage" icon="icon-ios7-arrow-right"  style="margin-top:15px" onClick="btnChooseGarageClick">
     <i xid="i3" class="icon-ios7-arrow-right"></i>
     <span xid="span3"></span></a> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="padding:0px 10px 0px 0px;margin:12px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col23">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1" style="margin-left:10px;">
   <label class="x-label" xid="label1" style="padding-left:6px;width:70px;"><![CDATA[订单状态]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input4" bind-ref='$model.optionsData.ref("status")' style="padding-right:6px;height:24px;"></input></div></div> 
  <div class="x-col x-col-fixed x-col-center" xid="col2" style="width:auto;padding:0px 0px 0px 0px;margin:0px 5px 0px 0px;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-primary btn-xs btn-only-icon" label="button" xid="btnChooseOrderstatus" icon="icon-ios7-arrow-right" style="margin-top:15px" onClick="btnChooseOrderstatusClick">
    <i xid="i4" class="icon-ios7-arrow-right"></i>
    <span xid="span1"></span></a> </div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row15" style="padding:0px 10px 0px 0px;margin:12px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col24">
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit11" style="margin-left:10px;margin-right:10px;">
   <label class="x-label" xid="label11" style="padding-left:6px;width:70px;"><![CDATA[是否确认]]></label>
   <select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="select1" style="padding-right:6px;height:24px;" optionsAutoLoad="true" bind-options="yesnoData" bind-optionsValue="value" bind-optionsLabel="name" bind-ref='$model.optionsData.ref("cmforder")'></select></div></div>
  <div class="x-col x-col-fixed x-col-center" xid="col25" style="width:auto;padding:0px 0px 0px 0px;margin:0px 5px 0px 0px;">
   </div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row16" style="padding:0px 10px 0px 0px;margin:12px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col29">
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit10" style="margin-left:10px;">
    <label class="x-label" xid="label10" style="padding-left:6px;width:70px;"><![CDATA[回收人员]]></label>
    <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="inputRecv" style="padding-right:6px;height:24px;" bind-ref='$model.optionsData.ref("recvoprname")'></input></div> </div>
  <div class="x-col x-col-fixed x-col-center" xid="col30" style="width:auto;padding:0px 0px 0px 0px;margin:0px 5px 0px 0px;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-primary btn-xs btn-only-icon" label="button" xid="button2" icon="icon-ios7-arrow-right" style="margin-top:15px" onClick="btnChooseRecv">
    <i xid="i10" class="icon-ios7-arrow-right"></i>
    <span xid="span5"></span></a> </div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="padding:0px 0px 0px 0px;margin:10px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col6">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2" style="margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label2" style="padding-left:6px;width:70px;"><![CDATA[建单日期]]></label>
     <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input15" bind-ref='$model.optionsData.ref("scdt")' style="padding-right:6px;height:24px;"></input></div> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="padding:0px 0px 0px 0px;margin:5px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col3">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit3" style="margin-left:10px;margin-right:10px;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#C0C0C0;">
     <label class="x-label" xid="label3" style="padding-left:6px;width:70px;"><![CDATA[　　　到]]></label>
     <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input1" bind-ref='$model.optionsData.ref("ecdt")' style="padding-right:6px;height:24px;"></input></div> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="padding:0px 0px 0px 0px;margin:10px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col8"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit6" style="margin-left:10px;margin-right:10px;">
   <label class="x-label" xid="label6" style="padding-left:6px;width:70px;"><![CDATA[预约日期]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input5" bind-ref='$model.optionsData.ref("syydt")' style="padding-right:6px;height:24px;"></input></div>
  </div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row14" style="padding:0px 0px 0px 0px;margin:5px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col13"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit7" style="margin-left:10px;margin-right:10px;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#C0C0C0;">
   <label class="x-label" xid="label7" style="padding-left:6px;width:70px;">　　　到</label>
   <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input6" bind-ref='$model.optionsData.ref("eyydt")' style="padding-right:6px;height:24px;"></input></div>
  </div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row7" style="padding:0px 0px 0px 0px;margin:10px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col4">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit4" style="margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label4" style="padding-left:6px;width:70px;"><![CDATA[收件日期]]></label>
     <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input2" bind-ref='$model.optionsData.ref("srecvdt")' style="padding-right:6px;height:24px;"></input></div> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8" style="padding:0px 0px 0px 0px;margin:5px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col5">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit5" style="margin-left:10px;margin-right:10px;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#C0C0C0;">
     <label class="x-label" xid="label5" style="padding-left:6px;width:70px;"><![CDATA[　　　到]]></label>
     <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input3" bind-ref='$model.optionsData.ref("erecvdt")' style="padding-right:6px;height:24px;"></input></div> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row13" style="padding:0px 0px 0px 0px;margin:10px 0px 0px 0px;height:10px;">
   <div class="x-col" xid="col20"></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row10">
   <div class="x-col" xid="col12"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-block center-block" label="搜　　索" xid="btnSearch" onClick="btnSearchClick">
   <i xid="i6"></i>
   <span xid="span6">搜　　索</span></a></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11">
   <div class="x-col" xid="col18">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-block center-block" label="清空选项" xid="btnReset" onClick="btnResetClick">
     <i xid="i8"></i>
     <span xid="span7">清空选项</span></a> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12">
   <div class="x-col" xid="col19">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-block center-block" label="返　　回" xid="btnReturn" onClick="backBtnClick">
     <i xid="i9"></i>
     <span xid="span10">返　　回</span></a> </div> </div></div>
   </div></div>
  </div> 
<span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" onReceive="windowReceiver1Receive" style="top:15px;left:110px;"></span>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="brDialog" src="./srvlist.w" style="top:460px;left:331px;" onReceived="brDialogReceived"></span>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="lxrDialog" style="top:439px;left:192px;" onReceived="lxrDialogReceived"></span>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="statusDialog" style="top:460px;left:331px;" onReceived="statusDialogReceived"></span></div>