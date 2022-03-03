import playList from './playList.js';

const audio = new Audio();
let isPlay = false;
let playNum = 0;
const playBtn = document.querySelector('.play');
const playPrevBtn = document.querySelector('.play-prev');
const playNextBtn = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');
audio.src = playList[playNum].src;
audio.currentTime = 0;



export default function playAudio() {
    function togglePlay() {
        isPlay ? audio.pause() : audio.play();
        playBtn.classList.toggle('pause');
    }
    togglePlay();
    
    audio.onended = function() {
        playNext()
    }
    audio.onplaying = function() {
        isPlay = true;
    };
    audio.onpause = function() {
        isPlay = false;
    }; 
    highlightActiveItem();
}

function playNext() {
    playNum === (playList.length-1)?playNum = 0:playNum++;
    audio.src = playList[playNum].src;
    isPlay = false;
    playAudio();
    playBtn.classList.toggle('pause');
}

function playPrev() {
    playNum === 0?playNum = (playList.length-1):playNum--;
    audio.src = playList[playNum].src;
    isPlay = false;
    playAudio();
    playBtn.classList.toggle('pause');
}

playList.forEach(function(item, i) {
    const li = document.createElement('li');
    li.classList.add('play-item')
    li.textContent = playList[i].title;
    playListContainer.append(li);
})

function highlightActiveItem() {
    const allTracks = document.querySelectorAll(`.play-list li`);
    const activeTrack = document.querySelector(`.play-list li:nth-child(${playNum+1})`);

    allTracks.forEach(item => {item.classList.remove('item-active')})
    activeTrack.classList.toggle('item-active')
}

playBtn.addEventListener('click', playAudio);
playNextBtn.addEventListener('click', playNext);
playPrevBtn.addEventListener('click', playPrev);