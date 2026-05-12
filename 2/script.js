const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);




function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

const fastForwardButton = document.querySelector("#fast-forward-button");
console.log(fastForwardButton);

fastForwardButton.addEventListener("click", fastForward);

function fastForward() {
  if (video.playbackRate === 1.0) {
    video.playbackRate = 2.0;
  } else {
    video.playbackRate = 1.0;
  }
}


const muteUnmuteButton = document.querySelector("#mute-unmute-button");
const muteUnmuteImg = document.querySelector("#mute-unmute-img");

muteUnmuteButton.addEventListener("click", toggleAudio);

function toggleAudio() {

  // toggle muted true/false
  video.muted = !video.muted;

  // change icon
  if (video.muted) {
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  } else {
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  }

}

const replaybutton = document.querySelector ("#replay-button")
console.log (replaybutton)

replaybutton.addEventListener ("click", () => {
 video.currentTime = 0;
 video.play();
});


const audio = document.getElementById("custom-video-player");
const volumeSlider = document.getElementById("volume-slider");

volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});



// Add other functionalities here
