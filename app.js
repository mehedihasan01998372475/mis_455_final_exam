
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const weatherApi = {

	key : "2a1ed1cc9cad1940a5956354ff87e0f3",

	baseUrl : "https://api.openweathermap.org/data/2.5/weather"
}


$('.weathersrc').keyup(function(){

	if(event.keyCode == 13){

	let inputsear = $('.weathersrc').val();

	getweatherReports(inputsear)


	}

	

})


function getweatherReports(city){

	fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)

	.then(weather => {

		return weather.json();
	}).then(showWeatherReport)


}

function showWeatherReport(weather){

	



	$('.city').html(`${weather.name}, ${weather.sys.country}`);

	$('.date').html(`TimeZone : ${weather.timezone}`)

	$('.temp').html(`${weather.main.temp}°c`)

	$('.min_max').html(`${weather.main.temp_min}°c (min) / ${weather.main.temp_max}°c (Max)`)


	


}