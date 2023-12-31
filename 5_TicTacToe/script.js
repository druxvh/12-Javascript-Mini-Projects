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

// //reloads the page
// const reload = () => {
//   location.reload();
// };
const newGame = () => {
  player1 = true
  winnerMsgContainer.classList.add("hide");
  gameContainer.classList.remove("hide");
  enableBox()
}
const reset = () => {
  player1 = true
  for(let box of boxes){
    box.textContent = ""
  }
}

const enableBox = () =>{
  for(let box of boxes){
    box.disabled = false
    box.textContent = ""
  }
}
const disableBox = () =>{
  for(let box of boxes){
    box.disabled = true
  }
}

const draw = () =>{
  winnerMsgContainer.classList.remove("hide");
  gameContainer.classList.add("hide");
  winnerMsg.textContent = `DRAW!`;
}
function showWinner(winner) {
  winnerMsgContainer.classList.remove("hide");
  gameContainer.classList.add("hide");
  winnerMsg.textContent = `${winner} Won!`;
  // winnerMsg.textContent = `AYOOO YOU NIGGAAA WONN!`;
}

  //for each box in the boxes container
  boxes.forEach((box) => {
    // Added event listeners on each box
    box.addEventListener("click", () => {
      //Player 1 by default
      if (player1) {
        box.textContent = "O";
        player1 = false;
      } else {
        box.textContent = "X";
        player1 = true;
      }
      //disables each box to prevent overwrite
      box.disable = true

      //check winning possibilties
      checkWinner();
    });
  });


// Winning Possibilities Algorithm
const checkWinner = () => {
  for (let pattern of winnerPatterns) {
    let pos1 = boxes[pattern[0]].textContent;
    let pos2 = boxes[pattern[1]].textContent;
    let pos3 = boxes[pattern[2]].textContent;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {

        switch (true) {
          case (pos1 === "O"):
            showWinner("Player 1");
            break;
          case (pos2 === "X"):
            showWinner("Player 2");
            break;
          default:
            draw()
            break;
        }
        if((pos1 && pos2 && pos3) != winnerPatterns && boxes != ''){
          draw()
        }
        disableBox()
      }
    } 
  } 
};

newGameBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", reset);
