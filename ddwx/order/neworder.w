<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:74px;left:528px;" onLoad="modelLoad" onParamsReceive="modelParamsReceive" onActive="modelActive">
   <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="orderData" idColumn="id" limit="5" onCustomRefresh="orderDataCustomRefresh" confirmRefresh="false">
    <column label="id" name="id" type="String" xid="xid1"></column>
  <column label="派工单号" name="orderno" type="String" xid="xid2"></column>
  <column label="保险公司" name="insur" type="String" xid="xid3"></column>
  <column label="收件服务商" name="srv" type="String" xid="xid4"></column>
  <column label="预约日期" name="yydt" type="DateTime" xid="xid5"></column>
  <column label="汽修单位" name="garage" type="String" xid="xid6"></column>
  <column label="收件地址" name="garaddr" type="String" xid="xid7"></column>
  <column label="联系人" name="garlxr" type="String" xid="xid19"></column>
  <column label="联系人电话" name="gartel" type="String" xid="xid20"></column>
  <column label="收件路线" name="disparea" type="String" xid="xid11"></column>
  <column label="分派日期" name="dispdt" type="Date" xid="xid12"></column>
  <column label="状态" name="status" type="String" xid="xid13"></column>
  <column label="加急" name="isurgent" type="String" xid="xid17"></column>
  <column label="事故号" name="accno" type="String" xid="xid15"></column>
  <column label="车型" name="carmodel" type="String" xid="xid16"></column>
  <column label="车牌号" name="plateno" type="String" xid="xid18"></column>
  <column label="查勘员" name="dsy" type="String" xid="xid21"></column>
  <column label="查勘员联系方式" name="dsytel" type="String" xid="xid22"></column>
  <column label="整单未收" name="unrecv" type="String" xid="xid30"></column>
  <column label="未收原因" name="unrecvyy" type="String" xid="xid31"></column>
  <column label="收件备注" name="recvmemo" type="String" xid="xid32"></column>
  <column label="旧版本" name="oldver" type="Integer" xid="xid33"></column>
  <column name="yydtold" type="String" xid="xid34"></column>
  <column name="delayopr" type="String" xid="xid35"></column>
  <column name="delaydtm" type="String" xid="xid36"></column>
  <column name="delayy" type="String" xid="xid37"></column>
  <column name="arriveopr" type="String" xid="xid38"></column>
  <column name="arrivedtm" type="String" xid="xid39"></column>
  <column name="arriveaddr" type="String" xid="xid40"></column>
  <column label="修理厂经度" name="lng" type="String" xid="xid41"></column>
  <column label="修理厂纬度" name="lat" type="String" xid="xid42"></column>
  <column label="修理厂定位地址" name="locateaddr" type="String" xid="xid43"></column>
  <column name="insurid" type="Integer" xid="xid44"></column>
  <column name="garageid" type="Integer" xid="xid45"></column>
  <column name="srvid" type="Integer" xid="xid46"></column>
  <column name="dsyid" type="Integer" xid="xid48"></column>
  <column label="订单备注" name="memo" type="String" xid="xid47"></column>
  <column name="dept" type="String" xid="xid49"></column>
  <column name="srvopr" type="String" xid="xid50"></column>
  <column name="isdisp" type="String" xid="xid51"></column>
  <column label="保险分类" name="insurType" type="String" xid="xid62"></column>
  <column label="汽修分类" name="garType" type="String" xid="xid63"></column>
  <column label="服务商分类" name="srvType" type="String" xid="xid64"></column></div>  
   <div component="$UI/system/components/justep/data/data" xid="orderDtlData" idColumn="id" autoLoad="false" onCustomRefresh="orderDtlDataCustomRefresh" confirmRefresh="false" onAfterNew="orderDtlDataAfterNew" onAfterDelete="orderDtlDataAfterDelete" onValueChanged="orderDtlDataValueChanged" confirmDelete="false">
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
  <column label="回收备注" name="recvmemo" type="String" xid="xid24"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="orderDtlData1" idColumn="id" limit="-1" confirmRefresh="false" confirmDelete="false" onCustomRefresh="orderDtlData1CustomRefresh">
   <data xid="default6">[]</data>
   <column name="id" type="Integer" xid="column25"></column>
  <column name="oid" type="Integer" xid="xid61"></column>
  <column name="partname" type="String" xid="column20"></column>
  <column name="attcount" type="Integer" xid="column19"></column>
  <column name="status" type="String" xid="column18"></column></div><div component="$UI/system/components/justep/data/data" autoLoad="false" xid="orderImgData" idColumn="id" limit="-1" confirmRefresh="false" onCustomRefresh="orderImgDataCustomRefresh" confirmDelete="false">
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
  <column name="id" type="Integer" xid="xid27"></column>
  <column name="dtlid" type="Integer" xid="xid55"></column>
  <column name="oid" type="Integer" xid="xid56"></column>
  <column name="tp" type="String" xid="xid59"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="recvImgData" idColumn="id" limit="-1">
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
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="yesnoData" idColumn="id"><column name="id" type="Integer" xid="xid52"></column>
  <column label="名称" name="name" type="String" xid="xid53"></column>
  <column label="值" name="value" type="String" xid="xid54"></column>
  <data xid="default2">[{&quot;id&quot;:1,&quot;name&quot;:&quot;是&quot;,&quot;value&quot;:&quot;是&quot;},{&quot;id&quot;:2,&quot;name&quot;:&quot;否&quot;,&quot;value&quot;:&quot;否&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="imgData" idColumn="id" limit="-1" confirmRefresh="false" onCustomRefresh="imgDataCustomRefresh">
   <data xid="default7">[{&quot;id&quot;:&quot;1&quot;,&quot;path&quot;:&quot;&quot;,&quot;create_time&quot;:&quot;2015-05-17&quot;,&quot;create_username&quot;:&quot;tsw&quot;}]</data>
   <column name="id" type="Integer" xid="column28"></column>
  <column label="路径" name="path" type="String" xid="column28"></column>
  <column name="name" type="String" xid="column26"></column>
  <column name="paththumb" type="String" xid="column32"></column>
  <column name="sizekb" type="String" xid="column31"></column>
  <column name="sizewh" type="String" xid="column30"></column>
  <column name="mdtm" type="String" xid="column36"></column>
  <column name="mopr" type="String" xid="column29"></column>
  <column name="partname" type="String" xid="column37"></column>
  <column name="id" type="Integer" xid="column33"></column>
  <column name="dtlid" type="Integer" xid="xid57"></column>
  <column name="oid" type="Integer" xid="xid58"></column>
  <column name="tp" type="String" xid="xid60"></column></div></div>
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1">
    <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1">
     <div class="x-titlebar-left" xid="left1">
      </div> 
     <div class="x-titlebar-title" xid="title1">
      <span xid="span1"><![CDATA[新增订单]]></span></div> 
     <div class="x-titlebar-right reverse" xid="right1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="返回" xid="btnClose" icon="icon-close-round" onClick="btnCloseClick">
   <i xid="i4" class="icon-close-round"></i>
   <span xid="span5">返回</span></a></div></div> </div> 
   <div class="x-panel-content" xid="content2">
    <div component="$UI/system/components/justep/tabs/tabs" class="x-tabs" xid="tabs1" onSelect="tabs1Select">
     <div component="$UI/system/components/justep/panel/panel" class="x-panel" xid="panel4">
      <div class="x-panel-top" xid="top4">
       <ul class="nav nav-tabs" xid="ul1">
        <li class="active" xid="li1" style="text-align:center;width:33.33%;">
         <a content="tabContent_1" xid="tabItem1" style="font-weight:bold;">基本信息</a></li> 
        <li xid="li2" style="text-align:center;width:33.33%;">
         <a content="tabContent1" xid="tabItem2" style="font-weight:bold;"><![CDATA[订单明细]]></a></li> 
        <li xid="li4" style="text-align:center;width:33.33%;">
         <a content="tabContent1" xid="tabItem3" style="font-weight:bold;">定损照片</a></li> 
        </ul> </div> 
      <div class="x-panel-content" xid="content2">
       <div component="$UI/system/components/justep/contents/contents" class="x-contents" active="0" xid="orderContents" swipe="true">
        <div class="x-contents-content  x-scroll-view" xid="contentOrder" onActive="contentOrderActive">
         
  
  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div class="x-panel-content" xid="content1" _xid="C876A5CA8E700001FE371D601AB41E5A"><div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView2">
   
   <div class="x-scroll-content" xid="div8">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row17" style="padding:0px 10px 0px 0px;margin:10px 0px 0px 0px;height:30px;border-bottom-style:solid;border-bottom-width:0px;border-bottom-color:#C0C0C0;" bind-visible="showSrv">
   <div class="x-col" xid="col22"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit15" style="margin-left:10px;">
   <label class="x-label" xid="label16" style="padding-left:6px;width:70px;"><![CDATA[回收单位*]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input13" bind-ref='$model.orderData.ref("srv")' style="padding-right:6px;height:24px;" readonly="true"></input></div></div>
  <div class="x-col x-col-fixed x-col-center" xid="col21" style="width:auto;padding:0px 0px 0px 0px;margin:0px 5px 0px 0px;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-primary btn-xs btn-only-icon" label="button" xid="btnChooseSrv" icon="icon-ios7-arrow-right" onClick="btnChooseSrvClick" style="margin-top:15px">
    <i xid="i2" class="icon-ios7-arrow-right"></i>
    <span xid="span4"></span></a> </div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="padding:0px 10px 0px 0px;margin:10px 0px 0px 0px;height:30px;" bind-visible="showInsur">
   <div class="x-col" xid="col14">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit14" style="margin-left:10px;">
   <label class="x-label" xid="label15" style="padding-left:6px;width:70px;"><![CDATA[保险公司*]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input12" bind-ref='$model.orderData.ref("insur")' style="padding-right:6px;height:24px;" readonly="true"></input></div></div> 
   <div class="x-col x-col-fixed x-col-center" xid="col15" style="width:auto;padding:0px 0px 0px 0px;margin:0px 5px 0px 0px;">
    <a component="$UI/system/components/justep/button/button" class="btn btn-primary btn-xs btn-only-icon" label="button" xid="btnChooseInsur" icon="icon-ios7-arrow-right" onClick="btnChooseInsurClick" style="margin-top:15px">
     <i xid="i6" class="icon-ios7-arrow-right"></i>
     <span xid="span8"></span></a> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="padding:0px 10px 0px 0px;margin:10px 0px 0px 0px;height:30px;" bind-visible="showInsur">
   <div class="x-col" xid="col9">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit13" style="margin-left:10px;">
   <label class="x-label" xid="label13" style="padding-left:6px;width:70px;"><![CDATA[查勘员*]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input11" bind-ref='$model.orderData.ref("dsy")' style="padding-right:6px;height:24px;" readonly="true"></input></div></div> 
  <div class="x-col x-col-fixed x-col-center" xid="col16" style="width:auto;padding:0px 0px 0px 0px;margin:0px 5px 0px 0px;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-primary btn-xs btn-only-icon" label="button" xid="btnChooseInsurlxr" icon="icon-ios7-arrow-right" onClick="btnChooseInsurlxrClick" style="margin-top:15px" bind-enable=" $model.enableDsy">
    <i xid="i7" class="icon-ios7-arrow-right"></i>
    <span xid="span9"></span></a> </div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="padding:0px 0px 0px 0px;margin:10px 0px 0px 0px;height:30px;" bind-visible="showInsur">
   <div class="x-col" xid="col8">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit12" style="margin-left:10px;margin-right:10px;">
   <label class="x-label" xid="label12" style="padding-left:6px;width:70px;"><![CDATA[联系方式]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input10" bind-ref='$model.orderData.ref("dsytel")' style="padding-right:6px;height:24px;" readonly="true"></input></div></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row20" style="padding:0px 0px 0px 0px;margin:10px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col29">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit22" style="margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label21" style="padding-left:6px;width:70px;"><![CDATA[报案号*]]></label>
     <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input3" bind-ref='orderData.ref("accno")' style="padding-right:6px;height:24px;"></input>
     </div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row19" style="padding:0px 0px 0px 0px;margin:10px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col28">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit21" style="margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label14" style="padding-left:6px;width:70px;"><![CDATA[车牌号*]]></label>
     <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input4" bind-ref='orderData.ref("plateno")' style="padding-right:6px;height:24px;"></input>
     </div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row21" style="padding:0px 0px 0px 0px;margin:10px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col30">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit23" style="margin-left:10px;margin-right:10px;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#C0C0C0;">
     <label class="x-label" xid="label22" style="padding-left:6px;width:70px;"><![CDATA[车型名称*]]></label>
     <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input5" bind-ref='orderData.ref("carmodel")' style="padding-right:6px;height:24px;"></input>
     </div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row23" style="padding:0px 10px 0px 0px;margin:12px 0px 0px 0px;height:30px;" bind-visible="showGar">
   <div class="x-col" xid="col33">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit9" style="margin-left:10px;">
   <label class="x-label" xid="label9" style="padding-left:6px;width:70px;"><![CDATA[汽修单位]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input8" bind-ref='$model.orderData.ref("garage")' style="padding-right:6px;height:24px;" readonly="true"></input></div></div> 
  <div class="x-col x-col-fixed x-col-center" xid="col7" style="width:auto;padding:0px 0px 0px 0px;margin:0px 5px 0px 0px;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-primary btn-xs btn-only-icon" label="button" xid="btnChooseGarage" icon="icon-ios7-arrow-right" onClick="btnChooseGarageClick" style="margin-top:15px">
    <i xid="i3" class="icon-ios7-arrow-right"></i>
    <span xid="span3"></span></a> </div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row25" style="padding:0px 0px 0px 0px;margin:10px 0px 0px 0px;height:30px;" bind-visible="showGar">
   <div class="x-col" xid="col35">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit10" style="margin-left:10px;margin-right:10px;">
   <label class="x-label" xid="label10" style="padding-left:6px;width:70px;"><![CDATA[详细地址]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input9" bind-ref='$model.orderData.ref("garaddr")' style="padding-right:6px;height:24px;" readonly="true"></input></div></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row26" style="padding:0px 10px 0px 0px;margin:10px 0px 0px 0px;height:30px;" bind-visible="showGar">
   <div class="x-col" xid="col37">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit4" style="margin-left:10px;">
   <label class="x-label" xid="label6" style="padding-left:6px;width:70px;"><![CDATA[联系人]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input6" bind-ref='$model.orderData.ref("garlxr")' style="padding-right:6px;height:24px;"></input></div></div> 
  <div class="x-col x-col-fixed x-col-center" xid="col17" style="width:auto;padding:0px 0px 0px 0px;margin:0px 5px 0px 0px;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-primary btn-xs btn-only-icon" label="button" xid="btnChooseGarlxr" icon="icon-ios7-arrow-right" onClick="btnChooseGarlxrClick" style="margin-top:15px">
    <i xid="i9" class="icon-ios7-arrow-right"></i>
    <span xid="span10"></span></a> </div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row27" style="padding:0px 0px 0px 0px;margin:10px 0px 0px 0px;height:30px;" bind-visible="showGar">
   <div class="x-col" xid="col38">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit5" style="margin-left:10px;margin-right:10px;">
   <label class="x-label" xid="label8" style="padding-left:6px;width:70px;"><![CDATA[联系方式]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input7" bind-ref='$model.orderData.ref("gartel")' style="padding-right:6px;height:24px;"></input></div></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row9" style="padding:0px 0px 0px 0px;margin:10px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col23">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit11" style="margin-left:10px;margin-right:10px;">
   <label class="x-label" xid="label11" style="padding-left:6px;width:70px;"><![CDATA[是否加急]]></label>
   <select component="$UI/system/components/justep/select/select" class="form-control x-edit" xid="select1" style="padding-right:6px;height:24px;" optionsAutoLoad="true" bind-options="yesnoData" bind-optionsValue="value" bind-optionsLabel="name" bind-ref='$model.orderData.ref("isurgent")'></select></div></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="padding:0px 0px 0px 0px;margin:10px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col6"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2" style="margin-left:10px;margin-right:10px;">
   <label class="x-label" xid="label2" style="padding-left:6px;width:70px;"><![CDATA[预约日期*]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input15" bind-ref='orderData.ref("yydt")' style="padding-right:6px;height:24px;"></input>
   </div></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row30" style="padding:0px 0px 0px 0px;margin:10px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col41">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit32" style="border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#C0C0C0;margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label31" style="padding-left:6px;width:70px;"><![CDATA[订单备注]]></label>
     <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="input2" bind-ref='orderData.ref("memo")' style="padding-right:6px;height:24px;"></input>
     </div> </div> </div>
  
  
  </div>
   </div></div>
   <div class="x-panel-bottom" xid="bottom1" style="margin-right:5px;margin-bottom:5px" visible="false">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col2"></div>
   <div class="x-col" xid="col3"></div>
   <div class="x-col" xid="col4"></div>
  <div class="x-col" xid="col5"></div></div></div></div></div> 
        <div class="x-contents-content" xid="contentOrderDtl" onActive="contentOrderDtlActive" onactive="contentOrderDtlActive">
         <div component="$UI/system/components/justep/toolBar/toolBar" class="x-toolbar form-inline x-toolbar-spliter" xid="toolBar1" style="padding-left:3px;padding-bottom:4px;padding-top:4px;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-xs btn-only-label" label="增行" xid="btnNew" onClick="btnAddRowClick" style="background-color:#FFFFFF;color:#1E90FF;height:24px;color:1E90FF;font-size:small;vertical-align:middle;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;width:60px;">
    <i xid="i11"></i>
    <span xid="span12">增行</span></a> 
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-xs btn-only-label" label="插行" xid="btnInsert" onClick="btnInsertClick" style="background-color:#FFFFFF;color:#1E90FF;height:24px;font-size:small;vertical-align:middle;margin-left:10px;width:60px;">
   <i xid="i13"></i>
   <span xid="span14">插行</span></a><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-xs btn-only-label" label="删行" xid="btnDel" onClick="btnDelClick" style="background-color:#FFFFFF;color:#1E90FF;height:24px;font-size:small;vertical-align:middle;margin-left:10px;width:60px;">
   <i xid="i12"></i>
   <span xid="span13">删行</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-xs btn-only-label" label="扫码" xid="btnScan" onClick="btnScanClick" style="background-color:#FFFFFF;color:#1E90FF;height:24px;font-size:small;vertical-align:middle;margin-left:10px;width:60px;" bind-style="{color: canScan.get()?'#1E90FF':'gray'}" bind-enable="canScan">
   <i xid="i5"></i>
   <span xid="span6">扫码</span></a></div>
  
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8" style="padding-bottom:48px;height:100%;font-size:x-small;padding-top:0px;margin-top:0px;">
   <div component="$UI/system/components/justep/grid/grid" hiddenCaptionbar="true" altRows="true" class="x-grid-no-bordered x-grid-title-center" xid="dtlGrid" data="orderDtlData" width="100%" showRowNumber="true" height="auto" serverSort="false" rowNumberWidth="20" onRowClick="dtlGridRowClick">
   <columns xid="columns2">
    
    
    
  <column name="partname" editable="true" editor="input" xid="column21" label="配件名称" align="left" sortable="false" resizable="false"></column><column name="partno" editable="true" editor="input" xid="column22" label="易碎贴" align="center" sortable="false"></column>
  <column name="isvalue" editable="true" editor="checkbox" xid="column24" label="价值件" align="center" sortable="false" width="45px"></column>
  </columns> </div></div></div> 
        <div class="x-contents-content" xid="contentOrderImg" onActive="contentOrderImgActive" onactive="contentOrderImgActive">
         <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col" xid="col18">
    <div component="$UI/system/components/justep/dataTables/dataTables" flexibleWidth="false" responsive="true" rowActiveClass="active" class="table table-hover table-striped" xid="tblOrderImg" data="orderDtlData1" showRowNumber="false" onRowSelect="tblOrderImgRowSelect">
     <columns xid="columns3">
      <column name="partname" xid="column34" label="配件名称" orderable="false" width="70%" className="x-dt-title-center x-dt-cell-left"></column>
      <column name="attcount" xid="column35" label="照片" className="x-dt-title-center x-dt-cell-center" orderable="false"></column></columns> </div> </div> 
   <div class="x-col x-col-fixed" xid="col13" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;width:148px;">
    <div class="list-img" style="height:48px;" xid="div2">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7" style="padding:0px 0px 0px 0px;">
      <div class="x-col" xid="col12" style="padding:0px 0px 0px 0px;">
       <li style="padding-left:10px" xid="li8">
        <img src="../res/images/MD_camera.png" xid="imgCamera" bind-click="imgCameraClick"></img>
        <input type="file" accept="image/*" name="image5" capture="camera" xid="fileUpload"></input></li> </div> 
      <div class="x-col" xid="col18" style="padding:0px 0px 0px 0px;">
       <li xid="li9" style="padding-left:10px">
        <img src="../res/images/MD_photo.png" xid="image4"></img>
        <input type="file" accept="image/*" name="file" xid="fileUpload2"></input></li> </div> </div> </div> 
    <div component="$UI/system/components/justep/list/list" class="x-list" xid="orderImgList" data="imgData" autoLoad="false">
     <ul class="x-list-template" xid="listTemplateUl1" style="margin-bottom:0px;">
      <li xid="li7" style="margin-right:3px;height:70px;width:70px;" class="brick">
       <a href="javascript:void(0)" data-size="" data-med="" data-med-size="" xid="a1">
        <img src="" bind-attr-src='$model.toImgUrl(val("paththumb"))' bind-click="image1Click" xid="image3"></img></a> </li> </ul> </div> </div> </div></div> 
  </div> </div> </div> </div> </div> 
   <div class="x-panel-bottom" xid="bottom2">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1" bind-visible="canSave"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-block center-block" label="暂存" xid="btnSave" icon="icon-archive" onClick="btnSaveClick" style="background-color:#FFFFFF;color:#1E90FF;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;height:32px;">
   <i xid="i1" class="icon-archive"></i>
   <span xid="span2">暂存</span></a></div>
   <div class="x-col" xid="col19"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-block center-block" label="提交" xid="btnSubmit" icon="icon-android-checkmark" onClick="btnSubmitClick" style="background-color:#FFFFFF;color:#1E90FF;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;height:32px;">
    <i xid="i10" class="icon-android-checkmark"></i>
    <span xid="span11">提交</span></a></div>
  
  <div class="x-col x-col-25" xid="col10" bind-visible="$model.showSMS">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-block center-block" label="短信识别" xid="btnSms" icon="icon-archive" onClick="btnSmsClick" style="background-color:#FFFFFF;color:#1E90FF;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;height:32px;">
    <i xid="i8" class="linear linear-fileadd icon-archive"></i>
    <span xid="span7">短信识别</span></a> 
  <div class="clearfix" xid="div32_afterBtnSms"></div></div></div>
  </div></div>
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
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="brDialog" src="./srvlist.w" style="top:460px;left:331px;" onReceived="brDialogReceived"></span>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="lxrDialog" style="top:439px;left:192px;" onReceived="lxrDialogReceived"></span>
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" style="top:13px;left:55px;" onReceive="windowReceiver1Receive"></span>
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" xid="smsPopOver" direction="right-top" opacity="0.7" anchor="div32_afterBtnSms" dismissible="true" position="bottom">
   <div class="x-popOver-overlay" xid="div4"></div>
   <div class="x-popOver-content tb-sorting" xid="div3">
    <div xid="div1">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row24">
   <div class="x-col" xid="col40">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row32">
   <div class="x-col" xid="col45"><textarea component="$UI/system/components/justep/textarea/textarea" class="form-control" xid="smsInput" placeHolder="请粘贴收到的短信内容" style="height:255px;"></textarea></div>
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row16">
     <div class="x-col" xid="col44">
      <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-block center-block" label="   开 始 识 别" xid="btnAnaly" icon="icon-archive" onClick="btnAnalyClick" style="border-style:solid solid solid solid;border-width:1px 1px 1px 1px;height:32px;font-weight:bold;color:#FFFFFF;">
       <i xid="i18" class="linear linear-fileadd icon-archive"></i>
       <span xid="span17">   开 始 识 别</span></a> </div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row28" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
     <div class="x-col" xid="col36">
      <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit8" style="margin-left:10px;margin-right:10px;">
   <label class="x-label" xid="label17" style="padding-left:6px;width:70px;"><![CDATA[报案号码]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="inputAccno" style="padding-right:6px;height:24px;"></input></div></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row14" style="padding:0px 0px 0px 0px;margin:5px 0px 0px 0px;height:30px;">
     <div class="x-col" xid="col34">
      
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit16" style="margin-left:10px;margin-right:10px;">
   <label class="x-label" xid="label18" style="padding-left:6px;width:70px;"><![CDATA[车牌号码]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="inputPlateno" style="padding-right:6px;height:24px;"></input></div></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row31" style="padding:0px 0px 0px 0px;margin:5px 0px 0px 0px;height:30px;">
     <div class="x-col" xid="col42">
      
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit17" style="margin-left:10px;margin-right:10px;">
   <label class="x-label" xid="label19" style="padding-left:6px;width:70px;"><![CDATA[车型名称]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="inputCarmodel" style="padding-right:6px;height:24px;"></input></div></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row29" style="padding:0px 0px 0px 0px;margin:5px 0px 0px 0px;height:30px;">
     <div class="x-col" xid="col39">
      
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit18" style="margin-left:10px;margin-right:10px;">
   <label class="x-label" xid="label20" style="padding-left:6px;width:70px;"><![CDATA[汽修单位]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="inputGarage" style="padding-right:6px;height:24px;"></input></div></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row22" style="padding:0px 0px 0px 0px;margin:5px 0px 0px 0px;height:30px;">
     <div class="x-col" xid="col32">
      
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit19" style="margin-left:10px;margin-right:10px;">
   <label class="x-label" xid="label23" style="padding-left:6px;width:70px;"><![CDATA[详细地址]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="inputGaraddr" style="padding-right:6px;height:24px;"></input></div></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row18" style="padding-top:15px;">
      
     <div class="x-col" xid="col20">
      
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-block center-block" label="  导入内容" xid="btnImport" icon="linear linear-highlight" onClick="btnImportClick" style="border-style:solid solid solid solid;border-width:1px 1px 1px 1px;height:32px;font-weight:bold;color:#FFFFFF;">
   <i xid="i17" class="linear linear-highlight"></i>
   <span xid="span16">导入内容</span></a></div><div class="x-col" xid="col43">
      <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-block center-block" label="  取  消" xid="btnCancel" icon="linear linear-arrowdown" style="border-style:solid solid solid solid;border-width:1px 1px 1px 1px;height:32px;font-weight:bold;color:#FFFFFF;" onClick="btnSmsClick">
   <i xid="i16" class="linear linear-arrowdown"></i>
   <span xid="span18">取  消</span></a></div> </div> 
  </div> </div></div> </div> </div></div>