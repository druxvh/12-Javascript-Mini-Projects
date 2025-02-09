const time = document.querySelector(".stopwatch");
const startBtn = document.querySelector(".start-el");
const pauseBtn = document.querySelector(".pause-el");
const resetBtn = document.querySelector(".reset-el");

let [hours, mins, secs] = [0, 0, 0];
let timer = null;

const updateDisplay = () => {
  let h = hours < 10 ? "0" + hours : hours;
  let m = mins < 10 ? "0" + mins : mins;
  let s = secs < 10 ? "0" + secs : secs;
  time.textContent = `${h}:${m}:${s}`;
};

const stopwatch = () => {
  secs++;
  if (secs === 60) {
    secs = 0;
    mins++;
  }
  if (mins === 60) {
    mins = 0;
    hours++;
  }
  updateDisplay();
};

startBtn.addEventListener("click", () => {
  if (!timer) {
    timer = setInterval(stopwatch, 1000);
  }
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  [hours, mins, secs] = [0, 0, 0];
  updateDisplay();
});
