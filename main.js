const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadSecond = 0;
let leadMinute = 0;
let leadHour = 0;

let timerStatus = "stopped";
let timerInterval = null;

function stopWatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    leadSecond = "0" + seconds.toString();
  } else {
    leadSecond = seconds;
  }
  if (minutes < 10) {
    leadMinute = "0" + minutes.toString();
  } else {
    leadMinute = minutes;
  }
  if (hours < 10) {
    leadHour = "0" + hours.toString();
  } else {
    leadHour = hours;
  }

  document.getElementById("timer").innerHTML =
    leadHour + ":" + leadMinute + ":" + leadSecond;
}

startStopBtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1);
    startStopBtn.classList.remove("btn-success");
    startStopBtn.classList.add("btn-danger");
    startStopBtn.innerHTML = `<i class="bi bi-pause-fill"></i>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    startStopBtn.classList.remove("btn-danger");
    startStopBtn.classList.add("btn-success");
    startStopBtn.innerHTML = `<i class="bi bi-play-fill"></i>`;
    timerStatus = "stopped";
  }
});

resetBtn.addEventListener("click", function () {
  window.setInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("timer").innerHTML = "00:00:00";
});
