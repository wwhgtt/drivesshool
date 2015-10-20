angular.module("controllers.coachDetile",[])
.controller("coachDetile",function(
	$scope,
	$state,
	$ionicPopup,
	$getDetile,
	$sce,
	$bindCoach,
	$window
){
	var coachId=$state.params.coachId;
	$scope.coach={avator:""};
	$getDetile.getDetile(coachId,function(err,result){
		if (err){
			$ionicPopup.alert({
				title:"sorry,访问出错"
			});
		}else{
			if(result && result.success == true){
				$scope.coach=result.coach;
				if (result.coach.avator){
					$scope.coach.avator= result.coach.avator.large;
				}else{
					$scope.coach.avator="http://7xjnv4.com2.z0.glb.qiniucdn.com/default_avator.png_large"
				}
				// $scope.videoList=$scope.coach.video;
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
				if (result.coach.phone){
					$scope.coachPhone=true;
					$scope.coach.phone= result.coach.phone;
				}
				if($scope.coach.voice && $scope.coach.voice.length){
					$scope.audioShow = true;
					$scope.coach.voice.url = $sce.trustAsResourceUrl($scope.coach.voice[0].url);
				}
			}else if(result && result.errorInfo ){
				var errorInfo=result.errorInfo;
	 			$ionicPopup.alert({
				    title: errorInfo
				});
	 		}
		};
	})
	//分享功能
	$scope.bindCoach=function(){
		$bindCoach.bindCoach(coachId,function(err,result){
			if (err){
				$ionicPopup.alert({
				    title: "sorry,访问出错"
				});
			}else{
				if(result && result.success == true){
					$ionicPopup.alert({
					    title: "申请成功,请等待教练同意"
					});
					$window.location.href="/yja/person";
				}else if(result && result.success == false){
					var errorInfo=result.errorInfo;
					$ionicPopup.alert({
					    title:errorInfo
					});
				}
			}
		})
	}
})
// if($scope.coach.video && $scope.coach.video.length){
				// 	$scope.ionSideBox=true;
				// 	var video=$scope.coach.video;
				// 	if(video[0]){
				// 		$scope.video_first = true;
				// 		$scope.coach.video_first_url=$sce.trustAsResourceUrl(video[0].url);
				// 		$scope.belongFirst=true;
				// 		$scope.bvideoBelongFirst='http://7xk5at.com2.z0.glb.qiniucdn.com/development/'+
				// 			$scope.coach._id+'_'+video[0].index+'_small';
				// 	}
				// 	if(video[1]){
				// 		$scope.video_second = true;
				// 		$scope.coach.video_second_url=$sce.trustAsResourceUrl(video[1].url);
				// 		$scope.belongSecond=true;
				// 		$scope.bvideoBelongSecond='http://7xk5at.com2.z0.glb.qiniucdn.com/development/'+
				// 			$scope.coach._id+'_'+video[1].index+'_small';
				// 	}
				// 	if(video[2]){
				// 		$scope.video_third = true;
				// 		$scope.coach.video_third_url=$sce.trustAsResourceUrl(video[2].url);
				// 		$scope.belongThird=true;
				// 		$scope.bvideoBelongThird='http://7xk5at.com2.z0.glb.qiniucdn.com/development/'+
				// 			$scope.coach._id+'_'+video[2].index+'_small';
				// 	}
				// }
// if (result.coach.background) {
				// 	$scope.coachImage=true;
				// 	var background=result.coach.background;
				// 	if (background[0]) {
				// 		$scope.imageLIst_firstURL = true;
				// 		$scope.imageLIst_first=background[0].url;
				// 	};
				// 	if (background[1]) {
				// 		$scope.imageLIst_secondURL = true;
				// 		$scope.imageLIst_second=background[1].url;
				// 	};
				// 	if (background[2]) {
				// 		$scope.imageLIst_thirdURL = true;
				// 		$scope.imageLIst_third=background[2].url;
				// 	};
				// 	if (background[3]) {
				// 		$scope.imageLIst_forthURL = true;
				// 	};
				// };