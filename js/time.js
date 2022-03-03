import {lang, defineLanguage} from './script.js';
import greetingTranslation from './translation.js';
import {getTimeOfDay, stampNum} from './timeOfDay.js';

const time = document.querySelector('.time');
const dateTag = document.querySelector('.date');
const greetingTag = document.querySelector('.greeting');
const name = document.querySelector('.name');

export default function showWelcome() {
    defineLanguage();
    const date = new Date();
    getTimeOfDay();

    function showTime() {
        const date = new Date();
        const currentTime = date.toLocaleTimeString();
        time.textContent = currentTime;
    }

    function showDate() {
        const locales = ['ru-Ru', 'en-US'];
        function findDateLang() {
            if (lang === 'ru') return locales[0];
            if (lang === 'en') return locales[1];
        }
        const options = { weekday: 'long', month: 'long', day: 'numeric'};
        const currentDate = date.toLocaleDateString(findDateLang(), options);
        dateTag.textContent = currentDate;
    }
        
    function showGreeting() {
        function findGreetingLang() {
            if (lang === 'ru') return greetingTranslation.ru[stampNum];
            if (lang === 'en') return greetingTranslation.en[stampNum];
        }
        greetingTag.textContent = findGreetingLang(lang) + ", ";
        
        function findPlaceholderLang() {
            if (lang === 'ru') {
                return name.setAttribute('placeholder', '[Ваше имя]')
            }
            if (lang === 'en') {
                return name.setAttribute('placeholder', '[Enter name]')
            }
        }
        findPlaceholderLang();
        function setLocalStorage() {
            localStorage.setItem('name', name.value);
          }
        window.addEventListener('beforeunload', setLocalStorage)
        function getLocalStorage() {
            if(localStorage.getItem('name')) {
                name.value = localStorage.getItem('name');
            }
        }
        window.addEventListener('load', getLocalStorage)
    }
        
    
    showTime();
    showDate();
    showGreeting();
    setTimeout(showWelcome, 1000);
}
