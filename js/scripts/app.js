define(['angularAMD','ionic','yja','classTable','message','myself'], function (angularAMD) {
    var app = angular.module("YJA",['ionic']);
    app.config(function(
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
        .state('yja.classTable',{
            url:"/classTable",
            views:{
                'menuContent':{
                    templateUrl:"template/classTable.html",
                    controller:"classTable"
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
        .state('yja.myself',{
            url:'/myself',
            views:{
                'menuContent':{
                    templateUrl:'template/myself.html',
                    controller:'myself'
                }
            }
        })
        $urlRouterProvider.otherwise("/yja/classTable");
        $locationProvider.html5Mode(true);
    })
    // Bootstrap Angular when DOM is ready
    return angularAMD.bootstrap(app);
});