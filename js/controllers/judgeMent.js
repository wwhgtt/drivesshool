angular.module("controllers.judgeMent",[])
.controller("judgeMent",function(
	$scope,
	$reload,
	$ionicPopup,
	$window
){
	// console.log("$scope",$scope);
	var getQueryString=function(callback){
		var reg = new RegExp("(^|&)" + callback + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.replace(/\?/g, "&").substr(1).match(reg);
	    if (r != null){
	    	return (r[2]);
	    }else{
	    	return null;
	    } 
	}
	var callbackEncode=getQueryString("callback");
	var callback=decodeURIComponent(callbackEncode);
	$reload.reload(function(err,result){
		if(err){
			$ionicPopup.alert({
				title:"sorry,系统出错"
			})
		}else{
			if(result && result.success == true){
				var userInfo=result.userInfo;
				var coachInfo = userInfo.coach;
				var role=userInfo.role;
				if(callback.indexOf("order") !== -1){
					if(role == "student"){
						if(coachInfo.id && coachInfo.teachType !== null && coachInfo.teachType !== ""&& coachInfo.teachType !== undefined){
						//可以预约
							var teachType=coachInfo.teachType;
							if(teachType == 0){
								$window.location.href="/yja/order";
							}else{
								$window.location.href="/yja/orderMuch";
							}
						}else if(!coachInfo){
							$ionicPopup.alert({
								title:"您还未绑定教练,请先绑定教练"
							});
							$window.location.href="/yja/coachList";
						}else{
							$ionicPopup.alert({
								title:"教练信息有误,请待系统查证后重新预约"
							})
						}
					}else if(role == "coach"){
						$ionicPopup.alert({
							title:"该预约窗口只针对学员展开"
						})
					}else{
						$ionicPopup.alert({
							title:"您的信息未确定,请完善信息"
						})
					}
				}else{
					//表明是要去个人中心接口的
					$window.location.href="/yja/person";
				}
			}else if(result && result.success == false){
				var errorInfo= result.errorInfo;
				$ionicPopup.alert({
					title:errorInfo
				})
			}
		}
	})
})