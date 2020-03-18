define(function(require) {
    var isDebug = false;
    var isWx = true;  //是否微信环境,微信部署时设置为true,而app编译时设置为false
    var localhostTests = [
                          /^localhost$/,
                          /\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:\d{1,5})?\b/ // IP v4
                      ];
    var host = window.location.hostname,test,i,ln;
  	for (i = 0, ln = localhostTests.length; i < ln; i++) {
          test = localhostTests[i];
          if (host.search(test) !== -1) {
              //host is localhost or an IP address
        	  isDebug = true;
              break;
          }
    }
//开发调试调用指定地址的后台服务,调试时正常运行时根据相对路径调用
    //var base_url = "http://kld.8866.org:9080/dingdong";       //开发机
  var base_url = "https://kld.bestedu.online/dingdong";
//  	var base_url = "https://kld.bestedu.online/dingdong";     //小程序测试机https
  	
  	var key = 'ddwx';
  	var key_uid = 'ddwx_uid';
  	var key_openid = 'ddwx_openid';
  	var key_nickname = 'ddwx_nickname';
  	window.kldCfg = {
  			isWx : isWx,
			isDebug : isDebug,
			base_url : base_url,
			ver : 200 ,
			is4Login : false,
			key : key,
			key_uid : key_uid,
			curUid : localStorage[key_uid],
			key_openid : key_openid,
			openid : localStorage[key_openid],
			nickname : localStorage[key_nickname],
			imgPrefix : 'static/upload/',
			lastMonths : 2 //最近2个月内的订单
	};
  	return window.kldCfg;
	
});