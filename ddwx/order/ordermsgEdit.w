<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:74px;left:528px;">
   <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="data1" idColumn="id"><column name="id" type="Integer" xid="xid1"></column>
  <column name="refid" type="Integer" xid="xid2"></column>
  <column name="title" type="String" xid="xid3"></column>
  <column name="content" type="String" xid="xid4"></column>
  <column name="status" type="String" xid="xid12"></column>
  <column name="sopr" type="String" xid="xid5"></column>
  <column name="sdt" type="String" xid="xid6"></column>
  <column name="dmemo" type="String" xid="xid7"></column>
  <column name="dopr" type="String" xid="xid8"></column>
  <column name="ddt" type="String" xid="xid9"></column>
  <column name="oid" type="Integer" xid="xid10"></column>
  <column name="orderno" type="String" xid="xid11"></column></div></div>
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1">
    <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1">
     <div class="x-titlebar-left" xid="left1">
      </div> 
     <div class="x-titlebar-title" xid="title1">
      <span xid="span1"><![CDATA[留言信息]]></span></div> 
     <div class="x-titlebar-right reverse" xid="right1"></div></div> </div> 
   <div class="x-panel-content" xid="content2">
    <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView2">
   
   <div class="x-scroll-content" xid="div8">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row17" style="padding:0px 10px 0px 0px;margin:10px 0px 0px 0px;height:30px;border-bottom-style:solid;border-bottom-width:0px;border-bottom-color:#C0C0C0;" bind-visible="$model.showTitle">
   <div class="x-col" xid="col22"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit15" style="margin-left:10px;">
   <label class="x-label" xid="label16" style="padding-left:6px;width:70px;"><![CDATA[标　　题]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input13" bind-ref='$model.data1.ref("title")' style="padding-right:6px;height:24px;" maxLength="30"></input></div></div>
  </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="padding:0px 10px 0px 0px;margin:10px 0px 0px 0px;height:30px;border-bottom-style:solid;border-bottom-width:0px;border-bottom-color:#C0C0C0;" bind-visible="$model.showTitle.get()==false">
   <div class="x-col" xid="col1">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit3" style="margin-left:10px;">
     <label class="x-label" xid="label3" style="padding-left:6px;width:70px;">标　　题</label>
     <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input1" bind-ref='$model.data1.ref("title")' style="padding-right:6px;height:24px;" readonly="true"></input></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="padding:0px 10px 0px 0px;margin:10px 0px 0px 0px;height:60px;" bind-visible="$model.showContent">
   <div class="x-col" xid="col14">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1" style="margin-left:10px;">
   <label class="x-label" xid="label1" style="padding-left:6px;width:70px;"><![CDATA[内　　容]]></label>
   <textarea maxlength="200" component="$UI/system/components/justep/textarea/textarea" class="form-control x-edit" xid="textarea1" bind-ref='$model.data1.ref("content")'></textarea></div></div> 
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="padding:0px 10px 0px 0px;margin:10px 0px 0px 0px;height:60px;" bind-visible="$model.showContent.get()==false">
   <div class="x-col" xid="col2">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit4" style="margin-left:10px;">
     <label class="x-label" xid="label4" style="padding-left:6px;width:70px;">内　　容</label>
     <textarea component="$UI/system/components/justep/textarea/textarea" class="form-control x-edit" xid="textarea3" bind-ref='$model.data1.ref("content")' readonly="true"></textarea></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="padding:0px 10px 0px 0px;margin:10px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col9">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit13" style="margin-left:10px;">
   <label class="x-label" xid="label13" style="padding-left:6px;width:70px;"><![CDATA[留言人]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input11" bind-ref='$model.data1.ref("sopr")' style="padding-right:6px;height:24px;" readonly="true"></input></div></div> 
  </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="padding:0px 0px 0px 0px;margin:10px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col8">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit12" style="margin-left:10px;margin-right:10px;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#C0C0C0;">
   <label class="x-label" xid="label12" style="padding-left:6px;width:70px;"><![CDATA[留言时间]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input10" bind-ref='$model.data1.ref("sdt")' style="padding-right:6px;height:24px;" readonly="true"></input></div></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row20" style="padding:0px 0px 0px 0px;margin:10px 0px 0px 0px;height:60px;" bind-visible="$model.showDeal">
   <div class="x-col" xid="col29">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2" style="margin-left:10px;">
   <label class="x-label" xid="label2" style="padding-left:6px;width:70px;"><![CDATA[处理意见]]></label>
   <textarea component="$UI/system/components/justep/textarea/textarea" class="form-control x-edit" xid="textarea2" bind-ref='$model.data1.ref("dmemo")'></textarea></div></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row19" style="padding:0px 0px 0px 0px;margin:10px 0px 0px 0px;height:30px;" bind-visible="$model.showDeal">
   <div class="x-col" xid="col28">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit21" style="margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label14" style="padding-left:6px;width:70px;"><![CDATA[处理人]]></label>
     <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input4" bind-ref='$model.data1.ref("dopr")' style="padding-right:6px;height:24px;" readonly="true"></input>
     </div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row21" style="padding:0px 0px 0px 0px;margin:10px 0px 0px 0px;height:30px;" bind-visible="$model.showDeal">
   <div class="x-col" xid="col30">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit23" style="margin-left:10px;margin-right:10px;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#C0C0C0;">
     <label class="x-label" xid="label22" style="padding-left:6px;width:70px;"><![CDATA[处理时间]]></label>
     <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input5" bind-ref='$model.data1.ref("ddt")' style="padding-right:6px;height:24px;" readonly="true"></input>
     </div> </div> </div>
  </div>
   </div></div> 
   <div class="x-panel-bottom" xid="bottom2">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col3">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-block center-block" label="返回" xid="btnBack" onClick="btnBackClick" style="background-color:#FFFFFF;color:#1E90FF;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;height:32px;">
    <i xid="i2"></i>
    <span xid="span3">返回</span></a> </div>
   <div class="x-col" xid="col19" bind-visible="$model.showSubmitBtn"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-block center-block" label="提交" xid="btnSubmit" onClick="btnSubmitClick" style="background-color:#FFFFFF;color:#1E90FF;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;height:32px;">
    <i xid="i10"></i>
    <span xid="span11">提交</span></a>
  </div>
  
  </div></div></div>
  <div id="gallery_neworder" class="pswp" tabindex="-1" role="dialog" aria-hidden="true" style="opacity:1;z-index:10000;" xid="div11">
   <div class="pswp__bg" xid="div10"></div>
   <div class="pswp__scroll-wrap" xid="div9">
    <div class="pswp__container" xid="div7">
     <div class="pswp__item" xid="div6"></div>
     <div class="pswp__item" xid="div7"></div>
     <div class="pswp__item" xid="div6"></div></div> 
    <div class="pswp__ui pswp__ui--hidden" style="height:44px;" xid="div9">
     <div class="pswp__top-bar" xid="div10">
      <div class="pswp__counter" xid="div11"></div>
      <button class="pswp__button pswp__button--close" title="Close (Esc)" xid="button1"></button>
      <button class="pswp__button pswp__button--share" title="Share" xid="button1"></button>
      <button class="pswp__button pswp__button--fs" title="Toggle fullscreen" xid="button3"></button>
      <button class="pswp__button pswp__button--zoom" title="Zoom in/out" xid="button4"></button>
      <button class="pswp__button pswp__button--delete" title="Delete"></button>
      <div class="pswp__preloader" xid="div12">
       <div class="pswp__preloader__icn" xid="div13">
        <div class="pswp__preloader__cut" xid="div14">
         <div class="pswp__preloader__donut" xid="div15"></div></div> </div> </div> </div> 
     <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap" xid="div16">
      <div class="pswp__share-tooltip" xid="div17"></div></div> 
     <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)" xid="button5"></button>
     <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)" xid="button6"></button>
     <div class="pswp__caption" xid="div18">
      <div class="pswp__caption__center" xid="div19"></div></div> </div> </div> </div>
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" onReceive="windowReceiver1Receive"></span></div>