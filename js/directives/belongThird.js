angular.module("directives.belongThird",[])
.directive("belongThird",function(

){
	return {
		restrict:"A",
		link:function($scope,element,attr){
			element.find("img").on("click",function(){
				element.find("img").css("display","none");
				element.find("video").css("display","block");
				var video=element.find("video");
				video[0].play();
			});
			element.find("button").on("click",function(){
				var video=element.find("video");
				video[0].pause();
				element.find("button").css("display","none");
			})
		}
	}
})