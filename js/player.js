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
    src: "https://coxautoinc-my.sharepoint.com/:v:/r/personal/jeffrey_pierce_coxautoinc_com/Documents/videos/" + vidSrc + ".mp4"
  });

  vidPlayer.on('pause', function() {
    this.bigPlayButton.show();


    vidPlayer.on('play', function() {
      this.bigPlayButton.hide();
    });
  });
}

document.addEventListener('DOMContentLoaded', (event) => {
  const vidId = methods.getURLParam('vidId');
  let vidName = data.arr.find(x => x.id == vidId).name;
  document.querySelector('.video-name').innerHTML = vidName;
  loadVideoSource(methods.slugify(vidName));
});
