angular.module("controllers.coachDetile",[])
.controller("coachDetile",function(
	$scope,
	$state,
	$ionicPopup,
	$getDetile,
	$sce
){
	$(".shareDetileShow").css("display","none");
	$("#shareDetile").click(function(){
		$(".shareDetileShow").css("display","block");
		$(".has-subheader").click(function(){
			$(".shareDetileShow").css("display","none");
		})
	})
	var coachId=$state.params.coachId;
	$getDetile.getDetile(coachId,function(err,result){
		if (err){
			alert("sorry,访问出错");
		}else{
			if(result && result.success == true){
				$scope.coach=result.coach;
				if($scope.coach.video && $scope.coach.video.length){
					var video=$scope.coach.video;
					if(video[0]){
						console.log(video[0].url)
						$scope.video_first = true;
						$scope.coach.video_first_url=$sce.trustAsResourceUrl(video[0].url);
						console.log($scope.coach.video_first_url)
					}
					if(video[1]){
						$scope.video_second = true;
						$scope.coach.video_second_url=$sce.trustAsResourceUrl(video[1].url);
					}
					if(video[2]){
						$scope.video_third = true;
						$scope.coach.video_third_url=$sce.trustAsResourceUrl(video[2].url);
					}
				}
				$scope.videoList=$scope.coach.video;
				if (result.coach.applyCoachState == "agree") {
					$scope.agreeMent = true;
				};
				if (result.coach.birthday) {
					$scope.coachBirth=true;
					var nianling=result.coach.birthday;
					var birth=nianling.substr(0,4);
					var d = new Date();
					var year=d.getFullYear();
					$scope.coach.birth=year-birth+1;
				};
				if(result.coach.coachLisenceDate){
					$scope.coachLisenceDate =true;
					var coachLisenceDate= result.coach.coachLisenceDate;
					var lisecceData=coachLisenceDate.substr(0,4);
					var d = new Date();
					var year=d.getFullYear();
					$scope.coach.coachLisenceDate=year-lisecceData+1;
				}
				if(result.coach.teachType == "1"){
					$scope.coach.teachType ="一车多人";
				}else{
					$scope.coach.teachType ="一车一人";
				}
				if (result.coach.background) {
					var background=result.coach.background;
					if (background[0]) {
						$scope.imageLIst_firstURL = true;
						$scope.imageLIst_first=background[0].url;
					};
					if (background[1]) {
						$scope.imageLIst_secondURL = true;
						$scope.imageLIst_second=background[1].url;
					};
					if (background[2]) {
						$scope.imageLIst_thirdURL = true;
						$scope.imageLIst_third=background[2].url;
					};
					if (background[3]) {
						$scope.imageLIst_forthURL = true;
					};
				};
				if($scope.coach.voice && $scope.coach.voice.length){
					$scope.audioShow = true;
					$scope.coach.voice.url = $sce.trustAsResourceUrl($scope.coach.voice[0].url);
				}
			}else if(result && result.errorInfo ) {
				var errorInfo=result.errorInfo;
	 			$ionicPopup.alert({
				    title: errorInfo
				    // template: 'It might taste good'
				});
	 		}
		};
	})
	//分享功能

})