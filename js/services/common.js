angular.module("services.common",[])
//登录
.service("$loginIn",function(
	$http
){
	return{
		loginIn:function(phone,password,callback){
			$http.post(BASE_URL + "/basic/login",{
				phone:phone,
				password:password
			})
			.success(function(data){
				if(callback)callback(null,data);
			})
			.error(function(error){
				if(callback)callback(error);
			})
		}
	}
})
//忘记密码
.service("$passwordBack",function(
	$http
){
	return{
		passwordBack:function(phone,check,callback){
			$http.post(BASE_URL + "/basic/register/verify",{
				phone:phone,
				code:check
			})
			.success(function(data){
				if(callback)callback(null,data);
			})
			.error(function(error){
				if(callback)callback(error);
			})
		}
	}
})
//短信验证
