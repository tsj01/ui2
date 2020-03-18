<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:395px;left:59px;height:auto;" onLoad="modelLoad"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="关于"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">关于</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><ul xid="ul1">
   <li class="list-group-item" xid="liMyOrder" bind-click="myOrderClick">
    
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" icon="icon-ios7-bookmarks" xid="button13">
     <i xid="i26" class="text-warning icon-ios7-bookmarks"></i>
     <span xid="span18"></span></a> 
    <span xid="resVersion"><![CDATA[资源版本：1.0.0]]></span></li> 
   <li class="list-group-item" xid="liAppVersion">
    
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" icon="icon-card" xid="button13">
     <i xid="i26" class="text-warning icon-card"></i>
     <span xid="span18"></span></a> 
    <span xid="appVersion"><![CDATA[程序版本：1.0.29]]></span></li> 
            <li class="list-group-item" xid="liUpdate" bind-click="versionClick"> 
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon pull-right"
            label="button" xid="button1" icon="icon-ios7-arrow-right"> 
            <i xid="i4" class="icon-ios7-arrow-right text-muted"/>  
            <span xid="span7"/> 
          </a>  
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon"
            icon="icon-hammer" xid="button4"> 
            <i xid="i3" class="icon-hammer"/>  
            <span xid="span6"/> 
          </a>  
          <span xid="span3"><![CDATA[版本升级]]></span> 
        </li>  
   </ul></div>
  </div> 
</div>