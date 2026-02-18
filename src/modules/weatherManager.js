import { getLocationData } from './api.js';

export async function getWeatherData(location) {
  try {
    const data = await getLocationData(location);

    const city = data.address;
    const conditions = data.currentConditions.conditions;
    const feelsLike = data.currentConditions.feelslike;
    const humidity = data.currentConditions.humidity;
    const icon = data.currentConditions.icon;
    const temp = data.currentConditions.temp;

    return { city, temp, humidity, feelsLike, conditions, icon };
  } catch (error) {
    console.log(error);
  }
}
