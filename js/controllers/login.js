angular.module("controllers.loginTemp",[])
.controller("loginTemp",function(
	$scope,
	$ionicPopup,
	$onBroad,
	$window,
	$bindWx,
	$location
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
	alert(callback);
	$scope.loginTempItem={phone:"",password:""};
	$scope.loginIn=function(){
		var phone=$scope.loginTempItem.phone;
		var password=$scope.loginTempItem.password;
		if(phone !== "" && password !== ""){
			$onBroad.onBroad(phone,password,function(err,result){
				if(err){
					$ionicPopup.alert({
					    title: 'sorry，系统出错'
					})
				}else{
					if(result && result.success == true){
						var userInfo=result.userInfo;
						if(userInfo.openId !== null && userInfo.openId !== "" && userInfo.openId !== undefined){
							$window.location.href=callback;
						}else{
							$window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx49a9db1095de4f65&redirect_uri=http%3a%2f%2fparty.idrv.com.cn%2fyja%2fcode&response_type=code&scope=snsapi_userinfo&state=wxBind_._"+callback+"#wechat_redirect";
						}
					}else if(result && result.errorInfo){
						var errorInfo=result.errorInfo;
						$ionicPopup.alert({
						    title: errorInfo
						})
					}
				}
			})
		}else{
			$ionicPopup.alert({
			    title: '请确保输入正确'
			})
		}
	}
})