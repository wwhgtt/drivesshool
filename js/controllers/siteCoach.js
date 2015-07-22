angular.module("controllers.siteCoach",[])
.controller("siteCoach",function(
	$scope,
	$state,
	$getCoachBySiteId,
	$ionicPopup
){
	var siteId=$state.params.siteId;
	$getCoachBySiteId.getCoachBySiteId(siteId,function(err,result){
		if (err) {
			$ionicPopup.alert({
			    title: "sorry,系统报错"
			});
		}else{
			if(result && result.coachList.length !== 0){
	 			$scope.coachList=result.coachList;
			}else if(result && result.errorInfo){
				var errorInfo=result.errorInfo;
	 			$ionicPopup.alert({
				    title: errorInfo
				});
	 		}else{
	 		
	 		}
		};
	})
})