const textDisplay = document.querySelector("#textDisplay p");
const textInput = document.querySelector("#textInput");
const timer = document.querySelector("#timer");
const modal = document.querySelector(".modal");
const modalText = document.querySelector(".modal-text");
const playAgainBtn = document.querySelector(".modal button");
const mainContainer = document.querySelector(".main");

const RANDOM_QUOTE_API_KEY = "http://api.quotable.io/random";

let startTime;
let timerInterval;

// start timer
function startTimer() {
  timer.innerText = "0s";
  startTime = new Date();

  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    let elapsedTime = Math.floor((new Date() - startTime) / 1000);
    timer.innerText = `${elapsedTime}s`;
  }, 1000);
}

// calculate wpm
function getWPM() {
  //convert ms to mins
  let elapsedTime = (new Date() - startTime) / 1000 / 60;
  let wordCount = textInput.innerText.split(" ").length;
  return Math.floor(wordCount / elapsedTime);
}

// fetch quote
async function getRandomQuote() {
  try {
    const response = await fetch(RANDOM_QUOTE_API_KEY);
    const data = await response.json();
    return data.content;
  } catch (err) {
    return "Typing practice makes perfect!";
  }
}

// render quote
async function startGame() {
  const quote = await getRandomQuote();
  textDisplay.innerHTML = "";

  // to split characters and creating span
  quote.split("").forEach((char) => {
    let charSpan = document.createElement("span");
    charSpan.innerText = char;
    textDisplay.appendChild(charSpan);
  });

  // default values
  textInput.value = "";
  startTime = null;
  timer.innerText = "0s";
  mainContainer.classList.remove("hide");
  modal.classList.add("hide");
}

startGame();

// typing event
textInput.addEventListener("input", () => {
  if (!startTime) startTimer();

  const quoteArr = textDisplay.querySelectorAll("span");
  const textInputArr = textInput.value.split("");
  let correct = true;

  // char color logic
  quoteArr.forEach((ch, i) => {
    const currInputChar = textInputArr[i];
    const currDisplaySpanChar = ch;

    if (currInputChar == null) {
      currDisplaySpanChar.classList.remove("incorrect", "correct");
      correct = false;
    } else if (currInputChar === currDisplaySpanChar.innerText) {
      currDisplaySpanChar.classList.add("correct");
      currDisplaySpanChar.classList.remove("incorrect");
    } else {
      currDisplaySpanChar.classList.remove("correct");
      currDisplaySpanChar.classList.add("incorrect");
      correct = false;
    }
  });

  // if all correct
  if (correct) {
    clearInterval(timerInterval);
    mainContainer.classList.add("hide");
    modal.classList.remove("hide");
    modalText.innerText = `${getWPM()} WPM!`;
    textInput.value = "";
  }
});

// Prevent copying text from the display
textDisplay.addEventListener("copy", (e) => {
  e.preventDefault();
});

// Disable pasting into the input field
textInput.addEventListener("paste", (e) => {
  e.preventDefault();
});

// Prevent right-click to copy
textDisplay.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// Prevent right-click to copy
textInput.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// start game
playAgainBtn.addEventListener("click", startGame);
