angular.module("controllers.register",[])
.controller("register",function(
	$scope,
	$loginCode,
	$ionicPopup,
	$register,
	$searchPhone,
	$window
){
	// console.log("$scope",$scope)
	$scope.login={phone:"",identify:"",password:"",identifyPassword:""};
	$scope.extra={name:""};
	$scope.getIdentify=function(){
		var phoneNumber=$scope.login.phone;
		if(!phoneNumber.match(/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/)){
			$(".error").css("visibility","visible");
			return false;
		}else{
			$(".error").css("visibility","hidden");
			$searchPhone.searchPhone(phoneNumber,function(err,result){
				if(err){
            		$ionicPopup.alert({
					    title: 'sorry，系统出错'
					});
            	}else{
            		if(result && result.success == true){
            			$ionicPopup.alert({
						    title: '该号码已注册,请登录'
						});
						$window.location.href="/yja/login?callback="+callback;
            		}else{
            			function jump(countDown) {
			                window.setTimeout(function(){
			                    countDown--;
			                    if(countDown > 0){
			                    	$(".submitPhone").attr("disabled","true");
			                        $(".submitPhone").html(countDown +'秒后'+ '重发');
			                        jump(countDown);
			                    }else{
			                        $(".submitPhone").html('发送验证码');
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
			            		if(result && result.success == true){

			            		}else{
			            			$ionicPopup.alert({
									    title: '发送失败'
									});
			            		}
			            	}
			            })
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
		var extra=$scope.extra;
		var name=$scope.extra.name;
		if(code !=="" && phoneNumber !== "" ){
			var password=$scope.login.password;
			var identifyPassword=$scope.login.identifyPassword;
			var Passwordlength=password+"";
			var length=Passwordlength.length;
			if(password == identifyPassword && length >=6 && length <=15 && name !== ""){
				$register.register(code,password,extra,function(err,result){
					if(err){
	            		$ionicPopup.alert({
						    title: 'sorry，系统出错'
						});
	            	}else{
	            		if (result && result.success == true) {
	            			//注册成功以后
	            			$window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8bbeb53d26dbe214&redirect_uri=http%3a%2f%2fwx.idrv.com.cn%2fyja%2fcode&response_type=code&scope=snsapi_userinfo&state=wxBind_._"+callback+"#wechat_redirect";
	            		}else if(result && result.errorInfo){
	            			var errorInfo=result.errorInfo;
	            			$ionicPopup.alert({
							    title: errorInfo
							});
						}
	            	}
				})
			}else{
				$ionicPopup.alert({
				    title: "两次密码输入不一致或密码长度错误"
				});
			}
		}else{
			$ionicPopup.alert({
				title:"请确保输入正确"
			});
		}
	}
	$scope.forCallback=function(){
		$window.location.href="/yja/login?callback="+callback;
	}
})