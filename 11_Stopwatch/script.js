const time = document.querySelector(".stopwatch");
const startBtn = document.querySelector(".start-el");
const pauseBtn = document.querySelector(".pause-el");
const resetBtn = document.querySelector(".reset-el");

let isRunning = false;
let [hours, mins, secs] = [0, 0, 0];

startBtn.addEventListener("click", () => {
  isRunning = true;
  setInterval(stopwatch, 1000);
});
pauseBtn.addEventListener("click", () => {
  isRunning = false;
});
resetBtn.addEventListener("click", () => {
  isRunning = false;
  [hours, mins, secs] = [0, 0, 0];
  console.log(hours, mins, secs);
});

const stopwatch = () => {
  if (isRunning) {
    secs++;

    if (secs == 60) {
      mins++;
      secs = 0;
    }
    if (mins == 60) {
      hours++;
      mins = 0;
      secs = 0;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = mins < 10 ? "0" + mins : mins;
  let s = secs < 10 ? "0" + secs : secs;
  time.textContent = `${h}:${m}:${s}`;
};
