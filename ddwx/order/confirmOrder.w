<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:131px;left:194px;">
   <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="yydt"><column label="预约时间" name="yydt" type="DateTime" xid="xid1"></column>
  <column name="yydt_old" type="DateTime" xid="xid2"></column>
  <column name="msg" type="String" xid="xid3"></column></div>
  </div>
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1">
    <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1">
     <div class="x-titlebar-left" xid="left1">
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="返回" xid="backBtn" icon="icon-chevron-left" onClick="backBtnClick">
   <i xid="i1" class="icon-chevron-left"></i>
   <span xid="span2">返回</span></a></div> 
     <div class="x-titlebar-title" xid="title1">
      <span xid="span1"><![CDATA[订单确认]]></span></div> 
     <div class="x-titlebar-right reverse" xid="right1"></div></div> </div> 
   <div class="x-panel-content" xid="content2">
    
  <div component="$UI/system/components/justep/contents/contents" class="x-contents" active="0" xid="content3">
   <div class="x-contents-content active" xid="contentOrder">
    
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="padding:0px 5px 0px 5px;margin:0px 0px 0px 0px;height:40px;">
     </div> 
    
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="padding:0px 5px 0px 5px;margin:0px 0px 0px 0px;">
   <div class="x-col x-col-90 x-col-center center-block" xid="col7">
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit3">
   <label class="x-label" xid="label3" style="margin:0px 0px 0px 5px;text-align:right;width:90px;"><![CDATA[预约日期:]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output1" bind-ref='$model.data1.ref("yydt_old")' style="padding-left:15px;"></div></div></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="padding:0px 5px 0px 5px;margin:0px 0px 0px 0px;">
   <div class="x-col x-col-90 x-col-center center-block" xid="col10"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit8">
   <label class="x-label" xid="label10" style="margin:0px 0px 0px 5px;text-align:right;width:90px;"><![CDATA[确认日期:]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input10" bind-ref='$model.data1.ref("yydt")'></input></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7" style="padding:0px 10px 0px 5px;margin:0px 0px 0px 0px;height:40px;">
   <div class="x-col x-col-90 x-col-center center-block" xid="col3">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1">
     <label class="x-label" xid="label1" style="margin:0px 0px 0px 5px;text-align:right;width:90px;"><![CDATA[确认留言:]]></label>
     <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="msg" bind-ref='$model.data1.ref("msg")' placeHolder="必要时可以留言"></input></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="padding-top:5px;margin-top:5px">
   <div class="x-col x-col-90 x-col-center center-block" xid="col4"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-only-label btn-block" label="提交" xid="btnOK" icon="icon-chevron-down" onClick="btnOKClick" style="background-color:#FFFFFF;color:#1E90FF;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;">
   <i xid="i3" class="icon-chevron-down"></i>
   <span xid="span3">提交</span></a></div>
   </div>
  </div> 
   
   </div></div> 
   </div>
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" style="top:22px;left:162px;" onReceive="windowReceiver1Receive"></span>
  </div>