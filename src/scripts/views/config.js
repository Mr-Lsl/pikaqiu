angular.module("myApp")
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("guide")
        $stateProvider
            .state("guide", {
                url: "/guide",
                templateUrl: "./tpl/guide.html",
                controller: "guideCtrl"
            })
            .state("main", {
                url: "/main",
                templateUrl: "./tpl/main.html",
            })
            .state("main.home", {
                url: "/home",
                templateUrl: "./tpl/home.html",
                controller: "homeCtrl"
            })
            .state("detail", {
                url: "/detail:id",
                templateUrl: "./tpl/detail.html",
                controller: "detailCtrl"
            })
            .state("main.search", {
                url: "/search",
                templateUrl: "./tpl/search.html"
            })
            .state("main.photo", {
                url: "/photo",
                templateUrl: "./tpl/photo.html"
            })
            .state("main.myinform", {
                url: "/myinform",
                templateUrl: "./tpl/myinform.html"
            })
            .state("main.back", {
                url: "/back",
                templateUrl: "./tpl/back.html"
            })
    });