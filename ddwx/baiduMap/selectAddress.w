<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad" style="top:96px;left:9px;height:auto;"/> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="定位123" xid="button1" onClick="button1Click">
   <i xid="i1"></i>
   <span xid="span1">定位123</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="button" xid="button2" onClick="button2Click">
   <i xid="i2"></i>
   <span xid="span2"></span></a></div><div class="x-panel-content" xid="mapArea"><iframe xid="baiduMap" style="width:100%;height:100%;border:0;"></iframe>
  </div>
   </div>
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="mapDataReceiver" onReceive="mapDataReceiverReceive"></span>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" style="top:77px;left:158px;"></span></div>