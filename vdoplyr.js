const video = document.getElementById('videoPlayer');
const playPause = document.getElementById('playPause');
const seekBar = document.getElementById('seekBar');
const volumeBar = document.getElementById('volumeBar');
const fullscreen = document.getElementById('fullscreen');

playPause.addEventListener('click', () => {
  if (video.paused) { video.play(); playPause.textContent = "⏸"; }
  else { video.pause(); playPause.textContent = "▶️"; }
});

video.addEventListener('timeupdate', () => {
  seekBar.value = (video.currentTime / video.duration) * 100;
});

seekBar.addEventListener('input', () => {
  video.currentTime = (seekBar.value / 100) * video.duration;
});

volumeBar.addEventListener('input', () => {
  video.volume = volumeBar.value;
});

fullscreen.addEventListener('click', () => {
  video.requestFullscreen();
});
