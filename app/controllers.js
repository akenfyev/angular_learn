'use strict';
var app=angular.module('app',['ngRoute']).
config(['$routeProvider',
	function($routeProvider)
	{
		
		$routeProvider.
		when('/about',
		{
			templateUrl:'templates/about.html'
		}).when('/catalog',
		{
			templateUrl:'templates/catalog.html'			
		}).when('/product/:id',
		{
			templateUrl:'templates/view.html'
		}).when('/newProduct',{
			templateUrl:'templates/add_product.html'
		})
		.otherwise(
		{
			redirectTo:'/about'
		})
	}
]);

app.controller('InitCtrl',function($scope)
{
	$scope.init={
		"imgPath":"data/images/"
	}
});

app.controller('CatalogCtrl',function($scope,$http)
{
	 $http.get("data/text/catalog.json?23").success(function(data)
		{
			
			$scope.dat=data;
		}) 	
});

app.controller("ViewCtrl",['$routeParams','$scope','$http',function($routeParams,$scope,$http)
{
	 $http.get("data/text/catalog.json?23").success(function(data)
		{
			
			$scope.viewProduct=data[$routeParams.id];
		}) 	
	
}]);