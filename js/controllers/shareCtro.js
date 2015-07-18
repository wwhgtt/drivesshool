angular.module("controllers.shareCtro",["controllers.coachDetile"])
.controller("shareCtro",function(
	$scope,
	$ionicPopup,
	$getSignal
){
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
				    debug: true, // 开启调试模式
				    appId: 'wx678c9951b011eabe', // 必填，公众号的唯一标识
				    timestamp:timestamp , // 必填，生成签名的时间戳
				    nonceStr: nonceStr, // 必填，生成签名的随机串
				    signature:signature,// 必填，签名，见附录1
				    jsApiList:[
				    	"getLocation",
				    	"onMenuShareTimeline",
						"onMenuShareAppMessage",
						"onMenuShareQQ",
						"onMenuShareWeibo",
						"onMenuShareQZone" 
			    	] 
				});
			}else if(result && result.errorInfo ){
				var errorInfo=result.errorInfo;
	 			$ionicPopup.alert({
				    title: errorInfo
				});
	 		}
		};
	})
})