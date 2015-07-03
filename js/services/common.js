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
//寻找教练
.service("$getCoach",function(
	$http
){
	return{
		getCoach:function(key,callback){
			$http.get(BASE_URL + "/basic/coach/search",{
				params:{
					key:key
				}
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
//查看教练详情
.service("$getDetile",function(
	$http
){
	return{
		getDetile:function(coachId,callback){
			$http.get(BASE_URL + "/basic/coach",{
				params:{
					coachId:coachId
				}
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
//获取场地信息
.service("$GetSiteInfo",function(
	$http
){
	return {
		getSiteInfo:function(long,lat,distance,callback){
			long = parseFloat(long);
			lat = parseFloat(lat);
			distance=parseFloat(distance);
			$http.get(BASE_URL + "/platform/operate/siteInfo/get",
				{params:{
					long:long,
					lat:lat,
					distance:distance
				}		
			})
			//下面的内容是必须的   表示执行一个回调   如果没有这个回调的话controllerjs里面也就无法执行页面的跳转
			.success(function(data){
				if(callback)callback(null,data);  //这里的null表示err==null  表示没出错 
			})
			.error(function(err){
				if(callback)callback(err);
			})
		}
	}
})