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
				var name=result.coach.Name;
				var avator=$scope.coach.Avator;
				if(avator !== "" &&　avator !== null && avator !== undefined){
					$scope.coachAvatorTemp=true;
				}
				var sex=$scope.coach.Sex;
				if(sex == 1){
					$scope.coachItem.sexImg="http://party.idrv.com.cn/coachDetaile/img/icon_man.png";
				}else if(sex == 2){
					$scope.coachItem.sexImg="http://party.idrv.com.cn/coachDetaile/img/icon_woman.png"
				}
				var status=result.coach.Status;
				if(status == 2){
					$scope.coachItem.checkImg="http://party.idrv.com.cn/coachDetaile/img/renzheng.png";
				}else{
					$scope.coachItem.checkImg="";
				}
				// $scope.videoList=$scope.coach.video;
				if(result.coach.TeachType == "2"){
					$scope.coach.teachType ="一车多人";
				}else if(result.coach.TeachType == "1"){
					$scope.coach.teachType ="一车一人";
				}
				if(result.coach.TeachCharacteristics){
					var TeachCharacteristics =result.coach.TeachCharacteristics;
					var modelArray=["定点接送","不吸烟","一费制","分期付款","一人一车","计时收费"];
					var myArray=[];
					var realMyArray=[];
					myArray=TeachCharacteristics.split("-");
					var index = 1 ;
					if(myArray.indexOf("true") !== -1){
						for(var i=0;i<=myArray.length;i++){
							if(myArray[i] == "true"){ realMyArray[index] = modelArray[i-1]; index ++;}
						}
						if(!realMyArray[1]){
							// console.log(myArray[1])
							$(".eventStudent").css("display","none");
						}else{
							$scope.coachItem.first=realMyArray[1];
						}
						if(!realMyArray[2]){
							$(".eventCoach").css("display","none");
						}else{
							$scope.coachItem.second=realMyArray[2];
						}
						if(!realMyArray[3]){
							$(".eventStyle").css("display","none");
						}else{
							$scope.coachItem.third=realMyArray[3];
						}
					}else{
						if(!myArray[1]){
							$(".eventStudent").css("display","none");
						}else{
							$scope.coachItem.first=myArray[1];
						}
						if(!myArray[2]){
							$(".eventCoach").css("display","none");
						}else{
							$scope.coachItem.second=myArray[2];
						}
						if(!myArray[3]){
							$(".eventStyle").css("display","none");
						}else{
							$scope.coachItem.third=myArray[3];
						}
					}
				}
				if(result.coach.Phone){
					$scope.coachPhone=true;
					$scope.coach.phone= result.coach.Phone;
				}
				var Carpics=result.coach.Carpics;
				if(Carpics !== "" && Carpics !== null && Carpics !== undefined){
					if(Carpics[0]){
						$scope.firstIMG = true;
						$scope.coachItem.firstIMG=Carpics[0];
					}
					if(Carpics[1]){
						$scope.secondIMG = true;
						$scope.coachItem.secondIMG=Carpics[1];
					}
					if(Carpics[2]){
						$scope.thirdIMG = true;
						$scope.coachItem.thirdIMG=Carpics[2];
					}
					if(Carpics[3]){
						$scope.fourthIMG = true;
						$scope.coachItem.fourthIMG=Carpics[3];
					}
				}
				var Sitepics=result.coach.Sitepics;
				if(Sitepics !== "" && Sitepics !== null && Sitepics !== undefined){
					if(Sitepics[0]){
						$scope.firstimg= true;
						$scope.coachItem.firstimg=Sitepics[0];
					}
					if(Sitepics[1]){
						$scope.secondimg= true;
						$scope.coachItem.secondimg=Sitepics[1];
					}
					if(Sitepics[2]){
						$scope.thirdimg= true;
						$scope.coachItem.thirdimg=Sitepics[2];
					}
					if(Sitepics[3]){
						$scope.fourthimg= true;
						$scope.coachItem.fourthimg=Sitepics[3];
					}
				}
				var avatorTemp=result.coach.Avator;
				var avator;
				if(!avatorTemp){
					avator=""
				}else{
					avator=avatorTemp+'_large';
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
							        title: '推荐我的驾校教练——'+name, // 分享标题
								    link: 'http://party.idrv.com.cn/coachDetaile?id='+coachId, // 分享链接  寻找教练webview
								    imgUrl: avator, // 分享图标
							        success: function () { 
							            // $window.location.href="/yja/person";
							        },
							        cancel: function () { 
							            // 用户取消分享后执行的回调函数
							        }
							    });
							    wx.onMenuShareAppMessage({
							        title: '推荐我的驾校教练——'+name, // 分享标题
								    link: 'http://party.idrv.com.cn/coachDetaile?id='+coachId, // 分享链接
								    imgUrl: avator, // 分享图标
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
	$scope.bigImage = false;    //初始默认大图是隐藏的
	$scope.showBigImage = function (imageName){
	    $scope.model.img = imageName;                   
	    $scope.bigImage = true;
	    $(".hideImage").css("top",($(window).height() - $(".hideImage").height())/2);
	};
	$scope.hideBigImage = function () {
	    $scope.bigImage = false;
	};
})