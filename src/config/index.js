const dotenv = require('dotenv');

// Veo si esta creado el .env
const envFound = dotenv.config();
if (!envFound) {
  throw new Error('The .env is missing');
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  port: process.env.PORT,
  api: {
    prefix: '/api/v1',
  },
  log: {
    level: process.env.LOG_LEVEL,
  },
  swagger: {
    path: '/api-docs',
  },
  mapbox: {
    apikey: process.env.MAPBOX_API_KEY,
    pathBase: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
  },
  openweather: {
    apikey: process.env.OPENWEATHER_API_KEY,
    pathBase: 'https://api.openweathermap.org/data/2.5/weather',
  },
};
