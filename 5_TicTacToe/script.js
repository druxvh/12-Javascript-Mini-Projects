const boxes = document.querySelectorAll(".box");
const winnerMsgContainer = document.querySelector(".msg-container");
const gameContainer = document.querySelector(".game-container");
const winnerMsg = document.querySelector("#msg");
const resetBtn = document.querySelector("#reset-btn");
const newGameBtn = document.querySelector("#new-game");

let player1 = true;

const winnerPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// on reset game btn click
const reset = () => {
  player1 = true;
  winnerMsgContainer.classList.add("hide");
  gameContainer.classList.remove("hide");

  for (let box of boxes) {
    box.textContent = "";
    box.disabled = false;
  }
};

// on new game btn click
const newGame = () => {
  reset();
};

// to disable all the boxes
const disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

// to draw
const draw = () => {
  winnerMsgContainer.classList.remove("hide");
  gameContainer.classList.add("hide");
  winnerMsg.textContent = `DRAW!`;
};

// to show winner
const showWinner = (winner) => {
  winnerMsgContainer.classList.remove("hide");
  gameContainer.classList.add("hide");
  winnerMsg.textContent = `${winner} Won!`;
};

//for each box in the boxes container
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.textContent !== "") return;

    // //Player 1 by default
    box.textContent = player1 ? "O" : "X";
    player1 = !player1;

    //check winning possibilties
    checkWinner();
  });
});

// Winning Possibilities Algorithm
const checkWinner = () => {
  // each winning pattern
  for (let pattern of winnerPatterns) {
    let [a, b, c] = pattern; // 0th, 1st, 2nd index of each winning pattern array

    // accessing the text from the index
    let pos1 = boxes[a].textContent;
    let pos2 = boxes[b].textContent;
    let pos3 = boxes[c].textContent;

    if (pos1 && pos1 === pos2 && pos2 === pos3) {
      showWinner(pos1 === "O" ? "Player 1" : "Player 2");
      disableBox();
      return;
    }
  }

  // draw check
  if ([...boxes].every((box) => box.textContent !== "")) {
    draw();
  }
};

newGameBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", reset);
