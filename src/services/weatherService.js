const { info } = require('../loaders/logger');
const logger = require('../loaders/logger');
const WeatherRepository = require('../repositories/weatherRepository');
const CityRepository = require('../repositories/cityRepository');

const weatherRepository = new WeatherRepository();
const cityRepository = new CityRepository();

const weatherByCoordinates = async (lon, lat) => {
  const weather = await weatherRepository.weatherByCoordinates(lon, lat);

  return {
    description: weather.weather[0].description,
    temperature: weather.main.temp,
    temperatureMin: weather.main.temp_min,
    temperatureMax: weather.main.temp_max,
  };
};

const weatherByCityId = async (city, id) => {
  const cities = await cityRepository.findCities(city);
  const searchedCity = cities.features.find((city) => city.id === id);
  const lon = searchedCity.geometry.coordinates[0];
  const lat = searchedCity.geometry.coordinates[1];
  return await weatherByCoordinates(lon, lat);
};

module.exports = {
  weatherByCoordinates,
  weatherByCityId,
};
