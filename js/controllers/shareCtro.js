angular.module("controllers.shareCtro",["controllers.coachDetile"])
.controller("shareCtro",function(
	$scope,
	$getSignal,
	$ionicPopup
){
	var url=location.href;
	$getSignal.getSignal(url,function(err,result){
		if (err) {
			alert("sorry,访问出错");
		}else{
			if(result && result.success == true ){
				var timestamp=result.result.timestamp,
					noncestr=result.result.noncestr;
					signature=result.result.signature;
				wx.config({
				    debug: true, // 开启调试模式
				    appId: 'wx678c9951b011eabe', // 必填，公众号的唯一标识
				    timestamp:timestamp , // 必填，生成签名的时间戳
				    nonceStr: noncestr, // 必填，生成签名的随机串
				    signature:signature,// 必填，签名，见附录1
				    jsApiList: ["getLocation"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				});
				wx.getLocation({
				    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
				    success: function (res) {
				    	alert("success");
				        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
				        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
				        var speed = res.speed; // 速度，以米/每秒计
				        var accuracy = res.accuracy; // 位置精度
				        
				    },
				    error:function(){
				    	alert("error")
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
	//appSecret f9908ba6f9123911cb02e59a527dc1ca
	

})