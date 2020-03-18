<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"/>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="修改密码"
        class="x-titlebar"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="{operation:'window.close'}"
            xid="backBtn"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title">修改密码</div>  
        <div class="x-titlebar-right reverse">
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-home" onClick="btnHomeClick"
            xid="btnHome"> 
            <i class="icon-home" xid="i8"/>  
            <span xid="span12"/>
          </a>
        </div> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="content1"> 
      <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30"
        xid="labelEdit1"> 
        <label class="x-label" xid="label1">旧密码</label>  
        <input component="$UI/system/components/justep/input/password" class="form-control x-edit"
          xid="txt_old_pwd"/> 
      </div>  
      <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30"
        xid="labelEdit2"> 
        <label class="x-label" xid="label2">新密码</label>  
        <input component="$UI/system/components/justep/input/password" class="form-control x-edit"
          xid="txt_new_pwd"/> 
      </div>  
      <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30"
        xid="labelEdit3"> 
        <label class="x-label" xid="label3"><![CDATA[确认密码]]></label>  
        <input component="$UI/system/components/justep/input/password" class="form-control x-edit"
          xid="text_comfir_pwd"/>
      </div>
            <br></br>
      <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block"
        label="确定" xid="btnOk" onClick="btnOkClick"> 
        <i xid="i1"/>  
        <span xid="span1">确定</span> 
      </a> 
    </div> 
  </div> 
</div>
