var app = angular.module('rtfmApp');

app.service('EnvService', function($window){
	this.getEnv = function(){
		return $window.env;
	}
})