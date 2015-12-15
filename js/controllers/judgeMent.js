angular.module("controllers.judgeMent",[])
.controller("judgeMent",function(
	$scope,
	$ionicPopup,
	$reload,
	$window,
	$getOpenID
){
	console.log("$scope",$scope);
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
					var student=result.student;
					var CoachId=student.CoachId;
					var studentId=student.Id;
					if(CoachId !== "" && CoachId !== 0){
						$window.location.href="/yja/order/"+studentId;
					}else{
						$ionicPopup.confirm({
							title:"您还没有绑定教练,点击OK前往绑定"
						}).then(function(result){
							if(result == true){
								$window.location.href="/yja/searchCoach?studentId="+studentId;
							}
						})
					}
				}else{//code == -2 表示没有登录状态
					$window.location.href="/yja/register?judgeMent=judgeMent";
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
				if(result && result.result == true){
					var student=result.student;
					var coachId=student.CoachId;
					var studentId=student.Id;
					if(!coachId && coachId !== "0"){
						$window.location.href="/yja/searchCoach?studentId="+studentId;
					}else{
						$window.location.href="/yja/order/"+studentId;
					}
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