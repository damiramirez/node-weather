const { default: axios } = require('axios');
const config = require('../config');
const logger = require('../loaders/logger');

class CityRepository {
  constructor() {
    this.limit = 10;
    this.language = 'es';
    this.pathBase = config.mapbox.pathBase;
    this.apiKey = config.mapbox.apikey;
  }

  async findCities(city) {
    try {
      const instance = axios.create({
        baseURL: `${this.pathBase}${city}.json`,
        params: {
          limit: this.limit,
          language: this.language,
          access_token: this.apiKey,
        },
      });

      const response = await instance.get();
      return response.data;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = CityRepository;
