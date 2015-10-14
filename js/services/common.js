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
		getCoach:function(key,lat,long,callback){
			if(lat == null && long == null){
				lat="30.665534";
				long="104.071791"
			}
			$http.get(BASE_URL + "/basic/search/coach/byKey",{
				params:{
					key:key,
					lat:lat,
					long:long
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
			$http.get(BASE_URL + "/basic/search/coach/byId",{
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
			$http.get(BASE_URL + "/basic/search/site/byLocation",
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
//获取医院信息
.service("$GetHospital",function(
	$http
){
	return {
		GetHospital:function(cityId,callback){
			$http.get(BASE_URL + "/basic/search/hospital",
				{params:{
					cityId:cityId
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
//获取签名
.service("$getSignal",function(
	$http
){
	return {
		getSignal:function(url,callback){
			$http.get(BASE_URL + "/basic/wx/signature",
				{params:{
					url:url
				}		
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
//获取区域
.service("$getArea",function(
	$http
){
	return {
		getArea:function(cityId,callback){
			$http.get(BASE_URL + "/basic/search/coach/area",
				{params:{
					cityId:cityId
				}		
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
//筛选教练
.service("$fifterCoach",function(
	$http
){
	return {
		fifterCoach:function(areaId,cityId,index,lat,long,sort,teachType,top,callback){
			$http.get(BASE_URL + "/basic/search/coach/filter",
				{params:{
					cityId:cityId,
					areaId:areaId,
					index:index,
					lat:lat,
					long:long,
					sort:sort,
					teachType:teachType,
					top:top
				}		
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

//根据场地ID获取教练
.service("$getCoachBySiteId",function(
	$http
){
	return {
		getCoachBySiteId:function(siteId,callback){
			$http.get(BASE_URL + "/basic/search/coach/bySiteId",
				{params:{
					siteId:siteId
				}		
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
//绑定教练
.service("$bindCoach",function(
	$http
){
	return {
		bindCoach:function(coachId,callback){
			$http.post(BASE_URL + "/basic/coach/bind",{
				coachId:coachId
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
			$http.get(BASE_URL + "/basic/register/code",{
				params:{
					phone:phoneNumber
				}
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
		register:function(code,password,extra,callback){
			$http.post(BASE_URL + "/basic/register/addUser",{
				code:code,
				pwd:password,
				extra:extra
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
//登录
.service("$onBroad",function(
	$http
){
	return {
		onBroad:function(phone,password,callback){
			$http.post(BASE_URL + "/basic/login",{
				phone:phone,
				password:password
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
			$http.get(BASE_URL + "/basic/user/reload",{
				
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
.service("$profile",function(
	$http
){
	return {
		profile:function(name,callback){
			$http.post(BASE_URL + "/basic/user/profile",{
				name:name
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

.service("$wxLogin",function(
	$http
){
	return {
		wxLogin:function(codeMax,callback){
			$http.post(BASE_URL + "/basic/register/wxLogin",{
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
//预约
.service("$orderTime",function(
	$http
){
	return {
		orderTime:function(date,time,callback){
			$http.post(BASE_URL + "/student/order/",{
				date:date,
				time:time
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
.service("$byDayCount",function(
	$http
){
	return {
		byDayCount:function(count,callback){
			$http.get(BASE_URL + "/student/orderCommon/byDayCount",{
				params:{
					count:count
				}
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
.service("$orderDelete",function(
	$http
){
	return {
		orderDelete:function(id,callback){
			$http.delete(BASE_URL + "/student/order/"+id,{
				
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