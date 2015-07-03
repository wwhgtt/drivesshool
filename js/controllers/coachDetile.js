angular.module("controllers.coachDetile",[])
.controller("coachDetile",function(
	$scope,
	$state,
	$ionicPopup,
	$getDetile
){
	$scope.coach={name:"",signature:"",avator:""};
	var coachId=$state.params.coachId;
	$getDetile.getDetile(coachId,function(err,result){
		if (err){
			alert("sorry,访问出错");
		}else{
			if(result && result.success == true){
				$scope.coach=result.coach;
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