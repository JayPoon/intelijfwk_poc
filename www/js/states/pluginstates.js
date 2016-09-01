define([ "./states" ], function(states) {
	states.config(
			function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
				
				// $ionicConfigProvider.platform.ios.tabs.style('standard'); 
				// $ionicConfigProvider.platform.ios.tabs.position('bottom');
				$ionicConfigProvider.platform.android.tabs.style('standard');
				$ionicConfigProvider.platform.android.tabs.position('bottom');

				// $ionicConfigProvider.platform.ios.navBar.alignTitle('center'); 
				// $ionicConfigProvider.platform.android.navBar.alignTitle('left');

				$ionicConfigProvider.backButton.text('')
				$ionicConfigProvider.platform.ios.backButton.text('')//.previousTitleText('').icon('ion-ios-arrow-thin-left');
				$ionicConfigProvider.platform.android.backButton.text('')
				
				// .previousTitleText('')// .icon('ion-android-arrow-back');        

				$ionicConfigProvider.platform.ios.views.transition('ios'); 
				$ionicConfigProvider.platform.android.views.transition('android');



				$stateProvider
		
				// 组件
				.state('tab', {
					url: '/tab',
					abstract: true,
					controller: 'TabsCtrl',
					templateUrl: 'views/tabs.html'
				})

				 // Each tab has its own nav history stack:

				.state('tab.entrance', {
					url: '/entrance',
					views: {
						'tab-entrance': {
							templateUrl: 'views/tabs-entrance.html',
							controller: 'EntranceCtrl'
						}
					}
				})
				.state('tab.plugins', {
					url: '/plugins',
					views: {
						'tab-plugins': {
							templateUrl: 'views/tabs-plugins.html',
							controller: 'PluginsCtrl'
						}
					}
				})
				
				.state('tab.device', {
					url: "/plugins/device",
					views: {
						'tab-plugins': {
							templateUrl: "views/component/device.html",
							controller: 'DeviceCtrl'
						}
					}
				})
				.state('tab.network', {
					url: "/plugins/network",
					views: {
						'tab-plugins': {
							templateUrl: "views/component/network.html",
							controller: 'NetworkCtrl'
						}
					}
				})
				.state('tab.camera', {
					url: "/plugins/camera",
					views: {
						'tab-plugins': {
							templateUrl: "views/component/camera.html",
							controller: 'CameraCtrl'
						}
					}
				})
				.state('tab.barcode', {
					url: "/plugins/barcode",
					views: {
						'tab-plugins': {
							templateUrl: "views/component/barcode.html",
							controller: 'BarcodeCtrl'
						}
					}
				})

				

			} );
});
