//create app
//
var WeatherApp = angular.module('WeatherApp', [])

WeatherApp.filter('farenheit', function() {
	return function(input) {
		return Math.round( ( (input) * (9/5) ) - 459.67 );
	}
})

WeatherApp.directive('weatherData', function(){
	// Runs during compile
	return {
		controller: function($http, $scope, $interval){

			$scope.data = new Object();

			var hover = false;

			//getData();

			//$interval(getData(),600000)

			function getData() {
				$http.get('http://api.openweathermap.org/data/2.5/weather?id=5074472&APPID=0aa45db4ad14dde4654b8554739f9f2e').
					then(function(response) {
						$scope.data = response.data;
						document.body.style.backgroundImage = "url(components/weather/"+$scope.data.weather[0].main+".jpg)";
						debugger;
					})
			}
		},
		restrict: 'E',
		templateUrl: 'components/weather/weather-data.html'
	};
});

WeatherApp.controller('TimeController', function($interval, $scope){

	$scope.time = new Date().getTime();

	$interval(function() {
		$scope.time = new Date().getTime();
	}, 1000)

	console.log($scope.time)

})