const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e32ac7e39emsheffd152b8ce19acp1981e6jsndb3e6a04a036',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

//try {
//const response = await fetch(url, options);
//const result = await response.text();
//console.log(result);
//} catch (error) {
//	console.error(error);
//}

const getWeather =(city)=>{

cityName.innerHTML=city;

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {


		console.log(response)

		//cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset

	})
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi");


var i=0;
const arr=["Shanghai","Boston","Lucknow","Kolkata"];
function footWeather(){
    for(let i=0;i<4;i++) {
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+arr[i], options)
	.then(response => response.json())
	.then((response) => {
		const cFeels_like=(arr[i]+"Feels_like");
		const cHumidity=(arr[i]+"Humidity");
		const cMin_temp=(arr[i]+"Min_temp");
		const cMax_temp=(arr[i]+"Max_temp");
        const cSunrise=(arr[i]+"Sunrise");
        const cSunset=(arr[i]+"Sunset");
        const cTemp=(arr[i]+"Temp");
        const cWind_degrees=(arr[i]+"Wind_degrees");
        const cWind_speed=(arr[i]+"Wind_speed");
        document.getElementById(`${cFeels_like}`).innerHTML=response.feels_like;
        document.getElementById(`${cHumidity}`).innerHTML=response.humidity;
        document.getElementById(`${cMin_temp}`).innerHTML=response.min_temp;
        document.getElementById(`${cMax_temp}`).innerHTML=response.max_temp;
        document.getElementById(`${cSunrise}`).innerHTML=response.sunrise;
		document.getElementById(`${cSunset}`).innerHTML=response.sunset;
		document.getElementById(`${cTemp}`).innerHTML=response.temp;
		document.getElementById(`${cWind_degrees}`).innerHTML=response.wind_degrees;
		document.getElementById(`${cWind_speed}`).innerHTML=response.wind_speed;
        // console.log(response);
            })
	.catch(err => console.error(err));
            // console.log(i);
    };
}
setInterval(footWeather,5000);

