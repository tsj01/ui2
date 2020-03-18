<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:187px;left:327px;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="data1" isTree="true" idColumn="id" onCustomRefresh="data1CustomRefresh"><treeOption xid="default2" parentRelation="refid" delayLoad="true" nodeKindRelation="isleaf"></treeOption>
  <data xid="default1">[]</data>
  <rule xid="rule1">
   <col name="isleaf" xid="ruleCol1">
    <calculate xid="calculate1">
     <expr xid="default3">$model.isLeaf($row.val(&quot;lastreply&quot;))</expr></calculate> </col> 
   <col name="title_s" xid="ruleCol2">
    <calculate xid="calculate2">
     <expr xid="default4">$model.getTitleShow($row.val(&quot;title&quot;))</expr></calculate> </col> 
   <col name="content_s" xid="ruleCol3">
    <calculate xid="calculate3">
     <expr xid="default5">$model.getContentShow($row.val(&quot;content&quot;))</expr></calculate> </col> </rule>
  <column name="id" type="Integer" xid="xid1"></column>
  <column name="title" type="String" xid="xid2"></column>
  <column label="内容" name="content" type="String" xid="xid6"></column>
  <column name="status" type="String" xid="xid3"></column>
  <column name="refid" type="Integer" xid="xid4"></column>
  <column isCalculate="true" name="isleaf" type="String" xid="xid5"></column>
  <column name="lastreply" type="String" xid="xid5"></column>
  <column name="sbr" type="String" xid="xid7"></column>
  <column name="sopr" type="String" xid="xid8"></column>
  <column name="sdt" type="String" xid="xid9"></column>
  <column name="dmemo" type="String" xid="xid10"></column>
  <column name="dopr" type="String" xid="xid11"></column>
  <column name="ddt" type="String" xid="xid12"></column>
  <column name="oid" type="Integer" xid="xid15"></column>
  <column name="orderno" type="String" xid="xid16"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="标题"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">标题</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/grid/grid" hiddenCaptionbar="true" altRows="true" class="x-grid-no-bordered" xid="grid1" data="data1" appearance="treeGrid" expandColumn="title" onCellRender="grid1CellRender" onIndexChanged="grid1IndexChanged">
   <columns xid="columns1"><column width="80" name="title" xid="column1" label="&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;标题" sortable="false" align="left"></column>
  <column width="100" name="content" xid="column3" label="内容" sortable="false"></column>
  <column width="60" name="sopr" xid="column4" label="留言人" sortable="false"></column>
  <column width="75" name="sdt" xid="column5" label="留言时间" sortable="false"></column><column width="60" name="status" xid="column2" sortable="false" label="状态"></column></columns></div></div>
  <div class="x-panel-bottom" xid="bottom1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col2">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-block center-block" label="新增" xid="btnAdd" onClick="btnAddClick" style="background-color:#FFFFFF;color:#1E90FF;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;height:32px;" bind-visible=" ">
     <i xid="i3"></i>
     <span xid="span4">新增</span></a> </div> 
   <div class="x-col" xid="col3" bind-visible="$model.canView">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-block center-block" label="查看" xid="btnViev" onClick="btnVievClick" style="background-color:#FFFFFF;color:#1E90FF;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;height:32px;">
     <i xid="i2"></i>
     <span xid="span3">查看</span></a> </div> 
   <div class="x-col" xid="col4" bind-visible="$model.canReply">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-block center-block" label="回复" xid="btnReply" onClick="btnReplyClick" style="background-color:#FFFFFF;color:#1E90FF;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;height:32px;">
     <i xid="i6"></i>
     <span xid="span8">回复</span></a> </div> 
   <div class="x-col" xid="col5" bind-visible="$model.canDeal">
    <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-block center-block" label="处理" xid="btnDeal" onClick="btnDealClick" style="background-color:#FFFFFF;color:#1E90FF;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;height:32px;">
     <i xid="i10"></i>
     <span xid="span11">处理</span></a> </div> </div></div></div> 
<span component="$UI/system/components/justep/windowDialog/windowDialog" xid="msgWin"></span>
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" onReceive="windowReceiver1Receive" style="top:107px;left:92px;"></span></div>