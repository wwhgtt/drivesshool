angular.module("YJA",[
	"ionic",
	"controllers.yja",
	"controllers.coachList",
	"controllers.myself",
	"controllers.message",
    "controllers.coachDetile",
    "controllers.homePage",
    "controllers.getHospitalSite",
    "controllers.shareCtro",
    "directives.coachList",
    "directives.getMap",
    "directives.audioList",
    "directives.lMap",
	"services.common"
])
.config(function(
	$stateProvider,
	$locationProvider,
	$urlRouterProvider
){   
	$stateProvider
		.state('yja',{
			url:"/yja",
			templateUrl:"template/menu.html",
			controller:"yja"
		})
        .state('serviceComent',{
            url:"/serviceComent",
            templateUrl:"service.html",
            // controller:"password"
        })
		.state('yja.coachList',{
            url:"/coachList",
            views:{
                'menuContent':{
                    templateUrl:"template/coachList.html",
                    controller:"coachList"
                }
            }
        })
        .state('yja.coachDetile',{
            url:"/coachDetile/:coachId",
            views:{
                'menuContent':{
                    templateUrl:"template/coachDetile.html",
                    controller:"coachDetile"
                }
            }
        })
        .state('yja.message',{
            url:'/message',
            views:{
                'menuContent':{
                    templateUrl:'template/message.html',
                    controller:'message'
                }
            }
        })
        .state('yja.getHospitalSite',{
            url:'/getHospitalSite',
            views:{
                'menuContent':{
                    templateUrl:'template/getHospitalSite.html',
                    controller:'getHospitalSite'
                }
            }
        })
        .state('yja.homePage',{
            url:'/homePage',
            views:{
                'menuContent':{
                    templateUrl:'template/homePage.html',
                    controller:'homePage'
                }
            }
        })
        .state('yja.myself',{
            url:'/myself',
            views:{
                'menuContent':{
                    templateUrl:'template/myself.html',
                    controller:'myself'
                }
            }
        })
		$urlRouterProvider.otherwise("/homePage");
		$locationProvider.html5Mode(true);
}) 
