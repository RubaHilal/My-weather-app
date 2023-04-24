let currentDate = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[currentDate.getDay()];
let hour = currentDate.getHours();
let minutes = currentDate.getMinutes();
let now = document.querySelector("#currentTime");
let nowAddedCity = document.querySelector("#added-city");
now.innerHTML = `${day}, ${hour}: ${minutes}`;
nowAddedCity.innerHTML = `${day}, ${hour}: ${minutes}`;
function searchCities(event) {
	event.preventDefault();
	let searchInput = document.querySelector("#search-text-input");
	let citySearch = document.querySelector("#city");
	citySearch.innerHTML = `${searchInput.value}`;
}

let signUpForm = document.querySelector("#search-form");
signUpForm.addEventListener("submit", searchCities);

function convertWeather(event) {
	event.preventDefault();
	event.preventDefault();
	let fahrenheit = Math.round(8 * (9 / 5) + 32);
	weatherConverter.innerHTMAL = `${fahrenheit}F`;
	let convertedTemp = document.addEventListener("click");
	convertedTemp.innerHTML = `8°C `;
}

let weatherConverter = document.querySelector("#celsius");
weatherConverter.addEventListener("click", convertWeather);

function searchedCity(responseSearch) {
	let apiKey = "0df4d3e847b64a8832063c084ffc9e7f";
	let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${responseSearch.coords.latitude}&lon=${responseSearch.coords.longitude}&appid=${apiKey}&units=metric`;
	axios.get(`${apiURL}&appid=${apiKey}`).then(displaySeacrhedCityWeather);
}

navigator.geolocation.getCurrentPosition(searchedCity);
function displaySeacrhedCityWeather(responsed) {
	let weatherTemp = document.querySelector("#searched-city-temp");
	let temp = Math.round(responsed.data.main.temp);
	let speed = Math.round(responsed.data.wind.speed);
	weatherTemp.innerHTML = `${temp}°C wind: ${speed}`;
}
function showPosition(position) {
	console.log(position);
	let apiKey = "0df4d3e847b64a8832063c084ffc9e7f";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
	axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeather);
}

function getCurrentPosition() {
	navigator.geolocation.getCurrentPosition(showPosition);
}
function displayWeather(response) {
	console.log(response.data);
	let weatherValue = document.querySelector("#currentCity");
	let temperature = Math.round(response.data.main.temp);
	weatherValue.innerHTML = `It is ${temperature} degrees, in ${response.data.name}`;
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
