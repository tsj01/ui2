<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:390px;top:161px;" onLoad="modelLoad" onModelConstruct="modelModelConstruct" onModelConstructDone="modelModelConstructDone"/>  
  <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="pages" routable="true" swipe="false">
   <div class="x-contents-content" xid="maint"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer1" src="./setup/main.w"></div></div></div>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="loginDialog" style="top:43px;left:25px;" src="./setup/login.w" onReceived="loginDialogReceived"></span></div>