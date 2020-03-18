<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onLoad="modelLoad" onParamsReceive="modelParamsReceive">
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="orderdtlData" idColumn="id" limit="-1" onCustomRefresh="orderdtlDataCustomRefresh" confirmRefresh="false" confirmDelete="false"><data xid="default1">[]</data>
  <column name="id" type="Integer" xid="xid1"></column>
  <column name="oid" type="Integer" xid="xid2"></column>
  <column name="partname" type="String" xid="xid2"></column>
  <column name="attcount" type="Integer" xid="xid5"></column>
  <column name="status" type="String" xid="xid6"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="orderImgData" idColumn="id" limit="-1" onCustomRefresh="orderImgDataCustomRefresh">
   <data xid="default3">[{&quot;id&quot;:&quot;1&quot;,&quot;path&quot;:&quot;&quot;,&quot;create_time&quot;:&quot;2015-05-17&quot;,&quot;create_username&quot;:&quot;tsw&quot;}]</data>
   <column name="id" type="Integer" xid="xid4"></column>
  <column name="partname" type="String" xid="xid3"></column>
  <column name="name" type="String" xid="column3"></column>
  <column label="路径" name="path" type="String" xid="column11"></column>
  <column name="paththumb" type="String" xid="column4"></column>
  <column name="sizekb" type="String" xid="column7"></column>
  <column name="sizewh" type="String" xid="xid11"></column>
  <column name="mdtm" type="String" xid="xid16"></column>
  <column name="mopr" type="String" xid="xid17"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="标题"
          class="x-titlebar" xid="titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title"><![CDATA[]]></div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"><div component="$UI/system/components/justep/dataTables/dataTables" flexibleWidth="false" responsive="true" rowActiveClass="active" class="table table-hover table-striped" xid="dataTables1" data="orderdtlData" showRowNumber="false" onRowSelect="dataTables1RowSelect">
   <columns xid="columns2"><column name="partname" xid="column5" label="配件名称" orderable="false" width="70%" className="x-dt-title-center x-dt-cell-left"></column>
  <column name="attcount" xid="column1" label="照片" className="x-dt-title-center x-dt-cell-center" orderable="false"></column></columns></div>
  </div>
   <div class="x-col x-col-fixed" xid="col2" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;width:148px;">
   	<div class="list-img" style="height:48px;">
        
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2" style="padding:0px 0px 0px 0px;">
   <div class="x-col" xid="col3" style="padding:0px 0px 0px 0px;"><li style="padding-left:10px">
                <img src="../res/images/MD_camera.png" xid="camera" />
                <input type="file" accept="image/*" name="camera" capture="camera"  xid="fileUpload" />
                
            </li></div>
   <div class="x-col" xid="col4" bind-visible="showImgFolder" style="padding:0px 0px 0px 0px;"><li xid="li1" style="padding-left:10px">
   <img src="../res/images/MD_photo.png" xid="image2"></img>
   <input type="file" accept="image/*" name="file" xid="fileUpload2" /></li></div>
   </div></div> 
   
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="orderImgList" data="orderImgData" autoLoad="false">
   <ul class="x-list-template" xid="listTemplateUl2" style="margin-bottom:0px;">
    <li xid="li2" style="margin-right:3px;height:70px;width:70px;" class="brick"><a href="javascript:void(0)" data-size="" data-med="" data-med-size="" xid="a2">
   <img src="" bind-attr-src='$model.toImgUrl(val("paththumb"))' bind-click="image1Click" xid="image1"></img></a></li></ul> </div></div>
   </div></div>
  </div> 
<div id="gallery_imageview" class="pswp" tabindex="-1" role="dialog" aria-hidden="true" style="opacity:1;z-index:10000;" xid="div2">
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
      <div class="pswp__caption__center" xid="div19"></div></div> </div> </div> </div></div>