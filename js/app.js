angular.module("YJA",[
    //_TEMPLATES-MAIN_,//在打包发布的时候，需要引入打包好的模板模块
	"ionic",
	"controllers.yja",
    "controllers.coachDetile",
    "controllers.reloadr",
    "controllers.register",
    "controllers.searchCoach",
    "controllers.judgeMent",
    "controllers.order",
    "directives.coachList",
	"services.common"
])
.config(function(
	$stateProvider,
	$locationProvider,
	$urlRouterProvider,
    $httpProvider,
    $rootScopeProvider
){   
	$stateProvider
		.state('yja',{
			url:"/yja",
			templateUrl:"template/menu.html",
			controller:"yja"
		})
        .state('yja.reload',{
            url:"/reload",
            views:{
                'menuContent':{
                    templateUrl:"template/reload.html",
                    controller:"reloadr"
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
        .state('yja.searchCoach',{
            url:"/searchCoach",
            views:{
                'menuContent':{
                    templateUrl:"template/searchCoach.html",
                    controller:"searchCoach"
                }
            }
        })
        .state('yja.register',{
            url:'/register',
            views:{
                'menuContent':{
                    templateUrl:'template/register.html',
                    controller:'register'
                }
            }
        })
        .state('yja.judgeMent',{
            url:'/judgeMent',
            views:{
                'menuContent':{
                    templateUrl:'template/judgeMent.html',
                    controller:'judgeMent'
                }
            }
        })
        .state('yja.order',{
            url:'/order/:studentId',
            views:{
                'menuContent':{
                    templateUrl:'template/order.html',
                    controller:'order'
                }
            }
        })
		// $urlRouterProvider.otherwise("/yja/homePage");
		$locationProvider.html5Mode(true);
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';


    /**
     * The workhorse; converts an object to x-www-form-urlencoded serialization.
     * @param {Object} obj
     * @return {String}
     */
    var param = function (obj) {
        var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

        for (name in obj) {
            value = obj[name];

            if (value instanceof Array) {
                for (i = 0; i < value.length; ++i) {
                    subValue = value[i];
                    fullSubName = name + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if (value instanceof Object) {
                for (subName in value) {
                    subValue = value[subName];
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            }
            else if (value !== undefined && value !== null)
                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }

        return query.length ? query.substr(0, query.length - 1) : query;
    };

    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function (data) {
        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];
}) 
