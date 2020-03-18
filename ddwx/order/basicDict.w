<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:61px;left:35px;height:auto;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="factData" idColumn="id" onCustomRefresh="factDataCustomRefresh" confirmRefresh="true"><column label="ID" name="id" type="String" xid="xid1"></column>
  <column label="简称" name="name" type="String" xid="xid2"></column>
  <column label="名称" name="value" type="String" xid="xid3"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="单位"
          class="x-titlebar" xid="titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">单位</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content  x-scroll-view" xid="content1" _xid="C7C78D3804F00001BA62DA4868C711EB" style="bottom: 0px;">
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div class="x-panel-top" xid="top2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
   <div class="x-col" xid="col21"><div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup1">
   <input type="text" class="form-control input-sm" component="$UI/system/components/justep/input/input" xid="searchInput" bind-ref="searchFact"></input>
  <div xid="div10" class="input-group-btn"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-only-icon" label="button" xid="button4" icon="icon-android-search" onClick="{operation:'factData.refresh'}">
   <i xid="i6" class="icon-android-search"></i>
   <span xid="span14"></span></a></div></div></div>
   </div></div>
   <div class="x-panel-content  x-scroll-view" xid="content2" _xid="C7C78E4677F00001B1F9AF40FFD1A920"><div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView3" autoPullUp="true">
   <div class="x-content-center x-pull-down container" xid="div7">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i4"></i>
    <span class="x-pull-down-label" xid="span11">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div8"><div component="$UI/system/components/justep/list/list" class="x-list" xid="factList" data="factData" autoLoad="false">
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:32px;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#C0C0C0;">
   <div class="x-col x-col-33" xid="col6" bind-visible="false">
    <label xid="label2" style="text-align:center;width:100%;"><![CDATA[简称]]></label></div> 
   <div class="x-col" xid="col7">
    <label xid="label3" style="text-align:center;width:100%;"><![CDATA[名　　称]]></label></div> 
   <div class="x-col x-col-fixed x-col-center" xid="col9" style="width:60px;" bind-visible="false">
    <label xid="label5" style="text-align:center;width:100%;">操作</label></div> </div><ul class="x-list-template" xid="listTemplateUl6">
    <li xid="li6" class="account-list-line"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row11" bind-click="chkboxChg">
   <div class="x-col x-col-33" xid="col27" bind-visible="false"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output12" bind-ref='ref("name")' style="text-align:center;padding-top:5px"></div></div>
   <div class="x-col" xid="col28" style="width:70%;"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output13" bind-ref='ref("value")' style="padding-top:5px;text-align:center;width:100%;"></div></div>
   <div class="x-col x-col-fixed" xid="col29" style="width:60px;" bind-visible="false">
   <span component="$UI/system/components/justep/button/checkbox" class="x-checkbox center-block" xid="checkbox1" onChange="chkboxChg" style="padding-left:20px;margin-top:3px;"></span></div></div></li></ul> 
  </div></div>
   <div class="x-content-center x-pull-up" xid="div9">
    <span class="x-pull-up-label" xid="span12">加载更多...</span></div> </div></div>
   <div class="x-panel-bottom" xid="bottom1"></div></div></div>
  </div> 
<span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" onReceive="windowReceiver1Receive" style="top:10px;left:117px;"></span></div>