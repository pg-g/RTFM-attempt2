var app = angular.module('rtfmApp');

app.controller('loginCtrl', function($scope, EnvService){
	$scope.env = EnvService.getEnv();

	$scope.logMeIn = function(username){
		console.log(username)
	};
});