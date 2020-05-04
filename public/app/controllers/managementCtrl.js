angular.module('managementController', [])

.controller('managementCtrl', function(User) {
	var app = this;

	//app.loading = true;
	app.errorMsg = false;

	User.getUsers().then(function(data) {
		if(data.data.success) {
			app.user1 = data.data.user1;
			//app.loading = false;

		} else {
			app.errorMsg = data.data.message;
			//app.loading = false;
		}
	});
});