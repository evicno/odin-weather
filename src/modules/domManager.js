import { getWeatherData } from './weatherManager.js';
import unknownIcon from '../icons/unknown.svg';

const weatherCard = document.querySelector('.weather');

export const renderApp = () => {
  const form = document.querySelector('form');
  const input = document.querySelector('#location');
  const button = document.querySelector('button');

  // Reset the form and display
  weatherCard.style.display = 'none';
  form.reset();

  form.addEventListener('submit', (event) => {
    weatherCard.style.display = 'none';
    event.preventDefault();
    button.disabled = true;
    const location = input.value.trim();
    const message = document.querySelector('.message');
    message.textContent = '';

    getWeatherData(location)
      .then((weatherData) => {
        renderWeather(weatherData);
        button.disabled = false;
      })
      .catch((error) => {
        console.log(error);
        message.textContent = 'Location not found. Please try again!';
        weatherCard.style.display = 'none';
        button.disabled = false;
      });
  });
};

function renderWeather(weather) {
  const city = document.querySelector('.city');
  const conditions = document.querySelector('.conditions');
  const icon = document.querySelector('.icon img');
  const temperature = document.querySelector('.temperature');
  const feelsLike = document.querySelector('.feels-like');
  const humidity = document.querySelector('.humidity');

  weatherCard.style.display = 'flex';
  city.textContent = capitalizeCity(weather.city);
  conditions.textContent = weather.conditions;

  // Get icon
  console.log(weather.icon);
  const weatherIcon = weather.icon;
  import(`../icons/${weatherIcon}.svg`)
    .then((ic) => (icon.src = ic.default))
    .catch(() => (icon.src = unknownIcon));

  temperature.textContent = weather.temp + ' °F';

  feelsLike.textContent = 'Feels like ' + weather.feelsLike + ' °F';

  humidity.textContent = 'Humidity: ' + weather.humidity + ' %';
}

function capitalizeCity(city) {
  const words = city.split(' ');
  return words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ');
}
