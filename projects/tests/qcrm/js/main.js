document.addEventListener("DOMContentLoaded", function(event) {
  const screenType = window.devicePixelRatio === 1 ? 'Normal' : 'Retina';
  const hours = new Date().getHours();
  const dayTime = (hours >= 8 && hours <= 16) ? 'morning' : 'night';
  const randomImageId = Math.floor(Math.random() * 3 + 1);

  document.getElementById("showBg").style.backgroundImage = `url(\"../img/bgs/${dayTime}/${randomImageId}${screenType}\")`;
  // document.getElementById("showBg").style.color = 'red';
});
