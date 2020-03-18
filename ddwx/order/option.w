<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:122px;left:131px;height:auto;"> 
  </div>  
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
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/tabs/tabs" class="x-tabs" xid="tabs1" onSelect="tabs1Select">
   <div component="$UI/system/components/justep/panel/panel" class="x-panel" xid="panel4">
    <div class="x-panel-top" xid="top4">
     <ul class="nav nav-tabs" xid="ul1" li5="li1">
      <li class="active" xid="li1" style="text-align:center;width:25%;">
       <a content="tabContent_1" xid="tabItem1" style="font-weight:bold;">左侧</a></li> 
      <li xid="li2" style="text-align:center;width:25%;" dir="ltr">
       <a content="tabContent1" xid="tabItem2" style="font-weight:bold;">中间</a></li> 
      <li xid="li4" style="text-align:center;width:25%;">
       <a content="tabContent1" xid="tabItem3" style="font-weight:bold;">右侧</a></li> 
       <li xid="li5" style="text-align:center;width:25%;">
       <a content="tabContent1" xid="tabItem4" style="font-weight:bold;">其他</a></li>
       </ul> 
       </div> 
    <div class="x-panel-content" xid="content2">
     <div component="$UI/system/components/justep/contents/contents" class="x-contents" active="0" xid="orderContents" swipe="true">
      <div class="x-contents-content  x-scroll-view" xid="contentOrder" onActive="contentOrderActive">
      	<img src="../res/images/WechatIMG65.png" alt="左侧" style="width:442px;height:413px;" class="center-block"/>
  </div> 
      <div class="x-contents-content" xid="contentOrderDtl" onActive="contentOrderDtlActive" onactive="contentOrderDtlActive">
       <img src="../res/images/WechatIMG64.png"  alt="右侧" style="text-align:justify;width:441px;height:411px;" class="center-block"/>
       </div> 
      <div class="x-contents-content" xid="contentOrderImg" onActive="contentOrderImgActive" onactive="contentOrderImgActive">
     	
       <img src="../res/images/WechatIMG66.png" alt="右侧" style="width:439px;height:409px;" class="center-block"/></div> 
       
  <div class="x-contents-content" xid="contentOrderOrder" onActive="contentOrderImgActive" onactive="contentOrderImgActive">
      444
       </div></div> </div> </div> </div></div>
  </div> 
</div>