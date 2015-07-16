angular.module("controllers.coachList",[])
.controller("coachList",function(
	$scope,
	$getCoach,
	$ionicPopup,
	$getSignal
){
	$scope.coach={key:"",lat:"",long:""};
	$scope.search=function(){
		var key=$scope.coach.key;
		var url=location.href.split("#")[0];
		$getSignal.getSignal(url,function(err,result){
			if (err) {
				alert("sorry,访问出错");
			}else{
				if(result && result.success == true ){
					var timestamp=result.result.timestamp,
						nonceStr=result.result.noncestr;
						signature=result.result.signature;
					wx.config({
					    debug: false, // 开启调试模式
					    appId: 'wx678c9951b011eabe', // 必填，公众号的唯一标识
					    timestamp:timestamp , // 必填，生成签名的时间戳
					    nonceStr: nonceStr, // 必填，生成签名的随机串
					    signature:signature,// 必填，签名，见附录1
					    jsApiList: ["getLocation"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
					});
					wx.getLocation({
					    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
					    success: function (res) {
					        $scope.coach.lat = res.latitude; // 纬度，浮点数，范围为90 ~ -90
					        $scope.coach.long = res.longitude; // 经度，浮点数，范围为180 ~ -180。
					        var speed = res.speed; // 速度，以米/每秒计
					        var accuracy = res.accuracy; // 位置精度
					        var lat=$scope.coach.lat,
								long=$scope.coach.long;
							$getCoach.getCoach(key,lat,long,function(err,result){
								if (err) {
									alert("sorry,访问出错");
								}else{
									if(result && result.coachList== Array){
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
					    },
					    error:function(){
					    	$ionicPopup.alert({
							    title: "sorry,系统报错"
							});
					    }
					});
				}else if(result && result.errorInfo ){
					var errorInfo=result.errorInfo;
		 			$ionicPopup.alert({
					    title: errorInfo
					});
		 		}
			};
		})
		
	}
	
})