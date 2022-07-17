/* Get Our Elements */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const fullscreen = player.querySelector(".fullscreen-button");

/* functions */
function togglePlay() {
  video.paused ? video.play() : video.pause();
}

function updateButton() {
  toggle.innerText = video.paused ? "►" : "❚ ❚";
}

function skipTime() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRange() {
  video[this.name] = this.value;
}

function updateTimeline() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function updateVideoFromTimeline(ev) {
  const percent = (ev.layerX * 100) / player.clientWidth;
  video.currentTime = (video.duration * percent) / 100;
}

let fullScreenActive = false;
function toggleFullScreen() {
  if (fullScreenActive) {
    player.style.width = "auto";
    player.style.maxWidth = "750px";
    fullScreenActive = false;
  } else {
    player.style.width = "100%";
    player.style.maxWidth = "100%";
    fullScreenActive = true;
  }
}

/* DOM */
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach((skip) => skip.addEventListener("click", skipTime));
ranges.forEach((range) => range.addEventListener("change", handleRange));
video.addEventListener("timeupdate", updateTimeline);
progress.addEventListener("click", updateVideoFromTimeline);
fullscreen.addEventListener("click", toggleFullScreen);
