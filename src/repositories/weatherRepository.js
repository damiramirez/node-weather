const { default: axios } = require('axios');
const config = require('../config');
const logger = require('../loaders/logger');

class WeatherRepository {
  constructor() {
    this.units = 'metric';
    this.lang = 'es';
    this.pathBase = config.openweather.pathBase;
    this.appid = config.openweather.apikey;
  }

  async weatherByCoordinates(lon, lat) {
    try {
      const instance = axios.create({
        baseURL: `${this.pathBase}`,
        params: {
          units: this.units,
          lang: this.lang,
          appid: this.appid,
          lon,
          lat,
        },
      });

      const response = await instance.get();
      return response.data;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = WeatherRepository;
