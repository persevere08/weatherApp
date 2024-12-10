"use strict"
const API_KEY = "eaff69fbfacd90b37dd2d20c9f6757ae";
const input = document.getElementsByTagName("input")[0];
const btn = document.getElementById("submit");
const icon = document.getElementById("weather-icon");
const area = document.getElementById("location");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity-wind");

btn.addEventListener("click", getWeatherInfo);

function getWeatherInfo (){
    const cityName = input.value;
    const weatherData = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);

    weatherData.then(function (data){
        return data.json();
    })
    .then(function (data){
        //console.log(data)
        fillData(data);
    })
    .catch(function (err) {
        console.error("Enter valid details");
    })
}

function fillData(data){
    icon.innerHTML = `<img src=http://openweathermap.org/img/w/${data.weather[0].icon}.png />`;
    area.innerHTML =`<p>location : ${data.name}, ${data.sys.country}</p>`
    temperature.innerHTML= `<p>Temperature : ${data.main.temp}<sup>o</sup>c, Feels like : ${data.main.feels_like}<sup>o</sup>c</p>`;
    description.innerHTML =`<p>Description : ${data.weather[0].description}.</p>`;
    humidity.innerHTML =`<p>Humidity : ${data.main.humidity}% , Wind : ${data.wind.speed} km/h</p>`;
}