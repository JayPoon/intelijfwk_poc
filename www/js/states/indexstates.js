define([ "./states" ], function(states) {
	states.config(
		function($stateProvider, $urlRouterProvider,$httpProvider) {
			
			$stateProvider

			.state("login", {
			 	url : "/login",
				controller: 'loginCtrl as login',
			 	templateUrl : "views/login/login.html"
			 })
			
			.state("register", {
				url: "/register",
				controller: 'registerCtrl' ,
				controllerAs: 'register',
				templateUrl : "views/register/register.html"
			})

			.state("search", {
				url: "/search",
				controller: 'searchCtrl as search' ,
				templateUrl : "views/third/search.html"
			})

			.state("nosearch", {
				url: "/nosearch",
				controller: 'nosearchCtrl as nosearch' ,
				templateUrl : "views/third/nosearch.html"
			})

			 $urlRouterProvider.otherwise("/login");
		} );
});
