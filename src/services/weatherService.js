const { info } = require('../loaders/logger');
const logger = require('../loaders/logger');
const WeatherRepository = require('../repositories/weatherRepository');

const repository = new WeatherRepository();

const weatherByCoordinates = async (lon, lat) => {
  const weather = await repository.weatherByCoordinates(lon, lat);

  return {
    description: weather.weather[0].description,
    temperature: weather.main.temp,
    temperatureMin: weather.main.temp_min,
    temperatureMax: weather.main.temp_max,
  };
};

module.exports = {
  weatherByCoordinates,
};
