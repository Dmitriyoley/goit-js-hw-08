import throttle from 'lodash.throttle';
import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const timeKey = localStorage.getItem("TIME_KEY");
console.log(timeKey)
if (timeKey !== null) {
player.setCurrentTime(Number(timeKey))
}

function playerCurrTime (time) {
    localStorage.setItem("TIME_KEY", JSON.stringify(time.seconds ));
}

player.on('timeupdate', throttle(playerCurrTime, 1000))

    
