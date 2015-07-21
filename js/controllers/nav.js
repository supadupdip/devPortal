angular.module('devPortal')
	.controller('NavController',['$http', '$scope', '$routeParams', function($http, $scope, $routeParams){
		$scope.projects = [];


			$scope.page = {};
			$scope.page.loading = true;
			$scope.page.updating = false;


	}]);
