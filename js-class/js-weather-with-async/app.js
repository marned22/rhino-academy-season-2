// console.log('Weather app!');
// const API_KEY = "f085ee7645428e4c370a7ae7173ba648";

// // https://openweathermap.org/appid

// const cityInput = document.getElementById('city');
// const searchButton = document.getElementById('searchBtn');
// const weatherResult = document.getElementById('weatherResult');

// function fetchWeather(city) {
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

//   fetch(url)
//     .then(response => {
//       console.log('Weather Response: ', response);
//       if (!response.ok) {
//         throw new Error('City not found');
//       }

//       return response.json();
//     })
//     .then(data => {
//       displayWeather(data)
//     })
//     .catch(error => {
//       weatherResult.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
//     })
// }

// const displayWeather = (data) => {
//   const { name, weather, main } = data;
//   weatherResult.innerHTML = `
//     <h2>${name}</h2>
//     <p>${main.temp}°C</p>
//     <p>${weather[0].description}</p>
//   `;
// }

// searchButton.addEventListener('click', () => {
//   const city = cityInput.value.trim();
//   if (city) {
//     fetchWeather(city);
//   } else {
//     weatherResult.innerHTML = `<p style="color: red;">Please enter a city</p>`;
//   }
// });

// Homework:
// 1. Implement same functionality and use async/await instead of promises


console.log('Weather app!');
const API_KEY = "f085ee7645428e4c370a7ae7173ba648";

const cityInput = document.getElementById('city')
const searchButton = document.getElementById('searchBtn')
const weatherResult = document.getElementById('weatherResult')

async function fetchWeather(city) {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    data = response.data
    displayWeather(data);
  } catch (error) {
    weatherResult.innerHTML = `<p style="color: red;">${city} city not found</p>`
  }
}

function displayWeather(data){
  const { name, weather, main } = data
  weatherResult.innerHTML = `
  <h2>${name}</h2>
  <p>${main.temp}°C</p>
  <p>${weather[0].description}</p>
  `
}


searchButton.addEventListener('click',() => {
  const city = cityInput.value.trim()
  if(city) {
    fetchWeather(city)
  } else {
    weatherResult.innerHTML = `<p style="color: red;">Please enter a city</p>`
  }
})
