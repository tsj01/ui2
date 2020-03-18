<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:417px;left:147px;height:auto;"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="userData" idColumn="id" onCustomRefresh="userDataCustomRefresh"><column label="id" name="id" type="Integer" xid="xid6"></column>
  <column label="用户账号" name="loginid" type="String" xid="xid1"></column>
  <column label="用户名称" name="name" type="String" xid="xid2"></column>
  <column label="性别" name="gender" type="String" xid="xid3"></column>
  <column label="所属部门" name="dname" type="String" xid="xid7"></column>
  <column label="企业类型" name="brtp" type="String" xid="xid4"></column>
  <column label="企业名称" name="brname" type="String" xid="xid5"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="个人资料"
        class="x-titlebar"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="{operation:'window.close'}"
            xid="backBtn"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title">个人资料</div>  
        <div class="x-titlebar-right reverse"><a component="$UI/system/components/justep/button/button" label="" class="btn btn-link btn-only-icon" icon="icon-home" onClick="btnHomeClick" xid="btnHome">
   <i class="icon-home" xid="i8"></i>
   <span xid="span12"></span></a></div> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="content1">
      <ul component="$UI/system/components/justep/list/list" class="x-list x-list-template"
        xid="list1" data="userData"> 
        <li xid="li2" class="list-group-item">
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
    <label class="x-label" xid="label2"><![CDATA[企业类型：]]></label>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output2" bind-ref='$model.userData.ref("brtp")'></div></div> </li><li xid="li1" class="list-group-item">
          <div component="$UI/system/components/justep/labelEdit/labelEdit"
            class="x-label-edit x-label30" xid="labelEdit1"> 
            <label class="x-label" xid="label1"><![CDATA[企业名称：]]></label>  
            <div component="$UI/system/components/justep/output/output" class="x-output x-edit"
              xid="output1" bind-ref='$model.userData.ref("brname")'/>
          </div>
        </li>
        <li xid="li1" class="list-group-item">
          <div component="$UI/system/components/justep/labelEdit/labelEdit"
            class="x-label-edit x-label30" xid="labelEdit1"> 
            <label class="x-label" xid="label1"><![CDATA[用户账号：]]></label>  
            <div component="$UI/system/components/justep/output/output" class="x-output x-edit"
              xid="output1" bind-ref='$model.userData.ref("loginid")'/>
          </div>
        </li>
        <li xid="li1" class="list-group-item">
          <div component="$UI/system/components/justep/labelEdit/labelEdit"
            class="x-label-edit x-label30" xid="labelEdit1"> 
            <label class="x-label" xid="label1"><![CDATA[用户名称：]]></label>  
            <div component="$UI/system/components/justep/output/output" class="x-output x-edit"
              xid="output1" bind-ref='$model.userData.ref("name")'/>
          </div>
        </li>
        <li xid="li1" class="list-group-item">
          <div component="$UI/system/components/justep/labelEdit/labelEdit"
            class="x-label-edit x-label30" xid="labelEdit1"> 
            <label class="x-label" xid="label1"><![CDATA[所属部门：]]></label>  
            <div component="$UI/system/components/justep/output/output" class="x-output x-edit"
              xid="output1" bind-ref='$model.userData.ref("dname")'/>
          </div>
        </li>
      </ul>
    </div> 
  </div> 
</div>
