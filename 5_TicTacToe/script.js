const boxes = document.querySelectorAll(".box")
let player1 = true

const winnerPaterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
    console.log(boxes)
    console.log(winnerPaterns)


const checkWinner = ()=>{
    for (let pattern in winnerPaterns) {
        console.log(pattern[0])
    }
}


boxes.forEach((box)=>{                           //loops on each box
    box.addEventListener("click", ()=>{
        if(player1){                             //player1 === true
            box.textContent = "O"
            player1 = false
        } else{
            box.textContent = "X"
            player1 = true
        }
        box = box.ariaDisabled                   // disables the box after used once
        checkWinner()
    })
})