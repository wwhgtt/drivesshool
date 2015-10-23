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
	if(state.split("_._")[0] == "wxLogin"){
		$wxLogin.wxLogin(codeMax,function(err,result){
			if(err){
				$ionicPopup.alert({
					title:"sorry,系统出错"
				})
			}else{
				if(result && result.success == true){
					$window.location.href=callback;
				}else if(result && result.success == false){ //code只能用一次
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
				if(result && result.success == true){
					$window.location.href=callback;
				}else if(result && result.success == false){ //code只能用一次
					$ionicPopup.alert({
						title:"绑定出错，请退出重试"
					})
				}
			}
		})
	}
})