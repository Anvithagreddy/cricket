angular.module('userServices', [])

	.factory('User', function($http) {
	userFactory = {};

	//User.create(regData);
	userFactory.create = function(regData) {
		return $http.post('/api/users/', regData);
	}

	userFactory.getUsers = function() {
		return $http.get('/api1/management/');
	};

	return userFactory;
});