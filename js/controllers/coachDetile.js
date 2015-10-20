angular.module("controllers.coachDetile",[])
.controller("coachDetile",function(
	$scope,
	$state,
	$ionicPopup,
	$getDetile,
	$sce,
	$bindCoach,
	$window,
	$getSignal
){
	var coachId=$state.params.coachId;
	$scope.coach={avator:"",url:""};
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
					$scope.coach.avator="http://7xjnv4.com2.z0.glb.qiniucdn.com/default_avator.png_large";
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
	var sUserAgent = navigator.userAgent.toLowerCase();
	if(sUserAgent.indexOf("ipad") !== -1 ||sUserAgent.indexOf("iphone") !== -1){
		$scope.coach.url = location.href.split("#")[0];
	}else{
		$scope.coach.url=location.href.split("#")[0];
	}
	var url=$scope.coach.url;
	$getSignal.getSignal(url,function(err,result){
		if (err){
			$ionicPopup.alert({
			    title: "sorry,系统报错"
			});
		}else{
			if(result && result.success == true ){
				var timestamp=result.result.timestamp,
					nonceStr=result.result.noncestr;
					signature=result.result.signature;
				var avator=$scope.coach.avator;
				if(!avator){

				}else{
					avator="http://7xjnv4.com2.z0.glb.qiniucdn.com/default_avator.png_large";
				}
				wx.config({
				    debug: false, 
				    appId: 'wx49a9db1095de4f65', 
				    timestamp:timestamp, 
				    nonceStr: nonceStr,
				    signature:signature,
				    jsApiList: [
				    	"onMenuShareTimeline",
				    	"onMenuShareAppMessage"
				    ] 
				});
				wx.ready(function(){
					wx.onMenuShareTimeline({
				        title: '强烈推荐我的教练', // 分享标题
					    link: 'http://party.idrv.com.cn/coachDetaile?id='+coachId, // 分享链接
					    imgUrl: avator, // 分享图标
				        success: function () { 
				            $window.location.href="/yja/person";
				        },
				        cancel: function () { 
				            // 用户取消分享后执行的回调函数
				        }
				    });
				    wx.onMenuShareAppMessage({
				        title: '强烈推荐我的教练', // 分享标题
					    link: 'http://party.idrv.com.cn/coachDetaile?id='+coachId, // 分享链接
					    imgUrl: avator, // 分享图标
				        type: '', // 分享类型,music、video或link，不填默认为link
				        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
				        success: function (){ 
				            $window.location.href="/yja/person";
				        },
				        cancel: function (){ 
				            // 用户取消分享后执行的回调函数
				        }
				    });
				})
			}else if(result && result.errorInfo){
				var errorInfo=result.errorInfo;
	 			$ionicPopup.alert({
				    title: errorInfo
				});
	 		}
		};
	})
})