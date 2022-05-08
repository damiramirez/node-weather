const express = require('express');
const Success = require('../handlers/successHandler');
const {
  weatherByCoordinates: weatherService,
  weatherByCityId: weatherIdService,
} = require('../services/weatherService');

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

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const weatherByCityId = async (req, res) => {
  const { city, id } = req.params;
  const weather = await weatherIdService(city, id);
  const success = new Success(weather);
  res.json(success);
};

module.exports = {
  weatherByCoordinates,
  weatherByCityId,
};
