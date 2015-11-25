angular.module("controllers.register",[])
.controller("register",function(
	$scope,
	$loginCode,
	$ionicPopup,
	$register,
	$window
){
	// console.log("$scope",$scope)
	$scope.login={phone:"",identify:""};
	$scope.getIdentify=function(){
		var phoneNumber=$scope.login.phone;
		if(!phoneNumber.match(/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/)){
			$(".phoneMessage").css("visibility","visible");
			return false;
		}else{
			$(".phoneMessage").css("visibility","hidden");
			function jump(countDown) {
                window.setTimeout(function(){
                    countDown--;
                    if(countDown > 0){
                    	$(".submitPhone").attr("disabled","true");
                        $(".submitPhone").html("验证"+"("+countDown+")s");
                        jump(countDown);
                    }else{
                        $(".submitPhone").html('验证');
                        $(".submitPhone").removeAttr("disabled");
                    }
                },1000);
            }
            jump(60);
            $loginCode.loginCode(phoneNumber,function(err,result){
            	if(err){
            		$ionicPopup.alert({
					    title: 'sorry，系统出错'
					});
            	}else{
            		if(result && result.result == true){

            		}else if(result && result.msg){
						var msg=result.msg;
						$ionicPopup.alert({
						    title:msg
						});
					}
            	}
            })
		}
	}
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
	$scope.register=function(){
		var code=$scope.login.identify;
		var phoneNumber=$scope.login.phone;
		if(code !=="" && phoneNumber !== "" ){
			$register.register(code,phoneNumber,function(err,result){
				if(err){
            		$ionicPopup.alert({
					    title: 'sorry，系统出错'
					});
            	}else{
            		if (result && result.result == true) {
            			//注册成功以后
            			var studentid=result.student.Id;
            			$window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8bbeb53d26dbe214&redirect_uri=http%3a%2f%2fwx.idrv.com.cn%2fyja%2freload&response_type=code&scope=snsapi_userinfo&state="+studentid+"#wechat_redirect";
            		}else if(result && result.msg){
						var msg=result.msg;
						$ionicPopup.alert({
						    title:msg
						});
					}
            	}
			})
		}else{
			$ionicPopup.alert({
				title:"请确保输入正确"
			});
		}
	}
})