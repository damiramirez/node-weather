const express = require('express');
const CityRepository = require('../repositories/cityRepository');

const repository = new CityRepository();

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const cities = async (req, res) => {
  const { city } = req.params;

  res.json(await repository.findCities(city));
};

module.exports = {
  cities,
};
