import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const data = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  console.log(data.seconds);
};


player.on('timeupdate', throttle(data, 1000));

const timeBeforeFailure = Number(
  localStorage.getItem('videoplayer-current-time')
);


player.setCurrentTime(timeBeforeFailure).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      console.log('range error!');
      break;

    default:
      console.log('error!');
      break;
  }
});
