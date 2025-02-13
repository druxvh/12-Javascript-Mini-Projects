const calendar = document.querySelector("#calendar");
const displayMonth = document.querySelector("#monthDisplay");
const backBtn = document.querySelector("#backButton");
const nextBtn = document.querySelector("#nextButton");

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// current month
let curr = 0;

function load() {
  const dt = new Date();

  // sets month
  if (curr !== 0) {
    dt.setMonth(new Date().getMonth() + curr);
  }

  // current date, day, month, year
  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // parses the date into a readable format
  const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);

  displayMonth.innerText = `${dt.toLocaleDateString("en-us", {
    month: "long",
  })} ${year}`;

  // clears the squares on each fn call
  calendar.innerHTML = "";

  // adds the day squares
  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement("div");
    daySquare.classList.add("day");

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;
    } else {
      daySquare.classList.add("padding");
    }

    // change styling for current date
    if (curr == 0 && i === Number(day) + paddingDays) {
      daySquare.classList.add("currentDate");
      daySquare.classList.remove("day");
    }

    calendar.appendChild(daySquare);
  }
}

function handleButtons() {
  nextBtn.addEventListener("click", () => {
    curr++;
    load();
  });
  backBtn.addEventListener("click", () => {
    curr--;
    load();
  });
}

handleButtons();
load();
