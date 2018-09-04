var myApp = angular.module("myApp", []);
myApp.controller("MyController",["$scope","$http",function($scope,$http){
  $http.get("js/creativeCoding.json").success(function(data){
    $scope.data = data;
  });
}]);
