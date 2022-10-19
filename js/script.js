console.log("Примечание проверяющим: Сменя языка проложения происходит при вводе города, на соответствующем языке, в секции погода.");

let lang = 'en';

import {city, lastLang} from './weather.js';
import showWelcome from './time.js';
import setBg from './slider.js';
import getWeather from './weather.js';
import getQuotes from './quotes.js';
import playAudio from './audio.js';
import playList from './playList.js';

defineLanguage();
showWelcome(); 
setBg();
getWeather();
getQuotes();


function getRandomNum(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
};

export {lang, getRandomNum, defineLanguage}


function defineLanguage() {
    function isCyrillic (text) {
        return /[а-я]/i.test(text);
    }

    if (isCyrillic(city.innerHTML)) {
        return lang = 'ru';
    } 
    if (city.innerHTML === ""){
        return lang = lastLang;
    } else {
        return lang = 'en';
    }
}