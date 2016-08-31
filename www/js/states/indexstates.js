define([ "./states" ], function(states) {
	states.config(
		function($stateProvider, $urlRouterProvider,$httpProvider) {
			
			// $stateProvider
			// .state("plugin", {
			//  	url : "/",
			// 	controller: 'EntranceCtrl',
			//  	templateUrl : "views/component/plugin.html"
			//  })

			// $urlRouterProvider.otherwise("/");
			$stateProvider

			.state("login", {
			 	url : "/login",
				controller: 'loginCtrl',
			 	templateUrl : "views/login/login.html"
			 })
			 .state("login1", {
			 	url : "/login1",
				controller: 'loginCtrl',
			 	templateUrl : "views/login/login1.html"
			 })
			 //注册界面
			.state("register", {
				url: "/register",
				controller: 'registerCtrl',
				templateUrl : "views/register/register.html"
			})

             //$httpProvider.interceptors.push('BkndHttpInterceptor');

			 $urlRouterProvider.otherwise("/login");
		} );
});
