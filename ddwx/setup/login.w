<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:327px;left:53px;"
    onLoad="modelLoad" onActive="modelActive"/>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="登录"
        class="x-titlebar"> 
        <div class="x-titlebar-left"/>  
        <div class="x-titlebar-title">登录</div>  
        <div class="x-titlebar-right reverse"/> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="content1"> 
      <img src="../res/images/loginpage.png" alt="" xid="image1" height="200px" style="width:100%;"></img><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30"
        xid="labelEditUserId"> 
        <label class="x-label" xid="labelUserId"><![CDATA[用户账号：]]></label>  
        <input component="$UI/system/components/justep/input/input" class="form-control x-edit"
          xid="txtUserId" placeHolder="请输入用户账号"/> 
      </div>  
      <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30"
        xid="labelEditUserPwd"> 
        <label class="x-label" xid="labelUserPwd"><![CDATA[用户密码：]]></label>  
        <input component="$UI/system/components/justep/input/password" class="form-control x-edit"
          xid="txtUserPwd" placeHolder="请输入用户密码"/> 
      </div>  
      <br/>  
      <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block"
        label="确定" xid="btnLogin" onClick="btnLoginClick"> 
        <i xid="i1"/>  
        <span xid="span1">确定</span> 
      </a> 
    </div> 
  </div> 
<span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver1"></span></div>
