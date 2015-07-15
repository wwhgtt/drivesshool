angular.module("directives.audioList",[])
.directive("audioList",function(

){
	return {
		restrict:"E",
		link:function($scope,element,attr){
			var image=document.getElementById("audioShowNow");
			image.addEventListener("click",function(){
				var audio=document.getElementById("Media");
				audio.play();
			})
		}
	}
})