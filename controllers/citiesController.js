// import cities from "../cities.js";
import {City, Itinerary} from "../Models/City.js";

const citiesController = {
  //Traer todas las ciudades
  getAllCities: async (req, res, next) => {
    let allCity;
    let error = null;
    let success = true;
    try {
      allCity = await City.find();

      res.json({
        response: allCity,
        success,
        error,
      });
    } catch (err) {
      // console.log(err);
      success: false;
      error: err;
      next(err);
    }
  },

  //Traer una ciudad por su id
  getOneCity: async (req, res, next) => {
    const { id } = req.params;
    let cities;
    let error = null;
    let success = true;
    try {
      cities = await City.findOne({ _id: id }, req.body, { new: true });

      res.json({
        response: cities,
        success,
        error,
      });
    } catch (err) {
      success: false;
      error: err;
      next(err);
    }
  },

  //Crear una ciudad
  createOneCity: async (req, res, next) => {
    console.log(req.body);
    let city;
    let error = null;
    let success = true;
    try {
      const city = await City.create(req.body);
      console.log(city);

      //Es lo mismo que esto:
      // const city = new City(req.body);
      // await city.save();

      res.json({
        city,
        success,
        error,
      });

    } catch (err) {
      success: false;
      error: err;
      next(err);
    }

  },

  //Crear un nuevo Itinerario
  createOneItinerary: async (req, res, next) => {
    console.log(req.body);
    const {id} = req.params
    let itinerary;
    let error = null;
    let success = true;
    try {
      const itinerary = new Itinerary(req.body);
      await itinerary.save();
      const city = await City.findOneAndUpdate({_id:id},{$push: {itinerary: itinerary._id}},{new: true})
      res.json({
        itinerary,
        city,
        success,
        error,
      });

    } catch (err) {
      success: false;
      error: err;
      next(err);
    }

  },

  updateOneCity: async (req, res, next) => {
    const { id } = req.params;
    let cities;
    let error = null;
    let success = true;
    try {
      cities = await City.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });

      res.json({
        response: cities,
        success,
        error,
      });
    } catch (err) {
      success: false;
      error: err;
      next(err);
    }
    // res.send('ok')
  },

  deleteOneCity: async (req, res, next) => {
    const { id } = req.params;
    let cities;
    let error = null;
    let success = true;
    try {
      cities = await City.findOneAndDelete({ _id: id }, req.body, {
        new: true,
      });

      res.json({
        response: cities,
        success,
        error,
      });
    } catch (err) {
      success: false;
      error: err;
      next(err);
    }
  },
};

export default citiesController;
