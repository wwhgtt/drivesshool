angular.module("controllers.code",[])
.controller("code",function(
	$scope,
	$ionicPopup,
	$location,
	$window,
	$bindWx,
	$wxLogin,
	$reload
){
	//系统刚进来时肯定是没有code的
	// alert("in")
	var getQueryStr=function(code){
		var reg = new RegExp("(^|&)" + code + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.replace(/\?/g, "&").substr(1).match(reg);
	    if (r != null){
	    	return (r[2]);
	    }else{
	    	return null;
	    } 
	}
	var codeMax=getQueryStr("code");
	// alert(codeMax)
	var getQueryString=function(state){
		var reg = new RegExp("(^|&)" + state + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.replace(/\?/g, "&").substr(1).match(reg);
	    if (r != null){
	    	return (r[2]);
	    }else{
	    	return null;
	    } 
	}
	var state=getQueryString("state")+"";
	var callbackEncode=state.split("_._")[1];
	var callback=decodeURIComponent(callbackEncode);
	// alert(callback);
	if(state.split("_._")[0] == "wxLogin"){
		// alert(callback);
		$wxLogin.wxLogin(codeMax,function(err,result){
			// alert("IN")
			if(err){
				$ionicPopup.alert({
					title:"sorry,系统出错"
				})
			}else{
				if(result && result.success == true){
					//表明可以用微信帐号登录  可以开始预约了
					// alert("IN");
					$window.location.href="/yja/judgeMent?callback="+callback;
				}else if(result && result.success == false){ //code只能用一次
					// alert(callback);
					$window.location.href="/yja/register?callback="+callback;
				}
			}
		})
	}else{
		$bindWx.bindWx(codeMax,function(err,result){
			if(err){
				$ionicPopup.alert({
					title:"sorry,系统出错"
				})
			}else{
				// alert(callback);
				if(result && result.success == true){
					//绑定成功
					$window.location.href="/yja/judgeMent?callback="+callback;
				}else if(result && result.success == false){ //code只能用一次
					// alert("callback")
					$ionicPopup.alert({
						title:"绑定出错，请退出重试"
					})
				}
			}
		})
	}
})