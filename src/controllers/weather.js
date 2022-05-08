const express = require('express');
const Success = require('../handlers/successHandler');
const { findCities } = require('../services/cityService');
const {
  weatherByCoordinates: weatherService,
} = require('../services/weatherService');

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const cities = async (req, res) => {
  const { city } = req.params;
  const cities = await findCities(city);
  const success = new Success(cities);
  res.json(success);
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const weatherByCoordinates = async (req, res) => {
  const { lon, lat } = req.query;
  const weather = await weatherService(lon, lat);
  const success = new Success(weather);
  res.json(success);
};

module.exports = {
  cities,
  weatherByCoordinates,
};
