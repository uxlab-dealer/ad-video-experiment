import {data, methods} from './data.js';

document.addEventListener('DOMContentLoaded', (event) => {
  let dataGroup
  let title = document.querySelector(".jumbotron-heading");
  if (methods.getURLParam('groupId') == 2 ){
    dataGroup = data.arr.slice(12);
    title.innerHTML = "UX Video Experiment - Page 2";
  } else {
    dataGroup = data.arr.slice(0, 11);
  }
  console.log(dataGroup);

  const addImgName = (item) =>
    item.imgSrc = "./img/" + methods.slugify(item.name) + ".png"
  dataGroup.forEach(addImgName);

  dataGroup = {arr:dataGroup};
  console.log(dataGroup);
  let template = document.getElementById('card-template').innerHTML;
  let rendered = Mustache.render(template, dataGroup);

  document.querySelector('.card-container').innerHTML = rendered;
});

document.addEventListener('click', (event) => {
	if (!event.target.matches('.view-btn')) return;
	event.preventDefault();
	window.location.href = "player.html?vidId=" + event.target.dataset.videoindex;
}, false);
