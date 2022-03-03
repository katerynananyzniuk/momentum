import {getTimeOfDay} from './timeOfDay.js';
import {getRandomNum} from './script.js';

const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const firstBgImg = 0;
const lastBgImg = 20;
let randomNum = getRandomNum(firstBgImg, lastBgImg);

export default function setBg() {
    const img = new Image();
    let timeOfDay = getTimeOfDay()
    const bgNum = chooseBgImg();    
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`
    img.onload = () => {   
        body.style.backgroundImage = `url(${img.src})`;
        body.style.backgroundRepeat = 'no-repeat';
    }; 
    
    function chooseBgImg() {
        return String(randomNum).padStart(2,"0");
    };
}

function getSlideNext() {
randomNum === 20?randomNum = 1:randomNum++;
    setBg();
};

function getSlidePrev() {
    randomNum === 1?randomNum = 20:randomNum--;
    setBg();
};

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

