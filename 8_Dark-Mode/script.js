const mode = document.querySelector("button")
const article = document.querySelector("article")
const paragraphs = document.querySelectorAll("p")
const heading = document.querySelector("h1")
const aside = document.querySelector("aside")
let defaultMode;

let darkmode = () => {
    mode.textContent = "Dark Mode"
    mode.style.backgroundColor = "#f1f1f1"
    mode.style.color = "#111111"
    paragraphs.forEach((para) => {
        para.style.color = "#f1f1f1"
    })
    heading.style.color = "#f1f1f1"
    document.body.style.backgroundColor = "#191919"
    article.style.backgroundColor = "#202020"
    aside.style.backgroundColor = "#202020"
    defaultMode = false
}
let lightmode = () => {
    mode.textContent = "Light Mode"
    mode.style.backgroundColor = "#111111"
    mode.style.color = "#f1f1f1"
    paragraphs.forEach((para) => {
        para.style.color = "#111111"
    })
    heading.style.color = "#111111"
    document.body.style.backgroundColor = "#fff"
    article.style.backgroundColor = "#dddddd"
    aside.style.backgroundColor = "#fbfea5"
    defaultMode = true
}
lightmode()

mode.addEventListener("click", () => {
    if (defaultMode) {
        darkmode()
        defaultMode = false
    } else {
        lightmode()
    }
})
