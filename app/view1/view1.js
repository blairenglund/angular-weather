'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
	$http({
	  method: 'GET',
	  url: 'http://api.openweathermap.org/data/2.5/weather?id=5074472&APPID=0aa45db4ad14dde4654b8554739f9f2e'
	}).then(function successCallback(response) {
	    // this callback will be called asynchronously
	    // when the response is available
	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
}]);

