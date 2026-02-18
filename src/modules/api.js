const key = '2HT37AJJJDTH6J6SZ4WCTJT4Y';

export async function getLocationData(location) {
  try {
    const response = await fetch(
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' +
        location +
        '?key=' +
        key,
    );
    if (!response.ok) {
      throw new Error('City not found');
    }
    const locationResponse = await response.json();
    return locationResponse;
  } catch (error) {
    console.log(error);
  }
}
