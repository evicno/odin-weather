import { getWeatherData } from './weatherManager.js';

const weatherCard = document.querySelector('.weather');

export const renderApp = () => {
  const form = document.querySelector('form');
  const input = document.querySelector('#location');
  // Reset the form and display
  weatherCard.style.display = 'none';
  form.reset();

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const location = input.value.trim();

    getWeatherData(location)
      .then((weatherData) => {
        renderWeather(weatherData);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

function renderWeather(weather) {
  const city = document.querySelector('.city');
  const conditions = document.querySelector('.conditions');
  //   const time = document.querySelector('.time');
  const temperature = document.querySelector('.temperature');
  const feelsLike = document.querySelector('.feels-like');
  const humidity = document.querySelector('.humidity');
  //   const precipitation = document.querySelector('.precipitation');

  weatherCard.style.display = 'flex';
  city.textContent = capitalizeCity(weather.city);
  conditions.textContent = weather.conditions;
  temperature.textContent = weather.temp + ' °F';
  feelsLike.textContent = 'Feels like ' + weather.feelsLike + ' °F';
  humidity.textContent = 'Humidity: ' + weather.humidity + ' %';
  //   precipitation.textContent
}

function capitalizeCity(city) {
  const words = city.split(' ');
  return words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ');
}
