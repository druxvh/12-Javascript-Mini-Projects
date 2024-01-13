const apiKey = `bf8d39094fc4325312efa3d5ea3da8b8`;
const cityName = `jammu`;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
const stateName = document.querySelector(".state-name");
const tempNow = document.querySelector(".temp");
const feelsLike = document.querySelector(".feels-like");
const humidityData = document.querySelector(".humidity-data");
const weatherData = document.querySelector(".weather-data");
const icon = document.querySelector("img");
const windData = document.querySelector(".wind-data");
console.log(url);

async function weatherTest() {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  stateName.textContent = `${data.name}`;
  tempNow.textContent = `${data.main.temp}° C`;
  feelsLike.textContent = `${data.main.feels_like}° C`;
  humidityData.textContent = `${data.main.humidity}%`;
  weatherData.textContent = `${data.weather[0].main}`;
  windData.textContent = `${data.wind.speed} km/h`;
  icon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  );
}
weatherTest();
