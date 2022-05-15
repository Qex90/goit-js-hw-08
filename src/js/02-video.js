import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log(throttle)
const CURRENT_TIME_KEY = 'videoplayer-current-time';

const intitialTime = localStorage.getItem(CURRENT_TIME_KEY);

const player = new Player('vimeo-player');

if (intitialTime > 0) {
  player.setCurrentTime(intitialTime);
}

player.on('timeupdate', throttle(setItem, 1000));
function setItem(data) {
   localStorage.setItem(CURRENT_TIME_KEY, data.seconds);
}