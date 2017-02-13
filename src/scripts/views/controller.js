angular.module('myApp')
    .controller("guideCtrl", function () {
        var mySwiper = new Swiper('.swiper-container');
    })
    .controller("detailCtrl", function ($rootScope, $scope, $stateParams, $state) {
        console.log($stateParams.id);
        var new_ary = $rootScope.arr;
        for (var i = 0; i < new_ary.length; i++) {
            if (new_ary[i].id == $stateParams.id) {
                $scope.img = new_ary[i].img;
                $scope.title = new_ary[i].title;
            }
        }
        $scope.back = function () {
            $state.go("main.home")
        }
    })
    .controller("homeCtrl", ["$scope", "$http", "$timeout", "$rootScope", function ($scope, $http, $timeout, $rootScope) {
        $http({
            url: "./json/livelist.json"
        })
            .success(function (data) {
                $scope.data = data.data;
                $rootScope.arr = data.data;
            });

        var mySwiper1 = new Swiper(".swiper-container1", {
            // onlyExternal: true,
            onSlideChangeStart: function (swiper) {
                var ind = $("#ps span").eq(swiper.activeIndex);
                ind.addClass("bg").siblings().removeClass();
            }
        });
        $("#ps span").click(function () {
            var ind = $(this).index();
            $(this).addClass("bg").siblings().removeClass();
            mySwiper1.slideTo(ind, 1000, false);
        });

        var mySwiper2 = new Swiper(".swiper-container2", {
            // onlyExternal: true,
            onSlideChangeStart: function (swiper) {
                var $el = $("#move li").eq(swiper.activeIndex);
                $el.addClass("le").siblings().removeClass();
            }
        });
        $("#move li").click(function () {
            var ind = $(this).index();
            $(this).addClass("le").siblings().removeClass();
            mySwiper2.slideTo(ind, 1000, false);
        })

        var myScroll,
            pullDown = $("#pullDown"),
            pullUp = $("#pullUp"),
            pullDownLabel = $(".pullDownLabel"),
            pullUpLabel = $(".pullUpLabel"),
            container = $(".dls"),
            loadingStep = 0;

        $timeout(function () {
            myScroll = new IScroll("#wrapper", {
                scrollbars: false,
                mouseWheel: false,
                interactiveScrollbars: true,
                shrinkScrollbars: 'scale',
                fadeScrollbars: true,
                scrollY: true,
                probeType: 3,
                bindToWrapper: true
            });
            load();
        }, 100);


        function load() {
            //加载状态0默认，1显示加载状态，2执行加载数据，只有当为0时才能再次加载，这是防止过快拉动刷新
            pullDown.hide();
            pullUp.hide();
            myScroll.on("scroll", onScroll);
            myScroll.on("scrollEnd", onScrollEnd);
            $(document).on("touchmove", function (e) {
                e.preventDefault()
            });
        }


        function onScroll() {
            if (this.y > 40 && loadingStep == 0) {
                $(".pulldown-tips").hide();
                pullDown.addClass("refresh").show();
                pullDownLabel.text("松手刷新数据");
                loadingStep = 1;
                myScroll.refresh();
            } else if (this.y < (this.maxScrollY - 30) && loadingStep == 0) {
                $(".pullup-tips").hide();
                pullUp.addClass("loading").show();
                pullUpLabel.text("松手载入数据");
                loadingStep = 1;
                myScroll.refresh();
            }
        }

        function onScrollEnd() {
            if (loadingStep == 1 && pullDown.attr("class").match("refresh")) {
                //下拉刷新操作
                pullDown.removeClass("refresh");
                pullDownLabel.text("正在刷新");
                loadingStep = 2;
                pullDownAction();
            } else if (loadingStep == 1 && pullUp.attr("class").match("loading")) {
                pullUp.removeClass("loading");
                pullUpLabel.text("正在加载");
                loadingStep = 2;
                pullUpAction();
            }
        }

        function pullDownAction() {
            setTimeout(function () {
                var strs = "";
                strs += "<dl>" +
                    "<dt>" +
                    "<img src=" + $scope.data[0].img + ">" +
                    "</dt>" +
                    "<dd>" +
                    "<span>" + $scope.data[0].title + "</span>" +
                    "</dd>" +
                    "</dl>" +
                    "<dl>" +
                    "<dt>" +
                    "<img src=" + $scope.data[1].img + ">" +
                    "</dt>" +
                    "<dd>" +
                    "<span>" + $scope.data[1].title + "</span>" +
                    "</dd>" +
                    "</dl>";
                container.prepend($(strs));
                loadingStep = 0;
                pullDown.hide();
                myScroll.refresh();
                $(".pulldown-tips").show();
            }, 1000)
        }

        function pullUpAction() {
            var strs = "";
            strs += "<dl>" +
                "<dt>" +
                "<img src=" + $scope.data[0].img + ">" +
                "</dt>" +
                "<dd>" +
                "<span>" + $scope.data[0].title + "</span>" +
                "</dd>" +
                "</dl>" +
                "<dl>" +
                "<dt>" +
                "<img src=" + $scope.data[1].img + ">" +
                "</dt>" +
                "<dd>" +
                "<span>" + $scope.data[1].title + "</span>" +
                "</dd>" +
                "</dl>";
            container.append($(strs));
            loadingStep = 0;
            pullUp.hide();
            myScroll.refresh();
            $(".pullup-tips").show();
        }

        window.addEventListener('DOMContentLoaded', load, false);
    }]);