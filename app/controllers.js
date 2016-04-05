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
	 $http.get("data.php").success(function(data)
	{	
		console.dir(data);
		$scope.dat=data;
	}) 	
});

app.controller("ViewCtrl",['$routeParams','$scope','$http',function($routeParams,$scope,$http)
{
	 $http.get("data.php").success(function(data)
	{			
		$scope.viewProduct=data[$routeParams.id];
	})	
}]);

app.controller("newProductCtrl",function($scope,$http)
{
	$scope.sendNewProduct=function()
	{	
		var fd = new FormData();   
		fd.append("file", document.getElementById('image1').files[0]);
		fd.append("title", $scope.title);
		fd.append("desc", $scope.desc);
		$http.post("data.php", fd, {
        withCredentials: true,
        headers: {'Content-Type': undefined },
        transformRequest: angular.identity,
		
		}).success(function(data){console.log(data)} )//.error( ..damn!... );
   
	}
});