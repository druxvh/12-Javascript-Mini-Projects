const emailValue = document.querySelector("#email");
const password = document.querySelector("#pwd");
const charLength = document.querySelector("#char-length");
const numberEl = document.querySelector("#number");
const lowercaseEl = document.querySelector("#lowercase");
const uppercaseEl = document.querySelector("#uppercase");
const spChar = document.querySelector("#character");
const submitBtn = document.querySelector("button");
let [charLen, isNum, isLowercased, isUppercased, isSplChar] = [
  false,
  false,
  false,
  false,
  false,
];

password.addEventListener("keyup", () => {
  const numRe = /[0-9]/g;
  if (password.value.match(numRe)) {
    numberEl.classList.remove("invalid");
    numberEl.classList.add("valid");
    isNum = true;
  } else {
    numberEl.classList.add("invalid");
    numberEl.classList.remove("valid");
  }

  const lowercaseRe = /[a-z]/g;
  if (password.value.match(lowercaseRe)) {
    lowercaseEl.classList.remove("invalid");
    lowercaseEl.classList.add("valid");
    isLowercased = true;
  } else {
    lowercaseEl.classList.add("invalid");
    lowercaseEl.classList.remove("valid");
  }
  const uppercaseRe = /[A-Z]/g;
  if (password.value.match(uppercaseRe)) {
    uppercaseEl.classList.remove("invalid");
    uppercaseEl.classList.add("valid");
    isUppercased = true;
  } else {
    uppercaseEl.classList.add("invalid");
    uppercaseEl.classList.remove("valid");
  }

  const spCharRe = /[^A-Za-z0-9]/g;
  if (password.value.match(spCharRe)) {
    spChar.classList.remove("invalid");
    spChar.classList.add("valid");
    isSplChar = true;
  } else {
    spChar.classList.add("invalid");
    spChar.classList.remove("valid");
  }
  if (password.value.length >= 8) {
    charLength.classList.remove("invalid");
    charLength.classList.add("valid");
    charLen = true;
  } else {
    charLength.classList.add("invalid");
    charLength.classList.remove("valid");
  }
});
submitBtn.addEventListener("click", () => {
  if (
    charLen &&
    isNum &&
    isLowercased &&
    isUppercased &&
    isSplChar &&
    emailValue.value.length >= 8
  ) {
    alert("Submitted");
  } else if (password.value.length == 0 || emailValue.value.length == 0) {
    alert("Enter the required field");
  } else {
    alert("Make sure you entering every detail correctly");
  }
});
