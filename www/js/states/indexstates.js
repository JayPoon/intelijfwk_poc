define([ "./states" ], function(states) {
	states.config(
		function($stateProvider, $urlRouterProvider) {
			
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
			 //注册界面
			.state("register", {
				url: "/register",
				templateUrl : "views/register/register.html"
			});

			 $urlRouterProvider.otherwise("/login");
		} );
});
