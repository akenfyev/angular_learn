app=angular.module("app",[]);

app.controller("LoadCtrl",function($scope,$http)
{
	/*  $http.post("data.php",{eee:"adasdsada"})
	.success(function(data)
	{
		var fd = new FormData(document.getElementById('form'));
		console.log(data);
	}) */
	/* $scope.uploadFile = function(files) {
    var fd = new FormData();
    //Take the first selected file
    fd.append("file", files[0]);
console.dir($scope)
    $http.post("data.php", fd, {
        withCredentials: true,
        headers: {'Content-Type': undefined },
        transformRequest: angular.identity
    }).success( function(data){console.log(data)} )//.error( ..damn!... ); */
	$scope.upload=function($scope)
	{
		console.dir($scope.ttt)
	};

});
	
	/* $scope.loadData=function()
	{
		var formData = new FormData();

		formData.append("username", "Groucho");
		console.dir(formData)

			$http.post("data.php",{eee:formData})
	 .success(function(data)
	{
		//var fd = new FormData(document.getElementById('form'));
		console.log(data);
	}) 
	} */
	
/* 		$scope.uploadFile = function(files) {
		var fd = new FormData();
		//Take the first selected file
		fd.append("file", files[0]);

		$http.post("data.php", fd, {
			withCredentials: true,
			headers: {'Content-Type': undefined },
			transformRequest: angular.identity
		}).success({function($data){console.log(data)}});

	}; */
