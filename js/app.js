var app = angular.module('rtfmApp', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
	$routeProvider
		.when('/login', {
			templateUrl: 'js/login/login.html',
			controller: 'loginCtrl'
		})
		.when('/threads', {
			templateUrl: 'js/threads/threads.html',
			controller: ''
		})
		.when('/threads/:threadId', {
			templateUrl: 'js/thread/thread.html',
			controller: ''
		})
		.otherwise({
			redirectTo: '/login'
		})
});