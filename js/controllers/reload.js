angular.module("controllers.reloadr",[])
.controller("reloadr",function(
	$scope,
	$ionicPopup,
	$reload,
	$window
){
	var getQueryStr=function(callback){
		var reg = new RegExp("(^|&)" + callback + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.replace(/\?/g, "&").substr(1).match(reg);
	    if (r != null){
	    	return (r[2]);
	    }else{
	    	return null;
	    } 
	}
	var callbackEncode=getQueryStr("callback");
	var callback=decodeURIComponent(callbackEncode);
	$reload.reload(function(err,result){
		if(err){
			$ionicPopup.alert({
				title:"sorry,系统出错"
			})
		}else{
			if(result && result.success == true){
				var openId=result.userInfo.openId;
				if(!openId){
					$window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx49a9db1095de4f65&redirect_uri=http%3a%2f%2fparty.idrv.com.cn%2fyja%2fcode&response_type=code&scope=snsapi_userinfo&state=wxBind_._"+callback+"#wechat_redirect";
				}else{
					$window.location.href=callback;
				}
			}else{
				$window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx49a9db1095de4f65&redirect_uri=http%3a%2f%2fparty.idrv.com.cn%2fyja%2fcode&response_type=code&scope=snsapi_base&state=wxLogin_._"+callback+"#wechat_redirect";
			}
		}
	})
})