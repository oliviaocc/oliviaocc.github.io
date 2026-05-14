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



const timerToggleBtn = document.getElementById("start-timer-btn");
const timerContainer = document.getElementById("timer-container");
const startBtn = document.getElementById("start-btn");
const timerDisplay = document.getElementById("timer-display");

let timeLeft = 60;
let timerInterval;

// Open and close timer
timerToggleBtn.addEventListener("click", () => {
  if (timerContainer.style.display === "none") {
    timerContainer.style.display = "block";
  } else {
    timerContainer.style.display = "none";
  }
});

// Start timer
startBtn.addEventListener("click", () => {
  clearInterval(timerInterval);

  timeLeft = 60;

  timerInterval = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerDisplay.textContent = `${minutes}:${seconds}`;

    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "Time's up!";
    }
  }, 1000);
});



const startmusiclist = document.getElementById("start-music-list");
const musicContainer = document.getElementById("music-container");
const audioPlayer = document.getElementById("audio-player");
const songButtons = document.querySelectorAll(".song-btn");

// Open / close music menu
startmusiclist.addEventListener("click", () => {
  if (musicContainer.style.display === "flex") {
    musicContainer.style.display = "none";
  } else {
    musicContainer.style.display = "flex";
  }
});

// Change song when clicked
songButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const song = button.getAttribute("data-song");

   video.src = song;

    video.play();
  });
});


// Add other functionalities here
