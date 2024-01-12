const apiKey = `bf8d39094fc4325312efa3d5ea3da8b8`;
const cityName = `jammu`;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
const stateName = document.querySelector(".state-name");
const tempNow = document.querySelector(".temp");
const feelsLike = document.querySelector(".feels-like");
const humidityData = document.querySelector(".humidity-data");
const weatherData = document.querySelector(".weather-data");
const windData = document.querySelector(".wind-data");
console.log(url);

async function weatherTest() {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  stateName.textContent = `${data.name}`;
  tempNow.textContent = `Temperate in Jammu Right Now : ${data.main.temp}`;
  feelsLike.textContent = `Feels like : ${data.main.feels_like}`;
  humidityData.textContent = `Humidity : ${data.main.humidity}%`;
  weatherData.textContent = `Weather : ${data.weather[0].main}`;
  windData.textContent = `Wind : ${data.wind.speed} km/h`;
}
weatherTest();
