import cities from "../cities.js";
import City from "../Models/City.js";

const citiesController = {
  getAllCities: async (request, response, next) => {
    let allCity;
    let error = null;
    let success = true;
    try {
      allCity = await City.find();
    } catch (err) {
      console.log(err);
      success: false;
      error: err;
    }
    response.json({
      response: allCity,
      success,
      error,
    });
  },
  getOneCity: async (request, response, next) => {
    let city;
    let error = null;
    let success = true;
    const { id } = request.params;

    try {
      city = await City.findById(id);
    } catch (err) {
      console.log(err);
      success: false;
      error: err;
    }
    response.json({
      response: city,
      success,
      error,
    });
  },
  createOneCity: async (request, response, next) => {
    console.log(request.body);
    let city;
    let error = null;
    let success = true;
    try {
      city = await City.create(request.body);
      console.log(city);

      //Es lo mismo que esto:
      //const newCity = new City(request.body)
      //await newCity.save()
      //console.log(newCity)
    } catch (err) {
      console.log(err);
      success: false;
      error: err;
    }

    response.json({
      response: city,
      success,
      error,
    });
  },
};

export default citiesController;
