const boxes = document.querySelectorAll(".box");
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

boxes.forEach((box) => {
  //for each box in the boxes container
  box.addEventListener("click", () => {
    // Added event listeners on each box
    //Player 1 by default
    if (player1) {
      box.textContent = "O";
      player1 = false;
    } else {
      box.textContent = "X";
      player1 = true;
    }
    //disables each box to prevent overwrite
    box.disabled = true;

    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winnerPatterns) {
    let pos1 = boxes[pattern[0]].textContent;
    let pos2 = boxes[pattern[1]].textContent;
    let pos3 = boxes[pattern[2]].textContent;
    if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
            alert("Game Finished")
        }
    }
  }
};
