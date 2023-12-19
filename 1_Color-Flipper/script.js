const submitBtn = document.querySelector(".submit-btn");
const rgbVal = document.querySelector(".rgb-val");
const body = document.body;

submitBtn.addEventListener("click", () => {
  // let bgColor = document.body.style.backgroundColor = "pink"
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const rgb = `rgb(${red},${blue},${green})`;
  body.style.backgroundColor = `rgb(${red},${blue},${green})`;
  rgbVal.textContent = rgb;
});
