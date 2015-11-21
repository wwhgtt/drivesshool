angular.module("controllers.reloadr",[])
.controller("reloadr",function(
	$scope,
	$ionicPopup,
	$reload,
	$window,
	$getOpenID
){
	var getQueryStr=function(state){
		var reg = new RegExp("(^|&)" + state + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.replace(/\?/g, "&").substr(1).match(reg);
	    if (r != null){
	    	return (r[2]);
	    }else{
	    	return null;
	    } 
	}
	var state=getQueryStr("state");
	if(!state){
		$reload.reload(function(err,result){
			if(err){
				$ionicPopup.alert({
					title:"sorry,系统出错"
				})
			}else{
				if(result && result.result == true){
					//代表用户有登录信息
					//接下来查看用户是否有openid,以及教练字段
					var student=result.student;
					var CoachId=student.CoachId;
					var studentId=student.Id;
					if(CoachId !== "" && CoachId !== 0){
						$window.location.href="/yja/coachDetile/"+CoachId;
					}else{
						$window.location.href="/yja/searchCoach?studentId="+studentId;
					}
				}else{//code == -2 表示没有登录状态
					$window.location.href="/yja/register";
				}
			}
		})
	}else{
		var getQueryStr=function(code){
			var reg = new RegExp("(^|&)" + code + "=([^&]*)(&|$)", "i");
		    var r = window.location.search.replace(/\?/g, "&").substr(1).match(reg);
		    if (r != null){
		    	return (r[2]);
		    }else{
		    	return null;
		    } 
		}
		var code=getQueryStr("code");
		$getOpenID.getOpenID(code,state,function(err,result){
			if(err){
				$ionicPopup.alert({
					title:"sorry,系统出错"
				})
			}else{
				if(result && result.openid !== ""){
					//获取openid成功
					//查看用户信息里面是否有教练字段，防止隔几天登陆时信息缺失
					$reload.reload(function(err,result){
						if(err){
							$ionicPopup.alert({
								title:"sorry,系统出错"
							})
						}else{
							if(result && result.result == true){
								//接下来查看用户是否有openid,以及教练字段
								//有教练字段 直接查看教练，没有教练字段，跳转到/yja/searchCoach,有教练字段，拿到教练ID 跳转到/yja/coachDetile/:coachId
								var student=result.student;
								var coachId=student.CoachId;
								var studentId=student.Id;
								if(!coachId && coachId !== "0"){
									$window.location.href="/yja/searchCoach?studentId="+studentId;;
								}else{
									$window.location.href="/yja/coachDetile/coachId";
								}
							}else{//code == -2 表示没有登录状态
								$window.location.href="/yja/register"
							}
						}
					})
				}else if(result && result.msg){
					var msg=result.msg;
					$ionicPopup.alert({
					    title:msg
					});
				}
			}
		})
	}
})