const express = require('express');
const Success = require('../handlers/successHandler');
const { findCities } = require('../services/cityService');

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

module.exports = {
  cities,
};
