import {
  data,
  methods
} from './data.js';


const loadVideoSource = (vidSrc) => {
  const vidPlayer = videojs('ux-video', {
    controls: true,
    fluid: true,
    loadingSpinner: true,
    preload: false,
  });

  vidPlayer.src({
    type: 'video/mp4',
    //src: "../videos/" + vidSrc + ".mp4"
    src: "https://dl.dropbox.com/s/" + vidSrc + ".mp4?dl=0"
  });

  vidPlayer.on('pause', () => {
    this.bigPlayButton.show();

    vidPlayer.on('play', () => {
      this.bigPlayButton.hide();
    });
  });
}

document.addEventListener('DOMContentLoaded', (event) => {
  const vidId = methods.getURLParam('vidId');

  let vidName = data.arr.find(x => x.id == vidId).name;
  document.querySelector('.video-name').innerHTML = vidName;

  let vidSource = data.arr.find(x => x.id == vidId).dbPath;
  loadVideoSource(vidSource);
});
