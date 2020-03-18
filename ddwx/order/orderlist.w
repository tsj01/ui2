<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:347px;left:68px;" onParamsReceive="modelParamsReceive"> 
    <div component="$UI/system/components/justep/data/data" xid="stateType" idColumn="value" autoLoad="true">
   <column name="value" type="String" xid="xid14"></column>
   <column name="text" type="String" xid="xid15"></column>
   <data xid="default1">[{&quot;value&quot;:&quot;&quot;,&quot;text&quot;:&quot;全部&quot;},{&quot;value&quot;:&quot;1&quot;,&quot;text&quot;:&quot;今日新增&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="orderData" idColumn="id" limit="5" onCustomRefresh="orderDataCustomRefresh">
  <column label="id" name="id" type="Integer" xid="xid1"></column>
  <column label="派工单号" name="orderno" type="String" xid="xid2"></column>
  <column label="保险公司" name="insur" type="String" xid="xid3"></column>
  <column label="收件服务商" name="srv" type="String" xid="xid4"></column>
  <column label="预约日期" name="yydt" type="String" xid="xid5"></column>
  <column label="汽修单位" name="garage" type="String" xid="xid6"></column>
  <column label="收件地址" name="garaddr" type="String" xid="xid7"></column>
  <column label="车辆信息" name="car_info" type="String" xid="xid8"></column>
  <column label="收件信息" name="dtl_info" type="String" xid="xid9"></column>
  <column label="逾期信息" name="overdue_info" type="String" xid="xid10"></column>
  <column label="收件路线" name="disparea" type="String" xid="xid11"></column>
  <column label="分派日期" name="dispdt" type="Date" xid="xid12"></column>
  <column label="状态" name="status" type="String" xid="xid13"></column>
  <column label="确认次数" name="confirmed" type="Integer" xid="xid16"></column>
  <column label="加急" name="isurgent" type="String" xid="xid17"></column></div>
  </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="派工单"
        class="x-titlebar" xid="titlebar"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="backBtnClick"
            xid="backBtn"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title">派工单</div>  
        <div class="x-titlebar-right reverse"></div> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="content1"> 
      <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
        xid="panel2"> 
        <div class="x-panel-top" xid="top2"> 
          <div component="$UI/system/components/justep/row/row" class="x-row"
            xid="row6"> 
            <div class="x-col" xid="col11"> 
              <div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup"
                xid="inputGroup1"> 
                <input type="text" class="form-control input-sm" component="$UI/system/components/justep/input/input"
                  xid="searchInput" placeHolder="请输入车牌号、报案号或订单号"/>  
                <div class="input-group-btn" xid="div4"> 
                  <a component="$UI/system/components/justep/button/button"
                    class="btn btn-default btn-sm btn-only-icon" label="button" xid="btnSearch"
                    icon="icon-android-search" onClick="btnSearch"> 
                    <i xid="i6" class="icon-android-search"/>  
                    <span xid="span10"/> 
                  </a> 
                <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm btn-only-icon" label="button" xid="btnSearchOptions" icon="icon-android-settings" onClick="btnSearchOptionsClick" style="margin-left:1px">
   <i xid="i2" class="icon-android-settings"></i>
   <span xid="span2"></span></a></div> 
              </div> 
            </div> 
          </div> 
        </div>  
        <div class="x-panel-content  x-scroll-view" xid="content2"> 
          <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView"
            xid="scrollView1"> 
            <div class="x-content-center x-pull-down container" xid="div1"> 
              <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i1"/>  
              <span class="x-pull-down-label" xid="span1">下拉刷新...</span> 
            </div>  
            <div class="x-scroll-content" xid="div5"> 
              <div component="$UI/system/components/justep/list/list" class="x-list"
                xid="orderList" data="orderData" autoLoad="false" limit="-1"> 
                <ul class="x-list-template" xid="listTemplateUl1"> 
                  <li xid="li1" style="padding:0px 0px 0px 0px;margin:5px 5px 5px 5px;border-style:ridge ridge ridge ridge;border-color:#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0;border-width:1px 1px 1px 1px;"> 
                    <div component="$UI/system/components/justep/row/row" class="x-row x-row-center"
                      xid="row1" bind-click="listLineClick"> 
                      <div class="x-col" xid="col2" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"> 
                        <div component="$UI/system/components/justep/row/row"
                          class="x-row" xid="row2" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;background-color:#E8E8E8;"> 
                          <div class="x-col x-col-fixed" xid="col9" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;width:20px;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" icon="icon-model-s" xid="button13" style="padding:0px 1px 1px 1px;margin:1px 1px 1px 1px;height:25;width:25;">
    <i xid="i26" class="text-warning icon-model-s"></i>
    <span xid="span18"></span></a> </div>
  <div class="x-col" xid="col4" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1" style="padding:4px 1px 1px 1px;margin:1px 1px 1px 1px;">
    <label class="x-label" xid="label1" dir="rtl" style="width:50px;color:#000000;"><![CDATA[订单号]]></label>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output1" dataType="String" bind-ref='ref("orderno")' style="color:#000000;" onRender="output1Render"></div></div> </div>
  <div class="x-col x-col-fixed" xid="col7" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;width:155px;">
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit6" style="padding:4px 1px 1px 1px;margin:1px 1px 1px 1px;color:#FF6600">
    <label class="x-label" xid="label6" style="width:65px;">预约时间</label>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output7"  style="color:#FF6600;" bind-text='$model.fmtDate(val("yydt"))'></div></div> </div></div>  
                        <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
   <div class="x-col" xid="col10" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="padding:0px 0px 0px 7px;margin:0px 0px 0px 0px;height:30px;">
     <div class="x-col" xid="col12" style="padding:7px 0px 0px 0px;margin:0px 0px 0px 0px;"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output6" style="padding:7px 0px 0px 0px;margin:0px 0px 0px 0px;" bind-ref='ref("car_info")' onRender="carInfoRender"></div></div>
  <div class="x-col x-col-fixed" xid="col13" style="padding:7px 0px 0px 0px;margin:0px 0px 0px 0px;width:80px;">
   <div component="$UI/system/components/justep/output/output" class="x-output" xid="output9" style="padding:7px 0px 0px 0px;margin:0px 0px 0px 0px;font-weight:bolder;text-align:center;" bind-ref='ref("status")'></div></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row9" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
     <div class="x-col" xid="col19" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
      <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit4" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:35px;">
       <label class="x-label" xid="label4" style="color:#696969;width:67px;padding-left:7px;"><![CDATA[汽修单位]]></label>
       <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output4" dataType="String" bind-ref='ref("garage")' style="color:#3c3c3c;"></div></div> </div> 
     <div class="x-col x-col-fixed" xid="col6" style="padding:7px 0px 0px 0px;margin:0px 0px 0px 0px;width:80px;">
   <div component="$UI/system/components/justep/output/output" class="x-output" xid="output2" style="padding:7px 0px 0px 0px;margin:0px 0px 0px 0px;font-weight:bolder;text-align:center;" bind-ref='ref("insur")'></div></div>
  </div> 
     
     </div> 
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row8" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:30px;">
     <div class="x-col" xid="col14" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;">
      <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit3" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;height:35px;">
       <label class="x-label" xid="label3" style="color:#696969;width:67px;padding-left:7px;"><![CDATA[收件地址]]></label>
       <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output3" dataType="String" bind-ref='ref("garaddr")' style="color:#3c3c3c;" onRender="addrRender"></div></div> </div> 
  </div><div component="$UI/system/components/justep/row/row"
                          class="x-row" xid="row5" style="padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;"> 
                          <div class="x-col" xid="col3">
                            <div component="$UI/system/components/justep/output/output"
                              class="x-output" xid="output5" bind-ref='ref("dtl_info")' style="padding:0px 0px 0px 10px;margin:0px 0px 0px 0px;color:#1E90FF;"/>
                          </div>  
                          <div class="x-col x-col-fixed" xid="col5" style="width:50px;"><label xid="lbl_confirmed" style="color:#0080FF;padding-left:5px;" bind-visible=' val("confirmed") &gt;0'><![CDATA[确]]></label><label xid="lbl_isurgent" style="color:#FF0000;padding-left:5px;" bind-visible=" val(&quot;isurgent&quot;) =='是'"><![CDATA[急]]></label>
  </div>
  <div class="x-col x-col-fixed" xid="col8" style="width:90px;"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output11" bind-ref='ref("overdue_info")' style="color:#FF6600;text-align:center;"></div></div></div> 
                      </div> 
                    </div> 
                  </li> 
                </ul> 
              </div> 
            </div>  
            <div class="x-content-center x-pull-up" xid="div6"> 
              <span class="x-pull-up-label" xid="span4">加载更多...</span> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div> 
  </div> 
<span component="$UI/system/components/justep/windowDialog/windowDialog" xid="orderDialog" style="top:15px;left:110px;" onReceived="orderDialogReceived"></span>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="searchDialog" style="top:15px;left:110px;" onReceived="orderDialogReceived"></span></div>
