angular.module('devPortal')
	.config(function($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl: 'templates/pages/main.html',
			controller: 'PortalMainController'
		})
		.when('/project',{
			templateUrl: 'templates/pages/project.html',
			controller: 'ProjectController'
		})
		.otherwise({redirectTo: '/'});
	});
