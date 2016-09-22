//create app
//
var WeatherApp = angular.module('WeatherApp', ['ngAnimate'])

//convert Kelvin to Farenheit
WeatherApp.filter('farenheit', function() {
	return function(input) {
		return Math.round( ( (input) * (9/5) ) - 459.67 );
	}
})

//convert Meters/sec to Miles/Hour
WeatherApp.filter('mph', function() {
	return function(input) {
		return Math.round(input * 2.2369362920544);
	}
})

WeatherApp.filter('windDirection', function(){
	return function(input) {
		if (input > 348.75 || input <= 11.25) {return 'N'}
		else if (input > 11.25 && input <= 33.75) {return 'NNE'}
		else if (input > 33.75 && input <= 56.25) {return 'NE'}
		else if (input > 56.25 && input <= 78.75) {return 'ENE'}
		else if (input > 78.75 && input <= 101.25) {return 'E'}
		else if (input > 101.25 && input <= 123.75) {return 'ESE'}
		else if (input > 123.75 && input <= 146.25) {return 'SE'}
		else if (input > 146.25 && input <= 168.75) {return 'SSE'}
		else if (input > 168.75 && input <= 191.25) {return 'S'}
		else if (input > 191.25 && input <= 213.75) {return 'SSW'}
		else if (input > 213.75 && input <= 236.25) {return 'SW'}
		else if (input > 236.25 && input <= 258.75) {return 'WSW'}
		else if (input > 258.75 && input <= 281.25) {return 'W'}
		else if (input > 281.25 && input <= 303.75) {return 'WNW'}
		else if (input > 303.75 && input <= 326.25) {return 'NW'}
		else if (input > 326.25 && input <= 348.75) {return 'NNW'};
	};
});

WeatherApp.directive('weatherData', function(){
	// Runs during compile
	return {
		controller: function($http, $scope, $interval){

			$scope.data = new Object();

			var hoverW = false;

			$interval(getData(),600000)

			function getData() {
				$http.jsonp('https://api.darksky.net/forecast/5a3138639a13bf2f4bf1dd82391de58c/41.26,-95.947?callback=JSON_CALLBACK').
					success(function(response) {
						debugger;
						$scope.data = response;
						document.body.style.backgroundImage = "url(components/weather/"+$scope.data.currently.icon+".jpg)";
						console.log($scope.data);
					})
			}
		},
		restrict: 'E',
		templateUrl: 'components/weather/weather-data.html'
	};
});

WeatherApp.directive('time', function(){
	// Runs during compile
	return {
		controller: function($interval, $scope){

			$scope.time = new Date().getTime();

			var hoverT = false;

			$interval(function() {
				$scope.time = new Date().getTime();
			}, 1000)

			console.log($scope.time)

		},
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'components/time/time.html',
	};
});
