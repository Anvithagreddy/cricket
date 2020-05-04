angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
	
	$routeProvider

	.when('/', {
		templateUrl: 'app/views/pages/home.html'
	})

	.when('/about', {
		templateUrl: 'app/views/pages/about.html'
	})

	.when('/register', {
		templateUrl: 'app/views/pages/users/register.html',
		controller: 'regCtrl',
		controllerAs: 'register'
		//authenticated: false
	})

	.when('/login', {
		templateUrl: 'app/views/pages/users/login.html',
		//authenticated: false
	})

	.when('/newplayer', {
		templateUrl: 'app/views/pages/users/newplayer.html',
		controller: 'newCtrl',
		controllerAs: 'new'
		//authenticated: false
	})

	.when('/management', {
		templateUrl: 'app/views/pages/management/management.html',
		controller: 'managementCtrl',
		controllerAs: 'management'
		//authenticated: false
	})



	.otherwise({ redirectTo: '/'});

	$locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
});