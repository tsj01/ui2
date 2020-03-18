<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div id="gallery_recvorder" class="pswp" tabindex="-1" role="dialog" aria-hidden="true" style="opacity:1;z-index:10000;" xid="div2">
   <div class="pswp__bg" xid="div3"></div>
   <div class="pswp__scroll-wrap" xid="div4">
    <div class="pswp__container" xid="div5">
     <div class="pswp__item" xid="div6"></div>
     <div class="pswp__item" xid="div7"></div>
     <div class="pswp__item" xid="div8"></div></div> 
    <div class="pswp__ui pswp__ui--hidden" style="height:44px;" xid="div9">
     <div class="pswp__top-bar" xid="div10">
      <div class="pswp__counter" xid="div11"></div>
      <button class="pswp__button pswp__button--close" title="Close (Esc)" xid="button1"></button>
      <button class="pswp__button pswp__button--share" title="Share" xid="button2"></button>
      <button class="pswp__button pswp__button--fs" title="Toggle fullscreen" xid="button3"></button>
      <button class="pswp__button pswp__button--zoom" title="Zoom in/out" xid="button4"></button>
      <div class="pswp__preloader" xid="div12">
       <div class="pswp__preloader__icn" xid="div13">
        <div class="pswp__preloader__cut" xid="div14">
         <div class="pswp__preloader__donut" xid="div15"></div></div> </div> </div> </div> 
     <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap" xid="div16">
      <div class="pswp__share-tooltip" xid="div17"></div></div> 
     <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)" xid="button5"></button>
     <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)" xid="button6"></button>
     <div class="pswp__caption" xid="div18">
      <div class="pswp__caption__center" xid="div19"></div></div> </div> </div> </div><div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:63px;left:381px;">
   <div component="$UI/system/components/justep/data/data" xid="orderDtlData" idColumn="id" autoLoad="false">
    <rule xid="rule1">
   <col name="recvdt_short" xid="ruleCol1">
    <calculate xid="calculate1">
     <expr xid="default2">$row.val(&quot;recvyy&quot;).substr(5,11)</expr></calculate> </col> </rule>
  <column label="id" name="id" type="Integer" xid="column1"></column>
  <column label="零部件名称" name="partname" type="String" xid="column2"></column>
  <column label="易碎贴" name="partno" type="String" xid="xid13"></column>
  <column label="单价" name="price" type="Double" xid="column3"></column>
  <column label="派工单id" name="oid" type="Integer" xid="xid12"></column>
  <column label="回收状态" name="status" type="String" xid="xid14"></column>
  <column label="价值件" name="isvalue" type="String" xid="xid8"></column>
  <column label="回收日期" name="recvdt" type="String" xid="xid9"></column>
  <column label="回收人员" name="recvopr" type="String" xid="xid10"></column>
  <column label="原厂编号" name="orgsno" type="String" xid="xid1"></column>
  <column label="未收原因" name="recvyy" type="String" xid="xid2"></column>
  <column label="回收备注" name="recvmemo" type="String" xid="xid3"></column>
  <column name="recvoprname" type="String" xid="xid18"></column>
  <column name="recvtel" type="String" xid="xid20"></column></div> 
  <div component="$UI/system/components/justep/data/data" xid="recvStatusType" idColumn="value" autoLoad="true">
   <column name="value" type="String" xid="column4"></column>
   <column name="text" type="String" xid="xid15"></column>
   <data xid="default1">[{&quot;value&quot;:&quot;未收&quot;,&quot;text&quot;:&quot;未收&quot;},{&quot;value&quot;:&quot;已收&quot;,&quot;text&quot;:&quot;已收&quot;},{&quot;value&quot;:&quot;不收&quot;,&quot;text&quot;:&quot;不收&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="unrecvReasons" idColumn="id" onCustomRefresh="unrecvReasonsCustomRefresh">
   <column label="ID" name="id" type="Integer" xid="column5"></column>
   <column label="value" name="value" type="String" xid="column6"></column>
   <column label="name" name="name" type="String" xid="column7"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="orderImgData" idColumn="id" limit="-1" onCustomRefresh="orderImgDataCustomRefresh">
   <data xid="default3">[{&quot;id&quot;:&quot;1&quot;,&quot;path&quot;:&quot;&quot;,&quot;create_time&quot;:&quot;2015-05-17&quot;,&quot;create_username&quot;:&quot;tsw&quot;}]</data>
   <column name="id" type="Integer" xid="xid4"></column>
  <column name="partname" type="String" xid="xid19"></column>
  <column name="name" type="String" xid="xid5"></column>
  <column label="路径" name="path" type="String" xid="column11"></column>
  <column name="paththumb" type="String" xid="xid6"></column>
  <column name="sizekb" type="String" xid="xid7"></column>
  <column name="sizewh" type="String" xid="xid11"></column>
  <column name="mdtm" type="String" xid="xid16"></column>
  <column name="mopr" type="String" xid="xid17"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="recvImgData" idColumn="id" limit="-1" onCustomRefresh="orderImgDataCustomRefresh">
   <data xid="default4">[{&quot;id&quot;:&quot;1&quot;,&quot;path&quot;:&quot;&quot;,&quot;create_time&quot;:&quot;2015-05-17&quot;,&quot;create_username&quot;:&quot;tsw&quot;}]</data>
   <column name="id" type="Integer" xid="column13"></column>
   <column name="partname" type="String" xid="column12"></column>
   <column name="name" type="String" xid="column14"></column>
   <column label="路径" name="path" type="String" xid="column8"></column>
   <column name="paththumb" type="String" xid="column15"></column>
   <column name="sizekb" type="String" xid="column16"></column>
   <column name="sizewh" type="String" xid="column17"></column>
   <column name="mdtm" type="String" xid="column9"></column>
   <column name="mopr" type="String" xid="column10"></column></div></div>
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1">
    <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1">
     <div class="x-titlebar-left" xid="left1">
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="返回" xid="backBtn" icon="icon-chevron-left" onClick="backBtnClick">
       <i xid="i1" class="icon-chevron-left"></i>
       <span xid="span2">返回</span></a> </div> 
     <div class="x-titlebar-title" xid="title1">
      <span xid="span1"><![CDATA[配件回收]]></span></div> 
     <div class="x-titlebar-right reverse" xid="right1"></div></div> </div> 
   <div class="x-panel-content" xid="content2">
    
  <div component="$UI/system/components/justep/contents/contents" class="x-contents" active="0" xid="content3" swipe="false">
   <div class="x-contents-content active" xid="contentOrder">
    
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
     <div class="x-col" xid="col7">
      
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit11" style="border-top-style:solid;border-top-width:1px;border-top-color:#C0C0C0;margin-left:10px;margin-right:10px;">
   <label class="x-label" xid="label11" style="margin:0px 0px 0px 5px;width:70px;text-align:left;"><![CDATA[配件名称:]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output7" bind-ref='$model.orderDtlData.ref("partname")' style="text-align:right;"></div></div></div> 
     
  </div> 
    
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
   
   <div class="x-col" xid="col8">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2" style="margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label1" style="margin:0px 0px 0px 5px;width:70px;text-align:left;">易碎贴号:</label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output4" bind-ref='$model.orderDtlData.ref("partno")' style="text-align:right;"></div></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row12" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col20">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit18" style="margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label18" style="margin:0px 0px 0px 5px;width:70px;text-align:left;"><![CDATA[原厂编码:]]></label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output18" bind-ref='$model.orderDtlData.ref("orgsno")' style="text-align:right;"></div></div> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col10"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit13" style="margin-left:10px;margin-right:10px;">
   <label class="x-label" xid="label13" style="margin:0px 0px 0px 5px;width:70px;text-align:left;">单价:</label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output9" bind-ref='$model.orderDtlData.ref("price")' style="text-align:right;"></div></div></div>
   </div>
<div component="$UI/system/components/justep/row/row" class="x-row" xid="row8" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col14">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit10" style="border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#C0C0C0;margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label10" style="margin:0px 0px 0px 5px;width:70px;text-align:left;">价值件:</label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output14" bind-ref='$model.orderDtlData.ref("isvalue")' style="text-align:right;"></div></div> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="rowImag" style="padding-top:10px;">
   
  <div class="x-col" xid="col13"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="margin-left:10px;margin-right:10px;" xid="labelEdit5">
   <label class="x-label" xid="label9" style="margin:5px 0px 0px 10px;width:70px;text-align:left;"><![CDATA[定损照片:]]></label>
   <div class="x-edit" xid="div1"></div></div><ul component="$UI/system/components/justep/list/list" class="free-wall x-list x-list-template" data="orderImgData" xid="listImg" autoLoad="true" onAfterRender="listImgAfterRender">
   <li class="brick" xid="li1" style="height:70px;width:70px;">
    <a href="javascript:void(0)" data-size="" data-med="" data-med-size="" xid="a1" >
     <img src="" bind-attr-src='$model.toImgUrl(val("paththumb"))' xid="image1" bind-click="image1Click"></img></a> </li> </ul>
  </div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="padding-top:10px;">
   <div class="x-col" xid="col5">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="margin-left:10px;margin-right:10px;" xid="labelEdit6">
     <label class="x-label" xid="label5" style="margin:5px 0px 0px 10px;width:70px;text-align:left;"><![CDATA[回收照片:]]></label>
     <div class="x-edit" xid="div20"></div></div> 
    <ul component="$UI/system/components/justep/list/list" class="free-wall x-list x-list-template" data="recvImgData" xid="list1" autoLoad="true" onAfterRender="listImgAfterRender">
     <li class="brick" xid="li2" style="height:70px;width:70px;">
      <a href="javascript:void(0)" data-size="" data-med="" data-med-size="" xid="a2">
       <img src="" bind-attr-src='$model.toImgUrl(val("paththumb"))' xid="image2" bind-click="image1Click"></img></a> </li> </ul> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row10" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col19">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit16" style="border-top-style:solid;border-top-width:1px;border-top-color:#C0C0C0;margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label17" style="margin:0px 0px 0px 5px;width:70px;text-align:left;">回收日期:</label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output17" bind-ref='$model.orderDtlData.ref("recvdt")' style="text-align:right;"></div></div> </div> 
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col17">
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit14" style="margin-left:10px;margin-right:10px;">
  <label class="x-label" xid="label15" style="margin:0px 0px 0px 5px;width:70px;text-align:left;">回收人员:</label>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output10" bind-ref='$model.orderDtlData.ref("recvoprname")' style="text-align:right;"></div></div> </div></div>
   <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col16">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit7" style="margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label7" style="margin:0px 0px 0px 5px;width:70px;text-align:left;">联系电话:</label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output1" bind-ref='$model.orderDtlData.ref("recvtel")' style="text-align:right;" onRender="telRender"></div></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row9" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
     <div class="x-col" xid="col3">
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit4" style="margin-left:10px;margin-right:10px;">
   <label class="x-label" xid="label4" style="margin:0px 0px 0px 5px;width:70px;text-align:left;">回收备注:</label>
   <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="inputRecvmemo" bind-ref='$model.orderDtlData.ref("recvmemo")'></input></div></div> </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7" style="padding:5px 5px 0px 8px;margin:0px 0px 0px 0px;">
   <div class="x-col" xid="col1">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit3" style="padding:5px 0px 0px 0px;margin:0px 0px 0px 0px;">
     <label class="x-label" xid="label2" style="margin:0px 0px 0px 5px;width:70px;text-align:right;">回收状态:</label>
     <span component="$UI/system/components/justep/select/radioGroup" class="x-radio-group x-radios x-edit" xid="rgpStatus" bind-itemset="recvStatusType" bind-itemsetValue='ref("value")' bind-itemsetLabel='ref("text")' onChange="rgpStatusChange" bind-ref='$model.orderDtlData.ref("status")'></span></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row13" bind-visible="showRecvyy" style="padding:0px 5px 0px 8px;margin:0px 0px 0px 0px;">
   <div class="x-col" xid="col4">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEditRecvyy" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
     <label class="x-label" xid="label3" style="margin:0px 0px 0px 5px;width:70px;text-align:right;">不收原因:</label>
     <span component="$UI/system/components/justep/select/radioGroup" class="x-radio-group x-radio-group-vertical x-radios x-edit" xid="rgpRecvyy" bind-itemset="unrecvReasons" bind-itemsetValue='ref("value")' bind-itemsetLabel='ref("name")' disabled="true" readonly="true" bind-ref='unrecvyy' onChange="rgpRecvyyChange"></span></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row14" bind-visible="showOthRecvyy" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
   <div class="x-col" xid="col6">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1" style="margin-left:10px;margin-right:10px;">
     <label class="x-label" xid="label6" style="margin:0px 0px 0px 5px;width:70px;text-align:right;">其他情况:</label>
     <input component="$UI/system/components/justep/input/input" class="form-control input-sm x-edit" xid="othRecvyy" bind-ref="othrecvyy"></input></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="padding:20px 20px 0px 0px;margin:0px 0px 0px 10px;">
   <div class="x-col" xid="col2"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-only-label btn-block" label="照片" xid="btnDealImg" icon="icon-chevron-down" style="background-color:#FFFFFF;color:#1E90FF;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;" onClick="btnDealImgClick">
   <i xid="i2" class="icon-chevron-down"></i>
   <span xid="span4">照片</span></a></div>
   <div class="x-col" xid="col12"></div></div>
  </div> 
   
   </div></div> 
   </div>
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1" style="top:22px;left:162px;" onReceive="windowReceiver1Receive"></span>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" style="top:0px;left:94px;"></span>
  </div>