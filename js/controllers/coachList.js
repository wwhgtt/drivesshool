angular.module("controllers.coachList",[])
.controller("coachList",function(
	$scope,
	$getCoach,
	$ionicPopup
){
	$scope.coach={key:""};
	$scope.search=function(){
		var key=$scope.coach.key;
		$getCoach.getCoach(key,function(err,result){
			if (err) {
				alert("sorry,访问出错");
			}else{
				if(result && result.coachList.length !== 0){
					$scope.coachShow=true; 
		 			$scope.coachList=result.coachList;
				}else if(result && result.errorInfo){
					var errorInfo=result.errorInfo;
		 			$ionicPopup.alert({
					    title: errorInfo
					});
		 		}else{
		 			$ionicPopup.alert({
					    title: 'sorry，没有您要找的教练'
					});
		 		}
			};
		})
	}
	
})