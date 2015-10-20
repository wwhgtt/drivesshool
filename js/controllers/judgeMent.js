angular.module("controllers.judgeMent",[])
.controller("judgeMent",function(
	$scope,
	$reload,
	$ionicPopup,
	$window
){
	$reload.reload(function(err,result){
		if(err){
			$ionicPopup.alert({
				title:"sorry,系统出错"
			})
		}else{
			if(result && result.success == true){
				var userInfo=result.userInfo;
				var coachInfo = userInfo.coach;
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
			}else if(result && result.success == false){
				var errorInfo= result.errorInfo;
				$ionicPopup.alert({
					title:errorInfo
				})
			}
		}
	})
})