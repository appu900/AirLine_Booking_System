const {City} = require("../models/index")

class CityRepository {

  // purpose : create a new city
  static async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      // throw { error };
      console.log(error)
      return;
    }
  }

  // purpose : delete a city

  static async deleteCity(cityId) {
    try {
      const city = await City.destroy({
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      // throw { error };
      console.log(error);
      return;
    }
  }
}

module.exports = CityRepository;
