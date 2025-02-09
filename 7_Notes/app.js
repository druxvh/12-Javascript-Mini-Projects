const textBox = document.querySelector("#text-box")
const saveBtn = document.querySelector(".saveText")
const clearBtn = document.querySelector(".clearText")
const savedText = localStorage.getItem("text-Saved")
let textStr = "";

function textNode() {
    textStr = textBox.value
    localStorage.setItem("text-Saved", textStr)

}

saveBtn.addEventListener("click", textNode)

clearBtn.addEventListener("click", () => {
    localStorage.clear()
    textBox.value = ""

})

if (savedText) {
    textBox.value = savedText
}