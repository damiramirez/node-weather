const CityRepository = require('../repositories/cityRepository');

const repository = new CityRepository();

const findCities = async (city) => {
  const cities = await repository.findCities(city);

  return cities.features.map((city) => {
    return {
      id: city.id,
      name: city.place_name,
      log: city.geometry.coordinates[0],
      lat: city.geometry.coordinates[1],
    };
  });
};

module.exports = {
  findCities,
};
