import './styles/reset.css';
import './styles/main.css';
import { getWeatherData } from './modules/weatherManager.js';
import { getLocationData } from './modules/api.js';
import { renderApp } from './modules/domManager.js';

getLocationData('angers').then((response) => console.log(response));
renderApp();
