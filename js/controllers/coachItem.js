angular.module("controllers.coachItem",["controllers.coachList"])
.controller("coachItem",function(
	$scope,
	$getDetile,
	$ionicPopup
){
	$scope.showDetile=function(coachId){
		var coachId=$scope.coach._id;
		$getDetile.getDetile(coachId,function(err,result){
			if (err) {
				$ionicPopup.alert({
				    title: 'sorry,访问出错'
				});
			}else{
				if(result && result.success == true){

				}else if (result && result.errorInfo) {
					$ionicPopup.alert({
					    title: errorInfo
					});
				}
			};
		})
	}
})