/* JavaScript content from scripts/console/controllers/loginCtrl.js in folder common */
define(["./../controllers/controllers"], function (controllers) {
    "use strict";

    controllers.controller("searchCtrl", ["$scope", "$state", "$localStorage", "$timeout", "$location", "searchService",
        function ($scope, $state, $localStorage, $timeout, $location, searchService) {
            $scope.imgpath=$config.img_path;
            //获取已关注数据
            $scope.load = function () {
                var params = {
                    "markType": "1",
                    "userId":   window.localStorage.getItem("userId")
                };
                //调用方法
                searchService.mobile_mobileMarkList(params).then(function (data) {
                    $scope.searchs = data.t;
                    //当搜索后有数据了 我们把上拉加载的监控打开 否则一直关掉
                    if ($scope.searchs.length > obj.count) {
                        $scope.hasmore = true;
                    }
                    //如果页面需要重新加载 数据,那么必须执行刷新方法 $scope.$apply();
                    // $scope.$apply();
                }, function (errorMessage) {
                    console.log(errorMessage);
                });

            }
            $scope.load();

            $scope.goto = function () {
                $state.go("nosearch");
            }


            $scope.backto = function () {
                $state.go("login");
            }

            //进入这个页面是 是没有数据的 所以至为空
            $scope.searchs = [];
            //进入这个页面是不允许加载数据的 所以 在页面上的 ng-if 要为fasle； 一般是也要加载的 具体业务具体对待
            $scope.hasmore = false;

            var run = false;//模拟线程锁机制  防止多次请求 含义：是否正在请求。请注意，此处并非加入到了就绪队列，而是直接跳过不执行
            console.log($scope.hasmore + "是否加载更多");

            //每次加载的内容（死数据）
            $scope.items = [
                {"sys_pic": "img/mm.jpg", "sys_title": "加载后....古典书城",},
                {"sys_pic": "img/mm.jpg", "sys_title": "加载后....我们读书吧1",},
                {"sys_pic": "img/mm.jpg", "sys_title": "加载后....无锡百草园书店1",},
                {"sys_pic": "img/mm.jpg", "sys_title": "加载后....口袋书屋1",},
                {"sys_pic": "img/mm.jpg", "sys_title": "加载后....一句话情书1",},
                {"sys_pic": "img/mm.jpg", "sys_title": "加载后....无锡百草园书店1",},
                {"sys_pic": "img/mm.jpg", "sys_title": "加载后....口袋书屋1",},
                {"sys_pic": "img/mm.jpg", "sys_title": "加载后....一句话情书1",}
            ];

            //点击搜索查询数据 去新的界面nosearch
            $scope.search = function () {
                $state.go("nosearch", {
                    searchName: $scope.searchName

                });

                // var params = {
                //     "markType": "2",
                //     "userId": "1"
                // };
                // //调用方法
                // searchService.mobile_mobileMarkList(params).then(function (data) {
                //     $scope.searchs = data.t;
                //     //当搜索后有数据了 我们把上拉加载的监控打开 否则一直关掉
                //     if ($scope.searchs.length > obj.count) {
                //         $scope.hasmore = true;
                //     }
                //     //如果页面需要重新加载 数据,那么必须执行刷新方法 $scope.$apply();
                //     $scope.$apply();
                // }, function (errorMessage) {
                //     console.log(errorMessage);
                // });

            };

            //获取详情
            $scope.getInfo = function (infoItem) {
                // window.open(infoItem);
                // window.location.href=infoItem;
                $state.go("info", {
                    infoItem: infoItem
                });

            };

            //设计 一页 8条数据 ，具体业务具体对待  等对接后台的时候用的
            var obj = {current: 1, count: 8};

            //进入这个页面是 是没有数据的 所以至为空 初始化数据
            $scope.searchs = chushihua(obj, 1);

            //下拉刷新 也就是重新将之前的数据获取一边
            $scope.doRefresh = function () {
                var obj_data = {current: 1, count: 8};
                $scope.searchs = chushihua(obj_data, 2);
                //这个是每次都要有的 广播事件 通知程序 执行后关闭监控
                $scope.$broadcast('scroll.refreshComplete');
            };

            //上拉加载 每次递增数据
            $scope.loadMore = function () {
                //由于第一次进入页面是没 数据的 所以不去加载数据  当有数据了 再去加载数据
                if ($scope.searchs.length > 0) {
                    $scope.searchs = chushihua(obj, 3);
                }
                //这个是每次都要有的 广播事件 通知程序 执行后关闭监控
                $scope.$broadcast('scroll.infiniteScrollComplete');

            };

            /* state:1初始化，2刷新，3加载更多 */
            function chushihua(obj_data, state) {
                if (!run) {
                    run = true;
                    if (state == 1) {
                        $scope.project = [];
                    }
                    if (state == 2) {
                        $scope.project = $scope.searchs;
                    }
                    if (state == 3) {
                        $scope.project = $scope.searchs.concat($scope.items);
                    }
                    run = false;
                    /* $http({
                     method:"POST",
                     url:'此处是服务器地址',
                     data:obj_data,
                     headers: {'Content-Type': 'application/json;charset=utf-8'},
                     dataType:'JSON'
                     }).success(function(data, status) {
                     run = false;
                     if (state==3) {
                     $scope.project = $scope.project.concat(data.result);
                     if (data.result==null||data.result.length==0) {
                     console.log("结束");
                     $scope.hasmore=false;
                     }else{
                     obj.current += obj.count;
                     }
                     }else{
                     $scope.project = data.result;
                     }
                     }).error(function(data, status) {
                     });*/
                    return $scope.project;
                }
            }
        }])
});
