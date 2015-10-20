angular.module("controllers.judgeMent",[])
.controller("judgeMent",function(
	$scope,
	$reload,
	$ionicPopup,
	$window,
	$onBroad
){
	// alert("first")
	$reload.reload(function(err,result){
		if(err){
			$ionicPopup.alert({
				title:"sorry,系统出错"
			})
		}else{
			if(result && result.success == true){
				// alert("second");
				var userInfo=result.userInfo;
				var coachInfo = userInfo.coach;
				if(!coachInfo){
					$ionicPopup.confirm({
						title:"您还没有绑定教练,点击OK绑定教练"
					}).then(function(result){
						if(result == true){
							$window.location.href="/yja/coachList"
						}
					})
				}else{
					var teachType=coachInfo.teachType;
					var role=userInfo.role;
					if(role == "student"){
						if(teachType == 0){
							$window.location.href="/yja/order";
						}else if(teachType == 1){
							$window.location.href="/yja/orderMuch";
						}
					}else if(role == "coach"){
						$ionicPopup.alert({
							title:"该预约窗口只针对学员展开"
						})
					}else{
						$ionicPopup.confirm({
							title:"您的身份未确定,点击绑定教练"
						}).then(function(result){
							if(result == true){
								$window.location.href="/yja/coachList";
							}else{
								//不做处理
							}
						})
					}
				}
			}else if(result && result.success == false){
				alert("fourth")
				var errorInfo=result.errorInfo;
				if(errorInfo == "是学员身份，但找不到绑定的教练"){
					$ionicPopup.confirm({
						title:"您是学员身份，但未绑定教练，现在去绑定教练吗"
					}).then(function(result){
						if(result == true){
							$window.location.href="/yja/coachList";
						}
					})
				}else{
					alert("fifth")
					$ionicPopup.alert({
						title:errorInfo
					})
				}
			}
		}
	})
})