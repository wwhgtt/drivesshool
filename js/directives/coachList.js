angular.module("directives.coachList",[])
.directive("coachList",function(
	$timeout
){
	return {
		restrict:"E",
		templateUrl:"template/coach.html",
		link:function($scope,element,attr){
			
		}
	}
})
.directive("imageHeight",function(
	$timeout
){
	return {
		restrict:"A",
		link:function($scope,element,attr){
			var image=$(element[0]).find(".hideImage");
            $timeout(function(){
            	image.css({
            		"display":"block",
					"top":($(window).height()-image.height())/2
            	})
            	console.log(image.height())
            },100)
		}
	}
})