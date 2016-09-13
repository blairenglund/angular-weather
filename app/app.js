//create app
//
var WeatherApp = angular.module('WeatherApp', [])

WeatherApp.filter('farenheit', function() {
	return function(input) {
		return Math.round( ( (input) * (9/5) ) - 459.67 );
	}
})

WeatherApp.controller('WeatherController', function(){
	this.data = {
		"coord":{"lon":-95.94,"lat":41.26},
		"weather":[{
			"id":501,
			"main":"Rain",
			"description":"moderate rain",
			"icon":"10d"},
			{"id":701,
			"main":"Mist",
			"description":"mist",
			"icon":"50d"}],
		"base":"stations",
		"main":{"temp":288.14,
				"pressure":1020,
				"humidity":87,
				"temp_min":286.48,
				"temp_max":289.15},
		"visibility":11265,
		"wind":{"speed":5.1,"deg":360},
		"rain":{"1h":2.03},
		"clouds":{"all":90},
		"dt":1473778718,
		"sys":{
			"type":1,
			"id":1918,
			"message":0.0313,
			"country":"US",
			"sunrise":1473768201,
			"sunset":1473813262},
		"id":5074472,
		"name":"Omaha",
		"cod":200
	}
})

//dummy JSON
