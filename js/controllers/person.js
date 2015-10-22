angular.module("controllers.person",[])
.controller("person",function(
	$scope,
	$ionicPopup,
	$location,
	$reload,
	$onBroad,
	$window
){
	//表明已经登录
	$reload.reload(function(err,result){
		if(err){
			$ionicPopup.alert({
				title:"sorry,系统出错"
			})
		}else{
			if (result && result.success == true){
				$scope.userInfo=result.userInfo;
				var userInfo=$scope.userInfo;
				if(userInfo.coach !== null ){
					$scope.haveCoach = true;
				}else{
					$scope.noCoach = true;
				}
			}else if(result && result.errorInfo){
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
					$ionicPopup.alert({
						title:errorInfo
					})
				}
			}
		}
	})
	$scope.changeUrl=function(){
		$window.location.href="/yja/coachList";
	}
})