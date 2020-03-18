<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:131px;left:194px;" onLoad="modelLoad">
   <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="orderData" idColumn="id" onCustomRefresh="orderDataCustomRefresh" limit="5">
    <column label="id" name="id" type="String" xid="xid1"></column>
  <column label="派工单号" name="orderno" type="String" xid="xid2"></column>
  <column name="insurid" type="Integer" xid="xid3"></column>
  <column label="保险公司" name="insur" type="String" xid="xid4"></column>
  <column name="srvid" type="Integer" xid="xid5"></column>
  <column label="收件服务商" name="srv" type="String" xid="xid6"></column>
  <column label="预约日期" name="yydt" type="String" xid="xid7"></column>
  <column name="garageid" type="String" xid="xid8"></column>
  <column label="汽修单位" name="garage" type="String" xid="xid9"></column>
  <column label="收件地址" name="garaddr" type="String" xid="xid10"></column>
  <column label="联系人" name="garlxr" type="String" xid="xid11"></column>
  <column label="联系人电话" name="gartel" type="String" xid="xid12"></column>
  <column label="收件路线" name="disparea" type="String" xid="xid13"></column>
  <column label="分派日期" name="dispdt" type="Date" xid="xid14"></column>
  <column label="状态" name="status" type="String" xid="xid15"></column>
  <column label="加急" name="isurgent" type="String" xid="xid16"></column>
  <column label="事故号" name="accno" type="String" xid="xid17"></column>
  <column label="车型" name="carmodel" type="String" xid="xid18"></column>
  <column label="车牌号" name="plateno" type="String" xid="xid19"></column>
  <column name="dsyid" type="Integer" xid="xid20"></column>
  <column label="查勘员" name="dsy" type="String" xid="xid20"></column>
  <column label="查勘员联系方式" name="dsytel" type="String" xid="xid21"></column>
  <column label="整单未收" name="unrecv" type="String" xid="xid22"></column>
  <column label="未收原因" name="unrecvyy" type="String" xid="xid23"></column>
  <column label="收件备注" name="recvmemo" type="String" xid="xid24"></column>
  <column label="旧版本" name="oldver" type="Integer" xid="xid25"></column>
  <column name="yydtold" type="String" xid="xid26"></column>
  <column name="delayopr" type="String" xid="xid27"></column>
  <column name="delaydtm" type="String" xid="xid28"></column>
  <column name="delayy" type="String" xid="xid29"></column>
  <column name="arriveopr" type="String" xid="xid30"></column>
  <column name="arrivedtm" type="String" xid="xid31"></column>
  <column name="arriveaddr" type="String" xid="xid32"></column>
  <column label="修理厂经度" name="lng" type="String" xid="xid33"></column>
  <column label="修理厂纬度" name="lat" type="String" xid="xid34"></column>
  <column label="修理厂定位地址" name="locateaddr" type="String" xid="xid35"></column>
  <column label="订单备注" name="memo" type="String" xid="xid36"></column>
  <column name="vin" type="String" xid="xid37"></column>
  <column name="dept" type="String" xid="xid38"></column>
  <column name="srvopr" type="String" xid="xid39"></column>
  <column name="own" type="String" xid="xid40"></column>
  <column name="owntel" type="String" xid="xid41"></column>
  <column name="isdisp" type="String" xid="xid42"></column>
  <column label="建单人员" name="coprname" type="String" xid="xid43"></column></div>  
   <div component="$UI/system/components/justep/data/data" xid="orderDtlData" idColumn="id" autoLoad="false" onCustomRefresh="orderDtlDataCustomRefresh">
    <column label="id" name="id" type="Integer" xid="column1"></column>
  <column label="零部件名称" name="partname" type="String" xid="column2"></column>
  <column label="易碎贴" name="partno" type="String" xid="xid13"></column>
  <column label="单价" name="price" type="Double" xid="column3"></column>
  <column label="派工单id" name="oid" type="Integer" xid="xid12"></column>
  <column label="价值件" name="isvalue" type="String" xid="xid8"></column>
  <column label="回收状态" name="status" type="String" xid="xid14"></column>
  <column label="回收日期" name="recvdt" type="String" xid="xid9"></column>
  <column label="回收人员" name="recvopr" type="String" xid="xid10"></column>
  <column label="原厂编号" name="orgsno" type="String" xid="xid25"></column>
  <column label="未收原因" name="recvyy" type="String" xid="xid23"></column>
  <column label="回收备注" name="recvmemo" type="String" xid="xid24"></column>
  <column name="recvoprname" type="String" xid="xid44"></column>
  <column name="recvtel" type="String" xid="xid45"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="orderImgData" idColumn="id" limit="-1" onCustomRefresh="orderImgDataCustomRefresh">
   <data xid="default3">[{&quot;id&quot;:&quot;1&quot;,&quot;path&quot;:&quot;&quot;,&quot;create_time&quot;:&quot;2015-05-17&quot;,&quot;create_username&quot;:&quot;tsw&quot;}]</data>
   <column name="id" type="Integer" xid="column11"></column>
  <column label="路径" name="path" type="String" xid="column11"></column>
  <column name="name" type="String" xid="column12"></column>
  <column name="paththumb" type="String" xid="column13"></column>
  <column name="sizekb" type="String" xid="column14"></column>
  <column name="sizewh" type="String" xid="column15"></column>
  <column name="mdtm" type="String" xid="column9"></column>
  <column name="mopr" type="String" xid="column10"></column>
  <column name="partname" type="String" xid="xid26"></column>
  <column name="id" type="Integer" xid="xid27"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="recvImgData" idColumn="id" limit="-1" onCustomRefresh="recvImgDataCustomRefresh">
   <data xid="default1">[{&quot;id&quot;:&quot;1&quot;,&quot;path&quot;:&quot;&quot;,&quot;create_time&quot;:&quot;2015-05-17&quot;,&quot;create_username&quot;:&quot;tsw&quot;}]</data>
   <column name="id" type="Integer" xid="column5"></column>
  <column label="路径" name="path" type="String" xid="column5"></column>
  <column name="name" type="String" xid="column4"></column>
  <column name="paththumb" type="String" xid="column17"></column>
  <column name="sizekb" type="String" xid="column16"></column>
  <column name="sizewh" type="String" xid="column8"></column>
  <column name="mdtm" type="String" xid="column7"></column>
  <column name="mopr" type="String" xid="column6"></column>
  <column name="partname" type="String" xid="xid28"></column>
  <column name="id" type="String" xid="xid29"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="repairImgData" idColumn="id" limit="-1" onCustomRefresh="repairImgDataCustomRefresh">
   <data xid="default2">[{&quot;id&quot;:&quot;1&quot;,&quot;path&quot;:&quot;&quot;,&quot;create_time&quot;:&quot;2015-05-17&quot;,&quot;create_username&quot;:&quot;tsw&quot;}]</data>
   <column name="id" type="Integer" xid="column18"></column>
   <column label="路径" name="path" type="String" xid="column18"></column>
   <column name="name" type="String" xid="column19"></column>
   <column name="paththumb" type="String" xid="column24"></column>
   <column name="sizekb" type="String" xid="column26"></column>
   <column name="sizewh" type="String" xid="column22"></column>
   <column name="mdtm" type="String" xid="column23"></column>
   <column name="mopr" type="String" xid="column25"></column>
   <column name="partname" type="String" xid="column20"></column>
   <column name="id" type="String" xid="column21"></column></div></div>
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1">
    <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1">
     <div class="x-titlebar-left" xid="left1">
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="返回" xid="backBtn" icon="icon-chevron-left" onClick="backBtnClick">
       <i xid="i1" class="icon-chevron-left"></i>
       <span xid="span2">返回</span></a> </div> 
     <div class="x-titlebar-title" xid="title1">
      <span xid="span1"><![CDATA[订单详情]]></span></div> 
     <div class="x-titlebar-right reverse" xid="right1"><a component="$UI/system/components/justep/button/button" label="" class="btn btn-link btn-only-icon" icon="icon-home" onClick="btnHomeClick" xid="btnHome">
   <i class="icon-home" xid="i8"></i>
   <span xid="span12"></span></a></div></div> </div> 
   <div class="x-panel-content" xid="content2">
    <div component="$UI/system/components/justep/tabs/tabs" class="x-tabs" xid="tabs1" onSelect="tabs1Select">
     <div component="$UI/system/components/justep/panel/panel" class="x-panel" xid="panel4">
      <div class="x-panel-top" xid="top4">
       <ul class="nav nav-tabs" xid="ul1">
        <li class="active" xid="li1" style="width:33.33%;text-align:center;">
         <a content="tabContent_1" xid="tabItem1" style="font-weight:bold;">基本信息</a></li> 
        <li xid="li2" style="width:33.33%;text-align:center;">
         <a content="tabContent1" xid="tabItem2" style="font-weight:bold;">收件明细</a></li> 
        <li xid="li4" style="width:33.33%;text-align:center;">
         <a content="tabContent1" xid="tabItem3" style="font-weight:bold;">图片信息</a></li> </ul> </div> 
      <div class="x-panel-content" xid="content2">
       <div component="$UI/system/components/justep/contents/contents" class="x-contents" active="0" xid="orderContents" swipe="true">
        <div class="x-contents-content  x-scroll-view" xid="contentOrder" onActive="contentOrderActive">
         
  
  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div class="x-panel-content" xid="content1" _xid="C876A5CA8E700001FE371D601AB41E5A"><div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView2">
   
   <div class="x-scroll-content" xid="div8">
  <div component="$UI/system/components/justep/row/row" id="orderSteps" xid="rowSteps" style="height:130px;">
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col" xid="col8"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit8" style="margin-left:5px;margin-right:10px;">
   <label class="x-label" xid="label7" style="padding-left:6px;width:100px;">订单状态</label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output6" bind-ref="$model.getOrderStatus()" style="padding-right:6px;color:#FF8040;font-weight:bold;text-align:left;"></div></div>
  </div>
   <div class="x-col" xid="col9"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit9" style="margin-left:10px;margin-right:5px;">
   <label class="x-label" xid="label8" style="padding-left:6px;width:100px;text-align:left;">建单人员</label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output7" bind-ref='$model.orderData.ref("coprname")' style="padding-right:6px;color:#FF8040;font-weight:bold;text-align:right;"></div></div>
  </div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row17" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col22"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit17" style="border-top-style:solid;border-top-width:1px;border-top-color:#C0C0C0;margin-left:10px;margin-right:10px;">
   <label class="x-label" xid="label13" style="padding-left:6px;width:65px;"><![CDATA[派工单号]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output10" bind-ref='orderData.ref("orderno")' style="text-align:right;padding-right:6px;" onRender="output10Render"></div></div></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row19" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col28">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit21" style="margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label14" style="padding-left:6px;width:65px;"><![CDATA[车牌号]]></label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output11" bind-ref='orderData.ref("plateno")' style="text-align:right;padding-right:6px;"></div></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row20" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col29">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit22" style="margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label21" style="padding-left:6px;width:65px;"><![CDATA[报案号]]></label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output12" bind-ref='orderData.ref("accno")' style="text-align:right;padding-right:6px;"></div></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row21" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col30">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit23" style="margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label22" style="padding-left:6px;width:65px;"><![CDATA[车型名称]]></label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output13" bind-ref='$model.orderData.ref("carmodel")' style="text-align:right;padding-right:6px;"></div></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row22" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col32">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit24" style="border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#C0C0C0;margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label23" style="padding-left:6px;width:65px;"><![CDATA[保险公司]]></label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output14" bind-ref='orderData.ref("insur")' style="text-align:right;padding-right:6px;"></div></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row23" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col33">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit25" style="margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label24" style="padding-left:6px;width:65px;"><![CDATA[汽修单位]]></label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output15" bind-ref='orderData.ref("garage")' style="text-align:right;padding-right:6px;"></div></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row24" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col34">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit26" style="margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label25" style="padding-left:6px;width:65px;"><![CDATA[回收线路]]></label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output16" bind-ref='orderData.ref("disparea")' style="text-align:right;padding-right:6px;"></div></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row25" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col35">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit27" style="margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label26" style="padding-left:6px;width:65px;"><![CDATA[详细地址]]></label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output17" bind-ref='orderData.ref("garaddr")' style="text-align:right;padding-right:6px;"></div></div> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col6"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2" style="margin-left:10px;margin-right:10px;">
   <label class="x-label" xid="label2" style="padding-left:6px;width:65px;"><![CDATA[预约日期]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output1" bind-ref='$model.orderData.ref("yydt")' style="text-align:right;padding-right:6px;"></div></div></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row26" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col37">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit28" style="margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label27" style="padding-left:6px;width:65px;"><![CDATA[联系人]]></label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output18" bind-ref='orderData.ref("garlxr")' style="text-align:right;padding-right:6px;"></div></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row27" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col38">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit29" style="border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#C0C0C0;margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label28" style="padding-left:6px;width:65px;"><![CDATA[联系方式]]></label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output19" style="text-align:right;padding-right:6px;" bind-ref='orderData.ref("gartel")' onRender="telRender"></div></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row28" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col39">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit30" style="margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label29" style="padding-left:6px;width:65px;"><![CDATA[查勘员]]></label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output20" bind-ref='orderData.ref("dsy")' style="text-align:right;padding-right:6px;"></div></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row29" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col40">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit31" style="margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label30" style="padding-left:6px;width:65px;"><![CDATA[联系方式]]></label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output21" bind-ref='orderData.ref("dsytel")' style="text-align:right;padding-right:6px;" onRender="telRender"></div></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row30" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col41">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit32" style="border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#C0C0C0;margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label31" style="padding-left:6px;width:65px;"><![CDATA[订单备注]]></label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output22" bind-ref='$model.orderData.ref("memo")' style="text-align:right;padding-right:6px;"></div></div> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;" bind-visible="false">
   <div class="x-col" xid="col7"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit3" style="margin-left:10px;margin-right:10px;">
   <label class="x-label" xid="label3" style="padding-left:6px;width:65px;"><![CDATA[收件状态]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output2" bind-ref='$model.getOrderStatus()' style="text-align:right;padding-right:6px;"></div></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col11">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit4" style="margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label4" style="padding-left:6px;width:65px;"><![CDATA[未收原因]]></label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output3" bind-ref='$model.orderData.ref("unrecvyy")' style="text-align:right;padding-right:6px;"></div></div> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col14">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit6" style="border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#C0C0C0;margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label5" style="padding-left:6px;width:65px;"><![CDATA[回收备注]]></label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output4" bind-ref='$model.orderData.ref("recvmemo")' style="text-align:right;padding-right:6px;"></div></div> </div> </div></div>
   </div></div>
   <div class="x-panel-bottom" xid="bottom1" style="margin-right:5px;margin-bottom:5px" height="40">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col2" bind-visible="$model.canUpd"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-block center-block" label="修改" xid="btnUpd" onClick="btnUpdClick" style="background-color:#FFFFFF;color:#1E90FF;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;height:32px;" bind-style="{color: canUpd.get()?'#1E90FF':'gray'}" bind-visible=" ">
   <i xid="i3"></i>
   <span xid="span4">修改</span></a></div>
   <div class="x-col" xid="col3" bind-visible="$model.canCopy"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-block center-block" label="复制" xid="btnCopy" onClick="btnCopyClick" style="background-color:#FFFFFF;color:#1E90FF;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;height:32px;">
   <i xid="i2"></i>
   <span xid="span3">复制</span></a>
  </div>
  <div class="x-col" xid="col16" bind-visible="$model.canImgRepair">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-block center-block" label="维修拍照" xid="btnImgRepair" onClick="btnImgRepairClick" style="background-color:#FFFFFF;color:#1E90FF;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;height:32px;" bind-style="{color: canImgRepair.get()?'#1E90FF':'gray'}">
    <i xid="i9"></i>
    <span xid="span10">维修拍照</span></a> </div>
   <div class="x-col" xid="col4" bind-visible="$model.canConfirm"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-block center-block" label="确认" xid="btnConfirm" onClick="btnConfirmClick" style="background-color:#FFFFFF;color:#1E90FF;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;height:32px;" bind-style="{color: canConfirm.get()?'#1E90FF':'gray'}">
   <i xid="i6"></i>
   <span xid="span8">确认</span></a></div>
  <div class="x-col" xid="col5" bind-visible="$model.canMsg"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-block center-block" label="留言" xid="btnMsg" onClick="btnMsgClick" style="background-color:#FFFFFF;color:#1E90FF;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;height:32px;" bind-style="{color: canMsg.get()?'#1E90FF':'gray'}">
   <i xid="i10"></i>
   <span xid="span11">留言</span></a></div>
  <div class="x-col" xid="col15" bind-visible="$model.can2Confirm"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-block center-block" label="催单" xid="btn2Confirm" onClick="btn2ConfirmClick" style="background-color:#FFFFFF;color:#1E90FF;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;height:32px;">
    <i xid="i7"></i>
    <span xid="span9">催单</span></a> </div>
  
    </div></div></div></div> 
        <div class="x-contents-content  x-scroll-view" xid="contentOrderDtl" onActive="contentOrderDtlActive">
         <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView">
   <div class="x-content-center x-pull-down container" xid="div4">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i4"></i>
    <span class="x-pull-down-label" xid="span7">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div3">
    <div component="$UI/system/components/justep/list/list" class="x-list" xid="listOrderDtl" data="orderDtlData" autoLoad="false">
     <ul class="x-list-template" xid="listTemplateUl2">
      <li xid="li3" style="padding:0px 0px 0px 0px;margin:5px 5px 5px 5px;border-style:ride ridge ridge ridge;border-color:#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0;border-width:1px 1px 1px 1px;">
       <div component="$UI/system/components/justep/row/row" class="x-row x-row-center" xid="row1">
        <div xid="col10" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;" class="x-col">
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row31" style="border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#C0C0C0;" bind-click="listLineClicked">
    <div xid="col42" class="x-col x-col-33">
     <label xid="label38" bind-text='ref("partname")' style="font-weight: normal;">配件名称</label></div> 
    <div class="x-col x-col-33" xid="col43">
     <label xid="label39" bind-text='ref("partno")' style="font-weight: normal;">易碎贴号</label></div> 
    <div class="x-col x-col-25" xid="col44" style="text-align:right;">
     <label xid="label40" bind-text='ref("status")' style="color:#00D200;font-weight: normal;">回收状态</label></div> 
  <div class="x-col x-col-10 x-col-center pull-right" xid="col12" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;width:30px;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" icon="icon-chevron-right" xid="button2">
    <i xid="i5" class="text-warning icon-chevron-right"></i>
    <span xid="span5"></span></a> </div></div> </div></div> </li> </ul> </div> </div> 
   <div class="x-content-center x-pull-up" xid="div2">
    <span class="x-pull-up-label" xid="span6">加载更多...</span></div> </div></div> 
        <div class="x-contents-content" xid="contentOrderImg" onActive="contentOrderImgActive" onactive="contentOrderImgActive">
         <div component="$UI/system/components/justep/row/row" class="x-row" xid="rowOrderImge" style="padding-top:10px;">
   <div class="x-col" xid="col13">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="margin-left:10px;margin-right:10px;" xid="labelEdit5">
     <label class="x-label" xid="label9" style="margin:5px 0px 0px 10px;width:70px;text-align:left;">定损照片:</label>
     <div class="x-edit" xid="div1"></div></div> 
    <ul  component="$UI/system/components/justep/list/list" class="free-wall x-list x-list-template" data="orderImgData" xid="listImg" autoLoad="false" >
     <li class="brick" xid="li5" style="height:70px;width:70px;">
      <a href="javascript:void(0)" data-size="" data-med="" data-med-size="" xid="a1">
       <img src="" bind-attr-src='$model.toImgUrl(val("paththumb"))' xid="image1" bind-click="image1Click"></img></a> </li> </ul> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="rowRecvImage" style="padding-top:10px;">
   <div class="x-col" xid="col1">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="margin-left:10px;margin-right:10px;" xid="labelEdit1">
     <label class="x-label" xid="label1" style="margin:5px 0px 0px 10px;width:70px;text-align:left;"><![CDATA[回收照片:]]></label>
     <div class="x-edit" xid="div5"></div></div> 
    <ul  component="$UI/system/components/justep/list/list" class="free-wall x-list x-list-template" data="recvImgData" xid="listImg2" autoLoad="false" >
     <li class="brick" xid="li6" style="height:70px;width:70px;">
      <a href="javascript:void(0)" data-size="" data-med="" data-med-size="" xid="a2">
       <img src="" bind-attr-src='$model.toImgUrl(val("paththumb"))' xid="image2" bind-click="image1Click"></img></a> </li> </ul> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="rowRepairImage" style="padding-top:10px;">
   <div class="x-col" xid="col17">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="margin-left:10px;margin-right:10px;" xid="labelEdit7">
     <label class="x-label" xid="label6" style="margin:5px 0px 0px 10px;width:70px;text-align:left;"><![CDATA[维修照片:]]></label>
     <div class="x-edit" xid="div20"></div></div> 
    <ul component="$UI/system/components/justep/list/list" class="free-wall x-list x-list-template" data="repairImgData" xid="listImg3" autoLoad="false">
     <li class="brick" xid="li7" style="height:70px;width:70px;">
      <a href="javascript:void(0)" data-size="" data-med="" data-med-size="" xid="a3">
       <img src="" bind-attr-src='$model.toImgUrl(val("paththumb"))' xid="image3" bind-click="image1Click"></img></a> </li> </ul> </div> </div></div> </div> </div> </div> </div> </div> 
   </div>
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" style="top:13px;left:55px;" onReceive="windowReceiver1Receive"></span>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="orderDialog" style="top:15px;left:110px;" onReceived="orderDialogReceived"></span><span component="$UI/system/components/justep/windowDialog/windowDialog" xid="recvDialog" style="top:138px;left:106px;" onReceived="recvDialogReceived"></span>
  <resource xid="resource2"><require xid="require1" url="css!../res/css/steps"></require>
  </resource>
  <div id="gallery_orderdetail" class="pswp" tabindex="-1" role="dialog" aria-hidden="true" style="opacity:1;z-index:10000;" xid="div11">
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
      <button class="pswp__button pswp__button--delete" title="Delete" xid="btnDel">></button>
      <button class="pswp__button pswp__button--download" title="Download" xid="btnDownload">></button>
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
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="msgDialog" style="top:15px;left:110px;" onReceived="orderDialogReceived"></span>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="imgRepireDialog"></span></div>