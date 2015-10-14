angular.module("controllers.fixName",[])
.controller("fixName",function(
	$scope,
	$ionicPopup,
	$reload,
	$profile,
	$window
){
	$reload.reload(function(err,result){
		if(err){
			$ionicPopup.alert({
				title:"sorry,系统出错"
			})
		}else{
			if (result && result.success == true){
				$scope.userInfo=result.userInfo;
				var userInfo=$scope.userInfo;
				
			}else if(result && result.errorInfo){
				var errorInfo=result.errorInfo;
				$ionicPopup.alert({
					title:errorInfo
				})
			}
		}
	})
	$scope.fixedName=function(){
		var name=$scope.userInfo.name;
		if(name !== ""){
			$profile.profile(name,function(err,result){
				if(err){
					$ionicPopup.alert({
						title:"sorry,系统出错"
					})
				}else{
					if (result && result.success == true){
						$window.location.href="/yja/person";					
					}else if(result && result.errorInfo){
						var errorInfo=result.errorInfo;
						$ionicPopup.alert({
							title:errorInfo
						})
					}
				}
			})
		}else{
			$ionicPopup.alert({
				title:"请填入姓名"
			})
		}
	}
})