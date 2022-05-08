const express = require('express');
const { findCities } = require('../services/cityService');
const Success = require('../handlers/successHandler');

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const cities = async (req, res) => {
  const { city } = req.params;
  const success = new Success(await findCities(city));

  res.json(success);
};

module.exports = {
  cities,
};
