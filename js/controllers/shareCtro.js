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
				// var shareWeixin=document.getElementById("shareWeixin"),
				// 	shareTensent=document.getElementById("shareTensent"),
				// 	shareFriends=document.getElementById("shareFriends");
				// 	console.log(shareWeixin)
				// shareWeixin.addEventListener("click",function(){
				// 	alert(shareWeixin);
				// 	wx.onMenuShareTimeline({
				// 	    title: '我推荐的教练', // 分享标题
				// 	    link: url, // 分享链接
				// 	    imgUrl: '', // 分享图标
				// 	    success: function () { 
				// 	        $ionicPopup.alert({
				// 			    title: '分享成功'
				// 			});
				// 	    },
				// 	    cancel: function () { 
				// 	       $ionicPopup.alert({
				// 			    title: 'sorry,分享失败请稍后重试'
				// 			});
				// 	    }
				// 	});
				// })
				// shareTensent.addEventListener("click",function(){
				// 	wx.onMenuShareQQ({
				// 	    title: '我推荐的教练', // 分享标题
				// 	    desc: '这个教练不错哦', // 分享描述
				// 	    link: url, // 分享链接
				// 	    imgUrl: '', // 分享图标
				// 	    success: function () { 
				// 	       $ionicPopup.alert({
				// 			    title: '分享成功'
				// 			});
				// 	    },
				// 	    cancel: function () { 
				// 	       $ionicPopup.alert({
				// 			    title: 'sorry,分享失败请稍后重试'
				// 			});
				// 	    }
				// 	});
				// })
				// shareFriends.addEventListener("click",function(){
				// 	wx.onMenuShareAppMessage({
				// 	    title: '我推荐的教练', // 分享标题
				// 	    desc: '这个教练不错哦', // 分享描述
				// 	    link: url, // 分享链接
				// 	    imgUrl: '', // 分享图标
				// 	    type: '', // 分享类型,music、video或link，不填默认为link
				// 	    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
				// 	    success: function () { 
				// 	         $ionicPopup.alert({
				// 			    title: '分享成功'
				// 			});
				// 	    },
				// 	    cancel: function () { 
				// 	        $ionicPopup.alert({
				// 			    title: 'sorry,分享失败请稍后重试'
				// 			});
				// 	    }
				// 	});
				// })
			}else if(result && result.errorInfo ){
				var errorInfo=result.errorInfo;
	 			$ionicPopup.alert({
				    title: errorInfo
				});
	 		}
		};
	})
})