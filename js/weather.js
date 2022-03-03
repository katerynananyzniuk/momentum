import {lang, defineLanguage} from './script.js';
import showWelcome from './time.js';
import getQuotes from './quotes.js';

let lastLang = 'ru';
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');

export default async function getWeather() {  

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=${lang}&appid=90695f81d4a9ffa2c0a2e8342cca8060&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    if (lang === 'ru') {
        wind.textContent = `Скорость ветра: ${Math.round(data.wind.speed)}  м/с`;
        humidity.textContent = `Влажность: ${Math.round(data.main.humidity)}  %`;
    }
    if (lang === 'en') {
        wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
        humidity.textContent = `Humidity: ${Math.round(data.main.humidity)}  %`;
    }

    city.onchange = () => {
        city.value = city.textContent
        getWeather();
    }; 
    lastLang = lang;
}

function setCity(event) {
    if (event.code === 'Enter') {
        defineLanguage();
        getWeather();
        showWelcome();
        getQuotes();
        city.blur();
    }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);

export {city, lastLang}