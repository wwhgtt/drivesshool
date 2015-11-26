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
	$scope.coach={url:""};
	$scope.model={img:""};
	$scope.coachItem={sexImg:"",checkImg:"",first:"",second:"",third:"",firstIMG:"",secondIMG:"",thirdIMG:"",fourthIMG:"",
	firstimg:"",secondimg:"",thirdimg:"",fourthimg:""};
	$getDetile.getDetile(coachId,function(err,result){
		if (err){
			$ionicPopup.alert({
				title:"sorry,访问出错"
			});
		}else{
			if(result && result.result == true){
				$scope.coach=result.coach;
				var sex=$scope.coach.Sex;
				if(sex == 1){
					$scope.coachItem.sexImg="http://party.idrv.com.cn/coachDetaile/img/icon_man.png";
				}else{
					$scope.coachItem.sexImg="http://party.idrv.com.cn/coachDetaile/img/icon_woman.png"
				}
				var status=result.coach.Status;
				if(status == 2){
					$scope.coachItem.checkImg="http://party.idrv.com.cn/coachDetaile/img/renzheng.png";
				}else{
					$scope.coachItem.checkImg="";
				}
				// $scope.videoList=$scope.coach.video;
				if(result.coach.TeachType == "1"){
					$scope.coach.teachType ="一车多人";
				}else{
					$scope.coach.teachType ="一车一人";
				}
				if(result.coach.TeachCharacteristics){
					var TeachCharacteristics =result.coach.TeachCharacteristics;
					var myArray=[];
					myArray=TeachCharacteristics.split("-");
					$scope.coachItem.first=myArray[1];
					$scope.coachItem.second=myArray[2];
					$scope.coachItem.third=myArray[3];
				}
				if(result.coach.Phone){
					$scope.coachPhone=true;
					$scope.coach.phone= result.coach.Phone;
				}
				if(result.coach.Carpics){
					var Carpics=result.coach.Carpics;
					$scope.coachItem.firstIMG=Carpics[0];
					$scope.coachItem.secondIMG=Carpics[1];
					$scope.coachItem.thirdIMG=Carpics[2];
					$scope.coachItem.fourthIMG=Carpics[3];
				}
				if(result.coach.Sitepics){
					var Sitepics=result.coach.Sitepics;
					$scope.coachItem.firstimg=Sitepics[0];
					$scope.coachItem.secondimg=Sitepics[1];
					$scope.coachItem.thirdimg=Sitepics[2];
					$scope.coachItem.fourthimg=Sitepics[3];
				}
			}else if(result && result.msg){
				var msg=result.msg;
				$ionicPopup.alert({
				    title:msg
				});
			}
		};
	})
	//分享功能
	var getQueryStr=function(studentid){
		var reg = new RegExp("(^|&)" + studentid + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.replace(/\?/g, "&").substr(1).match(reg);
	    if (r != null){
	    	return (r[2]);
	    }else{
	    	return null;
	    } 
	}
	var studentid=getQueryStr("studentid");
	if( studentid == "" || studentid == null){
		$(".footButton").html("我要制作");
	}else if( studentid == "null" || studentid == "only"){
		$scope.onlyStudent = true;
		$(".forHideEvent").css("margin-bottom","0px");
	}
	$scope.bindCoach=function(){
		var html=$(".footButton").html();
		if(html == "绑定教练"){
			$bindCoach.bindCoach(studentid,coachId,function(err,result){
				if (err){
					$ionicPopup.alert({
					    title: "sorry,访问出错"
					});
				}else{
					if(result && result.result == true){
						$ionicPopup.alert({
						    title: "绑定成功"
						}).then(function(result){
							if(result == true){
								// $window.location.href="/yja/person";
							}
						})
					}else if(result && result.msg){
						var msg=result.msg;
						$ionicPopup.alert({
						    title:msg
						});
					}
				}
			})
		}else{
			$window.location.href="http://viewer.maka.im/k/IQLAURKV";
		}
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
			if(result && result.result == true ){
				var timestamp=result.timestamp,
					nonceStr=result.noncestr;
					signature=result.signature;
				wx.config({
				    debug: false, 
				    appId: 'wx8bbeb53d26dbe214', 
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
					    link: 'http://party.idrv.com.cn/coachDetaile?id='+coachId, // 分享链接  寻找教练webview
					    imgUrl: '', // 分享图标
				        success: function () { 
				            // $window.location.href="/yja/person";
				        },
				        cancel: function () { 
				            // 用户取消分享后执行的回调函数
				        }
				    });
				    wx.onMenuShareAppMessage({
				        title: '强烈推荐我的教练', // 分享标题
					    link: 'http://party.idrv.com.cn/coachDetaile?id='+coachId, // 分享链接
					    imgUrl: '', // 分享图标
				        type: '', // 分享类型,music、video或link，不填默认为link
				        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
				        success: function (){ 
				            // $window.location.href="/yja/person";
				        },
				        cancel: function (){ 
				            // 用户取消分享后执行的回调函数
				        }
				    });
				})
			}else if(result && result.msg){
				var errorInfo=result.msg;
	 			$ionicPopup.alert({
				    title: errorInfo
				});
	 		}
		};
	})
	// $(".forCarIMG img").on("click",function(){
	// 	var image=$(this).attr("ng-src");
	// 	if(image !== "" && image !== null && image !== undefined){ //证明存在照片
	// 		$(".forHideEvent").css("display","none");
	// 		$scope.onlyStudent = true;
	// 		$scope.haveImage = true;
	// 		console.log(image);
	// 		$scope.model.img = image;
	// 	}else{//证明不存在照片
			
	// 	}
	// })
	// $(".container-model").on("click",function(){
	// 	$(".container-model").css("display","none");
	// 	$(".forHideEvent").css("display","block");
	// 	$scope.onlyStudent = false;
	// 	console.log($scope.onlyStudent)
	// })
})