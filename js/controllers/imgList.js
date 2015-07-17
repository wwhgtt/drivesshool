angular.module("controllers.imgList",[])
.controller("imgList",function(
	$scope,
	$state,
	$ionicPopup,
	$getDetile
){
	$scope.coachId=$state.params.coachId;
	var	coachId=$scope.coachId;
		$getDetile.getDetile(coachId,function(err,result){
		if (err){
			alert("sorry,访问出错");
		}else{
			if(result && result.success == true){
				$scope.imageList=result.coach.background;
				console.log($scope.imageList)
			}else if(result && result.errorInfo ) {
				var errorInfo=result.errorInfo;
	 			$ionicPopup.alert({
				    title: errorInfo
				    // template: 'It might taste good'
				});
	 		}
		};
	})
})