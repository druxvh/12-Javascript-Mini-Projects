const selectText = document.querySelector("textarea");
const copyBtn = document.querySelector("button");
let str = "";
copyBtn.addEventListener("click", () => {
  selectText.select(); // highlights the text
  navigator.clipboard.writeText(selectText.value); // clips the text to clipboard
});
