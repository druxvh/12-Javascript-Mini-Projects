const textBox = document.querySelector("#text-box")
let textStr;
console.log(typeof textStr)

textBox.textContent = textStr
localStorage.setItem("Inserted Text", textStr)
