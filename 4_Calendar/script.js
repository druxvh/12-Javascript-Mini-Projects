const mainDay = document.getElementById("day_el");
const mainDate = document.getElementById("date_el");
const mainMonth = document.getElementById("month_el");
const mainYear = document.getElementById("year_el");
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function whatsToday() {
  const newDate = new Date();
  let currDay = newDate.getDay();
  let currDate = newDate.getDate();
  let currMonth = newDate.getMonth() + 1;
  let currYear = newDate.getFullYear();


  currDate = currDate < 10 ? "0" + currDate : currDate
  currMonth = currMonth < 10 ? "0" + currMonth : currMonth

  mainDay.textContent = weekdays[currDay];
  mainDate.textContent = currDate;
  mainMonth.textContent = currMonth;
  mainYear.textContent = currYear;

  setTimeout(whatsToday, 1000)
}

whatsToday();
