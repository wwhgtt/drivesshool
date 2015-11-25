angular.module("services.common",[])
//查看教练详情
.service("$getDetile",function(
	$http
){
	return{
		getDetile:function(coachId,callback){
			$http.post(BASE_URL + "/helpdrv/getcoach/",{
				coachid:coachId
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
//绑定教练
.service("$bindCoach",function(
	$http
){
	return {
		bindCoach:function(studentid,coachId,callback){
			$http.post(BASE_URL + "/helpdrv/bindcoach/",{
				studentid:studentid,
				coachid:coachId
			})
			.success(function(data){
				if(callback)callback(null,data);  
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})
//登录验证码
.service("$loginCode",function(
	$http
){
	return {
		loginCode:function(phoneNumber,callback){
			$http.post(BASE_URL + "/helpdrv/setmsgcode/",{
				phone:phoneNumber
			})
			.success(function(data){
				if(callback)callback(null,data);  
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})
//注册
.service("$register",function(
	$http
){
	return {
		register:function(code,phoneNumber,callback){
			$http.post(BASE_URL + "/helpdrv/loginin/",{
				verifyCode:code,
				phone:phoneNumber
			})
			.success(function(data){
				if(callback)callback(null,data);  
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})
//绑定微信号
.service("$bindWx",function(
	$http
){
	return {
		bindWx:function(codeMax,callback){
			$http.put(BASE_URL + "/basic/user/wxBind",{
				code:codeMax
			})
			.success(function(data){
				if(callback)callback(null,data);  
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})

.service("$reload",function(
	$http
){
	return {
		reload:function(callback){
			$http.post(BASE_URL + "/helpdrv/tryloginon/",{
				
			})
			.success(function(data){
				if(callback)callback(null,data);  
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})
//获取openID
.service("$getOpenID",function(
	$http
){
	return {
		getOpenID:function(code,state,callback){
			$http.post(BASE_URL + "/helpdrv/bindopenId/",{
				wxcode:code,
				userid:state
			})
			.success(function(data){
				if(callback)callback(null,data);  
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})
//获取教练
.service("$getcoachList",function(
	$http
){
	return {
		getcoachList:function(coachName,callback){
			$http.post(BASE_URL + "/helpdrv/getcoachlist/",{
				// params:{
					keyvalue:coachName
				// }
			})
			.success(function(data){
				if(callback)callback(null,data);  
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})
//获取signature
.service("$getSignal",function(
	$http
){
	return {
		getSignal:function(url,callback){
			$http.post(BASE_URL + "/helpdrv/wxgetsignature/",{
				url:url
			})
			.success(function(data){
				if(callback)callback(null,data);  
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})