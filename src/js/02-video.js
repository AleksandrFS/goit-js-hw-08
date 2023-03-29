
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const data = function (data) {
  {seconds: 0}
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(data, 1000));

const timeBeforeFailure = Number(localStorage.getItem("videoplayer-current-time"));
console.log(timeBeforeFailure);

player
  .setCurrentTime(timeBeforeFailure)
//   .then(function (seconds) {
    
//   })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });








