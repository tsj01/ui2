<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad" style="top:96px;left:9px;height:auto;" onParamsReceive="modelParamsReceive"/> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1" height="42" style="padding-top:3px">
  
  <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="当前位置" xid="button1" onClick="button1Click" style="background-color:#FFFFFF;color:#1E90FF;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;height:32px;">
   <i xid="i1"></i>
   <span xid="span1" style="vertical-align:top;">当前位置</span></a><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="订单分布" xid="button2" onClick="button2Click" style="background-color:#FFFFFF;color:#1E90FF;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;height:32px;">
   <i xid="i2"></i>
   <span xid="span2" style="vertical-align:top;">订单分布</span></a>
  <span component="$UI/system/components/justep/button/checkbox" class="x-checkbox" xid="chkShowLabel" label="显示标签" checkedValue="1" uncheckedValue="0" value="0" checked="false" bind-ref="$model.showLabel"></span>
  <span component="$UI/system/components/justep/button/checkbox" class="x-checkbox" xid="chkShowD" label="显示预约" checkedValue="1" uncheckedValue="0" value="0" checked="false" bind-ref="$model.showD"></span></div><div class="x-panel-content" xid="mapArea"><iframe xid="baiduMap" style="width:100%;height:100%;border:0;"></iframe>
  </div>
   </div>
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="mapDataReceiver" onReceive="mapDataReceiverReceive" style="top:61px;left:55px;"></span>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" style="top:77px;left:158px;"></span></div>