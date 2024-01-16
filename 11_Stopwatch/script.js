const displayTime = document.querySelector(".stop-watch");
const startBtn = document.querySelector(".start-el");
const pauseBtn = document.querySelector(".pause-el");
const resetBtn = document.querySelector(".reset-el");

let minutes = 0;
let seconds = 0;
let timer;

startBtn.addEventListener("click", () => {
  timer = true;
  stopwatch();
});
pauseBtn.addEventListener("click", () => {
  timer = false;
});
resetBtn.addEventListener("click", () => {
  timer = false;
  minutes = 0;
  seconds = 0;
  displayTime.textContent = `00:00`;
});

const stopwatch = () => {
  if (timer) {
    seconds++;
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes == 60) {
      timer = false;
    }

    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    displayTime.textContent = `${minutes}:${seconds}`;
    setTimeout(stopwatch, 1000);
  }
};
