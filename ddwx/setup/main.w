<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;$skin:compact;">
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad"
    style="height:auto;top:183px;left:102px;" onActive="modelActive" onParamsReceive="modelParamsReceive">
    <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="orderStatiscs" idColumn="id"><column label="ID" name="id" type="Integer" xid="xid1"></column>
  <column label="所有订单" name="all_order" type="Integer" xid="xid2"></column>
  <column label="待分派订单" name="candispatch_order" type="Integer" xid="xid4"></column>
  <column label="待回收订单" name="canrecv_order" type="Integer" xid="xid3"></column>
  <column label="今日新增" name="todaynew_order" type="Integer" xid="xid5"></column>
  <column label="待确认订单" name="canconfirm_order" type="Integer" xid="xid6"></column>
  <column label="修理厂确认" name="confirmed_order" type="Integer" xid="xid6"></column>
  <column label="逾期订单" name="overdue_order" type="Integer" xid="xid7"></column>
  <column label="加急订单" name="urgent_order" type="Integer" xid="xid8"></column>
  <column label="本日已收订单" name="todayrecv_order" type="Integer" xid="xid9"></column>
  <column label="我的订单" name="my_order" type="Integer" xid="xid10"></column></div>
  </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-content clearfix" xid="content4">
   <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="mainContents" routable="true" swipe="false">
   <div class="x-contents-content" xid="contentHome" style="background-color:#fafafa;" onActive="contentHomeActive">
    <div class="x-content" xid="content1">
     
  <div component="$UI/system/components/bootstrap/carousel/carousel" class="x-carousel carousel" xid="carousel1" interval="4" auto="true">
   <ol class="carousel-indicators" xid="ol1"></ol>
   <div role="listbox" component="$UI/system/components/justep/contents/contents" active="0" slidable="true" wrap="true" swipe="true" routable="false" xid="contents2" class="x-contents carousel-inner">
    <div class="x-contents-content" xid="page1">
     <img src="../res/images/1.png" alt="" xid="image1"></img></div> 
    <div class="x-contents-content" xid="page2">
     <img src="../res/images/2.png" alt="" xid="image2"></img></div> 
    <div class="x-contents-content" xid="page3">
     <img src="../res/images/3.png" alt="" xid="image3"></img></div> </div> </div><div xid="div2" class="container">
  <div component="$UI/system/components/bootstrap/row/row" class="row grid9" xid="row1" style="width:100%;padding-top:20px;">
   <div class="col col-xs-4 col-sm-4 col-md-4 col-lg-1 cell" xid="col1">
    <div xid="div1" class="card borderDiv">
     <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="所有订单" xid="btnCanRecv" icon="round round-file" onClick="getAllOrder" style="color:#888888;">
      <i xid="i1" class="round round-file" style="color:#00BFFF;"></i>
      <span xid="span1">所有订单</span></a> 
  <span class="badge angle" xid="badge2" bind-text=' $model.orderStatiscs.val("all_order")'><![CDATA[0]]></span></div> </div> 
   <div class="col col-xs-4 col-sm-4 col-md-4 col-lg-1 cell" xid="col3" bind-visible="$model.showCanRecv">
    <div xid="div3" class="card borderDiv">
     <span class="badge angle" xid="badge1" bind-text=' $model.orderStatiscs.val("canrecv_order")'><![CDATA[0]]></span><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="待回收订单" xid="btnUrgentOrder" icon="round round-edit" onClick="getCanRecvOrder" style="color:#888888;">
      <i xid="i5" class="round round-edit" style="color:#FFA500;"></i>
      <span xid="span4">待回收订单</span></a> 
  </div> </div>
  <div class="col col-xs-4 col-sm-4 col-md-4 col-lg-1 cell" xid="col8" bind-visible="$model.showCanConfirm">
   <div xid="div10" class="card borderDiv">
    <span class="badge angle" xid="badge8" bind-text=' $model.orderStatiscs.val("canconfirm_order")'>0</span>
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="待确认订单" xid="btnCanConfirm" icon="round round-edit" onClick="getCanConfirm" style="color:#888888;">
     <i xid="i19" class="round round-edit" style="color:#FFA500;"></i>
     <span xid="span24">待确认订单</span></a> </div> </div> 
   <div class="col col-xs-4 col-sm-4 col-md-4 col-lg-1 cell" xid="col4">
    <div xid="div4" class="card borderDiv">
     <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="修理厂确认单" xid="button4" icon="round round-paperairplane" onClick="getConfirmedOrder" url="/demo/native/geolocation/mainActivity.w" style="color:#888888;">
      <i xid="i6" class="round round-paperairplane" style="color:#008B8B;"></i>
      <span xid="span5">修理厂确认单</span></a> 
  <span class="badge angle" xid="badge3" bind-text=' $model.orderStatiscs.val("confirmed_order")'><![CDATA[0]]></span></div> </div> 
   
  <div class="col col-xs-4 col-sm-4 col-md-4 col-lg-1 cell" xid="col5">
   <div xid="div5" class="card borderDiv">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="加急订单" xid="button1" icon="round round-collect" onClick="getUrgentOrder" url="/demo/native/geolocation/mainActivity.w" style="color:#888888;">
     <i xid="i8" class="round round-collect" style="color:#8A2BE2;"></i>
     <span xid="span7">加急订单</span></a> 
    <span class="badge angle" xid="badge4" bind-text=' $model.orderStatiscs.val("urgent_order")'><![CDATA[0]]></span></div> 
  </div>
  <div class="col col-xs-4 col-sm-4 col-md-4 col-lg-1 cell" xid="col6" bind-visible="$model.showOverdue">
   <div xid="div6" class="card borderDiv">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="逾期订单" xid="button3" icon="round round-wallet" onClick="getOverdueOrder" url="/demo/native/geolocation/mainActivity.w" style="color:#888888;">
     <i xid="i9" class="round round-wallet" style="color:#FF6347;"></i>
     <span xid="span12">逾期订单</span></a> 
    <span class="badge angle" xid="badge5" bind-text=' $model.orderStatiscs.val("overdue_order")'><![CDATA[0]]></span></div> </div>
  <div class="col col-xs-4 col-sm-4 col-md-4 col-lg-1 cell" xid="col11">
   <div xid="div8" class="card borderDiv">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="本日已收订单" xid="button9" icon="round round-download" onClick="getTodayrecvOrder" url="/demo/native/geolocation/mainActivity.w" style="color:#888888;">
     <i xid="i12" class="round round-download" style="color:#32CD32;"></i>
     <span xid="span15">本日已收订单</span></a> 
    <span class="badge angle" xid="badge7" bind-text=' $model.orderStatiscs.val("todayrecv_order")'><![CDATA[0]]></span></div> </div>
  <div class="col col-xs-4 col-sm-4 col-md-4 col-lg-1 cell" xid="col2">
   <div xid="div7" class="card borderDiv">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="我的订单" xid="button2" icon="round round-person" url="/demo/native/geolocation/mainActivity.w" style="color:#888888;" target="contentHome" onClick="getMyOrder">
     <i xid="i11" class="round-person round" style="color:#804040;"></i>
     <span xid="span14">我的订单</span></a> 
    <span class="badge angle" xid="badge6" bind-text=' $model.orderStatiscs.val("my_order")'>0</span></div> </div>
  <div class="col col-xs-4 col-sm-4 col-md-4 col-lg-1 cell" xid="col7" bind-visible="showNewOrder">
   <div xid="div9" class="card borderDiv">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="新增订单" xid="btnNewOrder" icon="round round-plus" onClick="btnNewOrderClick" url="/demo/native/geolocation/mainActivity.w" style="color:#888888;">
     <i xid="i17" class="round-plus round" style="color:#3A81A3;"></i>
     <span xid="span23">新增订单</span></a> 
    </div> </div>
  </div>
  </div>
  </div> 
  </div> 
   <div class="x-contents-content" xid="contentLocation" onActive="contentLocationActive"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer1" autoLoad="false" onLoad="windowContainer1Load"></div></div><div class="x-contents-content" xid="contentMy" onActive="contentMyActive">
    <div class="x-panel-content" xid="content7">
   <ul xid="ul1">
    <li class="list-group-item" xid="liPerson" bind-click="myInfoClick">
     <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon pull-right" label="button" xid="button12" icon="icon-ios7-arrow-right">
      <i xid="i18" class="icon-ios7-arrow-right text-muted"></i>
      <span xid="span17"></span></a> 
     <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" icon="icon-android-contact" xid="button13">
      <i xid="i26" class="text-warning icon-android-contact"></i>
      <span xid="span18"></span></a> 
     <span xid="span16">个人资料</span></li> 
    <li class="list-group-item" xid="liModifyPwd" bind-click="updatePwdClick">
     <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon pull-right" label="button" xid="button14" icon="icon-ios7-arrow-right">
      <i xid="i27" class="icon-ios7-arrow-right text-muted"></i>
      <span xid="span20"></span></a> 
     <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" icon="icon-key" xid="button15">
      <i xid="i28" class="icon-key"></i>
      <span xid="span21"></span></a> 
     <span xid="span19">修改密码</span></li> </ul> 
   <ul xid="ul2">
    <li class="list-group-item" xid="liPhone" bind-visible="false">
     <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon pull-right" label="button" xid="button5" icon="icon-ios7-arrow-right">
      <i xid="i15" class="icon-ios7-arrow-right text-muted"></i>
      <span xid="span19"></span></a> 
     <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" icon="icon-android-call" xid="button10">
      <i xid="i14" class="text-warning icon-android-call"></i>
      <span xid="span22"></span></a> 
     <a href="tel:13612345678" xid="a2">
      <span xid="span21">客服电话</span></a> </li> 
    <li class="list-group-item" xid="liAbout" bind-click="aboutClick">
     <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon pull-right" label="button" xid="button11" icon="icon-ios7-arrow-right">
      <i xid="i16" class="icon-ios7-arrow-right text-muted"></i>
      <span xid="span8"></span></a> 
     <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" icon="icon-ios7-information-outline" xid="button6">
      <i xid="i13" class="text-danger icon-ios7-information-outline"></i>
      <span xid="span20"></span></a> 
     <span xid="span9">关于</span></li> </ul> 
   <ul xid="ul3">
    <li class="list-group-item" xid="liLoinout" bind-click="btnLoginOut">
     <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon pull-right" label="button" xid="button10" icon="icon-ios7-arrow-right">
      <i xid="i10" class="icon-ios7-arrow-right text-muted"></i>
      <span xid="span11"></span></a> 
     <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" icon="icon-gear-b" xid="button8">
      <i xid="i7" class="text-warning icon-gear-b"></i>
      <span xid="span10"></span></a> 
     <span xid="span13">注销</span></li> </ul> </div></div> 
  </div></div><div class="x-panel-bottom" xid="bottom1">
	   <div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified clearfix center-block" tabbed="true" xid="buttonGroup1" selected="btnHome">
		    <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-top active" label="首页" xid="btnHome" icon="icon-home" target="contentHome">
		     <i xid="i2" class="linear linear-bookmark icon-home"></i>
		     <span xid="span2">首页</span>
		   </a> 
		    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="位置分布" xid="btnLocation" icon="icon-home" style="font-weight:normal;" target="contentLocation">
		   <i xid="i4" class="linear linear-mapmarker icon-home"></i>
		   <span xid="span6">位置分布</span>
		   </a>
		   <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="我的" xid="btnMy" icon="icon-android-contact" target="contentMy" style="font-weight:normal;">
		     <i xid="i3" class="linear linear-user icon-android-contact"></i>
		     <span xid="span3">我的</span>
		   </a> 
	   </div> 
  </div>
  </div> 
<span component="$UI/system/components/justep/windowDialog/windowDialog" xid="loginDialog" style="top:43px;left:25px;" src="./login.w" onClose="loginDialogClose"></span>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="orderDialog" style="top:15px;left:110px;" onReceived="orderDialogReceived"></span></div>
