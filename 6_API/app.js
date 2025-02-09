const jokeBtn = document.getElementById("joke-btn")
const jokeText = document.getElementById("joke-text")

const url = "https://v2.jokeapi.dev/joke/Any"

const generateJoke = async () => {
    try {
        let response = await fetch(url)
        let data = await response.json()
        jokeText.textContent = data.joke
        if (data.joke) {
            jokeText.textContent = data.joke
        } else if (data.setup) {
            jokeText.innerHTML = `${data.setup} <br />  <br /> ${data.delivery}`
        }
        console.log(data)


    } catch (error) {
        console.error(error)
    }

}
jokeBtn.addEventListener("click", generateJoke)

