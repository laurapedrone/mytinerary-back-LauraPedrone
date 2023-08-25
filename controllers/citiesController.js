// import cities from "../cities.js";
import City from "../Models/City.js";

const citiesController = {
  getAllCities: async (request, response, next) => {
    let allCity;
    let error = null;
    let success = true;
    try {
      allCity = await City.find();

      response.json({
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
  
  updateOneCity: async (req, res, next) => {
    const { id } = req.params
    let cities;
    let error = null;
    let success = true;
    try{
      cities = await City.findOneAndUpdate({_id : id}, req.body, {new: true})

      res.json({
        response: cities,
        success,
        error,
      });
    }catch(err){
      success: false;
      error: err;
      next(err);
    }
    // res.send('ok')
  },

  deleteOneCity: async (req, res, next) => {
    const { id } = req.params
    let cities;
    let error = null;
    let success = true;
    try{
      cities = await City.findOneAndDelete({_id : id}, req.body, {new: true})

      res.json({
        response: cities,
        success,
        error,
      });
    }catch(err){
      success: false;
      error: err;
      next(err);
    }
  },

};

export default citiesController;
